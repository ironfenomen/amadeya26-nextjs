export default function Header() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<header class="site-header">
    <div class="container site-header__top">
        <a href="/" class="site-header__logo" aria-label="Медицинский центр Амадея в Ставрополе">
            <img loading="lazy" decoding="async" src="/wp-content/themes/amadeya-redesign/assets/img/logo.png" alt="Медицинский центр Амадея в Ставрополе" class="site-header__logo-image">
        </a>
        <div class="site-header__info">
            <div class="site-header__info-top">
                <div class="site-header__info-line">
                    <span class="site-header__type" id="center-type">Медицинский центр</span>
                </div>
            </div>
            <div class="site-header__info-bottom">
                <div class="site-header__info-line">
                    <span class="site-header__address" id="address">Адрес не указан</span>
                </div>
                <div class="site-header__info-line">
                    <span class="site-header__hours" id="hours">Время работы не указано</span>
                </div>
                <div class="site-header__info-line">
                    <a class="site-header__phone" id="phone" href="tel:+79888641010">+7 (988) 864-10-10</a>
                </div>
            </div>
        </div>
        <div class="site-header__actions">
            <div class="site-header__social">
                <a href="https://wa.me/+79888641010" class="social-link social-link--whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
                    </svg>
                </a>
                <a href="https://t.me/+79888641010" class="social-link social-link--telegram" target="_blank" rel="noopener" aria-label="Telegram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor"/>
                    </svg>
                </a>
            </div>
            <button type="button" class="site-header__button" id="cta-link">Вызвать врача</button>
        </div>
        <div class="site-header__mobile">
            <a class="site-header__mobile-phone" href="tel:+79888641010">+7 (988) 864-10-10</a>
            <button class="main-nav__toggle" aria-label="Открыть меню">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
    
    
<nav class="main-nav">
    <div class="container">
        <button class="main-nav__toggle" aria-label="Открыть меню">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div class="main-nav__overlay"></div>
            <ul class="main-nav__list">
        <li class="main-nav__item main-nav__item--dropdown">
            <div class="main-nav__link">
                <a href="/uslugi-kliniki-amadeya-v-stavropole/" class="main-nav__link-text">Медицинские услуги</a>
                <svg class="main-nav__arrow" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <ul class="main-nav__dropdown">
                <li><a href="/psihiatricheskaya-pomoshh-v-stavropole/">Психиатрия</a></li>
                <li><a href="/psihoterapiya/">Психотерапия</a></li>
                <li><a href="/psihologicheskaya-pomoshh-v-stavropole/">Психолог</a></li>
                <li><a href="/priem-vracha-terapevta-v-stavropole/">Терапия</a></li>
                <li><a href="/priem-vracha-endokrinologa-v-stavropole/">Эндокринология</a></li>
                <li><a href="/girudoterapiya/">Гирудотерапия</a></li>
                <li><a href="/priem-dermatologa-v-stavropole-klini/">Дерматология</a></li>
                <li><a href="/priem-ginekologa-v-stavropole/">Гинекология</a></li>
                <li><a href="/ultrazvuovaya-diagnostika-v-stavrop/">Узи</a></li>
            </ul>
        </li>
        <li class="main-nav__item main-nav__item--dropdown">
            <div class="main-nav__link">
                <a href="/lechenie-zavisimostei-v-stavropole/" class="main-nav__link-text">Лечение зависимостей</a>
                <svg class="main-nav__arrow" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <ul class="main-nav__dropdown">
                <li><a href="/konsultacziya-vracha-narkologa-v-stavr/">Консультация нарколога</a></li>
                <li><a href="/onlain-konsultacziya-narkologa/">Онлайн-консультация нарколога</a></li>
                <!--<li><a href="/vyezd-vracha-narkologa-na-dom/">Выезд врача-нарколога на дом</a></li> -->
                <li><a href="/detoksikacziya/">Дезинтоксикация</a></li>
                <li><a href="/lechenie-zavisimostei-v-stavropole/">Лечение зависимостей в Ставрополе</a></li>
                <li><a href="/priem-psihologa-addiktologa-v-stavro/">Приём психолога-аддиктолога в Ставрополе</a></li>
                <li><a href="/psihoterapiya-pri-zavisimosti/">Психотерапия при зависимости</a></li>
                <li><a href="/superviziya-pri-zavisimosti-v-stavrop/">Супервизия при зависимости в Ставрополе</a></li>
            </ul>
        </li>
        <li class="main-nav__item"><a class="main-nav__link" href="/speczialisty/">Специалисты</a></li>
        <li class="main-nav__item"><a class="main-nav__link" href="/online-zapis-k-specialistam/">Онлайн-запись</a></li>
        <li class="main-nav__item"><a class="main-nav__link" href="/kontakty/">Контакты</a></li>
    </ul>
        </div>
</nav>
</header>` }} />
  );
}
