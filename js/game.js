// Mecánicas de juego tipo Duolingo: misiones diarias y ligas semanales.
import { getState, daily, update, dayKey, xpOn } from './storage.js';
import { isPremium } from './premium.js';

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

// ---------- Niveles legendarios ----------
// Gratis si hoy ya se ha completado alguna misión diaria (como recompensa por constancia).
export const legendaryFree = () => isPremium() || todaysQuests().some((q) => q.done);

// ---------- Recordatorio diario ----------
export const REMINDER_TEXT = { title: 'Corazone', body: '¡Tu corazón necesita práctica! 🫀 Cora te espera para tu lección de hoy.' };

// Milisegundos hasta el próximo aviso a la hora "HH:MM" (local). Si hoy ya se ha practicado
// o la hora ya pasó, se programa para mañana.
export function nextReminderDelay(time, now = new Date(), practicedToday = false) {
  const [h, m] = String(time || '20:00').split(':').map(Number);
  const at = new Date(now);
  at.setHours(h || 0, m || 0, 0, 0);
  if (practicedToday || at <= now) at.setDate(at.getDate() + 1);
  return at - now;
}

// ---------- Arcade: Contrarreloj ----------
export const TIMED_SECONDS = 75;
export const TIMED_BONUS_SECONDS = 2; // por cada pregunta relámpago acertada
// Multiplicador según aciertos seguidos (combo, contando el actual).
export const timedMultiplier = (combo) => (combo >= 10 ? 4 : combo >= 6 ? 3 : combo >= 3 ? 2 : 1);
export const timedPoints = (combo, kind = 'match') => (kind === 'mc' ? 20 : 10) * timedMultiplier(combo);
export const timedXp = (score) => (score > 0 ? Math.min(30, 5 + Math.floor(score / 50)) : 0);

// ¿Se entiende la etiqueta izquierda fuera de su pregunta? Exige ≥ 2 palabras o ≥ 8 caracteres
// y al menos una palabra de verdad (no sólo números, símbolos o unidades: "≥ 2,5 mm" no vale).
const UNIT_RE = /^(mm|ms|s|seg|cm|mmhg|lpm|mv|ml|l|m\/s|cm\/s|ml\/m2|ml\/m²|m²|cm²|%|x|kg|g|mg|h|min|años?)$/i;
export function meaningfulLabel(label) {
  const t = String(label ?? '').trim();
  const words = t.split(/\s+/).filter((w) => /\p{L}/u.test(w) && !UNIT_RE.test(w.replace(/[.,;:()¿?¡!]/g, '')));
  if (!words.length) return false;
  return words.length >= 2 || t.length >= 8;
}

// Reúne pares (de preguntas match) y preguntas mc cortas sin imagen, sin duplicados.
// `pairs`: autoexplicativos. `shortPairs`: los demás (no demasiado largos), con el enunciado
// de su pregunta en `ctx` para mostrarlo como cabecera si hacen falta para rellenar el tablero.
export function buildTimedPool(questions) {
  const pairs = [];
  const shortPairs = [];
  const seen = new Set();
  const mcs = [];
  for (const q of questions) {
    if (q.type === 'match') {
      for (const [l, r] of q.pairs) {
        const k = `${l}|${r}`;
        if (seen.has(k) || l.length > 42 || r.length > 42 || !String(l).trim() || !String(r).trim()) continue;
        seen.add(k);
        if (meaningfulLabel(l) && String(r).length >= 3) pairs.push({ l, r, key: q.key });
        else shortPairs.push({ l, r, key: q.key, ctx: q.prompt });
      }
    } else if (q.type === 'mc' && !q.ecg && !q.ecg12 && !q.pressure && !q.diagram && !q.context
      && q.prompt.length <= 120 && q.options.length <= 4 && q.options.every((o) => o.length <= 48)) {
      mcs.push(q);
    }
  }
  return { pairs, shortPairs, mcs };
}

// ---------- Búsqueda de lecciones y casos ----------
// Minúsculas y sin tildes: "electro" encuentra "Electrocardiograma", "via" encuentra "Vía".
export const fold = (s) => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

// Busca por título de lección, de caso y de unidad (y curso). Todas las palabras deben aparecer.
// Devuelve el estado de cada resultado ('done' | 'current' | 'locked') con el mismo criterio de
// desbloqueo secuencial que la ruta, y para las bloqueadas la lección que hay que hacer antes.
export function searchLessons(courses, query, completed = {}, limit = 40) {
  const terms = fold(query).split(/\s+/).filter((t) => t.length > 0);
  if (!terms.length) return [];
  const out = [];
  for (const c of courses) {
    const flat = c.units.flatMap((u, ui) => u.lessons.map((l, li) => ({ l, u, ui, li })));
    const firstOpen = flat.findIndex(({ l }) => !completed[l.id]);
    flat.forEach(({ l, u, ui, li }, i) => {
      const f = { lesson: fold(l.title), case: fold(l.case?.title), unit: fold(u.title), course: fold(`${c.title} ${c.subtitle || ''}`) };
      const hay = `${f.lesson} ${f.case} ${f.unit} ${f.course}`;
      if (!terms.every((t) => hay.includes(t))) return;
      const score = terms.reduce((a, t) => a + (f.lesson.includes(t) ? 4 : f.case.includes(t) ? 3 : f.unit.includes(t) ? 1 : 0), 0)
        + (f.lesson.startsWith(terms[0]) ? 2 : 0);
      const state = completed[l.id] ? 'done' : i === firstOpen ? 'current' : 'locked';
      const unitStart = flat.findIndex((x) => x.u === u);
      const unitLocked = state === 'locked' && firstOpen >= 0 && unitStart > firstOpen && u.lessons.every((x) => !completed[x.id]);
      out.push({ course: c, unit: u, lesson: l, unitIndex: ui, lessonIndex: li, state, score, unitLocked,
        blocker: state === 'locked' && firstOpen >= 0 ? flat[firstOpen].l : null });
    });
  }
  return out.sort((a, b) => b.score - a.score).slice(0, limit);
}

// Puntuación de una guardia: XP base + 2 por pregunta acertada.
export const storyXp = (correct) => 10 + 2 * correct;
