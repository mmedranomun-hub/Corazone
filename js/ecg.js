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

// Espiga de marcapasos: triángulo de 12 ms (visible aunque se muestree cada 4 ms)
const spike = (t, a, c) => a * Math.max(0, 1 - Math.abs(t - c) / 0.006) - 0.08 * a * Math.max(0, 1 - Math.abs(t - c - 0.012) / 0.008);
// Posición (s, relativa a R) de las espigas de marcapasos
const A_SPIKE = (b) => 0.02 - (b.pr ?? 0.16) - 0.055;
const V_SPIKE = -0.085;

// Morfología de un latido. t relativo al pico R (s).
function beatWave(t, b) {
  let v = 0;
  if (b.aSpike) v += spike(t, b.aSpike, A_SPIKE(b));
  if (b.p !== false) {
    const pc = 0.02 - (b.pr ?? 0.16);
    v += gauss(t, b.pAmp ?? 0.15, pc + (b.pOffset ?? 0), 0.025);
    if (b.prDep) v += b.prDep * sigmoid((t - pc - 0.04) / 0.01) * sigmoid((-0.03 - t) / 0.006);
  }
  if (b.qrs === false) return v;
  if (b.vSpike) v += spike(t, b.vSpike, V_SPIKE);
  if (b.retroP) v += gauss(t, b.retroP, 0.13, 0.018); // P retrógrada en el ST
  const r = b.rAmp ?? 1.1;
  switch (b.morph) {
    case 'wide': // BRI: QRS ancho y mellado, T discordante
      v += gauss(t, r * 0.8, -0.02, 0.022) + gauss(t, r * 0.7, 0.045, 0.022);
      v += gauss(t, -0.35, 0.3, 0.06);
      break;
    case 'vent': // QRS ventricular ancho y bizarro
    case 'paced': // QRS estimulado por marcapasos (misma morfología, distinto origen)
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
      if (b.delta) v += gauss(t, b.delta === true ? 0.35 : b.delta, -0.035, b.deltaW ?? 0.016);
      v += gauss(t, -(b.qAmp ?? 0.1), -0.022, b.qWidth ?? 0.007) + gauss(t, r, 0, b.rWidth ?? 0.009) + gauss(t, -(b.sAmp ?? 0.25), 0.022, b.sWidth ?? 0.008);
      if (b.slurS) v += gauss(t, -b.slurS, 0.055, 0.02); // S empastada (BRD en I/V6)
      const st = b.st ?? 0;
      if (st) v += st * sigmoid((t - 0.04) / 0.008) * sigmoid(((b.qt ?? 0.36) - 0.1 - t) / 0.03);
      const tc = (b.qt ?? 0.36) - 0.1;
      v += gauss(t, b.tAmp ?? 0.3, tc, b.tWidth ?? 0.045);
      // Extras opcionales (sólo los usan los trazados que los declaran)
      if (b.tBiph) v += gauss(t, b.tBiph, tc - 0.05, 0.03) + gauss(t, -1.3 * b.tBiph, tc + 0.04, 0.035); // T bifásica +/−
      if (b.u) v += gauss(t, b.u, tc + 0.17, 0.04); // onda U
      if (b.jNotch) v += gauss(t, b.jNotch, 0.04, 0.008); // muesca J
      if (b.jDep) v += b.jDep * sigmoid((t - 0.03) / 0.005) * sigmoid((0.11 - t) / 0.025); // ST descendido ascendente
      if (b.coved) v += b.coved * sigmoid((t - 0.028) / 0.004) * sigmoid((0.16 - t) / 0.038); // ST en cúpula (Brugada)
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
  torsade: {
    name: 'Torsade de pointes',
    desc: 'TV polimorfa con QRS anchos cuya amplitud crece y decrece "girando" alrededor de la línea de base. Suele iniciarse con un latido sinusal con QT largo y una extrasístole sobre la T, típicamente tras una secuencia corto-largo-corto. Tratamiento: sulfato de magnesio; si es sostenida, desfibrilación.',
    build: (s) => {
      const t0 = 0.8; // extrasístole sobre la T del latido con QT largo
      const beats = [{ t: 0.3, qt: 0.56, tWidth: 0.06 }];
      return {
        beats,
        baseline: (t) => {
          if (t < t0) return 0;
          const x = t - t0;
          const onset = Math.min(1, x / 0.25);
          const env = Math.cos((2 * Math.PI * x) / 2.6 + 0.35); // la envolvente cruza cero → "giro" de la polaridad
          const ph = 2 * Math.PI * 4.2 * x;
          return onset * (0.12 + 0.82 * Math.abs(env)) * Math.sign(env) * (Math.sin(ph) + 0.25 * Math.sin(2 * ph));
        },
      };
    },
  },
  'afib-wpw': {
    name: 'FA preexcitada (FA + WPW)',
    desc: 'Taquicardia muy rápida (a menudo > 200 lpm) e irregular, con QRS anchos de morfología cambiante latido a latido (grado variable de preexcitación). RR preexcitado más corto ≤ 250 ms = alto riesgo de FV. Evitar frenadores del nodo AV (incluida amiodarona IV): ibutilida o procainamida, o cardioversión.',
    build: (s, r) => {
      const beats = [];
      for (let t = 0.2; t < s + 1; t += 0.2 + r() * 0.2) {
        const k = r();
        beats.push({ t, p: false, delta: 0.3 + 0.45 * k, deltaW: 0.022 + 0.018 * k, rAmp: 0.5 + 0.8 * r(), rWidth: 0.02 + 0.014 * k, qAmp: 0, sAmp: 0.15 + 0.45 * r(), sWidth: 0.02, qt: 0.28, tAmp: -0.15 - 0.2 * k, tWidth: 0.035 });
      }
      return { beats };
    },
  },
  'pacer-vvi': {
    name: 'Marcapasos ventricular (VVI)',
    desc: 'Espiga de marcapasos seguida de inmediato de un QRS ancho (morfología de BRI, captura ventricular). Sin relación con la actividad auricular. Estimula a la frecuencia programada (aquí 60 lpm) sólo si no hay ritmo propio más rápido; si lo hay, se inhibe.',
    build: (s) => ({ beats: sinusBeats(60, s, { p: false, morph: 'paced', vSpike: 1.4, rAmp: -0.7, ventT: 0.35 }) }),
  },
  'pacer-ddd': {
    name: 'Marcapasos bicameral (DDD)',
    desc: 'Dos espigas por ciclo: la auricular, seguida de onda P, y tras el intervalo AV programado la ventricular, seguida de QRS ancho. Estimulación secuencial AV.',
    build: (s) => ({ beats: sinusBeats(70, s, { aSpike: 1.1, pAmp: 0.16, pr: 0.2, morph: 'paced', vSpike: 1.4, rAmp: -0.7, ventT: 0.35 }) }),
  },
  junctional: {
    name: 'Ritmo de escape nodal (de la unión)',
    desc: 'Ritmo regular de QRS estrecho a 40–60 lpm sin onda P previa (puede verse una P retrógrada, negativa en II, tras el QRS). Aparece cuando falla el nódulo sinusal o hay un bloqueo AV.',
    build: (s) => ({ beats: sinusBeats(45, s, { p: false, retroP: -0.1 }) }),
  },
  'sinus-arrest': {
    name: 'Paro (pausa) sinusal',
    desc: 'Ritmo sinusal que se interrumpe con una pausa sin ondas P ni QRS; la pausa NO es múltiplo del PP previo (a diferencia del bloqueo sinoauricular). Si las pausas se correlacionan con síntomas: marcapasos.',
    build: (s) => {
      const beats = [];
      for (let t = 0.35; t < s + 1; t += t > 1.5 && t < 2 ? 2.85 : 0.8) beats.push({ t });
      return { beats };
    },
  },
  alternans: {
    name: 'Alternancia eléctrica',
    desc: 'Taquicardia sinusal con bajo voltaje y QRS que alternan de amplitud latido a latido (el corazón "bambolea" dentro de un derrame pericárdico). Sugiere taponamiento.',
    build: (s) => {
      const beats = sinusBeats(110, s, { qt: 0.32, pAmp: 0.07, tAmp: 0.1, qAmp: 0.03 });
      beats.forEach((b, i) => Object.assign(b, i % 2 ? { rAmp: 0.22, sAmp: 0.08 } : { rAmp: 0.5, sAmp: 0.15 }));
      return { beats };
    },
  },
  ivr: {
    name: 'Ritmo idioventricular acelerado (RIVA)',
    desc: 'Ritmo regular de QRS anchos sin P previas a 50–110 lpm (aquí ~70). Típico de la reperfusión tras un IAM; suele ser benigno y autolimitado.',
    build: (s) => ({ beats: sinusBeats(70, s, { p: false, morph: 'vent', rAmp: 0.9 }) }),
  },
  bigeminy: {
    name: 'Bigeminismo ventricular',
    desc: 'Cada latido sinusal va seguido de una extrasístole ventricular (QRS ancho, prematuro, sin P) con acoplamiento fijo y pausa compensadora.',
    build: (s) => {
      const beats = [];
      for (let t = 0.35; t < s + 1; t += 1.7) beats.push({ t }, { t: t + 0.52, p: false, morph: 'vent' });
      return { beats };
    },
  },
  'afib-slow': {
    name: 'FA con respuesta ventricular lenta',
    desc: 'Fibrilación auricular (sin P, ondas f, RR irregular) con FC < 60 lpm: exceso de frenadores, enfermedad del nodo AV o del sistema de conducción.',
    build: (s, r) => {
      const beats = [];
      for (let t = 0.4; t < s + 1; t += 1.05 + r() * 0.75) beats.push({ t, p: false });
      const ph = [r() * 6, r() * 6, r() * 6];
      return {
        beats,
        baseline: (t) => 0.04 * Math.sin(2 * Math.PI * 6.3 * t + ph[0]) + 0.03 * Math.sin(2 * Math.PI * 8.1 * t + ph[1]) + 0.02 * Math.sin(2 * Math.PI * 4.7 * t + ph[2]),
      };
    },
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
// wave: 'p' | 'pBlocked' | 'qrs' | 'vent' | 't' | 'spike' (espigas de marcapasos)
export function waveTimes(id, wave, { seconds = 6, seed = 7 } = {}) {
  const { beats } = buildRhythm(id, seconds, seed);
  const pCenter = (b) => b.t + 0.02 - (b.pr ?? 0.16);
  const tCenter = (b) => b.t + (b.morph === 'wide' ? 0.3 : b.morph === 'vent' || b.morph === 'paced' ? 0.26 : (b.qt ?? 0.36) - 0.1);
  const pick = {
    p: () => beats.filter((b) => b.p !== false).map(pCenter),
    pBlocked: () => beats.filter((b) => b.qrs === false && b.p !== false).map(pCenter),
    qrs: () => beats.filter((b) => b.qrs !== false).map((b) => b.t),
    vent: () => beats.filter((b) => b.morph === 'vent').map((b) => b.t),
    t: () => beats.filter((b) => b.qrs !== false).map(tCenter),
    spike: () => beats.flatMap((b) => [b.aSpike && b.t + A_SPIKE(b), b.vSpike && b.qrs !== false && b.t + V_SPIKE].filter(Boolean)).sort((x, y) => x - y),
  }[wave];
  if (!pick) throw new Error(`Onda desconocida: ${wave}`);
  return pick().filter((t) => t > 0.05 && t < seconds - 0.05);
}

// Tolerancia (s) al tocar cada onda
export const WAVE_TOLERANCE = { p: 0.07, pBlocked: 0.07, qrs: 0.06, vent: 0.08, t: 0.09, spike: 0.05 };

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
  wellens: {
    name: 'Síndrome de Wellens (tipo B)',
    desc: 'Ondas T negativas, profundas y simétricas en V2–V3 (a veces V1–V4) sin elevación significativa del ST ni ondas Q, en un paciente ya sin dolor. Indica estenosis crítica proximal de la DA: coronariografía precoz, no ergometría. (El tipo A muestra T bifásicas.)',
    st: { V2: 0.04, V3: 0.04 },
    t: { V1: -0.15, V2: -0.55, V3: -0.6, V4: -0.35, V5: -0.1 },
    extra: { V2: { tWidth: 0.05 }, V3: { tWidth: 0.05 }, V4: { tWidth: 0.05 } },
  },
  'wellens-a': {
    name: 'Síndrome de Wellens (tipo A)',
    desc: 'Ondas T bifásicas (positiva-negativa) en V2–V3 sin elevación significativa del ST, en un paciente sin dolor. Mismo significado que el tipo B: estenosis crítica proximal de la DA.',
    st: { V2: 0.04, V3: 0.04 },
    t: { V2: 0, V3: 0, V4: 0.1 },
    extra: { V2: { tBiph: 0.3 }, V3: { tBiph: 0.32 }, V4: { tBiph: 0.15 } },
  },
  dewinter: {
    name: 'Patrón de de Winter',
    desc: 'Descenso del ST ascendente de 1–3 mm en el punto J en V1–V6 que se continúa con ondas T altas, picudas y simétricas, con elevación del ST en aVR. Equivalente de IAMCEST por oclusión proximal de la DA.',
    st: { aVR: 0.1, I: -0.03, II: -0.04, aVF: -0.03 },
    extra: {
      V1: { jDep: -0.08, tAmp: 0.3 }, V2: { jDep: -0.22, tAmp: 0.95, tWidth: 0.04 }, V3: { jDep: -0.26, tAmp: 1.05, tWidth: 0.04 },
      V4: { jDep: -0.24, tAmp: 0.95, tWidth: 0.04 }, V5: { jDep: -0.16, tAmp: 0.65, tWidth: 0.04 }, V6: { jDep: -0.1, tAmp: 0.45 },
    },
  },
  brugada1: {
    name: 'Patrón de Brugada tipo 1',
    desc: 'En ≥ 1 precordial derecha (V1–V2, registrada en el 2.º, 3.º o 4.º espacio intercostal): elevación del punto J ≥ 2 mm con ST "en cúpula" (coved), convexo y descendente, que termina en una T negativa. Es el único patrón diagnóstico de Brugada (canalopatía con riesgo de muerte súbita).',
    extra: {
      V1: { rAmp: 0.25, sAmp: 0.35, coved: 0.34, tAmp: -0.3, tWidth: 0.05 },
      V2: { rAmp: 0.35, sAmp: 0.55, coved: 0.3, tAmp: -0.25, tWidth: 0.05 },
    },
  },
  posterior: {
    name: 'IAMCEST posterior',
    desc: 'Imagen especular en V1–V3: descenso horizontal del ST con R alta y ancha (R/S > 1 en V2) y T positiva. Confirmar con V7–V9 (elevación ≥ 0,5 mm). Suele asociarse a IAM inferior o lateral (CD o Cx).',
    scale: { V1: { r: 2.5, s: 0.5 }, V2: { r: 3.5, s: 0.45 }, V3: { r: 1.6, s: 0.6 } },
    st: { V1: -0.15, V2: -0.3, V3: -0.25, V4: -0.1 },
    t: { V1: 0.25, V2: 0.4, V3: 0.4 },
  },
  'stemi-inf-rv': {
    name: 'IAMCEST inferior con afectación de VD',
    desc: 'Elevación del ST en II, III y aVF (III > II, CD proximal) con descenso especular en I y aVL y elevación del ST en V1. Para confirmar la afectación del VD se requiere V4R (elevación ≥ 0,5 mm; ≥ 1 mm en varones < 40 años), que no se registra en el ECG estándar. Evitar nitratos y asegurar precarga.',
    st: { II: 0.3, III: 0.48, aVF: 0.4, I: -0.14, aVL: -0.24, V1: 0.15, V2: 0.03 },
  },
  hypok: {
    name: 'Hipopotasemia',
    desc: 'Ondas T aplanadas, ondas U prominentes (más visibles en V2–V3, pueden superar a la T) y discreto descenso del ST; el QT aparente se alarga (en realidad es QU). Riesgo de arritmias ventriculares.',
    tScale: 0.3,
    all: { st: -0.05 },
    extra: {
      I: { u: 0.08 }, II: { u: 0.12 }, III: { u: 0.06 }, aVF: { u: 0.1 }, aVL: { u: 0.05 }, aVR: { u: -0.08 },
      V1: { u: 0.1 }, V2: { u: 0.25 }, V3: { u: 0.28 }, V4: { u: 0.22 }, V5: { u: 0.15 }, V6: { u: 0.12 },
    },
  },
  rvh: {
    name: 'Hipertrofia ventricular derecha',
    desc: 'R alta en V1 (R/S > 1), S profundas en V5–V6, desviación derecha del eje (> +90°) y T negativas con ST descendido en V1–V3 (patrón de sobrecarga). Puede acompañarse de P pulmonale.',
    axis: 110,
    scale: { V1: { r: 5, s: 0.2 }, V2: { r: 2.5, s: 0.6 }, V4: { r: 0.6, s: 1.8 }, V5: { r: 0.4, s: 4 }, V6: { r: 0.45, s: 7 } },
    st: { V1: -0.05, V2: -0.06, V3: -0.04 },
    t: { V1: -0.25, V2: -0.3, V3: -0.2 },
    extra: { II: { pAmp: 0.27 }, III: { pAmp: 0.22 }, aVF: { pAmp: 0.25 } },
  },
  lowvoltage: {
    name: 'Bajo voltaje',
    desc: 'Amplitud del QRS < 5 mm en todas las derivaciones de miembros y/o < 10 mm en todas las precordiales. Causas: derrame pericárdico, obesidad, EPOC, miocardiopatías infiltrativas (amiloidosis), hipotiroidismo.',
    gain: 0.35,
    rate: 95,
  },
  'early-repol': {
    name: 'Repolarización precoz',
    desc: 'Muesca o empastamiento del punto J (≥ 1 mm) en ≥ 2 derivaciones contiguas inferiores y/o laterales (II, III, aVF, I, aVL, V4–V6), con elevación cóncava del ST y T altas, sin descenso especular del ST ni del PR. Variante habitual en jóvenes, deportistas y bradicardia. La elevación cóncava aislada en V2–V3 es otra variante normal.',
    rate: 58,
    extra: {
      II: { st: 0.06, jNotch: 0.08 }, III: { st: 0.05, jNotch: 0.07 }, aVF: { st: 0.05, jNotch: 0.07 },
      V2: { st: 0.15, sAmp: 0.9, tAmp: 0.6 }, V3: { st: 0.2, sAmp: 0.4, tAmp: 0.7 }, V6: { st: 0.08, jNotch: 0.12 },
      V4: { st: 0.18, jNotch: 0.22, sAmp: 0.15, tAmp: 0.65 }, V5: { st: 0.12, jNotch: 0.18, sAmp: 0.08, tAmp: 0.5 },
    },
  },
  pacer12: {
    name: 'Ritmo de marcapasos ventricular',
    desc: 'Espiga antes de cada QRS. Estimulación desde el ápex del VD: QRS ancho con morfología de BRI, eje superior (negativo en II, III y aVF) y QS en precordiales; ST-T discordante con el QRS (no valorable para isquemia sin criterios específicos).',
    paced: true,
    rate: 70,
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
  // Opciones de los trazados más recientes (no afectan a los anteriores)
  if (spec.gain) for (const k of ['rAmp', 'sAmp', 'qAmp', 'tAmp', 'pAmp']) b[k] *= spec.gain;
  if (spec.tScale) b.tAmp *= spec.tScale;
  if (spec.all) Object.assign(b, spec.all);
  if (spec.extra?.[lead]) Object.assign(b, spec.extra[lead]);
  if (spec.paced) {
    // Estimulación desde el ápex del VD: patrón BRI con eje superior
    const pos = { I: 0.7, aVL: 0.9, aVR: 0.35 };
    const neg = { II: -0.6, III: -1.0, aVF: -0.85, V1: -1.0, V2: -1.3, V3: -1.2, V4: -1.0, V5: -0.75, V6: -0.55 };
    Object.assign(b, { p: false, vSpike: 1.2 }, pos[lead] ? { morph: 'wide', rAmp: pos[lead] } : { morph: 'paced', rAmp: neg[lead], ventT: 0.35 });
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
