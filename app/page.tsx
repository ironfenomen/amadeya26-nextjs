import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

const pageContent = `

<main>
    <!-- Баннер -->
    <section class="hero-banner">
        <div class="container">
            <div class="hero-banner__content">
                <div class="hero-banner__content-left">
                    <div class="hero-banner__text-content">
                        <p class="hero-banner__title">Медицинский центр «АМАДЕЯ»</p>
                        <p class="hero-banner__subtitle">Комплексный подход к лечению — ключ к достижению устойчивых
                            результатов!</p>
                    </div>
                    <div class="hero-banner__buttons-container">
                        <div class="hero-banner__actions">
                            <a href="/booking/"
                                class="hero-banner__button hero-banner__button--primary">Получить консультацию</a>
                            <a href="https://wa.me/+79888641010"
                                class="hero-banner__button hero-banner__button--secondary" target="_blank"
                                rel="noopener">Написать на WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Быстрые услуги -->
    <section class="quick-services">
        <div class="container">
            <div class="quick-services__grid">
                <!-- Блок 1: Консультация врачей -->
                <div class="quick-service-card">
                    <div class="quick-service-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <title>Heart-pulse-fill SVG Icon</title>
                            <g fill="currentColor">
                                <path
                                    d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642l-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                                <path
                                    d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956L6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                            </g>
                        </svg>
                    </div>
                    <div class="quick-service-card__content">
                        <h3 class="quick-service-card__title">Консультация врачей</h3>
                        <p class="quick-service-card__description">Профессиональные консультации врачей различных
                            специальностей. Получите квалифицированную помощь и рекомендации по лечению.</p>
                        <a href="/booking/"
                            class="quick-service-card__button">Записаться</a>
                    </div>
                </div>

                <!-- Блок 2: Диагностика -->
                <div class="quick-service-card">
                    <div class="quick-service-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                            <title>Diagnostic SVG Icon</title>
                            <path fill="currentColor"
                                d="M1920 128v1792H128V128zM256 256v1024h150l109-109q19-19 45-19t45 19l177 176l244-947q5-21 22-34t40-14q23 0 40 13t22 36l102 417h156q22 0 39 13t23 35l72 286h250V256zm1536 1536v-512h-300q-23 0-40-13t-22-36l-72-285h-156q-23 0-40-13t-22-36l-54-218l-208 809q-5 21-22 34t-40 14q-26 0-45-19l-211-211l-83 83q-19 19-45 19H256v384z" />
                        </svg>
                    </div>
                    <div class="quick-service-card__content">
                        <h3 class="quick-service-card__title">Диагностика</h3>
                        <p class="quick-service-card__description">Современное диагностическое оборудование для точной
                            постановки диагноза. УЗИ, лабораторные анализы и другие виды обследований.</p>
                        <a href="/services/"
                            class="quick-service-card__button">Узнать больше</a>
                    </div>
                </div>

                <!-- Блок 3: Вызов врача на дом -->
                <div class="quick-service-card">
                    <div class="quick-service-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <title>Ambulance SVG Icon</title>
                            <path fill="currentColor"
                                d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z" />
                        </svg>
                    </div>
                    <div class="quick-service-card__content">
                        <h3 class="quick-service-card__title">Вызов врача на дом</h3>
                        <p class="quick-service-card__description">Вызов врача на дом в удобное для вас время.
                            Экстренная помощь и плановые визиты специалистов на дому.</p>
                        <a href="tel:+79888641010"
                            class="quick-service-card__button">Вызвать врача</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Ключевые услуги -->
    <section class="key-services">
        <div class="container">
            <div class="key-services__title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Task-list-square-ltr-20-regular SVG Icon</title>
                    <path fill="currentColor"
                        d="M9.354 7.104a.5.5 0 0 0-.708-.708L7.234 7.808l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0M11 12a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm-.5-4.5A.5.5 0 0 1 11 7h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                </svg>
                <h2><span>Услуги</span> клиники</h2>
            </div>
            <div class="key-services__grid">
                <!-- Карточка 1 -->
                <a href="/psychiatry/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/stock1.jpg"
                            alt="Консультация психиатра">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Консультация психиатра</h4>
                        </div>
                        <p class="key-services__description">Профессиональный психиатр поможет справиться с любыми
                            эмоциональными расстройствами.</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <!-- Карточка 2 -->
                <a href="/psychotherapy/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/stock2.jpg"
                            alt="Консультация психотерапевта">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Консультация психотерапевта</h4>
                        </div>
                        <p class="key-services__description">Решите любые психологические проблемы с профессиональным
                            психотерапевтом.</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <!-- Карточка 3 -->
                <a href="/stavropol-treatment/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/stock14.jpg"
                            alt="Лечение зависимостей в Ставрополе">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Лечение зависимостей в Ставрополе</h4>
                        </div>
                        <p class="key-services__description">Комплексное лечение различных зависимостей в нашем центре
                        </p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <!-- Карточка 4 -->
                <a href="/dermatology/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/stock7.jpg"
                            alt="Дерматология">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Дерматология</h4>
                        </div>
                        <p class="key-services__description">Диагностика и лечение кожных заболеваний</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <!-- Карточка 5 -->
                <a href="/detoxification/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/stock13.jpg"
                            alt="Дезинтоксикация">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Дезинтоксикация</h4>
                        </div>
                        <p class="key-services__description">Очищение организма от токсинов, восстановление после
                            интоксикации</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <!-- Карточка 6 -->
                <a href="/gymnotherapy/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/stock6.jpeg"
                            alt="Гирудотерапия">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Гирудотерапия</h4>
                        </div>
                        <p class="key-services__description">Лечение пиявками, восстановление кровообращения</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <!-- Карточка 7 -->
                <a href="/gynecology/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/stock8.jpg"
                            alt="Гинекология">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Гинекология</h4>
                        </div>
                        <p class="key-services__description">Женское здоровье, диагностика и лечение гинекологических
                            заболеваний</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <!-- Карточка 8 -->
                <a href="/narcologist-consultation/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-redesign/assets/img/stock10.jpg"
                            alt="Консультация нарколога">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Консультация нарколога</h4>
                        </div>
                        <p class="key-services__description">Первичная консультация нарколога, диагностика, составление
                            плана лечения</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

            </div>
        </div>
    </section>

    <!-- Специалисты клиники -->
    <section class="experts" id="experts">
        <div class="container">
            <div class="experts__title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <title>User-doctor SVG Icon</title>
                    <path fill="currentColor"
                        d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1c-6-.6-12.1-.9-18.3-.9h-91.4c-6.2 0-12.3.3-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7zM144 448a24 24 0 1 0 0-48a24 24 0 1 0 0 48" />
                </svg>
                <h2><span>Специалисты</span> клиники</h2>
            </div>
            <div class="experts__carousel">
                <div class="swiper experts-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-redesign/assets/img/mutaeva.jpg"
                                        alt="Мутаева Ольга Юрьевна" class="expert-card__image">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Мутаева Ольга Юрьевна</h3>
                                    <p class="expert-card__specialty">Психиатр, клинический психолог, нарколог,
                                        психолог, психотерапевт</p>
                                    <p class="expert-card__experience">Стаж 21 год</p>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-redesign/assets/img/kron.jpg"
                                        alt="Крон Елена Ивановна" class="expert-card__image">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Крон Елена Ивановна</h3>
                                    <p class="expert-card__specialty">Психиатр, гирудотерапевт, нарколог, психотерапевт
                                    </p>
                                    <p class="expert-card__experience">Стаж 32 года</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-redesign/assets/img/kamolikova.jpg"
                                        alt="Камоликова Жанна Анатольевна" class="expert-card__image">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Камоликова Жанна Анатольевна</h3>
                                    <p class="expert-card__specialty">Психиатр, нарколог, психотерапевт</p>
                                    <p class="expert-card__experience">Стаж 21 год</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-redesign/assets/img/bobrova.jpg"
                                        alt="Боброва Александра Николаевна" class="expert-card__image">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Боброва Александра Николаевна</h3>
                                    <p class="expert-card__specialty">Психотерапевт, психиатр, психолог</p>
                                    <p class="expert-card__experience">Стаж 22 года</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-redesign/assets/img/kumratova.jpg"
                                        alt="Кумратова Наталья Александровна" class="expert-card__image">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Кумратова Наталья Александровна</h3>
                                    <p class="expert-card__specialty">Психиатр, психотерапевт</p>
                                    <p class="expert-card__experience">Стаж 23 года</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-redesign/assets/img/mozharuk.jpg"
                                        alt="Можарук Дарья Сергеевна" class="expert-card__image">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Можарук Дарья Сергеевна</h3>
                                    <p class="expert-card__specialty">Терапевт, кардиолог, ревматолог</p>
                                    <p class="expert-card__experience">Стаж 6 лет</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-redesign/assets/img/boyunsuzova.jpg"
                                        alt="Боюнсузова Зухра Руслановна" class="expert-card__image">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Боюнсузова Зухра Руслановна</h3>
                                    <p class="expert-card__specialty">Невролог</p>
                                    <p class="expert-card__experience">Стаж 7 лет</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-redesign/assets/img/borisova.jpg"
                                        alt="Борисова Елена Алексеевна" class="expert-card__image">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Борисова Елена Алексеевна </h3>
                                    <p class="expert-card__specialty">Клинический психолог, психолог</p>
                                    <p class="expert-card__experience">Стаж 15 лет</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-redesign/assets/img/lavrentev.jpg"
                                        alt="Лаврентьев Илья Дмитриевич" class="expert-card__image">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Лаврентьев Илья Дмитриевич </h3>
                                    <p class="expert-card__specialty">Клинический психолог, психолог</p>
                                    <p class="expert-card__experience">Стаж 10 лет</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="swiper-button-prev experts__arrow experts__arrow--prev">
                    <svg width="32" height="32" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
                            fill="currentColor" />
                    </svg>
                </div>
                <div class="swiper-button-next experts__arrow experts__arrow--next">
                    <svg width="32" height="32" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M338.752 919.296a64 64 0 0 1 0-90.496L655.552 512l-316.8-316.8a64 64 0 0 1 90.496-90.496l362.048 362.048a64 64 0 0 1 0 90.496L429.248 919.296a64 64 0 0 1-90.496 0"
                            fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <!-- Запись на прием и вызов врача -->
    <section class="booking" id="booking">
        <div class="container">
            <div class="booking__content">
                <div class="booking__top-button">
                    <button type="button" class="booking__appointment-button" id="medflex-booking-trigger">Записаться на
                        приём</button>
                </div>
                <div class="booking__title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <title>House-check SVG Icon</title>
                        <g fill="currentColor">
                            <path
                                d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
                            <path
                                d="M12.5 16a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1.679-4.493l-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547l1.17-1.951a.5.5 0 1 1 .858.514" />
                        </g>
                    </svg>
                    <h2><span>Выезд врача</span> на дом</h2>
                </div>
                <div class="booking__main-content">
                    <div class="booking__text-content">
                        <p class="booking__description">Если вы столкнулись с болезнью, не отчаивайтесь — специалисты
                            клиники «Амадея» всегда готовы прийти на помощь! Мы быстро и эффективно лечим вирусные,
                            инфекционные и психические заболевания и другие заболевания. Оказываем психологическую
                            помощь.</p>
                        <p class="booking__description">Вы можете вызвать врача на дом. Для этого просто свяжитесь с
                            нами по телефону или оставьте заявку на сайте.</p>
                    </div>
                    <div class="booking__bottom-button">
                        <button type="button" class="site-header__button" id="cta-link-booking">Вызвать врача</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Отзывы пациентов -->
    <section class="reviews" id="reviews">
        <div class="container">
            <div class="reviews__block">
                <div class="reviews__title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <title>Review-response-solid SVG Icon</title>
                        <path fill="currentColor"
                            d="M2029 1939q19 19 19 45t-19 45t-45 19t-45-19l-785-784q-95 80-210 121t-240 42q-97 0-187-25t-168-71t-143-110t-110-142t-71-169T0 704q0-97 25-187t71-168t110-143T348 96t169-71T704 0q97 0 187 25t168 71t143 110t110 142t71 169t25 187q0 124-41 239t-122 211zM1146 525l-135-135l-435 434l-156-156l-136 136l292 292z" />
                    </svg>
                    <h2><span>Отзывы</span> пациентов</h2>
                </div>
                <div class="reviews__carousel">
                    <div class="swiper reviews-swiper">
                        <div class="swiper-wrapper">
                            <!-- Отзыв 1 -->
                            <div class="swiper-slide">
                                <div class="review-card">
                                    <div class="review-card__header">
                                        <h4 class="review-card__name">Татьяна Л.</h4>
                                        <div class="review-card__rating">
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                        </div>
                                    </div>
                                    <p class="review-card__text">Очень рада что обратилась именно в эту клинику. Здесь
                                        работают самые лучшие врачи города. Очень приветливый персонал, чистота.
                                        Врач внимательно выслушал,провели анализы ,назначили лечение.
                                        Здесь можно обратиться за качественной медицинской помощью. Все анализы можно
                                        сдать сразу в
                                        клинике. Очень удобно и комфортно. Отношение медперсонала чуткое и внимательное.
                                    </p>
                                </div>
                            </div>

                            <!-- Отзыв 2 -->
                            <div class="swiper-slide">
                                <div class="review-card">
                                    <div class="review-card__header">
                                        <h4 class="review-card__name">Валентина Н.</h4>
                                        <div class="review-card__rating">
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                        </div>
                                    </div>
                                    <p class="review-card__text">Очень понравилась клиника, врачи и медсестры, всё на
                                        высшем уровне, всё грамотно и профессионально! Хочу отметить и поблагодарить
                                        врача психиатра Мутаеву Ольгу Юрьевна - грамотно подошла к лечению моего сына,
                                        очень благодарна. Куда мы только не обращались, но здесь нашли грамотный подход
                                        к заболеванию!
                                        Однозначно советую это место!</p>
                                </div>
                            </div>

                            <!-- Отзыв 3 -->
                            <div class="swiper-slide">
                                <div class="review-card">
                                    <div class="review-card__header">
                                        <h4 class="review-card__name">Анна Т.</h4>
                                        <div class="review-card__rating">
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                        </div>
                                    </div>
                                    <p class="review-card__text">Отличная современная клиника! Приятный и вежливый
                                        персонал, всё делают оперативно. Врачи опытные, я пошла по рекомендации знакомой
                                        к конкретному врачу. Остались приятные впечатления от клиники и врача.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Стрелки навигации -->
                        <div class="swiper-button-prev reviews-button-prev"></div>
                        <div class="swiper-button-next reviews-button-next"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Яндекс карта -->
    <section class="map" id="contacts">
        <div class="container">
            <div class="map__wrapper">
                <div class="map__info">
                    <h3 class="map__subtitle">Где мы находимся?</h3>
                    <div class="map__contacts">
                        <p class="map__address">
                            г. Ставрополь, ул. 45 параллель, 2                        </p>
                        <p class="map__phone">Телефон: <a
                                href="tel:+79888641010">+7 (988) 864-10-10</a>
                        </p>
                        <p class="map__hours">Время работы:
                            пн-сб: 7:30-20:00, вс: 7:30-13:00                        </p>
                    </div>
                </div>
                <div class="map__container">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A83bc031fae9b9b52a046f0b9659520fe4a9940e7803a9ad20b0bac4a52889c5a&amp;source=constructor"
                        width="1200" height="400" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </section>
</main>

`;

export const metadata: Metadata = {
  title: "Медицинский центр Амадея в Ставрополе",
  description: "Медицинский центр «Амадея» в Ставрополе - профессиональная медицинская помощь. Психиатрия, психотерапия, наркология, терапия. Опытные врачи.",
  alternates: { canonical: "https://amadeya26.ru/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"about":{"@id":"https://amadeya26.ru/#organization"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/#primaryimage"},"image":{"@id":"https://amadeya26.ru/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323-1024x1024.webp","datePublished":"2023-12-02T17:59:09+00:00","dateModified":"2025-10-24T19:22:26+00:00","description":"Медицинский центр «Амадея» в Ставрополе - профессиональная медицинская помощь. Психиатрия, психотерапия, наркология, терапия. Опытные врачи.","breadcrumb":{"@id":"https://amadeya26.ru/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","width":1280,"height":1280},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
