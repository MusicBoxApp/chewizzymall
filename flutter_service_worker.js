'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8f50ab258361b03e0c3ba8620b696812",
"assets/AssetManifest.bin.json": "5429bf11da234b4fa6a778bbf7d2c4ab",
"assets/AssetManifest.json": "d4be5625370e112652c97685d5638fa6",
"assets/assets/achievement_clients.png": "d2f93fc096fdcffec69c8787b8098c9a",
"assets/assets/achievement_countries.png": "13d719ec46b003988e013069abb39b08",
"assets/assets/achievement_download.png": "77958ff85bd08b00915db680d9dbd07b",
"assets/assets/achievement_users.png": "d497ee9110d4cff9778b6ced69ca9aa2",
"assets/assets/app_store.png": "bf91931c74a862f134ee4d96bde78021",
"assets/assets/cyber.jpg": "446c61dd26e5d1cf8adec9fc326494b1",
"assets/assets/feature_better_components.png": "d2f93fc096fdcffec69c8787b8098c9a",
"assets/assets/feature_flexibility.png": "696d44d96425a2050e4e5a4180f570c6",
"assets/assets/feature_multiple_layouts.png": "d497ee9110d4cff9778b6ced69ca9aa2",
"assets/assets/feature_robust_workflow.png": "77958ff85bd08b00915db680d9dbd07b",
"assets/assets/feature_user_friendly.png": "5938b43090caa3b58cf2a98bb1542777",
"assets/assets/feature_well_organised.png": "dc1b415f4b2b3afa87378b4ed4e3fd61",
"assets/assets/font/Inter-Black.ttf": "4154321279162ceac54088eca13d3e59",
"assets/assets/font/Inter-Bold.ttf": "8f2869a84ad71f156a17bb66611ebe22",
"assets/assets/font/Inter-ExtraBold.ttf": "5061bd7701b1b3339f0c80e69a2136e4",
"assets/assets/font/Inter-ExtraLight.ttf": "b7e44012c53f3bcbf154c7c4784fcc14",
"assets/assets/font/Inter-Light.ttf": "ff5fdc6f42c720a3ebd7b60f6d605888",
"assets/assets/font/Inter-Medium.ttf": "a473e623af12065b4b9cb8db4068fb9c",
"assets/assets/font/Inter-Regular.ttf": "fdb50e0d48cdcf775fa1ac0dc3c33bd4",
"assets/assets/font/Inter-SemiBold.ttf": "4d24f378e7f8656a5bccb128265a6c3d",
"assets/assets/font/Inter-Thin.ttf": "b97f16379b4c106616f60f702733f5c6",
"assets/assets/google_play.png": "304ca53c16ea4491768838dfa8d1cd79",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/landing_main_background.png": "92e6b9f72911c1b14427dfdec6e315ac",
"assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/images/profile.png": "1d35475ce4996f70c2bce6dc8607d077",
"assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/integrations.png": "a004a5dccad4be4fe0efca4543078180",
"assets/assets/integrations1.png": "b84ef3e752433dfe86c5a454111f94e8",
"assets/assets/integrations2.png": "e91568c63e37a7a9953d1204add67d4e",
"assets/assets/integrations3.png": "ce09a648fbc0f4cda2225fe51aa37362",
"assets/assets/landing_main_background.png": "910c18525329d08a5a68494bac77b9e8",
"assets/assets/logo.png": "d0ef923e0da95df49ebcf2c53e81c4e4",
"assets/assets/logo_airbnb.png": "8384fabb14a146fc26951e57a7f0acca",
"assets/assets/logo_fedex.png": "f481cd2300899f3ebfee024356cad916",
"assets/assets/logo_google.png": "1fee0fc49e697388586ec039ce24dd81",
"assets/assets/logo_hubspot.png": "8c0633aa3943766b1978ba020870e5a4",
"assets/assets/logo_microsoft.png": "05dceb094e27a0f8b3cd4e335c435e1c",
"assets/assets/logo_strapi.png": "4625ae8a83698412f9bb92731cb8d5c1",
"assets/assets/logo_walmart.png": "e639093c12aad2393cbdf487df59b9a2",
"assets/assets/logo_with_text.png": "6b59408f3eee8ab697855e2f8377917d",
"assets/assets/quote.png": "542f9a7c9d3578c6443d33d7b6e9192e",
"assets/assets/quote_background.png": "1443cc2f20897ec4be832edbd9f4585d",
"assets/assets/screenshot_mobile_1.png": "dba0448c81cd40273725126482e4d17e",
"assets/assets/screenshot_mobile_2.png": "111fcdb059c9838ebb629226f445262f",
"assets/assets/screenshot_mobile_3.png": "01fde38592953590fc558a869b74e984",
"assets/FontManifest.json": "77a487ed1d32e5509a23b473a858dc09",
"assets/fonts/MaterialIcons-Regular.otf": "d141ff0c35e0d9c5ec70d663ce2bdada",
"assets/NOTICES": "baca632683f53cfb004f7404bf656955",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e9b8c5af347bb592f36388f8a935ba94",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "266d04ae38a8ab535f43a5e046adf3ee",
"/": "266d04ae38a8ab535f43a5e046adf3ee",
"main.dart.js": "8794c3ae9b8aeef6064bcd2cace8a54e",
"manifest.json": "6bb907f5237b64e375bc1b5c7d9a3412",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
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
