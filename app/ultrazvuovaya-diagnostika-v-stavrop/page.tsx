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
                    <span class="breadcrumb-current">Ультразвуковая диагностика (УЗИ) в Ставрополе</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Ультразвуковая диагностика (УЗИ) в Ставрополе</h1>
                        <p class="service-description">Быстрая и безопасная визуализация внутренних органов 
                        на современном оборудовании экспертного класса.</p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Преимущества УЗИ</h2>
                    <p class="service-text">Неинвазивность, отсутствие радиации, высокая информативность и доступность исследования.</p>
                    <p class="service-text">
                        Ультразвуковая диагностика — это современный, безопасный и высокоинформативный метод исследования 
                        внутренних органов и систем организма. УЗИ позволяет визуализировать структуру органов в режиме 
                        реального времени, оценить их размеры, форму, контуры и внутреннюю структуру.
                    </p>
                    <p class="service-text">
                        Преимущества ультразвуковой диагностики включают полную безопасность для пациента (отсутствие 
                        ионизирующего излучения), неинвазивность процедуры, возможность многократных исследований, 
                        высокую информативность и быстроту получения результатов. УЗИ используется как для первичной 
                        диагностики, так и для мониторинга эффективности лечения.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Какие исследования выполняем?</h2>
                    <p class="service-text">УЗИ органов брюшной полости, малого таза, щитовидной железы, сосудов, мягких тканей и др.</p>
                    <p class="service-text">
                        Наша клиника оснащена современным ультразвуковым оборудованием экспертного класса, позволяющим 
                        проводить высокоточную диагностику. Наши специалисты имеют многолетний опыт работы и регулярно 
                        повышают квалификацию, что гарантирует точность и достоверность результатов исследования.
                    </p>
                    <p class="service-text">
                        Мы проводим полный спектр ультразвуковых исследований: органов брюшной полости и забрюшинного пространства, 
                        малого таза, щитовидной железы, молочных желез, сосудов шеи и конечностей, мягких тканей, суставов. 
                        Особое внимание уделяем ультразвуковой диагностике во время беременности, обеспечивая безопасный 
                        мониторинг развития плода.
                    </p>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Виды УЗИ-исследований</h2>
                    <p class="service-text">
                        Наша клиника проводит следующие виды ультразвуковых исследований:
                    </p>
                    <ul class="service-list">
                        <li>УЗИ органов брюшной полости (печень, желчный пузырь, поджелудочная железа, селезенка)</li>
                        <li>УЗИ почек и мочевыводящих путей</li>
                        <li>УЗИ органов малого таза (гинекология, урология)</li>
                        <li>УЗИ щитовидной железы и паращитовидных желез</li>
                        <li>УЗИ молочных желез</li>
                        <li>УЗИ сосудов (допплерография)</li>
                        <li>УЗИ мягких тканей и лимфатических узлов</li>
                        <li>УЗИ суставов</li>
                        <li>УЗИ при беременности (скрининг)</li>
                        <li>УЗИ предстательной железы</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/rahmatulina.jpg" alt="Рахматулина Елена Николаевна" class="specialist-photo">
                        </div>
                    <div class="specialist-info">
                        <h3 class="specialist-name">Рахматулина Елена Николаевна</h3>
                        <p class="specialist-title">Врач УЗИ</p>
                        <p class="specialist-experience">Стаж 30 лет</p>
                    </div>
                </div>
                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/stepanyan.jpg" alt="Степанян Виктория Владимировна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Степанян Виктория Владимировна</h3>
                            <p class="specialist-title">Врач УЗИ</p>
                            <p class="specialist-experience">Стаж 26 лет</p>
                        </div>
                    </div>
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
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Ультразвуковая диагностика (УЗИ) в Ставрополе - Медицинский центр Амадея в Ставрополе",
  description: "Ультразвуковая диагностика (УЗИ) в Ставрополе в клинике «Амадея»: все виды исследований. Запись ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/ultrazvuovaya-diagnostika-v-stavrop/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Ультразвуковая диагностика (УЗИ) в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/ultrazvuovaya-diagnostika-v-stavrop/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://amadeya26.ru/ultrazvuovaya-diagnostika-v-stavrop/\", \"url\": \"https://amadeya26.ru/ultrazvuovaya-diagnostika-v-stavrop/\", \"name\": \"\\u0423\\u043b\\u044c\\u0442\\u0440\\u0430\\u0437\\u0432\\u0443\\u043a\\u043e\\u0432\\u0430\\u044f \\u0434\\u0438\\u0430\\u0433\\u043d\\u043e\\u0441\\u0442\\u0438\\u043a\\u0430 (\\u0423\\u0417\\u0418) \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435 - \\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"isPartOf\": {\"@id\": \"https://amadeya26.ru/#website\"}, \"breadcrumb\": {\"@id\": \"https://amadeya26.ru/ultrazvuovaya-diagnostika-v-stavrop/#breadcrumb\"}, \"inLanguage\": \"ru-RU\", \"potentialAction\": [{\"@type\": \"ReadAction\", \"target\": [\"https://amadeya26.ru/ultrazvuovaya-diagnostika-v-stavrop/\"]}]}, {\"@type\": \"BreadcrumbList\", \"@id\": \"https://amadeya26.ru/ultrazvuovaya-diagnostika-v-stavrop/#breadcrumb\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\\u0413\\u043b\\u0430\\u0432\\u043d\\u0430\\u044f \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0430\", \"item\": \"https://amadeya26.ru/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\\u0423\\u043b\\u044c\\u0442\\u0440\\u0430\\u0437\\u0432\\u0443\\u043a\\u043e\\u0432\\u0430\\u044f \\u0434\\u0438\\u0430\\u0433\\u043d\\u043e\\u0441\\u0442\\u0438\\u043a\\u0430 (\\u0423\\u0417\\u0418) \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}]}, {\"@type\": \"WebSite\", \"@id\": \"https://amadeya26.ru/#website\", \"url\": \"https://amadeya26.ru/\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"publisher\": {\"@id\": \"https://amadeya26.ru/#organization\"}, \"inLanguage\": \"ru-RU\"}, {\"@type\": \"Organization\", \"@id\": \"https://amadeya26.ru/#organization\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"logo\": {\"@type\": \"ImageObject\", \"inLanguage\": \"ru-RU\", \"@id\": \"https://amadeya26.ru/#/schema/logo/image/\", \"url\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"contentUrl\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"width\": 68, \"height\": 68, \"caption\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}, \"image\": {\"@id\": \"https://amadeya26.ru/#/schema/logo/image/\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}, \"openingHours\": [\"\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00\"], \"image\": \"https://amadeya26.ru/wp-content/themes/amadeya-redesign/assets/img/logo.png\", \"sameAs\": []}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalService\", \"name\": \"\\u0423\\u043b\\u044c\\u0442\\u0440\\u0430\\u0437\\u0432\\u0443\\u043a\\u043e\\u0432\\u0430\\u044f \\u0434\\u0438\\u0430\\u0433\\u043d\\u043e\\u0441\\u0442\\u0438\\u043a\\u0430 (\\u0423\\u0417\\u0418) \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"areaServed\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"availableChannel\": {\"@type\": \"ServiceChannel\", \"serviceUrl\": \"https://amadeya26.ru/ultrazvuovaya-diagnostika-v-stavrop/\"}, \"provider\": {\"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}}}" }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
