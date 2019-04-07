self.oninstall = function() {
    caches.open('cache-response1').then(function(cache) {
        cache.addAll([
            '/',
            'index.html',
            'index.js'
        ])
        .then(function() {
            console.log('added files');
        })
        .catch(function(err) {
            console.log('err! ', err);
        })
    })
}

self.onactivate = function(event) {
    console.log('sw is up and running!');
}

self.onfetch = function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(async function(cachedFiles) {
            if(cachedFiles) {
                return cachedFiles;
            } else {
                var cache = await caches.open('cache-response1');
                await cache.add(event.request);
                return fetch(event.request);
            }
        })
    )
}