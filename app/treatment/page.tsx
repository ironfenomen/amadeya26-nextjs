import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `<main class="page-content">
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">Лечение зависимостей</h1>
            <p class="page-description">Профессиональная помощь в лечении различных видов зависимостей</p>
        </div>

        <div class="key-services__grid">
            <a href="/narcologist-consultation/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock10.jpg" alt="Консультация нарколога">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Консультация нарколога</h4>
                    </div>
                    <p class="key-services__description">Первичная консультация нарколога, диагностика, составление плана лечения</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/online-narcologist/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock11.jpg" alt="Онлайн-консультация нарколога">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Онлайн-консультация нарколога</h4>
                    </div>
                    <p class="key-services__description">Консультация нарколога в режиме онлайн, дистанционная помощь</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/narcologist-home-visit/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock12.jpg" alt="Выезд врача-нарколога на дом">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Выезд врача-нарколога на дом</h4>
                    </div>
                    <p class="key-services__description">Экстренная помощь нарколога на дому, выезд специалиста</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/detoxification/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock13.jpg" alt="Дезинтоксикация">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Дезинтоксикация</h4>
                    </div>
                    <p class="key-services__description">Очищение организма от токсинов, восстановление после интоксикации</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/stavropol-treatment/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock14.jpg" alt="Лечение зависимостей в Ставрополе">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Лечение зависимостей в Ставрополе</h4>
                    </div>
                    <p class="key-services__description">Комплексное лечение различных зависимостей в нашем центре</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/addictologist/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock15.jpg" alt="Приём психолога-аддиктолога">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Приём психолога-аддиктолога</h4>
                    </div>
                    <p class="key-services__description">Консультации психолога-аддиктолога в Ставрополе</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/addiction-psychotherapy/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock16.jpg" alt="Психотерапия при зависимости">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Психотерапия при зависимости</h4>
                    </div>
                    <p class="key-services__description">Специализированная психотерапия для лечения зависимостей</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/stavropol-supervision/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock17.jpg" alt="Супервизия при зависимости">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Супервизия при зависимости</h4>
                    </div>
                    <p class="key-services__description">Супервизия специалистов по лечению зависимостей в Ставрополе</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Лечение зависимостей - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/treatment/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Лечение зависимостей - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/treatment/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function TreatmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/treatment/","url":"https://amadeya26.ru/treatment/","name":"Лечение зависимостей - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T19:08:52+00:00","dateModified":"2025-10-24T19:06:25+00:00","breadcrumb":{"@id":"https://amadeya26.ru/treatment/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/treatment/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/treatment/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Лечение зависимостей"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041b\\u0435\\u0447\\u0435\\u043d\\u0438\\u0435 \\u0437\\u0430\\u0432\\u0438\\u0441\\u0438\\u043c\\u043e\\u0441\\u0442\\u0435\\u0439","item":"https:\\/\\/amadeya26.ru\\/treatment\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
