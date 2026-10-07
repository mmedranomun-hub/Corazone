// Router por hash. Cada vista vive en js/views/.
import { getState } from './storage.js';
import { applyTheme } from './ui.js';
import { loadFx } from './fx.js';
import { viewLearn, viewCourses, viewGuide } from './views/learn.js';
import { viewLesson, stopLesson, startLegendary, startUnitTest, startUnitReview } from './views/lessonFlow.js';
import { viewPractice, viewAtlas } from './views/practice.js';
import { viewLeagues, viewQuests, viewShop } from './views/social.js';
import { viewTimed, viewGuardias, viewGuardia, stopArcade } from './views/arcade.js';
import { viewProfile, viewAchievements, viewStreak, viewSettings, viewOnboarding } from './views/me.js';
import { viewAccount, viewSignIn, viewSignUp } from './views/account.js';

const ROUTES = {
  '': viewLearn,
  curso: viewLearn,
  cursos: viewCourses,
  guia: viewGuide,
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

function route() {
  stopLesson();
  stopArcade();
  document.querySelectorAll('.modal-back, .confetti-layer').forEach((m) => m.remove());
  if (!getState().onboarded) return viewOnboarding(0);
  const [, view = '', arg] = location.hash.replace(/^#/, '').split('/');
  (ROUTES[view] || viewLearn)(arg);
}

applyTheme();
await loadFx();
window.addEventListener('hashchange', route);
route();

// Cuentas y sincronización en la nube: sólo si hay js/firebase-config.js; nunca bloquea el arranque.
window.addEventListener('corazone:synced', applyTheme);
import('./sync.js').then((m) => m.initSync()).catch(() => {});

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
