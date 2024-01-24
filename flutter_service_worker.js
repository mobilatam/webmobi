'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d1ae22bf2528e9c3a99555f3ae35ffb1",
"index.html": "9ca1f79867912a3452abdc7b2beff5d2",
"/": "9ca1f79867912a3452abdc7b2beff5d2",
"main.dart.js": "55a1fc4e2fa4b9f59f9287ec60f88c05",
"Icon-192.png": "7c2600b631a162e4ff83fcb9b36718a0",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "62503593932bbf1136ae849d378606b3",
"icons/Icon-192.png": "7c2600b631a162e4ff83fcb9b36718a0",
"icons/Icon-maskable-192.png": "7c2600b631a162e4ff83fcb9b36718a0",
"icons/Icon-maskable-512.png": "16eadc2216645261823cfe0e7e54c7bd",
"icons/Icon-512.png": "16eadc2216645261823cfe0e7e54c7bd",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"assets/AssetManifest.json": "f154dae87fccb268e97956e6fbbd3e74",
"assets/NOTICES": "2c442dca139865b4466aadab7d18f6f9",
"assets/FontManifest.json": "e906870da1421a8db718e9b7b52ce17d",
"assets/AssetManifest.bin.json": "685aff0782d3b30a4db1fce6880acafd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "ffccc91a76f4e61f124f5bcd4940e800",
"assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/fonts/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/fonts/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/fonts/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/fonts/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/fonts/MaterialIcons-Regular.otf": "e6e692479cc56b7dcb1f1b33d47e49cf",
"assets/fonts/Montserrat-Italic.ttf": "cc53ad8bb1c801746c831bb7ce493f74",
"assets/assets/Chevron_arrow_forward.svg": "2ced7c70dfc44fd91f7a36f6ddcddf43",
"assets/assets/support.png": "f8f3c64f2e137bde03da80e8fe6e449a",
"assets/assets/moped.png": "f130c7fe93ff254d4181c218862e1662",
"assets/assets/mantenimiento.png": "a5259b09ea560a4b9d0d837576bc46a3",
"assets/assets/download.png": "151ad611754d1461e1ca7b76ae8d101e",
"assets/assets/flags/CL.png": "43453c2b8fe6deaf56a0d6ccd18ff7cc",
"assets/assets/flags/BO.png": "48682a37387af1e1431f7cda49f7f670",
"assets/assets/flags/PY.png": "6a1ecde9c6a269536f32975c7df51a98",
"assets/assets/flags/PE.png": "734fddde28f63d6fb4318b3786181610",
"assets/assets/discount.png": "3cb77531f43377335706fe155776e932",
"assets/assets/instagram.png": "f5c5c7f9a546850eec2f66a070078387",
"assets/assets/x.png": "ec751432075b7b9fdde9b7aed2e97fd5",
"assets/assets/moped_mobile.png": "8a83837cdb963342d0d5a8e83d7dd90c",
"assets/assets/digital.png": "ecbec346e5ce596be2a0ec54272cfacb",
"assets/assets/EN.png": "4622075634890e62416a8a95626c1d19",
"assets/assets/nosotros.png": "8b02d4e212ac184a9fef958659345750",
"assets/assets/moped_delivery_hover.png": "1a11a99ad5ccb2bca8ca1cce476aa06f",
"assets/assets/scooter_view/line_mobile.png": "6da8781be7c515ad451f4ba077802a0d",
"assets/assets/scooter_view/scooter_photo.png": "9af465b62ff1d23c86cdbfe6fdcaf314",
"assets/assets/scooter_view/pasos/pasos_editable.ai": "3a641679fdf3763f7f8064a38efb2847",
"assets/assets/scooter_view/pasos/paso_1.png": "f763c910cfc0f72bb337ef9ed949385a",
"assets/assets/scooter_view/pasos/paso_2.png": "9ca80daa2b9240d9722f683e18e41c24",
"assets/assets/scooter_view/pasos/paso_3.png": "f21cac703620aa7750fca611f94e9a5a",
"assets/assets/scooter_view/pasos/paso_4.png": "3507233708749affedb9a13e67be5750",
"assets/assets/scooter_view/line_2.png": "2b18687df243779a8bbaf183883d04b3",
"assets/assets/scooter_view/paso_3_v1-01.svg": "08f980f404ee0c2424b9a0469f940897",
"assets/assets/scooter_view/paso_4.svg": "e86aef0cb37ea807a05fd3587f95e78b",
"assets/assets/scooter_view/paso_3-01.png": "befe33762d6d1f86a62c537b95042ee5",
"assets/assets/scooter_view/paso_2.svg": "e9b3a39089dc1320e21d71ca8d0f8a5d",
"assets/assets/scooter_view/paso_1.svg": "129130756e47f21a072b9311074ce414",
"assets/assets/scooter_view/line.png": "124f314501998cb34c478bf5effdab44",
"assets/assets/scooter_view/paso_4.png": "190c21e23d350b45c5cc5f39542bcab1",
"assets/assets/scooter_view/paso_2_image.png": "3b73be829310288a08ca6ec5b8d55d26",
"assets/assets/nosotros_defaul.png": "b690af29d954a6e70fae8e330515c287",
"assets/assets/moped_tablet.png": "3ec9ba0f9439e88b25541d05390bb4d9",
"assets/assets/MOTO2.png": "5cda4aec8eaf2bb4c0331bfbaeb8b553",
"assets/assets/component_hover.png": "b63aba3c2470dbbb59e2b35a14812f95",
"assets/assets/MOTO1.png": "4d052bf2c5bd80432be20ab74563bc3b",
"assets/assets/nosotros_tablet_2.png": "0a8808a1a1300889683435645995bcae",
"assets/assets/mantenimiento_hover.png": "5d3fba24a19804c2926dea28ba6df100",
"assets/assets/ES.png": "2d5e99e2d6705898663887ddf5c676ab",
"assets/assets/tiktok.png": "bcc48582be8b4bb86e8850affbb41e12",
"assets/assets/sostenibilidad.png": "335230796037645ab0bce8a841fb0e42",
"assets/assets/batery.png": "a23951f46c58ff120b172e286f2e8a68",
"assets/assets/Chevron_arrow_back.svg": "d11c9d949947b59b1702a4b49aeb3e17",
"assets/assets/support_hover.png": "cb8250e787dbf2323460e8aef2a6e0b1",
"assets/assets/component.png": "af0203c9e0d1f179c0f08f236fd89890",
"assets/assets/moped2.png": "4a35f79f5f3f0429d56f63f981763e35",
"assets/assets/scooter/cover_scooter_2.webp": "f56da4549962aa84336805af8cba546e",
"assets/assets/scooter/cover_scooter_3.webp": "041b23dc3a5bf024ca2b7ccab11a4781",
"assets/assets/scooter/cover_scooter_1_adapted.webp": "5a221ef101e1231143879022e2df1d1b",
"assets/assets/scooter/cover_scooter_1.webp": "3daa4e79a48bf5968b630630c33c90e9",
"assets/assets/logo.png": "21a40117dbf00b2d17e4abc4b3a698cc",
"assets/assets/intro.mp4": "e5e699b206fc3b91baa52a02f1c59bd2",
"assets/assets/moped_delivery.png": "05e9ffc7e04f8881ae155ea0ae0e88d8",
"assets/assets/batery_hover.png": "d8448972ee7897978206a25c4add65d9",
"assets/assets/nosotros_mobile.png": "d583841d166f0237f00bff7c53f8c648",
"assets/assets/success.riv": "537cbb27241d7cf5d34cda16153b9d6d",
"assets/assets/discount_hover.png": "52272bc5794c20b67e58c75d7695064c",
"assets/assets/reemplazo.png": "da7f170c280b0c73c57537d32471ca59",
"assets/assets/facebook.png": "63e0f7b8ebddd7e73e9d2a1dddc0763f",
"assets/assets/nosotros_tablet.png": "a1621e42d2b5639102e85360f479d195",
"assets/assets/reemplazo_hover.png": "430de741d150ce0f5803749c6053f616",
"assets/assets/chat.png": "6a9b44bdd6130f28ba30369d7d3514e5",
"assets/assets/seguro.png": "c4beeaded0fb60189e74929f573bb332",
"assets/assets/moped_mobile_of.png": "e6de252fcac28c2bcf8cc884c12d139c",
"assets/assets/linkeding.png": "babcd01ff54f020a92a8015f442090ad",
"assets/assets/cb.png": "a07ae42ae7267b97813b9644cc0ca8db",
"assets/assets/seguro_hover.png": "71c64773135d1c55e79c651c8917bf93",
"Icon-512.png": "16eadc2216645261823cfe0e7e54c7bd",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
