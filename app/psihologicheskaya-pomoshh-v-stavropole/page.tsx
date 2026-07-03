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
                    <span class="breadcrumb-current">Психологическая помощь в Ставрополе</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Психологическая помощь в Ставрополе</h1>
                        <p class="service-description">
                            Консультации психолога помогают разобраться в сложных жизненных ситуациях, 
                            улучшить эмоциональное состояние и наладить отношения с собой и окружающими.
                        </p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Когда стоит обратиться к психологу?</h2>
                    <p class="service-text">Тревога, сниженное настроение, трудности в отношениях, стресс, выгорание, 
                    кризисы, проблемы самооценки — со всеми этими запросами мы работаем бережно и профессионально.</p>
                    <p class="service-text">
                        Психологическое консультирование помогает справиться с жизненными трудностями, улучшить эмоциональное 
                        состояние и развить навыки эффективного взаимодействия с окружающими. Наши специалисты работают с 
                        широким спектром проблем: от повседневного стресса до глубоких личностных кризисов.
                    </p>
                    <p class="service-text">
                        Мы используем различные психологические подходы: когнитивно-поведенческий, гештальт-подход, 
                        психодинамический, экзистенциальный и другие методы, подбирая наиболее подходящий для каждого клиента.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Индивидуальная работа</h2>
                    <p class="service-text">Мы подбираем подход и темп терапии под клиента: краткосрочная поддержка 
                    или долгосрочная работа с устойчивыми паттернами и глубинными причинами.</p>
                    <p class="service-text">
                        Каждая консультация проходит в комфортной и безопасной обстановке, где вы можете открыто говорить 
                        о своих переживаниях. Наши психологи не оценивают и не осуждают, а помогают разобраться в ситуации 
                        и найти оптимальные решения.
                    </p>
                    <p class="service-text">
                        Мы также проводим семейное консультирование, помогая наладить отношения между супругами, 
                        родителями и детьми, и групповые занятия для развития коммуникативных навыков и эмоциональной поддержки.
                    </p>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Сферы работы психолога</h2>
                    <p class="service-text">
                        Наши психологи работают с различными жизненными ситуациями и проблемами:
                    </p>
                    <ul class="service-list">
                        <li>Психологическая поддержка при стрессе и тревожности</li>
                        <li>Работа с депрессивными состояниями и апатией</li>
                        <li>Помощь в преодолении жизненных кризисов и потерь</li>
                        <li>Консультирование по вопросам семейных отношений</li>
                        <li>Работа с самооценкой и уверенностью в себе</li>
                        <li>Помощь при профессиональном выгорании</li>
                        <li>Развитие навыков коммуникации и эмоционального интеллекта</li>
                        <li>Поддержка при принятии важных жизненных решений</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                        <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/borisova.jpg" alt="Борисова Елена Алексеевна" class="specialist-photo">
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
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/pahomova.jpg" alt="Пахомова Лидия Евгеньевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Пахомова Лидия Евгеньевна</h3>
                            <p class="specialist-title">Психолог, детский психолог</p>
                            <p class="specialist-experience">Стаж 19 лет</p>
                        </div>
                    </div>

                    <!-- Плейсхолдер для добавления врача -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/lavrentev.jpg" alt="Лаврентьев Илья Дмитриевич" class="specialist-photo">
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
                            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/puchkova.jpg" alt="Пучкова Анастасия Андреевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Пучкова Анастасия Андреевна</h3>
                            <p class="specialist-title">Клинический психолог, психолог</p>
                            <p class="specialist-experience">Стаж 6 лет</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Психологическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе",
  description: "Психологическая помощь в Ставрополе в клинике «Амадея»: консультации психолога. Запись ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Психологическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/\", \"url\": \"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/\", \"name\": \"\\u041f\\u0441\\u0438\\u0445\\u043e\\u043b\\u043e\\u0433\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u043f\\u043e\\u043c\\u043e\\u0449\\u044c \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435 - \\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"isPartOf\": {\"@id\": \"https://amadeya26.ru/#website\"}, \"breadcrumb\": {\"@id\": \"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/#breadcrumb\"}, \"inLanguage\": \"ru-RU\", \"potentialAction\": [{\"@type\": \"ReadAction\", \"target\": [\"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/\"]}]}, {\"@type\": \"BreadcrumbList\", \"@id\": \"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/#breadcrumb\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\\u0413\\u043b\\u0430\\u0432\\u043d\\u0430\\u044f \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0430\", \"item\": \"https://amadeya26.ru/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\\u041f\\u0441\\u0438\\u0445\\u043e\\u043b\\u043e\\u0433\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u043f\\u043e\\u043c\\u043e\\u0449\\u044c \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}]}, {\"@type\": \"WebSite\", \"@id\": \"https://amadeya26.ru/#website\", \"url\": \"https://amadeya26.ru/\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"publisher\": {\"@id\": \"https://amadeya26.ru/#organization\"}, \"inLanguage\": \"ru-RU\"}, {\"@type\": \"Organization\", \"@id\": \"https://amadeya26.ru/#organization\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"logo\": {\"@type\": \"ImageObject\", \"inLanguage\": \"ru-RU\", \"@id\": \"https://amadeya26.ru/#/schema/logo/image/\", \"url\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"contentUrl\": \"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png\", \"width\": 68, \"height\": 68, \"caption\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\"}, \"image\": {\"@id\": \"https://amadeya26.ru/#/schema/logo/image/\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"url\": \"https://amadeya26.ru/\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}, \"openingHours\": [\"\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00\"], \"image\": \"https://amadeya26.ru/wp-content/themes/amadeya-redesign/assets/img/logo.png\", \"sameAs\": []}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalService\", \"name\": \"\\u041f\\u0441\\u0438\\u0445\\u043e\\u043b\\u043e\\u0433\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u043f\\u043e\\u043c\\u043e\\u0449\\u044c \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"areaServed\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"availableChannel\": {\"@type\": \"ServiceChannel\", \"serviceUrl\": \"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/\"}, \"provider\": {\"@type\": \"MedicalClinic\", \"name\": \"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435\", \"telephone\": \"+7 (988) 864-10-10\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2\", \"addressLocality\": \"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c\", \"addressCountry\": \"RU\"}}}" }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
