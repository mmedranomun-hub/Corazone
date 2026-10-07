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
      v += gauss(t, -0.4, 0.26, 0.05);
      break;
    default: {
      if (b.delta) v += gauss(t, 0.35, -0.035, 0.016);
      v += gauss(t, -0.1, -0.022, 0.007) + gauss(t, r, 0, 0.009) + gauss(t, -0.25, 0.022, 0.008);
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
    desc: 'Supradesnivel del ST convexo ≥ 1 mm en ≥ 2 derivaciones contiguas (≥ 2 mm en V2–V3 en varones).',
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

// Devuelve las muestras (mV) de la tira: [{t, v}]
export function sampleEcg(id, { seconds = 6, seed = 7 } = {}) {
  const def = RHYTHMS[id];
  if (!def) throw new Error(`Ritmo desconocido: ${id}`);
  const { beats, baseline } = def.build(seconds, rng(seed));
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

export function renderEcg(id, { seconds = 6, heightMm = 30, seed = 7 } = {}) {
  const w = seconds * SPEED * PX;
  const h = heightMm * PX;
  const base = h * 0.6;
  const samples = sampleEcg(id, { seconds, seed });
  const pts = samples
    .map(({ t, v }) => {
      const y = Math.min(h - 1, Math.max(1, base - v * GAIN * PX));
      return `${(t * SPEED * PX).toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
  let grid = '';
  for (let x = 0; x <= w; x += PX) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" class="${x % (5 * PX) ? 'g1' : 'g5'}"/>`;
  for (let y = 0; y <= h; y += PX) grid += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" class="${y % (5 * PX) ? 'g1' : 'g5'}"/>`;
  return `<svg class="ecg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Tira de ECG">${grid}<polyline points="${pts}" class="trace"/></svg>`;
}
