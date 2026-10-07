// Generador procedural de tiras de ECG (derivación II) en SVG.
// Cada latido es una suma de gaussianas (P, Q, R, S, T) colocadas respecto al pico R.
// Papel estándar: 25 mm/s, 10 mm/mV.

const SPEED = 25; // mm/s
const GAIN = 10; // mm/mV
const PX = 4; // px por mm
const DT = 0.004; // s entre muestras

const gauss = (t, a, mu, s) => a * Math.exp(-((t - mu) ** 2) / (2 * s * s));
const sigmoid = (x) => 1 / (1 + Math.exp(-x));

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// Morfología de un latido. t relativo al pico R (s).
function beatWave(t, b) {
  let v = 0;
  if (b.p !== false) {
    const pc = 0.02 - (b.pr ?? 0.16);
    v += gauss(t, b.pAmp ?? 0.15, pc + (b.pOffset ?? 0), 0.025);
    if (b.prDep) v += b.prDep * sigmoid((t - pc - 0.04) / 0.01) * sigmoid((-0.03 - t) / 0.006);
  }
  if (b.qrs === false) return v;
  const r = b.rAmp ?? 1.1;
  switch (b.morph) {
    case 'wide': // BRI: QRS ancho y mellado, T discordante
      v += gauss(t, r * 0.8, -0.02, 0.022) + gauss(t, r * 0.7, 0.045, 0.022);
      v += gauss(t, -0.35, 0.3, 0.06);
      break;
    case 'vent': // QRS ventricular ancho y bizarro
      v += gauss(t, r * 1.2, 0, 0.035) + gauss(t, -0.6, 0.08, 0.035);
      // ST-T discordante: opuesto a la deflexión principal del QRS
      if (b.ventT) v += b.ventT * 0.4 * sigmoid((t - 0.1) / 0.015) * sigmoid((0.24 - t) / 0.03);
      v += gauss(t, b.ventT ?? -0.4, 0.26, 0.05);
      break;
    case 'rsr': // BRD en V1: rSR'
      v += gauss(t, 0.3, -0.025, 0.009) + gauss(t, -0.35, 0.012, 0.01) + gauss(t, r, 0.06, 0.016);
      v += gauss(t, -0.2, 0.3, 0.05);
      break;
    default: {
      if (b.delta) v += gauss(t, 0.35, -0.035, 0.016);
      v += gauss(t, -(b.qAmp ?? 0.1), -0.022, b.qWidth ?? 0.007) + gauss(t, r, 0, 0.009) + gauss(t, -(b.sAmp ?? 0.25), 0.022, 0.008);
      if (b.slurS) v += gauss(t, -b.slurS, 0.055, 0.02); // S empastada (BRD en I/V6)
      const st = b.st ?? 0;
      if (st) v += st * sigmoid((t - 0.04) / 0.008) * sigmoid(((b.qt ?? 0.36) - 0.1 - t) / 0.03);
      v += gauss(t, b.tAmp ?? 0.3, (b.qt ?? 0.36) - 0.1, b.tWidth ?? 0.045);
    }
  }
  return v;
}

// Cada ritmo devuelve { beats: [{t, ...morfología}], baseline?: (t) => mV }
function sinusBeats(rate, seconds, extra = {}) {
  const rr = 60 / rate;
  const beats = [];
  for (let t = 0.35; t < seconds + 1; t += rr) beats.push({ t, ...extra });
  return beats;
}

