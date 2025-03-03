
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('meu-pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                'https://github.com/DiegoMarayo/Massa-Pizza/index.html',
                '/styles.css',
                '/script.js',
                '/icone-192.png',
                '/icone-512.png'
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
