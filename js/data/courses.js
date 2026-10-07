import ecg from './ecg.js';
import eco from './eco.js';
import cate from './cateterismo.js';

export const COURSES = [ecg, eco, cate];

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
