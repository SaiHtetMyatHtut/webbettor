'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4dbe593a8ff4d0a2b1a9f2ba554e210e",
".git/config": "de146dc09df8b61d66fecdf5b56a30ec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b9b839ea4bdb1468dc9df9be5f29f974",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "941fb1465fce19df216742ba2bd6c399",
".git/logs/refs/heads/main": "ab06271b2c9d3cf81cd42be5c15d758c",
".git/logs/refs/remotes/origin/main": "881ec2ca585e19a9d9886f166ca5f889",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/1b/5e309a1815f1ff2e8d9fd9a55d239210a6f2c8": "019fa318ea0944f688412babb004b9fd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3f/b3f0c013be5581e882961e8027f0b6a6277a42": "015619c421193606214498f8d328fc3a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e2aebffeb4f79e457c3a6c000053b02b5ad784": "731f4969a2c82143a304d20796b81dc4",
".git/objects/4b/0c38482f60ccb28945f29e451fc5e6670b5eb0": "ef63d1a17c9db892e6eb8f77df1e2025",
".git/objects/50/89db535de0fed344aa70909ea36dfb7666512e": "5fe583a414675c0dab90994fcc79e9ce",
".git/objects/57/2da461da72576381e65cf0779557426a5fb588": "a5dd048f5c40eea064a824908793dc66",
".git/objects/57/9c927016f8a015b0ba81d7a42400ae01f3a498": "e8b20e003aa5cfc0337785d82f8881ff",
".git/objects/65/8e0ba356c381b9eda58aed8f4b1b0ee2012468": "c79c4bb231e42910db88ab12bfcdbd99",
".git/objects/70/526618e73c6a9bec4a7253580f77234d544ae6": "7de75eaee95988c8a901cb7e719ad685",
".git/objects/74/a00af8566bd177dec6a79efb98d1e400e92203": "def9b0171529b703cb6d293d03cd7386",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/480523f5536ad67ef7ec5774272089989d5171": "60b0915137e0a2909d3e74125ff9950b",
".git/objects/88/159722c3b6c6686dcf10e1073322028e367fa2": "f9014b318a2f7e712d83a735c4e82d73",
".git/objects/88/5d43b01ac08ca32ece0d9846f844eeb89069ae": "96124acb164456e0169e40c9eeea3f54",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/a47dde2fdc7a80bbecaf2e70ea6eb0aca37b63": "3162b89d58d252155b908cf73f3e7df0",
".git/objects/96/2232c40809ca0c735aaacd26edcc032945b661": "f31ca1abd9f85329a3ff8e536aa5fcdd",
".git/objects/97/aea434e89fe6a89ba46985bd22cad41d417e9d": "dfe9f0b98936c33df3ac02ee981873ef",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/9b4e7d665b3357c26d224673f6f7ce7f9c0c43": "990621d4fdf81ecc78ab9fa2a2f1b58f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/9906540623492e52128387a829f9f5af565b30": "5d44f83f7b93a4188658d8ac1fb0ab71",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fe3a27627c8f12c2bfc26c9620c4e5840f55d3": "02127f1af58f0426ced3c209941d0a08",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/faea19efbb5cc9e6540fb134dc4e9ce469f833": "4d766369b830023bf42870426847d1a9",
".git/objects/c4/b7bd2f7d71dd44debaa7188c7de6837c435a46": "e91a993b295495298ece6c534d96edb9",
".git/objects/cb/215218450747af8b07c072c3a5957a75f8bdda": "a670f8ef1fb9a4d25460a4d859622004",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/b8795c6ec54d9b67e25045d5604ca1429bc0c2": "9c05cacb609eb884dbef34651d3c2642",
".git/objects/dc/d3ab93b940bd2c1285f8168b58cf6fcad3ded9": "96df141c6d83abe3718114444037ff5e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/99e13ed61d4fa0deb903e2a6901b0aebbc1562": "a9172e6d51263813ceab393978def6c9",
".git/objects/e6/9a0048defab83bf09aa43ff8973685c284019f": "234d26aba9af4a14b6e279eed391d134",
".git/objects/e7/821400d1929e0a1994a3c61a191a5528d4e31d": "c80292b785ff4baff234b91cfe8edf4c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ec936963e452f74f0cc7bd066e1a18c17b790c": "49ccc481e99abffddc7d81d7a2677544",
".git/objects/ec/b4579e9c1dbf1dc874db3e6e9b49c361fbd156": "448bf8e2fad806acd6c2f67e57b65d29",
".git/objects/ef/9b434dbfae817630a73f8e089b6f4979eebee4": "07c049b9f8728abaeeb01e22b6a47256",
".git/objects/f3/12bf2adecf583cd2bcc7c5efe2228ce6260f57": "a02cbe6ffbc89aabffde5cf1ec986898",
".git/objects/f4/f20b826655b035ed3f95e048e9671259347de0": "f12748c2fc4ec2700de62bf4a54c3026",
".git/objects/fa/d01a06b02d02c666a92ceb4e5e3383898b0c78": "388a84957af810d7d0e9b28071e4d997",
".git/refs/heads/main": "322a8db2e0b9c9ff9e87249fc1ef844f",
".git/refs/remotes/origin/main": "322a8db2e0b9c9ff9e87249fc1ef844f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f109148c055edc56852aab2387372ffc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "683649367dd4e8b6f26409262d5d990f",
"/": "683649367dd4e8b6f26409262d5d990f",
"main.dart.js": "3f28d714eb81d7751f02913b64a2a7de",
"manifest.json": "16a5bd0cf7a77ded70fff7dbc9706622",
"version.json": "a1d6ba1259377bb4788a61e4fe0a0419"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