export const RHYTHMS = {
  sinus: {
    name: 'Ritmo sinusal normal',
    desc: 'FC 60–100 lpm, onda P antes de cada QRS, PR 120–200 ms, QRS estrecho, RR regular.',
    build: (s) => ({ beats: sinusBeats(75, s) }),
  },
  brady: {
    name: 'Bradicardia sinusal',
    desc: 'Ritmo sinusal con FC < 60 lpm.',
    build: (s) => ({ beats: sinusBeats(45, s) }),
  },
  tachy: {
    name: 'Taquicardia sinusal',
    desc: 'Ritmo sinusal con FC > 100 lpm. Buscar causa (fiebre, dolor, hipovolemia, anemia…).',
    build: (s) => ({ beats: sinusBeats(125, s, { qt: 0.3 }) }),
  },
  afib: {
    name: 'Fibrilación auricular',
    desc: 'Ritmo irregularmente irregular, sin ondas P, línea de base con ondas f.',
    build: (s, r) => {
      const beats = [];
      for (let t = 0.3; t < s + 1; t += 0.42 + r() * 0.55) beats.push({ t, p: false });
      const ph = [r() * 6, r() * 6, r() * 6];
      return {
        beats,
        baseline: (t) => 0.04 * Math.sin(2 * Math.PI * 6.3 * t + ph[0]) + 0.03 * Math.sin(2 * Math.PI * 8.1 * t + ph[1]) + 0.02 * Math.sin(2 * Math.PI * 4.7 * t + ph[2]),
      };
    },
  },
  flutter: {
    name: 'Flutter auricular 2:1',
    desc: 'Ondas F en "dientes de sierra" a ~300/min; con conducción 2:1 la FC ventricular es ~150 lpm.',
    build: (s) => {
      const beats = [];
      for (let t = 0.3; t < s + 1; t += 0.4) beats.push({ t, p: false, tAmp: 0.15 });
      return { beats, baseline: (t) => { const x = ((t + 0.05) / 0.2) % 1; return -0.2 * (x < 0.7 ? x / 0.7 : (1 - x) / 0.3) + 0.1; } };
    },
  },
  svt: {
    name: 'Taquicardia supraventricular (TRIN)',
    desc: 'Taquicardia regular de QRS estrecho, ~150–250 lpm, ondas P no visibles o retrógradas.',
    build: (s) => ({ beats: sinusBeats(185, s, { p: false, qt: 0.26, tAmp: 0.25 }) }),
  },
  avb1: {
    name: 'Bloqueo AV de 1er grado',
    desc: 'PR constante y prolongado (> 200 ms); todas las P conducen.',
    build: (s) => ({ beats: sinusBeats(70, s, { pr: 0.32 }) }),
  },
  mobitz1: {
    name: 'Bloqueo AV 2º grado Mobitz I (Wenckebach)',
    desc: 'Alargamiento progresivo del PR hasta que una P no conduce. Suele ser nodal y benigno.',
    build: (s) => {
      const pp = 0.75, prs = [0.16, 0.26, 0.33, null];
      const beats = [];
      let i = 0;
      for (let tp = 0.2; tp < s + 1; tp += pp, i++) {
        const pr = prs[i % 4];
        // La P se centra en tp: el pico R queda en tp - 0.02 + PR
        if (pr === null) beats.push({ t: tp + 0.14, qrs: false });
        else beats.push({ t: tp - 0.02 + pr, pr });
      }
      return { beats };
    },
  },
  mobitz2: {
    name: 'Bloqueo AV 2º grado Mobitz II',
    desc: 'PR constante con P bloqueadas de forma súbita. Infrahisiano: riesgo de BAV completo, indicación de marcapasos.',
    build: (s) => {
      const beats = [];
      let i = 0;
      for (let t = 0.35; t < s + 1; t += 0.75, i++) beats.push(i % 3 === 2 ? { t, qrs: false } : { t });
      return { beats };
    },
  },
  avb3: {
    name: 'Bloqueo AV completo (3er grado)',
    desc: 'Disociación AV: P y QRS van cada uno a su ritmo. Escape lento. Indicación de marcapasos.',
    build: (s) => {
      const beats = [];
      for (let t = 0.1; t < s + 1; t += 0.66) beats.push({ t: t + 0.14, qrs: false });
      for (let t = 0.55; t < s + 1; t += 1.5) beats.push({ t, p: false, morph: 'wide', rAmp: 0.9 });
      return { beats };
    },
  },
  pvc: {
    name: 'Extrasístole ventricular',
    desc: 'Latido prematuro, QRS ancho y bizarro sin P previa, seguido de pausa compensadora completa.',
    build: (s) => {
      const beats = [];
      const rr = 0.85;
      let i = 0;
      for (let t = 0.35; t < s + 1; i++) {
        if (i === 3) { beats.push({ t: t - 0.35, p: false, morph: 'vent' }); t += rr; continue; }
        beats.push({ t });
        t += rr;
      }
      return { beats };
    },
  },
  vt: {
    name: 'Taquicardia ventricular monomorfa',
    desc: 'Taquicardia regular de QRS ancho (> 120 ms), ~150–250 lpm. Si hay inestabilidad: cardioversión eléctrica.',
    build: (s) => ({ beats: sinusBeats(175, s, { p: false, morph: 'vent' }) }),
  },
  vf: {
    name: 'Fibrilación ventricular',
    desc: 'Actividad caótica sin QRS identificables. Parada cardiaca: RCP y desfibrilación inmediata.',
    build: (s, r) => {
      const ph = [r() * 6, r() * 6, r() * 6];
      return {
        beats: [],
        baseline: (t) => (0.35 + 0.25 * Math.sin(2 * Math.PI * 0.4 * t + ph[2])) * (Math.sin(2 * Math.PI * 4.8 * t + ph[0]) + 0.5 * Math.sin(2 * Math.PI * 6.9 * t + ph[1])),
      };
    },
  },
  asystole: {
    name: 'Asistolia',
    desc: 'Ausencia de actividad eléctrica. Ritmo no desfibrilable: RCP + adrenalina. Comprobar cables y ganancia.',
    build: (s, r) => ({ beats: [], baseline: (t) => 0.015 * Math.sin(2 * Math.PI * 0.5 * t) + 0.005 * (r() - 0.5) }),
  },
  stemi: {
    name: 'Elevación del ST (IAMCEST)',
    desc: 'Supradesnivel del ST ≥ 1 mm en ≥ 2 derivaciones contiguas (en V2–V3: ≥ 2,5 mm varones < 40 años, ≥ 2 mm varones ≥ 40, ≥ 1,5 mm mujeres).',
    build: (s) => ({ beats: sinusBeats(85, s, { st: 0.3, tAmp: 0.45, qt: 0.34 }) }),
  },
  stdep: {
    name: 'Descenso del ST',
    desc: 'Infradesnivel horizontal o descendente del ST: isquemia subendocárdica (o imagen especular).',
    build: (s) => ({ beats: sinusBeats(90, s, { st: -0.15, tAmp: 0.1, qt: 0.33 }) }),
  },
  hyperk: {
    name: 'Hiperpotasemia (T picudas)',
    desc: 'Ondas T altas, estrechas y simétricas. Progresión: P aplanada, PR largo, QRS ancho, onda sinusoidal.',
    build: (s) => ({ beats: sinusBeats(70, s, { tAmp: 0.85, tWidth: 0.028, pAmp: 0.08 }) }),
  },
  lbbb: {
    name: 'Bloqueo de rama izquierda',
    desc: 'QRS ≥ 120 ms, R ancha y mellada en I, aVL, V5–V6; repolarización discordante.',
    build: (s) => ({ beats: sinusBeats(72, s, { morph: 'wide' }) }),
  },
  wpw: {
    name: 'Preexcitación (Wolff-Parkinson-White)',
    desc: 'PR corto (< 120 ms) y onda delta (empastamiento inicial del QRS) por vía accesoria.',
    build: (s) => ({ beats: sinusBeats(75, s, { pr: 0.09, delta: true }) }),
  },
  longqt: {
    name: 'QT largo',
    desc: 'QTc > 450 ms (varones) / > 460 ms (mujeres). Riesgo de torsades de pointes.',
    build: (s) => ({ beats: sinusBeats(65, s, { qt: 0.56, tWidth: 0.06 }) }),
  },
};

