// Sincronización del progreso con Firestore: documento users/{uid} = { data: JSON del estado, updatedAt, v }.
// Al iniciar sesión se descarga el remoto y se fusiona con el local (mergeStates, pura);
// después cada guardado se sube con debounce, al volver la conexión y al ocultar la pestaña.
import { exportState, importState, onSave } from './storage.js';
import * as auth from './auth.js';

const DEBOUNCE_MS = 2000;
const LESSON_ROUTES = ['leccion', 'legendario', 'prueba', 'repaso-unidad', 'contrarreloj', 'guardia'];

// ---------- Fusión pura ----------
const obj = (x) => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
const num = (x) => (Number.isFinite(x) ? x : 0);
const isBlank = (s) => !num(s?.xp) && !Object.keys(obj(s?.completed)).length;

function maxByKey(a, b) {
  const out = { ...obj(a) };
  for (const [k, v] of Object.entries(obj(b))) out[k] = Math.max(num(out[k]), num(v));
  return out;
}

const union = (a, b) => (Array.isArray(a) || Array.isArray(b) ? [...new Set([...(a || []), ...(b || [])])] : { ...obj(a), ...obj(b) });

// Repaso: unión; en conflicto gana la caja menor (más trabajo pendiente) y, a igualdad, la del estado más reciente.
function mergeReview(older, newer) {
  const out = { ...obj(older) };
  for (const [k, r] of Object.entries(obj(newer))) {
    const o = out[k];
    out[k] = !o || num(r?.box) <= num(o?.box) ? r : o;
  }
  return out;
}

// Contadores del día: si es el mismo día, máximo de cada contador; si no, el del día más reciente.
function mergeDaily(a, b) {
  a = obj(a); b = obj(b);
  if (a.day && a.day === b.day) return { ...maxByKey(a, b), day: a.day };
  return String(a.day || '') >= String(b.day || '') ? a : b;
}

export function mergeStates(local, remote) {
  if (!remote || typeof remote !== 'object') return { ...(local || {}) };
  if (!local || typeof local !== 'object') return { ...remote };
  // "Más reciente" = mayor updatedAt; un estado en blanco (dispositivo nuevo) nunca manda sobre uno con progreso.
  let newerIsLocal = num(local.updatedAt) >= num(remote.updatedAt);
  if (isBlank(local) !== isBlank(remote)) newerIsLocal = !isBlank(local);
  const newer = newerIsLocal ? local : remote;
  const older = newerIsLocal ? remote : local;
  // Ajustes, vidas, liga, protectores… del más reciente
  const m = { ...older, ...newer };
  if (!m.name) m.name = older.name || '';

  m.xp = Math.max(num(local.xp), num(remote.xp));
  m.completed = maxByKey(local.completed, remote.completed);
  m.xpByDay = maxByKey(local.xpByDay, remote.xpByDay);
  m.legendary = union(local.legendary, remote.legendary);
  m.stories = union(local.stories, remote.stories);
  m.claimed = union(local.claimed, remote.claimed);
  m.frozenDays = union(local.frozenDays, remote.frozenDays);
  m.review = mergeReview(older.review, newer.review);
  m.daily = mergeDaily(local.daily, remote.daily);
  for (const k of ['perfect', 'answered', 'correct', 'boostUntil']) m[k] = Math.max(num(local[k]), num(remote[k]));
  if (local.records || remote.records) m.records = maxByKey(local.records, remote.records);
  // Gemas: máximo (salvo que un lado esté en blanco, con las 500 iniciales)
  m.gems = isBlank(local) !== isBlank(remote) ? num(newer.gems) : Math.max(num(local.gems), num(remote.gems));

  // Racha: la del estado con el último día de práctica más reciente; a igualdad, la mayor.
  const ld = (s) => String(s.lastDay || '');
  const sk = ld(local) > ld(remote) ? local : ld(remote) > ld(local) ? remote : num(local.streak) >= num(remote.streak) ? local : remote;
  m.streak = num(sk.streak);
  m.lastDay = sk.lastDay ?? null;
  m.bestStreak = Math.max(num(local.bestStreak), num(remote.bestStreak), m.streak);
  m.chestDay = String(local.chestDay || '') >= String(remote.chestDay || '') ? local.chestDay ?? null : remote.chestDay ?? null;

  m.joined = Math.min(...[local.joined, remote.joined].filter(Number.isFinite), Date.now());
  m.onboarded = !!(local.onboarded || remote.onboarded);
  m.updatedAt = Math.max(num(local.updatedAt), num(remote.updatedAt));
  return m;
}

