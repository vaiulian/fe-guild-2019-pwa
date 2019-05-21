importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "_sw.js",
    "revision": "23bb3a2070dd177f40d65c1231bde89d"
  },
  {
    "url": "favicon.ico",
    "revision": "0251fdb59b82f5f8f448fca84e94f357"
  },
  {
    "url": "index.html",
    "revision": "e010f0409da405928947bf32dde0492e"
  },
  {
    "url": "manifest.json",
    "revision": "a4f78a215646e8e0111cd289dbd1977e"
  },
  {
    "url": "offline.html",
    "revision": "97dae7962beccad56bb38e5827a77c1d"
  },
  {
    "url": "src/css/app.css",
    "revision": "e012adc9432cf2a78c06dfb79fe61074"
  },
  {
    "url": "src/css/feed.css",
    "revision": "9f8dd3dcefb55f2e47f485c20d5b1041"
  },
  {
    "url": "src/css/help.css",
    "revision": "1c6d81b27c9d423bece9869b07a7bd73"
  },
  {
    "url": "src/js/app.js",
    "revision": "57f3e5e5eeadfcf9783e756785d36fac"
  },
  {
    "url": "src/js/feed.js",
    "revision": "dea5bebb53f83d466c121dd7ebfbe690"
  },
  {
    "url": "src/lib/material.indigo-deep_orange.min.css",
    "revision": "a776ab54eac9a54727e007e0c92eae70"
  },
  {
    "url": "src/lib/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "src/images/main-image-lg.jpg",
    "revision": "05b87e478ce30957f4e2f00b5c18f80a"
  },
  {
    "url": "src/images/main-image-sm.jpg",
    "revision": "6172dffd0848144bbc3f7504d8585058"
  },
  {
    "url": "src/images/main-image.jpg",
    "revision": "489ce4c1c7ebc7545aa528cea56e50c1"
  }
]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}