import type { Metadata } from "next";
import { preload } from "react-dom";

const pageContent = `<main>
    <!-- redesign/v36: hero «граница света» (макет v36-16) — фото ресепшна утро/вечер из эталона.
         Тексты — текущие с сайта Амадеи (приоритет контенту). H1 добавлен: в baseline его не было -->
    <section class="banner-section" data-gx="70%" data-gy="26%" data-ms="1" data-mo=".055">
        <div class="swiper" id="service-banner-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="v36-hero h36-stage h36-real swiper-no-swiping" role="slider" tabindex="0" aria-label="Фото ресепшна клиники: до и после — серое утро и тёплый вечер" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62">
                        <div class="h36-layer h36-cold">
                            <picture>
                                <source type="image/avif" srcset="/redesign/reception-morning-390.avif 390w, /redesign/reception-morning-640.avif 640w, /redesign/reception-morning-768.avif 768w, /redesign/reception-morning-960.avif 960w, /redesign/reception-morning-1350.avif 1350w" sizes="100vw">
                                <source type="image/webp" srcset="/redesign/reception-morning-390.webp 390w, /redesign/reception-morning-768.webp 768w, /redesign/reception-morning-960.webp 960w, /redesign/reception-morning-1350.webp 1350w" sizes="100vw">
                                <img decoding="async" draggable="false" src="/redesign/reception-morning.jpg" width="1350" height="1800" alt="Ресепшн медицинского центра «Амадея» — утро" fetchpriority="high">
                            </picture>
                        </div>
                        <div class="h36-layer h36-warm">
                            <picture>
                                <source type="image/avif" srcset="/redesign/reception-evening-390.avif 390w, /redesign/reception-evening-640.avif 640w, /redesign/reception-evening-768.avif 768w, /redesign/reception-evening-960.avif 960w, /redesign/reception-evening-1350.avif 1350w" sizes="100vw">
                                <source type="image/webp" srcset="/redesign/reception-evening-390.webp 390w, /redesign/reception-evening-768.webp 768w, /redesign/reception-evening-960.webp 960w, /redesign/reception-evening-1350.webp 1350w" sizes="100vw">
                                <img decoding="async" draggable="false" src="/redesign/reception-evening.jpg" width="1350" height="1800" alt="" aria-hidden="true" fetchpriority="high">
                            </picture>
                        </div>
                        <div class="h36-div"></div>
                        <div class="v36-hero-veil"></div>
                        <div class="v36-hero-in">
                            <div class="v36-eb"><i></i><span>Многопрофильный медицинский центр · Ставрополь</span></div>
                            <h1><span class="ln"><span>Медицинский центр</span></span> <span class="ln"><span><em>«АМАДЕЯ»</em></span></span> <span class="ln"><span>в Ставрополе</span></span></h1>
                            <div class="v36-lead">
                                Комплексный подход к лечению — ключ к достижению устойчивых результатов!
                            </div>
                            <div class="v36-acts">
                                <a class="v36-btn v36-btn-g" href="/online-zapis-k-specialistam/">Получить консультацию</a>
                                <a href="https://wa.me/+79888641010" class="v36-btn v36-btn-w" target="_blank" rel="noopener">Написать на WhatsApp</a>
                            </div>
                        </div>
                        <div class="v36-cue"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- redesign/v36: бегущая строка (.mq) — реальные разделы сайта -->
    <div class="v36-mq" aria-hidden="true"><div>
        <span>Психиатрия</span><span>Психотерапия</span><span>Наркология</span><span>Терапия</span><span>Дерматология</span><span>Гинекология</span><span>Гирудотерапия</span><span>Диагностика</span><span>Выезд врача на дом</span>
        <span>Психиатрия</span><span>Психотерапия</span><span>Наркология</span><span>Терапия</span><span>Дерматология</span><span>Гинекология</span><span>Гирудотерапия</span><span>Диагностика</span><span>Выезд врача на дом</span>
    </div></div>

    <!-- redesign/v36: full-bleed момент (.moment) — цитата из реального отзыва с главной -->
    <div class="v36-moment" data-gx="50%" data-gy="50%" data-ms="2.1" data-mo=".04">
        <picture>
            <source type="image/avif" srcset="/redesign/moment-doctor-390.avif 390w, /redesign/moment-doctor-768.avif 768w, /redesign/moment-doctor-981.avif 981w" sizes="100vw">
            <source type="image/webp" srcset="/redesign/moment-doctor-390.webp 390w, /redesign/moment-doctor-768.webp 768w, /redesign/moment-doctor-981.webp 981w" sizes="100vw">
            <img loading="lazy" decoding="async" src="/redesign/moment-doctor.jpg" width="981" height="1280" alt="Врач медицинского центра «Амадея» за рабочим столом">
        </picture>
        <div class="__container"><div class="__side-padding">
            <blockquote>«Куда мы только не обращались, но здесь нашли грамотный подход к заболеванию»</blockquote>
            <div class="v36-moment-src">Валентина Н. <span>· отзыв о лечении сына</span></div>
        </div></div>
    </div>

    <!-- redesign/v36: цифры клиники (.nums) — значения реальные: 18 профилей специалистов,
         средний стаж по 9 врачам главной ≈17 лет, 20+ услуг, лицензия от 10.08.2021 -->
    <div class="v36-nums-wrap" data-gx="18%" data-gy="68%" data-ms="1.5" data-mo=".045"><div class="__container"><div class="__side-padding">
        <div class="v36-nums">
            <div class="v36-num"><b data-to="18">18</b><span>специалистов в штате: врачи, психологи, психотерапевты</span></div>
            <div class="v36-num"><b data-to="17">17</b><span>лет — средний стаж врачей клиники</span></div>
            <div class="v36-num"><b data-to="20" data-suf="+">20+</b><span>медицинских услуг — от психиатрии до УЗИ</span></div>
            <div class="v36-num"><b data-to="2021">2021</b><span>год получения медицинской лицензии</span></div>
        </div>
    </div></div></div>

    <!-- redesign/v36: офферы (.offers) — контент бывших quick-services и booking-блока -->
    <section class="offers-section" data-gx="14%" data-gy="24%" data-ms="1.4" data-mo=".05">
    <div class="__container">
        <div class="__side-padding">
            <div class="offers-wrapper">
                <div class="offer-item offer-1">
                    <div class="offer-inner">
                        <div class="offer-item-title">
                            <div class="offer-item-icon"></div>
                            <h2>Консультация врачей и&nbsp;диагностика</h2>
                        </div>
                        <div class="offer-item-text">
                            <p>Профессиональные консультации врачей различных специальностей. Получите квалифицированную помощь и рекомендации по лечению.</p>
                            <p>Современное диагностическое оборудование для точной постановки диагноза. УЗИ, лабораторные анализы и другие виды обследований.</p>
                        </div>
                        <div class="offer-item-action">
                            <div class="offer-action-call">
                                <p>Запись на приём по телефону:</p>
                                <a href="tel:+79888641010">+7 (988) 864-10-10</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="offer-item offer-2" id="booking">
                    <div class="offer-inner">
                        <div class="offer-item-title">
                            <div class="offer-item-icon"></div>
                            <h2>Выезд врача на&nbsp;дом</h2>
                        </div>
                        <div class="offer-item-text">
                            <p>Если вы столкнулись с болезнью, не отчаивайтесь — специалисты клиники «Амадея» всегда готовы прийти на помощь! Мы быстро и эффективно лечим вирусные, инфекционные и психические заболевания и другие заболевания. Оказываем психологическую помощь.</p>
                            <p>Вы можете вызвать врача на дом. Для этого просто свяжитесь с нами по телефону или оставьте заявку на сайте.</p>
                        </div>
                        <div class="offer-item-action">
                            <div class="offer-action-button">
                                <a class="button" href="javascript:;" data-a26-modal>Вызвать врача</a>
                            </div>
                            <div class="offer-action-button">
                                <button type="button" class="button" id="medflex-booking-trigger">Записаться на приём</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    <!-- redesign/v36: услуги (.posts-block на светлой sheet) — 8 карточек ключевых услуг, контент сохранён -->
    <section class="v36-sheet" data-gx="82%" data-gy="78%" data-ms="1.2" data-mo=".05">
        <div class="__container">
            <div class="__side-padding">
                <div class="section-title"><h2><span>Услуги</span> клиники</h2></div>
                <div class="posts-block">
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/stock1-400.webp" srcset="/wp-content/themes/amadeya-redesign/assets/img/stock1-400.webp 400w, /wp-content/themes/amadeya-redesign/assets/img/stock1-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Консультация психиатра"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Консультация психиатра</h3>
                                <p>Профессиональный психиатр поможет справиться с любыми эмоциональными расстройствами.</p>
                                <a href="/psihiatricheskaya-pomoshh-v-stavropole/" aria-label="Подробнее: Консультация психиатра">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/psihiatricheskaya-pomoshh-v-stavropole/" aria-label="Подробнее: Консультация психиатра"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/stock2-400.webp" srcset="/wp-content/themes/amadeya-redesign/assets/img/stock2-400.webp 400w, /wp-content/themes/amadeya-redesign/assets/img/stock2-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Консультация психотерапевта"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Консультация психотерапевта</h3>
                                <p>Решите любые психологические проблемы с профессиональным психотерапевтом.</p>
                                <a href="/psihoterapiya/" aria-label="Подробнее: Консультация психотерапевта">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/psihoterapiya/" aria-label="Подробнее: Консультация психотерапевта"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/stock14-400.webp" srcset="/wp-content/themes/amadeya-redesign/assets/img/stock14-400.webp 400w, /wp-content/themes/amadeya-redesign/assets/img/stock14-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Лечение зависимостей в Ставрополе"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Лечение зависимостей в Ставрополе</h3>
                                <p>Комплексное лечение различных зависимостей в нашем центре</p>
                                <a href="/lechenie-zavisimostei-v-stavropole/" aria-label="Подробнее: Лечение зависимостей в Ставрополе">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/lechenie-zavisimostei-v-stavropole/" aria-label="Подробнее: Лечение зависимостей в Ставрополе"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/stock7-400.webp" srcset="/wp-content/themes/amadeya-redesign/assets/img/stock7-400.webp 400w, /wp-content/themes/amadeya-redesign/assets/img/stock7-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Дерматология"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Дерматология</h3>
                                <p>Диагностика и лечение кожных заболеваний</p>
                                <a href="/priem-dermatologa-v-stavropole-klini/" aria-label="Подробнее: Дерматология">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/priem-dermatologa-v-stavropole-klini/" aria-label="Подробнее: Дерматология"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/stock13-400.webp" srcset="/wp-content/themes/amadeya-redesign/assets/img/stock13-400.webp 400w, /wp-content/themes/amadeya-redesign/assets/img/stock13-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Дезинтоксикация"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Дезинтоксикация</h3>
                                <p>Очищение организма от токсинов, восстановление после интоксикации</p>
                                <a href="/detoksikacziya/" aria-label="Подробнее: Дезинтоксикация">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/detoksikacziya/" aria-label="Подробнее: Дезинтоксикация"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/stock6-400.webp" srcset="/wp-content/themes/amadeya-redesign/assets/img/stock6-400.webp 400w, /wp-content/themes/amadeya-redesign/assets/img/stock6-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Гирудотерапия"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Гирудотерапия</h3>
                                <p>Лечение пиявками, восстановление кровообращения</p>
                                <a href="/girudoterapiya/" aria-label="Подробнее: Гирудотерапия">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/girudoterapiya/" aria-label="Подробнее: Гирудотерапия"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/stock8-400.webp" srcset="/wp-content/themes/amadeya-redesign/assets/img/stock8-400.webp 400w, /wp-content/themes/amadeya-redesign/assets/img/stock8-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Гинекология"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Гинекология</h3>
                                <p>Женское здоровье, диагностика и лечение гинекологических заболеваний</p>
                                <a href="/priem-ginekologa-v-stavropole/" aria-label="Подробнее: Гинекология">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/priem-ginekologa-v-stavropole/" aria-label="Подробнее: Гинекология"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/stock10-400.webp" srcset="/wp-content/themes/amadeya-redesign/assets/img/stock10-400.webp 400w, /wp-content/themes/amadeya-redesign/assets/img/stock10-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Консультация нарколога"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Консультация нарколога</h3>
                                <p>Первичная консультация нарколога, диагностика, составление плана лечения</p>
                                <a href="/konsultacziya-vracha-narkologa-v-stavr/" aria-label="Подробнее: Консультация нарколога">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/konsultacziya-vracha-narkologa-v-stavr/" aria-label="Подробнее: Консультация нарколога"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- redesign/v36: контактная полоса + инлайн-форма (паттерн детокса .contact-block-2).
         Отправка — через существующий inline-контракт modal-form.js (#inline-callback-form → /api/lead/ → Telegram),
         разметка ID повторяет контракт: #inline-name/#inline-phone/#inline-privacy/.modal-submit -->
    <section class="v36-cta" data-gx="50%" data-gy="50%" data-ms="1.2" data-mo=".05">
        <div class="__container">
            <div class="__side-padding">
                <div class="contact-block-2">
                    <div class="contact-block-2-content">
                        <div>
                            <p>Позвоните нам и получите консультацию специалиста!</p>
                            <p>Звонок анонимный. Работаем ежедневно.</p>
                        </div>
                        <div><a class="page-form-phone" href="tel:+79888641010">+7 (988) 864-10-10</a></div>
                    </div>
                    <div class="contact-block-2-form">
                        <div class="form-title">Оставьте заявку и мы сами Вам перезвоним!</div>
                        <div class="modal-error" id="inline-modal-error"></div>
                        <form id="inline-callback-form" novalidate>
                            <div class="form-row text">
                                <input type="text" id="inline-name" name="name" placeholder="Ваше имя" required>
                            </div>
                            <div class="form-row text">
                                <input type="tel" id="inline-phone" name="phone" placeholder="+7 (___) ___-__-__" required>
                            </div>
                            <div class="form-row checkbox">
                                <input type="checkbox" id="inline-privacy" name="privacy_agreement" required>
                                <label for="inline-privacy"><a href="/personal-data-consent/" target="_blank">Согласен</a> на&nbsp;обработку персональных данных в&nbsp;соответствии с&nbsp;<a href="/privacy-policy/" target="_blank">Политикой конфиденциальности</a>.</label>
                            </div>
                            <div class="form-row submit">
                                <button type="submit" class="modal-submit">Отправить заявку</button>
                            </div>
                        </form>
                        <div class="modal-success" id="inline-modal-success" style="display:none;">
                            <p class="modal-success-title">Заявка отправлена!</p>
                            <p class="modal-success-text">Ваша заявка принята, ожидайте звонка в ближайшее время</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- redesign/v36: специалисты (.people-block swiper) — 9 врачей, контент сохранён -->
    <section class="reviews-section" id="experts" data-gx="50%" data-gy="30%" data-ms="1.1" data-mo=".06">
        <div class="__container">
            <div class="people-block">
                <div class="section-title"><h2><span>Специалисты</span> клиники</h2></div>
                <div class="swiper" id="people-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="eager" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/mutaeva-480.webp" alt="Врач Мутаева Ольга Юрьевна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Мутаева</span><span>Ольга Юрьевна</span></div>
                                    <div class="people-item-spec">Психиатр, клинический психолог, нарколог, психотерапевт</div>
                                    <div class="people-item-exp">Стаж 21 год</div>
                                </div>
                                <a class="overlink" href="/speczialisty/mutaeva-olga-yurevna/" aria-label="Подробнее: Мутаева Ольга Юрьевна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="eager" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/kron-480.webp" alt="Врач Крон Елена Ивановна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Крон</span><span>Елена Ивановна</span></div>
                                    <div class="people-item-spec">Психиатр, гирудотерапевт, нарколог, психотерапевт</div>
                                    <div class="people-item-exp">Стаж 32 года</div>
                                </div>
                                <a class="overlink" href="/speczialisty/kron-elena-ivanovn/" aria-label="Подробнее: Крон Елена Ивановна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="eager" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/kamolikova-480.webp" alt="Врач Камоликова Жанна Анатольевна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Камоликова</span><span>Жанна Анатольевна</span></div>
                                    <div class="people-item-spec">Психиатр, нарколог, психотерапевт</div>
                                    <div class="people-item-exp">Стаж 21 год</div>
                                </div>
                                <a class="overlink" href="/speczialisty/" aria-label="Подробнее: Камоликова Жанна Анатольевна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="eager" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/bobrova-480.webp" alt="Врач Боброва Александра Николаевна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Боброва</span><span>Александра Николаевна</span></div>
                                    <div class="people-item-spec">Психотерапевт, психиатр, психолог</div>
                                    <div class="people-item-exp">Стаж 22 года</div>
                                </div>
                                <a class="overlink" href="/speczialisty/" aria-label="Подробнее: Боброва Александра Николаевна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/kumratova-480.webp" alt="Врач Кумратова Наталья Александровна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Кумратова</span><span>Наталья Александровна</span></div>
                                    <div class="people-item-spec">Психиатр, психотерапевт</div>
                                    <div class="people-item-exp">Стаж 23 года</div>
                                </div>
                                <a class="overlink" href="/speczialisty/" aria-label="Подробнее: Кумратова Наталья Александровна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/mozharuk-480.webp" alt="Врач Можарук Дарья Сергеевна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Можарук</span><span>Дарья Сергеевна</span></div>
                                    <div class="people-item-spec">Терапевт, кардиолог, ревматолог</div>
                                    <div class="people-item-exp">Стаж 6 лет</div>
                                </div>
                                <a class="overlink" href="/speczialisty/mozharuk-darya-sergeevna/" aria-label="Подробнее: Можарук Дарья Сергеевна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/boyunsuzova-480.webp" alt="Врач Боюнсузова Зухра Руслановна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Боюнсузова</span><span>Зухра Руслановна</span></div>
                                    <div class="people-item-spec">Невролог</div>
                                    <div class="people-item-exp">Стаж 7 лет</div>
                                </div>
                                <a class="overlink" href="/speczialisty/" aria-label="Подробнее: Боюнсузова Зухра Руслановна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/borisova-480.webp" alt="Врач Борисова Елена Алексеевна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Борисова</span><span>Елена Алексеевна</span></div>
                                    <div class="people-item-spec">Клинический психолог, психолог</div>
                                    <div class="people-item-exp">Стаж 15 лет</div>
                                </div>
                                <a class="overlink" href="/speczialisty/" aria-label="Подробнее: Борисова Елена Алексеевна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/lavrentev-480.webp" alt="Врач Лаврентьев Илья Дмитриевич"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Лаврентьев</span><span>Илья Дмитриевич</span></div>
                                    <div class="people-item-spec">Клинический психолог, психолог</div>
                                    <div class="people-item-exp">Стаж 10 лет</div>
                                </div>
                                <a class="overlink" href="/speczialisty/" aria-label="Подробнее: Лаврентьев Илья Дмитриевич"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav-buttons">
                    <div class="swiper-nav-button swiper-button-prev vrachi-button-prev"></div>
                    <div class="swiper-nav-button swiper-button-next vrachi-button-next"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- redesign/v36: отзывы (.reviews-block swiper на sheet) — 3 реальных отзыва, контент сохранён -->
    <section class="reviews-section v36-sheet" id="reviews" data-gx="18%" data-gy="72%" data-ms="1.3" data-mo=".045">
        <div class="__container">
            <div class="reviews-block">
                <div class="section-title"><h2><span>Отзывы</span> пациентов</h2></div>
                <div class="swiper" id="reviews-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="reviews-item __line-block-item">
                                <div class="reviews-item-head">
                                    <div class="reviews-item-title"><h3>Татьяна Л.</h3><span></span></div>
                                </div>
                                <div class="reviews-item-text">Очень рада что обратилась именно в эту клинику. Здесь работают самые лучшие врачи города. Очень приветливый персонал, чистота. Врач внимательно выслушал, провели анализы, назначили лечение. Здесь можно обратиться за качественной медицинской помощью. Все анализы можно сдать сразу в клинике. Очень удобно и комфортно. Отношение медперсонала чуткое и внимательное.</div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="reviews-item __line-block-item">
                                <div class="reviews-item-head">
                                    <div class="reviews-item-title"><h3>Валентина Н.</h3><span></span></div>
                                </div>
                                <div class="reviews-item-text">Очень понравилась клиника, врачи и медсестры, всё на высшем уровне, всё грамотно и профессионально! Хочу отметить и поблагодарить врача психиатра Мутаеву Ольгу Юрьевну — грамотно подошла к лечению моего сына, очень благодарна. Куда мы только не обращались, но здесь нашли грамотный подход к заболеванию! Однозначно советую это место!</div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="reviews-item __line-block-item">
                                <div class="reviews-item-head">
                                    <div class="reviews-item-title"><h3>Анна Т.</h3><span></span></div>
                                </div>
                                <div class="reviews-item-text">Отличная современная клиника! Приятный и вежливый персонал, всё делают оперативно. Врачи опытные, я пошла по рекомендации знакомой к конкретному врачу. Остались приятные впечатления от клиники и врача.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav-buttons">
                    <div class="swiper-nav-button swiper-button-prev reviews-button-prev"></div>
                    <div class="swiper-nav-button swiper-button-next reviews-button-next"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- redesign/v36: карта (.map-block) — iframe тот же, ленивая загрузка через data-src -->
    <section class="map-section" id="contacts" data-gx="50%" data-gy="78%" data-ms=".95" data-mo=".06">
        <div class="__container">
            <div class="__side-padding">
                <div class="map-block">
                    <div class="map-block-content">
                        <h2>Где мы находимся?</h2>
                        <div class="contacts">
                            <p class="contact-row icon-location">г. Ставрополь, ул. 45 параллель, 2</p>
                            <p class="contact-row icon-phone"><a class="phone" href="tel:+79888641010">+7 (988) 864-10-10</a></p>
                            <p class="contact-row icon-time">пн-сб: 7:30–20:00, вс: 7:30–13:00</p>
                        </div>
                    </div>
                    <div class="map-wrap">
                        <iframe loading="lazy" title="Карта проезда — Медицинский центр Амадея" data-src="https://yandex.ru/map-widget/v1/?um=constructor%3A83bc031fae9b9b52a046f0b9659520fe4a9940e7803a9ad20b0bac4a52889c5a&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
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
  // LCP: preload hero-фото (утро+вечер в одной высокой очереди — паттерн детокса 21.08)
  preload("/redesign/reception-morning-1350.avif", {
    as: "image",
    type: "image/avif",
    imageSrcSet:
      "/redesign/reception-morning-390.avif 390w, /redesign/reception-morning-640.avif 640w, /redesign/reception-morning-768.avif 768w, /redesign/reception-morning-960.avif 960w, /redesign/reception-morning-1350.avif 1350w",
    imageSizes: "100vw",
    fetchPriority: "high",
  });
  preload("/redesign/reception-evening-1350.avif", {
    as: "image",
    type: "image/avif",
    imageSrcSet:
      "/redesign/reception-evening-390.avif 390w, /redesign/reception-evening-640.avif 640w, /redesign/reception-evening-768.avif 768w, /redesign/reception-evening-960.avif 960w, /redesign/reception-evening-1350.avif 1350w",
    imageSizes: "100vw",
    fetchPriority: "high",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"about":{"@id":"https://amadeya26.ru/#organization"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/#primaryimage"},"image":{"@id":"https://amadeya26.ru/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323-1024x1024.webp","datePublished":"2023-12-02T17:59:09+00:00","dateModified":"2025-10-24T19:22:26+00:00","description":"Медицинский центр «Амадея» в Ставрополе - профессиональная медицинская помощь. Психиатрия, психотерапия, наркология, терапия. Опытные врачи.","breadcrumb":{"@id":"https://amadeya26.ru/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","width":1280,"height":1280},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </>
  );
}
