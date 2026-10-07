// Utilidades de interfaz compartidas por las vistas.
import { getState, dayKey, xpOn } from './storage.js';
import { courseById } from './data/courses.js';
import { unclaimedQuests, nextReminderDelay, REMINDER_TEXT, todaysQuests, leaderboard, LEAGUES, weekXp, PROMOTE } from './game.js';
import { countUp, bump, cora } from './fx.js';

export const app = document.getElementById('app');
export const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
export const go = (hash) => { location.hash = hash; };
export const currentCourse = () => courseById(getState().course) || courseById('ecg');
// Animaciones "de desplazamiento" sólo si el usuario no pide movimiento reducido.
export const motionOK = () => !(typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches);
export const scrollBehavior = () => (motionOK() ? 'smooth' : 'auto');

// Últimos valores mostrados en la topbar: al cambiar, el número sube con animación.
let shown = null;
const TB_KEYS = ['streak', 'xp', 'gems', 'hearts'];

export function topbar() {
  const s = getState();
  const c = currentCourse();
  const v = (k) => (shown ? shown[k] : s[k]);
  return `
    <header class="topbar">
      <a href="#/cursos" class="tb-course" title="Cambiar de curso" aria-label="Curso actual: ${esc(c.subtitle || c.title)}. Cambiar de curso"><span aria-hidden="true">${c.icon}</span></a>
      <a href="#/racha" class="tb-stat ${s.lastDay === dayKey() ? 'lit' : 'dim'}" title="Racha" aria-label="Racha: ${s.streak} días"><span aria-hidden="true">🔥</span> <span data-tb="streak">${v('streak')}</span></a>
      <a href="#/perfil" class="tb-stat xp" title="XP total" aria-label="XP total: ${s.xp}"><span aria-hidden="true">⚡</span> <span data-tb="xp">${v('xp')}</span></a>
      <a href="#/tienda" class="tb-stat gem" title="Gemas" aria-label="Gemas: ${s.gems}. Ir a la tienda"><span aria-hidden="true">💎</span> <span data-tb="gems">${v('gems')}</span></a>
      <a href="#/tienda" class="tb-stat heart" title="Vidas" aria-label="Vidas: ${s.hearts}"><span aria-hidden="true">❤️</span> <span data-tb="hearts">${v('hearts')}</span></a>
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
  ['#/tienda', '🛍️', 'Tienda', 'shop'], // sólo en la barra lateral de escritorio
];

// En móvil es la barra inferior; en escritorio (≥ 900 px) el CSS la convierte en barra lateral.
export function bottomnav(active) {
  const n = unclaimedQuests();
  const dot = n ? '<i class="dot" aria-hidden="true"></i>' : '';
  const items = NAV.map(([h, i, l, k]) => `<a href="${h}" class="${active === k ? 'active' : ''} ${k === 'shop' ? 'desk-only' : ''}" ${active === k ? 'aria-current="page"' : ''}${k === 'quests' && n ? ` aria-label="${l} (${n} recompensa${n > 1 ? 's' : ''} sin recoger)"` : ''}><span class="ni" aria-hidden="true">${i}${k === 'quests' ? dot : ''}</span><span class="nl">${l}</span></a>`).join('');
  return `<nav class="bottomnav" aria-label="Navegación principal"><a href="#/" class="nav-logo" aria-label="Corazone, inicio">${cora('happy', 40)}<span>corazone</span></a>${items}</nav>`;
}

// Columna derecha (escritorio ancho): misiones del día, liga y meta diaria. Oculta en móvil.
export function rail() {
  const s = getState();
  const quests = todaysQuests();
  const me = leaderboard().find((p) => p.me);
  const lg = LEAGUES[s.league?.tier || 0];
  const today = xpOn(dayKey());
  const goal = s.dailyGoal || 20;
  const pct = (a, b) => Math.min(100, Math.round((a / Math.max(1, b)) * 100));
  return `
    <aside class="rail" aria-label="Tu progreso">
      <section class="widget">
        <div class="w-head"><h3>Liga ${esc(lg.name)}</h3><a href="#/ligas">VER LIGA</a></div>
        ${weekXp() ? `<div class="w-row"><span class="w-ico" style="--lc:${lg.color}" aria-hidden="true">🛡️</span><p>Estás en el puesto <b>#${me.rank}</b> con <b>${me.xp} XP</b> esta semana.${me.rank <= PROMOTE ? ' <span class="w-up">¡En zona de ascenso!</span>' : ''}</p></div>`
          : `<div class="w-row">${cora('think', 56)}<p>Completa una lección para entrar en la clasificación de esta semana.</p></div>`}
      </section>
      <section class="widget">
        <div class="w-head"><h3>Misiones del día</h3><a href="#/misiones">VER TODAS</a></div>
        ${quests.map((q) => `
          <div class="w-quest"><span aria-hidden="true">${q.icon}</span><div><b>${esc(q.text)}</b>
            <div class="qbar"><div class="bar small" role="progressbar" aria-valuemin="0" aria-valuemax="${q.target}" aria-valuenow="${q.value}" aria-label="${esc(q.text)}"><div class="bar-fill" style="width:${pct(q.value, q.target)}%"></div></div><small>${q.value}/${q.target}</small></div></div>
            <span aria-hidden="true">${q.claimed ? '✅' : q.done ? '🎁' : ''}</span></div>`).join('')}
      </section>
      <section class="widget">
        <div class="w-head"><h3>Meta diaria</h3><a href="#/racha">RACHA</a></div>
        <div class="w-row"><span class="w-ico" aria-hidden="true">${today >= goal ? '🎉' : '⚡'}</span><div style="flex:1"><b>${today} / ${goal} XP hoy</b>
          <div class="bar small goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${Math.min(today, goal)}" aria-label="Meta diaria"><div class="bar-fill" style="width:${pct(today, goal)}%"></div></div></div></div>
      </section>
    </aside>`;
}

export function shell(content, active) {
  app.innerHTML = `<div class="app-shell">${topbar()}<main class="page" id="main">${content}</main>${bottomnav(active)}${rail()}</div>`;
  window.scrollTo(0, 0);
  animateTopbar();
  scheduleReminder();
}

// Pantalla completa sin barras (onboarding, resultados…)
export function screen(content, cls = '') {
  app.innerHTML = `<div class="center-screen ${cls}">${content}</div>`;
  window.scrollTo(0, 0);
}

// Estado vacío amable con Cora.
export function emptyState({ mood = 'happy', title, text = '', action = '' }) {
  return `<div class="empty-state pop-in">${cora(mood, 110)}<h2>${esc(title)}</h2>${text ? `<p class="muted">${esc(text)}</p>` : ''}${action}</div>`;
}

// Esqueleto de carga (se muestra si una vista tarda en llegar, p. ej. al cargar un curso).
export function skeleton(label = 'Cargando…') {
  app.innerHTML = `
    <div class="app-shell loading" aria-busy="true">
      <main class="page" id="main">
        <p class="sr-only" role="status">${esc(label)}</p>
        <div class="sk sk-head"></div>
        ${[0, 55, 85, 55, 0].map((x) => `<div class="sk sk-node" style="--x:${x}px"></div>`).join('')}
      </main>
    </div>`;
}

// Pantalla de error si una vista falla: nunca dejamos la app en blanco.
export function errorScreen(err) {
  console.error(err);
  screen(`
    ${cora('sad', 130)}
    <h1>Algo ha fallado</h1>
    <p class="muted">No hemos podido abrir esta pantalla. Tu progreso está a salvo.</p>
    <details class="err-detail"><summary>Detalles técnicos</summary><code>${esc(err?.message || err)}</code></details>
    <a class="btn primary" href="#/" data-act="home">Volver al inicio</a>
    <button class="btn ghost" data-act="reload">Reintentar</button>`, 'error-screen');
  app.querySelector('[data-act=reload]').onclick = () => location.reload();
}

export function modal(html) {
  const el = document.createElement('div');
  el.className = 'modal-back';
  el.innerHTML = `<div class="sheet slide-up" role="dialog" aria-modal="true" tabindex="-1">${html}</div>`;
  const prev = document.activeElement;
  const close = () => { el.remove(); document.removeEventListener('keydown', onKey); prev?.focus?.(); };
  const onKey = (e) => { if (e.key === 'Escape' && el.isConnected) close(); };
  el.addEventListener('click', (e) => { if (e.target === el || e.target.closest('[data-close]')) close(); });
  document.addEventListener('keydown', onKey);
  document.body.appendChild(el);
  (el.querySelector('.btn, button, a[href]') || el.querySelector('.sheet')).focus?.();
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
