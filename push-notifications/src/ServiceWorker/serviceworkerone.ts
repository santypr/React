class ServiceWorkerOne {

  public static run(): void {
      addEventListener('install', ServiceWorkerOne.onInstalled);
      addEventListener('fetch', ServiceWorkerOne.onFetched);
  }

  public static onInstalled = (event: any): void => {
      event.waitUntil(
          caches.open('v0.1').then((cache) => {
              return cache.addAll([
                  '/scripts/app-bundle.js',
                  '/scripts/vendor-bundle.js',
                  '/assets/images/logo.png',
                  '/assets/images/no-vessel-picture.jpg',
                  '/assets/styles/loader.css',
                  '/assets/scripts/fontawesome-pro/css/fa-svg-with-js.css',
                  '/assets/scripts/fontawesome-pro/js/fontawesome.min.js',
                  '/assets/scripts/fontawesome-pro/js/fa-light.min.js',
                  '/assets/scripts/fontawesome-pro/js/fa-regular.min.js',
                  '/assets/scripts/fontawesome-pro/js/fa-solid.min.js'
              ]);
          })
      );
  }

  public static onFetched = (event: any): void => {
      event.respondWith(
          caches.match(event.request).then((matchResponse) => {
              return matchResponse || fetch(event.request).then((fetchResponse) => {
                  return caches.open('v0.1').then((cache) => {
                      cache.put(event.request, fetchResponse.clone());
                      return fetchResponse;
                  });
              });
          })
      );
  }
}

ServiceWorkerOne.run();

