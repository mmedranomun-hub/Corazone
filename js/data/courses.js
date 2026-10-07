// Índice de cursos con carga perezosa: en el navegador sólo se importa al arrancar el curso
// activo; el resto se carga bajo demanda (`loadAllCourses`) o en segundo plano tras el primer
// render. En Node (tests) se cargan todos antes de exportar, así que la API es síncrona.
import { getState } from '../storage.js';

const LOADERS = {
  ecg: () => import('./ecg.js'),
  eco: () => import('./eco.js'),
  cate: () => import('./cateterismo.js'),
  casos: () => import('./casos.js'),
};
export const COURSE_IDS = Object.keys(LOADERS);

// Array vivo: se rellena (en orden canónico) a medida que llegan los cursos.
export const COURSES = [];
const loaded = new Map();
const pending = new Map();

// Clave estable de cada pregunta ("<lección>#<índice>") para el repaso espaciado.
const BY_KEY = new Map();

function register(c) {
  for (const u of c.units)
    for (const l of u.lessons)
      l.questions.forEach((q, i) => {
        q.key = `${l.id}#${i}`;
        BY_KEY.set(q.key, { course: c, lesson: l, question: q });
      });
  loaded.set(c.id, c);
  COURSES.splice(0, COURSES.length, ...COURSE_IDS.filter((id) => loaded.has(id)).map((id) => loaded.get(id)));
}

export const isCourseLoaded = (id) => loaded.has(id);
export const allCoursesLoaded = () => loaded.size === COURSE_IDS.length;

export function loadCourse(id) {
  if (!LOADERS[id]) return Promise.resolve(null);
  if (loaded.has(id)) return Promise.resolve(loaded.get(id));
  if (!pending.has(id)) {
    pending.set(id, LOADERS[id]().then((m) => {
      if (!loaded.has(id)) register(m.default);
      return loaded.get(id);
    }).finally(() => pending.delete(id)));
  }
  return pending.get(id);
}

export const loadAllCourses = () => Promise.all(COURSE_IDS.map(loadCourse)).then(() => COURSES);

export const questionByKey = (key) => BY_KEY.get(key);

export const courseById = (id) => COURSES.find((c) => c.id === id);

// Lista plana de lecciones de un curso, en orden (define el desbloqueo secuencial).
export const lessonsOf = (course) => course.units.flatMap((u) => u.lessons.map((l) => ({ ...l, unit: u })));

export function findLesson(lessonId) {
  for (const course of COURSES) {
    const lesson = lessonsOf(course).find((l) => l.id === lessonId);
    if (lesson) return { course, lesson };
  }
  return null;
}

// Curso con el que arranca la app (el activo del perfil, o ECG).
function activeCourseId() {
  try {
    const id = getState().course;
    return LOADERS[id] ? id : 'ecg';
  } catch {
    return 'ecg';
  }
}

if (globalThis.process?.versions?.node) await loadAllCourses();
else await Promise.all([loadCourse(activeCourseId()), loadCourse('ecg')]);
