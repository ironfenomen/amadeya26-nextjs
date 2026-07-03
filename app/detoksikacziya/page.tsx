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
                    <span class="breadcrumb-current">Дезинтоксикация в Ставрополе</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Дезинтоксикация в Ставрополе</h1>
                        <p class="service-description">Очищение организма, снятие интоксикации и восстановление водно-солевого баланса.</p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Когда нужна детокс-терапия</h2>
                    <p class="service-text">После длительных запоев, при отравлениях, перед началом программы лечения зависимости.</p>
                    <p class="service-text">
                        Дезинтоксикация — это комплекс медицинских мероприятий, направленных на очищение организма от токсинов 
                        и продуктов распада алкоголя или наркотических веществ. Эта процедура является первым и важнейшим этапом 
                        лечения зависимости, так как позволяет вывести из организма вредные вещества и подготовить пациента к 
                        дальнейшей терапии.
                    </p>
                    <p class="service-text">
                        Детокс-терапия особенно необходима после длительных запоев, при тяжёлой интоксикации, абстинентном синдроме 
                        или перед началом комплексной программы лечения зависимости. Процедура проводится под постоянным наблюдением 
                        врача-нарколога и включает инфузионную терапию, витаминотерапию и симптоматическое лечение.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Что входит</h2>
                    <p class="service-text">Инфузионная терапия, витамины, сорбенты, кардиомониторинг и наблюдение врача.</p>
                    <p class="service-text">
                        Дезинтоксикационная терапия включает комплекс мероприятий, направленных на быстрое и безопасное очищение 
                        организма от токсинов. Основной метод — инфузионная терапия, при которой пациенту внутривенно вводятся 
                        специальные растворы, способствующие выведению токсинов и восстановлению водно-электролитного баланса.
                    </p>
                    <p class="service-text">
                        Параллельно с инфузионной терапией проводится витаминотерапия для восполнения дефицита витаминов группы B, 
                        витамина C и других микроэлементов. При необходимости назначаются гепатопротекторы для защиты печени, 
                        ноотропы для улучшения работы мозга и другие препараты в зависимости от состояния пациента.
                    </p>
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Компоненты дезинтоксикации</h2>
                    <p class="service-text">
                        Дезинтоксикационная терапия включает следующие компоненты:
                    </p>
                    <ul class="service-list">
                        <li>Инфузионная терапия — внутривенное введение солевых растворов</li>
                        <li>Форсированный диурез — усиление выведения токсинов через почки</li>
                        <li>Витаминотерапия — восполнение дефицита витаминов и микроэлементов</li>
                        <li>Гепатопротекторы — защита и восстановление функции печени</li>
                        <li>Ноотропы — улучшение работы центральной нервной системы</li>
                        <li>Сорбенты — связывание и выведение токсинов из кишечника</li>
                        <li>Кардиомониторинг — контроль работы сердечно-сосудистой системы</li>
                        <li>Симптоматическое лечение — снятие головной боли, тошноты, тревоги</li>
                        <li>Постоянное наблюдение врача — контроль состояния пациента</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                        <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/kron.jpg" alt="Крон Елена Ивановна" class="specialist-photo">
                    </div>
                    <div class="specialist-info">
                        <h3 class="specialist-name">Крон Елена Ивановна</h3>
                        <p class="specialist-title">Психиатр, гирудотерапевт, нарколог, психотерапевт</p>
                        <p class="specialist-experience">Стаж 32 года</p>
                    </div>
                </div>
                    <!-- Плейсхолдер для добавления врача -->
                    <!-- <div class="specialist-card">
                        <div class="specialist-image">
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/vodolazhski.jpg" alt="Водолажский Андрей Федорович" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Водолажский Андрей Федорович</h3>
                            <p class="specialist-title">Психотерапевт, нарколог</p>
                            <p class="specialist-experience">Стаж 37 лет</p>
                        </div>
                    </div> -->

                    <!-- Плейсхолдер для добавления врача -->
                   <!-- <div class="specialist-card">
                        <div class="specialist-image">
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/denisenko.jpg" alt="Денисенко Игорь Александрович" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Денисенко Игорь Александрович</h3>
                            <p class="specialist-title">Психиатр, нарколог, психотерапевт</p>
                            <p class="specialist-experience">Стаж 17 лет</p>
                        </div>
                    </div> -->

                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/kamolikova.jpg" alt="Камоликова Жанна Анатольевна" class="specialist-photo">
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
  title: "Дезинтоксикация в Ставрополе - Медицинский центр Амадея в Ставрополе",
  description: "Дезинтоксикация (детоксикация) в Ставрополе в клинике «Амадея». Запись ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/detoksikacziya/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Дезинтоксикация в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/detoksikacziya/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://amadeya26.ru/detoksikacziya/\", \"url\": \"https://amadeya26.ru/detoksikacziya/\", \"name\": \"\\u0414\\u0435\\u0437\\u0438\\u043d\\u0442\\u043e\\u043a\\u0441\\u0438\\u043a\\u0430\\u0446\\u0438\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435 - \\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"isPartOf\": {\"@id\": \"https://amadeya26.ru/#website\"}, \"breadcrumb\": {\"@id\": \"https://amadeya26.ru/detoksikacziya/#breadcrumb\"}, \"inLanguage\": \"ru-RU\", \"potentialAction\": [{\"@type\": \"ReadAction\", \"target\": [\"https://amadeya26.ru/detoksikacziya/\"]}]}, {\"@type\": \"BreadcrumbList\", \"@id\": \"https://amadeya26.ru/detoksikacziya/#breadcrumb\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\\u0413\\u043b\\u0430\\u0432\\u043d\\u0430\\u044f \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0430\", \"item\": \"https://amadeya26.ru/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\\u0414\\u0435\\u0437\\u0438\\u043d\\u0442\\u043e\\u043a\\u0441\\u0438\\u043a\\u0430\\u0446\\u0438\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}]}, {\"@type\": \"WebSite\", \"@id\": \"https://amadeya26.ru/#website\", \"url\": \"https://amadeya26.ru/\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"publisher\": {\"@id\": \"https://amadeya26.ru/#organization\"}, \"inLanguage\": \"ru-RU\"}, {\"@type\": \"Organization\", \"@id\": \"https://amadeya26.ru/#organization\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"logo\": {\"@type\": \"ImageObject\", \"inLanguage\": \"ru-RU\", \"@id\": \"https://amadeya26.ru/#/schema/logo/image/\", \"url\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"contentUrl\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"width\": 68, \"height\": 68, \"caption\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}, \"image\": {\"@id\": \"https://amadeya26.ru/#/schema/logo/image/\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}, \"openingHours\": [\"\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00\"], \"image\": \"https://amadeya26.ru/wp-content/themes/amadeya-redesign/assets/img/logo.png\", \"sameAs\": []}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalService\", \"name\": \"\\u0414\\u0435\\u0437\\u0438\\u043d\\u0442\\u043e\\u043a\\u0441\\u0438\\u043a\\u0430\\u0446\\u0438\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"areaServed\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"availableChannel\": {\"@type\": \"ServiceChannel\", \"serviceUrl\": \"https://amadeya26.ru/detoksikacziya/\"}, \"provider\": {\"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}}}" }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
