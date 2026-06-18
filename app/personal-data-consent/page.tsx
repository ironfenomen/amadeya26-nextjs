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
					<span class="breadcrumb-current">Согласие на обработку персональных данных</span>
				</nav>

				<section class="service-why">
						<h1 class="service-section-title">Согласие на обработку персональных данных</h1>
						<p class="service-description">Пользователь предоставляет согласие при отправке форм на сайте, включая сбор, хранение и использование в целях оказания услуг и обратной связи.</p>
				</section>

				<section class="service-why">
					<h2 class="service-section-title">Согласие на обработку персональных данных</h2>
					<p class="service-text">Настоящим документом, в соответствии с положениями Федерального закона № 152-ФЗ «О персональных данных» от 27 июля 2006 года, я, субъект персональных данных (далее – Пользователь), время использования мною веб-сайта по адресу: <a href="" target="_blank" rel="noopener noreferrer"></a> (далее – Сайт), выражаю свое добровольное, осознанное и однозначное согласие на обработку моих персональных данных Обществу с ограниченной ответственностью «Амадея» (далее – Оператор), зарегистрированному по адресу: г. Ставрополь, ул. 45-я Параллель, 2</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">Согласие выдано на обработку следующих категорий персональных данных:</h2>
					<ul class="info-item">
						<li>Данные, указанные в специальных формах на сайте. К ним относятся: фамилия, имя, адрес электронной почты (e-mail), номер телефона и другая аналогичная информация, на основании которой можно идентифицировать субъекта персональных данных.</li>
						<li>Файлы cookie, которые могут включать, но не ограничиваются следующими данными: параметры сессии, дата и время доступа к Сайту, адрес посещаемой страницы, источник входа, реферер (адрес предыдущей страницы), информация о поведении (включая количество и наименование просмотренных страниц), прочие технические данные (данные о технических средствах и характеристиках используемого оборудования, включая мобильные устройства, и способах технологического взаимодействия с сайтом и его сервисами, включая вид операционной системы Пользователя, тип браузера, географическое положение, данные о провайдере и другое), об активности Пользователя при использовании сайта, об информации об ошибках, выдаваемых Пользователю, о скачанных файлах, инструментах, данные об активности Пользователя на веб-сайте, в том числе данные, полученные посредством применения метрических программ и аналитических систем, таких как Яндекс.Метрика;</li>
						<li>IP-адрес и статистика об IP-адресах.</li>
					</ul>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">Я даю согласие на обработку своих персональных данных в следующих целях:</h2>
					<ul class="info-item">
						<li>Для получения доступа к Сайту, его содержимому и функциональным возможностям Сайта.</li>
						<li>Для использования услуг и сервисов, доступных на Сайте, включая обработку запросов и заявок.</li>
						<li>Для обеспечения обратной связи, включая отправку уведомлений и запросов.</li>
						<li>Для подтверждения полноты предоставленных персональных данных.</li>
						<li>Для сбора статистических и/или аналитических данных.</li>
						<li>Для улучшения качества работы Сайта и его сервисов, повышения удобства их использования и разработки новых функций и возможностей.</li>
					</ul>
				</section>

				<section class="service-individual">
					<p class="service-text">Согласие выдано на обработку персональных данных смешанным (автоматизированным и неавтоматизированным) способом с соблюдением мер, обеспечивающих их защиту от несанкционированного доступа.</p>
					<p class="service-text">Компания имеет право обрабатывать персональные данные пользователя, включая их сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), блокирование, удаление и уничтожение.</p>
					<p class="service-text">Настоящим подтверждаю свое согласие с Политикой данных ООО «Центр 7» в отношении обработки персональных данных, размещенной на странице по адресу: <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">/privacy-policy</a>, а также с согласие с Политикой в отношении обработки файлов cookie, размещенной на странице по адресу <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">/cookie-policy</a>.</p>
					<p class="service-text">Настоящее Согласие дается на неопределенный срок и может быть отозвано мной в любое время путем направления письменного уведомления на адрес Оператора. Отзыв согласия не влияет на законность обработки персональных данных, осуществленной до момента отзыва согласия.</p>
				</section>
            
	</div>
</main>

`;

export const metadata: Metadata = {
  title: "Медицинский центр Амадея в Ставрополе",
  openGraph: { locale: "ru_RU", type: "website", title: "Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/personal-data-consent", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function PersonalDataConsentPage() {
  return (
    <>
      <link rel="canonical" href="https://amadeya26.ru/personal-data-consent" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
