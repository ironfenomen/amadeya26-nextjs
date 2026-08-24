/* AMADEYA26 Header — Core-shell разметка (классы Web Core: .header/.nav/.menu-wrapper),
   содержимое — взрослой Амадеи. Поведение: ov-lite.js (бургер) + world.js (Core, меню v2.1). */
export default function Header() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<header>
      <div class="header">
        <div class="__container">
          <div class="__side-padding">
            <div class="header-items __line-blocks _items-center _content-justify">
              <div class="header-item header-item-logo">
                <a class="header-logo" href="/" title="Медицинский центр Амадея"><img src="/redesign/logo-a26-220.webp" srcset="/redesign/logo-a26-220.webp 220w, /redesign/logo-a26-440.webp 440w" sizes="(max-width: 768px) 110px, 220px" alt="Медицинский центр Амадея в Ставрополе" width="220" height="70"></a>
              </div>

              <div class="header-item header-item-slogan">
                <div class="header-slogan">Медицинский<br>центр</div>
              </div>

              <div class="header-item header-item-social">
                <a class="social s-wt" href="https://wa.me/+79888641010" aria-label="Написать в WhatsApp"></a>
                <a class="social s-tg" href="https://t.me/+79888641010" aria-label="Написать в Telegram"></a>
              </div>

              <div class="header-item header-item-phones">
                <div class="header-item-phone">
                  <a class="header-phone phone-mob" href="tel:+79888641010">8 (988) 864-10-10</a>
                  <span>г. Ставрополь, ул. 45 параллель, 2</span>
                </div>
              </div>

              <div class="header-item header-item-button">
                <a class="button" href="javascript:;" id="cta-link">Вызвать врача</a>
              </div>

              <div class="header-item header-menu-button __wn1024">
                <a href="javascript:;" class="menu-button" id="menu-button" data-content="main-menu" data-close_button="true" role="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="main-menu"><div class="menu-icon"></div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav">
        <div class="__container">
          <div class="__side-padding">
            <div class="header-menu" id="main-menu">
              <nav aria-label="Основное меню">
                <div class="menu-wrapper">
                  <ul class="menu-items level-1">
                    <li class="level-1"><a href="/uslugi-kliniki-amadeya-v-stavropole/">Медицинские услуги</a><ul class="menu-items level-2"><li class="level-2"><a href="/psihiatricheskaya-pomoshh-v-stavropole/">Психиатрия</a></li><li class="level-2"><a href="/psihoterapiya/">Психотерапия</a></li><li class="level-2"><a href="/psihologicheskaya-pomoshh-v-stavropole/">Психолог</a></li><li class="level-2"><a href="/priem-vracha-terapevta-v-stavropole/">Терапия</a></li><li class="level-2"><a href="/priem-vracha-endokrinologa-v-stavropole/">Эндокринология</a></li><li class="level-2"><a href="/girudoterapiya/">Гирудотерапия</a></li><li class="level-2"><a href="/priem-dermatologa-v-stavropole-klini/">Дерматология</a></li><li class="level-2"><a href="/priem-ginekologa-v-stavropole/">Гинекология</a></li><li class="level-2"><a href="/ultrazvuovaya-diagnostika-v-stavrop/">УЗИ</a></li></ul></li>
                    <li class="level-1"><a href="/lechenie-zavisimostei-v-stavropole/">Лечение зависимостей</a><ul class="menu-items level-2"><li class="level-2"><a href="/konsultacziya-vracha-narkologa-v-stavr/">Консультация нарколога</a></li><li class="level-2"><a href="/onlain-konsultacziya-narkologa/">Онлайн-консультация нарколога</a></li><li class="level-2"><a href="/detoksikacziya/">Дезинтоксикация</a></li><li class="level-2"><a href="/lechenie-zavisimostei-v-stavropole/">Лечение зависимостей в Ставрополе</a></li><li class="level-2"><a href="/priem-psihologa-addiktologa-v-stavro/">Приём психолога-аддиктолога</a></li><li class="level-2"><a href="/psihoterapiya-pri-zavisimosti/">Психотерапия при зависимости</a></li><li class="level-2"><a href="/superviziya-pri-zavisimosti-v-stavrop/">Супервизия при зависимости</a></li></ul></li>
                    <li class="level-1"><a href="/speczialisty/">Специалисты</a></li>
                    <li class="level-1"><a href="/online-zapis-k-specialistam/">Онлайн-запись</a></li>
                    <li class="level-1"><a href="/kontakty/">Контакты</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>` }} />
  );
}
