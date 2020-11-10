const staicCache = 'static-cache-v0.5';
const dynamicCache = 'site-dynamic';
const assets = [
  '/',
  '/index.html',
  '/logo192.png',
  '/logo512.png',
  '/favicon.ico',
  'https://opentdb.com/api_category.php'
]

// Cache size limit function
const limitCacheSize = (cacheName, cacheSize) => {
  caches.open(cacheName).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > cacheSize) {
        cache.delete(keys[0]).then(limitCacheSize(cacheName, cacheSize));
      }
    })
  })
}

// Install service worker Event
self.addEventListener('install', e => {
  console.log('Service Worker is Installed');

  e.waitUntil(
    caches.open(staicCache).then((cache) => {
      console.log('Cacheing all assests!');
      cache.addAll(assets);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', e => {
  console.log("Service Worker is activated!");
  // Delete all the previous cache to use changes
  e.waitUntil(
    caches.keys().then(keys => {
      console.log("Keys are : ", keys)
      return Promise.all(keys
        .filter(key => key !== staicCache && dynamicCache)
        .map(key => caches.delete(key)))
    })
  )
});

// Fetch event
self.addEventListener('fetch', e => {
  // console.log("Fetch Event!", e);
  e.respondWith(
    caches.match(e.request).then((cacheReq => {
      return cacheReq || fetch(e.request)
        .then(fetchRes => {
          // Also fecth data fron local cache that created by user visted that page
          return caches.open(dynamicCache).then(cache => {
            cache.put(e.request.url, fetchRes.clone());

            // Call limitCacheSize function here
            limitCacheSize(dynamicCache, 30);
            return fetchRes;
          })
        });
    }))
  )
})