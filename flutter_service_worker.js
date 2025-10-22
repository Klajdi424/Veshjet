'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "98c8e0b9703f25b003f225eaaf09aded",
"assets/AssetManifest.bin.json": "b6eaae2956015d1e6b31cbdae5565ee9",
"assets/AssetManifest.json": "37abab8b822a90d0381ab10f08aa5bbf",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/10796084.png": "567acfd12ff3b045cb31dbde6f74bae3",
"assets/assets/images/app_launcher_icon.png": "6f82da223b34cfb4e7ba7b56d4c63a09",
"assets/assets/images/Boost_Your_income!_(4).png": "572c7bcc53294e1eda2d57a0864898c0",
"assets/assets/images/Boost_Your_income!_(8).png": "b46b99b927f4aab842bd46c19de4fb92",
"assets/assets/images/Boost_Your_income!_(9).png": "6d0427ca880ec0b69924a32ffdbd3205",
"assets/assets/images/download.jpg": "989d8bd9e550207bb7d955c9928df497",
"assets/assets/images/download.png": "b2c6caf0cde963ec8c4fa567173a4410",
"assets/assets/images/download_(1).jpg": "c3e02d6c90699c6ad41e7aa1b60c85dd",
"assets/assets/images/error_image.jpg": "6818d3dd92da4b5dcf5922556715f669",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/g-logo.png": "0f118259ce403274f407f5e982e681c3",
"assets/assets/images/images.png": "856e0ef17d02e429fb5ca6f5fb52e7a7",
"assets/assets/images/n9qxe_R.jpg": "8bf0328476e5e16d4f849573112089dc",
"assets/assets/images/Nj%25C3%25AB_klik,_shum%25C3%25AB_mund%25C3%25ABsi_(1).gif": "f01efd60e5a4c4d741c700f96056874a",
"assets/assets/images/Nj_klik,_shum_mundsi_(1).gif": "f01efd60e5a4c4d741c700f96056874a",
"assets/assets/images/OIP_(1).jpg": "016ec08be9158278bb3a1aeaba675a7d",
"assets/assets/images/OIP_(2).jpg": "6818d3dd92da4b5dcf5922556715f669",
"assets/assets/images/OIP_(3).jpg": "26503f2037c4c8e2e9873fb41b539b38",
"assets/assets/images/Our_Picks_for_this_week_(1).png": "e5dd168932aa8b8ff817e8c1c45831a6",
"assets/assets/images/pexels-karolina-grabowska-5717978.jpg": "a88d02a81cc036befb24323e0fba7660",
"assets/assets/images/R.jpg": "8bf0328476e5e16d4f849573112089dc",
"assets/assets/images/Untitled_design_(12).png": "b9d78c9727378b99790788dcabbe80de",
"assets/assets/images/Untitled_design_(13).png": "1794f71f71b94ab659e4cabc5537b4f6",
"assets/assets/images/Untitled_design_(2).png": "6f82da223b34cfb4e7ba7b56d4c63a09",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "b2cd66f26f45f29c576321227f0c2f84",
"assets/NOTICES": "e5a4f7928a37ce2f47c298a1043b410f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c7928f5b0dd597e2e1a77ba5bab13499",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5de92d878411e1e70578b137be27a8f7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "962129d59874eb90edfbb2a343f4ade9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2bd8138ca86cf350a1622d183bc22e8b",
"icons/app_launcher_icon.png": "6f82da223b34cfb4e7ba7b56d4c63a09",
"icons/error_image.jpg": "6818d3dd92da4b5dcf5922556715f669",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f2c82a8e99d2103068ed182726f5eae3",
"/": "f2c82a8e99d2103068ed182726f5eae3",
"main.dart.js": "d5d7261d0edfe98fddc68cd36efe5457",
"manifest.json": "ef561a3fe434a2b6fc3a7dd1d170b724",
"Nj_klik,_shum_mundsi_(1).gif": "f01efd60e5a4c4d741c700f96056874a",
"Untitled_design_(2).png": "6f82da223b34cfb4e7ba7b56d4c63a09",
"version.json": "31ca7475837d5fbe9d132b8a72947fa6"};
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
