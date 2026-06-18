import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `<main class="page-content service-page">
    <div class="container">
        <div class="service-layout">
            <div class="service-main">
                <nav class="breadcrumbs">
                    <a href="/">Главная</a>
                    <span class="breadcrumb-separator">/</span>
                    <a href="/treatment/">Лечение зависимостей</a>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-current">Выезд врача-нарколога на дом</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Выезд врача-нарколога на дом</h1>
                        <p class="service-description">Экстренная помощь и поддержка на дому. Конфиденциально, быстро, профессионально.</p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Когда вызывают на дом?</h2>
                    <p class="service-text">Острое состояние, абстиненция, невозможность приехать в клинику, 
                    необходимость экстренной помощи и наблюдения.</p>
                    <p class="service-text">
                        Выезд врача-нарколога на дом — это экстренная медицинская помощь, которая предоставляется в ситуациях, 
                        когда пациент не может самостоятельно добраться до клиники. Эта услуга особенно важна при острых состояниях, 
                        тяжёлой абстиненции, затяжных запоях или когда пациент находится в критическом состоянии.
                    </p>
                    <p class="service-text">
                        Наш врач-нарколог приезжает на дом в кратчайшие сроки, имея при себе все необходимые медикаменты и 
                        оборудование для оказания экстренной помощи. Мы понимаем, что в кризисных ситуациях важна каждая минута, 
                        поэтому обеспечиваем максимально быстрое реагирование на вызов.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Что включает выезд</h2>
                    <p class="service-text">Осмотр, первичная терапия, снятие интоксикации, рекомендации и 
                    при необходимости — транспортировка в стационар.</p>
                    <p class="service-text">
                        При выезде на дом врач-нарколог проводит полный комплекс мероприятий по оказанию экстренной помощи. 
                        Специалист осматривает пациента, оценивает его состояние, измеряет жизненные показатели и при необходимости 
                        проводит первичную детоксикацию прямо на месте.
                    </p>
                    <p class="service-text">
                        Врач вводит необходимые медикаменты для снятия симптомов абстиненции, стабилизации состояния и снижения 
                        риска осложнений. После оказания экстренной помощи специалист даёт рекомендации по дальнейшему лечению и, 
                        при необходимости, организует транспортировку пациента в стационар для продолжения лечения.
                    </p>
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Что делает врач на выезде</h2>
                    <p class="service-text">
                        При выезде на дом врач-нарколог выполняет следующие процедуры:
                    </p>
                    <ul class="service-list">
                        <li>Осмотр пациента и оценка его физического состояния</li>
                        <li>Измерение артериального давления, пульса, температуры</li>
                        <li>Оценка степени интоксикации и абстиненции</li>
                        <li>Внутривенное введение детоксикационных растворов</li>
                        <li>Введение препаратов для снятия симптомов абстиненции</li>
                        <li>Стабилизация сердечно-сосудистой и нервной систем</li>
                        <li>Консультация родственников по уходу за пациентом</li>
                        <li>Назначение дальнейшего лечения и рекомендации</li>
                        <li>Организация транспортировки в стационар (при необходимости)</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/kron.jpg" alt="Крон Елена Ивановна" class="specialist-photo">
                    </div>
                    <div class="specialist-info">
                        <h3 class="specialist-name">Крон Елена Ивановна</h3>
                        <p class="specialist-title">Психиатр, гирудотерапевт, нарколог, психотерапевт</p>
                        <p class="specialist-experience">Стаж 32 года</p>
                    </div>
                </div>
                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/mutaeva.jpg" alt="Мутаева Ольга Юрьевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Мутаева Ольга Юрьевна</h3>
                            <p class="specialist-title">Психиатр, клинический психолог, нарколог, психолог, психотерапевт, рефлексотерапевт</p>
                            <p class="specialist-experience">Стаж 21 год</p>
                        </div>
                    </div>

                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/denisenko.jpg" alt="Денисенко Игорь Александрович" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Денисенко Игорь Александрович</h3>
                            <p class="specialist-title">Психиатр, нарколог, психотерапевт</p>
                            <p class="specialist-experience">Стаж 17 лет</p>
                        </div>
                    </div>

                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/vodolazhski.jpg" alt="Водолажский Андрей Федорович" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Водолажский Андрей Федорович</h3>
                            <p class="specialist-title">Психотерапевт, нарколог</p>
                            <p class="specialist-experience">Стаж 37 лет</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Выезд врача-нарколога на дом - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/narcologist-home-visit/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Выезд врача-нарколога на дом - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/narcologist-home-visit/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function NarcologistHomeVisitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/narcologist-home-visit/","url":"https://amadeya26.ru/narcologist-home-visit/","name":"Выезд врача-нарколога на дом - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T11:26:29+00:00","dateModified":"2025-10-24T19:06:26+00:00","breadcrumb":{"@id":"https://amadeya26.ru/narcologist-home-visit/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/narcologist-home-visit/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/narcologist-home-visit/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Выезд врача-нарколога на дом"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0412\\u044b\\u0435\\u0437\\u0434 \\u0432\\u0440\\u0430\\u0447\\u0430-\\u043d\\u0430\\u0440\\u043a\\u043e\\u043b\\u043e\\u0433\\u0430 \\u043d\\u0430 \\u0434\\u043e\\u043c","item":"https:\\/\\/amadeya26.ru\\/narcologist-home-visit\\/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalService","name":"\\u0412\\u044b\\u0435\\u0437\\u0434 \\u0432\\u0440\\u0430\\u0447\\u0430-\\u043d\\u0430\\u0440\\u043a\\u043e\\u043b\\u043e\\u0433\\u0430 \\u043d\\u0430 \\u0434\\u043e\\u043c","description":"","areaServed":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","availableChannel":{"@type":"ServiceChannel","serviceUrl":"https:\\/\\/amadeya26.ru\\/narcologist-home-visit\\/"},"provider":{"@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"}}}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