function sampleBeats(beats, baseline, seconds) {
  const out = [];
  for (let t = 0; t <= seconds; t += DT) {
    let v = baseline ? baseline(t) : 0;
    for (const b of beats) {
      const dt = t - b.t;
      if (dt > -0.6 && dt < 0.8) v += beatWave(dt, b);
    }
    out.push({ t, v });
  }
  return out;
}

function buildRhythm(id, seconds, seed) {
  const def = RHYTHMS[id];
  if (!def) throw new Error(`Ritmo desconocido: ${id}`);
  return def.build(seconds, rng(seed));
}

// Devuelve las muestras (mV) de la tira: [{t, v}]
export function sampleEcg(id, { seconds = 6, seed = 7 } = {}) {
  const { beats, baseline } = buildRhythm(id, seconds, seed);
  return sampleBeats(beats, baseline, seconds);
}

// Centros temporales (s) de un tipo de onda en la tira, para preguntas de "toca la onda".
// wave: 'p' | 'pBlocked' | 'qrs' | 'vent' | 't'
export function waveTimes(id, wave, { seconds = 6, seed = 7 } = {}) {
  const { beats } = buildRhythm(id, seconds, seed);
  const pCenter = (b) => b.t + 0.02 - (b.pr ?? 0.16);
  const tCenter = (b) => b.t + (b.morph === 'wide' ? 0.3 : b.morph === 'vent' ? 0.26 : (b.qt ?? 0.36) - 0.1);
  const pick = {
    p: () => beats.filter((b) => b.p !== false).map(pCenter),
    pBlocked: () => beats.filter((b) => b.qrs === false && b.p !== false).map(pCenter),
    qrs: () => beats.filter((b) => b.qrs !== false).map((b) => b.t),
    vent: () => beats.filter((b) => b.morph === 'vent').map((b) => b.t),
    t: () => beats.filter((b) => b.qrs !== false).map(tCenter),
  }[wave];
  if (!pick) throw new Error(`Onda desconocida: ${wave}`);
  return pick().filter((t) => t > 0.05 && t < seconds - 0.05);
}

