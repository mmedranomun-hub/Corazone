// Generador procedural de curvas de presión hemodinámica (mmHg) en SVG.
// Modelo por latido: cada ciclo ventricular tiene fases fijas (contracción isovolumétrica,
// eyección, relajación isovolumétrica) y una diástole que se estira con el RR.
// Las ondas auriculares (a, c, v, descensos x e y) se suman como gaussianas en tiempo absoluto.
// Puro, sin DOM → testeable en Node.

const DT = 0.005; // s entre muestras

// Fases dentro de un latido (s, relativas al inicio del QRS)
const TS = 0.05; // inicio de la contracción isovolumétrica (cierre AV)
const TO = 0.1; // apertura de la válvula semilunar
const TC = 0.37; // cierre de la semilunar (incisura)
const TR = 0.44; // apertura de la válvula AV (fin de la relajación isovolumétrica)
const A_OFF = -0.07; // pico de la contracción auricular respecto al QRS

const gauss = (t, a, mu, s) => a * Math.exp(-((t - mu) ** 2) / (2 * s * s));
const agauss = (t, a, mu, sl, sr) => gauss(t, a, mu, t < mu ? sl : sr);
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const smooth = (x) => { const u = clamp01(x); return u * u * (3 - 2 * u); };
const hermite = (u, p0, p1, m0, m1) => {
  const u2 = u * u, u3 = u2 * u;
  return (2 * u3 - 3 * u2 + 1) * p0 + (u3 - 2 * u2 + u) * m0 + (-2 * u3 + 3 * u2) * p1 + (u3 - u2) * m1;
};

// Inicios de latido: RR regular o lista de RR (se repite).
function beatStarts(rr, seconds, first = 0.3) {
  const list = Array.isArray(rr) ? rr : [rr];
  const out = [];
  let t = first;
  let i = 0;
  // latidos previos para cubrir el inicio del registro
  for (let k = 0; k < 2; k++) t -= list[(list.length - 1 - k + list.length * 4) % list.length];
  while (t < seconds + 1.5) { out.push(t); t += list[i++ % list.length]; }
  return out;
}

function beatAt(starts, t) {
  let k = 0;
  while (k < starts.length - 2 && starts[k + 1] <= t) k++;
  return { k, tau: t - starts[k], rr: starts[k + 1] - starts[k], rrPrev: k > 0 ? starts[k] - starts[k - 1] : starts[k + 1] - starts[k] };
}

// ---------- Corazón "arterial": ventrículo + gran arteria (VI/Ao o VD/AP) ----------
// o: { pdia, psys, pclose, notch, peakAt, grad, gradPow, pmin, pdi, tauFill, fillSlope, aKick, atrial }
function arterial(o, tau, rrPrev) {
  if (tau >= TO && tau <= TC) {
    const u = (tau - TO) / (TC - TO);
    const q = Math.log(0.5) / Math.log(o.peakAt ?? 0.35);
    const lin = (x) => o.pdia + (o.pclose - o.pdia) * x;
    const amp = o.psys - lin(o.peakAt ?? 0.35);
    return lin(u) + amp * Math.sin(Math.PI * u ** q);
  }
  // diástole: caída exponencial desde la incisura hasta la siguiente apertura
  const x = tau > TC ? tau - TC : tau + rrPrev - TC;
  const L = (tau > TC ? null : rrPrev - TC + TO) ?? (o._rr - TC + TO);
  const k = o.runoff ?? 0.9;
  const e = (s) => Math.exp(-s / k);
  return o.pdia + (o.pclose - o.pdia) * (e(x) - e(L)) / (1 - e(L));
}

function notchAt(o, t, starts) {
  if (!o.notch) return 0;
  let v = 0;
  for (const s of starts) {
    const tc = s + TC;
    if (Math.abs(t - tc) > 0.2) continue;
    v += gauss(t, -o.notch, tc + 0.012, 0.009) + gauss(t, o.notch * 0.55, tc + 0.04, 0.018);
  }
  return v;
}

function atrialTimes(o, starts) {
  if (o.atrialRR) {
    const out = [];
    for (let t = (o.atrialFirst ?? 0.1) - 2; t < starts.at(-1); t += o.atrialRR) out.push(t);
    return out;
  }
  return o.noA ? [] : starts.map((s) => s + A_OFF);
}

