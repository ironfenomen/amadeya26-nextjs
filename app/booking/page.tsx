import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `<main class="page-content">
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">Онлайн-запись</h1>
            <p class="page-description">Запишитесь на прием к специалисту онлайн</p>
        </div>

        <div class="booking-content">
            <div class="booking-form-container">
                <h2>Запись к нашим специалистам</h2>
                <div class="booking-experts">
                    <div class="swiper booking-experts-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="booking-expert-card">
                                    <div class="booking-expert-card__photo">
                                        <img src="/wp-content/themes/amadeya-redesign/assets/img/mutaeva.jpg" alt="Мутаева Ольга Юрьевна" class="booking-expert-card__image">
                                    </div>
                                    <div class="booking-expert-card__info">
                                        <h3 class="booking-expert-card__name">Мутаева Ольга Юрьевна </h3>
                                        <p class="booking-expert-card__specialty">Психиатр, нарколог, психолог, психотерапевт, рефлексотерапевт</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="swiper-slide">
                                <div class="booking-expert-card">
                                    <div class="booking-expert-card__photo">
                                        <img src="/wp-content/themes/amadeya-redesign/assets/img/denisenko.jpg" alt="Денисенко Игорь Александрович" class="booking-expert-card__image">
                                    </div>
                                    <div class="booking-expert-card__info">
                                        <h3 class="booking-expert-card__name">Денисенко Игорь Александрович</h3>
                                        <p class="booking-expert-card__specialty">Психиатр, нарколог, психотерапевт</p>
                                    </div>
                                </div>
                            </div> -->
                            <div class="swiper-slide">
                                <div class="booking-expert-card">
                                    <div class="booking-expert-card__photo">
                                        <img src="/wp-content/themes/amadeya-redesign/assets/img/kron.jpg" alt="Крон Елена Ивановна" class="booking-expert-card__image">
                                    </div>
                                    <div class="booking-expert-card__info">
                                        <h3 class="booking-expert-card__name">Крон Елена Ивановна</h3>
                                        <p class="booking-expert-card__specialty">Психиатр, гирудотерапевт, нарколог, психотерапевт</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="booking-expert-card">
                                    <div class="booking-expert-card__photo">
                                        <img src="/wp-content/themes/amadeya-redesign/assets/img/kamolikova.jpg" alt="Камоликова Жанна Анатольевна" class="booking-expert-card__image">
                                    </div>
                                    <div class="booking-expert-card__info">
                                        <h3 class="booking-expert-card__name">Камоликова Жанна Анатольевна</h3>
                                        <p class="booking-expert-card__specialty">Психиатр, нарколог, психотерапевт</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="booking-expert-card">
                                    <div class="booking-expert-card__photo">
                                        <img src="/wp-content/themes/amadeya-redesign/assets/img/bobrova.jpg" alt="Боброва Александра Николаевна" class="booking-expert-card__image">
                                    </div>
                                    <div class="booking-expert-card__info">
                                        <h3 class="booking-expert-card__name">Боброва Александра Николаевна </h3>
                                        <p class="booking-expert-card__specialty">Психотерапевт, психиатр, психолог</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="booking-experts-pagination"></div>
                    </div>
                    <div class="booking-experts-prev"></div>
                    <div class="booking-experts-next"></div>
                </div>
                <div class="booking-actions booking-actions--single">
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Запишитесь онлайн</button>
                </div>
            </div>

            <div class="booking-info">
                <h3>Информация о записи</h3>
                <div class="info-item">
                    <h4>Время работы:</h4>
                    <p>пн-сб: 7:30-20:00, вс: 7:30-13:00</p>
                </div>
                
                <div class="info-item">
                    <h4>Адрес:</h4>
                    <p>г. Ставрополь, ул. 45 параллель, 2</p>
                </div>
                
                <div class="info-item">
                    <h4>Телефон для записи:</h4>
                    <p><a href="tel:+79888641010">+7 (988) 864-10-10</a></p>
                </div>

                <div class="info-item">
                    <h4>Что взять с собой:</h4>
                    <ul>
                        <li>Паспорт</li>
                        <li>Результаты предыдущих обследований (если есть)</li>
                        <li>Список принимаемых лекарств</li>
                    </ul>
                </div>

                <div class="info-item">
                    <h4>Важная информация:</h4>
                    <ul>
                        <li>Запись производится за 1-2 дня до приема</li>
                        <li>При отмене записи просим сообщить заранее</li>
                        <li>Первичный прием длится 30-60 минут</li>
                        <li>Возможна онлайн-консультация</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Запись к врачу онлайн Ставрополь | Мед. центр Амадея",
  description: "Запись к врачу онлайн в Ставрополе. Медицинский центр «Амадея» - удобная онлайн-запись к специалистам. Психиатрия, терапия, наркология.",
  alternates: { canonical: "https://amadeya26.ru/booking/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Запись к врачу онлайн Ставрополь | Мед. центр Амадея", url: "https://amadeya26.ru/booking/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function BookingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/booking/","url":"https://amadeya26.ru/booking/","name":"Запись к врачу онлайн Ставрополь | Мед. центр Амадея","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T19:08:52+00:00","dateModified":"2025-10-24T19:06:25+00:00","description":"Запись к врачу онлайн в Ставрополе. Медицинский центр «Амадея» - удобная онлайн-запись к специалистам. Психиатрия, терапия, наркология.","breadcrumb":{"@id":"https://amadeya26.ru/booking/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/booking/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/booking/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Онлайн-запись"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041e\\u043d\\u043b\\u0430\\u0439\\u043d-\\u0437\\u0430\\u043f\\u0438\\u0441\\u044c","item":"https:\\/\\/amadeya26.ru\\/booking\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
