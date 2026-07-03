import type { NextConfig } from "next";

// Дедупликация: англо-слаги (без истории/ключа) → 301 на русские keyword-URL
// с накопленным SEO-капиталом. Контент перенесён на русские страницы.
// statusCode:301 (а не permanent:true=308) — Яндекс документирует именно 301.
// Назначение со слешом (trailingSlash:true) — без лишнего хопа.
const dedupeRedirects = [
  { from: "/gynecology", to: "/priem-ginekologa-v-stavropole/" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return dedupeRedirects.map((r) => ({
      source: r.from,
      destination: r.to,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
