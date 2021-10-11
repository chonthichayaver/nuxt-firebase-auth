importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.4be87cc36850e9efa6b7.js",
    "revision": "c557144eaf845f4b4aaadba95f63f8a2"
  },
  {
    "url": "/_nuxt/app.befb363a830a9ba56dba600f655c15ce.css",
    "revision": "befb363a830a9ba56dba600f655c15ce"
  },
  {
    "url": "/_nuxt/layouts_default.1d818115e2edbf47766a.js",
    "revision": "86daad756dd7a292c70ff5bfeb473160"
  },
  {
    "url": "/_nuxt/manifest.90845b92dcbc9754ba19.js",
    "revision": "29d8c45cda85e4419c60d96b521d2cf9"
  },
  {
    "url": "/_nuxt/pages_about.8948aab70e727c411cfd.js",
    "revision": "425dc67c7e53c9cdc04535350fe07af9"
  },
  {
    "url": "/_nuxt/pages_admin_index.5aa1df64fb9a6b64bc23.js",
    "revision": "ee4511c7af825613ec1a8182eebe7bce"
  },
  {
    "url": "/_nuxt/pages_admin_items.8097a7be7e91bfe9f968.js",
    "revision": "43165913ad1df5721bf1ce496909e434"
  },
  {
    "url": "/_nuxt/pages_admin_settings.def4e1decbafcec46501.js",
    "revision": "d4f809a1f7b42c5560a8552d9b2b24e0"
  },
  {
    "url": "/_nuxt/pages_admin.f501bd22a3ff4251b94b.js",
    "revision": "42150946b074a702d27506132b748f74"
  },
  {
    "url": "/_nuxt/pages_index.5488e3699d4547111f11.js",
    "revision": "9dec621aa7aade56cc0189719cad90e2"
  },
  {
    "url": "/_nuxt/pages_login.a2149659ff1e1ddf5204.js",
    "revision": "adb35ecb63297161c5f58d03a26f32eb"
  },
  {
    "url": "/_nuxt/vendor.d8158517cb0a276c16a1.js",
    "revision": "3b01f2de20732d71a93b5dbd77e3e933"
  }
], {
  "cacheId": "nuxt-firebase-auth",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





