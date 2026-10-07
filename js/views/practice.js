// Pestaña Practicar: repaso de errores, práctica rápida, ondas y atlas.
import { COURSES, lessonsOf, questionByKey } from '../data/courses.js';
import { RHYTHMS, renderEcg, TWELVE_LEAD, render12 } from '../ecg.js';
import { PRESSURES, renderPressure } from '../pressure.js';
import { getState, dueReviews } from '../storage.js';
import { shell, esc, go } from '../ui.js';
import { cora } from '../fx.js';
import { startLesson, startUnitTest, startUnitReview, startLegendary } from './lessonFlow.js';

const sample = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n);
const doneQuestions = () => {
  const { completed } = getState();
  return COURSES.flatMap((c) => lessonsOf(c).filter((l) => completed[l.id]).flatMap((l) => l.questions));
};

const SESSIONS = {
  errores: { title: 'Repaso de errores', get: () => dueReviews().map(questionByKey).filter(Boolean).map((x) => x.question).slice(0, 10) },
  rapida: { title: 'Práctica rápida', get: () => sample(doneQuestions().length >= 5 ? doneQuestions() : COURSES[0].units[0].lessons[0].questions, 8) },
  ondas: { title: 'Toca la onda', get: () => sample(COURSES.flatMap((c) => lessonsOf(c).flatMap((l) => l.questions)).filter((q) => q.type === 'tap'), 6) },
  imagen: { title: 'Lectura de imagen', get: () => sample(doneQuestions().filter((q) => q.ecg || q.ecg12 || q.pressure || q.diagram), 8) },
};

// Rutas antiguas de sesiones especiales (compatibilidad; las nuevas son #/legendario/<id>,
// #/prueba/<unidad> y #/repaso-unidad/<unidad> en app.js):
// #/practicar/prueba-<unidad>, #/practicar/repaso-<unidad>, #/practicar/legendario-<lección>
const SPECIAL = [['prueba-', startUnitTest], ['repaso-', startUnitReview], ['legendario-', startLegendary]];

export function viewPractice(kind) {
  const special = kind && SPECIAL.find(([p]) => kind.startsWith(p));
  if (special) return special[1](kind.slice(special[0].length));
  if (kind && SESSIONS[kind]) {
    const questions = SESSIONS[kind].get();
    if (questions.length) return startLesson({ course: { id: 'practica', color: '#58cc02' }, lesson: { id: `practica-${kind}`, title: SESSIONS[kind].title, review: true, practice: true, questions } }, '#/practicar');
  }
  const n = dueReviews().length;
  const img = SESSIONS.imagen.get().length;
  const card = (href, icon, title, desc, extra = '', off = false) => `
    <a class="practice-card ${off ? 'off' : ''}" href="${off ? '#/practicar' : href}"><span class="pi">${icon}</span><div><b>${title}</b><small>${desc}</small></div>${extra}</a>`;
  shell(`
    <div class="hub-head">${cora('think', 90)}<div><h1>Zona de práctica</h1><p class="muted">Practicar no gasta vidas y te devuelve una ❤️ al terminar.</p></div></div>
    ${card('#/practicar/errores', '🔁', 'Repaso de errores', n ? `${n} pregunta${n > 1 ? 's' : ''} pendiente${n > 1 ? 's' : ''}` : 'No tienes errores pendientes 🎉', n ? `<span class="pill">${n}</span>` : '', !n)}
    ${card('#/practicar/rapida', '⚡', 'Práctica rápida', '8 preguntas de lo que ya has aprendido · +1 ❤️')}
    ${card('#/practicar/ondas', '👆', 'Toca la onda', 'Señala P, QRS, T y extrasístoles en la tira')}
    ${card('#/practicar/imagen', '🖼️', 'Lectura de imagen', img ? 'ECG, curvas y esquemas de lecciones completadas' : 'Completa lecciones con imágenes para desbloquear', '', !img)}
    <h2 class="sec-title">Atlas</h2>
    ${card('#/atlas/ritmos', '📈', 'Ritmos', `${Object.keys(RHYTHMS).length} tiras de ECG`)}
    ${card('#/atlas/12d', '🫀', '12 derivaciones', `${Object.keys(TWELVE_LEAD).length} ECG completos`)}
    ${card('#/atlas/presiones', '📉', 'Curvas de presión', `${Object.keys(PRESSURES).length} registros hemodinámicos`)}`, 'practice');
}

const ATLAS = {
  ritmos: { label: 'Ritmos', items: () => Object.entries(RHYTHMS).map(([id, r]) => ({ ...r, svg: renderEcg(id), cls: 'ecg-wrap' })) },
  '12d': { label: '12 derivaciones', items: () => Object.entries(TWELVE_LEAD).map(([id, r]) => ({ ...r, svg: render12(id), cls: 'ecg-wrap' })) },
  presiones: { label: 'Presiones', items: () => Object.entries(PRESSURES).map(([id, r]) => ({ ...r, svg: renderPressure(id), cls: 'visual-wrap pressure-wrap' })) },
};

export function viewAtlas(tab) {
  const cur = ATLAS[tab] ? tab : 'ritmos';
  const tabs = Object.entries(ATLAS).map(([k, t]) => `<a href="#/atlas/${k}" class="${k === cur ? 'active' : ''}">${t.label}</a>`).join('');
  const items = ATLAS[cur].items().map((r) => `<article class="atlas-item"><h3>${esc(r.name)}</h3><div class="${r.cls}">${r.svg}</div><p>${esc(r.desc)}</p></article>`).join('');
  shell(`<a class="back" href="#/practicar">← Práctica</a><h1 class="page-title">Atlas</h1><div class="tabs" style="--accent:#1cb0f6">${tabs}</div>${items}`, 'practice');
}

export { go };
