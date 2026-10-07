// Progreso del usuario en localStorage.
const KEY = 'corazone:v1';
export const MAX_HEARTS = 5;
const HEART_REGEN_MS = 30 * 60 * 1000;
const DAY = 864e5;
// Intervalos de repaso (días) según la "caja" de Leitner de cada pregunta fallada
const REVIEW_DAYS = [0, 1, 3, 7];
export const GOALS = [
  { xp: 10, label: 'Casual', desc: '5 min / día' },
  { xp: 20, label: 'Normal', desc: '10 min / día' },
  { xp: 30, label: 'Serio', desc: '15 min / día' },
  { xp: 50, label: 'Intenso', desc: '20 min / día' },
];
export const PRICES = { hearts: 350, freeze: 200, boost: 100 };
export const MAX_FREEZES = 2;

// Fecha local AAAA-MM-DD (la racha sigue el día del usuario, no UTC).
export function dayKey(d = new Date()) {
  const x = new Date(d);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
}
const today = () => dayKey();
const daysAgo = (n) => dayKey(Date.now() - n * DAY);

const defaults = () => ({
  xp: 0, hearts: MAX_HEARTS, heartsAt: Date.now(), streak: 0, bestStreak: 0, lastDay: null,
  completed: {}, xpByDay: {}, review: {}, perfect: 0, answered: 0, correct: 0,
  // Duolingo-like
  onboarded: false, name: '', level: null, course: null, dailyGoal: 20, joined: Date.now(),
  gems: 500, freezes: 0, frozenDays: [], boostUntil: 0, sound: true, theme: 'auto',
  daily: {}, claimed: {}, league: { tier: 0, week: null }, lastLeagueResult: null,
  // Recompensas: niveles legendarios, cofre diario y recordatorio
  legendary: {}, chestDay: null, reminder: { on: false, time: '20:00' },
  // Arcade: récords de Contrarreloj e historias de guardia completadas
  records: { timed: 0 }, stories: {},
});

// Hitos de racha (días → gemas de recompensa)
export const STREAK_MILESTONES = { 3: 10, 7: 20, 14: 30, 30: 50, 50: 75, 100: 100 };
export const milestoneReward = (days) => STREAK_MILESTONES[days] || 0;
export const LEGENDARY_PRICE = 100;
export const LEGENDARY_XP = 40;
export const CHEST_MIN = 5;
export const CHEST_MAX = 20;

let state = load();

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    // Usuarios anteriores al onboarding no deben verlo
    if (saved.completed && Object.keys(saved.completed).length && saved.onboarded === undefined) saved.onboarded = true;
    return { ...defaults(), ...saved };
  } catch {
    return defaults();
  }
}