function ventDiastole(o, t, starts, k, x) {
  // x = tiempo desde la apertura AV
  let v = o.pmin + (o.pdi - o.pmin) * (1 - Math.exp(-x / (o.tauFill ?? 0.05))) + (o.fillSlope ?? 0) * x;
  if (o.aKick) for (const ta of atrialTimes(o, starts)) v += gauss(t, o.aKick, ta + 0.01, 0.035);
  return v;
}

function ventricle(o, t, starts) {
  const { k, tau, rr, rrPrev } = beatAt(starts, t);
  const art = (tt) => {
    const b = beatAt(starts, tt);
    const u = clamp01((b.tau - TO) / (TC - TO));
    // grad: gradiente transvalvular; hang: el ventrículo cae por debajo de la arteria al final de la eyección
    return arterial({ ...o, _rr: b.rr }, b.tau, b.rrPrev) + (o.grad ?? 0) * Math.sin(Math.PI * u) ** (o.gradPow ?? 1) - (o.hang ?? 0) * smooth((u - 0.3) / 0.7) ** 1.5;
  };
  const s = starts[k];
  if (tau >= TO && tau <= TC) return art(t);
  if (tau > TS && tau < TO) {
    const p0 = ventDiastole(o, s + TS, starts, k, s + TS - (starts[k - 1] + TR));
    const h = 0.002;
    const p1 = art(s + TO);
    // pendiente limitada para que la curva de Hermite sea monótona (sin muesca previa al ascenso)
    const m1 = Math.min(((art(s + TO + h) - p1) / h) * (TO - TS), 2.8 * (p1 - p0));
    return hermite((tau - TS) / (TO - TS), p0, p1, 0, m1);
  }
  if (tau > TC && tau < TR) {
    const h = 0.002;
    const p0 = art(s + TC);
    const m0 = ((art(s + TC) - art(s + TC - h)) / h) * (TR - TC);
    const v = hermite((tau - TC) / (TR - TC), p0, o.pmin, m0, 0);
    return Math.max(v, o.pmin - 1);
  }
  const x = tau >= TR ? tau - TR : tau + rrPrev - TR;
  return ventDiastole(o, t, starts, k, x);
}

function artery(o, t, starts) {
  const { tau, rr, rrPrev } = beatAt(starts, t);
  return arterial({ ...o, _rr: rr }, tau, rrPrev) + notchAt(o, t, starts);
}

// ---------- Aurículas: AD / PCP ----------
// o: { base, a, c, v, x, y, delay, damp, cannon, atrialRR, noA, vWide }
function atrium(o, t, starts) {
  const d = o.delay ?? 0;
  const w = o.damp ?? 1;
  let p = o.base;
  for (const ta of atrialTimes(o, starts)) {
    let amp = o.a;
    if (o.cannon) {
      // ¿la aurícula se contrae con la válvula AV cerrada (sístole ventricular)?
      const b = beatAt(starts, ta + 0.02);
      if (b.tau > TS - 0.02 && b.tau < TR - 0.04) amp *= o.cannon;
    }
    p += gauss(t, amp, ta + d, 0.035 * w);
  }
  for (const s of starts) {
    if (Math.abs(t - s) > 1.2) continue;
    if (o.c) p += gauss(t, o.c, s + 0.085 + d, 0.016 * w);
    if (o.x) p += gauss(t, -o.x, s + 0.2 + d, 0.06 * w);
    if (o.v) p += agauss(t, o.v, s + TR - 0.03 + d, (o.vWide ?? 0.09) * w, 0.04 * w);
    if (o.y) p += gauss(t, -o.y, s + TR + 0.08 + d, 0.045 * w);
  }
  return p;
}

// ---------- Moduladores (latido a latido y respiración) ----------
// Ganancia por latido: 1 en diástole; durante la sístole de cada latido vale gainOf(rrPrevio, rrSiguiente).
// Ventana sistólica con bordes suaves → sin saltos entre latidos.
function beatGain(t, starts, gainOf) {
  for (let k = 1; k < starts.length - 1; k++) {
    const x = t - starts[k];
    if (x < 0 || x > 0.5) continue;
    const gk = gainOf(starts[k] - starts[k - 1], starts[k + 1] - starts[k]);
    return 1 + (gk - 1) * smooth((x - 0.03) / 0.07) * (1 - smooth((x - 0.4) / 0.1));
  }
  return 1;
}
// Inspiración: 0 (espiración) → 1 (fin de inspiración), ciclo de `period` s
const insp = (t, period = 4, phase = 0.4) => (1 - Math.cos((2 * Math.PI * (t - phase)) / period)) / 2;
// Escala sólo la parte de la curva por encima de `floor` (respeta la diástole)
const above = (v, floor, f) => (v > floor ? v + (v - floor) * f : v);

