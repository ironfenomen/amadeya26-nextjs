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
                    <span class="breadcrumb-current">Психиатрическая помощь в Ставрополе</span>
                </nav>

                <!-- Заголовок услуги -->
                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Психиатрическая помощь в Ставрополе</h1>
                        <p class="service-description">
                            Современная психиатрия — это комплексный подход к диагностике и лечению психических расстройств. 
                            Наши специалисты используют передовые методы терапии для восстановления психического здоровья и улучшения качества жизни пациентов.
                        </p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <!-- Почему выбирают -->
                <section class="service-why">
                    <h2 class="service-section-title">Почему выбирают нашу психиатрическую помощь?</h2>
                    <p class="service-text">
                        Наши психиатры проводят тщательную диагностику психического состояния пациента, используя современные 
                        методы оценки и международные стандарты диагностики. Мы применяем комплексный подход, сочетающий 
                        медикаментозную терапию с психотерапевтическими методами.
                    </p>
                    <p class="service-text">
                        Специалисты клиники работают с широким спектром психических расстройств: депрессия, тревожные расстройства, 
                        биполярное расстройство, шизофрения, расстройства личности и другие состояния, требующие профессионального вмешательства.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <!-- Индивидуальный план -->
                <section class="service-individual">
                    <h2 class="service-section-title">Индивидуальный подход к лечению</h2>
                    <p class="service-text">
                        Каждый пациент получает персональный план лечения, разработанный с учётом особенностей его состояния, 
                        истории болезни и индивидуальных потребностей. Мы учитываем не только симптомы, но и социальные, 
                        психологические и биологические факторы.
                    </p>
                    <p class="service-text">
                        Лечение включает регулярный мониторинг состояния пациента, корректировку терапии при необходимости 
                        и тесное взаимодействие с семьёй пациента для обеспечения максимальной эффективности лечения.
                    </p>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
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

                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/kumratova.jpg" alt="Кумратова Наталья Александровна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Кумратова Наталья Александровна</h3>
                            <p class="specialist-title">Психиатр, психотерапевт</p>
                            <p class="specialist-experience">Стаж 23 года</p>
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
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Психиатрическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе",
  description: "Психиатрическая помощь в Ставрополе в клинике «Амадея»: диагностика и лечение психических расстройств. Запись ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/psihiatricheskaya-pomoshh-v-stavropole/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Психиатрическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/psihiatricheskaya-pomoshh-v-stavropole/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://amadeya26.ru/psihiatricheskaya-pomoshh-v-stavropole/\", \"url\": \"https://amadeya26.ru/psihiatricheskaya-pomoshh-v-stavropole/\", \"name\": \"\\u041f\\u0441\\u0438\\u0445\\u0438\\u0430\\u0442\\u0440\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u043f\\u043e\\u043c\\u043e\\u0449\\u044c \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435 - \\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"isPartOf\": {\"@id\": \"https://amadeya26.ru/#website\"}, \"breadcrumb\": {\"@id\": \"https://amadeya26.ru/psihiatricheskaya-pomoshh-v-stavropole/#breadcrumb\"}, \"inLanguage\": \"ru-RU\", \"potentialAction\": [{\"@type\": \"ReadAction\", \"target\": [\"https://amadeya26.ru/psihiatricheskaya-pomoshh-v-stavropole/\"]}]}, {\"@type\": \"BreadcrumbList\", \"@id\": \"https://amadeya26.ru/psihiatricheskaya-pomoshh-v-stavropole/#breadcrumb\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\\u0413\\u043b\\u0430\\u0432\\u043d\\u0430\\u044f \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0430\", \"item\": \"https://amadeya26.ru/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\\u041f\\u0441\\u0438\\u0445\\u0438\\u0430\\u0442\\u0440\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u043f\\u043e\\u043c\\u043e\\u0449\\u044c \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}]}, {\"@type\": \"WebSite\", \"@id\": \"https://amadeya26.ru/#website\", \"url\": \"https://amadeya26.ru/\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"publisher\": {\"@id\": \"https://amadeya26.ru/#organization\"}, \"inLanguage\": \"ru-RU\"}, {\"@type\": \"Organization\", \"@id\": \"https://amadeya26.ru/#organization\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"logo\": {\"@type\": \"ImageObject\", \"inLanguage\": \"ru-RU\", \"@id\": \"https://amadeya26.ru/#/schema/logo/image/\", \"url\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"contentUrl\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"width\": 68, \"height\": 68, \"caption\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}, \"image\": {\"@id\": \"https://amadeya26.ru/#/schema/logo/image/\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}, \"openingHours\": [\"\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00\"], \"image\": \"https://amadeya26.ru/wp-content/themes/amadeya-redesign/assets/img/logo.png\", \"sameAs\": []}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalService\", \"name\": \"\\u041f\\u0441\\u0438\\u0445\\u0438\\u0430\\u0442\\u0440\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u043f\\u043e\\u043c\\u043e\\u0449\\u044c \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"areaServed\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"availableChannel\": {\"@type\": \"ServiceChannel\", \"serviceUrl\": \"https://amadeya26.ru/psihiatricheskaya-pomoshh-v-stavropole/\"}, \"provider\": {\"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}}}" }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
