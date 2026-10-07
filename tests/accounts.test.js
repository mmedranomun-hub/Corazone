// Perfiles locales (sin servidor) y código de progreso para pasar a otro dispositivo.
import { test } from 'node:test';
import assert from 'node:assert/strict';

// localStorage en memoria ANTES de cargar storage.js (lee el estado al importarse).
const mem = new Map();
globalThis.localStorage = {
  getItem: (k) => (mem.has(k) ? mem.get(k) : null),
  setItem: (k, v) => mem.set(k, String(v)),
  removeItem: (k) => mem.delete(k),
};
// Estado de invitado previo (usuario que ya practicaba antes de existir los perfiles)
mem.set('corazone:v1', JSON.stringify({ xp: 50, completed: { 'ecg-u1-l1': 3 }, name: 'Ana', onboarded: true }));

const storage = await import('../js/storage.js');
const auth = await import('../js/auth.js');
const sync = await import('../js/sync.js');
const { getState, completeLesson, resetProgress, activeProfileId, exportState } = storage;

test('hash de contraseña PBKDF2 con sal: verifica la correcta y rechaza la incorrecta', async () => {
  const a = await auth.hashPassword('secreto1', { iter: 1000 });
  const b = await auth.hashPassword('secreto1', { iter: 1000 });
  assert.equal(a.algo, 'PBKDF2-SHA256');
  assert.notEqual(a.salt, b.salt, 'sal aleatoria');
  assert.notEqual(a.hash, b.hash);
  assert.ok(!JSON.stringify(a).includes('secreto1'), 'nunca en claro');
  assert.equal(Buffer.from(a.hash, 'base64').length, 32);
  assert.equal(await auth.verifyPassword('secreto1', a), true);
  assert.equal(await auth.verifyPassword('secreto2', a), false);
  assert.equal(await auth.verifyPassword('secreto1', null), false);
  // Mismo hash con la misma sal e iteraciones (determinista)
  assert.equal((await auth.hashPassword('secreto1', { salt: a.salt, iter: 1000 })).hash, a.hash);
});

let ana;
let luis;

test('el primer perfil se queda con el progreso de invitado (migración)', async () => {
  assert.equal(getState().xp, 50);
  assert.equal(activeProfileId(), null);
  ana = await auth.createProfile({ name: 'Ana', login: ' Ana@Mail.com ', password: 'clave123' });
  assert.equal(ana.login, 'ana@mail.com');
  assert.equal(activeProfileId(), ana.id);
  assert.equal(mem.get('corazone:profile'), ana.id);
  assert.equal(getState().xp, 50);
  assert.equal(getState().completed['ecg-u1-l1'], 3);
  assert.equal(JSON.parse(mem.get(`corazone:v1:${ana.id}`)).xp, 50);
  assert.equal(mem.has('corazone:v1'), false, 'la clave de invitado se vacía');
  // El registro no guarda la contraseña en claro
  const raw = mem.get('corazone:profiles');
  assert.ok(!raw.includes('clave123'));
  assert.match(raw, /PBKDF2-SHA256/);
  assert.deepEqual(auth.localProfile(), { id: ana.id, name: 'Ana', login: 'ana@mail.com', created: ana.created });
});

test('validación al crear perfil', async () => {
  await assert.rejects(auth.createProfile({ name: 'X', login: 'ana@mail.com', password: 'otra123' }), (e) => e.code === 'local/login-in-use');
  await assert.rejects(auth.createProfile({ name: 'X', login: 'xy', password: 'otra123' }), (e) => e.code === 'local/bad-login');
  await assert.rejects(auth.createProfile({ name: 'X', login: 'xyz', password: '123' }), (e) => e.code === 'local/weak-password');
  await assert.rejects(auth.createProfile({ name: '', login: 'xyz', password: '123456' }), (e) => e.code === 'local/missing-name');
  assert.match(auth.authError({ code: 'local/wrong-password' }), /incorrecta/);
});

test('perfiles aislados: cada uno con su progreso; reiniciar sólo afecta al activo', async () => {
  luis = await auth.createProfile({ name: 'Luis', login: 'luis', password: 'corazon' });
  assert.equal(activeProfileId(), luis.id);
  assert.equal(getState().xp, 0, 'perfil nuevo desde otro perfil: empieza de cero');
  assert.equal(getState().onboarded, false);
  assert.equal(getState().name, 'Luis');
  completeLesson('eco-u1-l1', { xp: 15, stars: 2 });
  assert.equal(getState().xp, 15);

  await assert.rejects(auth.signInLocal('ana@mail.com', 'mala'), (e) => e.code === 'local/wrong-password');
  assert.equal(activeProfileId(), luis.id, 'contraseña incorrecta: no cambia de perfil');
  await assert.rejects(auth.signInLocal('nadie', 'x'), (e) => e.code === 'local/not-found');

  await auth.signInLocal('ANA@mail.com', 'clave123');
  assert.equal(activeProfileId(), ana.id);
  assert.equal(getState().xp, 50);
  assert.equal(getState().completed['eco-u1-l1'], undefined);

  const list = auth.listProfiles();
  assert.deepEqual(list.map((p) => [p.name, p.xp, p.lessons]), [['Ana', 50, 1], ['Luis', 15, 1]]);
  assert.ok(list.every((p) => !('pw' in p)), 'el listado no expone hashes');

  resetProgress();
  assert.equal(getState().xp, 0);
  assert.equal(storage.peekState(luis.id).xp, 15, 'Luis no se toca');
  // Restaura a Ana para las pruebas siguientes
  storage.importState({ ...storage.peekState(ana.id), xp: 50, completed: { 'ecg-u1-l1': 3 }, onboarded: true });
});