// ---------- Parámetros fisiológicos ----------
const LV = { pdia: 80, psys: 120, pclose: 100, peakAt: 0.35, grad: 3, hang: 16, pmin: 3, pdi: 7, tauFill: 0.04, fillSlope: 2, aKick: 4, runoff: 0.9 };
const AO = { ...LV, hang: 0, notch: 6 };
const RV = { pdia: 10, psys: 24, pclose: 18, peakAt: 0.35, grad: 2, hang: 3.5, pmin: 1, pdi: 3.5, tauFill: 0.04, fillSlope: 1.5, aKick: 2.5, runoff: 0.6 };
const PA = { ...RV, hang: 0, notch: 2.2 };
const RA = { base: 4, a: 4, c: 1.6, x: 2, v: 3.6, y: 2.2 };
const PCWP = { base: 9, a: 5, x: 2.4, v: 6, y: 3.2, delay: 0.07, damp: 1.4 };

const sec = 2.4;
const one = (label, fn, blur = 0) => ({ label, fn, blur });
const VENT_BLUR = 3; // suavizado (muestras) que redondea los hombros de las curvas ventriculares

// Media móvil centrada (2 pasadas ≈ ventana triangular)
function blurPoints(points, hw) {
  let p = points.map((q) => q.p);
  for (let pass = 0; pass < 2; pass++) {
    p = p.map((_, i) => {
      let s = 0, n = 0;
      for (let j = Math.max(0, i - hw); j <= Math.min(p.length - 1, i + hw); j++) { s += p[j]; n++; }
      return s / n;
    });
  }
  return points.map((q, i) => ({ t: q.t, p: p[i] }));
}

