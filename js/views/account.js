// Cuentas: tarjeta del perfil, Entrar, Registro y Cuenta. Sin Firebase configurado,
// las pantallas explican que las cuentas aún no están activadas (modo local).
import { getState, update, resetProgress } from '../storage.js';
import * as auth from '../auth.js';
import { syncStatus, onStatus, stop as stopSync } from '../sync.js';
import { screen, esc, go, app, modal } from '../ui.js';
import { cora, sfx } from '../fx.js';

const DOCS = 'docs/CUENTAS.md';
const STATUS = {
  local: '',
  syncing: '🔄 Sincronizando…',
  synced: '☁️ Progreso sincronizado',
  saving: '⏳ Guardando…',
  offline: '📴 Sin conexión · se guardará al volver',
  error: '⚠️ No se pudo sincronizar',
};
const statusText = () => STATUS[syncStatus()] ?? '';

const GOOGLE_G = '<svg class="g-logo" viewBox="0 0 48 48" width="20" height="20" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';

// ---------- Tarjeta "Cuenta" del perfil ----------
export function accountCard() {
  const u = auth.currentUser();
  if (!u) {
    return `<section class="account-card" data-account-card>
      <div class="acc-row">${cora('happy', 56)}<div><b>Crea tu perfil para guardar tu progreso</b><small>Continúa en cualquier dispositivo justo donde lo dejaste.</small></div></div>
      <a class="btn primary" href="#/registro" style="--accent:var(--green)">Registrarse</a>
      <a class="btn ghost" href="#/entrar">Iniciar sesión</a>
    </section>`;
  }
  return `<section class="account-card" data-account-card>
    <div class="acc-row"><div class="acc-avatar">☁️</div><div><b>${esc(u.displayName || getState().name || 'Tu cuenta')}</b><small>${esc(u.email || '')}</small></div></div>
    <p class="sync-status" data-sync-status>${statusText()}</p>
    <button class="btn ghost" data-signout>Cerrar sesión</button>
  </section>`;
}

let wired = false;
// Engancha los botones de la tarjeta y la mantiene al día (sesión y estado de sincronización).
export function bindAccountCard(root = app) {
  root.querySelector('[data-account-card] [data-signout]')?.addEventListener('click', confirmSignOut);
  if (wired) return;
  wired = true;
  const refresh = () => {
    const el = document.querySelector('[data-account-card]');
    if (!el) return;
    el.outerHTML = accountCard();
    bindAccountCard(document);
  };
  auth.onUser(refresh);
  onStatus((s) => {
    const el = document.querySelector('[data-sync-status]');
    if (el) el.textContent = STATUS[s] ?? '';
  });
}

function confirmSignOut() {
  sfx('Tap');
  const m = modal(`${cora('sad', 80)}<h2>¿Cerrar sesión?</h2>
    <p class="muted">Tu progreso está guardado en la nube. ¿Quieres borrar también los datos de este dispositivo?</p>
    <button class="btn primary" data-keep style="--accent:var(--blue)">Cerrar sesión y mantener datos</button>
    <button class="btn ghost danger-soft" data-wipe>Cerrar sesión y borrar datos</button>
    <button class="btn ghost" data-close>Cancelar</button>`);
  const out = async (wipe) => {
    m.querySelectorAll('button').forEach((b) => (b.disabled = true));
    await stopSync();
    await auth.signOut().catch(() => {});
    m.remove();
    if (wipe) { resetProgress(); go('#/'); } else go('#/perfil');
  };
  m.querySelector('[data-keep]').onclick = () => out(false);
  m.querySelector('[data-wipe]').onclick = () => out(true);
}

// ---------- Pantallas ----------
const top = (back = '#/perfil') => `<div class="auth-top"><a class="icon-btn" href="${back}" aria-label="Cerrar">✕</a></div>`;

function notConfigured(title) {
  screen(`${top()}
    <div class="auth-box">
      ${cora('think', 110)}
      <h1>${esc(title)}</h1>
      <p class="muted">Las cuentas aún no están activadas en esta versión de Corazone. Tu progreso se guarda en este dispositivo.</p>
      <p class="muted small">¿Eres quien publica la app? Sigue la guía para activarlas con Firebase.</p>
      <a class="btn ghost" href="${DOCS}" target="_blank" rel="noopener">Ver cómo activarlas</a>
      <a class="btn primary" href="#/perfil" style="--accent:var(--green)">Volver</a>
    </div>`, 'auth');
}

function msg(text, ok = false) {
  const el = app.querySelector('.auth-msg');
  if (!el) return;
  el.textContent = text;
  el.classList.toggle('ok', ok);
}

async function run(btn, fn) {
  msg('');
  if (!navigator.onLine) return msg(auth.authError({ code: 'auth/network-request-failed' }));
  const label = btn.innerHTML;
  btn.disabled = true;
  btn.textContent = 'Un momento…';
  try {
    await fn();
  } catch (e) {
    msg(auth.authError(e));
  } finally {
    if (btn.isConnected) { btn.disabled = false; btn.innerHTML = label; }
  }
}

