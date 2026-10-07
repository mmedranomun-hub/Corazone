// Router por hash. Cada vista vive en js/views/.
import { getState } from './storage.js';
import { applyTheme } from './ui.js';
import { loadFx } from './fx.js';
import { viewLearn, viewCourses, viewGuide } from './views/learn.js';
import { viewLesson, stopLesson } from './views/lessonFlow.js';
import { viewPractice, viewAtlas } from './views/practice.js';
import { viewLeagues, viewQuests, viewShop } from './views/social.js';
import { viewProfile, viewAchievements, viewStreak, viewSettings, viewOnboarding } from './views/me.js';

const ROUTES = {
  '': viewLearn,
  curso: viewLearn,
  cursos: viewCourses,
  guia: viewGuide,
  leccion: viewLesson,
  practicar: viewPractice,
  repaso: () => viewPractice('errores'),
  atlas: viewAtlas,
  ligas: viewLeagues,
  misiones: viewQuests,
  tienda: viewShop,
  perfil: viewProfile,
  logros: viewAchievements,
  racha: viewStreak,
  ajustes: viewSettings,
};

function route() {
  stopLesson();
  document.querySelectorAll('.modal-back, .confetti-layer').forEach((m) => m.remove());
  if (!getState().onboarded) return viewOnboarding(0);
  const [, view = '', arg] = location.hash.replace(/^#/, '').split('/');
  (ROUTES[view] || viewLearn)(arg);
}

applyTheme();
await loadFx();
window.addEventListener('hashchange', route);
route();

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
