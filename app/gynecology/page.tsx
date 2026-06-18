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
                    <span class="breadcrumb-current">Гинекология</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Гинекология</h1>
                        <p class="service-description">Профилактика, диагностика и лечение заболеваний женской 
                        репродуктивной системы. Забота о здоровье женщины на всех этапах жизни.</p>
                        <a href="tel:+79888641010" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Направления работы</h2>
                    <p class="service-text">Профилактические осмотры, лечение воспалительных заболеваний, 
                    ведение беременности, подбор контрацепции, коррекция гормональных нарушений.</p>
                    <p class="service-text">
                        Гинекология — это область медицины, занимающаяся здоровьем женской репродуктивной системы. 
                        Наши гинекологи обеспечивают комплексную помощь женщинам на всех этапах жизни: от подросткового 
                        периода до менопаузы. Мы проводим профилактические осмотры, диагностику и лечение различных 
                        гинекологических заболеваний.
                    </p>
                    <p class="service-text">
                        Особое внимание мы уделяем раннему выявлению заболеваний, включая онкологические патологии. 
                        Регулярные профилактические осмотры позволяют своевременно обнаружить проблемы и начать лечение 
                        на ранних стадиях, что значительно повышает эффективность терапии.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Деликатный подход</h2>
                    <p class="service-text">Гарантируем конфиденциальность и уважение к личным границам. 
                    Индивидуальные схемы лечения и сопровождение на каждом этапе.</p>
                    <p class="service-text">
                        Каждая пациентка получает индивидуальный подход с учётом её возраста, образа жизни, 
                        репродуктивных планов и особенностей здоровья. Мы создаём комфортную и доверительную атмосферу, 
                        где можно открыто обсуждать любые вопросы, связанные с женским здоровьем.
                    </p>
                    <p class="service-text">
                        Наши специалисты используют современные методы диагностики и лечения, включая ультразвуковые исследования, 
                        кольпоскопию, лабораторные анализы и малоинвазивные хирургические вмешательства. Мы обеспечиваем 
                        комплексное ведение беременности, помощь в планировании семьи и решение проблем бесплодия.
                    </p>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Сферы гинекологии</h2>
                    <p class="service-text">
                        Наши гинекологи работают в следующих направлениях:
                    </p>
                    <ul class="service-list">
                        <li>Профилактические осмотры и скрининг онкологических заболеваний</li>
                        <li>Лечение воспалительных заболеваний органов малого таза</li>
                        <li>Коррекция менструального цикла и гормональных нарушений</li>
                        <li>Подбор и установка внутриматочных контрацептивов</li>
                        <li>Планирование и ведение беременности</li>
                        <li>Лечение бесплодия и невынашивания беременности</li>
                        <li>Климактерические расстройства и менопауза</li>
                        <li>Малоинвазивная хирургия (гистероскопия, лапароскопия)</li>
                        <li>Эстетическая и реконструктивная гинекология</li>
                    </ul>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
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

                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-redesign/assets/img/antashan.jpg" alt="Анташян Галина Георгиевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Анташян Галина Георгиевна</h3>
                            <p class="specialist-title">Гинеколог, акушер</p>
                            <p class="specialist-experience">Стаж 41 год</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Гинекология - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/gynecology/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Гинекология - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/gynecology/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function GynecologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/gynecology/","url":"https://amadeya26.ru/gynecology/","name":"Гинекология - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T11:26:29+00:00","dateModified":"2025-12-18T15:45:26+00:00","breadcrumb":{"@id":"https://amadeya26.ru/gynecology/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/gynecology/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/gynecology/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Гинекология"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0413\\u0438\\u043d\\u0435\\u043a\\u043e\\u043b\\u043e\\u0433\\u0438\\u044f","item":"https:\\/\\/amadeya26.ru\\/gynecology\\/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalService","name":"\\u0413\\u0438\\u043d\\u0435\\u043a\\u043e\\u043b\\u043e\\u0433\\u0438\\u044f","description":"","areaServed":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","availableChannel":{"@type":"ServiceChannel","serviceUrl":"https:\\/\\/amadeya26.ru\\/gynecology\\/"},"provider":{"@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"}}}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
