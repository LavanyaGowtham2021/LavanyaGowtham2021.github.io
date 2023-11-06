'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "11d6493c69d5e8cc5e0b3642c15f209d",
"assets/AssetManifest.json": "aedabcf33a81dd0d8b30b79561e6d068",
"assets/assets/chart_data.json": "04e7199ad841fba81e37771a4a435c2c",
"assets/assets/fonts/Heebo-Bold.ttf": "ede6fdf4ecf8c32c21701823004343f4",
"assets/assets/fonts/Heebo-Medium.ttf": "6c57263dbdee325394e471a12499e64c",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/product_data.json": "6b752f38d76bcb4a85530e0247ea1746",
"assets/FontManifest.json": "7f5c0e81f6c8f9e1f08cc6d47b3029ff",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/apple.png": "bfcd63c9ff7573a34b0e74d79edcf0bb",
"assets/images/April.png": "e60ecf32eab25d284614ae438bb97177",
"assets/images/August.png": "0612b4a3c29f306df8016c2926d9a9d4",
"assets/images/ball.png": "6a389420c8cde5b9e2e01c3441410cbe",
"assets/images/ball_progressbar.png": "d29cb732af2a432c69d58e415ae2c5b4",
"assets/images/barcode.png": "770b27de2695fdf9f56f6ca88835a479",
"assets/images/bike_legend.png": "b323d01ce28cd347d5fb8bfbcad61ec8",
"assets/images/bmi_dark.png": "481b6201b285583118a7a643e452dea8",
"assets/images/bmi_light.png": "42c103457140edfa57bbd289425b5642",
"assets/images/book.png": "f4ca58847383a3378b55ef121220ec4b",
"assets/images/calendar.png": "e7da9c17d1ee344423042099dfc8c827",
"assets/images/cancer_day.png": "05afd48971420f31cdfa6d7513fb1c25",
"assets/images/cart.png": "cea43aed016d738d5541233eba68f9c1",
"assets/images/cartesian.svg": "976dccbc17c278839a40b42059687299",
"assets/images/cartesian_types.png": "e5d22ace312b92e03996b5caa73f7164",
"assets/images/car_legend.png": "c053e460ca6466b76bf2810ae081203e",
"assets/images/Cavaliers.png": "f7b79a955a58bb2c257bd519f3984804",
"assets/images/Check.png": "fc19de9164b56afda87f8983e379e2b1",
"assets/images/circle_gauge.png": "56444ed86c91672c6c63822d24f95b33",
"assets/images/circle_gauge.svg": "a4768fab5634a2f188b1976d2dc537f7",
"assets/images/circle_series.png": "bbff3b81fdfb74b410f0bc686d76268a",
"assets/images/circle_series.svg": "12a8fe27b0688e3464878270ec4ae69d",
"assets/images/circular_progress_bar.png": "3c8c38b686ed81fd0201eb66724a9d54",
"assets/images/Clippers.png": "7587a56a10ab1dea4cdec3c3bc75b2d4",
"assets/images/cloud.png": "329e2e388d3a4720def43d28d4757576",
"assets/images/cloudy.png": "91518e4afa69a12a83fc6acb8ac3183c",
"assets/images/code.svg": "dbe429c91c6bb26aca877efa89cc27a1",
"assets/images/cycle_legend.png": "ce3bc98993ed3f1fa1cb9cf9e8f5549a",
"assets/images/dark_theme_gauge.png": "cb350bec49d622f92cb77c680486e328",
"assets/images/dashline.png": "07855a68e7fb8ec5f07c0b025b75d22b",
"assets/images/Datagrid.png": "9cfd47f3acd5bd7fa32106cdae5653e6",
"assets/images/Date_range_picker.png": "3f09aecac805fd6f66aec6b6d9e85b00",
"assets/images/December.png": "d87ac679cd2f3d1c6562dd494aa8c0b5",
"assets/images/DenverNuggets.png": "7a81e8bff16d3ba24753039c1c24ab50",
"assets/images/DetroitPistons.png": "745a3415d5b13602b25d7bf49b9c4fc9",
"assets/images/documentation.png": "66dd8986f40c729bae5c79c3377144dd",
"assets/images/Downarrow.png": "e09187add2ad675c7b0bd8008f3812ff",
"assets/images/download.png": "e2a8aec81e5349c08d8dfb80a45fd296",
"assets/images/environment_day.png": "ea12570e3d0d4a2d19e19eb63bb6d03b",
"assets/images/ExcelExport.png": "1cf4a1543de50d072e74dba6ae248046",
"assets/images/February.png": "b4aee4982498ef54b3ea7c5d9a5ffd02",
"assets/images/flutter_examples.png": "143df8bd4404e2abeb1a99abacf17bc7",
"assets/images/fullscreen.png": "e3c4c422d6b10eba388749fe454cb11f",
"assets/images/funnel.png": "5d3d0b84d0446a2f71bf3c75ba41aee4",
"assets/images/funnel.svg": "37ddb0f18383c3d8717d02915e477f48",
"assets/images/git_hub.png": "74b3a1ec9666b665db448dc5cdf75864",
"assets/images/git_hub_dark.png": "fdd3b61c0650dfa10f4a2130174df3e8",
"assets/images/git_hub_mobile.png": "6ba8306f855455399bd21e6d66a74322",
"assets/images/GoldenState.png": "e81419e21668d5f5babab61c61e7ff14",
"assets/images/grouping_dark.png": "f777d6a47eee54796bf362bcda89abff",
"assets/images/grouping_light.png": "497e7f8feb6849125618fb1f4ca83504",
"assets/images/happiness_day.png": "18e7117e29841dea4112f9e960babccc",
"assets/images/health_day.png": "556837286f4e8c17eca121a76d8c6534",
"assets/images/home.png": "582e4349238d6518d43f4b29f469bde6",
"assets/images/Hornets.png": "d51deaf9edf9a3fa461f9ba40f9cc96b",
"assets/images/image_nav_banner.png": "03f48db27424d51b033c2d59a092fff0",
"assets/images/image_nav_banner_darktheme.png": "ce6aa4634f35ce5db96dead06c958b6b",
"assets/images/img_JS.png": "68beac803bd5a87ee1b502afc3809a79",
"assets/images/img_xamarin.png": "4ca17d98df6db44c339acc6681432876",
"assets/images/img_xamarin_ui.png": "d7753f3efb7863182d9576bffd916201",
"assets/images/Insufficient%2520.png": "a8b666c4a3b7970c5bc98b16e9786160",
"assets/images/January.png": "76e18dff458025942cbd2563dea64092",
"assets/images/July.png": "e40699a82cfceeff60b5b33db1d8d0bb",
"assets/images/June.png": "eb23c78fb63e09cb37b55af5bc004521",
"assets/images/linear_gauge.png": "dc296d17d99b6862ee50124ab94a5288",
"assets/images/LosAngeles.png": "ab0cab0878ef326a58ce7fbe75620d92",
"assets/images/map.png": "e3bc699306888febd6d5629bdfbeb85e",
"assets/images/map.svg": "27e3b5306669a715d961faf53627d384",
"assets/images/maps_facebook.png": "f220eaf64e59611e5255093f34cba743",
"assets/images/maps_instagram.png": "3a88d4b0664c71f64d1dfcefe3e93905",
"assets/images/maps_snapchat.png": "79b650cd32c68c4fa8aa6d262adaea76",
"assets/images/maps_tiktok.png": "e47f4b2661b1365522ca957b03b22fd4",
"assets/images/maps_twitter.png": "84202db5b290ba209ee8f9cf5b15b42e",
"assets/images/March.png": "efa957d1bf735079d573c8e8733cf1cb",
"assets/images/Mavericks.png": "051c3da14bdb04638467e81eb1885e3c",
"assets/images/May.png": "e9a14fe43782d90f7c8e244316b4db49",
"assets/images/Memphis.png": "7a3fb76e4b100194abc4d5bdb944535e",
"assets/images/Miami.png": "83618b19510d1b158ab49f6c848de764",
"assets/images/Milwakke.png": "0a60a2c166948ab5184fb7035fe7a974",
"assets/images/NewYork.png": "3febf28791407e6628f9a13b830129ae",
"assets/images/November.png": "4f987f6f3d69adac975df5a9a11a4e6a",
"assets/images/October.png": "c2c2d3bcab5d5fce18c36304c2ab065a",
"assets/images/orange.png": "fe755e28ebec6b64b268ad41df7102df",
"assets/images/Orlando.png": "f315175d6b4d3b7578839224f2b913fb",
"assets/images/other_fruits.png": "866afa110822cd028c2439169cac43c9",
"assets/images/partly_cloudy.png": "632330d8119228cc12e014dc22acc861",
"assets/images/pause.png": "6963fa3535a5a5171c6b44e3157d7842",
"assets/images/pears.png": "c2dfab85707d935d0ee2f01d41ff9ac6",
"assets/images/People_Circle12.png": "fee6b31985beb35b69c3506e2af15088",
"assets/images/People_Circle14.png": "b77f934a97bae7b1b2fdcf265fd77f0b",
"assets/images/People_Circle16.png": "95472f9d51c951d7643b957b20bd1ff3",
"assets/images/People_Circle3.png": "b2a6372eb6deb9a0ffa69466f961242c",
"assets/images/Perfect.png": "80375a775accd5e6d4ee663ad512d4fe",
"assets/images/person.png": "c7ed75c0fc451352ade741e05ad72bc8",
"assets/images/personal_loan.png": "510d52fff7f5d8695805251e9fa2cca6",
"assets/images/person_walking.gif": "07ac4788f4f59610b480acd500b124a4",
"assets/images/person_walking.png": "a7bd9af0ab18374a8533dbbed21d8223",
"assets/images/play.png": "b91cd5fa240095244a378e891f9c8850",
"assets/images/product.png": "ff5e97be025410ea087ea42ba51ccacd",
"assets/images/pub_logo.png": "6eb97330276e0b73b6aa3aff2d0a6b69",
"assets/images/pyramid.png": "d2a194468a6303550e97b65cc2feaa26",
"assets/images/pyramid.svg": "68c2be39c6afa017bb2ca9f21772dacb",
"assets/images/radial_range_slider.png": "ff58c1e625928d48fca3404901406c39",
"assets/images/radial_slider.png": "cf2584be409a42159a5768610c8d7e2c",
"assets/images/rainy.png": "a23c52c80c129bded57ba9ea0b504901",
"assets/images/rain_cloudy.png": "9debd6c6b94570edd30d1377c0d1fa09",
"assets/images/rain_light.png": "680c222dc3800a6e58036a2b4321b860",
"assets/images/range_selector.png": "8808b2b933871fa5c39de6e62613f496",
"assets/images/range_slider.png": "883635b167755502bfba7893b12c8bdd",
"assets/images/rectangle_pointer.png": "3040bbaa5c6969a9047beded32863265",
"assets/images/scroll-arrow-left.png": "424ad58034bf9bb544220543cf98cf71",
"assets/images/scroll_arrow.png": "4f78325a26c365f3b3fdd0b8105c8534",
"assets/images/September.png": "d9621b5a374fffffb7da28104d265bab",
"assets/images/shotput.png": "60ced46648353b7dad9377da6b525288",
"assets/images/sparkline_winloss.png": "28535e6333f9aeba8d797066110a93ac",
"assets/images/Sufficient.png": "52d8a445c98489cc90307b020d275d61",
"assets/images/sun.png": "526fb20eca521243a35c378de356c629",
"assets/images/sunny_image.png": "66ba3c442da37d53b67686f3fc6ebcbc",
"assets/images/syncfusion.png": "9636837ed6d3558c53ca89d2f8370778",
"assets/images/syncfusion_dark.png": "f675093578cced80eab33cad19cbf590",
"assets/images/syncfusion_logo.jpg": "9a0a7ed6484ae43c2fd28f6112f4ee30",
"assets/images/temperature_indicator_dark.png": "6252d898617278b4ba1b50f39aa4491e",
"assets/images/temperature_indicator_light.png": "cf65d37988378f421dfb9855f335284a",
"assets/images/thunderstorms.png": "0de49c4e3f7ce91dadef64f98fdb2e11",
"assets/images/Thunder_Logo.png": "4a83e1f4cb4a03d80abd1f57287a9b7a",
"assets/images/tourism_day.png": "ecafb257823727ae8ebdd2b79f757fbd",
"assets/images/treemap.png": "6964e261c7355aa2ffb82d3d733888ec",
"assets/images/triangle_pointer.png": "5f09578263d265144881b47deaacaf24",
"assets/images/truck.png": "35ca7393daf4abf9591ddf2267e61f5e",
"assets/images/truck_legend.png": "1394a8aad840267c7307ffe28b16871f",
"assets/images/Uparrow.png": "c05f1607992cde72582b61f52e9e8432",
"assets/images/xlsio.png": "35299393c94bdbcbfa7de8be67b5eaa9",
"assets/images/youtube.png": "0c781d861a8df15b16ed1ddde3d49535",
"assets/lib/sample_details.json": "bd942ec6720d9ea308cff9af10f134ce",
"assets/NOTICES": "584c371b877a2693a41a0e9bd7b96679",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"BingSiteAuth.xml": "5a55635fd2a391bdcad8d0ef1af1a17b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "0ff0e0cdd689c586ae5c1aa7ac7c9dcb",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"googlec03dd4bc003151bc.html": "d8ee63ac530b376c19042286c0935849",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1642564a617a489fbe839426e25c8104",
"/": "1642564a617a489fbe839426e25c8104",
"main.dart.js": "8550dd502074ad4df866f30c18270fec",
"manifest.json": "e0ce32893358312172b53c3721868c70",
"naver335c61fba11bdb4a502b86bfe2e8db08.html": "85f86c5a9f9bac1ffe7952c2c28fc294",
"robots.txt": "5634545ff7f473a66679177c67cdfe40",
"sitemap.xml": "3a92faedb633adb43266a6617a5c2e8f",
"version.json": "af5120e33c34cc8f8b91a06272bab11f"};
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