const done = () => { sfx('Correct'); go('#/perfil'); };

export function viewSignIn() {
  if (!auth.isConfigured()) return notConfigured('Iniciar sesión');
  if (auth.currentUser()) return go('#/cuenta');
  screen(`${top()}
    <div class="auth-box">
      <div class="cora-row">${cora('happy', 84)}<div class="speech pop-in">¡Hola de nuevo! 🫀</div></div>
      <h1>Iniciar sesión</h1>
      <form class="auth-form" novalidate>
        <label class="field"><span>Email</span><input id="au-email" type="email" autocomplete="email" inputmode="email" required placeholder="tu@email.com"/></label>
        <label class="field"><span>Contraseña</span><input id="au-pass" type="password" autocomplete="current-password" required placeholder="Contraseña"/></label>
        <p class="auth-msg" role="alert"></p>
        <button class="btn primary" type="submit" style="--accent:var(--blue)">Entrar</button>
        <button class="link-btn" type="button" data-forgot>¿Has olvidado tu contraseña?</button>
      </form>
      <div class="auth-or"><span>o</span></div>
      <button class="btn ghost google" type="button" data-google>${GOOGLE_G}<span>Continuar con Google</span></button>
      <p class="auth-switch">¿No tienes cuenta? <a href="#/registro">Regístrate</a></p>
    </div>`, 'auth');
  const email = app.querySelector('#au-email');
  const pass = app.querySelector('#au-pass');
  const form = app.querySelector('.auth-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    if (!email.value.trim() || !pass.value) return msg('Escribe tu email y tu contraseña.');
    run(form.querySelector('[type=submit]'), async () => { await auth.signIn(email.value, pass.value); done(); });
  };
  app.querySelector('[data-forgot]').onclick = (e) => {
    if (!email.value.trim()) { msg('Escribe tu email arriba y vuelve a pulsar aquí.'); return email.focus(); }
    run(e.currentTarget, async () => {
      await auth.resetPassword(email.value);
      msg(`Te hemos enviado un email a ${email.value.trim()} para restablecer la contraseña.`, true);
    });
  };
  bindGoogle();
}

export function viewSignUp() {
  if (!auth.isConfigured()) return notConfigured('Crear perfil');
  if (auth.currentUser()) return go('#/cuenta');
  const s = getState();
  screen(`${top()}
    <div class="auth-box">
      <div class="cora-row">${cora('cheer', 84)}<div class="speech pop-in">¡Guarda tu progreso!</div></div>
      <h1>Crea tu perfil</h1>
      <form class="auth-form" novalidate>
        <label class="field"><span>Nombre</span><input id="au-name" maxlength="20" autocomplete="given-name" placeholder="Tu nombre" value="${esc(s.name)}"/></label>
        <label class="field"><span>Email</span><input id="au-email" type="email" autocomplete="email" inputmode="email" required placeholder="tu@email.com"/></label>
        <label class="field"><span>Contraseña</span><input id="au-pass" type="password" autocomplete="new-password" minlength="6" required placeholder="Mínimo 6 caracteres"/></label>
        <p class="auth-msg" role="alert"></p>
        <button class="btn primary" type="submit" style="--accent:var(--green)">Crear perfil</button>
      </form>
      <div class="auth-or"><span>o</span></div>
      <button class="btn ghost google" type="button" data-google>${GOOGLE_G}<span>Continuar con Google</span></button>
      <p class="auth-switch">¿Ya tienes cuenta? <a href="#/entrar">Inicia sesión</a></p>
      <p class="muted small">Tu progreso actual se conservará y se guardará en tu cuenta.</p>
    </div>`, 'auth');
  const form = app.querySelector('.auth-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = app.querySelector('#au-name').value.trim();
    const email = app.querySelector('#au-email').value;
    const pass = app.querySelector('#au-pass').value;
    if (!email.trim()) return msg('Escribe tu email.');
    if (pass.length < 6) return msg('La contraseña debe tener al menos 6 caracteres.');
    run(form.querySelector('[type=submit]'), async () => {
      if (name) update((x) => { x.name = name; });
      await auth.signUp(email, pass, name);
      done();
    });
  };
  bindGoogle();
}

function bindGoogle() {
  const b = app.querySelector('[data-google]');
  b.onclick = () => run(b, async () => { if (await auth.signInGoogle()) done(); });
}

export function viewAccount() {
  if (!auth.isConfigured()) return notConfigured('Tu cuenta');
  if (!auth.currentUser()) return go(auth.authReady() ? '#/entrar' : '#/perfil');
  screen(`${top()}<div class="auth-box">${cora('happy', 100)}<h1>Tu cuenta</h1>${accountCard()}</div>`, 'auth');
  bindAccountCard();
}
