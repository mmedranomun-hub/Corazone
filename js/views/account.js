// Cuentas: tarjeta del perfil, Entrar, Registro y Cuenta (Mi perfil · Cambiar de perfil · Pasar mi progreso).
// Con Firebase configurado, Entrar/Registro usan la nube; sin él, perfiles locales de este dispositivo
// (js/auth.js). Exportar/importar el progreso (código o archivo) funciona en ambos modos.
import { getState, update, resetProgress, activeProfileId, onProfile } from '../storage.js';
import * as auth from '../auth.js';
import { syncStatus, onStatus, stop as stopSync, makeBackup, encodeBackup, readBackup, backupSummary, applyBackup, backupFileName } from '../sync.js';
import { screen, esc, go, app, modal } from '../ui.js';
import { cora, sfx } from '../fx.js';

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
const initial = (n) => esc((n || '?').trim()[0]?.toUpperCase() || '?');
const LOCAL_NOTE = 'Los perfiles se guardan sólo en este dispositivo. Para seguir en otro, usa «Pasar mi progreso».';

export function accountCard() {
  const u = auth.currentUser();
  const lp = auth.localProfile();
  if (u) {
    return `<section class="account-card" data-account-card>
    <div class="acc-row"><div class="acc-avatar">☁️</div><div><b>${esc(u.displayName || getState().name || 'Tu cuenta')}</b><small>${esc(u.email || '')}</small></div></div>
    <p class="sync-status" data-sync-status>${statusText()}</p>
    <a class="btn ghost" href="#/cuenta/pasar">Pasar mi progreso a otro dispositivo</a>
    <button class="btn ghost" data-signout>Cerrar sesión</button>
  </section>`;
  }
  if (lp) {
    return `<section class="account-card" data-account-card>
    <div class="acc-row"><div class="acc-avatar local">${initial(lp.name)}</div><div><b>${esc(lp.name)}</b><small>${esc(lp.login)} · 📱 Perfil en este dispositivo</small></div></div>
    <a class="btn ghost" href="#/cuenta/cambiar">Cambiar de perfil</a>
    <a class="btn ghost" href="#/cuenta/pasar">Pasar mi progreso a otro dispositivo</a>
    <button class="btn ghost" data-signout>Cerrar sesión</button>
  </section>`;
  }
  const local = !auth.isConfigured();
  return `<section class="account-card" data-account-card>
      <div class="acc-row">${cora('happy', 56)}<div><b>Crea tu perfil para guardar tu progreso</b><small>${local ? 'Tu perfil vive en este dispositivo; con un código puedes pasarlo a otro.' : 'Continúa en cualquier dispositivo justo donde lo dejaste.'}</small></div></div>
      <a class="btn primary" href="#/registro" style="--accent:var(--green)">${local ? 'Crear perfil' : 'Registrarse'}</a>
      <a class="btn ghost" href="#/entrar">${local && auth.hasProfiles() ? 'Ya tengo perfil' : 'Iniciar sesión'}</a>
      <a class="btn ghost" href="#/cuenta/pasar">Pasar mi progreso a otro dispositivo</a>
    </section>`;
}

let wired = false;
// Engancha los botones de la tarjeta y la mantiene al día (sesión, perfil y estado de sincronización).
export function bindAccountCard(root = app) {
  root.querySelector('[data-account-card] [data-signout]')?.addEventListener('click', () => (auth.currentUser() ? confirmSignOut() : confirmLocalSignOut()));
  if (wired) return;
  wired = true;
  const refresh = () => {
    const el = document.querySelector('[data-account-card]');
    if (!el) return;
    el.outerHTML = accountCard();
    bindAccountCard(document);
  };
  auth.onUser(refresh);
  onProfile(refresh);
  onStatus((s) => {
    const el = document.querySelector('[data-sync-status]');
    if (el) el.textContent = STATUS[s] ?? '';
  });
}