// Tolerancia (s) al tocar cada onda
export const WAVE_TOLERANCE = { p: 0.07, pBlocked: 0.07, qrs: 0.06, vent: 0.08, t: 0.09 };

const toPoints = (samples, x0, base, h) =>
  samples
    .map(({ t, v }) => `${(x0 + t * SPEED * PX).toFixed(1)},${Math.min(h - 1, Math.max(1, base - v * GAIN * PX)).toFixed(1)}`)
    .join(' ');

function gridLines(w, h) {
  let g = '';
  for (let x = 0; x <= w; x += PX) g += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" class="${x % (5 * PX) ? 'g1' : 'g5'}"/>`;
  for (let y = 0; y <= h; y += PX) g += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" class="${y % (5 * PX) ? 'g1' : 'g5'}"/>`;
  return g;
}

export function renderEcg(id, { seconds = 6, heightMm = 30, seed = 7 } = {}) {
  const w = seconds * SPEED * PX;
  const h = heightMm * PX;
  const pts = toPoints(sampleEcg(id, { seconds, seed }), 0, h * 0.6, h);
  return `<svg class="ecg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Tira de ECG" data-seconds="${seconds}">${gridLines(w, h)}<polyline points="${pts}" class="trace"/></svg>`;
}

// ---------------------------------------------------------------------------
// ECG de 12 derivaciones
// Modelo simplificado: en miembros, R/S salen de proyectar el eje QRS sobre el ángulo
// de cada derivación (sistema hexaxial); en precordiales, progresión de R de V1 a V6.

const LEADS = ['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6'];
const LIMB_ANGLE = { I: 0, II: 60, III: 120, aVR: -150, aVL: -30, aVF: 90 };
const PRECORDIAL = {
  V1: { r: 0.2, s: 0.9, t: 0.05 }, V2: { r: 0.35, s: 1.3, t: 0.4 }, V3: { r: 0.7, s: 0.9, t: 0.5 },
  V4: { r: 1.2, s: 0.5, t: 0.45 }, V5: { r: 1.4, s: 0.25, t: 0.35 }, V6: { r: 1.1, s: 0.1, t: 0.25 },
};
const cosd = (deg) => Math.cos((deg * Math.PI) / 180);