export const PRESSURES = {
  ra: {
    name: 'Aurícula derecha normal',
    desc: 'Media 2–6 mmHg. Onda a (contracción auricular), c (cierre/abombamiento tricuspídeo), descenso x (relajación auricular), onda v (llenado con la tricúspide cerrada) y descenso y (apertura tricuspídea).',
    traces: [one('AD', (t, s) => atrium(RA, t, s))],
  },
  rv: {
    name: 'Ventrículo derecho normal',
    desc: 'Presión ≈ 25/5 mmHg: sístole en meseta redondeada y diástole baja que asciende hasta la telediastólica tras la onda a.',
    traces: [one('VD', (t, s) => ventricle(RV, t, s), VENT_BLUR)],
  },
  pa: {
    name: 'Arteria pulmonar normal',
    desc: 'Presión ≈ 25/10 mmHg (media 10–20). La diastólica se mantiene por encima de la del VD y la incisura marca el cierre pulmonar.',
    traces: [one('AP', (t, s) => artery(PA, t, s))],
  },
  pcwp: {
    name: 'Presión capilar pulmonar normal',
    desc: 'Enclavamiento: media 6–12 mmHg. Refleja la AI con retraso y amortiguación: ondas a y v de amplitud similar, sin onda c visible.',
    traces: [one('PCP', (t, s) => atrium(PCWP, t, s))],
  },
  lv: {
    name: 'Ventrículo izquierdo normal',
    desc: 'Presión ≈ 120/10 mmHg. Ascenso rápido (dP/dt), meseta sistólica, caída en la relajación isovolumétrica y telediastólica tras la onda a.',
    traces: [one('VI', (t, s) => ventricle(LV, t, s), VENT_BLUR)],
  },
  ao: {
    name: 'Aorta normal',
    desc: 'Presión ≈ 120/80 mmHg. Ascenso rápido, pico sistólico e incisura dícrota por el cierre de la válvula aórtica, seguida de caída diastólica lenta.',
    traces: [one('Ao', (t, s) => artery(AO, t, s))],
  },
  'pcwp-v': {
    name: 'Ondas v gigantes (insuficiencia mitral grave)',
    desc: 'La regurgitación sistólica hacia una AI poco distensible genera ondas v altas y precoces (> 2 veces la media) con descenso y rápido.',
    traces: [one('PCP', (t, s) => atrium({ ...PCWP, base: 13, a: 5, x: 0, v: 25, vWide: 0.12, y: 5 }, t, s))],
  },
  'ra-cannon': {
    name: 'Ondas a en cañón (disociación AV)',
    desc: 'Cuando la aurícula se contrae con la tricúspide cerrada (BAV completo, TV) aparecen ondas a gigantes e irregulares.',
    traces: [one('AD', (t, s) => atrium({ ...RA, atrialRR: 0.58, atrialFirst: 0.12, cannon: 3.6 }, t, s))],
    rr: 1.0,
  },
  'ra-af': {
    name: 'Fibrilación auricular (sin onda a)',
    desc: 'Sin contracción auricular organizada desaparecen la onda a y el descenso x; queda una onda c-v y el RR es irregular.',
    traces: [one('AD', (t, s) => atrium({ ...RA, noA: true, x: 0.6, v: 4.6, c: 1.4, base: 4 }, t, s))],
    rr: [0.68, 0.94, 0.6, 0.82, 0.72],
  },
  'rv-dip': {
    name: 'Dip-plateau o "raíz cuadrada"',
    desc: 'Caída protodiastólica brusca seguida de meseta elevada: llenado rápido que se detiene en un ventrículo rígido (constricción pericárdica, restricción). Telediastólica > 1/3 de la sistólica.',
    traces: [one('VD', (t, s) => ventricle({ ...RV, pdia: 18, psys: 33, pclose: 26, pmin: 0, pdi: 16, tauFill: 0.022, fillSlope: 0, aKick: 0.8 }, t, s), VENT_BLUR)],
  },
  'as-lv-ao': {
    name: 'Estenosis aórtica: VI y aorta simultáneas',
    desc: 'Gradiente sistólico entre VI y aorta; la curva aórtica tiene ascenso lento y pico tardío (parvus et tardus). El gradiente medio ≥ 40 mmHg indica estenosis grave.',
    traces: [
      one('VI', (t, s) => ventricle({ ...LV, pdia: 72, psys: 112, pclose: 96, peakAt: 0.55, grad: 72, gradPow: 1, pmin: 6, pdi: 14, aKick: 7, fillSlope: 3 }, t, s), VENT_BLUR),
      one('Ao', (t, s) => artery({ ...AO, pdia: 72, psys: 112, pclose: 96, peakAt: 0.55, notch: 2.5 }, t, s)),
    ],
  },
  'pullback-pa-pcwp': {
    name: 'Enclavamiento: de AP a PCP',
    desc: 'Al inflar el balón la curva pasa de arterial pulmonar (sístole, diastólica e incisura) a la de enclavamiento (ondas a y v, presión media menor que la diastólica de AP).',
    traces: [one('AP → PCP', (t, s) => {
      const w = smooth((t - 1.6) / 0.16);
      return (1 - w) * artery(PA, t, s) + w * atrium({ ...PCWP, base: 7 }, t, s);
    })],
    seconds: 3.2,
  },
  'ms-lv-la': {
    name: 'Estenosis mitral: VI y AI simultáneas',
    desc: 'Gradiente diastólico entre la aurícula izquierda (onda a alta, descenso y lento) y el VI, cuyo llenado es lento. Gradiente medio > 10 mmHg = estenosis grave; aumenta con la taquicardia.',
    traces: [
      one('VI', (t, s) => ventricle({ ...LV, pdia: 74, psys: 112, pclose: 94, pmin: 3, pdi: 9, tauFill: 0.16, fillSlope: 2, aKick: 3 }, t, s), VENT_BLUR),
      one('AI', (t, s) => atrium({ base: 24, a: 9, c: 1.5, x: 3, v: 8, y: 2.2, vWide: 0.1, damp: 1.6 }, t, s)),
    ],
  },
  'ar-ao-lv': {
    name: 'Insuficiencia aórtica: aorta y VI',
    desc: 'Presión de pulso amplia (≈ 160/45) con caída diastólica rápida de la aorta y telediastólica del VI elevada que asciende durante la diástole. En la IA aguda grave ambas presiones casi se igualan al final de la diástole.',
    traces: [
      one('Ao', (t, s) => artery({ ...AO, pdia: 46, psys: 160, pclose: 112, peakAt: 0.3, notch: 3, runoff: 0.3 }, t, s)),
      one('VI', (t, s) => ventricle({ ...LV, pdia: 46, psys: 160, pclose: 112, peakAt: 0.3, grad: 4, hang: 22, pmin: 8, pdi: 12, tauFill: 0.04, fillSlope: 26, aKick: 3, runoff: 0.3 }, t, s), VENT_BLUR),
    ],
  },
  'hcm-brockenbrough': {
    name: 'MCH obstructiva: signo de Brockenbrough',
    desc: 'Tras una extrasístole ventricular, el latido postextrasistólico aumenta la contractilidad y la obstrucción dinámica del TSVI: sube la sistólica del VI y el gradiente, y la presión de pulso aórtica disminuye (Brockenbrough-Braunwald-Morrow). En la estenosis aórtica fija, en cambio, la presión de pulso aumenta.',
    traces: [
      one('VI', (t, s) => {
        const g = beatGain(t, s, (prev) => (prev < 0.6 ? 0.62 : prev > 1 ? 1.34 : 1));
        return above(ventricle({ ...LV, pdia: 76, psys: 116, pclose: 92, peakAt: 0.7, grad: 54, gradPow: 2.2, pmin: 6, pdi: 16, aKick: 6, fillSlope: 3 }, t, s), 76, g - 1);
      }, VENT_BLUR),
      one('Ao', (t, s) => {
        const g = beatGain(t, s, (prev) => (prev < 0.6 ? 0.55 : prev > 1 ? 0.62 : 1));
        const base = artery({ ...AO, pdia: 76, psys: 116, pclose: 92, peakAt: 0.22, notch: 2.5 }, t, s);
        return above(base, 76, g - 1);
      }),
    ],
    rr: [0.8, 0.8, 0.46, 1.14],
    seconds: 3.6,
  },
  'pulsus-paradoxus': {
    name: 'Pulso paradójico (taponamiento)',
    desc: 'La presión sistólica arterial cae > 10 mmHg durante la inspiración (aquí ≈ 20 mmHg): el VD se llena a expensas del VI por la interdependencia ventricular con el pericardio a tensión.',
    traces: [one('Ao', (t, s) => {
      const base = artery({ ...AO, pdia: 64, psys: 102, pclose: 86, notch: 3 }, t, s);
      return above(base, 64, -0.52 * insp(t, 3.2, 0.3)) - 3 * insp(t, 3.2, 0.3);
    })],
    rr: 0.55,
    seconds: 6.4,
  },
  iabp: {
    name: 'Balón de contrapulsación intraaórtico (1:2)',
    desc: 'Latidos asistidos alternos: el balón se infla en la incisura dícrota (aumento diastólico, que supera la sistólica) y se desinfla justo antes de la sístole, lo que baja la telediastólica aórtica y la sistólica del latido siguiente (descarga del VI).',
    traces: [one('Ao', (t, s) => {
      let v = artery({ ...AO, pdia: 64, psys: 108, pclose: 90, notch: 4 }, t, s);
      for (let k = 1; k < s.length - 1; k += 2) {
        const tc = s[k] + TC, next = s[k + 1];
        if (t < tc - 0.3 || t > next + 0.5) continue;
        const on = smooth((t - tc - 0.004) / 0.05);
        const off = 1 - smooth((t - next + 0.11) / 0.1);
        v += 40 * on * off * Math.exp(-Math.max(0, t - tc - 0.06) / 0.5); // aumento diastólico
        v -= 12 * gauss(t, 1, next + 0.03, 0.05); // telediastólica asistida (desinflado)
        v -= 7 * gauss(t, 1, next + 0.22, 0.08); // sistólica asistida
      }
      return v;
    })],
    seconds: 3.2,
  },
  ffr: {
    name: 'Reserva fraccional de flujo (Pd/Pa)',
    desc: 'Presión aórtica (Pa, catéter guía) y distal a la estenosis (Pd, guía de presión). En hiperemia máxima con adenosina, Pd/Pa = FFR; aquí cae de 0,93 a ≈ 0,72. FFR ≤ 0,80 indica estenosis funcionalmente significativa.',
    traces: [
      one('Pa', (t, s) => artery({ ...AO, pdia: 70, psys: 112, pclose: 96, notch: 5 }, t, s) - 6 * smooth((t - 2.2) / 1.6)),
      one('Pd', (t, s) => {
        const pa = artery({ ...AO, pdia: 70, psys: 112, pclose: 96, notch: 1.5 }, t, s) - 6 * smooth((t - 2.2) / 1.6);
        return pa * (0.93 - 0.21 * smooth((t - 2) / 2));
      }),
    ],
    rr: 0.75,
    seconds: 6,
  },
  'constriction-lv-rv': {
    name: 'Constricción: VI y VD con la respiración',
    desc: 'Igualación de las diastólicas (diferencia ≤ 5 mmHg) con dip-plateau en ambos ventrículos y discordancia sistólica: en inspiración sube la sistólica del VD y baja la del VI (interdependencia aumentada). Índice de área sistólica > 1,1.',
    traces: [
      one('VI', (t, s) => above(ventricle({ ...LV, pdia: 70, psys: 104, pclose: 88, pmin: 3, pdi: 21, tauFill: 0.022, fillSlope: 0, aKick: 1 }, t, s), 21, -0.16 * insp(t, 4)), VENT_BLUR),
      one('VD', (t, s) => above(ventricle({ ...RV, pdia: 21, psys: 38, pclose: 32, pmin: 2, pdi: 19, tauFill: 0.022, fillSlope: 0, aKick: 0.8 }, t, s), 19, 0.3 * insp(t, 4)), VENT_BLUR),
    ],
    rr: 0.75,
    seconds: 6,
  },
  'restriction-lv-rv': {
    name: 'Restricción: VI y VD con la respiración',
    desc: 'Dip-plateau, pero la telediastólica del VI supera a la del VD (> 5 mmHg), la sistólica del VD suele ser > 50 mmHg y las sistólicas de ambos ventrículos varían de forma concordante con la respiración.',
    traces: [
      one('VI', (t, s) => above(ventricle({ ...LV, pdia: 72, psys: 106, pclose: 90, pmin: 4, pdi: 28, tauFill: 0.022, fillSlope: 0, aKick: 1 }, t, s), 28, -0.08 * insp(t, 4)), VENT_BLUR),
      one('VD', (t, s) => above(ventricle({ ...RV, pdia: 26, psys: 54, pclose: 44, pmin: 2, pdi: 18, tauFill: 0.022, fillSlope: 0, aKick: 0.8 }, t, s), 18, -0.1 * insp(t, 4)), VENT_BLUR),
    ],
    rr: 0.75,
    seconds: 6,
  },
};

