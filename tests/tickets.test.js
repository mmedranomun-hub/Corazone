import { test } from 'node:test';
import assert from 'node:assert/strict';

// lessonFlow importa ui.js, que lee document al cargar: basta un stub mínimo.
globalThis.document ??= { getElementById: () => null };
const { makeTickets } = await import('../js/views/lessonFlow.js');

test('ticket de sesión especial: un solo uso y por id', () => {
  const t = makeTickets();
  assert.equal(t.consume('a'), false, 'sin ticket no se consume nada');
  t.issue('a');
  assert.equal(t.consume('b'), false, 'el ticket es de su lección');
  assert.equal(t.consume('a'), true);
  assert.equal(t.consume('a'), false, 'recargar la ruta no reutiliza el ticket');
});
