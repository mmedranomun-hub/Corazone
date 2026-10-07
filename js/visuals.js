// Recursos visuales que puede llevar una pregunta (ver CLAUDE.md).
import { renderEcg, render12 } from './ecg.js';
import { renderPressure } from './pressure.js';
import { renderDiagram } from './diagrams.js';

export function visualFor(q) {
  if (q.ecg12) return `<div class="ecg-wrap">${render12(q.ecg12)}</div>`;
  if (q.ecg) return `<div class="ecg-wrap ${q.type === 'tap' ? 'tappable' : ''}">${renderEcg(q.ecg)}</div>`;
  if (q.pressure) return `<div class="visual-wrap">${renderPressure(q.pressure)}</div>`;
  if (q.diagram) return `<div class="visual-wrap diagram-wrap">${renderDiagram(q.diagram.id, q.diagram.highlight)}</div>`;
  return '';
}
