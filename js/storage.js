// Progreso del usuario en localStorage.
const KEY = 'corazone:v1';
export const MAX_HEARTS = 5;
const HEART_REGEN_MS = 30 * 60 * 1000;

const today = () => new Date().toISOString().slice(0, 10);
export const DAILY_GOAL = 30;
const DAY = 864e5;
// Intervalos de repaso (días) según la "caja" de Leitner de cada pregunta fallada
const REVIEW_DAYS = [0, 1, 3, 7];

const defaults = () => ({ xp: 0, hearts: MAX_HEARTS, heartsAt: Date.now(), streak: 0, bestStreak: 0, lastDay: null, completed: {}, xpByDay: {}, review: {}, perfect: 0, answered: 0, correct: 0 });

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

// Registra cada respuesta para el repaso espaciado y las estadísticas.
export function recordAnswer(key, ok) {
  state.answered++;
  if (ok) state.correct++;
  if (!key) return save();
  const r = state.review[key];
  if (!ok) state.review[key] = { box: 0, due: Date.now() };
  else if (r) {
    if (r.box + 1 >= REVIEW_DAYS.length) delete state.review[key];
    else state.review[key] = { box: r.box + 1, due: Date.now() + REVIEW_DAYS[r.box + 1] * DAY };
  }
  save();
}

export const dueReviews = () => Object.entries(state.review).filter(([, r]) => r.due <= Date.now()).map(([k]) => k);

export const todayXp = () => state.xpByDay[today()] || 0;

export function completeLesson(lessonId, { xp, stars, review = false }) {
  const d = today();
  if (state.lastDay !== d) {
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    state.streak = state.lastDay === yesterday ? state.streak + 1 : 1;
    state.lastDay = d;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
  }
  state.xp += xp;
  state.xpByDay[d] = (state.xpByDay[d] || 0) + xp;
  if (stars === 3) state.perfect++;
  if (!review) state.completed[lessonId] = Math.max(state.completed[lessonId] || 0, stars);
  save();
}

export function resetProgress() {
  state = defaults();
  save();
}