export function samplePressure(id) {
  const def = PRESSURES[id];
  if (!def) throw new Error(`Curva de presión desconocida: ${id}`);
  const seconds = def.seconds ?? sec;
  const starts = beatStarts(def.rr ?? 0.8, seconds);
  return def.traces.map(({ label, fn, blur }) => {
    const points = [];
    for (let i = 0; i * DT <= seconds + 1e-9; i++) {
      const t = +(i * DT).toFixed(4);
      points.push({ t, p: fn(t, starts) });
    }
    return { label, points: blur ? blurPoints(points, blur) : points };
  });
}

function scaleFor(max) {
  if (max <= 38) return { top: 40, step: 10 };
  if (max <= 155) return { top: 160, step: 20 };
  return { top: 200, step: 40 };
}

export function renderPressure(id, { width = 480, height = 230 } = {}) {
  const traces = samplePressure(id);
  const seconds = traces[0].points.at(-1).t;
  const max = Math.max(...traces.flatMap((tr) => tr.points.map((p) => p.p)));
  const { top, step } = scaleFor(max);
  const L = 40, R = 12, T = 26, B = 12;
  const pw = width - L - R, ph = height - T - B;
  const X = (t) => (L + (t / seconds) * pw).toFixed(1);
  const Y = (p) => (T + ph - (Math.max(-2, Math.min(top + 4, p)) / top) * ph).toFixed(1);
  let g = '';
  for (let v = 0; v <= top; v += step) {
    g += `<line class="grid${v === 0 ? ' zero' : ''}" x1="${L}" x2="${width - R}" y1="${Y(v)}" y2="${Y(v)}"/>`;
    g += `<text class="lbl" x="${L - 6}" y="${Y(v)}" text-anchor="end" dominant-baseline="middle">${v}</text>`;
  }
  g += `<text class="lbl unit" x="${L - 30}" y="${T - 14}" text-anchor="start">mmHg</text>`;
  const lines = traces.map((tr, i) => `<polyline class="trace${i ? ' trace2' : ''}" points="${tr.points.map((p) => `${X(p.t)},${Y(p.p)}`).join(' ')}"/>`).join('');
  let legend = '';
  if (traces.length > 1) {
    legend = traces.map((tr, i) => {
      const x = width - R - 120 + i * 62, y = T - 14;
      return `<line class="trace${i ? ' trace2' : ''}" x1="${x}" x2="${x + 18}" y1="${y}" y2="${y}"/><text class="lbl leg" x="${x + 24}" y="${y}" dominant-baseline="middle">${tr.label}</text>`;
    }).join('');
  }
  return `<svg class="pressure" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Curva de presión" data-seconds="${seconds}">${g}${lines}${legend}</svg>`;
}
