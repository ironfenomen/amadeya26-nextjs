import type { NextConfig } from "next";

// Дедупликация: англо-слаги (без истории/ключа) → 301 на русские keyword-URL
// с накопленным SEO-капиталом. Контент перенесён на русские страницы.
const dedupeRedirects = [
  { from: "/gynecology", to: "/priem-ginekologa-v-stavropole" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return dedupeRedirects.map((r) => ({
      source: r.from,
      destination: r.to,
      permanent: true,
    }));
  },
};

export default nextConfig;