// ---------- Estado de la sincronización ----------
// 'local' (sin sesión) | 'syncing' | 'synced' | 'saving' | 'offline' | 'error'
let status = 'local';
const statusSubs = new Set();
let uid = null;
let timer = null;
let pending = false;
let started = false;

export const syncStatus = () => status;
export function onStatus(fn) {
  statusSubs.add(fn);
  return () => statusSubs.delete(fn);
}
function setStatus(s) {
  status = s;
  statusSubs.forEach((fn) => { try { fn(s); } catch { /* */ } });
}

const online = () => typeof navigator === 'undefined' || navigator.onLine !== false;

function ref() {
  const fs = auth.firestore();
  return fs && uid ? { F: fs.F, r: fs.F.doc(fs.db, 'users', uid) } : null;
}

async function pull() {
  const x = ref();
  if (!x) return null;
  const snap = await x.F.getDoc(x.r);
  if (!snap.exists()) return null;
  try { return JSON.parse(snap.data().data); } catch { return null; }
}

// Sube el estado actual ya (cancela el debounce).
export async function flush() {
  clearTimeout(timer);
  timer = null;
  const x = ref();
  if (!x || !pending) return;
  if (!online()) return setStatus('offline');
  pending = false;
  setStatus('saving');
  try {
    const s = exportState();
    await x.F.setDoc(x.r, { data: JSON.stringify(s), updatedAt: s.updatedAt || Date.now(), v: 1 });
    if (!pending) setStatus('synced');
  } catch (e) {
    pending = true;
    setStatus(online() ? 'error' : 'offline');
  }
}

function schedule() {
  if (!uid) return;
  pending = true;
  setStatus(online() ? 'saving' : 'offline');
  clearTimeout(timer);
  timer = setTimeout(flush, DEBOUNCE_MS);
}

function rerender() {
  const view = location.hash.replace(/^#\/?/, '').split('/')[0];
  window.dispatchEvent(new Event('corazone:synced'));
  if (LESSON_ROUTES.includes(view)) return;
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

// Descarga, fusiona y sube. Se llama al iniciar sesión (o al restaurarse la sesión).
async function start(u) {
  uid = u.uid;
  if (!online()) { pending = true; return setStatus('offline'); }
  setStatus('syncing');
  try {
    const remote = await pull();
    if (uid !== u.uid) return; // la sesión cambió mientras tanto
    const local = exportState();
    if (!local.name && u.displayName) local.name = u.displayName.slice(0, 20);
    const merged = remote ? mergeStates(local, remote) : local;
    const changed = JSON.stringify(merged) !== JSON.stringify(exportState());
    if (changed) importState(merged); // dispara onSave → schedule
    pending = true;
    await flush();
    if (changed) rerender();
  } catch {
    pending = true;
    setStatus(online() ? 'error' : 'offline');
  }
}

// Deja de sincronizar (antes de cerrar sesión). Sube lo pendiente si se puede.
export async function stop() {
  if (uid && pending) await flush().catch(() => {});
  clearTimeout(timer);
  uid = null;
  pending = false;
  setStatus('local');
}

// Arranque: no bloquea y no hace nada (ni red) si Firebase no está configurado.
export async function initSync() {
  if (started || !auth.isConfigured()) return false;
  started = true;
  onSave(() => { if (uid) schedule(); });
  auth.onUser((u) => {
    if (u && u.uid !== uid) start(u);
    else if (!u && uid) { clearTimeout(timer); uid = null; pending = false; setStatus('local'); }
  });
  window.addEventListener('online', () => { if (uid) { if (pending) flush(); else setStatus('synced'); } });
  window.addEventListener('offline', () => { if (uid) setStatus('offline'); });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  try {
    await auth.init();
    return true;
  } catch {
    return false; // sin red al arrancar: auth.init() se reintenta al entrar o registrarse
  }
}
