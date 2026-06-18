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
                    <a href="/services/">Медицинские услуги</a>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-current">Дерматология</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Дерматология</h1>
                        <p class="service-description">Диагностика и лечение заболеваний кожи, волос и ногтей. 
                        Современные методики и деликатный подход.</p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                   
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Чем мы можем помочь?</h2>
                    <p class="service-text">Лечение акне, дерматитов, псориаза, грибковых поражений, алопеции и других состояний. 
                    Индивидуальный подбор терапии и уходовых программ.</p>
                    <p class="service-text">
                        Дерматология — это область медицины, занимающаяся диагностикой и лечением заболеваний кожи, волос и ногтей. 
                        Наши дерматологи используют современные методы диагностики и лечения, обеспечивая эффективную помощь 
                        пациентам с различными кожными проблемами.
                    </p>
                    <p class="service-text">
                        Мы работаем с широким спектром дерматологических заболеваний: воспалительные процессы, инфекционные поражения, 
                        аллергические реакции, аутоиммунные заболевания кожи, доброкачественные и злокачественные новообразования. 
                        Особое внимание уделяем ранней диагностике рака кожи и профилактике онкологических заболеваний.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Персональный план терапии</h2>
                    <p class="service-text">Диагностика, лечение, рекомендации по домашнему уходу и профилактике обострений.</p>
                    <p class="service-text">
                        Каждый пациент проходит тщательное обследование, включающее визуальный осмотр, дерматоскопию и, 
                        при необходимости, лабораторные анализы и биопсию. На основе полученных данных врач составляет 
                        индивидуальный план лечения, учитывающий тип кожи, возраст пациента и особенности течения заболевания.
                    </p>
                    <p class="service-text">
                        Мы используем комплексный подход к лечению, сочетая медикаментозную терапию с физиотерапевтическими 
                        методами и рекомендациями по уходу за кожей. Наши специалисты обучают пациентов правильному домашнему 
                        уходу и профилактике обострений заболеваний.
                    </p>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления дерматологии</h2>
                    <p class="service-text">
                        Наши дерматологи специализируются на следующих направлениях:
                    </p>
                    <ul class="service-list">
                        <li>Лечение угревой болезни и постакне</li>
                        <li>Атопический и контактный дерматит</li>
                        <li>Псориаз и другие аутоиммунные заболевания</li>
                        <li>Грибковые поражения кожи, волос и ногтей</li>
                        <li>Вирусные заболевания кожи (бородавки, герпес)</li>
                        <li>Алопеция (выпадение волос)</li>
                        <li>Доброкачественные новообразования кожи</li>
                        <li>Ранняя диагностика рака кожи</li>
                        <li>Косметологические процедуры и уход за кожей</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/fomenko.jpg" alt="Фоменко Оксана Анатольевна " class="specialist-photo">
                    </div>
                    <div class="specialist-info">
                        <h3 class="specialist-name">Фоменко Оксана Анатольевна </h3>
                        <p class="specialist-title">Дерматолог, венеролог</p>
                        <p class="specialist-experience">Стаж 21 год</p>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Дерматология - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/dermatology/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Дерматология - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/dermatology/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function DermatologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/dermatology/","url":"https://amadeya26.ru/dermatology/","name":"Дерматология - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T11:26:29+00:00","dateModified":"2025-10-24T19:06:26+00:00","breadcrumb":{"@id":"https://amadeya26.ru/dermatology/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/dermatology/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/dermatology/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Дерматология"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0414\\u0435\\u0440\\u043c\\u0430\\u0442\\u043e\\u043b\\u043e\\u0433\\u0438\\u044f","item":"https:\\/\\/amadeya26.ru\\/dermatology\\/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalService","name":"\\u0414\\u0435\\u0440\\u043c\\u0430\\u0442\\u043e\\u043b\\u043e\\u0433\\u0438\\u044f","description":"","areaServed":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","availableChannel":{"@type":"ServiceChannel","serviceUrl":"https:\\/\\/amadeya26.ru\\/dermatology\\/"},"provider":{"@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"}}}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
