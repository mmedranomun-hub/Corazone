import ecg from './ecg.js';
import eco from './eco.js';
import cate from './cateterismo.js';

export const COURSES = [ecg, eco, cate];

// Clave estable de cada pregunta ("<lección>#<índice>") para el repaso espaciado.
const BY_KEY = new Map();
for (const c of COURSES)
  for (const u of c.units)
    for (const l of u.lessons)
      l.questions.forEach((q, i) => {
        q.key = `${l.id}#${i}`;
        BY_KEY.set(q.key, { course: c, lesson: l, question: q });
      });

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
