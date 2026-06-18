import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `<main class="page-content">
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">Медицинские услуги</h1>
            <p class="page-description">Полный спектр медицинских услуг в нашем центре</p>
        </div>

        <div class="key-services__grid">
            <a href="/psychiatry/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock1.jpg" alt="Психиатрия">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Психиатрия</h4>
                    </div>
                    <p class="key-services__description">Диагностика и лечение психических расстройств, консультации психиатра</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/psychotherapy/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock2.jpg" alt="Психотерапия">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Психотерапия</h4>
                    </div>
                    <p class="key-services__description">Индивидуальная и групповая психотерапия, лечение депрессии и тревожности</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/psychologist/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock3.jpg" alt="Психолог">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Психолог</h4>
                    </div>
                    <p class="key-services__description">Консультации психолога, диагностика, коррекция поведения</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/therapy/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock4.jpg" alt="Терапия">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Терапия</h4>
                    </div>
                    <p class="key-services__description">Общая терапия, лечение внутренних болезней</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/endocrinology/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock5.jpg" alt="Эндокринология">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Эндокринология</h4>
                    </div>
                    <p class="key-services__description">Диагностика и лечение заболеваний эндокринной системы</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/gymnotherapy/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock6.jpeg" alt="Гирудотерапия">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Гирудотерапия</h4>
                    </div>
                    <p class="key-services__description">Лечение пиявками, восстановление кровообращения</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/dermatology/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock7.jpg" alt="Дерматология">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Дерматология</h4>
                    </div>
                    <p class="key-services__description">Диагностика и лечение кожных заболеваний</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/gynecology/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock8.jpg" alt="Гинекология">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Гинекология</h4>
                    </div>
                    <p class="key-services__description">Женское здоровье, диагностика и лечение гинекологических заболеваний</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/ultrasound/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stock9.jpg" alt="УЗИ">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>УЗИ</h4>
                    </div>
                    <p class="key-services__description">Ультразвуковая диагностика различных органов и систем</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Медицинские услуги - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/services/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Медицинские услуги - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/services/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/services/","url":"https://amadeya26.ru/services/","name":"Медицинские услуги - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T18:11:27+00:00","dateModified":"2025-10-24T19:06:25+00:00","breadcrumb":{"@id":"https://amadeya26.ru/services/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/services/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/services/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Медицинские услуги"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0435 \\u0443\\u0441\\u043b\\u0443\\u0433\\u0438","item":"https:\\/\\/amadeya26.ru\\/services\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
