// CSS-инлайн бандл a26 (паттерн детокса 21.08: PSI render-blocking 2350ms → 0).
// Порядок = каскад <head>: tokens → fonts → v36 (Core) → a26 (site) → swiper.
// Запуск после правки любого исходного CSS:  npm run css:inline
// layout.tsx инлайнит результат через readFileSync — 5 блокирующих запросов исчезают.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const pub = join(process.cwd(), "public");
const SRC = [
  "redesign/tokens.css",
  "fonts/fonts.css",
  "redesign/v36.css",
  "redesign/a26.css",
  "vendor/swiper/swiper-bundle.min.css",
];

const banner = (n) => `\n/* ==== ${n} ==== */\n`;
const raw = SRC.map((f) => banner(f) + readFileSync(join(pub, f), "utf8")).join("\n");
const tmp = join(pub, "redesign/.a26-inline.raw.css");
writeFileSync(tmp, raw);
execSync(`npx -y csso-cli -i "${tmp}" -o "${join(pub, "redesign/a26-inline.min.css")}"`, { stdio: "inherit" });
writeFileSync(tmp, ""); // очистить след
import("node:fs").then(({ rmSync, statSync }) => {
  rmSync(tmp, { force: true });
  console.log("OK → public/redesign/a26-inline.min.css", statSync(join(pub, "redesign/a26-inline.min.css")).size, "байт");
});
