// Recursos visuales que puede llevar una pregunta (ver CLAUDE.md).
import { renderEcg, render12 } from './ecg.js';

export function visualFor(q) {
  if (q.ecg12) return `<div class="ecg-wrap">${render12(q.ecg12)}</div>`;
  if (q.ecg) return `<div class="ecg-wrap ${q.type === 'tap' ? 'tappable' : ''}">${renderEcg(q.ecg)}</div>`;
  return '';
}
