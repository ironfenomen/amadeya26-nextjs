import type { NextConfig } from "next";

// SEO-дедуп: англо-слаги и рус-рус дубли -> 301 на канонический русский keyword-URL
// с накопленным SEO-капиталом. Контент перенесён на канонические страницы.
// statusCode:301 (не permanent:true=308) — Яндекс документирует именно 301.
const dedupeRedirects = [
  { from: "/gynecology", to: "/priem-ginekologa-v-stavropole/" },
  { from: "/therapy", to: "/priem-vracha-terapevta-v-stavropole/" },
  { from: "/psychiatry", to: "/psihiatricheskaya-pomoshh-v-stavropole/" },
  { from: "/ultrasound", to: "/ultrazvuovaya-diagnostika-v-stavrop/" },
  { from: "/dermatology", to: "/priem-dermatologa-v-stavropole-klini/" },
  { from: "/gymnotherapy", to: "/girudoterapiya/" },
  { from: "/psychologist", to: "/psihologicheskaya-pomoshh-v-stavropole/" },
  { from: "/endocrinology", to: "/priem-vracha-endokrinologa-v-stavropole/" },
  { from: "/psychotherapy", to: "/psihoterapiya/" },
  { from: "/addictologist", to: "/priem-psihologa-addiktologa-v-stavro/" },
  { from: "/detoxification", to: "/detoksikacziya/" },
  { from: "/online-narcologist", to: "/onlain-konsultacziya-narkologa/" },
  { from: "/stavropol-treatment", to: "/lechenie-zavisimostei-v-stavropole/" },
  { from: "/stavropol-supervision", to: "/superviziya-pri-zavisimosti-v-stavrop/" },
  { from: "/narcologist-home-visit", to: "/vyezd-vracha-narkologa-na-dom/" },
  { from: "/addiction-psychotherapy", to: "/psihoterapiya-pri-zavisimosti/" },
  { from: "/narcologist-consultation", to: "/konsultacziya-vracha-narkologa-v-stavr/" },
  { from: "/treatment", to: "/lechenie-zavisimostei-v-stavropole/" },
  { from: "/services", to: "/uslugi-kliniki-amadeya-v-stavropole/" },
  { from: "/contacts", to: "/kontakty/" },
  { from: "/experts", to: "/speczialisty/" },
  { from: "/booking", to: "/online-zapis-k-specialistam/" },
  { from: "/privacy-policy", to: "/privacy/" },
  { from: "/lechenie-zavisimostei-v-stavropole-2", to: "/lechenie-zavisimostei-v-stavropole/" },
  { from: "/psihoterapevticheskaya-pomoshh-v-stavropole", to: "/psihoterapiya/" }
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
