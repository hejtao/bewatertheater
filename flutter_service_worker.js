'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c4bcef3b79c67ce8ab8f3b2a7cbe4ec5",
"index.html": "bd5d743557560422e20d936b184bc7ba",
"/": "bd5d743557560422e20d936b184bc7ba",
"main.dart.js": "fb196403df376b5edf17ef032830e32b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0db6eddd6fe139d590190ae89cd25064",
".git/ORIG_HEAD": "08c0a713010b3b143980a1226785e5ca",
".git/config": "f847e9366625f903fb53bd6f10eb250d",
".git/objects/59/fcd757f6c381b5b9c471ce07ddbe6e31f4d795": "cda8cfdbb2151040c304045f1471ddeb",
".git/objects/0c/dbea5e19cacc57041e2a8f98956edf2f10a01a": "1dbf820adac129900232f466ce72cef8",
".git/objects/66/60d397af354abc984cfa8b85069c5583ec4048": "24021aaf701f90c4374559da4fc8e65f",
".git/objects/57/1f7430ad092f5980287741602627eed6256161": "ab39d43240001c02dc8331421347f509",
".git/objects/9b/c337c3e25ce166f7261ae9a9f45fe26403bea7": "53a819204a6db319a814bd3f7ed2716e",
".git/objects/04/b2c2dfcfee2cfcf0a8b4e1c3d833586e08f3df": "973a870509acdd1010c3bf94bd7dc3ca",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/4cce3191d9da87cfb8a49d7ad0e2ba3c59cf87": "93e45b98e2f1b9afe4231ee44a65e491",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/3d/4674c9e6391fdb496fd55bbad3f738b2dcbc55": "b91b271df46d00c6a1eb33e76a90c86f",
".git/objects/3d/719125e5bd398e07e92cfbd379bac04ec667d1": "287febe90c3c6701d54cc488661fc3b3",
".git/objects/67/bd1da18adae563315768d226afbe11797bb9f9": "9c381d7efd19678b80f0c8400800b5a9",
".git/objects/0e/24ab50725352871f000ffcf6d2eb4255de6bbf": "1c7f7b1870219468531ebfd7f1dc0807",
".git/objects/d9/37a49f919a145d5511a5dfaca50f0810fab3a4": "d2a11753d2c86ce8ac664f3cb3d317e0",
".git/objects/be/643b5e0677f462b2f436ef2860cb50bff13611": "ed80c3c09de34ddc01307a24e004591d",
".git/objects/a5/cbd35513216d7c203efe9b908f9fcb79c94d8b": "c708ec43aec0d1ae0e74f4ad22a1a099",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/a6449a9ece5c5acecafc490b8a8342eaf4b02a": "f6d32fd377748fe6460d913eeb13dc42",
".git/objects/c9/d86910f84e824bd24fed0bf2671e7ce0d955b0": "e93053ee883fa40927469027d7bf6db6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/48013fe85ca19fa68d585470d6add7ae969100": "eedcc7a1d7a484d941aef5497fd501e1",
".git/objects/1a/a018b6d348c757a77f70067304df8b567ed549": "99354e802ea088608a6a32abb5c23217",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/8a/a47232ffb7fdb23ff03928e3ea3fd1943bab0e": "1ca4da01a8aa17eb6020054019b6ddce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/84aef4e8170e9db4c680be2d7c1df2eed0bf08": "5a48254258b1673345a671f9246ea088",
".git/objects/72/bfce3c08aceed48e11c6936b08d9adadee0165": "51f34399a49bcc6eb484aa20f896714e",
".git/objects/2f/8a93ab2d2da2e664e8d863a3a3ffc4ee65dfed": "6f81ef611b33ca134fd3a6fd02269edc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/0dee9b04a63617fd2bc69904db4c36ff0a8227": "9b85cf32e2799f63aac46d16131891e6",
".git/objects/6e/ca70880a58375e4b112d5e991c658b3c0dbb28": "2d9c3f1210d74413f4f7c2a2a5573ee5",
".git/objects/36/6369bc18a6b6c21e3792840690e3f7cb31c501": "3ab9e1c07f22665ce2ea720b04f5d55e",
".git/objects/36/ee0200f52e52b4d709f4a2fa580719548ff492": "6603f560fe6c90de531fc92bc53441e5",
".git/objects/5c/475b9f863970a26ea3ec5c7bc408cb9c16cebd": "42f08e42e5d0ae512b2e83272e5caed8",
".git/objects/5c/65457b4cb240530d36fe84cbbedde795f3951e": "dceeb3f5f8fe2eff11a9241632d01293",
".git/objects/98/9580f82e8ee040570e1eb321f75971e1249d57": "f7eee102237dcc1eb444b75d96b23302",
".git/objects/37/e5589195975a0610b72367dd39ef9aae2dd691": "5c7cd04a325436aa6378ba9f5543a4f0",
".git/objects/97/e0c9fbaa907924744ff5b930f2da3963ff9c4e": "db6fbfe64af2dd88bd2218ca2c323d25",
".git/objects/ba/83a0f8fa21ad7dab60f1b97c651392e702709a": "24f63723f38c3228d91ab176019b6494",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/c439562c3a53cd212c72fa0534a078cc1ba8db": "149048ce20296b74e41599c96bda7e9b",
".git/objects/f6/10632c139068e832c39c46eb9cecb6b2fd1238": "f41542665633ad61e3816d0e1feacd78",
".git/objects/f8/27f94e24fc158a341ea6a182bba66918a8f2b6": "df802e847affb76db919ae20fd280eb4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/c1c0c19a93c455be53a2f4b52f789c8f591dba": "1883c2af18ebe0cee984c66fd6e29dd1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/c97182617da560debdc5e6a76f04ce423c4056": "04d3e1f09c8edd43ae714c9e3cff1786",
".git/objects/84/017e281f2fb9d410ebf76115a0283b008af253": "2ee0826eee840862ffb8aad16aa32403",
".git/objects/84/e56856818f35ea4af20ddd7286becb023abfef": "7954c446486cb7fe4e5ef1dbbe1e1d9c",
".git/objects/71/1b2f514a33c7588828b500aa422239c982790c": "2c72a64fa03d1c90539e3aa9c9e95962",
".git/objects/2b/fac6e4177ab7f8b742fe63140237838556b93f": "a7c611cf28cfde5c1c3b74fe6f470972",
".git/objects/14/489b8824014eec8a2200290559eda6a52fee08": "92d5d3c70d0db16cdc1246e984c0f944",
".git/objects/22/7bc247161b48842d4a9eff7c3e7b504c656aff": "6393973c7b6e8f50247545229922a6e3",
".git/HEAD": "fe1cff8f1501dcff0eb8afd40731b9ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "078e39a31ef84f11eac314cf869c09fc",
".git/logs/refs/heads/fbuild": "089b12d8d2d89aece53118e8d4467934",
".git/logs/refs/heads/master": "e2403e724713f8c25e40acf45c7e52c2",
".git/logs/refs/remotes/origin/fbuild": "daa791920da946622a7e38735904b394",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/fbuild": "d311e668d7f40768e238312b1653d2a0",
".git/refs/heads/master": "08c0a713010b3b143980a1226785e5ca",
".git/refs/remotes/origin/fbuild": "d311e668d7f40768e238312b1653d2a0",
".git/index": "1d023d2ed59815b5b100b94db983b609",
".git/COMMIT_EDITMSG": "26ab0db90d72e28ad0ba1e22ee510510",
".git/FETCH_HEAD": "d76379983cd1239bc2cbc559b07a1a09",
"assets/AssetManifest.json": "1e6e6cdf076f48c7155258378dba5962",
"assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"assets/FontManifest.json": "2a33f53369ddd7b5850c54b408c19e10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/logo.png": "ac53449a0a9ef1ab06f44b4d9a8d9265",
"assets/assets/images/bg.png": "39ca9ac613f87873c986ac4f9648ceea",
"assets/assets/fonts/HanyiSentyMeadow.ttf": "dae78d3bb8f23401544d5b2ef8a1a6a2"
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
