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
                    <span class="breadcrumb-current">Приём психолога-аддиктолога</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Приём психолога-аддиктолога</h1>
                        <p class="service-description">Работа с мотивацией, триггерами и профилактикой срывов. Поддержка пациента и семьи.</p>
                        <button type="button" class="service-call-button" id="cta-link-service">Позвонить</button>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">С чем работаем</h2>
                    <p class="service-text">Зависимость, созависимость, тревога, депрессия, ПТСР, семейные конфликты.</p>
                    <p class="service-text">
                        Психолог-аддиктолог — это специалист, который работает с различными формами зависимостей: алкогольной, 
                        наркотической, игровой, пищевой и другими. Аддиктолог помогает пациентам понять природу их зависимости, 
                        выявить триггеры, которые провоцируют употребление, и разработать стратегии для поддержания трезвости.
                    </p>
                    <p class="service-text">
                        Работа психолога-аддиктолога направлена не только на пациента, но и на его окружение. Специалист помогает 
                        семье понять механизмы созависимости, научиться правильно взаимодействовать с зависимым человеком и создать 
                        поддерживающую среду для выздоровления. Также аддиктолог работает с сопутствующими психическими расстройствами, 
                        такими как тревога, депрессия, посттравматическое стрессовое расстройство.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Методы</h2>
                    <p class="service-text">КПТ, мотивационное интервью, семейная терапия, профилактика рецидивов.</p>
                    <p class="service-text">
                        Психолог-аддиктолог использует широкий спектр методов и подходов для работы с зависимостями. Когнитивно-поведенческая 
                        терапия (КПТ) помогает пациентам выявить и изменить деструктивные мысли и поведенческие паттерны, связанные с 
                        употреблением. Мотивационное интервью способствует формированию внутренней мотивации к изменениям и принятию 
                        решения о лечении.
                    </p>
                    <p class="service-text">
                        Семейная терапия направлена на работу с созависимостью, восстановление здоровых границ в семье и улучшение 
                        коммуникации между членами семьи. Программа профилактики рецидивов помогает пациентам научиться распознавать 
                        ранние признаки срыва и использовать навыки для предотвращения рецидива. Также используются методы арт-терапии, 
                        гештальт-терапии и другие подходы в зависимости от потребностей пациента.
                    </p>
                    <button type="button" class="service-booking-button booking-medflex">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления работы</h2>
                    <p class="service-text">
                        Психолог-аддиктолог работает в следующих направлениях:
                    </p>
                    <ul class="service-list">
                        <li>Диагностика зависимости и сопутствующих расстройств</li>
                        <li>Формирование мотивации к лечению и изменениям</li>
                        <li>Работа с триггерами и факторами риска</li>
                        <li>Развитие навыков совладания со стрессом</li>
                        <li>Профилактика рецидивов и поддержание трезвости</li>
                        <li>Работа с созависимостью в семье</li>
                        <li>Терапия сопутствующих психических расстройств</li>
                        <li>Групповая терапия и взаимопомощь</li>
                        <li>Индивидуальные и семейные консультации</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
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
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/puchkova.jpg" alt="Пучкова Анастасия Андреевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Пучкова Анастасия Андреевна</h3>
                            <p class="specialist-title">Клинический психолог, психолог</p>
                            <p class="specialist-experience">Стаж 6 лет</p>
                        </div>
                    </div>
                    <!-- Плейсхолдер для добавления врача -->
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
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/korotina-olga.jpg" alt="Коротина Ольга Викторовна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Коротина Ольга Викторовна</h3>
                            <p class="specialist-title">Психолог</p>
                            <p class="specialist-experience">Стаж 28 лет</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Приём психолога-аддиктолога - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/addictologist/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Приём психолога-аддиктолога - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/addictologist/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function AddictologistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/addictologist/","url":"https://amadeya26.ru/addictologist/","name":"Приём психолога-аддиктолога - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T11:26:29+00:00","dateModified":"2025-10-24T19:06:26+00:00","breadcrumb":{"@id":"https://amadeya26.ru/addictologist/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/addictologist/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/addictologist/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Приём психолога-аддиктолога"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041f\\u0440\\u0438\\u0451\\u043c \\u043f\\u0441\\u0438\\u0445\\u043e\\u043b\\u043e\\u0433\\u0430-\\u0430\\u0434\\u0434\\u0438\\u043a\\u0442\\u043e\\u043b\\u043e\\u0433\\u0430","item":"https:\\/\\/amadeya26.ru\\/addictologist\\/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalService","name":"\\u041f\\u0440\\u0438\\u0451\\u043c \\u043f\\u0441\\u0438\\u0445\\u043e\\u043b\\u043e\\u0433\\u0430-\\u0430\\u0434\\u0434\\u0438\\u043a\\u0442\\u043e\\u043b\\u043e\\u0433\\u0430","description":"","areaServed":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","availableChannel":{"@type":"ServiceChannel","serviceUrl":"https:\\/\\/amadeya26.ru\\/addictologist\\/"},"provider":{"@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"}}}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
