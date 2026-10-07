// Logros: se calculan a partir del estado guardado (no se almacenan aparte).
import { COURSES, lessonsOf } from './data/courses.js';

const courseDone = (s, id) => {
  const c = COURSES.find((x) => x.id === id);
  return c && lessonsOf(c).every((l) => s.completed[l.id]);
};

export const ACHIEVEMENTS = [
  { id: 'first', icon: '🌱', name: 'Primer latido', desc: 'Completa tu primera lección', test: (s) => Object.keys(s.completed).length >= 1 },
  { id: 'ten', icon: '📚', name: 'Estudiante aplicado', desc: 'Completa 10 lecciones', test: (s) => Object.keys(s.completed).length >= 10 },
  { id: 'perfect', icon: '🎯', name: 'Sin fallos', desc: 'Termina una lección sin errores', test: (s) => s.perfect >= 1 },
  { id: 'perfect10', icon: '💯', name: 'Precisión de residente', desc: '10 lecciones perfectas', test: (s) => s.perfect >= 10 },
  { id: 'streak3', icon: '🔥', name: 'Ritmo constante', desc: 'Racha de 3 días', test: (s) => s.bestStreak >= 3 },
  { id: 'streak7', icon: '⚡', name: 'Taquicardia de estudio', desc: 'Racha de 7 días', test: (s) => s.bestStreak >= 7 },
  { id: 'xp100', icon: '💎', name: '100 XP', desc: 'Consigue 100 XP', test: (s) => s.xp >= 100 },
  { id: 'xp500', icon: '👑', name: '500 XP', desc: 'Consigue 500 XP', test: (s) => s.xp >= 500 },
  { id: 'ecg', icon: '📈', name: 'Electrofisiólogo', desc: 'Completa el curso de ECG', test: (s) => courseDone(s, 'ecg') },
  { id: 'eco', icon: '🫀', name: 'Ecocardiografista', desc: 'Completa el curso de eco', test: (s) => courseDone(s, 'eco') },
  { id: 'cate', icon: '🩺', name: 'Hemodinamista', desc: 'Completa el curso de cateterismo', test: (s) => courseDone(s, 'cate') },
  { id: 'casos', icon: '📋', name: 'Ojo clínico', desc: 'Completa todos los casos clínicos', test: (s) => courseDone(s, 'casos') },
];

export const unlocked = (state) => new Set(ACHIEVEMENTS.filter((a) => a.test(state)).map((a) => a.id));
