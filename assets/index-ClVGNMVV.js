import { jsxs as s, jsx as e, Fragment as Re } from "react/jsx-runtime";
import {
  useState as y,
  useEffect as F,
  useRef as Ze,
  useMemo as ve,
  StrictMode as _e,
} from "react";
import { createRoot as Ge } from "react-dom/client";
import { e as Qe } from "./exercise-data-CaRDynQ6.js";
import {
  B as We,
  M as De,
  P as Le,
  X as pe,
  F as Xe,
  R as Ye,
  Z as es,
  C as Ee,
  a as Te,
  A as Q,
  b as ze,
  c as K,
  S as ie,
  d as me,
  e as ss,
  f as ge,
  W as ts,
  g as Be,
  h as Ie,
  i as be,
  D as fe,
  j as ns,
  k as Oe,
  T as is,
  l as rs,
  m as Me,
  n as ls,
  o as as,
  I as cs,
  E as os,
  p as ds,
  q as hs,
  r as us,
  H as ps,
  s as ms,
  t as gs,
  u as bs,
} from "./icons-dJlVyVjB.js";
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) l(i);
  new MutationObserver((i) => {
    for (const c of i)
      if (c.type === "childList")
        for (const o of c.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && l(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const c = {};
    return (
      i.integrity && (c.integrity = i.integrity),
      i.referrerPolicy && (c.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function l(i) {
    if (i.ep) return;
    i.ep = !0;
    const c = r(i);
    fetch(i.href, c);
  }
})();
const re = Qe,
  W = Object.fromEntries(re.map((t) => [t.id, t])),
  X = {
    chest: "Грудь",
    back: "Спина и широчайшие",
    traps: "Трапеции",
    frontDelts: "Передние дельты",
    sideDelts: "Средние дельты",
    rearDelts: "Задние дельты",
    biceps: "Бицепс",
    triceps: "Трицепс",
    forearms: "Предплечья",
    quadriceps: "Квадрицепсы",
    hamstrings: "Задняя поверхность бедра",
    glutes: "Ягодицы",
    calves: "Икры",
    core: "Пресс и кор",
  },
  h = (t, n, r, l, i = {}) => ({ exerciseId: t, baseSets: n, target: r, restSeconds: l, ...i }),
  le = [
    {
      id: "upperLower4",
      daysPerWeek: 4,
      title: "4 дня · Верх / низ",
      subtitle: "Пн верх A · Вт низ A · Чт верх B · Сб низ B",
      days: [
        {
          id: "upperA",
          title: "Верх A",
          subtitle: "Горизонтальный жим",
          exercises: [
            h("benchPress", 3, "6–10", 150, { priority: !0 }),
            h("inclineDBPress", 3, "8–12", 120),
            h("latPulldown", 3, "8–12", 120, { priority: !0 }),
            h("chestSupportedRow", 3, "8–12", 120),
            h("seatedDBShoulderPress", 2, "8–12", 120),
            h("lateralRaise", 2, "12–20", 75),
            h("ropeTriceps", 2, "10–15", 75, { superset: "armsA" }),
            h("inclineDBCurl", 2, "10–15", 75, { superset: "armsA" }),
          ],
        },
        {
          id: "lowerA",
          title: "Низ A",
          subtitle: "Присед и задняя цепь",
          exercises: [
            h("squat", 3, "6–10", 180, { priority: !0 }),
            h("romanianDeadlift", 3, "6–10", 150, { priority: !0 }),
            h("legPress", 2, "10–15", 120),
            h("legCurl", 2, "10–15", 90),
            h("legExtension", 2, "12–20", 90),
            h("standingCalfRaise", 3, "8–15", 75),
            h("cableCrunch", 2, "10–15", 75),
          ],
        },
        {
          id: "upperB",
          title: "Верх B",
          subtitle: "Тяга и верх груди",
          exercises: [
            h("chestSupportedRow", 3, "8–12", 120, { priority: !0 }),
            h("machineChestPress", 3, "8–12", 120, { priority: !0 }),
            h("pullUp", 3, "6–10", 150),
            h("machineShoulderPress", 2, "8–12", 120),
            h("cableFly", 2, "12–20", 90),
            h("reversePecDeck", 2, "12–20", 90),
            h("overheadTriceps", 2, "10–15", 75, { superset: "armsB" }),
            h("cableCurl", 2, "10–15", 75, { superset: "armsB" }),
          ],
        },
        {
          id: "lowerB",
          title: "Низ B",
          subtitle: "Ягодицы и квадрицепсы",
          exercises: [
            h("hipThrust", 3, "6–12", 120, { priority: !0 }),
            h("bulgarianSplitSquat", 3, "8–12 / сторона", 120, { priority: !0, kind: "perSide" }),
            h("legCurl", 3, "10–15", 90),
            h("smithSquat", 2, "8–12", 150),
            h("legExtension", 2, "12–20", 90),
            h("seatedCalfRaise", 3, "12–20", 75),
            h("backExtension", 2, "10–15", 90),
            h("plank", 2, "30–45 сек", 60, { kind: "timed" }),
          ],
        },
      ],
    },
    {
      id: "fullBody3",
      daysPerWeek: 3,
      title: "3 дня · Full body",
      subtitle: "Пн A · Ср B · Пт C",
      days: [
        {
          id: "fullA",
          title: "Full body A",
          subtitle: "Присед и жим",
          exercises: [
            h("squat", 3, "6–10", 180, { priority: !0 }),
            h("benchPress", 3, "6–10", 150, { priority: !0 }),
            h("latPulldown", 3, "8–12", 120),
            h("romanianDeadlift", 3, "6–10", 150),
            h("cableRow", 2, "10–15", 105),
            h("lateralRaise", 2, "12–20", 75),
            h("ropeTriceps", 2, "10–15", 75, { superset: "fullArmsA" }),
            h("cableCurl", 2, "10–15", 75, { superset: "fullArmsA" }),
            h("standingCalfRaise", 2, "10–15", 75, { superset: "fullCoreA" }),
            h("cableCrunch", 2, "10–15", 75, { superset: "fullCoreA" }),
          ],
        },
        {
          id: "fullB",
          title: "Full body B",
          subtitle: "Трап-тяга и жим",
          exercises: [
            h("trapBarDeadlift", 2, "5–8", 180, { priority: !0 }),
            h("overheadPress", 3, "6–10", 150, { priority: !0 }),
            h("chestSupportedRow", 3, "8–12", 120),
            h("legPress", 3, "10–15", 120),
            h("inclineDBPress", 2, "8–12", 120),
            h("legCurl", 3, "10–15", 90),
            h("seatedCalfRaise", 3, "12–20", 75),
            h("overheadTriceps", 2, "10–15", 75, { superset: "fullArmsB" }),
            h("cableCurl", 2, "10–15", 75, { superset: "fullArmsB" }),
            h("pallofPress", 2, "10–15 / сторона", 60, { kind: "perSide" }),
          ],
        },
        {
          id: "fullC",
          title: "Full body C",
          subtitle: "Гакк и тяга",
          exercises: [
            h("hackSquat", 3, "8–12", 150, { priority: !0 }),
            h("pullUp", 3, "6–10", 150, { priority: !0 }),
            h("machineChestPress", 3, "8–12", 120),
            h("bulgarianSplitSquat", 2, "8–12 / сторона", 120, { kind: "perSide" }),
            h("legCurl", 3, "10–15", 90),
            h("cableFly", 2, "12–20", 90),
            h("reversePecDeck", 2, "12–20", 75),
            h("lateralRaise", 2, "12–20", 75),
            h("ropeTriceps", 2, "10–15", 75, { superset: "fullArmsC" }),
            h("cableCurl", 2, "10–15", 75, { superset: "fullArmsC" }),
            h("seatedCalfRaise", 2, "12–20", 75),
          ],
        },
      ],
    },
  ],
  Fe = [
    {
      week: 1,
      rir: "3",
      targetRIR: 3,
      deload: !1,
      dropSet: !1,
      note: "2 подхода во всём. Подбор весов и исходные результаты.",
    },
    {
      week: 2,
      rir: "2–3",
      targetRIR: 2.5,
      deload: !1,
      dropSet: !1,
      note: "2 подхода во всём. Двойная прогрессия.",
    },
    {
      week: 3,
      rir: "2",
      targetRIR: 2,
      deload: !1,
      dropSet: !1,
      note: "Базовый объём по программе.",
    },
    {
      week: 4,
      rir: "4",
      targetRIR: 4,
      deload: !0,
      dropSet: !1,
      note: "Разгрузка: 1 подход, вес на 10–15% ниже.",
    },
    {
      week: 5,
      rir: "2–3",
      targetRIR: 2.5,
      deload: !1,
      dropSet: !1,
      note: "2 подхода во всём. Новый подъём нагрузки.",
    },
    { week: 6, rir: "2", targetRIR: 2, deload: !1, dropSet: !1, note: "Полный базовый объём." },
    {
      week: 7,
      rir: "1–2",
      targetRIR: 1.5,
      deload: !1,
      dropSet: !1,
      note: "+1 подход к каждому ★. Пик объёма блока.",
    },
    {
      week: 8,
      rir: "4",
      targetRIR: 4,
      deload: !0,
      dropSet: !1,
      note: "Разгрузка: 1 подход, вес на 10–15% ниже.",
    },
    {
      week: 9,
      rir: "2",
      targetRIR: 2,
      deload: !1,
      dropSet: !1,
      note: "Полный объём. Попробуйте превзойти неделю 6.",
    },
    {
      week: 10,
      rir: "1–2",
      targetRIR: 1.5,
      deload: !1,
      dropSet: !0,
      note: "Опционально один дроп-сет в изоляции.",
    },
    {
      week: 11,
      rir: "1–2 / 0–1",
      targetRIR: 1,
      deload: !1,
      dropSet: !0,
      note: "+1 подход к ★. Отказ только в безопасной изоляции.",
    },
    {
      week: 12,
      rir: "3–4",
      targetRIR: 3.5,
      deload: !0,
      dropSet: !1,
      note: "Разгрузка и оценка без тестов 1ПМ.",
    },
  ],
  V = (t) => le.find((n) => n.id === t) ?? le[0],
  fs = (t, n) => V(t).days.find((r) => r.id === n) ?? V(t).days[0],
  Y = (t) => Fe[Math.min(12, Math.max(1, t)) - 1],
  U = (t, n) =>
    [1, 2, 5].includes(t)
      ? 2
      : [4, 8, 12].includes(t)
        ? 1
        : [7, 11].includes(t)
          ? n.baseSets + (n.priority ? 1 : 0)
          : n.baseSets,
  O = (t, n) => t.exercises.reduce((r, l) => r + U(n, l), 0),
  H = {
    version: 1,
    settings: {
      programId: "upperLower4",
      unit: "kg",
      currentWeek: 1,
      trainingDays: [1, 2, 4, 6],
      sound: !0,
    },
    logs: [],
    rest: null,
  },
  B = (t, n, r) => `${t}:${n}:${r}`,
  vs = (t, n) => (n === "kg" ? t : t / 2.2046226218),
  Z = (t, n) => (n === "kg" ? t : t * 2.2046226218),
  T = (t) => Math.round(t * 10) / 10,
  Ns = (t) => Math.max(...(t.match(/\d+/g) ?? ["0"]).map(Number)),
  ne = (t) => Math.min(...(t.match(/\d+/g) ?? ["0"]).map(Number)),
  je = (t) => (t.leftReps != null && t.rightReps != null ? t.leftReps + t.rightReps : t.reps),
  qe = (t) => t.weightKg * je(t),
  ys = (t) => (t.weightKg > 0 && t.reps > 0 ? t.weightKg * (1 + Math.min(t.reps, 12) / 30) : 0),
  ws = (t, n) => O(t, n),
  D = (t) => (t ? Object.values(t.exercises).reduce((n, r) => n + r.length, 0) : 0),
  ae = (t, n, r) => D(r) >= ws(t, n);
function Ne(t, n, r) {
  return (
    t
      .filter((i) => i.id !== r && i.exercises[n]?.length)
      .sort((i, c) => c.startedAt.localeCompare(i.startedAt))[0]?.exercises[n] ?? []
  );
}
function ks(t, n, r, l) {
  const i = Ne(t, n.id, l),
    c = Ns(r);
  if (!i.length || !c) return null;
  const o = i.every((m) =>
      m.leftReps != null && m.rightReps != null ? m.leftReps >= c && m.rightReps >= c : m.reps >= c,
    ),
    a = i.at(-1);
  if (!o || !a || a.rir < 1 || a.weightKg <= 0) return null;
  const d = Math.max(T(a.weightKg * 0.025), 0.5);
  return `Верх диапазона достигнут: попробуйте ${T(a.weightKg + d).toLocaleString("ru-RU")} кг (+2–5%).`;
}
function xs(t, n, r, l) {
  const c = Ne(t, n, l).at(-1)?.weightKg ?? 0;
  return T(Y(r).deload && c > 0 ? c * 0.875 : c);
}
function Ss(t, n, r, l) {
  for (let i = 1; i <= t.exercises.length; i += 1) {
    const c = (l + i) % t.exercises.length,
      o = t.exercises[c];
    if ((n?.exercises[o.exerciseId]?.length ?? 0) < U(r, o)) return c;
  }
  return l;
}
function Cs(t, n, r, l) {
  const i = t.exercises[l];
  if (!i.superset) return !1;
  const c = n?.exercises[i.exerciseId]?.length ?? 0;
  return t.exercises.some(
    (o, a) =>
      a !== l &&
      o.superset === i.superset &&
      (n?.exercises[o.exerciseId]?.length ?? 0) < Math.min(c, U(r, o)),
  );
}
function Rs(t, n) {
  return t
    .filter((r) => r.exercises[n]?.length)
    .sort((r, l) => r.startedAt.localeCompare(l.startedAt))
    .map((r) => {
      const l = r.exercises[n];
      return {
        date: r.startedAt,
        week: r.week,
        maxWeight: Math.max(...l.map((i) => i.weightKg)),
        best1RM: Math.max(...l.map(ys)),
        volume: l.reduce((i, c) => i + qe(c), 0),
        reps: l.reduce((i, c) => i + je(c), 0),
      };
    });
}
function zs(t, n) {
  const r = {};
  return (
    t
      .filter((l) => !n || l.week === n)
      .forEach((l) => {
        Object.entries(l.exercises).forEach(([i, c]) => {
          const o = W[i];
          !o ||
            !c.length ||
            (o.primaryMuscles.forEach((a) => {
              ((r[a] ??= { direct: 0, indirect: 0 }), (r[a].direct += c.length));
            }),
            o.secondaryMuscles
              .filter((a) => !o.primaryMuscles.includes(a))
              .forEach((a) => {
                ((r[a] ??= { direct: 0, indirect: 0 }), (r[a].indirect += c.length * 0.5));
              }));
        });
      }),
    Object.entries(r)
      .map(([l, i]) => ({
        muscle: l,
        name: X[l],
        direct: i.direct,
        indirect: i.indirect,
        total: i.direct + i.indirect,
      }))
      .sort((l, i) => i.total - l.total)
  );
}
function Is(t, n) {
  const r = t.filter((l) => l.completedAt);
  return {
    completedWorkouts: r.length,
    completedSets: r.reduce((l, i) => l + D(i), 0),
    totalVolume: r.reduce(
      (l, i) =>
        l +
        Object.values(i.exercises)
          .flat()
          .reduce((c, o) => c + qe(o), 0),
      0,
    ),
    adherence: n ? Math.min(r.length / n, 1) : 0,
  };
}
function Ms(t) {
  const n = [
    [
      "Дата",
      "Неделя",
      "Тренировка",
      "Упражнение",
      "Подход",
      "Вес, кг",
      "Повторы",
      "Левая",
      "Правая",
      "Секунды",
      "RIR",
    ],
  ];
  return (
    t.forEach((r) =>
      Object.entries(r.exercises).forEach(([l, i]) => {
        i.forEach((c, o) =>
          n.push([
            r.startedAt,
            String(r.week),
            r.dayId,
            W[l]?.name ?? l,
            String(o + 1),
            String(c.weightKg),
            String(c.reps),
            String(c.leftReps ?? ""),
            String(c.rightReps ?? ""),
            String(c.durationSeconds ?? ""),
            String(c.rir),
          ]),
        );
      }),
    ),
    "\uFEFF" +
      n.map((r) => r.map((l) => `"${l.replaceAll('"', '""')}"`).join(";")).join(`
`)
  );
}
const Ke = "hypertrophy12:v1";
function As() {
  try {
    const t = localStorage.getItem(Ke);
    if (!t) return H;
    const n = JSON.parse(t);
    return n.version !== 1
      ? H
      : {
          ...H,
          ...n,
          settings: { ...H.settings, ...n.settings },
          logs: Array.isArray(n.logs) ? n.logs : [],
        };
  } catch {
    return H;
  }
}
function $s() {
  const [t, n] = y(As);
  return (
    F(() => {
      try {
        localStorage.setItem(Ke, JSON.stringify(t));
      } catch {}
    }, [t]),
    [t, n]
  );
}
function Ae({ rest: t, sound: n, onChange: r, onClose: l }) {
  const [i, c] = y(Date.now()),
    o = Ze(!1);
  F(() => {
    const v = window.setInterval(() => c(Date.now()), 250);
    return () => window.clearInterval(v);
  }, []);
  const a = Math.max(0, Math.ceil((t.endAt - i) / 1e3));
  F(() => {
    if (a > 0) {
      o.current = !1;
      return;
    }
    if (!o.current && ((o.current = !0), n)) {
      navigator.vibrate?.([180, 80, 180]);
      try {
        const v = new AudioContext(),
          g = v.createOscillator(),
          C = v.createGain();
        ((g.frequency.value = 660),
          C.gain.setValueAtTime(0.001, v.currentTime),
          C.gain.exponentialRampToValueAtTime(0.16, v.currentTime + 0.03),
          C.gain.exponentialRampToValueAtTime(0.001, v.currentTime + 0.45),
          g.connect(C).connect(v.destination),
          g.start(),
          g.stop(v.currentTime + 0.46),
          (g.onended = () => {
            v.close();
          }));
      } catch {}
    }
  }, [a, n]);
  const d = Math.min(1, Math.max(0, a / t.duration)),
    m = Math.floor(a / 60),
    u = a % 60,
    b = (v) => {
      const g = Math.max(5, t.duration + v);
      r({ ...t, duration: g, endAt: Math.max(Date.now() + 5e3, t.endAt + v * 1e3) });
    };
  return s("section", {
    className: `rest-timer ${a === 0 ? "is-done" : ""}`,
    "aria-live": "polite",
    children: [
      e("div", {
        className: "rest-ring",
        style: { "--progress": `${d * 360}deg` },
        children: s("div", {
          className: "rest-ring-inner",
          children: [
            e("span", { children: a === 0 ? "ГОТОВО" : "ОТДЫХ" }),
            s("strong", { children: [m, ":", String(u).padStart(2, "0")] }),
          ],
        }),
      }),
      s("div", {
        className: "rest-controls",
        children: [
          s("div", {
            children: [
              s("span", {
                className: "eyebrow",
                children: [e(We, { size: 14 }), " ", t.exerciseName],
              }),
              e("p", {
                children:
                  a === 0
                    ? "Можно начинать следующий подход"
                    : "Следующий подход после восстановления",
              }),
            ],
          }),
          s("div", {
            className: "timer-buttons",
            children: [
              s("button", {
                type: "button",
                onClick: () => b(-15),
                "aria-label": "Уменьшить на 15 секунд",
                children: [e(De, { size: 16 }), "15"],
              }),
              s("button", {
                type: "button",
                onClick: () => b(30),
                "aria-label": "Добавить 30 секунд",
                children: [e(Le, { size: 16 }), "30"],
              }),
              s("button", {
                type: "button",
                className: "timer-skip",
                onClick: l,
                children: [e(pe, { size: 17 }), a === 0 ? "Закрыть" : "Пропустить"],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ye({ week: t, onChange: n, compact: r = !1 }) {
  return s("div", {
    className: `week-strip ${r ? "week-strip--compact" : ""}`,
    children: [
      s("div", {
        className: "week-strip-label",
        children: [e("span", { children: "МЕЗОЦИКЛ" }), s("strong", { children: [t, " / 12"] })],
      }),
      e("div", {
        className: "week-scroll",
        "aria-label": "Выбор недели",
        children: Fe.map((l) =>
          s(
            "button",
            {
              type: "button",
              className: `${t === l.week ? "is-active" : ""} ${l.deload ? "is-deload" : ""}`,
              onClick: () => n(l.week),
              "aria-label": `Неделя ${l.week}${l.deload ? ", разгрузка" : ""}`,
              children: [
                e("span", { children: l.week }),
                e("small", {
                  children: l.deload
                    ? "ЛЁГКАЯ"
                    : l.week === 7 || l.week === 11
                      ? "ПИК"
                      : `RIR ${l.rir}`,
                }),
              ],
            },
            l.week,
          ),
        ),
      }),
    ],
  });
}
const Ps = ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
function Ws({ state: t, onWeekChange: n, onStart: r, onOpenPlan: l }) {
  const { settings: i, logs: c } = t,
    o = V(i.programId),
    a = i.currentWeek,
    d = Y(a),
    m =
      o.days.find(
        (w) =>
          !ae(
            w,
            a,
            c.find(($) => $.id === B(o.id, a, w.id)),
          ),
      ) ?? o.days[0],
    u = c.find((w) => w.id === B(o.id, a, m.id)),
    b = W[m.exercises[0].exerciseId],
    v = D(u),
    g = O(m, a),
    C = v > 0;
  return s("div", {
    className: "today-view",
    children: [
      s("section", {
        className: "today-intro",
        children: [
          s("div", {
            children: [
              s("span", {
                className: "eyebrow",
                children: [
                  e(Xe, { size: 15 }),
                  " НЕДЕЛЯ ",
                  a,
                  " · ",
                  d.deload ? "РАЗГРУЗКА" : "НАБОР МАССЫ",
                ],
              }),
              e("h1", {
                children: C
                  ? `Продолжим
с того же места.`
                  : `Сегодня
сильнее, чем вчера.`,
              }),
            ],
          }),
          s("p", {
            children: ["Чёткий план. Контроль техники.", e("br", {}), "Ни одного лишнего подхода."],
          }),
        ],
      }),
      e(ye, { week: a, onChange: n }),
      s("section", {
        className: `week-focus ${d.deload ? "is-deload" : ""}`,
        children: [
          d.deload ? e(Ye, { size: 21 }) : e(es, { size: 21 }),
          s("div", {
            children: [
              e("strong", {
                children: d.deload
                  ? "Восстановление — часть прогресса"
                  : `Цель недели · RIR ${d.rir}`,
              }),
              e("p", { children: d.note }),
            ],
          }),
        ],
      }),
      s("section", {
        className: "next-workout",
        children: [
          s("div", {
            className: "next-photo",
            children: [
              e("img", { src: b.images[0], alt: b.name }),
              e("span", { className: "photo-label", children: "СЛЕДУЮЩАЯ ТРЕНИРОВКА" }),
              e("div", {
                className: "workout-number",
                children: String(o.days.findIndex((w) => w.id === m.id) + 1).padStart(2, "0"),
              }),
            ],
          }),
          s("div", {
            className: "next-content",
            children: [
              s("div", {
                className: "next-title-row",
                children: [
                  s("div", {
                    children: [
                      e("span", { className: "eyebrow", children: o.title }),
                      e("h2", { children: m.title }),
                      e("p", { children: m.subtitle }),
                    ],
                  }),
                  s("span", {
                    className: "duration",
                    children: [e(Ee, { size: 16 }), "55–75 мин"],
                  }),
                ],
              }),
              s("div", {
                className: "workout-progress-label",
                children: [
                  s("span", { children: [m.exercises.length, " упражнений · ", g, " подходов"] }),
                  s("strong", { children: [v, " / ", g] }),
                ],
              }),
              e("div", {
                className: "linear-progress",
                children: e("span", { style: { width: `${g ? (v / g) * 100 : 0}%` } }),
              }),
              s("div", {
                className: "exercise-preview",
                children: [
                  m.exercises
                    .slice(0, 4)
                    .map((w) => e("span", { children: W[w.exerciseId].name }, w.exerciseId)),
                  m.exercises.length > 4 &&
                    s("span", { children: ["Ещё ", m.exercises.length - 4] }),
                ],
              }),
              s("button", {
                className: "primary-cta",
                type: "button",
                onClick: () => r(m.id),
                children: [
                  e("span", {
                    className: "cta-icon",
                    children: e(Te, { size: 22, fill: "currentColor" }),
                  }),
                  s("span", {
                    children: [
                      C ? "Продолжить тренировку" : "Начать тренировку",
                      s("small", { children: [b.name, " · ", m.exercises[0].target, " повторов"] }),
                    ],
                  }),
                  e(Q, { size: 23 }),
                ],
              }),
            ],
          }),
        ],
      }),
      s("section", {
        className: "schedule-section",
        children: [
          s("div", {
            className: "section-heading",
            children: [
              s("div", {
                children: [
                  e("span", { className: "eyebrow", children: "РАСПИСАНИЕ" }),
                  e("h2", { children: "Эта неделя" }),
                ],
              }),
              s("button", {
                type: "button",
                onClick: l,
                children: ["Вся программа ", e(ze, { size: 17 })],
              }),
            ],
          }),
          e("div", {
            className: "schedule-list",
            children: o.days.map((w, $) => {
              const z = c.find((p) => p.id === B(o.id, a, w.id)),
                j = ae(w, a, z),
                q = D(z);
              return s(
                "button",
                {
                  type: "button",
                  className: `schedule-row ${j ? "is-done" : ""}`,
                  onClick: () => r(w.id),
                  children: [
                    s("span", {
                      className: "schedule-date",
                      children: [
                        e("small", {
                          children: Ps[i.trainingDays[$] ?? $ + 1].slice(0, 2).toUpperCase(),
                        }),
                        e("strong", { children: String($ + 1).padStart(2, "0") }),
                      ],
                    }),
                    s("span", {
                      className: "schedule-info",
                      children: [
                        e("strong", { children: w.title }),
                        s("small", { children: [w.subtitle, " · ", O(w, a), " подходов"] }),
                      ],
                    }),
                    e("span", {
                      className: "schedule-state",
                      children: j
                        ? e(K, { size: 20 })
                        : q > 0
                          ? `${q}/${O(w, a)}`
                          : e(ze, { size: 20 }),
                    }),
                  ],
                },
                w.id,
              );
            }),
          }),
        ],
      }),
      e("p", {
        className: "medical-note",
        children:
          "Работайте в безболезненной амплитуде. При заболеваниях сердца, суставов или длительном перерыве согласуйте нагрузку с врачом.",
      }),
    ],
  });
}
function Ds({ state: t, onWeekChange: n, onStart: r, onProgramChange: l }) {
  const i = V(t.settings.programId),
    c = t.settings.currentWeek,
    o = Y(c);
  return s("div", {
    className: "plan-view",
    children: [
      s("section", {
        className: "page-heading",
        children: [
          e("span", { className: "eyebrow", children: "12 НЕДЕЛЬ · 3 БЛОКА" }),
          e("h1", { children: "Программа" }),
          e("p", { children: "Объём растёт постепенно. Каждая четвёртая неделя — разгрузка." }),
        ],
      }),
      e("div", {
        className: "segmented-control",
        "aria-label": "Частота тренировок",
        children: le.map((a) =>
          s(
            "button",
            {
              type: "button",
              className: i.id === a.id ? "is-active" : "",
              onClick: () => l(a.id),
              children: [
                a.daysPerWeek,
                " дня",
                e("small", { children: a.id === "upperLower4" ? "Верх / низ" : "Full body" }),
              ],
            },
            a.id,
          ),
        ),
      }),
      e(ye, { week: c, onChange: n }),
      s("div", {
        className: "plan-prescription",
        children: [s("span", { children: ["RIR ", o.rir] }), e("p", { children: o.note })],
      }),
      e("div", {
        className: "plan-days",
        children: i.days.map((a, d) => {
          const m = t.logs.find((b) => b.id === B(i.id, c, a.id)),
            u = ae(a, c, m);
          return s(
            "details",
            {
              className: "plan-day",
              open: d === 0,
              children: [
                s("summary", {
                  children: [
                    e("span", {
                      className: "plan-day-index",
                      children: String(d + 1).padStart(2, "0"),
                    }),
                    s("span", {
                      children: [
                        e("strong", { children: a.title }),
                        s("small", { children: [a.subtitle, " · ", O(a, c), " подходов"] }),
                      ],
                    }),
                    u && e(K, { size: 20, className: "done-icon" }),
                  ],
                }),
                s("div", {
                  className: "plan-exercises",
                  children: [
                    a.exercises.map((b, v) => {
                      const g = W[b.exerciseId];
                      return s(
                        "div",
                        {
                          className: "plan-exercise",
                          children: [
                            e("img", { src: g.images[0], alt: "", loading: "lazy" }),
                            s("span", {
                              className: "plan-exercise-copy",
                              children: [
                                s("strong", { children: [v + 1, ". ", g.name] }),
                                s("small", {
                                  children: [
                                    U(c, b),
                                    " × ",
                                    b.target,
                                    " · отдых ",
                                    Math.floor(b.restSeconds / 60),
                                    ":",
                                    String(b.restSeconds % 60).padStart(2, "0"),
                                  ],
                                }),
                              ],
                            }),
                            s("span", {
                              className: "plan-flags",
                              children: [
                                b.priority && e(ie, { size: 16, fill: "currentColor" }),
                                b.superset && e(me, { size: 17 }),
                              ],
                            }),
                          ],
                        },
                        b.exerciseId,
                      );
                    }),
                    s("div", {
                      className: "plan-day-footer",
                      children: [
                        s("span", { children: [D(m), " / ", O(a, c), " записано"] }),
                        s("button", {
                          type: "button",
                          onClick: () => r(a.id),
                          children: [D(m) ? "Продолжить" : "Начать", " ", e(Q, { size: 17 })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            a.id,
          );
        }),
      }),
      s("div", {
        className: "method-note",
        children: [
          e("strong", { children: "Как читать программу" }),
          s("p", {
            children: [
              e(ie, { size: 15 }),
              " ★ — приоритет: на неделях 7 и 11 добавляется один подход.",
            ],
          }),
          s("p", {
            children: [
              e(me, { size: 16 }),
              " Упражнения с этим знаком образуют суперсет: между ними нет паузы, отдых — после пары.",
            ],
          }),
        ],
      }),
    ],
  });
}
function Ue({ exercise: t, compact: n = !1 }) {
  const [r, l] = y(0),
    [i, c] = y(!n);
  return (
    F(() => {
      (l(0), c(!n));
    }, [t.id, n]),
    F(() => {
      if (!i) return;
      const o = window.setInterval(() => l((a) => (a === 0 ? 1 : 0)), 1700);
      return () => window.clearInterval(o);
    }, [i]),
    s("div", {
      className: `exercise-media ${n ? "exercise-media--compact" : ""}`,
      children: [
        s("div", {
          className: "media-stage",
          children: [
            t.images.map((o, a) =>
              e(
                "img",
                {
                  src: o,
                  alt: `${t.name}: ${a === 0 ? "исходное положение" : "конечное положение"}`,
                  className: r === a ? "media-frame is-visible" : "media-frame",
                  loading: n ? "lazy" : "eager",
                },
                o,
              ),
            ),
            e("span", { className: "media-position", children: r === 0 ? "СТАРТ" : "ФИНИШ" }),
            !n &&
              e("button", {
                className: "media-play",
                type: "button",
                onClick: () => c((o) => !o),
                "aria-label": i ? "Остановить демонстрацию" : "Запустить демонстрацию",
                children: i ? e(ss, { size: 19 }) : e(Te, { size: 19 }),
              }),
          ],
        }),
        !n &&
          e("div", {
            className: "frame-switch",
            "aria-label": "Положение в упражнении",
            children: ["Исходное", "Конечное"].map((o, a) =>
              s(
                "button",
                {
                  type: "button",
                  className: r === a ? "is-active" : "",
                  onClick: () => {
                    (l(a), c(!1));
                  },
                  children: [s("span", { children: ["0", a + 1] }), o],
                },
                o,
              ),
            ),
          }),
      ],
    })
  );
}
const $e = [
  { id: "all", label: "Все" },
  {
    id: "upper",
    label: "Верх",
    muscles: ["chest", "back", "frontDelts", "sideDelts", "rearDelts", "biceps", "triceps"],
  },
  { id: "lower", label: "Низ", muscles: ["quadriceps", "hamstrings", "glutes", "calves"] },
  { id: "core", label: "Кор", muscles: ["core"] },
];
function Ls() {
  const [t, n] = y(""),
    [r, l] = y("all"),
    [i, c] = y(null),
    o = re.find((d) => d.id === i),
    a = ve(
      () =>
        re.filter((d) => {
          const m = $e.find((b) => b.id === r);
          return (
            (!m?.muscles ||
              [...d.primaryMuscles, ...d.secondaryMuscles].some((b) => m.muscles.includes(b))) &&
            `${d.name} ${d.equipment}`.toLowerCase().includes(t.trim().toLowerCase())
          );
        }),
      [r, t],
    );
  return o
    ? s("div", {
        className: "library-detail",
        children: [
          s("button", {
            className: "back-button",
            type: "button",
            onClick: () => c(null),
            children: [e(ge, { size: 20 }), " Все упражнения"],
          }),
          e("span", { className: "eyebrow", children: "ТЕХНИКА · РЕАЛЬНАЯ ДЕМОНСТРАЦИЯ" }),
          e("h1", { children: o.name }),
          e("p", { className: "detail-equipment", children: o.equipment }),
          e(Ue, { exercise: o }),
          s("div", {
            className: "muscle-tags",
            children: [
              o.primaryMuscles.map((d) => e("span", { children: X[d] }, d)),
              o.secondaryMuscles.map((d) =>
                e("span", { className: "secondary", children: X[d] }, d),
              ),
            ],
          }),
          s("section", {
            className: "technique-section",
            children: [
              e("span", { className: "section-number", children: "01" }),
              s("div", {
                children: [
                  e("h2", { children: "Исходное положение" }),
                  e("p", { children: o.setup }),
                ],
              }),
            ],
          }),
          s("section", {
            className: "technique-section",
            children: [
              e("span", { className: "section-number", children: "02" }),
              s("div", {
                children: [
                  e("h2", { children: "Выполнение" }),
                  e("ol", { children: o.instructions.map((d) => e("li", { children: d }, d)) }),
                ],
              }),
            ],
          }),
          s("section", {
            className: "technique-section",
            children: [
              e("span", { className: "section-number", children: e(ts, { size: 20 }) }),
              s("div", {
                children: [e("h2", { children: "Дыхание" }), e("p", { children: o.breathing })],
              }),
            ],
          }),
          s("section", {
            className: "technique-section mistakes",
            children: [
              e("span", { className: "section-number", children: e(pe, { size: 20 }) }),
              s("div", {
                children: [
                  e("h2", { children: "Не делайте так" }),
                  e("ul", { children: o.mistakes.map((d) => e("li", { children: d }, d)) }),
                ],
              }),
            ],
          }),
          s("div", {
            className: "safety-note",
            children: [
              e(Be, { size: 23 }),
              s("div", {
                children: [
                  e("strong", { children: "Безопасность" }),
                  e("p", { children: o.safety }),
                ],
              }),
            ],
          }),
          s("details", {
            className: "substitutions",
            children: [
              e("summary", { children: "Чем заменить" }),
              e("p", { children: o.substitutions.join(" · ") }),
            ],
          }),
        ],
      })
    : s("div", {
        className: "library-view",
        children: [
          s("section", {
            className: "page-heading",
            children: [
              e("span", { className: "eyebrow", children: "33 ДВИЖЕНИЯ · 66 ФОТО" }),
              e("h1", { children: "Упражнения" }),
              e("p", { children: "Смотрите движение, а не угадывайте технику по схеме." }),
            ],
          }),
          s("label", {
            className: "search-field",
            children: [
              e(Ie, { size: 20 }),
              e("input", {
                value: t,
                onChange: (d) => n(d.target.value),
                placeholder: "Название или инвентарь",
                "aria-label": "Поиск упражнения",
              }),
              t &&
                e("button", {
                  type: "button",
                  onClick: () => n(""),
                  "aria-label": "Очистить поиск",
                  children: e(pe, { size: 18 }),
                }),
            ],
          }),
          e("div", {
            className: "filter-chips",
            children: $e.map((d) =>
              e(
                "button",
                {
                  type: "button",
                  className: r === d.id ? "is-active" : "",
                  onClick: () => l(d.id),
                  children: d.label,
                },
                d.id,
              ),
            ),
          }),
          s("p", { className: "result-count", children: [a.length, " упражнений"] }),
          e("div", {
            className: "exercise-grid",
            children: a.map((d, m) =>
              s(
                "button",
                {
                  className: "exercise-card",
                  type: "button",
                  onClick: () => {
                    (c(d.id), window.scrollTo({ top: 0 }));
                  },
                  children: [
                    s("div", {
                      className: "exercise-card-photo",
                      children: [
                        e("img", { src: d.images[0], alt: d.name, loading: "lazy" }),
                        e("span", { children: String(m + 1).padStart(2, "0") }),
                      ],
                    }),
                    s("div", {
                      children: [
                        e("strong", { children: d.name }),
                        e("small", { children: d.primaryMuscles.map((u) => X[u]).join(" · ") }),
                        e("p", { children: d.equipment }),
                      ],
                    }),
                  ],
                },
                d.id,
              ),
            ),
          }),
          !a.length &&
            s("div", {
              className: "empty-state",
              children: [
                e(Ie, { size: 32 }),
                e("h2", { children: "Ничего не найдено" }),
                e("p", { children: "Попробуйте другое название или сбросьте фильтр." }),
                e("button", {
                  type: "button",
                  onClick: () => {
                    (n(""), l("all"));
                  },
                  children: "Показать все",
                }),
              ],
            }),
        ],
      });
}
function Es({ values: t, unit: n }) {
  if (!t.length)
    return s("div", {
      className: "chart-empty",
      children: [
        e(is, { size: 30 }),
        e("p", { children: "Запишите первый подход — здесь появится график." }),
      ],
    });
  const r = 640,
    l = 230,
    i = 34,
    c = Math.max(...t.map((u) => u.value), 1),
    o = Math.min(...t.map((u) => u.value), 0),
    a = Math.max(1, c - o),
    d = t.map((u, b) => ({
      ...u,
      x: t.length === 1 ? r / 2 : i + (b * (r - i * 2)) / (t.length - 1),
      y: l - i - ((u.value - o) / a) * (l - i * 2),
    })),
    m = d.map((u, b) => `${b ? "L" : "M"} ${u.x} ${u.y}`).join(" ");
  return e("div", {
    className: "line-chart",
    children: s("svg", {
      viewBox: `0 0 ${r} ${l}`,
      role: "img",
      "aria-label": `Динамика рабочего веса в ${n}`,
      children: [
        [0, 1, 2, 3].map((u) =>
          e(
            "line",
            {
              x1: i,
              x2: r - i,
              y1: i + (u * (l - i * 2)) / 3,
              y2: i + (u * (l - i * 2)) / 3,
              className: "chart-grid",
            },
            u,
          ),
        ),
        e("path", {
          d: `${m} L ${d.at(-1).x} ${l - i} L ${d[0].x} ${l - i} Z`,
          className: "chart-area",
        }),
        e("path", { d: m, className: "chart-line" }),
        d.map((u, b) =>
          s(
            "g",
            {
              children: [
                e("circle", { cx: u.x, cy: u.y, r: "6", className: "chart-dot" }),
                e("text", {
                  x: u.x,
                  y: u.y - 15,
                  textAnchor: "middle",
                  className: "chart-value",
                  children: Math.round(u.value * 10) / 10,
                }),
                s("text", {
                  x: u.x,
                  y: l - 8,
                  textAnchor: "middle",
                  className: "chart-label",
                  children: ["Н", u.week],
                }),
              ],
            },
            `${u.week}-${b}`,
          ),
        ),
      ],
    }),
  });
}
function Ts({ state: t }) {
  const [n, r] = y("benchPress"),
    [l, i] = y("weight"),
    [c, o] = y("current"),
    a = V(t.settings.programId),
    d = Is(t.logs, t.settings.currentWeek * a.daysPerWeek),
    m = Rs(t.logs, n),
    u = m.map((g) => ({
      week: g.week,
      value: Z(l === "weight" ? g.maxWeight : g.best1RM, t.settings.unit),
    })),
    b = ve(
      () => zs(t.logs, c === "current" ? t.settings.currentWeek : void 0),
      [t.logs, c, t.settings.currentWeek],
    ),
    v = Math.max(...b.map((g) => g.total), 1);
  return s("div", {
    className: "stats-view",
    children: [
      s("section", {
        className: "page-heading",
        children: [
          e("span", { className: "eyebrow", children: "ФАКТЫ ВМЕСТО ДОГАДОК" }),
          e("h1", { children: "Прогресс" }),
          e("p", { children: "Вес, объём и регулярность — в одном месте." }),
        ],
      }),
      s("div", {
        className: "stats-metrics",
        children: [
          s("div", {
            children: [
              e(be, { size: 20 }),
              e("strong", { children: d.completedWorkouts }),
              e("span", { children: "тренировок" }),
            ],
          }),
          s("div", {
            children: [
              e(fe, { size: 20 }),
              e("strong", { children: d.completedSets }),
              e("span", { children: "подходов" }),
            ],
          }),
          s("div", {
            children: [
              e(ns, { size: 20 }),
              s("strong", {
                children: [Math.round(Z(d.totalVolume, t.settings.unit) / 100) / 10, "т"],
              }),
              e("span", { children: "общий объём" }),
            ],
          }),
        ],
      }),
      s("div", {
        className: "adherence-row",
        children: [
          e("span", { children: "Выполнение плана" }),
          s("strong", { children: [Math.round(d.adherence * 100), "%"] }),
          e("div", {
            className: "linear-progress",
            children: e("span", { style: { width: `${d.adherence * 100}%` } }),
          }),
        ],
      }),
      s("section", {
        className: "stats-section",
        children: [
          s("div", {
            className: "section-heading",
            children: [
              s("div", {
                children: [
                  e("span", { className: "eyebrow", children: "СИЛА" }),
                  e("h2", { children: "По упражнению" }),
                ],
              }),
              e(Oe, { size: 23 }),
            ],
          }),
          s("label", {
            className: "select-field",
            children: [
              e("span", { children: "Упражнение" }),
              e("select", {
                value: n,
                onChange: (g) => r(g.target.value),
                children: re.map((g) => e("option", { value: g.id, children: g.name }, g.id)),
              }),
            ],
          }),
          s("div", {
            className: "metric-tabs",
            children: [
              e("button", {
                type: "button",
                className: l === "weight" ? "is-active" : "",
                onClick: () => i("weight"),
                children: "Макс. вес",
              }),
              e("button", {
                type: "button",
                className: l === "oneRM" ? "is-active" : "",
                onClick: () => i("oneRM"),
                children: "Расчётный 1ПМ",
              }),
            ],
          }),
          e(Es, { values: u, unit: t.settings.unit }),
          m.length > 0 &&
            s("div", {
              className: "exercise-stat-summary",
              children: [
                s("div", {
                  children: [
                    e("span", { children: "Лучший вес" }),
                    s("strong", {
                      children: [
                        Math.round(
                          Z(Math.max(...m.map((g) => g.maxWeight)), t.settings.unit) * 10,
                        ) / 10,
                        " ",
                        t.settings.unit,
                      ],
                    }),
                  ],
                }),
                s("div", {
                  children: [
                    e("span", { children: "Записей" }),
                    e("strong", { children: m.length }),
                  ],
                }),
                s("div", {
                  children: [
                    e("span", { children: "Повторы всего" }),
                    e("strong", { children: m.reduce((g, C) => g + C.reps, 0) }),
                  ],
                }),
              ],
            }),
        ],
      }),
      s("section", {
        className: "stats-section",
        children: [
          s("div", {
            className: "section-heading",
            children: [
              s("div", {
                children: [
                  e("span", { className: "eyebrow", children: "ОБЪЁМ" }),
                  e("h2", { children: "По группам мышц" }),
                ],
              }),
              s("div", {
                className: "mini-tabs",
                children: [
                  s("button", {
                    type: "button",
                    className: c === "current" ? "is-active" : "",
                    onClick: () => o("current"),
                    children: ["Неделя ", t.settings.currentWeek],
                  }),
                  e("button", {
                    type: "button",
                    className: c === "all" ? "is-active" : "",
                    onClick: () => o("all"),
                    children: "Всё",
                  }),
                ],
              }),
            ],
          }),
          e("p", {
            className: "stats-explain",
            children:
              "Прямые подходы + 50% косвенных. Так видно распределение нагрузки без ложной точности.",
          }),
          b.length
            ? e("div", {
                className: "muscle-bars",
                children: b.map((g) =>
                  s(
                    "div",
                    {
                      className: "muscle-bar",
                      children: [
                        s("div", {
                          children: [
                            e("strong", { children: g.name }),
                            s("span", {
                              children: [
                                g.direct,
                                " + ",
                                g.indirect,
                                " = ",
                                e("b", { children: g.total }),
                              ],
                            }),
                          ],
                        }),
                        e("div", {
                          className: "bar-track",
                          children: e("span", { style: { width: `${(g.total / v) * 100}%` } }),
                        }),
                      ],
                    },
                    g.muscle,
                  ),
                ),
              })
            : s("div", {
                className: "chart-empty",
                children: [
                  e(fe, { size: 30 }),
                  e("p", { children: "Завершите подходы, чтобы увидеть нагрузку по мышцам." }),
                ],
              }),
        ],
      }),
      s("div", {
        className: "stats-footnote",
        children: [
          "Оценка 1ПМ: вес × (1 + повторы / 30), не более 12 повторов. Это ориентир для сравнения, а не повод тестировать максимум. Упражнение: ",
          W[n].name,
          ".",
        ],
      }),
    ],
  });
}
const Bs = ["", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
function Pe(t, n, r) {
  const l = new Blob([t], { type: r }),
    i = URL.createObjectURL(l),
    c = document.createElement("a");
  ((c.href = i), (c.download = n), c.click(), window.setTimeout(() => URL.revokeObjectURL(i), 1e3));
}
function Os({ state: t, onSettings: n, onReset: r }) {
  const [l, i] = y(!1),
    c = V(t.settings.programId),
    o = (a) => {
      const d = t.settings.trainingDays,
        m = d.includes(a) ? d.filter((u) => u !== a) : [...d, a].sort();
      m.length === c.daysPerWeek && n({ trainingDays: m });
    };
  return s("div", {
    className: "settings-view",
    children: [
      s("section", {
        className: "page-heading",
        children: [
          e("span", { className: "eyebrow", children: "ПОД СЕБЯ" }),
          e("h1", { children: "Настройки" }),
          e("p", { children: "Программа и результаты хранятся только на этом устройстве." }),
        ],
      }),
      s("section", {
        className: "settings-group",
        children: [
          e("h2", { children: "Тренировочный ритм" }),
          e("div", {
            className: "settings-programs",
            children: le.map((a) =>
              s(
                "button",
                {
                  type: "button",
                  className: c.id === a.id ? "is-active" : "",
                  onClick: () => n({ programId: a.id }),
                  children: [
                    s("span", {
                      children: [
                        s("strong", { children: [a.daysPerWeek, " дня в неделю"] }),
                        e("small", {
                          children: a.id === "upperLower4" ? "Верх / низ" : "Full body",
                        }),
                      ],
                    }),
                    c.id === a.id && e(K, { size: 19 }),
                  ],
                },
                a.id,
              ),
            ),
          }),
          s("label", {
            className: "settings-label",
            children: [
              "Дни тренировок ",
              s("small", { children: ["выберите ровно ", c.daysPerWeek] }),
            ],
          }),
          e("div", {
            className: "weekday-picker",
            children: [1, 2, 3, 4, 5, 6, 7].map((a) =>
              e(
                "button",
                {
                  type: "button",
                  className: t.settings.trainingDays.includes(a) ? "is-active" : "",
                  onClick: () => o(a),
                  children: Bs[a],
                },
                a,
              ),
            ),
          }),
        ],
      }),
      s("section", {
        className: "settings-group",
        children: [
          e("h2", { children: "Во время тренировки" }),
          s("div", {
            className: "settings-row",
            children: [
              s("span", {
                children: [
                  e("strong", { children: "Единицы веса" }),
                  e("small", { children: "В сохранённых данных используются килограммы" }),
                ],
              }),
              s("div", {
                className: "mini-tabs",
                children: [
                  e("button", {
                    type: "button",
                    className: t.settings.unit === "kg" ? "is-active" : "",
                    onClick: () => n({ unit: "kg" }),
                    children: "кг",
                  }),
                  e("button", {
                    type: "button",
                    className: t.settings.unit === "lb" ? "is-active" : "",
                    onClick: () => n({ unit: "lb" }),
                    children: "lb",
                  }),
                ],
              }),
            ],
          }),
          s("div", {
            className: "settings-row",
            children: [
              s("span", {
                children: [
                  s("strong", { children: [e(We, { size: 18 }), " Сигнал таймера"] }),
                  e("small", { children: "Звук и вибрация зависят от разрешений iPhone" }),
                ],
              }),
              e("button", {
                className: `switch ${t.settings.sound ? "is-on" : ""}`,
                type: "button",
                role: "switch",
                "aria-checked": t.settings.sound,
                onClick: () => n({ sound: !t.settings.sound }),
                children: e("span", {}),
              }),
            ],
          }),
        ],
      }),
      s("section", {
        className: "settings-group",
        children: [
          e("h2", { children: "Мои данные" }),
          e("p", {
            className: "settings-description",
            children: "Экспорт содержит все сохранённые подходы, включая вес, повторы и RIR.",
          }),
          s("div", {
            className: "export-buttons",
            children: [
              s("button", {
                type: "button",
                onClick: () =>
                  Pe(JSON.stringify(t, null, 2), "gipertrofia-12.json", "application/json"),
                children: [
                  e(rs, { size: 21 }),
                  s("span", { children: ["Резервная копия", e("small", { children: "JSON" })] }),
                  e(Me, { size: 18 }),
                ],
              }),
              s("button", {
                type: "button",
                onClick: () => Pe(Ms(t.logs), "gipertrofia-12.csv", "text/csv;charset=utf-8"),
                children: [
                  e(ls, { size: 21 }),
                  s("span", { children: ["Таблица результатов", e("small", { children: "CSV" })] }),
                  e(Me, { size: 18 }),
                ],
              }),
            ],
          }),
        ],
      }),
      s("section", {
        className: "install-panel",
        children: [
          e(as, { size: 29 }),
          s("div", {
            children: [
              e("span", { className: "eyebrow", children: "УСТАНОВКА НА IPHONE" }),
              e("h2", { children: "Как обычное приложение" }),
              s("ol", {
                children: [
                  s("li", {
                    children: [
                      "Откройте опубликованную ссылку в ",
                      e("strong", { children: "Safari" }),
                      ".",
                    ],
                  }),
                  s("li", {
                    children: ["Нажмите ", e("strong", { children: "«Поделиться»" }), "."],
                  }),
                  s("li", {
                    children: ["Выберите ", e("strong", { children: "«На экран “Домой”»" }), "."],
                  }),
                ],
              }),
              e("p", {
                children:
                  "После первой загрузки программа, фотографии и ваши записи доступны офлайн.",
              }),
            ],
          }),
        ],
      }),
      s("section", {
        className: "settings-group about",
        children: [
          e("h2", { children: "О приложении" }),
          s("p", {
            children: [
              e(cs, { size: 17 }),
              " PWA работает без аккаунта. На iPhone нет Live Activity; после блокировки экрана система может ограничивать звук таймера, но время восстанавливается по часам при возвращении.",
            ],
          }),
          s("a", {
            href: "https://github.com/yuhonas/free-exercise-db",
            target: "_blank",
            rel: "noreferrer",
            children: ["Фотографии: Free Exercise DB · Unlicense ", e(os, { size: 15 })],
          }),
        ],
      }),
      e("section", {
        className: "danger-zone",
        children: l
          ? s("div", {
              children: [
                e("strong", { children: "Удалить все записанные подходы?" }),
                e("p", { children: "Настройки останутся. Отменить удаление нельзя." }),
                s("div", {
                  children: [
                    e("button", { type: "button", onClick: () => i(!1), children: "Отмена" }),
                    e("button", {
                      type: "button",
                      className: "danger",
                      onClick: () => {
                        (r(), i(!1));
                      },
                      children: "Да, удалить",
                    }),
                  ],
                }),
              ],
            })
          : s("button", {
              type: "button",
              onClick: () => i(!0),
              children: [e(ds, { size: 18 }), " Удалить результаты тренировок"],
            }),
      }),
    ],
  });
}
function Fs({
  day: t,
  week: n,
  log: r,
  logs: l,
  unit: i,
  onBack: c,
  onSaveSet: o,
  onComplete: a,
  onRest: d,
}) {
  const m = () => {
      const f = t.exercises.findIndex((k) => (r?.exercises[k.exerciseId]?.length ?? 0) < U(n, k));
      return f < 0 ? 0 : f;
    },
    [u, b] = y(m),
    [v, g] = y(null),
    [C, w] = y("0"),
    [$, z] = y("8"),
    [j, q] = y("8"),
    [p, x] = y("8"),
    [S, A] = y("30"),
    [ee, _] = y(String(Y(n).targetRIR)),
    [L, E] = y(""),
    [se, J] = y(""),
    N = t.exercises[u],
    R = W[N.exerciseId],
    I = ve(() => r?.exercises[R.id] ?? [], [r, R.id]),
    G = U(n, N),
    ce = Ne(l, R.id, r?.id),
    P = ce.at(-1),
    we = ks(l, R, N.target, r?.id),
    ke = ae(t, n, r);
  F(() => {
    const f = v != null ? I[v] : void 0,
      k = f?.weightKg ?? xs(l, R.id, n, r?.id),
      M = f ?? ce[Math.min(I.length, Math.max(0, ce.length - 1))];
    (w(String(T(Z(k, i)))),
      z(String(M?.reps || ne(N.target))),
      q(String(M?.leftReps ?? M?.reps ?? ne(N.target))),
      x(String(M?.rightReps ?? M?.reps ?? ne(N.target))),
      A(String(M?.durationSeconds ?? ne(N.target))),
      _(String(f?.rir ?? Y(n).targetRIR)),
      E(""));
  }, [u, v, R.id, N.target, i, n]);
  const oe = (f) => {
      (b(f), g(null), J(""), window.scrollTo({ top: 0, behavior: "smooth" }));
    },
    xe = (f) => w(String(Math.max(0, T((Number(C) || 0) + f)))),
    Ve = () => {
      const f = Number(C),
        k = Number(ee),
        M = Number($),
        de = Number(j),
        he = Number(p),
        Se = Number(S);
      if (!Number.isFinite(f) || f < 0 || !Number.isFinite(k) || k < 0 || k > 5) {
        E("Проверьте вес и RIR: допустимый запас — от 0 до 5 повторов.");
        return;
      }
      if (N.kind === "perSide" && (de <= 0 || he <= 0)) {
        E("Запишите повторы для левой и правой стороны.");
        return;
      }
      if (N.kind === "timed" && Se <= 0) {
        E("Укажите время подхода в секундах.");
        return;
      }
      if (!N.kind && M <= 0) {
        E("Укажите число выполненных повторов.");
        return;
      }
      const ue = {
          weightKg: T(vs(f, i)),
          reps: N.kind === "timed" ? 0 : N.kind === "perSide" ? Math.max(de, he) : M,
          rir: k,
          completedAt: new Date().toISOString(),
          ...(N.kind === "perSide" ? { leftReps: de, rightReps: he } : {}),
          ...(N.kind === "timed" ? { durationSeconds: Se } : {}),
        },
        Je = v == null ? [...I, ue] : I.map((te, He) => (He === v ? ue : te)),
        Ce = {
          id: r.id,
          programId: r.programId,
          dayId: t.id,
          startedAt: r.startedAt,
          completedAt: r.completedAt,
          exercises: { ...r.exercises, [R.id]: Je },
        };
      if ((o(R.id, ue, v ?? void 0), J(""), v != null)) {
        (g(null), J("Результат подхода обновлён"));
        return;
      }
      if (Cs(t, Ce, n, u)) {
        d(null);
        const te = Ss(t, Ce, n, u);
        (b(te),
          J(`Суперсет: сразу «${W[t.exercises[te].exerciseId].name}», без паузы`),
          window.scrollTo({ top: 0, behavior: "smooth" }));
      } else
        d({
          endAt: Date.now() + N.restSeconds * 1e3,
          duration: N.restSeconds,
          exerciseName: R.name,
        });
    };
  return s("div", {
    className: "workout-view",
    children: [
      s("header", {
        className: "workout-header",
        children: [
          e("button", {
            type: "button",
            onClick: c,
            "aria-label": "Выйти из тренировки",
            children: e(ge, { size: 22 }),
          }),
          s("div", {
            children: [
              s("span", { children: ["НЕДЕЛЯ ", n, " · ", t.title.toUpperCase()] }),
              s("strong", { children: [D(r), " / ", O(t, n), " подходов"] }),
            ],
          }),
          e("span", { className: "workout-live", children: "В ЗАЛЕ" }),
        ],
      }),
      e("div", {
        className: "workout-top-progress",
        children: e("span", { style: { width: `${(D(r) / O(t, n)) * 100}%` } }),
      }),
      e("div", {
        className: "exercise-rail",
        "aria-label": "Упражнения тренировки",
        children: t.exercises.map((f, k) => {
          const M = (r?.exercises[f.exerciseId]?.length ?? 0) >= U(n, f);
          return s(
            "button",
            {
              type: "button",
              className: `${u === k ? "is-active" : ""} ${M ? "is-done" : ""}`,
              onClick: () => oe(k),
              "aria-label": `${k + 1}. ${W[f.exerciseId].name}`,
              children: [
                e("span", { children: M ? e(K, { size: 17 }) : k + 1 }),
                e("small", { children: f.superset ? "SUPER" : f.priority ? "★" : "" }),
              ],
            },
            f.exerciseId,
          );
        }),
      }),
      s("main", {
        className: "workout-main",
        children: [
          s("div", {
            className: "workout-exercise-heading",
            children: [
              s("div", {
                children: [
                  s("span", {
                    className: "eyebrow",
                    children: [
                      "УПРАЖНЕНИЕ ",
                      u + 1,
                      " / ",
                      t.exercises.length,
                      " ",
                      N.priority &&
                        s(Re, {
                          children: [e(ie, { size: 13, fill: "currentColor" }), " ПРИОРИТЕТ"],
                        }),
                    ],
                  }),
                  e("h1", { children: R.name }),
                  e("p", { children: R.equipment }),
                ],
              }),
              s("span", {
                className: "target-badge",
                children: [
                  s("strong", { children: [G, " × ", N.target] }),
                  e("small", {
                    children:
                      N.kind === "timed"
                        ? "время"
                        : N.kind === "perSide"
                          ? "на сторону"
                          : "повторов",
                  }),
                ],
              }),
            ],
          }),
          N.superset &&
            s("div", {
              className: "superset-banner",
              children: [
                e(me, { size: 18 }),
                e("span", { children: "Суперсет" }),
                e("p", {
                  children: "Сохраните подход — приложение сразу откроет вторую половину пары.",
                }),
              ],
            }),
          se &&
            s("div", {
              className: "inline-notice",
              role: "status",
              children: [e(be, { size: 19 }), se],
            }),
          e(Ue, { exercise: R }),
          e("div", {
            className: "muscle-tags",
            children: R.primaryMuscles.map((f) => e("span", { children: X[f] }, f)),
          }),
          s("details", {
            className: "workout-technique",
            children: [
              s("summary", { children: ["Техника и исходное положение ", e(hs, { size: 18 })] }),
              e("p", { children: R.setup }),
              e("ol", { children: R.instructions.map((f) => e("li", { children: f }, f)) }),
              s("div", { children: [e(Be, { size: 18 }), R.safety] }),
            ],
          }),
          s("section", {
            className: "set-logger",
            children: [
              s("div", {
                className: "logger-heading",
                children: [
                  s("div", {
                    children: [
                      e("span", { className: "eyebrow", children: "РЕЗУЛЬТАТ" }),
                      e("h2", {
                        children:
                          v != null
                            ? `Изменить подход ${v + 1}`
                            : `Подход ${Math.min(I.length + 1, G)} из ${G}`,
                      }),
                    ],
                  }),
                  s("span", {
                    className: "rest-prescription",
                    children: [
                      e(Ee, { size: 16 }),
                      " отдых ",
                      Math.floor(N.restSeconds / 60),
                      ":",
                      String(N.restSeconds % 60).padStart(2, "0"),
                    ],
                  }),
                ],
              }),
              e("div", {
                className: "set-tabs",
                children: Array.from({ length: G }, (f, k) =>
                  s(
                    "button",
                    {
                      type: "button",
                      className: `${k < I.length ? "is-complete" : ""} ${(v ?? I.length) === k ? "is-active" : ""}`,
                      onClick: () => g(k < I.length ? k : null),
                      children: [
                        e("span", { children: k < I.length ? e(K, { size: 17 }) : k + 1 }),
                        e("small", {
                          children: k < I.length ? `${T(Z(I[k].weightKg, i))} ${i}` : "Подход",
                        }),
                      ],
                    },
                    k,
                  ),
                ),
              }),
              P &&
                s("div", {
                  className: "previous-result",
                  children: [
                    e("span", { children: "Прошлый раз" }),
                    s("strong", {
                      children: [
                        T(Z(P.weightKg, i)),
                        " ",
                        i,
                        " × ",
                        P.leftReps != null
                          ? `${P.leftReps}/${P.rightReps}`
                          : P.durationSeconds != null
                            ? `${P.durationSeconds} сек`
                            : P.reps,
                      ],
                    }),
                    s("small", { children: ["RIR ", P.rir] }),
                  ],
                }),
              we &&
                s("div", { className: "progression-note", children: [e(ie, { size: 17 }), we] }),
              s("div", {
                className: "input-grid",
                children: [
                  s("label", {
                    className: "metric-input",
                    children: [
                      s("span", { children: ["ВЕС, ", i.toUpperCase()] }),
                      s("div", {
                        children: [
                          e("button", {
                            type: "button",
                            onClick: () => xe(i === "kg" ? -2.5 : -5),
                            "aria-label": "Уменьшить вес",
                            children: e(De, { size: 18 }),
                          }),
                          e("input", {
                            type: "number",
                            inputMode: "decimal",
                            min: "0",
                            step: "0.5",
                            value: C,
                            onChange: (f) => w(f.target.value),
                            "aria-label": `Вес в ${i}`,
                          }),
                          e("button", {
                            type: "button",
                            onClick: () => xe(i === "kg" ? 2.5 : 5),
                            "aria-label": "Увеличить вес",
                            children: e(Le, { size: 18 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  N.kind === "perSide"
                    ? s(Re, {
                        children: [
                          s("label", {
                            className: "metric-input",
                            children: [
                              e("span", { children: "ЛЕВАЯ" }),
                              e("input", {
                                type: "number",
                                inputMode: "numeric",
                                min: "1",
                                value: j,
                                onChange: (f) => q(f.target.value),
                              }),
                            ],
                          }),
                          s("label", {
                            className: "metric-input",
                            children: [
                              e("span", { children: "ПРАВАЯ" }),
                              e("input", {
                                type: "number",
                                inputMode: "numeric",
                                min: "1",
                                value: p,
                                onChange: (f) => x(f.target.value),
                              }),
                            ],
                          }),
                        ],
                      })
                    : N.kind === "timed"
                      ? s("label", {
                          className: "metric-input",
                          children: [
                            e("span", { children: "СЕКУНДЫ" }),
                            e("input", {
                              type: "number",
                              inputMode: "numeric",
                              min: "1",
                              value: S,
                              onChange: (f) => A(f.target.value),
                            }),
                          ],
                        })
                      : s("label", {
                          className: "metric-input",
                          children: [
                            e("span", { children: "ПОВТОРЫ" }),
                            e("input", {
                              type: "number",
                              inputMode: "numeric",
                              min: "1",
                              value: $,
                              onChange: (f) => z(f.target.value),
                            }),
                          ],
                        }),
                  s("label", {
                    className: "metric-input rir-input",
                    children: [
                      s("span", { children: ["RIR ", e("small", { children: "запас" })] }),
                      e("input", {
                        type: "number",
                        inputMode: "decimal",
                        min: "0",
                        max: "5",
                        step: "0.5",
                        value: ee,
                        onChange: (f) => _(f.target.value),
                      }),
                    ],
                  }),
                ],
              }),
              L && e("p", { className: "form-error", role: "alert", children: L }),
              !ke &&
                s("button", {
                  className: "save-set-button",
                  type: "button",
                  onClick: Ve,
                  disabled: v == null && I.length >= G,
                  children: [
                    e(K, { size: 22 }),
                    s("span", {
                      children: [
                        v != null ? "Сохранить изменения" : "Записать подход",
                        e("small", {
                          children:
                            v != null
                              ? "Таймер не понадобится"
                              : N.superset
                                ? "Дальше — по логике суперсета"
                                : "Таймер отдыха начнётся автоматически",
                        }),
                      ],
                    }),
                    e(Q, { size: 22 }),
                  ],
                }),
            ],
          }),
          ke &&
            s("section", {
              className: "completion-panel",
              children: [
                e(be, { size: 37 }),
                e("span", { className: "eyebrow", children: "ВСЕ ПОДХОДЫ ЗАПИСАНЫ" }),
                e("h2", {
                  children: r?.completedAt ? "Тренировка завершена" : "Финиш. Осталось сохранить.",
                }),
                s("p", { children: [t.title, " · неделя ", n, " · ", D(r), " подходов"] }),
                r?.completedAt
                  ? s("button", {
                      type: "button",
                      onClick: c,
                      children: ["Вернуться на сегодня ", e(Q, { size: 19 })],
                    })
                  : s("button", {
                      type: "button",
                      onClick: a,
                      children: ["Завершить тренировку ", e(K, { size: 19 })],
                    }),
              ],
            }),
          s("div", {
            className: "adjacent-exercises",
            children: [
              s("button", {
                type: "button",
                disabled: u === 0,
                onClick: () => oe(u - 1),
                children: [e(ge, { size: 18 }), " Предыдущее"],
              }),
              s("button", {
                type: "button",
                disabled: u === t.exercises.length - 1,
                onClick: () => oe(u + 1),
                children: ["Следующее ", e(Q, { size: 18 })],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const js = [
  { id: "today", label: "Сегодня", icon: ps },
  { id: "plan", label: "Программа", icon: ms },
  { id: "library", label: "Упражнения", icon: gs },
  { id: "stats", label: "Прогресс", icon: Oe },
  { id: "settings", label: "Ещё", icon: bs },
];
function qs() {
  const [t, n] = $s(),
    [r, l] = y("today"),
    [i, c] = y(null),
    [o, a] = y(navigator.onLine),
    [d, m] = y(""),
    u = V(t.settings.programId),
    b = t.settings.currentWeek;
  (F(() => {
    const p = () => a(navigator.onLine);
    return (
      window.addEventListener("online", p),
      window.addEventListener("offline", p),
      () => {
        (window.removeEventListener("online", p), window.removeEventListener("offline", p));
      }
    );
  }, []),
    F(() => {
      if (!d) return;
      const p = window.setTimeout(() => m(""), 2600);
      return () => window.clearTimeout(p);
    }, [d]));
  const v = (p) => {
      n((x) => {
        const S = { ...x.settings, ...p };
        return (
          p.programId &&
            p.programId !== x.settings.programId &&
            (S.trainingDays = p.programId === "fullBody3" ? [1, 3, 5] : [1, 2, 4, 6]),
          { ...x, settings: S }
        );
      });
    },
    g = (p) => v({ currentWeek: Math.min(12, Math.max(1, p)) }),
    C = (p) => {
      const x = B(u.id, b, p);
      (n((S) =>
        S.logs.some((A) => A.id === x)
          ? S
          : {
              ...S,
              logs: [
                ...S.logs,
                {
                  id: x,
                  programId: u.id,
                  dayId: p,
                  week: b,
                  startedAt: new Date().toISOString(),
                  exercises: {},
                },
              ],
            },
      ),
        c(p),
        window.scrollTo({ top: 0 }));
    },
    w = (p, x, S, A) => {
      const ee = B(u.id, b, p);
      n((_) => ({
        ..._,
        logs: _.logs.map((L) => {
          if (L.id !== ee) return L;
          const E = L.exercises[x] ?? [],
            se = A == null ? [...E, S] : E.map((J, N) => (N === A ? S : J));
          return { ...L, exercises: { ...L.exercises, [x]: se } };
        }),
      }));
    },
    $ = (p) => {
      const x = B(u.id, b, p);
      (n((S) => ({
        ...S,
        rest: null,
        logs: S.logs.map((A) => (A.id === x ? { ...A, completedAt: new Date().toISOString() } : A)),
      })),
        c(null),
        l("today"),
        m("Тренировка сохранена. Отличная работа!"));
    },
    z = i ? fs(u.id, i) : null,
    j = z ? t.logs.find((p) => p.id === B(u.id, b, z.id)) : void 0,
    q = () => {
      (n({ ...H, settings: { ...t.settings } }),
        c(null),
        l("today"),
        m("Результаты тренировок удалены"));
    };
  return z
    ? s("div", {
        className: "workout-page",
        children: [
          e(Fs, {
            day: z,
            week: b,
            log: j,
            logs: t.logs,
            unit: t.settings.unit,
            onBack: () => c(null),
            onSaveSet: (p, x, S) => w(z.id, p, x, S),
            onComplete: () => $(z.id),
            onRest: (p) => n((x) => ({ ...x, rest: p })),
          }),
          t.rest &&
            e("div", {
              className: "timer-dock timer-dock--workout",
              children: e(Ae, {
                rest: t.rest,
                sound: t.settings.sound,
                onChange: (p) => n((x) => ({ ...x, rest: p })),
                onClose: () => n((p) => ({ ...p, rest: null })),
              }),
            }),
        ],
      })
    : s("div", {
        className: "app-shell",
        children: [
          s("header", {
            className: "app-header",
            children: [
              s("button", {
                className: "brand",
                type: "button",
                onClick: () => l("today"),
                "aria-label": "Гипертрофия 12, на главную",
                children: [
                  s("span", { children: ["H", e("span", { children: "12" })] }),
                  s("span", {
                    className: "brand-copy",
                    children: ["ГИПЕРТРОФИЯ", e("small", { children: "12 НЕДЕЛЬ" })],
                  }),
                ],
              }),
              s("div", {
                className: "header-actions",
                children: [
                  !o &&
                    s("span", {
                      className: "offline-badge",
                      children: [e(us, { size: 15 }), " Офлайн"],
                    }),
                  e("span", { className: "level-badge", children: "40+ · PRO" }),
                ],
              }),
            ],
          }),
          s("main", {
            className: "main-content",
            children: [
              r === "today" &&
                e(Ws, { state: t, onWeekChange: g, onStart: C, onOpenPlan: () => l("plan") }),
              r === "plan" &&
                e(Ds, {
                  state: t,
                  onWeekChange: g,
                  onStart: C,
                  onProgramChange: (p) => v({ programId: p }),
                }),
              r === "library" && e(Ls, {}),
              r === "stats" && e(Ts, { state: t }),
              r === "settings" && e(Os, { state: t, onSettings: v, onReset: q }),
            ],
          }),
          r !== "today" &&
            r !== "plan" &&
            e("div", {
              className: "floating-week",
              children: e(ye, { week: b, onChange: g, compact: !0 }),
            }),
          t.rest &&
            e("div", {
              className: "timer-dock",
              children: e(Ae, {
                rest: t.rest,
                sound: t.settings.sound,
                onChange: (p) => n((x) => ({ ...x, rest: p })),
                onClose: () => n((p) => ({ ...p, rest: null })),
              }),
            }),
          e("nav", {
            className: "bottom-nav",
            "aria-label": "Основная навигация",
            children: js.map((p) =>
              s(
                "button",
                {
                  type: "button",
                  className: r === p.id ? "is-active" : "",
                  onClick: () => {
                    (l(p.id), window.scrollTo({ top: 0 }));
                  },
                  children: [
                    e(p.icon, { size: 21, strokeWidth: r === p.id ? 2.5 : 1.8 }),
                    e("span", { children: p.label }),
                  ],
                },
                p.id,
              ),
            ),
          }),
          d && s("div", { className: "toast", role: "status", children: [e(fe, { size: 18 }), d] }),
        ],
      });
}
Ge(document.getElementById("root")).render(e(_e, { children: e(qs, {}) }));
"serviceWorker" in navigator &&
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .catch((t) => console.warn("Service worker registration failed", t));
  });
