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
                    <span class="breadcrumb-current">Приём врача-терапевта в Ставрополе</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Приём врача-терапевта в Ставрополе</h1>
                        <p class="service-description">Комплексная диагностика и лечение внутренних заболеваний. 
                        Внимание к деталям и забота о здоровье каждого пациента.</p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Почему выбирают нашу терапию?</h2>
                    <p class="service-text">Работаем по клиническим рекомендациям, используем современные 
                    диагностические методы и персонализированные схемы лечения.</p>
                    <p class="service-text">
                        Терапия — это основа современной медицины, охватывающая диагностику и лечение широкого спектра 
                        внутренних заболеваний. Наши терапевты проводят комплексное обследование пациентов, выявляя 
                        причину недомогания и разрабатывая эффективный план лечения.
                    </p>
                    <p class="service-text">
                        Мы работаем с заболеваниями сердечно-сосудистой системы, органов дыхания, желудочно-кишечного тракта, 
                        мочевыделительной системы, опорно-двигательного аппарата и другими патологиями внутренних органов. 
                        Особое внимание уделяем профилактике заболеваний и раннему выявлению проблем со здоровьем.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Индивидуальные планы лечения</h2>
                    <p class="service-text">Учитываем сопутствующие заболевания, образ жизни и предпочтения пациента. 
                    Обязательно проводим последующее наблюдение и коррекцию терапии.</p>
                    <p class="service-text">
                        Каждый пациент проходит тщательное обследование, включающее осмотр, лабораторные анализы и, 
                        при необходимости, инструментальные методы диагностики. На основе полученных данных врач составляет 
                        индивидуальный план лечения, учитывающий особенности организма пациента.
                    </p>
                    <p class="service-text">
                        Мы обеспечиваем динамическое наблюдение за состоянием пациента, корректируя лечение по мере необходимости. 
                        Наши терапевты дают подробные рекомендации по образу жизни, питанию и профилактике обострений заболеваний.
                    </p>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления терапии</h2>
                    <p class="service-text">
                        Наши терапевты специализируются на следующих направлениях:
                    </p>
                    <ul class="service-list">
                        <li>Диагностика и лечение заболеваний сердечно-сосудистой системы</li>
                        <li>Заболевания органов дыхания (бронхиты, пневмонии, ХОБЛ)</li>
                        <li>Патологии желудочно-кишечного тракта</li>
                        <li>Заболевания почек и мочевыводящих путей</li>
                        <li>Заболевания суставов и соединительной ткани</li>
                        <li>Метаболические нарушения</li>
                        <li>Профилактические осмотры и диспансеризация</li>
                        <li>Вакцинация и иммунопрофилактика</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/mozharuk.jpg" alt="Можарук Дарья Сергеевна" class="specialist-photo">
                    </div>
                    <div class="specialist-info">
                        <h3 class="specialist-name">Можарук Дарья Сергеевна</h3>
                        <p class="specialist-title">Терапевт, кардиолог, ревматолог</p>
                        <p class="specialist-experience">Стаж 6 лет</p>
                    </div>
                </div>
                <!-- Плейсхолдер для добавления врача -->
                <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/minin.jpg" alt="Минин Юрий Владимирович" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Минин Юрий Владимирович</h3>
                            <p class="specialist-title">Мануальный терапевт, реабилитолог, физиотерапевт</p>
                            <p class="specialist-experience">Стаж 40 лет</p>
                        </div>
                    </div>

                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/kronartem.jpg" alt="Крон Артём Владимирович " class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Крон Артём Владимирович </h3>
                            <p class="specialist-title">Травматолог, терапевт</p>
                            <p class="specialist-experience">Стаж 5 лет</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Прием врача-терапевта в Ставрополе - Медицинский центр Амадея в Ставрополе",
  description: "Приём врача-терапевта в Ставрополе в клинике «Амадея»: диагностика и лечение внутренних болезней. Запись ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/priem-vracha-terapevta-v-stavropole/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Прием врача-терапевта в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/priem-vracha-terapevta-v-stavropole/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://amadeya26.ru/priem-vracha-terapevta-v-stavropole/\", \"url\": \"https://amadeya26.ru/priem-vracha-terapevta-v-stavropole/\", \"name\": \"\\u041f\\u0440\\u0438\\u0435\\u043c \\u0432\\u0440\\u0430\\u0447\\u0430-\\u0442\\u0435\\u0440\\u0430\\u043f\\u0435\\u0432\\u0442\\u0430 \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435 - \\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"isPartOf\": {\"@id\": \"https://amadeya26.ru/#website\"}, \"breadcrumb\": {\"@id\": \"https://amadeya26.ru/priem-vracha-terapevta-v-stavropole/#breadcrumb\"}, \"inLanguage\": \"ru-RU\", \"potentialAction\": [{\"@type\": \"ReadAction\", \"target\": [\"https://amadeya26.ru/priem-vracha-terapevta-v-stavropole/\"]}]}, {\"@type\": \"BreadcrumbList\", \"@id\": \"https://amadeya26.ru/priem-vracha-terapevta-v-stavropole/#breadcrumb\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\\u0413\\u043b\\u0430\\u0432\\u043d\\u0430\\u044f \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0430\", \"item\": \"https://amadeya26.ru/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\\u041f\\u0440\\u0438\\u0451\\u043c \\u0432\\u0440\\u0430\\u0447\\u0430-\\u0442\\u0435\\u0440\\u0430\\u043f\\u0435\\u0432\\u0442\\u0430 \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}]}, {\"@type\": \"WebSite\", \"@id\": \"https://amadeya26.ru/#website\", \"url\": \"https://amadeya26.ru/\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"publisher\": {\"@id\": \"https://amadeya26.ru/#organization\"}, \"inLanguage\": \"ru-RU\"}, {\"@type\": \"Organization\", \"@id\": \"https://amadeya26.ru/#organization\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"logo\": {\"@type\": \"ImageObject\", \"inLanguage\": \"ru-RU\", \"@id\": \"https://amadeya26.ru/#/schema/logo/image/\", \"url\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"contentUrl\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"width\": 68, \"height\": 68, \"caption\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}, \"image\": {\"@id\": \"https://amadeya26.ru/#/schema/logo/image/\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}, \"openingHours\": [\"\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00\"], \"image\": \"https://amadeya26.ru/wp-content/themes/amadeya-redesign/assets/img/logo.png\", \"sameAs\": []}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalService\", \"name\": \"\\u041f\\u0440\\u0438\\u0451\\u043c \\u0432\\u0440\\u0430\\u0447\\u0430-\\u0442\\u0435\\u0440\\u0430\\u043f\\u0435\\u0432\\u0442\\u0430 \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"areaServed\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"availableChannel\": {\"@type\": \"ServiceChannel\", \"serviceUrl\": \"https://amadeya26.ru/priem-vracha-terapevta-v-stavropole/\"}, \"provider\": {\"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}}}" }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