export const TWELVE_LEAD = {
  normal: {
    name: 'ECG normal',
    desc: 'Ritmo sinusal, eje normal (~+60°), progresión de R normal en precordiales, sin alteraciones de la repolarización.',
  },
  'stemi-inf': {
    name: 'IAMCEST inferior',
    desc: 'Elevación del ST en II, III y aVF (mayor en III que en II → CD) con descenso especular en I y aVL.',
    st: { II: 0.3, III: 0.45, aVF: 0.38, I: -0.12, aVL: -0.2, V2: -0.08 },
  },
  'stemi-ant': {
    name: 'IAMCEST anterior',
    desc: 'Elevación del ST en V1–V4 (oclusión de la descendente anterior), con descenso especular inferior.',
    st: { V1: 0.2, V2: 0.5, V3: 0.5, V4: 0.35, I: 0.08, aVL: 0.1, II: -0.06, III: -0.15, aVF: -0.1 },
  },
  'stemi-lat': {
    name: 'IAMCEST lateral',
    desc: 'Elevación del ST en I, aVL, V5 y V6 (circunfleja o diagonal), con imagen especular en III y aVF.',
    st: { I: 0.25, aVL: 0.3, V5: 0.22, V6: 0.2, III: -0.2, aVF: -0.12 },
  },
  pericarditis: {
    name: 'Pericarditis aguda',
    desc: 'Elevación difusa y cóncava del ST con descenso del PR; en aVR, ST descendido y PR elevado.',
    st: { ...Object.fromEntries(LEADS.map((l) => [l, 0.12])), aVR: -0.1, V1: 0.03 },
    prDep: { ...Object.fromEntries(LEADS.map((l) => [l, -0.06])), aVR: 0.05 },
  },
  lad: {
    name: 'Desviación izquierda del eje',
    desc: 'QRS positivo en I y negativo en II y aVF: eje ≈ −45°, típico del hemibloqueo anterior izquierdo.',
    axis: -45,
  },
  rad: {
    name: 'Desviación derecha del eje',
    desc: 'QRS negativo en I y positivo en aVF: eje ≈ +120° (sobrecarga de VD, hemibloqueo posterior, TEP…).',
    axis: 120,
  },
  lvh: {
    name: 'Hipertrofia ventricular izquierda',
    desc: 'Voltajes altos (Sokolow: S V1 + R V5/V6 ≥ 35 mm) con patrón de sobrecarga (ST descendido y T negativa en V5–V6).',
    scale: { V1: { s: 1.9 }, V2: { s: 2.2 }, V5: { r: 2.4 }, V6: { r: 2.0 }, I: { r: 1.3 }, aVL: { r: 1.5 } },
    st: { V5: -0.12, V6: -0.12, I: -0.06, aVL: -0.08 },
    t: { V5: -0.3, V6: -0.3, I: -0.15, aVL: -0.2 },
  },
  rbbb: {
    name: 'Bloqueo de rama derecha',
    desc: "QRS ≥ 120 ms con rSR' en V1–V2 y S ancha y empastada en I y V6.",
    rbbb: true,
  },
  lbbb12: {
    name: 'Bloqueo de rama izquierda',
    desc: 'QRS ≥ 120 ms, QS o rS en V1, R ancha y mellada en I, aVL, V5–V6 sin q septal; ST-T discordante.',
    lbbb: true,
  },
};

