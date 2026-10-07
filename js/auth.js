// Cuentas de usuario.
// 1) Nube: Firebase Auth (email/contraseña y Google). El SDK se carga por import dinámico desde la
//    CDN oficial SÓLO si hay configuración en js/firebase-config.js; sin ella todo es no-op.
// 2) Perfiles locales (siempre disponibles, sin servidor): varios perfiles por dispositivo, cada uno
//    con su progreso en 'corazone:v1:<id>' y la contraseña como hash PBKDF2-SHA-256 con sal.
import { firebaseConfig } from './firebase-config.js';
import { useProfile, activeProfileId, dropState, peekState } from './storage.js';

export const FIREBASE_VERSION = '12.19.0';
const CDN = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}`;

let config = firebaseConfig;
let loader = (name) => import(`${CDN}/firebase-${name}.js`);
let fb = null; // { A: módulo auth, F: módulo firestore, auth, db }
let initPromise = null;
let user = null;
let ready = false;
const subs = new Set();

export const isConfigured = () => !!(config && config.apiKey && config.projectId);
export const currentUser = () => user;
export const authReady = () => ready;

// Sólo para tests: inyecta configuración y cargador de módulos.
export function _setup({ config: c = config, loader: l = loader } = {}) {
  config = c;
  loader = l;
  fb = null;
  initPromise = null;
  user = null;
  ready = false;
}

// Carga Firebase y empieza a escuchar la sesión. Devuelve true si las cuentas están activas.
export function init() {
  if (!isConfigured()) return Promise.resolve(false);
  if (!initPromise) {
    initPromise = (async () => {
      const [App, A, F] = await Promise.all([loader('app'), loader('auth'), loader('firestore')]);
      const app = App.initializeApp(config);
      const auth = A.getAuth(app);
      auth.languageCode = 'es';
      fb = { A, F, auth, db: F.getFirestore(app) };
      A.onAuthStateChanged(auth, (u) => {
        user = u;
        ready = true;
        subs.forEach((fn) => { try { fn(u); } catch { /* suscriptor roto */ } });
      });
      A.getRedirectResult?.(auth).catch(() => {});
      return true;
    })().catch((e) => {
      initPromise = null; // sin red: se reintentará al volver a llamar a init()
      throw e;
    });
  }
  return initPromise;
}

// fn(user | null) en cada cambio de sesión. Devuelve la función para desuscribirse.
export function onUser(fn) {
  subs.add(fn);
  if (ready) fn(user);
  return () => subs.delete(fn);
}

async function api() {
  if (!isConfigured()) throw Object.assign(new Error('not-configured'), { code: 'app/not-configured' });
  if (typeof navigator !== 'undefined' && navigator.onLine === false) throw Object.assign(new Error('offline'), { code: 'auth/network-request-failed' });
  await init();
  return fb;
}

export async function signUp(email, password, name = '') {
  const { A, auth } = await api();
  const cred = await A.createUserWithEmailAndPassword(auth, email.trim(), password);
  if (name) await A.updateProfile(cred.user, { displayName: name }).catch(() => {});
  return cred.user;
}

export async function signIn(email, password) {
  const { A, auth } = await api();
  return (await A.signInWithEmailAndPassword(auth, email.trim(), password)).user;
}

export async function signInGoogle() {
  const { A, auth } = await api();
  const provider = new A.GoogleAuthProvider();
  try {
    return (await A.signInWithPopup(auth, provider)).user;
  } catch (e) {
    // Navegadores que bloquean ventanas emergentes (p. ej. PWA en iOS): redirección
    if (e?.code === 'auth/popup-blocked' || e?.code === 'auth/operation-not-supported-in-this-environment') {
      await A.signInWithRedirect(auth, provider);
      return null;
    }
    throw e;
  }
}

export async function signOut() {
  if (!fb) return;
  await fb.A.signOut(fb.auth);
}

export async function resetPassword(email) {
  const { A, auth } = await api();
  await A.sendPasswordResetEmail(auth, email.trim());
}

// Acceso a Firestore para js/sync.js (null si no está cargado).
export const firestore = () => (fb ? { F: fb.F, db: fb.db } : null);

const ERRORS = {
  'auth/email-already-in-use': 'Ya existe una cuenta con ese email. Prueba a iniciar sesión.',
  'auth/weak-password': 'La contraseña es demasiado débil: usa al menos 6 caracteres.',
  'auth/invalid-credential': 'Email o contraseña incorrectos.',
  'auth/invalid-login-credentials': 'Email o contraseña incorrectos.',
  'auth/wrong-password': 'Email o contraseña incorrectos.',
  'auth/user-not-found': 'No hay ninguna cuenta con ese email.',
  'auth/invalid-email': 'Ese email no parece válido.',
  'auth/missing-email': 'Escribe tu email.',
  'auth/missing-password': 'Escribe tu contraseña.',
  'auth/network-request-failed': 'Sin conexión. Revisa tu red e inténtalo de nuevo.',
  'auth/too-many-requests': 'Demasiados intentos. Espera unos minutos e inténtalo de nuevo.',
  'auth/user-disabled': 'Esta cuenta está desactivada.',
  'auth/operation-not-allowed': 'Este método de acceso no está activado en Firebase.',
  'auth/unauthorized-domain': 'Este dominio no está autorizado en Firebase (ver docs/CUENTAS.md).',
  'auth/popup-closed-by-user': '',
  'auth/cancelled-popup-request': '',
  'app/not-configured': 'Las cuentas aún no están activadas en esta versión de Corazone.',
  'local/no-crypto': 'Este navegador no permite guardar contraseñas de forma segura (hace falta HTTPS).',
  'local/missing-login': 'Escribe tu email o nombre de usuario.',
  'local/bad-login': 'El usuario debe tener entre 3 y 60 caracteres, sin espacios.',
  'local/missing-name': 'Escribe tu nombre.',
  'local/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
  'local/login-in-use': 'Ya hay un perfil con ese email o usuario en este dispositivo. Inicia sesión.',
  'local/not-found': 'No hay ningún perfil con ese email o usuario en este dispositivo.',
  'local/wrong-password': 'Contraseña incorrecta.',
};

// Mensaje en español para un error de Firebase ('' = no mostrar nada).
export function authError(e) {
  const code = e?.code || '';
  if (code in ERRORS) return ERRORS[code];
  if (/network|offline|unavailable|failed to fetch/i.test(`${code} ${e?.message || ''}`)) return ERRORS['auth/network-request-failed'];
  return 'Algo ha fallado. Inténtalo de nuevo.';
}

// ---------- Perfiles locales (sin servidor) ----------
const PROFILES_KEY = 'corazone:profiles';
export const PBKDF2_ITERATIONS = 310000;
const enc = new TextEncoder();
const subtle = () => globalThis.crypto?.subtle;
const localErr = (code) => Object.assign(new Error(code), { code });

const b64 = (bytes) => btoa(String.fromCharCode(...bytes));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

// Hash PBKDF2-SHA-256 con sal aleatoria de 16 bytes. Nunca se guarda la contraseña en claro.
export async function hashPassword(password, { salt, iter = PBKDF2_ITERATIONS } = {}) {
  if (!subtle()) throw localErr('local/no-crypto');
  const saltBytes = salt ? unb64(salt) : crypto.getRandomValues(new Uint8Array(16));
  const key = await subtle().importKey('raw', enc.encode(String(password)), 'PBKDF2', false, ['deriveBits']);
  const bits = await subtle().deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: saltBytes, iterations: iter }, key, 256);
  return { algo: 'PBKDF2-SHA256', iter, salt: b64(saltBytes), hash: b64(new Uint8Array(bits)) };
}

export async function verifyPassword(password, rec) {
  if (!rec?.salt || !rec?.hash) return false;
  const { hash } = await hashPassword(password, { salt: rec.salt, iter: rec.iter || PBKDF2_ITERATIONS });
  // Comparación en tiempo constante
  let diff = hash.length ^ rec.hash.length;
  for (let i = 0; i < Math.max(hash.length, rec.hash.length); i++) diff |= (hash.charCodeAt(i) || 0) ^ (rec.hash.charCodeAt(i) || 0);
  return diff === 0;
}

const store = () => (typeof localStorage === 'undefined' ? null : localStorage);
function readProfiles() {
  try {
    const list = JSON.parse(store()?.getItem(PROFILES_KEY) || '[]');
    return Array.isArray(list) ? list.filter((p) => p && p.id && p.login) : [];
  } catch {
    return [];
  }
}
function writeProfiles(list) {
  try { store()?.setItem(PROFILES_KEY, JSON.stringify(list)); } catch { /* sin almacenamiento */ }
}
const pub = ({ id, name, login, created }) => ({ id, name, login, created });
export const normLogin = (s) => String(s ?? '').trim().toLowerCase();

// Perfiles de este dispositivo (sin hashes), con XP y lecciones para el selector.
export function listProfiles() {
  return readProfiles().map((p) => {
    const st = peekState(p.id);
    return { ...pub(p), xp: st.xp || 0, lessons: Object.keys(st.completed || {}).length };
  });
}
export const hasProfiles = () => readProfiles().length > 0;
export function localProfile() {
  const id = activeProfileId();
  const p = id && readProfiles().find((x) => x.id === id);
  return p ? pub(p) : null;
}
// ¿Hay alguien identificado (perfil local o cuenta en la nube)?
export const hasAccount = () => !!(localProfile() || user);

// Crea un perfil y lo activa. Si no había perfil activo, el progreso actual (invitado) pasa al nuevo perfil;
// si se crea desde otro perfil, empieza de cero.
export async function createProfile({ name, login, password }) {
  name = String(name ?? '').trim().slice(0, 20);
  const l = normLogin(login);
  if (!name) throw localErr('local/missing-name');
  if (!l) throw localErr('local/missing-login');
  if (l.length < 3 || l.length > 60 || /\s/.test(l)) throw localErr('local/bad-login');
  if (String(password ?? '').length < 6) throw localErr('local/weak-password');
  const list = readProfiles();
  if (list.some((p) => p.login === l)) throw localErr('local/login-in-use');
  const pw = await hashPassword(password);
  const id = `p${Date.now().toString(36)}${b64(crypto.getRandomValues(new Uint8Array(4))).replace(/[^a-z0-9]/gi, '').toLowerCase()}`;
  const rec = { id, name, login: l, created: Date.now(), pw };
  writeProfiles([...list, rec]);
  const fromGuest = !activeProfileId();
  if (fromGuest) {
    useProfile(id, { migrate: true });
  } else {
    useProfile(id, { init: { name, onboarded: false } });
  }
  return pub(rec);
}

// Inicia sesión en un perfil local (por email/usuario o id) y lo activa.
export async function signInLocal(login, password) {
  const l = normLogin(login);
  if (!l) throw localErr('local/missing-login');
  const p = readProfiles().find((x) => x.login === l || x.id === String(login));
  if (!p) throw localErr('local/not-found');
  if (!(await verifyPassword(password, p.pw))) throw localErr('local/wrong-password');
  useProfile(p.id);
  return pub(p);
}

// Cierra la sesión local: se vuelve al modo invitado. El progreso queda guardado en el perfil.
export function signOutLocal() {
  useProfile(null);
}

// Elimina un perfil (y su progreso) de este dispositivo tras comprobar la contraseña.
export async function deleteProfile(id, password) {
  const list = readProfiles();
  const p = list.find((x) => x.id === id);
  if (!p) throw localErr('local/not-found');
  if (!(await verifyPassword(password, p.pw))) throw localErr('local/wrong-password');
  writeProfiles(list.filter((x) => x.id !== id));
  if (activeProfileId() === id) useProfile(null);
  dropState(id);
}

export function renameProfile(name) {
  const id = activeProfileId();
  name = String(name ?? '').trim().slice(0, 20);
  if (!id || !name) return;
  writeProfiles(readProfiles().map((p) => (p.id === id ? { ...p, name } : p)));
}
