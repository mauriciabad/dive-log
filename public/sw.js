if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>n(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/112-bc8fea046547a563.js",revision:"bc8fea046547a563"},{url:"/_next/static/chunks/760-847384a96633b403.js",revision:"847384a96633b403"},{url:"/_next/static/chunks/d0c16330-122d4f7604195401.js",revision:"122d4f7604195401"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-469bff521f7bfb26.js",revision:"469bff521f7bfb26"},{url:"/_next/static/chunks/pages/404-443ef4ff05451413.js",revision:"443ef4ff05451413"},{url:"/_next/static/chunks/pages/_app-d05a0c0e29d60cf4.js",revision:"d05a0c0e29d60cf4"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-6024784868a272c0.js",revision:"6024784868a272c0"},{url:"/_next/static/chunks/pages/login-b893965d5790c977.js",revision:"b893965d5790c977"},{url:"/_next/static/chunks/pages/privacy-policy-eae56cbc2e142678.js",revision:"eae56cbc2e142678"},{url:"/_next/static/chunks/pages/terms-of-service-18bd266eef9c3f6a.js",revision:"18bd266eef9c3f6a"},{url:"/_next/static/chunks/pages/user-45e188b7eb9cd8f9.js",revision:"45e188b7eb9cd8f9"},{url:"/_next/static/chunks/pages/user/dive-sites-5b60c28765950ef0.js",revision:"5b60c28765950ef0"},{url:"/_next/static/chunks/pages/user/dive-sites/new-e3626365f04b063e.js",revision:"e3626365f04b063e"},{url:"/_next/static/chunks/pages/user/dives-044c2e1d0749103e.js",revision:"044c2e1d0749103e"},{url:"/_next/static/chunks/pages/user/dives/new-a991f03681776977.js",revision:"a991f03681776977"},{url:"/_next/static/chunks/pages/user/profile-ee5973e5b0a1903a.js",revision:"ee5973e5b0a1903a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/c6730e7beee8cf86.css",revision:"c6730e7beee8cf86"},{url:"/_next/static/qbBVWCbVho94h3SlVoELT/_buildManifest.js",revision:"6957283b52684e274e82c5fd8602a525"},{url:"/_next/static/qbBVWCbVho94h3SlVoELT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"8583a8e22a29b914acd9910fa6f8b4f0"},{url:"/android-chrome-512x512.png",revision:"2aa22cbadebe715ad2fc44c86368716b"},{url:"/apple-touch-icon.png",revision:"15d80dfd3f0decbea58d6fd80976cf03"},{url:"/favicon-16x16.png",revision:"50affe721f1c42bcaf3dfe278c684fd1"},{url:"/favicon-32x32.png",revision:"1a329020b22e071ba32e266fe58adbfc"},{url:"/favicon.ico",revision:"9c983c2819bce5c5adb5fdc977009615"},{url:"/googleec3a9b1a4866cb22.html",revision:"22ed72add9dff8fee9ebcfa1f69b6059"},{url:"/maskable_icon_x192.png",revision:"377f066f0cb06dee2dab7fee9267ac56"},{url:"/maskable_icon_x512.png",revision:"5e346035bb923337cad43b70ccb501ff"},{url:"/site.webmanifest",revision:"84f9c9560b54750668712ddb0c8e7fb5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
