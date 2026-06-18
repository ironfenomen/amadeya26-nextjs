import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main class="page-content service-page">
    <div class="container">
				<nav class="breadcrumbs">
					<a href="/">Главная</a>
					<span class="breadcrumb-separator">/</span>
					<span class="breadcrumb-current">Политика использования Cookie</span>
				</nav>

				<section class="service-why">
					
						<h1 class="service-title">Политика использования файлов Cookie</h1>
						<p class="service-description">Мы используем файлы Cookie для корректной работы сайта, анализа трафика и улучшения сервиса.</p>
					
				</section>

				<section class="service-why">
					<h2 class="service-section-title">Политика в отношении использования файлов cookie</h2>
					<p class="service-text">ООО «Амадея» (далее — Компания) обрабатывает данные, указанные в настоящем документе (далее — Политика), собранные в процессе использования посетителями нашего веб-сайта <a href="" target="_blank" rel="noopener noreferrer"></a> (далее — Сайт).</p>
					<p class="service-text">Настоящая Политика применяется в дополнение к общей Политике в отношении обработки персональных данных Компании, размещенной по адресу <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">/privacy-policy</a>.</p>
					<p class="service-text">Политика использования файлов cookie описывает типы файлов cookie, цели их использования и способы управления ими.</p>
					<p class="service-text">Основанием для обработки Cookie является нажатие кнопки «Принять» в окне-уведомлении об обработке cookie, которое появляется при первом посещения сайта. Этим действием Вы даете свое согласие на обработку Ваших cookie. Вы также можете отказаться от обработки cookie в соответствии с пунктом 5 настоящей Политики.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">1. Что такое файлы cookie</h2>
					<p class="service-text">Файлы cookie — это небольшие фрагменты данных со служебной информацией о посещении сайта, которые сервер отправляет на ваше устройство. Файлы cookie запоминают информацию о ваших предпочтениях, позволяют в более удобном для вас режиме просматривать посещенные сайты в течение определенного времени.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">2. Как мы используем файлы cookie</h2>
					<p class="service-text">Компания использует файлы cookie для оптимизации функционирования Веб-сайта, обеспечения его работоспособности и повышения производительности, а также для анализа статистических данных о посещенных страницах и проведения маркетинговых исследований.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">3. Какие виды cookie мы используем</h2>
					<ul class="info-item">
						<li><strong>3.1 Обязательные cookie</strong> — минимальный набор Cookies, использование которых необходимо для обеспечения правильной и бесперебойной работы веб-сайта.</li>
						<li><strong>3.2 Сессионные cookie</strong> — существуют только во временной памяти в течение времени, когда пользователь находится на странице веб-сайта, и обычно удаляются после закрытия окна браузера. Позволяют помнить выбор на предыдущей странице, чтобы избежать повторного ввода информации.</li>
						<li><strong>3.3 Постоянные cookie</strong> — сохраняются на устройстве и не удаляются при закрытии браузера. Позволяют сохранять пользовательские настройки и использовать их в будущих сеансах.</li>
						<li><strong>3.4 Аналитические/маркетинговые cookie</strong> — содержат информацию о том, как Вы используете веб-сайт (посещаемые страницы, переходы по ссылкам). Используются для улучшения функционала и пользовательского опыта, а также для отслеживания переходов с сайтов партнёров и оценки результативности рекламных каналов.</li>
						<li><strong>3.5 Сторонние cookie</strong> — устанавливаются внешними сервисами (аналитические платформы, системы таргетинга, встроенный контент). Их использование регулируется политиками соответствующих сервисов.</li>
					</ul>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">4. Как мы обрабатываем Ваши cookie</h2>
					<p class="service-text">Мы обрабатываем полученные данные, в том числе, но не ограничиваясь, с использованием метрических программ и систем аналитики, таких как Яндекс.Метрика.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">5. Как отключить использование cookie</h2>
					<p class="service-text">Cookie устанавливаются в браузер на Вашем устройстве — в большинстве случаев это происходит автоматически. Вы можете отказаться от сохранения и использования cookie на своем устройстве или удалить уже сохраненные cookie в настройках Вашего браузера.</p>
					<p class="service-text">Однако отключение некоторых cookie может ограничить функциональность сайта или сделать недоступными отдельные его разделы.</p>
					<p class="service-text">Рекомендуется проверять настройки cookie на всех устройствах (компьютерах, смартфонах, планшетах), так как параметры применяются индивидуально для каждого браузера.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">6. Веб-маяки (пиксельные теги)</h2>
					<p class="service-text">Наш Сайт, а также сторонние сервисы, задействованные в работе сайта, могут содержать веб-маяки — небольшие графические элементы, позволяющие фиксировать взаимодействие пользователей (например, переходы по ссылкам, заполнение форм и т.п.). Эти данные могут использоваться в аналитических и/или маркетинговых целях.</p>
					<p class="service-text">Веб-маяки, как правило, работают в связке с cookie, поэтому их отключение возможно через блокировку cookie.</p>
				</section>
            
	</div>
</main>

`;

export const metadata: Metadata = {
  title: "Медицинский центр Амадея в Ставрополе",
  openGraph: { locale: "ru_RU", type: "website", title: "Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/cookie-policy", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <link rel="canonical" href="https://amadeya26.ru/cookie-policy" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
