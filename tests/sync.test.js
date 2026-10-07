import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { mergeStates, initSync } from '../js/sync.js';
import * as auth from '../js/auth.js';
import { firebaseConfig } from '../js/firebase-config.js';
import { onSave, save, exportState, importState, getState } from '../js/storage.js';

const base = (o = {}) => ({
  xp: 0, completed: {}, xpByDay: {}, review: {}, legendary: {}, stories: {}, claimed: {}, frozenDays: [],
  gems: 500, hearts: 5, streak: 0, bestStreak: 0, lastDay: null, onboarded: false, name: '', dailyGoal: 20,
  theme: 'auto', updatedAt: 0, joined: 1000, ...o,
});

test('xp y gemas: máximo; lecciones: máximo de estrellas', () => {
  const l = base({ xp: 120, gems: 300, completed: { a: 3, b: 1 }, updatedAt: 10 });
  const r = base({ xp: 200, gems: 250, completed: { b: 2, c: 1 }, updatedAt: 5 });
  const m = mergeStates(l, r);
  assert.equal(m.xp, 200);
  assert.equal(m.gems, 300);
  assert.deepEqual(m.completed, { a: 3, b: 2, c: 1 });
});

test('legendarios, historias y misiones reclamadas: unión; xpByDay: máximo por día', () => {
  const l = base({ xp: 1, legendary: { a: true }, stories: { s1: true }, claimed: { 'q-1': true }, xpByDay: { '2026-10-01': 30, '2026-10-02': 5 } });
  const r = base({ xp: 1, legendary: { b: true }, stories: { s2: true }, claimed: { 'q-2': true }, xpByDay: { '2026-10-02': 20, '2026-10-03': 10 } });
  const m = mergeStates(l, r);
  assert.deepEqual(m.legendary, { a: true, b: true });
  assert.deepEqual(m.stories, { s1: true, s2: true });
  assert.deepEqual(m.claimed, { 'q-1': true, 'q-2': true });
  assert.deepEqual(m.xpByDay, { '2026-10-01': 30, '2026-10-02': 20, '2026-10-03': 10 });
});

test('repaso: unión, quedándose con la caja menor y, a igualdad, con el estado más reciente', () => {
  const l = base({ xp: 1, updatedAt: 20, review: { x: { box: 2, due: 5 }, y: { box: 1, due: 7 }, z: { box: 0, due: 1 } } });
  const r = base({ xp: 1, updatedAt: 10, review: { x: { box: 0, due: 9 }, y: { box: 1, due: 3 }, w: { box: 3, due: 2 } } });
  const m = mergeStates(l, r);
  assert.deepEqual(m.review, { x: { box: 0, due: 9 }, y: { box: 1, due: 7 }, z: { box: 0, due: 1 }, w: { box: 3, due: 2 } });
});

test('racha: la del último día de práctica más reciente; mejor racha: máximo', () => {
  const l = base({ xp: 1, streak: 3, bestStreak: 3, lastDay: '2026-10-06', updatedAt: 99 });
  const r = base({ xp: 1, streak: 10, bestStreak: 12, lastDay: '2026-10-01', updatedAt: 1 });
  let m = mergeStates(l, r);
  assert.equal(m.streak, 3);
  assert.equal(m.lastDay, '2026-10-06');
  assert.equal(m.bestStreak, 12);
  // Mismo día: la racha mayor
  m = mergeStates(base({ xp: 1, streak: 4, lastDay: '2026-10-06' }), base({ xp: 1, streak: 6, lastDay: '2026-10-06' }));
  assert.equal(m.streak, 6);
  assert.equal(m.bestStreak, 6);
});

test('vidas y ajustes del más reciente; onboarded si cualquiera', () => {
  const l = base({ xp: 5, hearts: 2, theme: 'dark', dailyGoal: 50, name: 'Ana', onboarded: false, updatedAt: 200 });
  const r = base({ xp: 5, hearts: 5, theme: 'light', dailyGoal: 10, name: 'Ana R', onboarded: true, updatedAt: 100 });
  let m = mergeStates(l, r);
  assert.equal(m.hearts, 2);
  assert.equal(m.theme, 'dark');
  assert.equal(m.dailyGoal, 50);
  assert.equal(m.name, 'Ana');
  assert.equal(m.onboarded, true);
  assert.equal(m.updatedAt, 200);
  m = mergeStates({ ...l, updatedAt: 50 }, r);
  assert.equal(m.hearts, 5);
  assert.equal(m.theme, 'light');
});

