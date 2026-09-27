self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Apenas permite que o app funcione normalmente sem cache complexo bloqueante
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
