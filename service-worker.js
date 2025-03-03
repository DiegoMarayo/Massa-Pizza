
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('meu-pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                'https://diegomarayo.github.io/service-worker.js',
                '/styles.css',
                '/script.js',
                '/icon-192.png',
                '/icon-512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
