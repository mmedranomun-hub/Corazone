// Cuentas de usuario con Firebase Auth (email/contraseña y Google).
// El SDK se carga por import dinámico desde la CDN oficial SÓLO si hay configuración
// en js/firebase-config.js; sin ella todo es no-op y la app sigue en modo local.
import { firebaseConfig } from './firebase-config.js';

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
};

// Mensaje en español para un error de Firebase ('' = no mostrar nada).
export function authError(e) {
  const code = e?.code || '';
  if (code in ERRORS) return ERRORS[code];
  if (/network|offline|unavailable|failed to fetch/i.test(`${code} ${e?.message || ''}`)) return ERRORS['auth/network-request-failed'];
  return 'Algo ha fallado. Inténtalo de nuevo.';
}
