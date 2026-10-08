// Service worker: precachea el shell y los contenidos para que la 2.ª visita sea instantánea y
// funcione sin conexión. Estrategia "stale-while-revalidate": responde desde la caché y, en
// segundo plano, actualiza la copia (la versión nueva se ve en la siguiente visita).
// Sube CACHE al cambiar la lista o la estrategia para invalidar las cachés antiguas.
const CACHE = 'corazone-v5';
const SHELL = [
  './', 'index.html', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'css/styles.css', 'css/visuals.css', 'css/fx.css',
  'js/app.js', 'js/ui.js', 'js/storage.js', 'js/game.js', 'js/fx.js', 'js/lesson.js', 'js/achievements.js',
  'js/mascot.js', 'js/sound.js', 'js/confetti.js', 'js/visuals.js', 'js/ecg.js', 'js/pressure.js', 'js/diagrams.js',
  'js/sync.js', 'js/auth.js', 'js/firebase-config.js',
  'js/views/learn.js', 'js/views/lessonFlow.js', 'js/views/practice.js', 'js/views/social.js', 'js/views/arcade.js',
  'js/views/me.js', 'js/views/account.js',
  'js/data/courses.js', 'js/data/ecg.js', 'js/data/eco.js', 'js/data/cateterismo.js', 'js/data/casos.js',
  'js/data/guardias.js', 'js/data/guides.js',
];

self.addEventListener('install', (e) => {
  // Tolerante: si un archivo falla (p. ej. aún no existe), el resto se precachea igual.
  e.waitUntil(caches.open(CACHE)
    .then((c) => Promise.all(SHELL.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => {}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const fonts = url.hostname.startsWith('fonts.g');
  // Sólo la propia app y las fuentes: Firebase/Google APIs van directas a la red
  if (url.origin !== location.origin && !fonts) return;
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const cached = await cache.match(req, { ignoreSearch: !fonts });
    const network = fetch(req).then((res) => {
      if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
      return res;
    });
    if (cached) {
      if (!fonts) e.waitUntil(network.catch(() => {})); // fuentes: caché primero, sin revalidar
      return cached;
    }
    return network.catch(async () => (req.mode === 'navigate' ? (await cache.match('index.html')) || cache.match('./') : Response.error()));
  }));
});

// Recordatorio diario: al tocar la notificación se abre (o enfoca) la app.
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      const win = list.find((c) => 'focus' in c);
      return win ? win.focus() : self.clients.openWindow('./');
    }),
  );
});

// La app puede pedir al service worker que muestre el aviso (p. ej. desde una pestaña en segundo plano).
self.addEventListener('message', (e) => {
  if (e.data?.type === 'reminder') e.waitUntil?.(self.registration.showNotification(e.data.title, e.data.options));
});
