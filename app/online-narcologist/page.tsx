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
                    <span class="breadcrumb-current">Онлайн-консультация нарколога</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Онлайн-консультация нарколога</h1>
                        <p class="service-description">Помощь без визита в клинику: видеосвязь, рекомендации, корректировка терапии.</p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Когда это удобно?</h2>
                    <p class="service-text">Для первичной консультации, уточнения схемы, поддержки в ремиссии, 
                    обсуждения результатов анализов и назначений.</p>
                    <p class="service-text">
                        Онлайн-консультация нарколога — это современный и удобный способ получить профессиональную помощь, 
                        не выходя из дома. Этот формат особенно актуален для пациентов, которые не могут посетить клинику 
                        лично из-за удалённости, ограниченной мобильности или других обстоятельств.
                    </p>
                    <p class="service-text">
                        Дистанционная консультация позволяет получить квалифицированную помощь в комфортной обстановке, 
                        сохраняя при этом полную конфиденциальность. Врач-нарколог проводит полноценную консультацию, 
                        оценивает состояние пациента и даёт рекомендации по лечению и поддержке.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Как проходит сессия</h2>
                    <p class="service-text">Связь в удобном мессенджере или платформе, длительность 30–60 минут, 
                    по итогам — письменные рекомендации.</p>
                    <p class="service-text">
                        Онлайн-консультация проводится через защищённые платформы видеосвязи, обеспечивающие конфиденциальность 
                        и безопасность общения. Перед началом консультации врач уточняет удобный для пациента способ связи 
                        и время проведения сессии.
                    </p>
                    <p class="service-text">
                        Во время консультации врач беседует с пациентом, задаёт необходимые вопросы, оценивает его состояние 
                        и даёт рекомендации. По окончании сессии пациент получает письменные рекомендации с планом действий, 
                        которые можно сохранить и использовать в дальнейшем.
                    </p>
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Преимущества онлайн-консультации</h2>
                    <p class="service-text">
                        Дистанционная консультация нарколога имеет ряд преимуществ:
                    </p>
                    <ul class="service-list">
                        <li>Удобство и комфорт — консультация в привычной обстановке</li>
                        <li>Экономия времени — не нужно тратить время на дорогу</li>
                        <li>Конфиденциальность — полная анонимность и безопасность</li>
                        <li>Доступность — помощь из любой точки региона</li>
                        <li>Гибкость — возможность выбрать удобное время</li>
                        <li>Эффективность — полноценная консультация без потери качества</li>
                        <li>Поддержка в ремиссии — регулярные консультации для поддержания результата</li>
                        <li>Консультации для родственников — помощь семье пациента</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <!--<div class="specialist-card">
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
                    <!--<div class="specialist-card">
                        <div class="specialist-image">  
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/vodolazhski.jpg" alt="Водолажский Андрей Федорович" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Водолажский Андрей Федорович</h3>
                            <p class="specialist-title">Психотерапевт, нарколог</p>
                            <p class="specialist-experience">Стаж 37 лет</p>
                        </div>
                    </div>

                    <!-- Плейсхолдер для добавления врача -->
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
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/kamolikova.jpg" alt="Камоликова Жанна Анатольевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Камоликова Жанна Анатольевна</h3>
                            <p class="specialist-title">Психиатр, нарколог, психотерапевт</p>
                            <p class="specialist-experience">Стаж 21 год</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Онлайн-консультация нарколога - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/online-narcologist/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Онлайн-консультация нарколога - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/online-narcologist/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function OnlineNarcologistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/online-narcologist/","url":"https://amadeya26.ru/online-narcologist/","name":"Онлайн-консультация нарколога - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T11:26:29+00:00","dateModified":"2025-10-24T19:06:26+00:00","breadcrumb":{"@id":"https://amadeya26.ru/online-narcologist/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/online-narcologist/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/online-narcologist/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Онлайн-консультация нарколога"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041e\\u043d\\u043b\\u0430\\u0439\\u043d-\\u043a\\u043e\\u043d\\u0441\\u0443\\u043b\\u044c\\u0442\\u0430\\u0446\\u0438\\u044f \\u043d\\u0430\\u0440\\u043a\\u043e\\u043b\\u043e\\u0433\\u0430","item":"https:\\/\\/amadeya26.ru\\/online-narcologist\\/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalService","name":"\\u041e\\u043d\\u043b\\u0430\\u0439\\u043d-\\u043a\\u043e\\u043d\\u0441\\u0443\\u043b\\u044c\\u0442\\u0430\\u0446\\u0438\\u044f \\u043d\\u0430\\u0440\\u043a\\u043e\\u043b\\u043e\\u0433\\u0430","description":"","areaServed":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","availableChannel":{"@type":"ServiceChannel","serviceUrl":"https:\\/\\/amadeya26.ru\\/online-narcologist\\/"},"provider":{"@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"}}}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
