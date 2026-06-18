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
                    <span class="breadcrumb-current">Супервизия при зависимости</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Супервизия при зависимости</h1>
                        <p class="service-description">Поддержка специалистов и команд, работающих с зависимостями. 
                        Разбор случаев, повышение эффективности и профилактика выгорания.</p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Для кого</h2>
                    <p class="service-text">Специалисты клиник, реабилитационных центров, частные практики, 
                    команды НКО и взаимопомощи.</p>
                    <p class="service-text">
                        Супервизия при зависимости — это профессиональная поддержка специалистов, работающих с зависимостями. 
                        Супервизия помогает психологам, психотерапевтам, наркологам и другим специалистам повысить эффективность 
                        своей работы, получить обратную связь от опытного коллеги и решить сложные профессиональные вопросы.
                    </p>
                    <p class="service-text">
                        Супервизия особенно важна для специалистов, работающих с зависимостями, так как эта область требует глубоких 
                        знаний, навыков и эмоциональной устойчивости. Супервизор помогает специалисту проанализировать свою работу с 
                        пациентами, выявить возможные ошибки и улучшить профессиональные навыки. Также супервизия помогает предотвратить 
                        профессиональное выгорание и поддерживать высокое качество помощи пациентам.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Форматы</h2>
                    <p class="service-text">Индивидуальная и групповая супервизия, офлайн и онлайн, 
                    регулярные встречи и разбор кейсов.</p>
                    <p class="service-text">
                        Супервизия проводится в различных форматах, что позволяет выбрать наиболее удобный вариант для каждого специалиста. 
                        Индивидуальная супервизия — это работа один на один с супервизором, что позволяет глубоко проработать конкретные 
                        случаи и получить персонализированные рекомендации. Групповая супервизия — это работа в группе специалистов, 
                        что позволяет обменяться опытом, обсудить различные подходы к работе и получить поддержку коллег.
                    </p>
                    <p class="service-text">
                        Супервизия может проводиться как офлайн (в клинике или офисе), так и онлайн (через видеосвязь), что делает её 
                        доступной для специалистов из любой точки региона. Встречи могут быть регулярными (еженедельно, ежемесячно) или 
                        по запросу при возникновении сложных случаев. Супервизия включает разбор конкретных кейсов, анализ работы с 
                        пациентами, обсуждение этических вопросов и профессиональное развитие специалиста.
                    </p>
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Задачи супервизии</h2>
                    <p class="service-text">
                        Супервизия при работе с зависимостями решает следующие задачи:
                    </p>
                    <ul class="service-list">
                        <li>Разбор сложных клинических случаев и поиск оптимальных решений</li>
                        <li>Повышение профессиональных навыков и компетенций специалиста</li>
                        <li>Предотвращение профессиональных ошибок и нарушений этики</li>
                        <li>Профилактика профессионального выгорания и эмоционального истощения</li>
                        <li>Поддержка специалиста в сложных ситуациях и кризисных случаях</li>
                        <li>Обмен опытом и лучшими практиками работы с зависимостями</li>
                        <li>Развитие навыков работы с различными типами пациентов</li>
                        <li>Повышение эффективности терапевтического процесса</li>
                        <li>Поддержание высокого качества медицинской и психологической помощи</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/lavrentev.jpg" alt="Лаврентьев Илья Дмитриевич" class="specialist-photo">
                    </div>
                    <div class="specialist-info">
                        <h3 class="specialist-name">Лаврентьев Илья Дмитриевич</h3>
                        <p class="specialist-title">Клинический психолог, психолог</p>
                        <p class="specialist-experience">Стаж 10 лет</p>
                    </div>
                </div>
                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/borisova.jpg" alt="Борисова Елена Алексеевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Борисова Елена Алексеевна</h3>
                            <p class="specialist-title">Клинический психолог, психолог</p>
                            <p class="specialist-experience">Стаж 15 лет</p>
                        </div>
                    </div>

                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/bobrova.jpg" alt="Боброва Александра Николаевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Боброва Александра Николаевна</h3>
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
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Супервизия при зависимости в Ставрополе - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/stavropol-supervision/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Супервизия при зависимости в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/stavropol-supervision/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function StavropolSupervisionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/stavropol-supervision/","url":"https://amadeya26.ru/stavropol-supervision/","name":"Супервизия при зависимости в Ставрополе - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T11:26:29+00:00","dateModified":"2025-10-24T19:06:39+00:00","breadcrumb":{"@id":"https://amadeya26.ru/stavropol-supervision/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/stavropol-supervision/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/stavropol-supervision/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Супервизия при зависимости в Ставрополе"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0421\\u0443\\u043f\\u0435\\u0440\\u0432\\u0438\\u0437\\u0438\\u044f \\u043f\\u0440\\u0438 \\u0437\\u0430\\u0432\\u0438\\u0441\\u0438\\u043c\\u043e\\u0441\\u0442\\u0438 \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/stavropol-supervision\\/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalService","name":"\\u0421\\u0443\\u043f\\u0435\\u0440\\u0432\\u0438\\u0437\\u0438\\u044f \\u043f\\u0440\\u0438 \\u0437\\u0430\\u0432\\u0438\\u0441\\u0438\\u043c\\u043e\\u0441\\u0442\\u0438 \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","description":"","areaServed":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","availableChannel":{"@type":"ServiceChannel","serviceUrl":"https:\\/\\/amadeya26.ru\\/stavropol-supervision\\/"},"provider":{"@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"}}}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
