import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  trailingSlash: true,
  // Редиректы 1:1 с текущим продом amadeya26.ru (проверено 22.08: prod отдаёт 301)
  async redirects() {
    return [
      { source: "/lechenie-zavisimostei-v-stavropole-2/", destination: "/lechenie-zavisimostei-v-stavropole/", permanent: true },
      { source: "/psihoterapevticheskaya-pomoshh-v-stavropole/", destination: "/psihoterapiya/", permanent: true },
      // Осознанное улучшение против прода: ссылка из карточки Крон (и прода) ведёт на slug с «-na»,
      // который 404 и на проде; реальная страница живёт на slug без «a» (prod 200). Закрываем 308.
      { source: "/speczialisty/kron-elena-ivanovna/", destination: "/speczialisty/kron-elena-ivanovn/", permanent: true },
    ];
  },
};
export default nextConfig;
