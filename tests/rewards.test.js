import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  getState, _setState, completeLesson, passUnitTest, payLegendary, markLegendary, isLegendary,
  openDailyChest, milestoneReward, STREAK_MILESTONES, LEGENDARY_PRICE, CHEST_MIN, CHEST_MAX, dayKey,
} from '../js/storage.js';
import { nextReminderDelay } from '../js/game.js';

const yesterday = () => dayKey(Date.now() - 864e5);

test('prueba de unidad: marca las lecciones pendientes con 1 estrella y respeta las ya hechas', () => {
  _setState({ completed: { a: 3 } });
  const n = passUnitTest(['a', 'b', 'c']);
  assert.equal(n, 2);
  assert.deepEqual(getState().completed, { a: 3, b: 1, c: 1 });
  assert.equal(passUnitTest(['a', 'b', 'c']), 0);
});

test('legendario: cuesta gemas salvo que sea gratis y se guarda en legendary', () => {
  _setState({ gems: LEGENDARY_PRICE + 5 });
  assert.equal(payLegendary(true), true);
  assert.equal(getState().gems, LEGENDARY_PRICE + 5);
  assert.equal(payLegendary(false), true);
  assert.equal(getState().gems, 5);
  assert.equal(payLegendary(false), false);
  assert.equal(getState().gems, 5);
  assert.equal(isLegendary('ecg-u1-l1'), false);
  markLegendary('ecg-u1-l1');
  assert.deepEqual(getState().legendary, { 'ecg-u1-l1': true });
  assert.equal(isLegendary('ecg-u1-l1'), true);
});

test('legendario: completar la lección con 40 XP mantiene las 3 estrellas', () => {
  _setState({ completed: { l: 3 }, xp: 100 });
  completeLesson('l', { xp: 40, stars: 3 });
  assert.equal(getState().xp, 140);
  assert.equal(getState().completed.l, 3);
});

test('hitos de racha: 3, 7, 14, 30, 50 y 100 días dan gemas', () => {
  assert.deepEqual(Object.keys(STREAK_MILESTONES).map(Number), [3, 7, 14, 30, 50, 100]);
  assert.equal(milestoneReward(4), 0);
  assert.ok(milestoneReward(7) > milestoneReward(3));
});

test('completar la lección del día que alcanza un hito devuelve milestone y abona gemas', () => {
  _setState({ streak: 6, lastDay: yesterday(), gems: 0 });
  const r = completeLesson('x', { xp: 10, stars: 2 });
  assert.equal(r.streakExtended, true);
  assert.deepEqual(r.milestone, { days: 7, gems: STREAK_MILESTONES[7] });
  assert.equal(getState().gems, STREAK_MILESTONES[7]);
  // Segunda lección del mismo día: ni racha ni hito de nuevo
  const r2 = completeLesson('y', { xp: 10, stars: 2 });
  assert.equal(r2.milestone, null);
  assert.equal(getState().gems, STREAK_MILESTONES[7]);
});

test('sin hito no hay recompensa de racha', () => {
  _setState({ streak: 3, lastDay: yesterday(), gems: 0 });
  assert.equal(completeLesson('x', { xp: 10, stars: 2 }).milestone, null);
  assert.equal(getState().gems, 0);
});

test('cofre diario: sólo al cumplir la meta y una vez al día, entre 5 y 20 gemas', () => {
  _setState({ dailyGoal: 20, gems: 0 });
  assert.equal(openDailyChest(), 0); // meta sin cumplir
  completeLesson('x', { xp: 20, stars: 3 });
  const g = openDailyChest(() => 0.999);
  assert.equal(g, CHEST_MAX);
  assert.equal(getState().gems, CHEST_MAX);
  assert.equal(getState().chestDay, dayKey());
  completeLesson('y', { xp: 20, stars: 3 });
  assert.equal(openDailyChest(), 0); // ya abierto hoy
  _setState({ dailyGoal: 10, xpByDay: { [dayKey()]: 15 }, chestDay: yesterday() });
  assert.equal(openDailyChest(() => 0), CHEST_MIN);
});

test('recordatorio: programa para hoy si no ha pasado la hora, si no para mañana', () => {
  const now = new Date(2026, 9, 7, 18, 0, 0);
  assert.equal(nextReminderDelay('20:00', now), 2 * 36e5);
  assert.equal(nextReminderDelay('17:30', now), 23.5 * 36e5);
  assert.equal(nextReminderDelay('20:00', now, true), 26 * 36e5); // ya practicó hoy
});

test('cofre de la ruta: a mitad de unidad, se abre una sola vez', async () => {
  const { openPathChest, pathChestSlot } = await import('../js/storage.js');
  assert.equal(pathChestSlot(2), -1);
  assert.equal(pathChestSlot(4), 1);
  assert.equal(pathChestSlot(5), 1);
  _setState({ gems: 0 });
  assert.equal(getState().pathChests && Object.keys(getState().pathChests).length, 0);
  const g = openPathChest('u1', () => 0);
  assert.equal(g, CHEST_MIN);
  assert.equal(getState().gems, CHEST_MIN);
  assert.equal(openPathChest('u1', () => 0.99), 0);
  assert.equal(getState().gems, CHEST_MIN);
  assert.equal(openPathChest(''), 0);
});
