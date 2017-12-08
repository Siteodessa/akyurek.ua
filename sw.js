self.addEventListener('install', e => {
 e.waitUntil(
   // после установки service worker
   // открыть новый кэш
   caches.open('my-pwa-cache').then(cache => {
     // добавляем все URL ресурсов, которые хотим закэшировать
     return cache.addAll([
       '/',
       '/index.html',
       '/tovary',
       '/wp-includes/js/jquery/jquery.js',
       '/wp-content/themes/bestbuild/assets/css/ss.css',
     ]);
   })
 );
});