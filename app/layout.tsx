import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { readFileSync } from "fs";
import path from "path";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { V36_SITE } from "@/lib/site.config";

/* world.js — AMADEYA WEB CORE (canonical: amadeya-web-core/js/world.js).
   Sync-копия: public/redesign/core/world.js (не редактировать; check-core — drift-гейт).
   Site-данные: V36_SITE (lib/site.config.ts) → window.__V36_SITE__ до исполнения. */
const WORLD_JS = readFileSync(
  path.join(process.cwd(), "public/redesign/core/world.js"),
  "utf8"
);

/* CSS-ИНЛАЙН (паттерн детокса 21.08): PSI mobile 24.08 — 5 блокирующих
   стилей (41.6KiB, 3340ms на медленном 4G, экономия 2350ms) → один <style>.
   Источник: public/redesign/a26-inline.min.css (tokens→fonts→v36→a26→swiper,
   scripts/build-css-inline.mjs). После правки любого CSS: npm run css:inline.
   Не редактировать руками. */
const INLINE_CSS = readFileSync(
  path.join(process.cwd(), "public/redesign/a26-inline.min.css"),
  "utf8"
);

export const metadata: Metadata = {
  title: "Медицинский центр Амадея в Ставрополе",
  metadataBase: new URL("https://amadeya26.ru"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* Тема JS (site-owned): модалка заявки → Telegram (/api/lead), MedFlex, карусели,
   cookie-consent. jQuery и WP cookie-notice плагин удалены (presentation layer):
   бургер — ov-lite.js (vanilla), меню — world.js (Core, v2.1). */
const THEME_JS = [
  "/redesign/ov-lite.js",
  "/vendor/swiper/swiper-bundle.min.js?ver=11.2.10",
  "/wp-content/themes/amadeya-redesign/assets/js/carousel.js?ver=1.0.0",
  "/wp-content/themes/amadeya-redesign/assets/js/carousel-booking.js?ver=1.0.0",
  "/wp-content/themes/amadeya-redesign/assets/js/cookie-consent.js?ver=1.0.1",
  "/wp-content/themes/amadeya-redesign/assets/js/modal-form.js?ver=1.0.1",
  "/wp-content/themes/amadeya-redesign/assets/js/medflex-integration.js?ver=1.0.1",
  "/wp-content/themes/amadeya-redesign/assets/js/specialist-list.js?ver=1.0.0",
];

/* Swiper-иниты главной в Core-грамматике (#people-swiper/#reviews-swiper/#service-banner-swiper).
   Порт инитов layout детокса (21.08): retry пока не поднимется window.Swiper. */
const INIT_HOME = `(function(){var tries=0;function init(){try{if(!window.Swiper){if(++tries<40)return setTimeout(init,150);}var pe=document.getElementById('people-swiper');if(pe&&!pe.classList.contains('swiper-initialized'))new Swiper('#people-swiper',{slidesPerView:'auto',loop:true,navigation:{nextEl:'.vrachi-button-next',prevEl:'.vrachi-button-prev'},breakpoints:{1280:{slidesPerView:4}}});var re=document.getElementById('reviews-swiper');if(re&&!re.classList.contains('swiper-initialized'))new Swiper('#reviews-swiper',{slidesPerView:'auto',loop:false,navigation:{prevEl:'.reviews-button-prev',nextEl:'.reviews-button-next'},breakpoints:{1280:{spaceBetween:-30,slidesPerView:2}}});var sb=document.getElementById('service-banner-swiper');if(sb&&!sb.classList.contains('swiper-initialized'))new Swiper('#service-banner-swiper',{slidesPerView:1,loop:false,navigation:{prevEl:'.service-banner-prev',nextEl:'.service-banner-next'}});var be=document.querySelector('.booking-experts-swiper');if(be&&!be.classList.contains('swiper-initialized'))new Swiper('.booking-experts-swiper',{slidesPerView:1,loop:true,spaceBetween:20,pagination:{el:'.booking-experts-pagination',clickable:true},navigation:{prevEl:'.booking-experts-prev',nextEl:'.booking-experts-next'},breakpoints:{768:{slidesPerView:2},1280:{slidesPerView:3}}});}catch(e){}}if(document.readyState!=='loading')init();else document.addEventListener('DOMContentLoaded',init);})();`;

/* Я.Метрика 91506218 — точный код счётчика; tag.js отложен (первый жест или idle 4с),
   события до загрузки копятся в очереди ym.a (паттерн детокса 21.08). */
const METRIKA_BLOCK = `<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        m.__ymLoad=function(){
            if(m.__ymLoading)return; m.__ymLoading=1;
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        };
        ['pointerdown','keydown','touchstart','scroll'].forEach(function(ev){
            window.addEventListener(ev, m.__ymLoad, {once:true, passive:true});
        });
        if('requestIdleCallback' in window){ requestIdleCallback(m.__ymLoad, {timeout:4000}); }
        else { setTimeout(m.__ymLoad, 4000); }
    })(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
    ym(91506218,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/91506218" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru-RU">
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://maps.yastatic.net" crossOrigin="" />
        <link rel="preconnect" href="https://booking.medflex.ru" />
        <link rel="dns-prefetch" href="https://yandex.ru" />
        {/* self-host шрифтов Web Core: Playfair Display + Golos Text (/fonts, sync из amadeya-web-core) */}
        <link rel="preload" href="/fonts/playfair-display-500-cyrillic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/golos-text-400-cyrillic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* CSS-порядок = каскад: токены Core → шрифты Core → Core (v36) → site-слой a26 → swiper.
             ИНЛАЙН одним <style> (render-blocking устранён, PSI 24.08) — см. INLINE_CSS выше */}
        <style dangerouslySetInnerHTML={{ __html: INLINE_CSS }} />
      </head>
      <body>
        <noscript><div><img src="https://mc.yandex.ru/watch/91506218" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>

        <div className="__wrapper">
          <div className="__stretch">
            <main>
              <Header />
              {/* все страницы — тёмный регистр AM-WEB-DARK-01; .page — для мир-паттерна world.js */}
              <div className="v36-dark">
                <div className="page" style={{ display: "contents" }}>
                  {children}
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </div>

        {/* redesign/v36: «мир»-фон — знак, свечение, зерно (все страницы) */}
        <div className="v36-world" aria-hidden="true">
          <div className="v36-world-glow" id="v36Glow" />
          <div className="v36-world-mark" id="v36Mark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/redesign/mark.webp" width="488" height="485" alt="" />
          </div>
        </div>
        <div className="v36-grain" aria-hidden="true" />

        {/* MedFlex онлайн-запись */}
        <div id="medflexRoundWidgetData" data-src="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&isRoundWidget=false" />

        {/* THEME_JS — обычные defer-скрипты (не next/script): next/script strategy="afterInteractive"
             заставлял React 19 эмитить <link rel="preload" as="script"> на все 8 файлов (~56KB High),
             они отбирали полосу у hero-фото на slow-4G (PSI 24.08: LCP-фаза render). defer сохраняет
             порядок выполнения и не порождает preload. */}
        {THEME_JS.map((src) => (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script key={src} src={src} defer />
        ))}
        <Script src="https://booking.medflex.ru/components/round/round_widget_button.js" strategy="lazyOnload" />

        <Script id="v36-site-config" strategy="afterInteractive">
          {`window.__V36_SITE__=${JSON.stringify(V36_SITE)};`}
        </Script>
        <Script id="v36-world" strategy="afterInteractive">
          {WORLD_JS}
        </Script>
        {/* Ленивая загрузка iframe-карт (data-src → src при приближении к вьюпорту) */}
        <Script id="iframe-lazy" strategy="afterInteractive">
          {`(function(){var ifr=document.querySelectorAll('iframe[data-src]');if(!ifr.length)return;function go(el){if(el.dataset.src){el.src=el.dataset.src;el.removeAttribute('data-src');}}if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){go(e.target);io.unobserve(e.target);}});},{rootMargin:'300px'});ifr.forEach(function(e){io.observe(e);});}else{ifr.forEach(go);}})();`}
        </Script>
        {/* Swiper-иниты главной в грамматике Core (паттерн детокса): баннер, врачи, отзывы.
            Все иниты охранены наличием элемента — на остальных страницах no-op. */}
        <Script id="v36-home-init" strategy="afterInteractive">
          {INIT_HOME}
        </Script>
        <script type="speculationrules" dangerouslySetInnerHTML={{ __html: `{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"\\\\/*"},{"not":{"href_matches":["\\\\/wp-*.php","\\\\/wp-admin\\\\/*","\\\\/wp-content\\\\/*","\\\\/*\\\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\\"nofollow\\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}` }} />
        <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: METRIKA_BLOCK }} />
      </body>
    </html>
  );
}
