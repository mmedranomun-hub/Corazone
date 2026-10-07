// Perfil, ajustes, racha, logros y onboarding.
import { COURSES } from '../data/courses.js';
import { getState, update, resetProgress, GOALS, dayKey, xpOn, MAX_FREEZES } from '../storage.js';
import { ACHIEVEMENTS, unlocked } from '../achievements.js';
import { LEAGUES } from '../game.js';
import { shell, screen, esc, go, app, applyTheme, notifySupported, requestNotify, scheduleReminder } from '../ui.js';
import { cora, sfx } from '../fx.js';
import { weekRow } from './lessonFlow.js';
import { accountCard, bindAccountCard } from './account.js';
import { isConfigured as cloudOn, hasAccount, localProfile } from '../auth.js';

const LEVELS = [
  { id: 'pre', icon: '📗', label: 'Estudiante preclínico', desc: 'Empiezo desde cero' },
  { id: 'cli', icon: '📘', label: 'Estudiante clínico / MIR', desc: 'Conozco lo básico' },
  { id: 'res', icon: '📕', label: 'Residente', desc: 'Quiero afinar y repasar guías' },
];

export function viewProfile() {
  const s = getState();
  const got = unlocked(s);
  const joined = new Date(s.joined).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  const days = [...Array(7)].map((_, i) => { const d = dayKey(Date.now() - (6 - i) * 864e5); return { d, xp: xpOn(d) }; });
  const max = Math.max(s.dailyGoal, ...days.map((d) => d.xp));
  shell(`
    <div class="profile-head">
      <div class="avatar">${esc((s.name || 'T')[0].toUpperCase())}</div>
      <div><h1>${esc(s.name || localProfile()?.name || 'Tú')}</h1><p class="muted">${esc(LEVELS.find((l) => l.id === s.level)?.label || 'Estudiante')} · Se unió en ${joined}</p>${profileChip()}</div>
      <a class="icon-btn" href="#/ajustes" title="Ajustes">⚙️</a>
    </div>
    <h2 class="sec-title">Estadísticas</h2>
    <div class="stats-grid">
      <a href="#/racha"><b>🔥 ${s.streak}</b><small>Días de racha</small></a>
      <div><b>⚡ ${s.xp}</b><small>XP total</small></div>
      <a href="#/ligas"><b>🛡️ ${LEAGUES[s.league.tier].name}</b><small>Liga actual</small></a>
      <div><b>🎯 ${s.answered ? Math.round((s.correct / s.answered) * 100) : 0}%</b><small>Precisión</small></div>
    </div>
    <h2 class="sec-title">XP de esta semana</h2>
    <div class="week">${days.map(({ d, xp }) => `<div class="day"><div class="col-bar ${xp >= s.dailyGoal ? 'goal' : ''}" style="height:${(xp / max) * 100}%" title="${xp} XP"></div><small>${'DLMXJVS'[new Date(`${d}T12:00`).getDay()]}</small></div>`).join('')}</div>
    <h2 class="sec-title">Logros <a class="see" href="#/logros">VER TODO</a></h2>
    <div class="badges">${ACHIEVEMENTS.filter((a) => got.has(a.id)).slice(0, 6).map(badge).join('') || '<p class="muted">Completa lecciones para conseguir logros.</p>'}</div>
    <a class="practice-card" href="#/tienda"><span class="pi">💎</span><div><b>Tienda</b><small>${s.gems} gemas disponibles</small></div></a>
    <h2 class="sec-title">Cuenta</h2>
    ${accountCard()}`, 'profile');
  bindAccountCard();
}

// Perfil activo (local o nube) con acceso a la cuenta.
function profileChip() {
  const lp = localProfile();
  return `<a class="profile-chip" href="#/cuenta/${lp ? 'cambiar' : 'perfil'}">${lp ? `👤 ${esc(lp.name)} · Cambiar` : '👤 Sin perfil · Crear'}</a>`;
}

const badge = (a, off = false) => `<div class="badge ${off ? 'off' : ''}" title="${esc(a.desc)}"><span>${a.icon}</span><b>${esc(a.name)}</b><small>${esc(a.desc)}</small></div>`;

export function viewAchievements() {
  const got = unlocked(getState());
  shell(`<a class="back" href="#/perfil">← Perfil</a><h1 class="page-title">Logros</h1><p class="muted">${got.size} de ${ACHIEVEMENTS.length} conseguidos</p><div class="badges">${ACHIEVEMENTS.map((a) => badge(a, !got.has(a.id))).join('')}</div>`, 'profile');
}