// Vuelve a la ruta principal forzando el repintado (aunque el hash no cambie).
function goHome(hash = '#/') {
  if (location.hash === hash || (hash === '#/' && !location.hash)) window.dispatchEvent(new HashChangeEvent('hashchange'));
  else go(hash);
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

function confirmLocalSignOut() {
  sfx('Tap');
  const lp = auth.localProfile();
  const m = modal(`${cora('sad', 80)}<h2>¿Cerrar sesión?</h2>
    <p class="muted">El progreso de <b>${esc(lp?.name || 'tu perfil')}</b> queda guardado en este dispositivo. Podrás volver a entrar con tu contraseña.</p>
    <button class="btn primary" data-out style="--accent:var(--blue)">Cerrar sesión</button>
    <button class="btn ghost" data-close>Cancelar</button>`);
  m.querySelector('[data-out]').onclick = () => {
    auth.signOutLocal();
    m.remove();
    goHome();
  };
}

// ---------- Pantallas ----------
const backHash = () => (getState().onboarded ? '#/perfil' : '#/bienvenida');
const top = (back = backHash()) => `<div class="auth-top"><a class="icon-btn" href="${back}" aria-label="Cerrar">✕</a></div>`;

function msg(text, ok = false) {
  const el = app.querySelector('.auth-msg');
  if (!el) return;
  el.textContent = text;
  el.classList.toggle('ok', ok);
}

async function run(btn, fn, { net = true } = {}) {
  msg('');
  if (net && !navigator.onLine) return msg(auth.authError({ code: 'auth/network-request-failed' }));
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

export function viewSignIn(arg) {
  if (!auth.isConfigured()) return localSignIn(arg);
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
  if (!auth.isConfigured()) return localSignUp();
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

// ---------- Perfiles locales ----------
const profileItem = (p, active = false) => `<button class="profile-item ${active ? 'active' : ''}" type="button" data-pick="${esc(p.id)}">
  <span class="acc-avatar local">${initial(p.name)}</span>
  <span class="pi-text"><b>${esc(p.name)}</b><small>${esc(p.login)}</small></span>
  <span class="pi-xp">${active ? 'Activo' : `⚡ ${p.xp}`}</span></button>`;

function localSignIn(arg) {
  const list = auth.listProfiles();
  const pre = list.find((p) => p.id === arg);
  const guestOk = !auth.localProfile() && !getState().onboarded;
  screen(`${top()}
    <div class="auth-box">
      <div class="cora-row">${cora('happy', 84)}<div class="speech pop-in">${list.length ? '¿Quién está aprendiendo?' : '¡Hola de nuevo! 🫀'}</div></div>
      <h1>Iniciar sesión</h1>
      ${list.length ? `<div class="profile-list">${list.map((p) => profileItem(p, p.id === activeProfileId())).join('')}</div>`
        : '<p class="muted">Todavía no hay perfiles en este dispositivo. Si ya tenías progreso en otro, impórtalo con tu código o archivo.</p>'}
      <form class="auth-form" novalidate>
        <label class="field"><span>Email o usuario</span><input id="au-login" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="tu@email.com" value="${esc(pre?.login || '')}"/></label>
        <label class="field"><span>Contraseña</span><input id="au-pass" type="password" autocomplete="current-password" required placeholder="Contraseña"/></label>
        <p class="auth-msg" role="alert"></p>
        <button class="btn primary" type="submit" style="--accent:var(--blue)">Entrar</button>
      </form>
      <p class="acc-note">📱 ${LOCAL_NOTE}</p>
      <p class="auth-switch">¿No tienes perfil? <a href="#/registro">Crear perfil</a></p>
      <p class="auth-switch">¿Vienes de otro dispositivo? <a href="#/cuenta/pasar">Importar progreso</a></p>
      ${guestOk ? '<a class="btn ghost" href="#/bienvenida">Continuar sin perfil</a>' : ''}
    </div>`, 'auth');
  const login = app.querySelector('#au-login');
  const pass = app.querySelector('#au-pass');
  app.querySelectorAll('[data-pick]').forEach((b) => (b.onclick = () => {
    sfx('Tap');
    const p = list.find((x) => x.id === b.dataset.pick);
    if (p.id === activeProfileId()) return goHome();
    app.querySelectorAll('[data-pick]').forEach((x) => x.classList.toggle('sel', x === b));
    login.value = p.login;
    pass.value = '';
    pass.focus();
  }));
  if (pre) pass.focus();
  const form = app.querySelector('.auth-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    if (!login.value.trim() || !pass.value) return msg('Escribe tu email o usuario y tu contraseña.');
    run(form.querySelector('[type=submit]'), async () => {
      await auth.signInLocal(login.value, pass.value);
      sfx('Correct');
      goHome();
    }, { net: false });
  };
}

function localSignUp() {
  const s = getState();
  const fromGuest = !auth.localProfile();
  const carry = fromGuest && (s.xp || Object.keys(s.completed).length);
  screen(`${top()}
    <div class="auth-box">
      <div class="cora-row">${cora('cheer', 84)}<div class="speech pop-in">¡Guarda tu progreso!</div></div>
      <h1>Crea tu perfil</h1>
      <form class="auth-form" novalidate>
        <label class="field"><span>Nombre</span><input id="au-name" maxlength="20" autocomplete="given-name" placeholder="Tu nombre" value="${fromGuest ? esc(s.name) : ''}"/></label>
        <label class="field"><span>Email o usuario</span><input id="au-login" maxlength="60" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="tu@email.com o un apodo"/></label>
        <label class="field"><span>Contraseña</span><input id="au-pass" type="password" autocomplete="new-password" minlength="6" required placeholder="Mínimo 6 caracteres"/></label>
        <label class="field"><span>Repite la contraseña</span><input id="au-pass2" type="password" autocomplete="new-password" required placeholder="Repite la contraseña"/></label>
        <p class="auth-msg" role="alert"></p>
        <button class="btn primary" type="submit" style="--accent:var(--green)">Crear perfil</button>
      </form>
      <p class="acc-note">📱 Este perfil se guarda <b>sólo en este dispositivo</b> (no hay servidor ni recuperación de contraseña). Para seguir en otro, usa «Pasar mi progreso».</p>
      <p class="muted small">${carry ? `Tu progreso actual (⚡ ${s.xp} XP) pasará a este perfil.` : fromGuest ? 'Tu progreso actual se guardará en este perfil.' : 'El perfil nuevo empieza desde cero; el tuyo queda guardado.'}</p>
      <p class="auth-switch">¿Ya tienes perfil? <a href="#/entrar">Inicia sesión</a></p>
    </div>`, 'auth');
  const form = app.querySelector('.auth-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    const v = (id) => app.querySelector(id).value;
    if (!v('#au-name').trim()) return msg('Escribe tu nombre.');
    if (!v('#au-login').trim()) return msg('Escribe un email o nombre de usuario.');
    if (v('#au-pass').length < 6) return msg('La contraseña debe tener al menos 6 caracteres.');
    if (v('#au-pass') !== v('#au-pass2')) return msg('Las contraseñas no coinciden.');
    run(form.querySelector('[type=submit]'), async () => {
      const p = await auth.createProfile({ name: v('#au-name'), login: v('#au-login'), password: v('#au-pass') });
      if (!getState().name) update((x) => { x.name = p.name; });
      sfx('Correct');
      goHome(getState().onboarded ? '#/perfil' : '#/');
    }, { net: false });
  };
}

// ---------- Pantalla Cuenta: Mi perfil · Cambiar de perfil · Pasar mi progreso ----------
const TABS = [['perfil', 'Mi perfil'], ['cambiar', 'Cambiar de perfil'], ['pasar', 'Pasar progreso']];

export function viewAccount(tab = 'perfil') {
  if (!TABS.some(([k]) => k === tab)) tab = 'perfil';
  const body = tab === 'cambiar' ? switchTab() : tab === 'pasar' ? transferTab() : profileTab();
  screen(`${top()}
    <div class="auth-box acc-screen">
      <h1>Tu cuenta</h1>
      <nav class="tabs acc-tabs">${TABS.map(([k, l]) => `<a href="#/cuenta/${k}" class="${k === tab ? 'active' : ''}">${l}</a>`).join('')}</nav>
      ${body}
    </div>`, 'auth');
  if (tab === 'perfil') bindProfileTab();
  if (tab === 'cambiar') bindSwitchTab();
  if (tab === 'pasar') bindTransferTab();
}

function profileTab() {
  const lp = auth.localProfile();
  const s = getState();
  const stats = `<div class="stats-grid acc-stats"><div><b>⚡ ${s.xp}</b><small>XP</small></div><div><b>📘 ${Object.keys(s.completed).length}</b><small>Lecciones</small></div><div><b>🔥 ${s.streak}</b><small>Racha</small></div></div>`;
  return `${cora('happy', 90)}${accountCard()}${lp || auth.currentUser() ? stats : ''}
    ${lp ? `<p class="acc-note">📱 ${LOCAL_NOTE}</p><button class="link-btn danger-soft" data-delete>Eliminar este perfil de este dispositivo</button>` : ''}`;
}

function bindProfileTab() {
  bindAccountCard();
  app.querySelector('[data-delete]')?.addEventListener('click', () => {
    const lp = auth.localProfile();
    const m = modal(`${cora('sad', 80)}<h2>¿Eliminar «${esc(lp.name)}»?</h2>
      <p class="muted">Se borrará el perfil y todo su progreso de este dispositivo. Si quieres conservarlo, exporta antes tu progreso.</p>
      <label class="field"><span>Contraseña</span><input id="del-pass" type="password" autocomplete="current-password"/></label>
      <p class="auth-msg" role="alert" data-del-msg></p>
      <button class="btn primary" data-del style="--accent:var(--ko)">Eliminar perfil</button>
      <button class="btn ghost" data-close>Cancelar</button>`);
    m.querySelector('[data-del]').onclick = async () => {
      try {
        await auth.deleteProfile(lp.id, m.querySelector('#del-pass').value);
        m.remove();
        goHome();
      } catch (e) {
        m.querySelector('[data-del-msg]').textContent = auth.authError(e);
      }
    };
  });
}

function switchTab() {
  if (auth.isConfigured() && auth.currentUser()) {
    return `<p class="muted">Has iniciado sesión con tu cuenta en la nube. Para usar otra, cierra sesión y entra con la otra cuenta.</p>${accountCard()}`;
  }
  const list = auth.listProfiles();
  const active = activeProfileId();
  return `<p class="muted">Cada perfil tiene su propio progreso. Toca uno para entrar con su contraseña.</p>
    ${list.length ? `<div class="profile-list">${list.map((p) => profileItem(p, p.id === active)).join('')}</div>` : '<p class="muted">Aún no hay perfiles en este dispositivo.</p>'}
    <a class="btn primary" href="#/registro" style="--accent:var(--green)">Añadir perfil</a>
    ${active ? '<button class="btn ghost" data-guest>Usar sin perfil (invitado)</button>' : ''}
    <p class="acc-note">📱 ${LOCAL_NOTE}</p>`;
}

function bindSwitchTab() {
  bindAccountCard();
  app.querySelectorAll('[data-pick]').forEach((b) => (b.onclick = () => {
    sfx('Tap');
    if (b.dataset.pick === activeProfileId()) return go('#/cuenta/perfil');
    go(`#/entrar/${b.dataset.pick}`);
  }));
  app.querySelector('[data-guest]')?.addEventListener('click', () => { auth.signOutLocal(); goHome(); });
}

const summaryLine = (x) => `⚡ ${x.xp} XP · 📘 ${x.lessons} lecciones · 🔥 ${x.streak}`;

function transferTab() {
  return `<section class="acc-section">
      <h2 class="sec-title">Exportar progreso</h2>
      <p class="muted small">Copia este código (o descarga el archivo) y ábrelo en el otro dispositivo en <b>Cuenta → Pasar progreso → Importar</b>.</p>
      <textarea class="code-box" data-code readonly rows="4" aria-label="Código de tu progreso">Generando código…</textarea>
      <p class="muted small" data-code-info></p>
      <div class="acc-btns">
        <button class="btn primary" data-copy style="--accent:var(--blue)" disabled>Copiar código</button>
        <button class="btn ghost" data-download>Descargar archivo</button>
      </div>
      <p class="auth-msg ok" data-export-msg></p>
    </section>
    <section class="acc-section">
      <h2 class="sec-title">Importar progreso</h2>
      <p class="muted small">Pega el código que empieza por <b>CZ1.</b> o elige tu archivo <b>.corazone.json</b>.</p>
      <textarea class="code-box" data-paste rows="4" placeholder="Pega aquí tu código (CZ1.…)" autocapitalize="none" spellcheck="false"></textarea>
      <div class="acc-btns">
        <button class="btn primary" data-check style="--accent:var(--green)">Revisar código</button>
        <label class="btn ghost file-btn">Elegir archivo<input type="file" data-file accept=".json,.corazone.json,application/json,text/plain" hidden/></label>
      </div>
      <p class="auth-msg" role="alert" data-import-msg></p>
      <div data-preview></div>
    </section>
    <p class="acc-note">🔒 El código contiene tu progreso (no tu contraseña). No lo compartas si no quieres que otros lo usen.</p>`;
}

function bindTransferTab() {
  const s = getState();
  const name = auth.localProfile()?.name || auth.currentUser()?.displayName || s.name || '';
  const backup = makeBackup(JSON.parse(JSON.stringify(s)), name);
  const box = app.querySelector('[data-code]');
  const copyBtn = app.querySelector('[data-copy]');
  const exMsg = app.querySelector('[data-export-msg]');
  const imMsg = (t, ok = false) => { const el = app.querySelector('[data-import-msg]'); el.textContent = t; el.classList.toggle('ok', ok); };
  encodeBackup(backup).then((code) => {
    if (!box.isConnected) return;
    box.value = code;
    copyBtn.disabled = false;
    app.querySelector('[data-code-info]').textContent = `${summaryLine(backupSummary(backup))} · ${code.length.toLocaleString('es-ES')} caracteres`;
  }).catch(() => { box.value = 'No se pudo generar el código. Descarga el archivo.'; });
  box.onfocus = () => box.select();
  copyBtn.onclick = async () => {
    sfx('Tap');
    try { await navigator.clipboard.writeText(box.value); } catch { box.select(); document.execCommand?.('copy'); }
    exMsg.textContent = '¡Código copiado! Pégalo en el otro dispositivo.';
  };
  app.querySelector('[data-download]').onclick = () => {
    sfx('Tap');
    const blob = new Blob([JSON.stringify(backup, null, 1)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = backupFileName(name);
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    exMsg.textContent = 'Archivo descargado. Ábrelo desde el otro dispositivo en «Importar progreso».';
  };

  const preview = app.querySelector('[data-preview]');
  const check = async (text) => {
    imMsg('');
    preview.innerHTML = '';
    try {
      showPreview(await readBackup(text));
    } catch (e) {
      sfx('Wrong');
      imMsg(e?.code === 'backup/invalid' ? e.message : 'No se pudo leer el código. Cópialo entero e inténtalo de nuevo.');
    }
  };
  app.querySelector('[data-check]').onclick = () => check(app.querySelector('[data-paste]').value);
  app.querySelector('[data-file]').onchange = async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 3e6) return imMsg('El archivo es demasiado grande para ser una copia de Corazone.');
    check(await f.text());
    e.target.value = '';
  };

  function showPreview(b) {
    const x = backupSummary(b);
    const cur = backupSummary({ state: getState() });
    const when = x.exportedAt ? new Date(x.exportedAt).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' }) : '';
    preview.innerHTML = `<div class="backup-preview pop-in">
      <div class="acc-row"><div class="acc-avatar local">${initial(x.name || 'C')}</div><div><b>${esc(x.name || 'Progreso sin nombre')}</b><small>${summaryLine(x)}${when ? ` · ${esc(when)}` : ''}</small></div></div>
      <p class="muted small">Tu progreso aquí: ${summaryLine(cur)}</p>
      <button class="btn primary" data-merge style="--accent:var(--green)">Fusionar con mi progreso</button>
      <button class="btn ghost danger-soft" data-replace>Reemplazar mi progreso</button>
      <p class="muted small">Fusionar conserva lo mejor de ambos (XP máxima, estrellas, rachas…). Reemplazar borra el progreso de aquí.</p>
    </div>`;
    const apply = (mode) => {
      applyBackup(b, mode);
      sfx('Complete');
      const s2 = getState();
      preview.innerHTML = `<div class="backup-preview ok pop-in">${cora('cheer', 70)}<b>¡Progreso importado!</b>
        <p class="muted small">${summaryLine(backupSummary({ state: s2 }))}</p>
        ${!auth.hasAccount() ? '<p class="muted small">Crea un perfil para protegerlo con contraseña.</p><a class="btn primary" href="#/registro" style="--accent:var(--green)">Crear perfil</a>' : ''}
        <a class="btn ${auth.hasAccount() ? 'primary' : 'ghost'}" href="#/" style="--accent:var(--blue)">Ir a aprender</a></div>`;
      app.querySelector('[data-paste]').value = '';
    };
    preview.querySelector('[data-merge]').onclick = () => apply('merge');
    preview.querySelector('[data-replace]').onclick = () => {
      const m = modal(`${cora('think', 80)}<h2>¿Reemplazar tu progreso?</h2>
        <p class="muted">Se sustituirá el progreso de aquí (${summaryLine(cur)}) por el de la copia. No se puede deshacer.</p>
        <button class="btn primary" data-yes style="--accent:var(--ko)">Reemplazar</button>
        <button class="btn ghost" data-close>Cancelar</button>`);
      m.querySelector('[data-yes]').onclick = () => { m.remove(); apply('replace'); };
    };
  }
}
