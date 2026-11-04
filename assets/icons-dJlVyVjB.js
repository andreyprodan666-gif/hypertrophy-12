import { forwardRef as k, createElement as n } from "react";
const _ = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  m = (t) =>
    t.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, o, c) => (c ? c.toUpperCase() : o.toLowerCase())),
  y = (t) => {
    const e = m(t);
    return e.charAt(0).toUpperCase() + e.slice(1);
  },
  r = (...t) =>
    t
      .filter((e, o, c) => !!e && e.trim() !== "" && c.indexOf(e) === o)
      .join(" ")
      .trim(),
  v = (t) => {
    for (const e in t) if (e.startsWith("aria-") || e === "role" || e === "title") return !0;
  };
var f = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const u = k(
  (
    {
      color: t = "currentColor",
      size: e = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: c,
      className: s = "",
      children: h,
      iconNode: p,
      ...d
    },
    i,
  ) =>
    n(
      "svg",
      {
        ref: i,
        ...f,
        width: e,
        height: e,
        stroke: t,
        strokeWidth: c ? (Number(o) * 24) / Number(e) : o,
        className: r("lucide", s),
        ...(!h && !v(d) && { "aria-hidden": "true" }),
        ...d,
      },
      [...p.map(([l, M]) => n(l, M)), ...(Array.isArray(h) ? h : [h])],
    ),
);
const a = (t, e) => {
  const o = k(({ className: c, ...s }, h) =>
    n(u, { ref: h, iconNode: e, className: r(`lucide-${_(y(t))}`, `lucide-${t}`, c), ...s }),
  );
  return ((o.displayName = y(t)), o);
};
const w = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  h1 = a("activity", w);
const $ = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  s1 = a("arrow-left", $);
const g = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  n1 = a("arrow-right", g);
const N = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi",
      },
    ],
  ],
  d1 = a("bell", N);
const x = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  y1 = a("book-open", x);
const b = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
    ["path", { d: "M3 10h18", key: "8toen8" }],
    ["path", { d: "M8 14h.01", key: "6423bh" }],
    ["path", { d: "M12 14h.01", key: "1etili" }],
    ["path", { d: "M16 14h.01", key: "1gbofw" }],
    ["path", { d: "M8 18h.01", key: "lrp35t" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
    ["path", { d: "M16 18h.01", key: "kzsmim" }],
  ],
  k1 = a("calendar-days", b);
const C = [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }],
  ],
  r1 = a("chart-column", C);
const z = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  p1 = a("check", z);
const A = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  i1 = a("chevron-left", A);
const j = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  l1 = a("chevron-right", j);
const q = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  M1 = a("circle-check", q);
const H = [
    ["path", { d: "M12 6v6h4", key: "135r8i" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  _1 = a("clock-3", H);
const L = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  m1 = a("download", L);
const V = [
    [
      "path",
      {
        d: "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",
        key: "9m4mmf",
      },
    ],
    ["path", { d: "m2.5 21.5 1.4-1.4", key: "17g3f0" }],
    ["path", { d: "m20.1 3.9 1.4-1.4", key: "1qn309" }],
    [
      "path",
      {
        d: "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",
        key: "1t2c92",
      },
    ],
    ["path", { d: "m9.6 14.4 4.8-4.8", key: "6umqxw" }],
  ],
  v1 = a("dumbbell", V);
const S = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
  ],
  f1 = a("external-link", S);
const B = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    [
      "path",
      { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" },
    ],
    [
      "path",
      { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" },
    ],
  ],
  u1 = a("file-braces", B);
const P = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M8 13h2", key: "yr2amv" }],
    ["path", { d: "M14 13h2", key: "un5t4a" }],
    ["path", { d: "M8 17h2", key: "2yhykz" }],
    ["path", { d: "M14 17h2", key: "10kma7" }],
  ],
  w1 = a("file-spreadsheet", P);
const R = [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih",
      },
    ],
  ],
  $1 = a("flame", R);
const W = [
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ],
  g1 = a("house", W);
const D = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  N1 = a("info", D);
const F = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  x1 = a("minus", F);
const I = [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }],
  ],
  b1 = a("pause", I);
const Z = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  C1 = a("play", Z);
const E = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  z1 = a("plus", E);
const O = [
    ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
    ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
    ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
    ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }],
  ],
  A1 = a("repeat-2", O);
const T = [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
  j1 = a("rotate-ccw", T);
const U = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  q1 = a("search", U);
const K = [
    ["path", { d: "M14 17H5", key: "gfn3mx" }],
    ["path", { d: "M19 7h-9", key: "6i9tg" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
    ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
  ],
  H1 = a("settings-2", K);
const X = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  L1 = a("shield-check", X);
const G = [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  V1 = a("smartphone", G);
const J = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  S1 = a("star", J);
const Q = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  B1 = a("trash-2", Q);
const Y = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  P1 = a("trending-up", Y);
const a1 = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
    ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
    ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  R1 = a("wifi-off", a1);
const e1 = [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }],
  ],
  W1 = a("wind", e1);
const t1 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  D1 = a("x", t1);
const o1 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  F1 = a("zap", o1);
export {
  n1 as A,
  d1 as B,
  _1 as C,
  v1 as D,
  f1 as E,
  $1 as F,
  g1 as H,
  N1 as I,
  x1 as M,
  z1 as P,
  j1 as R,
  S1 as S,
  P1 as T,
  W1 as W,
  D1 as X,
  F1 as Z,
  C1 as a,
  l1 as b,
  p1 as c,
  A1 as d,
  b1 as e,
  s1 as f,
  L1 as g,
  q1 as h,
  M1 as i,
  h1 as j,
  r1 as k,
  u1 as l,
  m1 as m,
  w1 as n,
  V1 as o,
  B1 as p,
  i1 as q,
  R1 as r,
  k1 as s,
  y1 as t,
  H1 as u,
};
