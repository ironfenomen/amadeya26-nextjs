import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `<main class="page-content">
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">Наши специалисты</h1>
            <p class="page-description">Опытные врачи и специалисты нашего медицинского центра</p>
        </div>

        <div class="experts-grid">
            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/mutaeva.jpg" alt="Мутаева Ольга Юрьевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Мутаева Ольга Юрьевна</h3>
                    <p class="expert-card__specialty">Психиатр, клинический психолог, нарколог, психолог, психотерапевт, рефлексотерапевт</p>
                    <p class="expert-card__experience">Стаж 21 год</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Психиатрия</li>
                            <li>Наркология</li>
                            <li>Психотерапия</li>
                            <li>Клиническая психология</li>
                        </ul>
                    </div>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>



            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/kron.jpg" alt="Крон Елена Ивановна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Крон Елена Ивановна</h3>
                    <p class="expert-card__specialty">Психиатр, гирудотерапевт, нарколог, психотерапевт</p>
                    <p class="expert-card__experience">Стаж 32 года</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Психиатрия</li>
                            <li>Наркология</li>
                            <li>Психотерапия</li>
                            <li>Гирудотерапия</li>
                        </ul>
                    </div>
                        <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/kamolikova.jpg" alt="Камоликова Жанна Анатольевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Камоликова Жанна Анатольевна</h3>
                    <p class="expert-card__specialty">Психиатр, нарколог, психотерапевт</p>
                    <p class="expert-card__experience">Стаж 21 год</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Психиатрия</li>
                            <li>Наркология</li>
                            <li>Психотерапия</li>
                        </ul>
                    </div>
                        <!-- Кнопка добавлена здесь -->
                    <div>
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/bobrova.jpg" alt="Боброва Александра Николаевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Боброва Александра Николаевна</h3>
                    <p class="expert-card__specialty">Психотерапевт, психиатр, психолог</p>
                    <p class="expert-card__experience">Стаж 22 года</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Психиатрия</li>
                            <li>Психотерапия</li>
                            <li>Психология</li>
                        </ul>
                    </div>
                        <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/kumratova.jpg" alt="Кумратова Наталья Александровна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Кумратова Наталья Александровна</h3>
                    <p class="expert-card__specialty">Психиатр, психотерапевт</p>
                    <p class="expert-card__experience">Стаж 23 года</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Психиатрия</li>
                            <li>Психотерапия</li>
                        </ul>
                    </div>
                        <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/mozharuk.jpg" alt="Можарук Дарья Сергеевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Можарук Дарья Сергеевна</h3>
                    <p class="expert-card__specialty">Терапевт, кардиолог, ревматолог</p>
                    <p class="expert-card__experience">Стаж 6 лет</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Терапия</li>
                            <li>Кардиология</li>
                            <li>Ревматология</li>
                        </ul>
                    </div>
                        <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/boyunsuzova.jpg" alt="Боюнсузова Зухра Руслановна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Боюнсузова Зухра Руслановна</h3>
                    <p class="expert-card__specialty">Невролог</p>
                    <p class="expert-card__experience">Стаж 7 лет</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Неврология</li>
                        </ul>
                    </div>
                        <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/borisova.jpg" alt="Борисова Елена Алексеевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Борисова Елена Алексеевна</h3>
                    <p class="expert-card__specialty">Клинический психолог, психолог</p>
                    <p class="expert-card__experience">Стаж 15 лет</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Психология</li>
                            <li>Клиническая психология</li>
                        </ul>
                    </div>
                        <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/lavrentev.jpg" alt="Лаврентьев Илья Дмитриевич" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Лаврентьев Илья Дмитриевич</h3>
                    <p class="expert-card__specialty">Клинический психолог, психолог</p>
                    <p class="expert-card__experience">Стаж 10 лет</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Психология</li>
                            <li>Клиническая психология</li>
                        </ul>
                    </div>
                        <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <!-- Новые специалисты -->
            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/erkenova.jpg" alt="Эркенова Жанна Алиевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Эркенова Жанна Алиевна</h3>
                    <p class="expert-card__specialty">Гинеколог, акушер, гинеколог-эндокринолог</p>
                    <p class="expert-card__experience">Стаж 25 лет</p>
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    <!-- Кнопка добавлена здесь -->
                    
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stepurina.jpg" alt="Степурина Анна Андреевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Степурина Анна Андреевна</h3>
                    <p class="expert-card__specialty">ЛОР</p>
                    <p class="expert-card__experience">Стаж 18 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/kronartem.jpg" alt="Крон Артём Владимирович" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Крон Артём Владимирович</h3>
                    <p class="expert-card__specialty">Травматолог</p>
                    <p class="expert-card__experience">Стаж 5 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>



            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/potupchik.jpg" alt="Потупчик Андрей Максимович" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Потупчик Андрей Максимович</h3>
                    <p class="expert-card__specialty">Уролог</p>
                    <p class="expert-card__experience">Стаж 5 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/antashan.jpg" alt="Анташян Галина Георгиевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Анташян Галина Георгиевна</h3>
                    <p class="expert-card__specialty">Гинеколог, акушер</p>
                    <p class="expert-card__experience">Стаж 41 год</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/zaltan.jpg" alt="Залтан Марина Алексеевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Залтан Марина Алексеевна</h3>
                    <p class="expert-card__specialty">Гинеколог, врач УЗИ, акушер, гинеколог-эндокринолог</p>
                    <p class="expert-card__experience">Стаж 22 года</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/lukashevich.jpg" alt="Лукашевич Лада Сергеевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Лукашевич Лада Сергеевна</h3>
                    <p class="expert-card__specialty">Эндокринолог, диетолог, нутрициолог</p>
                    <p class="expert-card__experience">Стаж 10 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>

            

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/minin.jpg" alt="Минин Юрий Владимирович" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Минин Юрий Владимирович</h3>
                    <p class="expert-card__specialty">Мануальный терапевт, реабилитолог, физиотерапевт</p>
                    <p class="expert-card__experience">Стаж 40 лет</p>
                     <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                   
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/balakina.jpg" alt="Балакина Светлана Александровна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Балакина Светлана Александровна</h3>
                    <p class="expert-card__specialty">Хирург</p>
                    <p class="expert-card__experience">Стаж 8 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/rahmatulina.jpg" alt="Рахматулина Елена Николаевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Рахматулина Елена Николаевна</h3>
                    <p class="expert-card__specialty">Врач УЗИ</p>
                    <p class="expert-card__experience">Стаж 30 лет</p>
                     <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                   
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/stepanyan.jpg" alt="Степанян Виктория Владимировна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Степанян Виктория Владимировна</h3>
                    <p class="expert-card__specialty">Врач УЗИ</p>
                    <p class="expert-card__experience">Стаж 26 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/malaeva.jpg" alt="Малаева Муслимат Муслимовна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Малаева Муслимат Муслимовна</h3>
                    <p class="expert-card__specialty">Медсестра</p>
                    <p class="expert-card__experience">Стаж 6 лет</p>
                     <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                   
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/fomenko.jpg" alt="Фоменко Оксана Анатольевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Фоменко Оксана Анатольевна</h3>
                    <p class="expert-card__specialty">Дерматолог, венеролог</p>
                    <p class="expert-card__experience">Стаж 21 год</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/ushakova.jpg" alt="Ушакова (Глазова) Олеся Викторовна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Ушакова (Глазова) Олеся Викторовна</h3>
                    <p class="expert-card__specialty">Психолог</p>
                    <p class="expert-card__experience">Стаж 8 лет</p>
                     <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                   
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/puchkova.jpg" alt="Пучкова Анастасия Андреевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Пучкова Анастасия Андреевна</h3>
                    <p class="expert-card__specialty">Клинический психолог, психолог</p>
                    <p class="expert-card__experience">Стаж 6 лет</p>\\
                     <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                   
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/tyapkina.jpg" alt="Тяпкина Анжелика Шахсаваровна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Тяпкина Анжелика Шахсаваровна</h3>
                    <p class="expert-card__specialty">Кардиолог</p>
                    <p class="expert-card__experience">Стаж 11 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
                    
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/grigoriadis.jpg" alt="Григориадис Лариса Феодосиевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Григориадис Лариса Феодосиевна</h3>
                    <p class="expert-card__specialty">Детский эндокринолог</p>
                    <p class="expert-card__experience">Стаж 11 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/vlasenko.jpg" alt="Власенко Валерий Андреевич" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Власенко Валерий Андреевич</h3>
                    <p class="expert-card__specialty">Педиатр</p>
                    <p class="expert-card__experience">Стаж 2 года</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/korotina.jpg" alt="Коротина Алиса Сергеевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Коротина Алиса Сергеевна</h3>
                    <p class="expert-card__specialty">Невролог</p>
                    <p class="expert-card__experience">Стаж 21 год</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/blohina.jpg" alt="Блохина Юлия Алексеевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Блохина Юлия Алексеевна</h3>
                    <p class="expert-card__specialty">Психолог, детский психолог</p>
                    <p class="expert-card__experience">Стаж 17 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/zakrevskaya.jpg" alt="Закревская Нелли Геннадьевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Закревская Нелли Геннадьевна</h3>
                    <p class="expert-card__specialty">Дефектолог</p>
                    <p class="expert-card__experience">Стаж 1 год</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/parmon.jpg" alt="Пармон Анастасия Сергеевна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Пармон Анастасия Сергеевна</h3>
                    <p class="expert-card__specialty">Детский психиатр, психиатр</p>
                    <p class="expert-card__experience">Стаж 4 года</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/korotina-olga.jpg" alt="Коротина Ольга Викторовна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Коротина Ольга Викторовна</h3>
                    <p class="expert-card__specialty">Психолог</p>
                    <p class="expert-card__experience">Стаж 28 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/domracheva.jpg" alt="Домрачёва Екатерина Александровна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Домрачёва Екатерина Александровна</h3>
                    <p class="expert-card__specialty">Педиатр</p>
                    <p class="expert-card__experience">Стаж 2 года</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/sidelnikova.jpg" alt="Сидельникова Тамара Асановна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Сидельникова Тамара Асановна</h3>
                    <p class="expert-card__specialty">Гастроэнтеролог</p>
                    <p class="expert-card__experience">Стаж 16 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-redesign/assets/img/proskurina.jpg" alt="Проскуркина Анна Александровна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Проскуркина Анна Александровна</h3>
                    <p class="expert-card__specialty">Инфекционист</p>
                    <p class="expert-card__experience">Стаж 9 лет</p>
                    <!-- Кнопка добавлена здесь -->
                    <div class="expert-card__button">
                    <button type="button" class="service-booking-button">Записаться на приём</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</main>`;

export const metadata: Metadata = {
  title: "Специалисты - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/experts/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Специалисты - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/experts/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function ExpertsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/experts/","url":"https://amadeya26.ru/experts/","name":"Специалисты - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"datePublished":"2025-09-25T19:08:52+00:00","dateModified":"2026-02-02T20:36:43+00:00","breadcrumb":{"@id":"https://amadeya26.ru/experts/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/experts/"]}]},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/experts/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Специалисты"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0421\\u043f\\u0435\\u0446\\u0438\\u0430\\u043b\\u0438\\u0441\\u0442\\u044b","item":"https:\\/\\/amadeya26.ru\\/experts\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
