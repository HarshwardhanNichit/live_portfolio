'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f632d2052c926825e6f99d170dec9daf",
"assets/AssetManifest.bin.json": "f609e9538422673e2a0396f1eafb0f95",
"assets/assets/projects/dcb/screen_1.webp": "69c650da7bc06517f56bfe46b06c6901",
"assets/assets/projects/dcb/screen_2.webp": "79a9760fa3ee5579afd202aba5157803",
"assets/assets/projects/dcb/screen_3.webp": "62789a51a2ee76d2befe59c89c2eba4e",
"assets/assets/projects/dcb/screen_4.webp": "a98a8ea86e81b4bdc3eae7955e3c1abe",
"assets/assets/projects/dcb/screen_5.webp": "f40834b3d96dccf6cb63c99ed83872e7",
"assets/assets/projects/dcb/screen_6.webp": "22e76df97d96cbecc65807e05955da83",
"assets/assets/projects/dcb/screen_7.webp": "0f1cd02b8a16cd49c9139e4842c43e53",
"assets/assets/projects/dcb/screen_8.webp": "195414d78aa537c75b27f5c6a57ad7d4",
"assets/assets/projects/kotak/screen_1.webp": "fb1c1d20eba19f6dd21cc800544d542b",
"assets/assets/projects/kotak/screen_2.webp": "a8815cdf92cd3e295a254d6db8c3f637",
"assets/assets/projects/kotak/screen_3.webp": "ae396a75945e9df9900b0003405381ff",
"assets/assets/projects/kotak/screen_4.webp": "855dfc5ae562ef479693d4e4d39d523f",
"assets/assets/projects/kotak/screen_5.webp": "509245c29ad14528392ee2e9b958f15a",
"assets/assets/projects/kotak/screen_6.webp": "3f249a8b8fcc2279f812dc39b348a970",
"assets/assets/projects/kotak/screen_7.webp": "6a2475aa80fe220728357f6ca5c84dad",
"assets/assets/projects/kotak/screen_8.webp": "dd611a2979dd6386b9430dc1ca8b6f63",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "5c1e32486df99b1d6662061f722a42ca",
"assets/NOTICES": "80bbf5336004798df31c3c0d5c82d015",
"assets/projects/dcb/screen_1.webp": "69c650da7bc06517f56bfe46b06c6901",
"assets/projects/dcb/screen_2.webp": "79a9760fa3ee5579afd202aba5157803",
"assets/projects/dcb/screen_3.webp": "62789a51a2ee76d2befe59c89c2eba4e",
"assets/projects/dcb/screen_4.webp": "a98a8ea86e81b4bdc3eae7955e3c1abe",
"assets/projects/dcb/screen_5.webp": "f40834b3d96dccf6cb63c99ed83872e7",
"assets/projects/dcb/screen_6.webp": "22e76df97d96cbecc65807e05955da83",
"assets/projects/dcb/screen_7.webp": "0f1cd02b8a16cd49c9139e4842c43e53",
"assets/projects/dcb/screen_8.webp": "195414d78aa537c75b27f5c6a57ad7d4",
"assets/projects/kotak/screen_1.webp": "fb1c1d20eba19f6dd21cc800544d542b",
"assets/projects/kotak/screen_2.webp": "a8815cdf92cd3e295a254d6db8c3f637",
"assets/projects/kotak/screen_3.webp": "ae396a75945e9df9900b0003405381ff",
"assets/projects/kotak/screen_4.webp": "855dfc5ae562ef479693d4e4d39d523f",
"assets/projects/kotak/screen_5.webp": "509245c29ad14528392ee2e9b958f15a",
"assets/projects/kotak/screen_6.webp": "3f249a8b8fcc2279f812dc39b348a970",
"assets/projects/kotak/screen_7.webp": "6a2475aa80fe220728357f6ca5c84dad",
"assets/projects/kotak/screen_8.webp": "dd611a2979dd6386b9430dc1ca8b6f63",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "32572e24c7ca564eb54866d37307d790",
"index.html": "a90c1e4e3ad6d31df51a32dace00f396",
"/": "a90c1e4e3ad6d31df51a32dace00f396",
"main.dart.js": "48da67d56392b37828844c97dd0d1cf4",
"vercel.json": "d9bfae7978e2d114aea124a23834b6ba",
"version.json": "5d4b7d9601ffc2bb32c39aef02abfd88"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
