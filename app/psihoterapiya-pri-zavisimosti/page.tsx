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
                    <span class="breadcrumb-current">Психотерапия при зависимости</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Психотерапия при зависимости</h1>
                        <p class="service-description">Формирование мотивации, проработка причин зависимости, развитие навыков трезвой жизни.</p>
                        <button type="button" class="service-call-button" id="cta-link-service">Позвонить</button>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Цели терапии</h2>
                    <p class="service-text">Устойчивость к триггерам, работа с эмоциями, восстановление отношений, 
                    повышение качества жизни и профилактика срывов.</p>
                    <p class="service-text">
                        Психотерапия при зависимости — это важнейший компонент комплексного лечения, направленный на работу с 
                        психологическими причинами зависимости, формирование мотивации к выздоровлению и развитие навыков жизни 
                        без психоактивных веществ. Терапия помогает пациентам понять, почему они начали употреблять, какие 
                        эмоциональные проблемы они пытались решить с помощью веществ, и как научиться справляться с трудностями 
                        здоровыми способами.
                    </p>
                    <p class="service-text">
                        Основные цели психотерапии при зависимости включают: формирование устойчивости к триггерам, которые 
                        провоцируют употребление; развитие навыков эмоциональной регуляции; восстановление разрушенных отношений 
                        с близкими; повышение самооценки и качества жизни; профилактику рецидивов и поддержание трезвости в 
                        долгосрочной перспективе. Терапия также помогает пациентам найти новые смыслы и цели в жизни, восстановить 
                        социальные связи и вернуться к полноценной жизни в обществе.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Методы</h2>
                    <p class="service-text">КПТ, мотивационное интервью, 12-шаговые элементы, семейная и групповая терапия.</p>
                    <p class="service-text">
                        В работе с зависимостями используются различные методы и подходы, каждый из которых имеет свои преимущества. 
                        Когнитивно-поведенческая терапия (КПТ) помогает пациентам выявить и изменить деструктивные мысли и поведенческие 
                        паттерны, связанные с употреблением. Мотивационное интервью способствует формированию внутренней мотивации к 
                        изменениям и принятию решения о лечении.
                    </p>
                    <p class="service-text">
                        Элементы 12-шаговой программы помогают пациентам принять свою беспомощность перед зависимостью, найти 
                        поддержку в группе и работать над личностным ростом. Семейная терапия направлена на работу с созависимостью, 
                        восстановление здоровых границ и улучшение коммуникации в семье. Групповая терапия предоставляет пациентам 
                        возможность получить поддержку от людей, которые проходят через те же трудности, и научиться на опыте других.
                    </p>
                    <button type="button" class="service-booking-button booking-medflex">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Формы психотерапии</h2>
                    <p class="service-text">
                        Психотерапия при зависимости проводится в различных форматах:
                    </p>
                    <ul class="service-list">
                        <li>Индивидуальная терапия — работа один на один с психотерапевтом</li>
                        <li>Групповая терапия — работа в группе с другими пациентами</li>
                        <li>Семейная терапия — работа с семьёй пациента</li>
                        <li>Парная терапия — работа с партнёром пациента</li>
                        <li>Краткосрочная терапия — интенсивная работа в течение нескольких недель</li>
                        <li>Долгосрочная терапия — продолжительная работа в течение месяцев</li>
                        <li>Поддерживающая терапия — регулярные встречи для поддержания результата</li>
                        <li>Кризисная терапия — помощь в острых ситуациях и при угрозе срыва</li>
                        <li>Онлайн-терапия — дистанционная работа через видеосвязь</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/bobrova.jpg" alt="Боброва Александра Николаевна" class="specialist-photo">
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
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/kamolikova.jpg" alt="Камоликова Жанна Анатольевна" class="specialist-photo">
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
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/mutaeva.jpg" alt="Мутаева Ольга Юрьевна" class="specialist-photo">
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
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/kumratova.jpg" alt="Кумратова Наталья Александровна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Кумратова Наталья Александровна</h3>
                            <p class="specialist-title">Психиатр, психотерапевтг</p>
                            <p class="specialist-experience">Стаж 23 года</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Психотерапия при зависимости - Медицинский центр Амадея в Ставрополе",
  description: "Психотерапия при зависимости в Ставрополе: работа с причинами зависимости. Запись ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/psihoterapiya-pri-zavisimosti/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Психотерапия при зависимости - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/psihoterapiya-pri-zavisimosti/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://amadeya26.ru/psihoterapiya-pri-zavisimosti/\", \"url\": \"https://amadeya26.ru/psihoterapiya-pri-zavisimosti/\", \"name\": \"\\u041f\\u0441\\u0438\\u0445\\u043e\\u0442\\u0435\\u0440\\u0430\\u043f\\u0438\\u044f \\u043f\\u0440\\u0438 \\u0437\\u0430\\u0432\\u0438\\u0441\\u0438\\u043c\\u043e\\u0441\\u0442\\u0438 - \\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"isPartOf\": {\"@id\": \"https://amadeya26.ru/#website\"}, \"breadcrumb\": {\"@id\": \"https://amadeya26.ru/psihoterapiya-pri-zavisimosti/#breadcrumb\"}, \"inLanguage\": \"ru-RU\", \"potentialAction\": [{\"@type\": \"ReadAction\", \"target\": [\"https://amadeya26.ru/psihoterapiya-pri-zavisimosti/\"]}]}, {\"@type\": \"BreadcrumbList\", \"@id\": \"https://amadeya26.ru/psihoterapiya-pri-zavisimosti/#breadcrumb\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\\u0413\\u043b\\u0430\\u0432\\u043d\\u0430\\u044f \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0430\", \"item\": \"https://amadeya26.ru/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\\u041f\\u0441\\u0438\\u0445\\u043e\\u0442\\u0435\\u0440\\u0430\\u043f\\u0438\\u044f \\u043f\\u0440\\u0438 \\u0437\\u0430\\u0432\\u0438\\u0441\\u0438\\u043c\\u043e\\u0441\\u0442\\u0438\"}]}, {\"@type\": \"WebSite\", \"@id\": \"https://amadeya26.ru/#website\", \"url\": \"https://amadeya26.ru/\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"publisher\": {\"@id\": \"https://amadeya26.ru/#organization\"}, \"inLanguage\": \"ru-RU\"}, {\"@type\": \"Organization\", \"@id\": \"https://amadeya26.ru/#organization\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"logo\": {\"@type\": \"ImageObject\", \"inLanguage\": \"ru-RU\", \"@id\": \"https://amadeya26.ru/#/schema/logo/image/\", \"url\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"contentUrl\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"width\": 68, \"height\": 68, \"caption\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}, \"image\": {\"@id\": \"https://amadeya26.ru/#/schema/logo/image/\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}, \"openingHours\": [\"\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00\"], \"image\": \"https://amadeya26.ru/wp-content/themes/amadeya-redesign/assets/img/logo.png\", \"sameAs\": []}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalService\", \"name\": \"\\u041f\\u0441\\u0438\\u0445\\u043e\\u0442\\u0435\\u0440\\u0430\\u043f\\u0438\\u044f \\u043f\\u0440\\u0438 \\u0437\\u0430\\u0432\\u0438\\u0441\\u0438\\u043c\\u043e\\u0441\\u0442\\u0438\", \"areaServed\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"availableChannel\": {\"@type\": \"ServiceChannel\", \"serviceUrl\": \"https://amadeya26.ru/psihoterapiya-pri-zavisimosti/\"}, \"provider\": {\"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}}}" }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
