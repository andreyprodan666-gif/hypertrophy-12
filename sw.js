const CACHE = "hypertrophy12-v2";
const EXERCISES = [
  "benchPress",
  "inclineDBPress",
  "latPulldown",
  "chestSupportedRow",
  "seatedDBShoulderPress",
  "lateralRaise",
  "ropeTriceps",
  "inclineDBCurl",
  "squat",
  "romanianDeadlift",
  "legPress",
  "legCurl",
  "legExtension",
  "standingCalfRaise",
  "cableCrunch",
  "machineChestPress",
  "pullUp",
  "machineShoulderPress",
  "cableFly",
  "reversePecDeck",
  "overheadTriceps",
  "cableCurl",
  "hipThrust",
  "bulgarianSplitSquat",
  "smithSquat",
  "backExtension",
  "plank",
  "cableRow",
  "trapBarDeadlift",
  "overheadPress",
  "pallofPress",
  "hackSquat",
  "seatedCalfRaise",
];
const scopeUrl = (path) => new URL(path, self.registration.scope).toString();
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "https://esm.sh/react@19.2.0",
  "https://esm.sh/react@19.2.0/jsx-runtime",
  "https://esm.sh/react-dom@19.2.0/client",
];
const MEDIA = [
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Incline_Row/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Incline_Row/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Dumbbell_Press/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Dumbbell_Press/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown_-_Rope_Attachment/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown_-_Rope_Attachment/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Leg_Curl/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Leg_Curl/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crunch/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crunch/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bench_Press/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bench_Press/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Machine_Flyes/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Machine_Flyes/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Rope_Overhead_Triceps_Extension/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Rope_Overhead_Triceps_Extension/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Biceps_Cable_Curl/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Biceps_Cable_Curl/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squat_with_Dumbbells/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squat_with_Dumbbells/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Squat/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Squat/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Cable_Rows/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Cable_Rows/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Trap_Bar_Deadlift/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Trap_Bar_Deadlift/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shoulder_Press/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shoulder_Press/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pallof_Press/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pallof_Press/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hack_Squat/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hack_Squat/1.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/0.jpg",
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/1.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll([...CORE, ...MEDIA].map(scopeUrl));
      const indexUrl = scopeUrl("./index.html");
      const response = await fetch(indexUrl);
      const html = await response.clone().text();
      await cache.put(indexUrl, response);
      const assets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
        .map((match) => new URL(match[1], indexUrl))
        .filter((url) => url.origin === self.location.origin && url.pathname.includes("/assets/"));
      await cache.addAll(assets.map((url) => url.toString()));
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith("hypertrophy12-") && key !== CACHE)
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        return fetch(request);
      })(),
    );
    return;
  }
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          const cache = await caches.open(CACHE);
          await cache.put(request, response.clone());
          return response;
        } catch {
          return (await caches.match(scopeUrl("./index.html"))) || Response.error();
        }
      })(),
    );
    return;
  }
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(CACHE);
        await cache.put(request, response.clone());
      }
      return response;
    })(),
  );
});