// Morfología del latido para una derivación concreta
function leadBeat(lead, spec) {
  const axis = spec.axis ?? 60;
  let b;
  if (LIMB_ANGLE[lead] !== undefined) {
    const c = cosd(axis - LIMB_ANGLE[lead]);
    const ct = cosd(45 - LIMB_ANGLE[lead]);
    b = { rAmp: 0.15 + 1.0 * Math.max(0, c), sAmp: 0.1 + 0.9 * Math.max(0, -c), qAmp: c > 0.3 ? 0.08 : 0.02, tAmp: 0.3 * ct, pAmp: 0.15 * cosd(55 - LIMB_ANGLE[lead]) };
  } else {
    const p = PRECORDIAL[lead];
    b = { rAmp: p.r, sAmp: p.s, qAmp: ['V5', 'V6'].includes(lead) ? 0.08 : 0, tAmp: p.t, pAmp: lead === 'V1' ? 0.06 : 0.1 };
  }
  const sc = spec.scale?.[lead];
  if (sc) { b.rAmp *= sc.r ?? 1; b.sAmp *= sc.s ?? 1; }
  if (spec.st?.[lead]) b.st = spec.st[lead];
  if (spec.t?.[lead] !== undefined) b.tAmp = spec.t[lead];
  if (spec.prDep?.[lead]) b.prDep = spec.prDep[lead];
  // Los bloqueos de rama ensanchan el QRS en TODAS las derivaciones
  if (spec.rbbb) {
    if (['V1', 'V2'].includes(lead)) Object.assign(b, { morph: 'rsr', rAmp: 0.8 });
    else if (lead === 'aVR') b.slurS = -0.3; // R terminal ancha
    else b.slurS = ['I', 'aVL', 'V5', 'V6'].includes(lead) ? 0.35 : 0.22;
  }
  if (spec.lbbb) {
    const pos = { I: 1.1, aVL: 1.0, V5: 1.2, V6: 1.1, V4: 0.8, II: 0.6, aVF: 0.4 };
    if (pos[lead]) Object.assign(b, { morph: 'wide', rAmp: pos[lead] });
    else Object.assign(b, { morph: 'vent', rAmp: -0.7, ventT: 0.35 });
  }
  return b;
}

export function sampleLead(id, lead, { seconds = 10 } = {}) {
  const spec = TWELVE_LEAD[id];
  if (!spec) throw new Error(`ECG 12D desconocido: ${id}`);
  const beats = sinusBeats(spec.rate ?? 72, seconds, leadBeat(lead, spec));
  return sampleBeats(beats, null, seconds);
}

// Formato estándar: 4 columnas de 2,5 s (I-aVR-V1-V4…) + tira de ritmo en II.
export function render12(id) {
  const colS = 2.5;
  const rowMm = 25;
  const w = 10 * SPEED * PX;
  const rowH = rowMm * PX;
  const h = rowH * 4;
  const layout = [['I', 'aVR', 'V1', 'V4'], ['II', 'aVL', 'V2', 'V5'], ['III', 'aVF', 'V3', 'V6']];
  let traces = '';
  let labels = '';
  layout.forEach((row, ri) => {
    row.forEach((lead, ci) => {
      const t0 = ci * colS;
      const seg = sampleLead(id, lead).filter(({ t }) => t >= t0 && t <= t0 + colS);
      const top = ri * rowH;
      traces += `<polyline class="trace" points="${toPoints(seg, 0, top + rowH * 0.6, h)}"/>`;
      labels += `<text class="lead" x="${t0 * SPEED * PX + 6}" y="${top + 16}">${lead}</text>`;
      if (ci) traces += `<line class="sep" x1="${t0 * SPEED * PX}" y1="${top + rowH * 0.45}" x2="${t0 * SPEED * PX}" y2="${top + rowH * 0.75}"/>`;
    });
  });
  traces += `<polyline class="trace" points="${toPoints(sampleLead(id, 'II'), 0, 3 * rowH + rowH * 0.6, h)}"/>`;
  labels += `<text class="lead" x="6" y="${3 * rowH + 16}">II</text>`;
  return `<svg class="ecg ecg12" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="ECG de 12 derivaciones">${gridLines(w, h)}${traces}${labels}</svg>`;
}
