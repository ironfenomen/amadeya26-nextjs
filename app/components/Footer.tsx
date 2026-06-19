export default function Footer() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<footer class="site-footer">
    <div class="container">
        <!-- Контактная информация -->
        <div class="footer__contacts">
            <div class="footer__contact-item">
                <h4 class="footer__contact-title">Телефон</h4>
                <p class="footer__contact-text">+7 (988) 864-10-10</p>
            </div>
            <div class="footer__contact-item">
                <h4 class="footer__contact-title">E-mail</h4>
                <p class="footer__contact-text">litehstavlab@gmail.com</p>
            </div>
            <div class="footer__contact-item">
                <h4 class="footer__contact-title">Адрес</h4>
                <p class="footer__contact-text">г. Ставрополь, ул. 45 параллель, 2</p>
            </div>
            <div class="footer__contact-item">
                <h4 class="footer__contact-title">Режим работы</h4>
                <p class="footer__contact-text">пн-сб: 7:30-20:00, вс: 7:30-13:00</p>
            </div>
            <div class="footer__social">
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
        </div>

        <!-- Юридическая информация -->
        <div class="footer__legal">
            <h3 class="footer__company-name">Общество с ограниченной ответственностью «Амадея»</h3>
            <p class="footer__legal-text">ИНН/ОГРН: 2635248939/1212600004165</p>
            <p class="footer__legal-text">Лицензия на осуществление медицинской деятельности Л041-01197-26/00327766 от 10 августа 2021г.</p>
        </div>

        <!-- Нижняя часть футера -->
        <div class="footer__bottom">
            <div class="footer__policies">
                <div class="footer__copyright">
                    <p>© 2026, «Амадея»</p>
                </div>
								<a href="/privacy-policy/" class="footer__policy-link">Политики обработки персональных данных</a>
				<a href="/personal-data-consent/" class="footer__policy-link">Согласие на обработку персональных данных</a>
				<a href="/cookie-policy/" class="footer__policy-link">Политика использования cookie</a>
            </div>
            <div class="footer__disclaimer">
                <p>Все предложения на сайте носят исключительно информационный характер и ни при каких условиях не являются публичной офертой определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.</p>
                <p>Посещая сайт amadeya26.ru вы предоставляете согласие на обработку данных о посещении (данные cookies и иные пользовательские данные), сбор которых осуществляется автоматически, на условиях Политики в отношении использования файлов cookie.</p>
            </div>
        </div>
    </div>
</footer>
<div class="cookie-consent" aria-live="polite" aria-label="Уведомление о файлах cookie">
    <div class="container cookie-consent__container">
        <div class="cookie-consent__text">
            Наш сайт использует cookie-файлы. Подробнее —
            <a href="/cookie-policy/" class="cookie-consent__link">политика использования cookie</a>.
        </div>
        <button type="button" class="cookie-consent__button" data-accept-cookies>Принять</button>
    </div>
    
    <button type="button" class="cookie-consent__close" data-accept-cookies aria-label="Скрыть уведомление">×</button>
    
    <svg width="0" height="0" style="position:absolute"><desc>cookie</desc></svg>
</div>

<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"\\/*"},{"not":{"href_matches":["\\/wp-*.php","\\/wp-admin\\/*","\\/wp-content\\/uploads\\/*","\\/wp-content\\/*","\\/wp-content\\/plugins\\/*","\\/wp-content\\/themes\\/amadeya-redesign\\/*","\\/wp-content\\/themes\\/twentytwentyfour\\/*","\\/*\\\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\\"nofollow\\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
</script>

		<!-- Cookie Notice plugin v2.5.7 by Hu-manity.co https://hu-manity.co/ -->
		<div id="cookie-notice" role="dialog" class="cookie-notice-hidden cookie-revoke-hidden cn-position-bottom" aria-label="Cookie Notice" style="background-color: rgba(50,50,58,1);"><div class="cookie-notice-container" style="color: #fff"><span id="cn-notice-text" class="cn-text-container">Мы используем куки для наилучшего представления нашего сайта. Если Вы продолжите использовать сайт, мы будем считать что Вас это устраивает.</span><span id="cn-notice-buttons" class="cn-buttons-container"><button id="cn-accept-cookie" data-cookie-set="accept" class="cn-set-cookie cn-button" aria-label="Хорошо" style="background-color: #00a99d">Хорошо</button></span><span id="cn-close-notice" data-cookie-set="accept" class="cn-close-icon" title="Нет"></span></div>
			
		</div>` }} />
  );
}
