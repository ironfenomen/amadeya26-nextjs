// CSS-сплит a26 (паттерн детокса 25.08): критический слой инлайнится в <head>,
// полный бандл грузится отложенно (media="print" → flip в 'all' на window load).
// Причина: PSI mobile 25.08 — полный инлайн 117KB раздувал HTML (395KB raw / 80KB gzip)
// и тратил ~1с парсинга до FCP; детокс на critical+defer держит 90.
// Запуск после правки любого исходного CSS:  npm run css:split
// layout.tsx: инлайн = a26-critical.min.css; defer = a26-bundle.min.css?v=… (бампить!).
import { readFileSync, writeFileSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const pub = join(process.cwd(), "public");
const r = (f) => readFileSync(join(pub, f), "utf8");
const banner = (n) => `\n/* ==== ${n} ==== */\n`;

/* ---------------- ПОЛНЫЙ БАНДЛ (отложенный, 1 запрос) ---------------- */
const BUNDLE_SRC = [
  "redesign/tokens.css",
  "fonts/fonts.css",
  "redesign/v36.css",
  "redesign/a26.css",
  "vendor/swiper/swiper-bundle.min.css",
];
const bundle = BUNDLE_SRC.map((f) => banner(f) + r(f)).join("\n");

/* ---------------- КРИТИЧЕСКИЙ CSS (инлайн, первый экран) ---------------- */
function sliceBetween(css, fromMark, toMark, name) {
  const i1 = css.indexOf(fromMark);
  const i2 = toMark ? css.indexOf(toMark) : css.length;
  if (i1 < 0 || (toMark && (i2 < 0 || i2 < i1)))
    throw new Error(`critical: маркеры не найдены (${name})`);
  return css.slice(i1, i2);
}

const v36 = r("redesign/v36.css");
const a26 = r("redesign/a26.css");

/* анти-overflow щит + каркас: до догрузки бандла below-fold блоки не рвут ширину */
const SKELETON = `
HTML, BODY { max-width:100%; overflow-x:hidden; }
img { max-width:100%; }
[hidden] { display:none; }
/* swiper-скелет: hero живёт в swiper — без него слайд ломает первый экран */
.swiper{ margin:0 auto; position:relative; overflow:hidden; list-style:none; padding:0; z-index:1 }
.swiper-wrapper{ position:relative; width:100%; height:100%; z-index:1; display:flex; box-sizing:content-box }
.swiper-slide{ position:relative; flex-shrink:0; width:100%; height:100% }
`;

const critical = [
  banner("tokens.css") + r("redesign/tokens.css"),
  banner("fonts.css") + r("fonts/fonts.css"),
  banner("skeleton-shield") + SKELETON,
  banner("a26: база (body/wrapper)") +
    sliceBetween(a26, "/* ---------- база ---------- */", "/* типографика контента", "a26 база"),
  banner("a26: логотипы + cookie-баннер") +
    sliceBetween(a26, "/* ---------- логотипы в Core-шелле ---------- */", "ЧАСТЬ 2 — page family", "a26 лого/cookie"),
  banner("v36: база..hero") +
    sliceBetween(v36, "/* ---------- база ---------- */", "/* ---------- офферы", "v36 база..hero"),
  banner("v36: hero-адаптив") +
    sliceBetween(v36, "/* ---------- адаптив ---------- */", "/* ---------- полироль", "v36 адаптив"),
  banner("v36: тёмная главная — первый экран") +
    sliceBetween(v36, "body:has(.v36-dark) .v36-world {", "/* секции главной прозрачны", "v36 dark first"),
  banner("v36: мобильная шапка + hero mobile") +
    sliceBetween(v36, "/* ---------- мобильная шапка", "/* ============ итерация 6", "v36 mobile header"),
].join("\n");

/* ---------------- запись + минификация ---------------- */
const tmpB = join(pub, "redesign/.a26-bundle.raw.css");
const tmpC = join(pub, "redesign/.a26-critical.raw.css");
writeFileSync(tmpB, bundle);
writeFileSync(tmpC, critical);
execSync(`npx -y csso-cli -i "${tmpB}" -o "${join(pub, "redesign/a26-bundle.min.css")}"`, { stdio: "inherit" });
execSync(`npx -y csso-cli -i "${tmpC}" -o "${join(pub, "redesign/a26-critical.min.css")}"`, { stdio: "inherit" });
rmSync(tmpB, { force: true });
rmSync(tmpC, { force: true });
console.log(
  "OK → a26-bundle.min.css", statSync(join(pub, "redesign/a26-bundle.min.css")).size, "байт |",
  "a26-critical.min.css", statSync(join(pub, "redesign/a26-critical.min.css")).size, "байт"
);