export function save() {
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

// Si faltó exactamente un día y hay protector de racha, se consume y la racha sigue.
function checkStreak() {
  if (!state.lastDay || state.lastDay === today() || state.lastDay === daysAgo(1)) return;
  if (state.lastDay === daysAgo(2) && state.freezes > 0) {
    state.freezes--;
    state.frozenDays.push(daysAgo(1));
    state.lastDay = daysAgo(1);
    save();
    return;
  }
  if (state.streak) {
    state.streak = 0;
    save();
  }
}

export function getState() {
  regenHearts();
  checkStreak();
  return state;
}

export function update(fn) {
  fn(state);
  save();
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

export function gainHeart() {
  state.hearts = Math.min(MAX_HEARTS, state.hearts + 1);
  save();
}

export function refillHearts() {
  state.hearts = MAX_HEARTS;
  state.heartsAt = Date.now();
  save();
}

// Compra en la tienda: devuelve true si había gemas suficientes.
export function buy(item) {
  const price = PRICES[item];
  if (state.gems < price) return false;
  if (item === 'hearts' && state.hearts >= MAX_HEARTS) return false;
  if (item === 'freeze' && state.freezes >= MAX_FREEZES) return false;
  state.gems -= price;
  if (item === 'hearts') refillHearts();
  if (item === 'freeze') state.freezes++;
  if (item === 'boost') state.boostUntil = Math.max(Date.now(), state.boostUntil) + 15 * 60 * 1000;
  save();
  return true;
}

export const boostActive = () => state.boostUntil > Date.now();

// Contadores del día para las misiones diarias.
export function daily() {
  const d = today();
  if (state.daily.day !== d) state.daily = { day: d, lessons: 0, perfect: 0, correct: 0, combo: 0, reviews: 0, tap: 0, minutes: 0 };
  return state.daily;
}

// Registra cada respuesta para el repaso espaciado y las estadísticas.
export function recordAnswer(key, ok, { type, combo = 0 } = {}) {
  state.answered++;
  const dly = daily();
  if (ok) {
    state.correct++;
    dly.correct++;
    if (type === 'tap') dly.tap++;
  }
  dly.combo = Math.max(dly.combo, combo);
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

export const xpOn = (key) => state.xpByDay[key] || 0;

// Devuelve { streakExtended, milestone } para mostrar la pantalla de racha.
// milestone = { days, gems } si la racha acaba de alcanzar un hito (ya abonado).
export function completeLesson(lessonId, { xp, stars, review = false, minutes = 0 }) {
  const d = today();
  let streakExtended = false;
  let milestone = null;
  if (state.lastDay !== d) {
    state.streak = state.lastDay === daysAgo(1) ? state.streak + 1 : 1;
    state.lastDay = d;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    streakExtended = true;
    const gems = milestoneReward(state.streak);
    if (gems) {
      state.gems += gems;
      milestone = { days: state.streak, gems };
    }
  }
  state.xp += xp;
  state.xpByDay[d] = (state.xpByDay[d] || 0) + xp;
  const dly = daily();
  dly.lessons++;
  dly.minutes += minutes;
  if (review) dly.reviews++;
  if (stars === 3) {
    state.perfect++;
    dly.perfect++;
  }
  if (!review) state.completed[lessonId] = Math.max(state.completed[lessonId] || 0, stars);
  save();
  return { streakExtended, milestone };
}

// Prueba de unidad superada: todas sus lecciones pendientes pasan a completadas con 1 estrella.
// Devuelve cuántas lecciones se han marcado.
export function passUnitTest(lessonIds) {
  let n = 0;
  for (const id of lessonIds) {
    if (!state.completed[id]) {
      state.completed[id] = 1;
      n++;
    }
  }
  save();
  return n;
}

// Nivel legendario: gratis si hoy se ha completado alguna misión; si no, cuesta gemas.
export function payLegendary(free = false) {
  if (free) return true;
  if (state.gems < LEGENDARY_PRICE) return false;
  state.gems -= LEGENDARY_PRICE;
  save();
  return true;
}

export function markLegendary(lessonId) {
  state.legendary = { ...state.legendary, [lessonId]: true };
  save();
}

export const isLegendary = (lessonId) => !!state.legendary?.[lessonId];

// Cofre diario: una sola vez al día, al cumplir la meta. Devuelve las gemas (0 si no procede).
export function openDailyChest(rand = Math.random) {
  const d = today();
  if (state.chestDay === d || (state.xpByDay[d] || 0) < state.dailyGoal) return 0;
  const gems = CHEST_MIN + Math.floor(rand() * (CHEST_MAX - CHEST_MIN + 1));
  state.chestDay = d;
  state.gems += gems;
  save();
  return gems;
}

// Contrarreloj: guarda el récord personal. Devuelve { best, isNew }.
export function saveTimedRecord(score) {
  const prev = state.records?.timed || 0;
  const isNew = score > prev;
  state.records = { ...state.records, timed: Math.max(prev, score) };
  save();
  return { best: state.records.timed, prev, isNew };
}

// Guardias: marca una historia como completada.
export function markStory(id) {
  state.stories = { ...state.stories, [id]: true };
  save();
}

export function resetProgress() {
  state = defaults();
  save();
}

// Sólo para tests: fija el estado en memoria.
export function _setState(s) {
  state = { ...defaults(), ...s };
}
