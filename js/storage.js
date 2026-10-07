// Progreso del usuario en localStorage.
const KEY = 'corazone:v1';
export const MAX_HEARTS = 5;
const HEART_REGEN_MS = 30 * 60 * 1000;

const today = () => new Date().toISOString().slice(0, 10);
const defaults = () => ({ xp: 0, hearts: MAX_HEARTS, heartsAt: Date.now(), streak: 0, lastDay: null, completed: {}, xpByDay: {} });

let state = load();

function load() {
  try {
    return { ...defaults(), ...JSON.parse(localStorage.getItem(KEY) || '{}') };
  } catch {
    return defaults();
  }
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* almacenamiento no disponible: el progreso dura sólo la sesión */
  }
}

function regenHearts() {
  if (state.hearts >= MAX_HEARTS) {
    state.heartsAt = Date.now();
    return;
  }
  const gained = Math.floor((Date.now() - state.heartsAt) / HEART_REGEN_MS);
  if (gained > 0) {
    state.hearts = Math.min(MAX_HEARTS, state.hearts + gained);
    state.heartsAt += gained * HEART_REGEN_MS;
  }
}

export function getState() {
  regenHearts();
  // La racha se rompe si el último día activo no es hoy ni ayer.
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  if (state.lastDay && state.lastDay !== today() && state.lastDay !== yesterday) state.streak = 0;
  return state;
}

export function msToNextHeart() {
  return state.hearts >= MAX_HEARTS ? 0 : HEART_REGEN_MS - (Date.now() - state.heartsAt);
}

export function loseHeart() {
  regenHearts();
  if (state.hearts === MAX_HEARTS) state.heartsAt = Date.now();
  state.hearts = Math.max(0, state.hearts - 1);
  save();
}

export function refillHearts() {
  state.hearts = MAX_HEARTS;
  state.heartsAt = Date.now();
  save();
}

export function completeLesson(lessonId, { xp, stars }) {
  const d = today();
  if (state.lastDay !== d) {
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    state.streak = state.lastDay === yesterday ? state.streak + 1 : 1;
    state.lastDay = d;
  }
  state.xp += xp;
  state.xpByDay[d] = (state.xpByDay[d] || 0) + xp;
  state.completed[lessonId] = Math.max(state.completed[lessonId] || 0, stars);
  save();
}

export function resetProgress() {
  state = defaults();
  save();
}
