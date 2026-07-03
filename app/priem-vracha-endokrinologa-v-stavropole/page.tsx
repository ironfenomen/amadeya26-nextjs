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
                    <span class="breadcrumb-current">Приём врача-эндокринолога в Ставрополе</span>
                </nav>

                <!-- Заголовок услуги -->
                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Приём врача-эндокринолога в Ставрополе</h1>
                        <p class="service-description">
                            Эндокринология — это область медицины, занимающаяся диагностикой и лечением заболеваний 
                            эндокринной системы. Наши специалисты помогают пациентам с сахарным диабетом, заболеваниями 
                            щитовидной железы, нарушениями обмена веществ и другими эндокринными патологиями.
                        </p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <!-- Почему выбирают -->
                <section class="service-why">
                    <h2 class="service-section-title">Почему выбирают нашу эндокринологическую помощь?</h2>
                    <p class="service-text">
                        Наши эндокринологи проводят комплексную диагностику гормональных нарушений, используя современные 
                        лабораторные методы и инструментальные исследования. Мы работаем с широким спектром эндокринных 
                        заболеваний: сахарный диабет, гипотиреоз, гипертиреоз, ожирение, метаболический синдром.
                    </p>
                    <p class="service-text">
                        Особое внимание мы уделяем профилактике осложнений диабета, коррекции гормонального фона 
                        и обучению пациентов правильному образу жизни. Наши специалисты помогают пациентам достичь 
                        оптимального контроля над заболеванием и улучшить качество жизни.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <!-- Индивидуальный план -->
                <section class="service-individual">
                    <h2 class="service-section-title">Индивидуальный план лечения</h2>
                    <p class="service-text">
                        Каждый пациент получает персональный план лечения, учитывающий особенности его заболевания, 
                        возраст, образ жизни и сопутствующие патологии. Мы разрабатываем комплексную программу, 
                        включающую медикаментозную терапию, диетотерапию и рекомендации по физической активности.
                    </p>
                    <p class="service-text">
                        Регулярный мониторинг показателей, корректировка лечения и обучение самоконтролю помогают 
                        пациентам эффективно управлять своим состоянием. Мы обеспечиваем постоянную поддержку 
                        и консультации по вопросам лечения и профилактики осложнений.
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
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/lukashevich.jpg" alt="Лукашевич Лада Сергеевна" class="specialist-photo">
                    </div>
                    <div class="specialist-info">
                        <h3 class="specialist-name">Лукашевич Лада Сергеевна</h3>
                        <p class="specialist-title">Эндокринолог, диетолог, нутрициолог</p>
                        <p class="specialist-experience">Стаж 10 лет</p>
                    </div>
                </div>
                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/zaltan.jpg" alt="Залтан Марина Алексеевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Залтан Марина Алексеевна</h3>
                            <p class="specialist-title">Гинеколог, врач УЗИ, акушер, гинеколог-эндокринолог</p>
                            <p class="specialist-experience">Стаж 22 года</p>
                        </div>
                    </div>

                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/erkenova.jpg" alt="Эркенова Жанна Алиевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Эркенова Жанна Алиевна</h3>
                            <p class="specialist-title">Гинеколог, акушер, гинеколог-эндокринолог</p>
                            <p class="specialist-experience">Стаж 25 лет</p>
                        </div>
                    </div>

                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/grigoriadis.jpg" alt="Григориадис Лариса Феодосиевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Григориадис Лариса Феодосиевна</h3>
                            <p class="specialist-title">Детский эндокринолог</p>
                            <p class="specialist-experience">Стаж 11 лет</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Прием врача-эндокринолога в Ставрополе - Медицинский центр Амадея в Ставрополе",
  description: "Приём врача-эндокринолога в Ставрополе в клинике «Амадея»: диагностика и лечение. Запись ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/priem-vracha-endokrinologa-v-stavropole/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Прием врача-эндокринолога в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/priem-vracha-endokrinologa-v-stavropole/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://amadeya26.ru/priem-vracha-endokrinologa-v-stavropole/\", \"url\": \"https://amadeya26.ru/priem-vracha-endokrinologa-v-stavropole/\", \"name\": \"\\u041f\\u0440\\u0438\\u0435\\u043c \\u0432\\u0440\\u0430\\u0447\\u0430-\\u044d\\u043d\\u0434\\u043e\\u043a\\u0440\\u0438\\u043d\\u043e\\u043b\\u043e\\u0433\\u0430 \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435 - \\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"isPartOf\": {\"@id\": \"https://amadeya26.ru/#website\"}, \"breadcrumb\": {\"@id\": \"https://amadeya26.ru/priem-vracha-endokrinologa-v-stavropole/#breadcrumb\"}, \"inLanguage\": \"ru-RU\", \"potentialAction\": [{\"@type\": \"ReadAction\", \"target\": [\"https://amadeya26.ru/priem-vracha-endokrinologa-v-stavropole/\"]}]}, {\"@type\": \"BreadcrumbList\", \"@id\": \"https://amadeya26.ru/priem-vracha-endokrinologa-v-stavropole/#breadcrumb\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\\u0413\\u043b\\u0430\\u0432\\u043d\\u0430\\u044f \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0430\", \"item\": \"https://amadeya26.ru/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\\u041f\\u0440\\u0438\\u0451\\u043c \\u0432\\u0440\\u0430\\u0447\\u0430-\\u044d\\u043d\\u0434\\u043e\\u043a\\u0440\\u0438\\u043d\\u043e\\u043b\\u043e\\u0433\\u0430 \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}]}, {\"@type\": \"WebSite\", \"@id\": \"https://amadeya26.ru/#website\", \"url\": \"https://amadeya26.ru/\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"publisher\": {\"@id\": \"https://amadeya26.ru/#organization\"}, \"inLanguage\": \"ru-RU\"}, {\"@type\": \"Organization\", \"@id\": \"https://amadeya26.ru/#organization\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"logo\": {\"@type\": \"ImageObject\", \"inLanguage\": \"ru-RU\", \"@id\": \"https://amadeya26.ru/#/schema/logo/image/\", \"url\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"contentUrl\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"width\": 68, \"height\": 68, \"caption\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}, \"image\": {\"@id\": \"https://amadeya26.ru/#/schema/logo/image/\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}, \"openingHours\": [\"\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00\"], \"image\": \"https://amadeya26.ru/wp-content/themes/amadeya-redesign/assets/img/logo.png\", \"sameAs\": []}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalService\", \"name\": \"\\u041f\\u0440\\u0438\\u0451\\u043c \\u0432\\u0440\\u0430\\u0447\\u0430-\\u044d\\u043d\\u0434\\u043e\\u043a\\u0440\\u0438\\u043d\\u043e\\u043b\\u043e\\u0433\\u0430 \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"areaServed\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"availableChannel\": {\"@type\": \"ServiceChannel\", \"serviceUrl\": \"https://amadeya26.ru/priem-vracha-endokrinologa-v-stavropole/\"}, \"provider\": {\"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}}}" }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
