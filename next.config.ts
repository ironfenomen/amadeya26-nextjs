import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  trailingSlash: true,
  // Редиректы 1:1 с текущим продом amadeya26.ru (проверено 22.08: prod отдаёт 301)
  async redirects() {
    return [
      { source: "/lechenie-zavisimostei-v-stavropole-2/", destination: "/lechenie-zavisimostei-v-stavropole/", permanent: true },
      { source: "/psihoterapevticheskaya-pomoshh-v-stavropole/", destination: "/psihoterapiya/", permanent: true },
    ];
  },
};
export default nextConfig;