export function viewStreak() {
  const s = getState();
  const now = new Date();
  const first = new Date(now.getFullYear(), now.getMonth(), 1);
  const nDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const pad = (first.getDay() + 6) % 7;
  const cells = [...Array(pad)].map(() => '<span></span>').concat([...Array(nDays)].map((_, i) => {
    const d = dayKey(new Date(now.getFullYear(), now.getMonth(), i + 1));
    const cls = s.frozenDays.includes(d) ? 'frozen' : xpOn(d) > 0 ? 'on' : d === dayKey() ? 'today' : '';
    return `<span class="${cls}">${i + 1}</span>`;
  })).join('');
  shell(`
    <div class="streak-hero">${cora(s.streak ? 'fire' : 'sleep', 110)}<div><div class="streak-num">${s.streak}</div><b>día${s.streak === 1 ? '' : 's'} de racha</b></div></div>
    ${weekRow()}
    <div class="stats-grid two"><div><b>🏅 ${s.bestStreak}</b><small>Mejor racha</small></div><a href="#/tienda"><b>🧊 ${s.freezes}/${MAX_FREEZES}</b><small>Protectores</small></a></div>
    <h2 class="sec-title">${now.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</h2>
    <div class="cal"><small>L</small><small>M</small><small>X</small><small>J</small><small>V</small><small>S</small><small>D</small>${cells}</div>
    <p class="muted">Completa al menos una lección al día para mantener tu racha. Un protector de racha la salva si fallas un día.</p>`, 'profile');
}

export function viewSettings(note = '') {
  const s = getState();
  const rem = s.reminder || { on: false, time: '20:00' };
  const supported = notifySupported();
  const perm = supported ? Notification.permission : 'unsupported';
  const remNote = note || (!supported ? 'Tu navegador no admite notificaciones.' : rem.on && perm === 'denied' ? 'Las notificaciones están bloqueadas en el navegador.' : rem.on ? `Cora te avisará a las ${rem.time} si aún no has practicado.` : 'Desactivado');
  shell(`
    <a class="back" href="#/perfil">← Perfil</a><h1 class="page-title">Ajustes</h1>
    <label class="field"><span>Nombre</span><input id="name" maxlength="20" value="${esc(s.name)}" placeholder="Tu nombre"/></label>
    <h2 class="sec-title">Meta diaria</h2>
    <div class="opts">${GOALS.map((g) => `<button class="opt ${s.dailyGoal === g.xp ? 'sel' : ''}" data-goal="${g.xp}"><b>${g.label}</b><small>${g.xp} XP · ${g.desc}</small></button>`).join('')}</div>
    <h2 class="sec-title">Preferencias</h2>
    <div class="opts">
      <button class="opt toggle ${s.sound ? 'sel' : ''}" data-sound><b>🔊 Efectos de sonido</b><small>${s.sound ? 'Activados' : 'Desactivados'}</small></button>
      ${[['auto', '🌓 Tema automático'], ['light', '☀️ Tema claro'], ['dark', '🌙 Tema oscuro']].map(([k, l]) => `<button class="opt ${s.theme === k ? 'sel' : ''}" data-theme-opt="${k}"><b>${l}</b></button>`).join('')}
    </div>
    <h2 class="sec-title">Notificaciones</h2>
    <div class="opts">
      <button class="opt toggle ${rem.on ? 'sel' : ''}" data-reminder ${supported ? '' : 'disabled'}><b>🔔 Recordatorio diario</b><small>${esc(remNote)}</small></button>
      <label class="field reminder-time ${rem.on ? '' : 'off'}"><span>Hora del aviso</span><input type="time" id="rem-time" value="${esc(rem.time)}" ${rem.on ? '' : 'disabled'}/></label>
      ${rem.on ? `<div class="cora-row reminder-preview">${cora('happy', 48)}<div class="speech">¡Tu corazón necesita práctica! 🫀</div></div>` : ''}
    </div>
    <button class="btn ghost danger" data-reset>Reiniciar progreso</button>`, 'profile');
  app.querySelector('[data-reminder]').onclick = async () => {
    sfx('Tap');
    if (rem.on) { update((x) => { x.reminder = { ...rem, on: false }; }); scheduleReminder(true); return viewSettings(); }
    const p = await requestNotify();
    if (p !== 'granted') return viewSettings(p === 'unsupported' ? 'Tu navegador no admite notificaciones.' : 'Permiso denegado: actívalo en los ajustes del navegador.');
    update((x) => { x.reminder = { ...rem, on: true }; });
    scheduleReminder(true);
    viewSettings();
  };
  app.querySelector('#rem-time').onchange = (e) => { update((x) => { x.reminder = { ...rem, time: e.target.value || '20:00' }; }); scheduleReminder(true); viewSettings(); };
  app.querySelector('#name').onchange = (e) => update((x) => { x.name = e.target.value.trim(); });
  app.querySelectorAll('[data-goal]').forEach((b) => (b.onclick = () => { update((x) => { x.dailyGoal = Number(b.dataset.goal); }); viewSettings(); }));
  app.querySelector('[data-sound]').onclick = () => { update((x) => { x.sound = !x.sound; }); sfx('Tap'); viewSettings(); };
  app.querySelectorAll('[data-theme-opt]').forEach((b) => (b.onclick = () => { update((x) => { x.theme = b.dataset.themeOpt; }); applyTheme(); viewSettings(); }));
  app.querySelector('[data-reset]').onclick = () => { if (confirm('¿Seguro que quieres borrar todo tu progreso?')) { resetProgress(); go('#/'); } };
}

