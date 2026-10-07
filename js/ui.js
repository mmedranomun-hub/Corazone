// Utilidades de interfaz compartidas por las vistas.
import { getState, dayKey } from './storage.js';
import { courseById } from './data/courses.js';
import { unclaimedQuests, nextReminderDelay, REMINDER_TEXT } from './game.js';
import { countUp, bump } from './fx.js';

export const app = document.getElementById('app');
export const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
export const go = (hash) => { location.hash = hash; };
export const currentCourse = () => courseById(getState().course) || courseById('ecg');

// Últimos valores mostrados en la topbar: al cambiar, el número sube con animación.
let shown = null;
const TB_KEYS = ['streak', 'xp', 'gems', 'hearts'];

export function topbar() {
  const s = getState();
  const c = currentCourse();
  const v = (k) => (shown ? shown[k] : s[k]);
  return `
    <header class="topbar">
      <a href="#/cursos" class="tb-course" title="Cambiar de curso">${c.icon}</a>
      <a href="#/racha" class="tb-stat ${s.lastDay === dayKey() ? 'lit' : 'dim'}" title="Racha">🔥 <span data-tb="streak">${v('streak')}</span></a>
      <a href="#/perfil" class="tb-stat xp" title="XP total">⚡ <span data-tb="xp">${v('xp')}</span></a>
      <a href="#/tienda" class="tb-stat gem" title="Gemas">💎 <span data-tb="gems">${v('gems')}</span></a>
      <a href="#/tienda" class="tb-stat heart" title="Vidas">❤️ <span data-tb="hearts">${v('hearts')}</span></a>
    </header>`;
}

export function animateTopbar() {
  const s = getState();
  for (const k of TB_KEYS) {
    const el = app.querySelector(`[data-tb="${k}"]`);
    if (!el || !shown || shown[k] === s[k]) continue;
    if (k === 'gems' || k === 'xp') countUp(el, s[k], { from: shown[k], dur: 800 });
    else { el.textContent = s[k]; bump(el.parentElement); }
  }
  shown = Object.fromEntries(TB_KEYS.map((k) => [k, s[k]]));
}

const NAV = [
  ['#/', '🏠', 'Aprender', 'learn'],
  ['#/practicar', '🏋️', 'Practicar', 'practice'],
  ['#/ligas', '🏆', 'Ligas', 'leagues'],
  ['#/misiones', '🎯', 'Misiones', 'quests'],
  ['#/perfil', '👤', 'Perfil', 'profile'],
];

export function bottomnav(active) {
  const dot = unclaimedQuests() ? '<i class="dot"></i>' : '';
  return `<nav class="bottomnav">${NAV.map(([h, i, l, k]) => `<a href="${h}" class="${active === k ? 'active' : ''}"><span>${i}${k === 'quests' ? dot : ''}</span>${l}</a>`).join('')}</nav>`;
}

export function shell(content, active) {
  app.innerHTML = `${topbar()}<main class="page">${content}</main>${bottomnav(active)}`;
  window.scrollTo(0, 0);
  animateTopbar();
  scheduleReminder();
}

// Pantalla completa sin barras (onboarding, resultados…)
export function screen(content, cls = '') {
  app.innerHTML = `<div class="center-screen ${cls}">${content}</div>`;
  window.scrollTo(0, 0);
}

export function modal(html) {
  const el = document.createElement('div');
  el.className = 'modal-back';
  el.innerHTML = `<div class="sheet slide-up">${html}</div>`;
  el.addEventListener('click', (e) => { if (e.target === el || e.target.closest('[data-close]')) el.remove(); });
  document.body.appendChild(el);
  return el;
}

export const fmtTime = (ms) => {
  const h = Math.floor(ms / 36e5);
  return h >= 24 ? `${Math.floor(h / 24)} d` : h >= 1 ? `${h} h` : `${Math.max(1, Math.ceil(ms / 6e4))} min`;
};

export function applyTheme() {
  const t = getState().theme;
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
  else delete document.documentElement.dataset.theme;
}

// ---------- Recordatorio diario (Notification API) ----------
export const notifySupported = () => typeof window !== 'undefined' && 'Notification' in window;
let reminderTimer = null;
let reminderArmed = null;

async function showReminder() {
  const opts = { body: REMINDER_TEXT.body, icon: 'icons/icon.svg', badge: 'icons/icon.svg', tag: 'corazone-daily', lang: 'es' };
  try {
    const reg = 'serviceWorker' in navigator ? await navigator.serviceWorker.getRegistration() : null;
    if (reg?.showNotification) return reg.showNotification(REMINDER_TEXT.title, opts);
    new Notification(REMINDER_TEXT.title, opts);
  } catch { /* sin notificaciones */ }
}

// Programa el aviso mientras la app esté abierta/instalada (setTimeout) y, si el navegador
// soporta Notification Triggers, también lo deja programado en el service worker.
export function scheduleReminder(force = false) {
  const s = getState();
  const key = `${s.reminder?.on}|${s.reminder?.time}|${s.lastDay}`;
  if (!force && key === reminderArmed) return;
  reminderArmed = key;
  clearTimeout(reminderTimer);
  if (!s.reminder?.on || !notifySupported() || Notification.permission !== 'granted') return;
  const delay = nextReminderDelay(s.reminder.time, new Date(), s.lastDay === dayKey());
  reminderTimer = setTimeout(() => {
    if (getState().lastDay !== dayKey()) showReminder();
    reminderArmed = null;
    scheduleReminder(true);
  }, Math.min(delay, 2 ** 31 - 1));
  if (typeof window.TimestampTrigger === 'function' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(async (reg) => {
      (await reg.getNotifications({ tag: 'corazone-daily', includeTriggered: true })).forEach((n) => n.close());
      return reg.showNotification(REMINDER_TEXT.title, {
        body: REMINDER_TEXT.body, icon: 'icons/icon.svg', tag: 'corazone-daily', showTrigger: new window.TimestampTrigger(Date.now() + delay),
      });
    }).catch(() => {});
  }
}

export async function requestNotify() {
  if (!notifySupported()) return 'unsupported';
  try {
    if (Notification.permission === 'default') return await Notification.requestPermission();
    return Notification.permission;
  } catch {
    return 'denied';
  }
}