test('un dispositivo nuevo (estado en blanco) no pisa ajustes ni gemas de la cuenta', () => {
  const fresh = base({ gems: 500, name: '', theme: 'auto', onboarded: true, updatedAt: 999 });
  const remote = base({ xp: 300, gems: 120, name: 'Luis', theme: 'dark', completed: { a: 2 }, updatedAt: 5 });
  const m = mergeStates(fresh, remote);
  assert.equal(m.gems, 120);
  assert.equal(m.name, 'Luis');
  assert.equal(m.theme, 'dark');
  assert.equal(m.xp, 300);
});

test('sin remoto se queda el local; la fusión no muta las entradas', () => {
  const l = base({ xp: 7 });
  assert.deepEqual(mergeStates(l, null), l);
  const r = base({ xp: 9, completed: { a: 1 } });
  const snap = JSON.stringify([l, r]);
  mergeStates(l, r);
  assert.equal(JSON.stringify([l, r]), snap);
});

test('es idempotente: fusionar dos veces da lo mismo', () => {
  const l = base({ xp: 10, completed: { a: 1 }, review: { k: { box: 1, due: 2 } }, updatedAt: 3 });
  const r = base({ xp: 20, completed: { b: 3 }, review: { k: { box: 2, due: 9 } }, updatedAt: 4 });
  const m = mergeStates(l, r);
  assert.deepEqual(mergeStates(m, r), m);
});

test('storage: save marca updatedAt y avisa a los suscriptores; export/import', () => {
  let calls = 0;
  const off = onSave(() => calls++);
  const t0 = Date.now();
  save();
  assert.equal(calls, 1);
  assert.ok(getState().updatedAt >= t0);
  const snap = exportState();
  importState({ ...snap, xp: 4242 });
  assert.equal(getState().xp, 4242);
  assert.equal(calls, 2);
  off();
  save();
  assert.equal(calls, 2);
  importState(snap);
});

test('sin configuración no se importa Firebase ni se hace red', async () => {
  assert.equal(firebaseConfig, null);
  let loads = 0;
  auth._setup({ config: null, loader: async () => { loads++; return {}; } });
  assert.equal(auth.isConfigured(), false);
  assert.equal(await auth.init(), false);
  assert.equal(await initSync(), false);
  await assert.rejects(auth.signIn('a@b.c', 'x'), (e) => e.code === 'app/not-configured');
  assert.equal(loads, 0);
  assert.equal(auth.currentUser(), null);
  // Ningún módulo importa el SDK de forma estática
  for (const f of ['js/auth.js', 'js/sync.js', 'js/views/account.js', 'js/app.js', 'js/views/me.js']) {
    const src = readFileSync(new URL(`../${f}`, import.meta.url), 'utf8');
    assert.doesNotMatch(src, /^\s*import\s[^;(]*from\s+['"]https?:/m, f);
  }
});

test('con configuración, init carga los tres módulos de la CDN oficial', async () => {
  const urls = [];
  const fake = {
    initializeApp: () => ({}), getAuth: () => ({}), onAuthStateChanged: () => {}, getFirestore: () => ({}),
  };
  auth._setup({ config: { apiKey: 'k', projectId: 'p' }, loader: async (n) => { urls.push(n); return fake; } });
  assert.equal(await auth.init(), true);
  assert.deepEqual(urls.sort(), ['app', 'auth', 'firestore']);
  auth._setup({ config: null });
});

test('mensajes de error en español', () => {
  assert.match(auth.authError({ code: 'auth/email-already-in-use' }), /Ya existe una cuenta/);
  assert.match(auth.authError({ code: 'auth/weak-password' }), /6 caracteres/);
  assert.match(auth.authError({ code: 'auth/invalid-credential' }), /incorrectos/);
  assert.match(auth.authError({ code: 'auth/network-request-failed' }), /Sin conexión/);
  assert.equal(auth.authError({ code: 'auth/popup-closed-by-user' }), '');
});