test('cerrar sesión vuelve al invitado (vacío) sin perder el progreso del perfil', () => {
  auth.signOutLocal();
  assert.equal(activeProfileId(), null);
  assert.equal(mem.has('corazone:profile'), false);
  assert.equal(getState().xp, 0);
  assert.equal(auth.hasProfiles(), true);
  assert.equal(auth.hasAccount(), false);
  assert.equal(storage.peekState(ana.id).xp, 50);
});

test('exportar → importar: ida y vuelta con código comprimido, sin comprimir y archivo', async () => {
  await auth.signInLocal('ana@mail.com', 'clave123');
  const st = exportState();
  const backup = sync.makeBackup(st, 'Ana');
  const code = await sync.encodeBackup(backup);
  assert.match(code, /^CZ1\.z\.[A-Za-z0-9_-]+\.[0-9a-f]{8}$/);
  const back = await sync.readBackup(code);
  assert.deepEqual(back.state, st);
  assert.equal(back.name, 'Ana');
  // Con saltos de línea/espacios (copiado de un chat) sigue valiendo
  assert.deepEqual((await sync.readBackup(`  ${code.slice(0, 20)}\n${code.slice(20)} `)).state, st);

  const plain = await sync.encodeBackup(backup, { compress: false });
  assert.match(plain, /^CZ1\.j\./);
  assert.ok(code.length < plain.length, 'el código comprimido es más corto');
  assert.deepEqual((await sync.readBackup(plain)).state, st);

  const file = JSON.stringify(backup, null, 1);
  assert.deepEqual((await sync.readBackup(file)).state, st);
  assert.deepEqual(sync.backupSummary(back), { name: 'Ana', xp: 50, lessons: 1, streak: st.streak, exportedAt: backup.exportedAt });
  assert.match(sync.backupFileName('Ána López'), /^ana-lopez-\d{4}-\d{2}-\d{2}\.corazone\.json$/);

  // Importar en el perfil de Luis: fusión (máximos) y reemplazo
  await auth.signInLocal('luis', 'corazon');
  sync.applyBackup(back, 'merge');
  assert.equal(getState().xp, 50);
  assert.equal(getState().completed['ecg-u1-l1'], 3);
  assert.equal(getState().completed['eco-u1-l1'], 2, 'fusionar conserva lo propio');
  assert.equal(getState().onboarded, true);
  sync.applyBackup(back, 'replace');
  assert.equal(getState().completed['eco-u1-l1'], undefined);
  assert.equal(storage.peekState(ana.id).xp, 50, 'importar no toca otros perfiles');
});

test('código corrupto o ajeno → error claro en español', async () => {
  const code = await sync.encodeBackup(sync.makeBackup(exportState(), 'Luis'));
  const fails = async (text, re) => {
    await assert.rejects(sync.readBackup(text), (e) => e.code === 'backup/invalid' && re.test(e.message), text.slice(0, 40));
  };
  const parts = code.split('.');
  const flip = parts[2][10] === 'A' ? 'B' : 'A';
  await fails(`${parts[0]}.${parts[1]}.${parts[2].slice(0, 10)}${flip}${parts[2].slice(11)}.${parts[3]}`, /mal copiado/);
  await fails(code.slice(0, code.length - 30), /incompleto|mal copiado/);
  await fails('', /Pega tu código/);
  await fails('hola que tal', /no parece un código de Corazone/);
  await fails('CZ9.z.abc.12345678', /otra versión/);
  await fails('{"a":1', /no es un JSON válido/);
  await fails('{"app":"otra","state":{}}', /no es una copia/);
  await fails(JSON.stringify({ app: 'corazone', kind: 'progress', v: 1, state: { xp: 'mucho' } }), /XP no válida/);
  await fails(JSON.stringify({ app: 'corazone', kind: 'progress', v: 2, state: { xp: 1 } }), /más nueva/);
  // Checksum correcto pero contenido que no es deflate/JSON
  const junk = 'bm9lc2RlZmxhdGU';
  await fails(`CZ1.z.${junk}.${sync.checksum(junk)}`, /dañado/);
  await fails(`CZ1.j.${junk}.${sync.checksum(junk)}`, /dañado/);
});

test('eliminar un perfil exige su contraseña y borra su progreso', async () => {
  await assert.rejects(auth.deleteProfile(luis.id, 'mala'), (e) => e.code === 'local/wrong-password');
  await auth.deleteProfile(luis.id, 'corazon');
  assert.equal(activeProfileId(), null);
  assert.equal(mem.has(`corazone:v1:${luis.id}`), false);
  assert.deepEqual(auth.listProfiles().map((p) => p.name), ['Ana']);
});
