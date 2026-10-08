// Analítica respetuosa con la privacidad: eventos agregados, sin cookies ni datos personales.
// Desactivada si no hay proveedor en js/app-config.js, si el navegador pide "Do Not Track"
// o si el usuario la apaga en Ajustes. Sin DOM (tests) es un no-op.
import { APP_CONFIG } from './app-config.js';
import { getState } from './storage.js';

const cfg = APP_CONFIG.analytics || {};
let loaded = false;

const dnt = () => typeof navigator !== 'undefined' && (navigator.doNotTrack === '1' || globalThis.doNotTrack === '1' || navigator.globalPrivacyControl === true);
export const analyticsConfigured = () => !!(cfg.provider && cfg.domain);
export const analyticsOn = () => analyticsConfigured() && !dnt() && getState().analytics !== false && typeof document !== 'undefined';

function load() {
  if (loaded || !analyticsOn() || cfg.provider !== 'plausible') return;
  loaded = true;
  window.plausible = window.plausible || function (...a) { (window.plausible.q = window.plausible.q || []).push(a); };
  const s = document.createElement('script');
  s.defer = true;
  s.dataset.domain = cfg.domain;
  s.src = cfg.src;
  document.head.appendChild(s);
}

// Vista de página: sólo la ruta (sin argumentos como ids de lección), p. ej. /leccion.
export function pageview(view = '') {
  if (!analyticsOn()) return;
  load();
  const url = `${location.origin}/${view}`;
  window.plausible?.('pageview', { u: url });
}

// Evento con propiedades no personales (curso, modo, plan…).
export function track(name, props) {
  if (!analyticsOn()) return;
  load();
  window.plausible?.(name, props ? { props } : undefined);
}
