// Pantalla Premium: beneficios, planes, prueba gratuita y canje de códigos.
import { getState } from '../storage.js';
import { APP_CONFIG } from '../app-config.js';
import { PERKS, PLAN_NAMES, activePlan, canTrial, startTrial, redeemCode, activateLicense, refreshLicense, looksLikeLicense, FREE } from '../premium.js';
import { shell, esc, app } from '../ui.js';
import { cora, sfx, party } from '../fx.js';
import { track } from '../analytics.js';

const fmtDate = (ms) => new Date(ms).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

let refreshed = false;

export function viewPremium(planArg) {
  // Una vez por sesión: renueva la licencia si toca y vuelve a pintar si cambió algo
  if (!refreshed) { refreshed = true; refreshLicense().then((r) => { if (r !== 'skip' && location.hash.startsWith('#/premium')) viewPremium(planArg); }); }
  const s = getState();
  const plan = activePlan(s);
  const cfg = APP_CONFIG.premium;
  const perks = `<ul class="perks">${PERKS.map((p) => `<li><span aria-hidden="true">${p.icon}</span><div><b>${esc(p.title)}</b><small>${esc(p.desc)}</small></div></li>`).join('')}</ul>`;
  if (plan) {
    shell(`
      <a class="back" href="#/perfil">← Perfil</a>
      <div class="pro-hero">${cora('cheer', 110)}<div><h1>¡Eres Premium! 💎</h1><p class="muted">${esc(PLAN_NAMES[plan.plan] || 'Premium')}${plan.until ? ` · activo hasta el ${fmtDate(plan.until)}` : ' · sin caducidad'}</p></div></div>
      ${perks}
      ${plan.source === 'license' && cfg.manageUrl ? `<a class="btn ghost" href="${esc(cfg.manageUrl)}" target="_blank" rel="noopener">Gestionar suscripción y facturas</a><p class="muted small">Se renueva automáticamente mientras tu suscripción esté activa.</p>` : ''}
      ${plan.plan === 'trial' ? `<p class="muted">Cuando termine la prueba, vuelves al plan gratuito sin perder nada de tu progreso.</p>${checkout('annual', cfg) ? `<a class="btn primary pro-btn" href="${esc(checkout('annual', cfg))}" target="_blank" rel="noopener">Suscribirme · ${esc(cfg.prices.annual)}/año</a>` : ''}` : ''}
      ${redeemBox()}
      <p class="muted small">Gracias por apoyar Corazone. <a href="#/legal/terminos">Términos</a></p>`, 'profile');
    bindRedeem();
    return;
  }
  const sel = planArg === 'mensual' ? 'monthly' : 'annual';
  const url = checkout(sel, cfg);
  track('Paywall view');
  shell(`
    <a class="back" href="#/">← Inicio</a>
    <div class="pro-hero">${cora('happy', 110)}<div><h1>Corazone Premium</h1><p class="muted">Aprende sin límites: todos los casos clínicos, todas las guardias y vidas ilimitadas.</p></div></div>
    ${perks}
    <p class="muted small">Gratis para siempre: los cursos de ECG, eco y cateterismo, el atlas, la práctica, las ligas, las ${FREE.casosUnits} primeras unidades de casos y ${FREE.guardias} guardias.</p>
    <div class="plans" role="radiogroup" aria-label="Elige tu plan">
      <a class="plan ${sel === 'annual' ? 'sel' : ''}" href="#/premium/anual" role="radio" aria-checked="${sel === 'annual'}"><span class="plan-tag">AHORRA 50 %</span><b>Anual</b><span class="plan-price">${esc(cfg.prices.annual)}</span><small>${esc(cfg.prices.annualPerMonth)}/mes</small></a>
      <a class="plan ${sel === 'monthly' ? 'sel' : ''}" href="#/premium/mensual" role="radio" aria-checked="${sel === 'monthly'}"><b>Mensual</b><span class="plan-price">${esc(cfg.prices.monthly)}</span><small>al mes</small></a>
    </div>
    ${canTrial(s) ? `<button class="btn primary pro-btn" data-trial>Probar ${cfg.trialDays} días gratis</button>` : ''}
    ${url ? `<a class="btn ${canTrial(s) ? 'ghost' : 'primary pro-btn'}" href="${esc(url)}" target="_blank" rel="noopener" data-checkout>Suscribirme · ${esc(sel === 'annual' ? `${cfg.prices.annual}/año` : `${cfg.prices.monthly}/mes`)}</a>`
      : '<p class="muted small center">El pago online estará disponible muy pronto. Mientras tanto, prueba Premium gratis o canjea un código.</p>'}
    ${redeemBox()}
    <p class="muted small">Pago seguro con Lemon Squeezy (tarjeta, Apple Pay, Google Pay o PayPal). Tras el pago recibirás por correo tu clave de licencia. Puedes cancelar la renovación cuando quieras. Al suscribirte aceptas los <a href="#/legal/terminos">Términos</a> y la <a href="#/legal/privacidad">Política de privacidad</a>.</p>`, 'profile');
  app.querySelector('[data-trial]')?.addEventListener('click', () => {
    if (!startTrial()) return;
    track('Trial start');
    sfx('Complete');
    party();
    viewPremium();
  });
  app.querySelector('[data-checkout]')?.addEventListener('click', () => track('Checkout click', { plan: sel }));
  bindRedeem();
}

const checkout = (plan, cfg) => cfg.checkout?.[plan] || null;

// Nombre del dispositivo para la lista de activaciones de la licencia (sin datos personales).
const deviceName = () => {
  const ua = navigator.userAgent || '';
  const os = /iPhone|iPad/.test(ua) ? 'iOS' : /Android/.test(ua) ? 'Android' : /Mac/.test(ua) ? 'Mac' : /Windows/.test(ua) ? 'Windows' : 'Web';
  return `Corazone · ${os}`;
};

const redeemBox = () => `
  <details class="redeem">
    <summary>¿Ya has pagado? Activa tu licencia</summary>
    <p class="muted small">Pega la clave de licencia que te llegó por correo tras el pago (o un código Premium).</p>
    <form class="redeem-form"><input id="pro-code" autocomplete="off" spellcheck="false" placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" aria-label="Clave de licencia o código Premium"/><button class="btn mini" type="submit">Activar</button></form>
    <p class="redeem-msg" role="status"></p>
  </details>`;

function bindRedeem() {
  const form = app.querySelector('.redeem-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = app.querySelector('.redeem-msg');
    msg.textContent = 'Comprobando…';
    const value = app.querySelector('#pro-code').value.trim();
    const r = looksLikeLicense(value) ? await activateLicense(value, { device: deviceName() }) : await redeemCode(value);
    if (!r.ok) { msg.textContent = r.error; msg.classList.add('err'); sfx('Wrong'); return; }
    track('Premium unlock', { plan: r.plan });
    sfx('Complete');
    party();
    viewPremium();
  });
}
