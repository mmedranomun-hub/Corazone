// Router por hash. Cada vista vive en js/views/.
import { getState, onProfile } from './storage.js';
import { applyTheme, skeleton, errorScreen } from './ui.js';
import { isCourseLoaded, loadAllCourses, allCoursesLoaded } from './data/courses.js';
import { loadFx } from './fx.js';
import { viewLearn, viewCourses, viewGuide, viewSearch } from './views/learn.js';
import { viewLesson, stopLesson, startLegendary, startUnitTest, startUnitReview } from './views/lessonFlow.js';
import { viewPractice, viewAtlas } from './views/practice.js';
import { viewLeagues, viewQuests, viewShop } from './views/social.js';
import { viewTimed, viewGuardias, viewGuardia, stopArcade } from './views/arcade.js';
import { viewProfile, viewAchievements, viewStreak, viewSettings, viewOnboarding } from './views/me.js';
import { viewAccount, viewSignIn, viewSignUp } from './views/account.js';
import { hasProfiles, localProfile } from './auth.js';

const ROUTES = {
  '': viewLearn,
  curso: viewLearn,
  cursos: viewCourses,
  guia: viewGuide,
  buscar: viewSearch,
  leccion: viewLesson,
  practicar: viewPractice,
  legendario: startLegendary,
  prueba: startUnitTest,
  'repaso-unidad': startUnitReview,
  repaso: () => viewPractice('errores'),
  atlas: viewAtlas,
  ligas: viewLeagues,
  misiones: viewQuests,
  tienda: viewShop,
  perfil: viewProfile,
  logros: viewAchievements,
  racha: viewStreak,
  ajustes: viewSettings,
  contrarreloj: viewTimed,
  guardias: viewGuardias,
  guardia: viewGuardia,
  cuenta: viewAccount,
  entrar: viewSignIn,
  registro: viewSignUp,
};
// Rutas accesibles antes del onboarding (crear perfil, entrar, importar progreso).
const PRE_ONBOARDING = { entrar: viewSignIn, registro: viewSignUp, cuenta: viewAccount, bienvenida: () => viewOnboarding(0) };

// La ruta del curso activo se pinta en cuanto ese curso está cargado; el resto de vistas
// (búsqueda, práctica, perfil…) necesitan todos los cursos y esperan a que lleguen.
let routeId = 0;
async function route() {
  const id = ++routeId;
  stopLesson();
  stopArcade();
  document.querySelectorAll('.modal-back, .confetti-layer').forEach((m) => m.remove());
  try {
    const [, view = '', arg] = location.hash.replace(/^#/, '').split('/');
    const onboarded = getState().onboarded;
    const fast = onboarded && (view === '' || view === 'curso') && isCourseLoaded(arg || getState().course || 'ecg');
    if (!fast && !allCoursesLoaded()) {
      const t = setTimeout(() => id === routeId && skeleton(), 150);
      await loadAllCourses();
      clearTimeout(t);
      if (id !== routeId) return; // el usuario ya ha navegado a otra parte
    }
    if (!onboarded) {
      if (PRE_ONBOARDING[view]) return PRE_ONBOARDING[view](arg);
      // Dispositivo con perfiles y nadie dentro: "¿Quién está aprendiendo?"
      return hasProfiles() && !localProfile() ? viewSignIn() : viewOnboarding(0);
    }
    await (ROUTES[view] || viewLearn)(arg);
  } catch (err) {
    if (id === routeId) errorScreen(err);
  }
}

applyTheme();
await loadFx();
window.addEventListener('hashchange', route);
await route();
// Precarga en segundo plano del resto de cursos (no bloquea el primer render).
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 300));
idle(() => loadAllCourses().catch(() => {}));

// Cuentas y sincronización en la nube: sólo si hay js/firebase-config.js; nunca bloquea el arranque.
window.addEventListener('corazone:synced', applyTheme);
onProfile(applyTheme); // cada perfil tiene su tema
import('./sync.js').then((m) => m.initSync()).catch(() => {});

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
