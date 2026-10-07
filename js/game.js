// Mecánicas de juego tipo Duolingo: misiones diarias y ligas semanales.
import { getState, daily, update, dayKey, xpOn } from './storage.js';

// ---------- Misiones diarias ----------
// Cada día se eligen 3 misiones de forma determinista a partir de la fecha.
const QUEST_POOL = [
  { id: 'xp', icon: '⚡', text: (n) => `Gana ${n} XP`, target: (s) => s.dailyGoal, value: (s) => xpOn(dayKey()) },
  { id: 'lessons2', icon: '📘', text: (n) => `Completa ${n} lecciones`, target: () => 2, value: (s, d) => d.lessons },
  { id: 'lessons3', icon: '📚', text: (n) => `Completa ${n} lecciones`, target: () => 3, value: (s, d) => d.lessons },
  { id: 'perfect', icon: '🎯', text: () => 'Termina una lección sin errores', target: () => 1, value: (s, d) => d.perfect },
  { id: 'combo5', icon: '🔥', text: (n) => `Consigue una racha de ${n} aciertos seguidos`, target: () => 5, value: (s, d) => d.combo },
  { id: 'combo10', icon: '💥', text: (n) => `Consigue ${n} aciertos seguidos`, target: () => 10, value: (s, d) => d.combo },
  { id: 'correct15', icon: '✅', text: (n) => `Responde bien ${n} preguntas`, target: () => 15, value: (s, d) => d.correct },
  { id: 'review', icon: '🔁', text: () => 'Haz una sesión de práctica o repaso', target: () => 1, value: (s, d) => d.reviews },
  { id: 'tap', icon: '👆', text: (n) => `Señala ${n} ondas en el ECG`, target: () => 3, value: (s, d) => d.tap },
];
const REWARD = [10, 15, 20];

function seeded(str) {
  let h = 2166136261;
  for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0) / 4294967296);
}

export function todaysQuests() {
  const s = getState();
  const d = daily();
  const r = seeded(dayKey());
  const pool = QUEST_POOL.slice(1);
  const picks = [QUEST_POOL[0]];
  while (picks.length < 3) {
    const q = pool.splice(Math.floor(r() * pool.length), 1)[0];
    if (!picks.some((p) => p.id.replace(/\d+$/, '') === q.id.replace(/\d+$/, ''))) picks.push(q);
  }
  return picks.map((q, i) => {
    const target = q.target(s);
    const value = Math.min(target, q.value(s, d));
    const key = `${dayKey()}:${q.id}`;
    return { key, icon: q.icon, text: q.text(target), target, value, done: value >= target, claimed: !!s.claimed[key], reward: REWARD[i] };
  });
}

export function claimQuest(key) {
  const q = todaysQuests().find((x) => x.key === key);
  if (!q || !q.done || q.claimed) return 0;
  update((s) => {
    s.claimed[key] = true;
    s.gems += q.reward;
  });
  return q.reward;
}

export const unclaimedQuests = () => todaysQuests().filter((q) => q.done && !q.claimed).length;

// ---------- Ligas ----------
export const LEAGUES = [
  { name: 'Bronce', color: '#cd7f32' }, { name: 'Plata', color: '#a8b3bd' }, { name: 'Oro', color: '#ffc800' },
  { name: 'Zafiro', color: '#1c7ff6' }, { name: 'Rubí', color: '#e5484d' }, { name: 'Esmeralda', color: '#12a594' },
  { name: 'Amatista', color: '#8e4ec6' }, { name: 'Perla', color: '#e8d5c4' }, { name: 'Obsidiana', color: '#3a3f47' },
  { name: 'Diamante', color: '#7ce0ff' },
];
export const PROMOTE = 7;
export const DEMOTE = 5;
const SIZE = 20;
const NAMES = ['Lucía R.', 'Pablo M.', 'Marta G.', 'Javier S.', 'Elena P.', 'Carlos D.', 'Sofía L.', 'Andrés F.', 'Laura V.', 'Diego H.', 'Paula N.', 'Álvaro C.', 'Irene B.', 'Hugo T.', 'Carmen A.', 'Mario E.', 'Nerea O.', 'Raúl Q.', 'Alba J.', 'Sergio K.', 'Inés Z.', 'Tomás Y.', 'Clara W.', 'Adrián U.'];
const AVATARS = ['🩺', '🫀', '⚡', '🧠', '💉', '🩻', '🔬', '📈', '🧬', '💊'];

// Lunes de la semana (local) como identificador.
export function weekId(d = new Date()) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return dayKey(x);
}

function weekDays(id) {
  const start = new Date(`${id}T00:00:00`);
  return [...Array(7)].map((_, i) => dayKey(new Date(start.getTime() + i * 864e5)));
}

export const weekXp = (id = weekId()) => weekDays(id).reduce((a, d) => a + xpOn(d), 0);

// Rivales simulados: su XP crece a lo largo de la semana de forma determinista.
function rivals(id, tier) {
  const r = seeded(`${id}:${tier}`);
  const start = new Date(`${id}T00:00:00`).getTime();
  const elapsed = Math.min(1, Math.max(0, (Date.now() - start) / (7 * 864e5)));
  const names = [...NAMES];
  return [...Array(SIZE - 1)].map(() => {
    const pace = (20 + r() * 260) * (1 + tier * 0.25);
    const curve = Math.pow(elapsed, 0.6 + r() * 0.8);
    return { name: names.splice(Math.floor(r() * names.length), 1)[0], avatar: AVATARS[Math.floor(r() * AVATARS.length)], xp: Math.round(pace * curve * (r() < 0.15 ? 0.1 : 1)) };
  });
}

export function leaderboard(id = weekId()) {
  const s = getState();
  const me = { name: s.name || 'Tú', avatar: '😊', xp: weekXp(id), me: true };
  return [...rivals(id, s.league.tier), me].sort((a, b) => b.xp - a.xp || (a.me ? -1 : 1)).map((p, i) => ({ ...p, rank: i + 1 }));
}

// Al empezar una semana nueva se resuelve la anterior (ascenso / descenso).
export function settleLeague() {
  const s = getState();
  const now = weekId();
  if (s.league.week === now) return null;
  let result = null;
  if (s.league.week && weekXp(s.league.week) > 0) {
    const rank = leaderboard(s.league.week).find((p) => p.me).rank;
    const from = s.league.tier;
    let tier = from;
    if (rank <= PROMOTE) tier = Math.min(LEAGUES.length - 1, from + 1);
    else if (rank > SIZE - DEMOTE) tier = Math.max(0, from - 1);
    result = { rank, from, to: tier };
    update((x) => { x.league.tier = tier; });
  }
  update((x) => {
    x.league.week = now;
    x.lastLeagueResult = result;
  });
  return result;
}

export function msToWeekEnd() {
  const start = new Date(`${weekId()}T00:00:00`).getTime();
  return start + 7 * 864e5 - Date.now();
}