// Onboarding en pasos con barra de progreso y mascota que habla (como Duolingo).
export function viewOnboarding(step = 0, animate = true) {
  const s = getState();
  const steps = [
    { say: '¡Hola! Soy Cora 🫀', sub: 'Te ayudaré a dominar el ECG, la eco y el cateterismo en sesiones de pocos minutos.', body: '<a class="link-btn ob-have" href="#/entrar">Ya tengo un perfil o un código de progreso</a>', next: true },
    { say: '¿Qué quieres aprender?', body: `<div class="opts">${COURSES.map((c) => `<button class="opt ${s.course === c.id ? 'sel' : ''}" data-v="${c.id}"><span class="oi">${c.icon}</span><b>${esc(c.subtitle)}</b></button>`).join('')}</div>`, key: 'course' },
    { say: '¿Cuál es tu nivel?', body: `<div class="opts">${LEVELS.map((l) => `<button class="opt ${s.level === l.id ? 'sel' : ''}" data-v="${l.id}"><span class="oi">${l.icon}</span><b>${l.label}</b><small>${l.desc}</small></button>`).join('')}</div>`, key: 'level' },
    { say: '¿Cuál será tu meta diaria?', body: `<div class="opts">${GOALS.map((g) => `<button class="opt ${s.dailyGoal === g.xp ? 'sel' : ''}" data-v="${g.xp}"><b>${g.label}</b><small>${g.xp} XP · ${g.desc}</small></button>`).join('')}</div>`, key: 'dailyGoal' },
    { say: '¿Cómo te llamas?', body: `<input class="big-input" id="ob-name" maxlength="20" placeholder="Tu nombre" value="${esc(s.name)}"/>`, key: 'name', next: true },
    { say: '¡Genial! Ya está todo listo', sub: 'Tu primera lección te espera. ¡Vamos a por ello!', body: '', next: true, last: true },
  ];
  // Paso de cuenta: siempre (perfil local o en la nube), salvo que ya haya alguien identificado.
  if (!hasAccount()) {
    steps[steps.length - 1].last = false;
    const local = !cloudOn();
    steps.push({
      say: '¿Quieres crear un perfil para guardar tu progreso?',
      sub: local ? 'Tu perfil se guarda en este dispositivo. Con un código podrás pasar tu progreso a otro.' : 'Así podrás seguir en cualquier dispositivo justo donde lo dejaste.',
      body: `<div class="ob-account"><button class="btn primary" data-acc="#/registro" style="--accent:#58cc02">Crear perfil</button><button class="btn ghost" data-acc="#/entrar">Ya tengo perfil</button><button class="btn ghost" data-acc="#/cuenta/pasar">Importar progreso</button></div>`,
      next: true, last: true, account: true,
    });
  }
  const st = steps[step];
  screen(`
    <div class="ob-top">${step ? `<button class="icon-btn" data-back>←</button>` : '<span></span>'}<div class="bar"><div class="bar-fill" style="width:${(step / (steps.length - 1)) * 100}%;--accent:#58cc02"></div></div></div>
    <div class="cora-row">${cora(st.last ? 'cheer' : step ? 'think' : 'happy', 110)}<div class="speech ${animate ? 'pop-in' : ''}">${st.say}</div></div>
    ${st.sub ? `<p class="muted">${st.sub}</p>` : ''}
    ${st.body}
    <button class="btn ${st.account ? 'ghost' : 'primary'}" data-next style="--accent:#58cc02" ${st.key && !st.next && s[st.key] == null ? 'disabled' : ''}>${st.account ? 'Ahora no' : st.last ? 'Empezar' : 'Continuar'}</button>`, 'onboarding');
  const finish = (to) => { update((x) => { x.onboarded = true; x.course = x.course || 'ecg'; }); go(to || `#/curso/${getState().course}`); };
  app.querySelectorAll('[data-acc]').forEach((b) => (b.onclick = () => { sfx('Tap'); finish(b.dataset.acc); }));
  app.querySelectorAll('[data-v]').forEach((b) => (b.onclick = () => {
    sfx('Tap');
    update((x) => { x[st.key] = st.key === 'dailyGoal' ? Number(b.dataset.v) : b.dataset.v; });
    viewOnboarding(step, false);
  }));
  app.querySelector('[data-back]')?.addEventListener('click', () => viewOnboarding(step - 1));
  app.querySelector('[data-next]').onclick = () => {
    const inp = app.querySelector('#ob-name');
    if (inp) update((x) => { x.name = inp.value.trim(); });
    if (st.last) return finish();
    viewOnboarding(step + 1);
  };
}
