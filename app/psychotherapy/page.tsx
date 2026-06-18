import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `<main class="page-content service-page">
    <div class="container">
        <div class="service-layout">
            <!-- Основной контент -->
            <div class="service-main">
                <!-- Хлебные крошки -->
                <nav class="breadcrumbs">
                    <a href="/">Главная</a>
                    <span class="breadcrumb-separator">/</span>
                    <a href="/services/">Медицинские услуги</a>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-current">Психотерапия</span>
                </nav>

                <!-- Заголовок услуги -->
                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Психотерапия</h1>
                        <p class="service-description">
                            Психотерапия — это эффективный метод лечения психических и эмоциональных проблем через 
                            профессиональное общение и взаимодействие. Наши психотерапевты помогают пациентам 
                            разобраться в своих переживаниях и найти пути решения жизненных трудностей.
                        </p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <!-- Почему выбирают -->
                <section class="service-why">
                    <h2 class="service-section-title">Почему выбирают психотерапию?</h2>
                    <p class="service-text">
                        Психотерапия помогает людям справиться с депрессией, тревожностью, стрессом, паническими атаками, 
                        проблемами в отношениях и другими эмоциональными трудностями. Наши специалисты используют различные 
                        терапевтические подходы: когнитивно-поведенческую терапию, гештальт-терапию, психодинамическую терапию.
                    </p>
                    <p class="service-text">
                        Терапия проводится как индивидуально, так и в группах, в зависимости от потребностей пациента. 
                        Мы создаём безопасную и поддерживающую атмосферу, где каждый может открыто обсуждать свои проблемы 
                        и работать над их решением.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <!-- Индивидуальный план -->
                <section class="service-individual">
                    <h2 class="service-section-title">Персональный план терапии</h2>
                    <p class="service-text">
                        Каждый пациент получает индивидуальный план психотерапии, разработанный с учётом его уникальной 
                        ситуации, целей и предпочтений. Мы учитываем личностные особенности, жизненный опыт и текущие 
                        обстоятельства для максимальной эффективности лечения.
                    </p>
                    <p class="service-text">
                        Терапевтический процесс включает регулярные сессии, домашние задания, отслеживание прогресса 
                        и корректировку методов работы. Мы помогаем пациентам развить навыки самопомощи и устойчивости 
                        к стрессовым ситуациям.
                    </p>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/kumratova.jpg" alt="Кумратова Наталья Александровна" class="specialist-photo">
                    </div>
                    <div class="specialist-info">
                        <h3 class="specialist-name">Кумратова Наталья Александровна</h3>
                        <p class="specialist-title">Психиатр, психотерапевтг</p>
                        <p class="specialist-experience">Стаж 23 года</p>
                    </div>
                </div>
                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/bobrova.jpg" alt="Боброва Александра Николаевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Боброва Александра Николаевна </h3>
                            <p class="specialist-title">Психотерапевт, психиатр, психолог</p>
                            <p class="specialist-experience">Стаж 22 года</p>
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
                    <!--<div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/vodolazhski.jpg" alt="Водолажский Андрей Федорович" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Водолажский Андрей Федорович</h3>
                            <p class="specialist-title">Психотерапевт, нарколог</p>
                            <p class="specialist-experience">Стаж 37 лет</p>
                        </div>
                    </div> -->
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Психотерапия - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/psychotherapy/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Психотерапия - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/psychotherapy/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function PsychotherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/psychotherapy/","url":"https://amadeya26.ru/psychotherapy/","name":"Психотерапия - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T11:26:29+00:00","dateModified":"2025-10-24T19:06:25+00:00","breadcrumb":{"@id":"https://amadeya26.ru/psychotherapy/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/psychotherapy/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/psychotherapy/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Психотерапия"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041f\\u0441\\u0438\\u0445\\u043e\\u0442\\u0435\\u0440\\u0430\\u043f\\u0438\\u044f","item":"https:\\/\\/amadeya26.ru\\/psychotherapy\\/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalService","name":"\\u041f\\u0441\\u0438\\u0445\\u043e\\u0442\\u0435\\u0440\\u0430\\u043f\\u0438\\u044f","description":"","areaServed":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","availableChannel":{"@type":"ServiceChannel","serviceUrl":"https:\\/\\/amadeya26.ru\\/psychotherapy\\/"},"provider":{"@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"}}}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
