// Efectos de sonido sintetizados con WebAudio (sin archivos).
// Seguro en Node y navegadores sin AudioContext: todas las funciones son no-op.

const KEY = 'corazone:muted';
let ctx = null;
let muted = readMuted();

function readMuted() {
  try { return globalThis.localStorage?.getItem(KEY) === '1'; } catch { return false; }
}

export function isMuted() { return muted; }

export function setMuted(value) {
  muted = !!value;
  try { globalThis.localStorage?.setItem(KEY, muted ? '1' : '0'); } catch { /* sin almacenamiento */ }
  return muted;
}

function audio() {
  if (muted) return null;
  try {
    if (!ctx) {
      const AC = globalThis.AudioContext || globalThis.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  } catch { return null; }
}

// Una nota con envolvente ataque/caída. t = segundos desde ahora.
function note(ac, freq, t, dur, { type = 'sine', gain = 0.18, slideTo } = {}) {
  const start = ac.currentTime + t;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, start + dur);
  g.gain.setValueAtTime(0.0001, start);
  g.gain.exponentialRampToValueAtTime(gain, start + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  osc.connect(g).connect(ac.destination);
  osc.start(start);
  osc.stop(start + dur + 0.02);
}

function play(fn) {
  const ac = audio();
  if (!ac) return;
  try { fn(ac); } catch { /* nunca romper la UI por un sonido */ }
}

// Acierto: dos notas ascendentes brillantes (E6 → A6) con un toque de armónico.
export function playCorrect() {
  play((ac) => {
    note(ac, 1318.5, 0, 0.12, { type: 'triangle', gain: 0.16 });
    note(ac, 1760, 0.09, 0.22, { type: 'triangle', gain: 0.18 });
    note(ac, 3520, 0.09, 0.12, { type: 'sine', gain: 0.03 });
  });
}

// Fallo: tono grave corto que cae.
export function playWrong() {
  play((ac) => {
    note(ac, 220, 0, 0.22, { type: 'square', gain: 0.06, slideTo: 160 });
    note(ac, 110, 0, 0.24, { type: 'sine', gain: 0.14, slideTo: 85 });
  });
}

// Fanfarria corta de lección completada: arpegio C-E-G-C y acorde final.
export function playComplete() {
  play((ac) => {
    const seq = [523.25, 659.25, 783.99];
    seq.forEach((f, i) => note(ac, f, i * 0.1, 0.16, { type: 'triangle', gain: 0.15 }));
    [1046.5, 1318.5, 1568].forEach((f) => note(ac, f, 0.32, 0.5, { type: 'triangle', gain: 0.1 }));
  });
}

// Toque de interfaz: clic suave.
export function playTap() {
  play((ac) => note(ac, 880, 0, 0.05, { type: 'sine', gain: 0.07, slideTo: 660 }));
}

// Racha: "lub-dub" de latido + destello ascendente.
export function playStreak() {
  play((ac) => {
    note(ac, 90, 0, 0.12, { type: 'sine', gain: 0.25, slideTo: 60 });
    note(ac, 80, 0.16, 0.12, { type: 'sine', gain: 0.2, slideTo: 55 });
    note(ac, 784, 0.3, 0.12, { type: 'triangle', gain: 0.12, slideTo: 1568 });
    note(ac, 1568, 0.42, 0.25, { type: 'triangle', gain: 0.12 });
  });
}
