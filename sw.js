const C="office-survey-default5-v7";
const A=["./","./index.html","./manifest.webmanifest","./icon-180.png","./icon-512.png","./default-1-meeting.png","./default-2-exchange.png","./default-3-acoustic.png","./default-4-thermal.png","./default-5-other.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{e.respondWith(fetch(e.request).then(r=>{const q=r.clone();caches.open(C).then(c=>c.put(e.request,q));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))))});