// Corazone Premium: plan del usuario, prueba gratuita, canje de códigos y qué contenido es de pago.
// Los códigos (CZP1.<datos>.<firma>) van firmados con ECDSA P-256; la app sólo tiene la clave
// pública, así que se verifican sin servidor y no se pueden falsificar. Los emite el script
// scripts/premium.mjs con la clave privada. Puro salvo getState/update → testeable en Node.
import { getState, update } from './storage.js';
import { APP_CONFIG } from './app-config.js';

const DAY = 864e5;

// Plan gratuito: qué queda abierto. Todo lo demás de la lista PERKS es Premium.
export const FREE = {
  casosUnits: 4, // primeras unidades del curso de casos clínicos
  guardias: 2, // primeras historias de guardia
};

export const PERKS = [
  { icon: '♾️', title: 'Vidas ilimitadas', desc: 'Equivócate sin miedo: aprende de cada fallo sin esperar a recargar.' },
  { icon: '🩺', title: 'Todos los casos clínicos', desc: 'Más de 500 preguntas de casos de ETT, ETE, cateterismo y ECG.' },
  { icon: '🌙', title: 'Todas las guardias', desc: 'Historias completas de una noche de guardia, decisión a decisión.' },
  { icon: '👑', title: 'Nivel legendario gratis', desc: 'Domina cada lección sin gastar gemas.' },
  { icon: '💚', title: 'Apoyas el proyecto', desc: 'Ayudas a mantener y revisar el contenido con las guías más recientes.' },
];

export const PLAN_NAMES = { trial: 'Prueba gratuita', monthly: 'Premium mensual', annual: 'Premium anual', lifetime: 'Premium de por vida' };

// Plan activo o null. `until` = 0 → sin caducidad.
export function activePlan(s = getState(), now = Date.now()) {
  const p = s.premium;
  if (!p || !p.plan) return null;
  if (p.until && p.until <= now) return null;
  return p;
}
export const isPremium = (s, now) => !!activePlan(s, now);

export const canTrial = (s = getState()) => !s.trialUsed && !activePlan(s);

export function startTrial(now = Date.now()) {
  if (!canTrial()) return false;
  update((s) => {
    s.premium = { plan: 'trial', until: now + (APP_CONFIG.premium.trialDays || 7) * DAY, source: 'trial', since: now };
    s.trialUsed = true;
  });
  return true;
}

// ---------- Contenido de pago ----------
export const isPremiumUnit = (course, unit) => course?.id === 'casos' && course.units.indexOf(unit) >= FREE.casosUnits;
export const lessonNeedsPremium = (course, lesson) => !!lesson && isPremiumUnit(course, lesson.unit || course.units.find((u) => u.lessons.some((l) => l.id === lesson.id)));
export const guardiaNeedsPremium = (index) => index >= FREE.guardias;
export const locked = (needs, s) => needs && !isPremium(s);

// ---------- Códigos ----------
const b64u = {
  enc: (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
  dec: (str) => Uint8Array.from(atob(str.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((str.length + 3) % 4)), (c) => c.charCodeAt(0)),
};
export const encodePayload = (obj) => b64u.enc(new TextEncoder().encode(JSON.stringify(obj)));

const ALGO = { name: 'ECDSA', namedCurve: 'P-256' };
const SIGN = { name: 'ECDSA', hash: 'SHA-256' };

// Verifica un código. Devuelve { ok, payload?, error? } (mensajes en español).
export async function verifyCode(code, publicKey = APP_CONFIG.premium.publicKey) {
  const parts = String(code || '').trim().split('.');
  if (parts.length !== 3 || parts[0] !== 'CZP1') return { ok: false, error: 'El código no tiene el formato correcto (CZP1.…).' };
  if (!publicKey) return { ok: false, error: 'El canje de códigos aún no está activado en esta versión.' };
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) return { ok: false, error: 'Tu navegador no permite verificar el código.' };
  try {
    const key = await subtle.importKey('jwk', publicKey, ALGO, false, ['verify']);
    const valid = await subtle.verify(SIGN, key, b64u.dec(parts[2]), new TextEncoder().encode(parts[1]));
    if (!valid) return { ok: false, error: 'Código no válido. Revisa que lo has copiado entero.' };
    const payload = JSON.parse(new TextDecoder().decode(b64u.dec(parts[1])));
    if (!PLAN_NAMES[payload.p] || payload.p === 'trial') return { ok: false, error: 'Código no válido.' };
    if (payload.e && payload.e <= Date.now()) return { ok: false, error: 'Este código ha caducado.' };
    return { ok: true, payload };
  } catch {
    return { ok: false, error: 'Código no válido. Revisa que lo has copiado entero.' };
  }
}

export async function redeemCode(code, publicKey) {
  const r = await verifyCode(code, publicKey);
  if (!r.ok) return r;
  const { p, e = 0, i } = r.payload;
  update((s) => { s.premium = { plan: p, until: e || 0, source: 'code', id: i || null, since: Date.now() }; });
  return { ok: true, plan: p, until: e || 0 };
}

// Firma (la usa scripts/premium.mjs y los tests; necesita la clave privada).
export async function signCode(payload, privateKey) {
  const subtle = globalThis.crypto.subtle;
  const key = await subtle.importKey('jwk', privateKey, ALGO, false, ['sign']);
  const data = encodePayload(payload);
  const sig = await subtle.sign(SIGN, key, new TextEncoder().encode(data));
  return `CZP1.${data}.${b64u.enc(sig)}`;
}

// El mejor de dos planes (para fusionar estados de la nube): el que caduca más tarde (0 = nunca).
export function bestPlan(a, b) {
  if (!a?.plan) return b?.plan ? b : null;
  if (!b?.plan) return a;
  const end = (p) => (p.until ? p.until : Infinity);
  return end(b) > end(a) ? b : a;
}
