import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-2743" class="post-2743 page type-page status-publish hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Акция скидка на услуги центра за отзыв</h1>
                </header>

                <div class="entry-content">
                    <nav itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
<ul id="menu-1-f3e4cc5">
<li id="menu-item-4821" itemprop="name" itemprop="name" itemprop="name"><a href="/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Главная</a></li>
<li id="menu-item-5535" itemprop="name" itemprop="name" itemprop="name"><a href="/lechenie-zavisimostei-v-stavropole-2/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Лечение зависимостей</a>
<ul>
<li id="menu-item-5643" itemprop="name" itemprop="name" itemprop="name"><a href="/lechenie-zavisimostei-v-stavropole-2/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-sub-menu-item">Наши услуги</a></li>
<li id="menu-item-5277" itemprop="name" itemprop="name" itemprop="name"><a href="/konsultacziya-vracha-narkologa-v-stavr/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-sub-menu-item">Консультация нарколога</a></li>
<li id="menu-item-5293" itemprop="name" itemprop="name" itemprop="name"><a href="/onlain-konsultacziya-narkologa/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-sub-menu-item">Онлайн-консультация нарколога</a></li>
<li id="menu-item-5337" itemprop="name" itemprop="name" itemprop="name"><a href="/vyezd-vracha-narkologa-na-dom/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-sub-menu-item">Выезд врача-нарколога на дом</a></li>
<li id="menu-item-5112" itemprop="name" itemprop="name" itemprop="name"><a href="/detoksikacziya/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-sub-menu-item">Дезинтоксикация</a></li>
<li id="menu-item-5352" itemprop="name" itemprop="name" itemprop="name"><a href="/lechenie-zavisimostei-v-stavropole/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-sub-menu-item">Лечение зависимостей в Ставрополе</a></li>
<li id="menu-item-5359" itemprop="name" itemprop="name" itemprop="name"><a href="/priem-psihologa-addiktologa-v-stavro/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-sub-menu-item">Прием психолога-аддиктолога в Ставрополе</a></li>
<li id="menu-item-5366" itemprop="name" itemprop="name" itemprop="name"><a href="/psihoterapiya-pri-zavisimosti/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-sub-menu-item">Психотерапия при зависимости</a></li>
<li id="menu-item-5372" itemprop="name" itemprop="name" itemprop="name"><a href="/superviziya-pri-zavisimosti-v-stavrop/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-sub-menu-item">Супервизия при зависимости в Ставрополе</a></li>
</ul>
</li>
<li id="menu-item-5871" itemprop="name" itemprop="name" itemprop="name"><a href="/psihiatricheskaya-pomoshh-v-stavropole/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Психиатрия</a></li>
<li id="menu-item-6037" itemprop="name" itemprop="name" itemprop="name"><a href="/psihoterapevticheskaya-pomoshh-v-stavropole/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Психотерапия</a></li>
<li id="menu-item-6119" itemprop="name" itemprop="name" itemprop="name"><a href="/psihologicheskaya-pomoshh-v-stavropole/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Психолог</a></li>
<li id="menu-item-6179" itemprop="name" itemprop="name" itemprop="name"><a href="/priem-vracha-terapevta-v-stavropole/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Терапия</a></li>
<li id="menu-item-6228" itemprop="name" itemprop="name" itemprop="name"><a href="/priem-vracha-endokrinologa-v-stavropole/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Эндокринология</a></li>
<li id="menu-item-4785" itemprop="name" itemprop="name" itemprop="name"><a href="/girudoterapiya/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Гирудотерапия</a></li>
<li id="menu-item-4786" itemprop="name" itemprop="name" itemprop="name"><a href="/online-zapis-k-specialistam/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Онлайн-запись</a></li>
<li id="menu-item-4787" itemprop="name" itemprop="name" itemprop="name"><a href="/elementor-1309/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Ревматология</a></li>
<li id="menu-item-4800" itemprop="name" itemprop="name" itemprop="name"><a href="/priem-dermatologa-v-stavropole-klini/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Дерматология</a></li>
<li id="menu-item-4801" itemprop="name" itemprop="name" itemprop="name"><a href="/ultrazvuovaya-diagnostika-v-stavrop/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">УЗИ</a></li>
<li id="menu-item-6174" itemprop="name" itemprop="name" itemprop="name"><a href="/priem-ginekologa-v-stavropole/" itemprop="url" itemprop="url" itemprop="url" class = "hfe-menu-item">Гинекология</a></li>
</ul>
</nav>
<p>														<a href="/"><br />
							<img decoding="async" width="300" height="165" src="/wp-content/uploads/2024/06/bezymyannyj-300x165.webp" alt="" srcset="/wp-content/uploads/2024/06/bezymyannyj-300x165.webp 300w, /wp-content/uploads/2024/06/bezymyannyj.webp 310w" sizes="(max-width: 300px) 100vw, 300px" />								</a><br />
					<a href="https://vk.com/amadeya26" target="_blank" rel="noopener"><br />
						Icon-social-vkontakte<br />
											</a><br />
					<a href="https://wa.me/79888641010" target="_blank" rel="noopener"><br />
						Whatsapp<br />
											</a><br />
					<a href="https://t.me/amadeya26" target="_blank" rel="noopener"><br />
						Telegram<br />
											</a></p>
<ul>
<li>
											<a href="tel:+79888641010"><br />
										8 (988) 864-10-10<br />
											</a>
									</li>
</ul>
<ul>
<li>
											<a href="/online-zapis-k-specialistam/"><br />
											Онлайн-запись<br />
											</a>
									</li>
<li>
											<a href="/blog-kliniki-amadeya/"><br />
											Блог<br />
											</a>
									</li>
<li>
											<a href="/kontakty/"><br />
											контакты<br />
											</a>
									</li>
</ul>
<ul>
<li>
											<a href="#"><br />
										О нас<br />
											</a>
									</li>
<li>
											<a href="/online-zapis-k-specialistam/"><br />
										Врачи<br />
											</a>
									</li>
<li>
											<a href="/blog-kliniki-amadeya/"><br />
										Блог<br />
											</a>
									</li>
<li>
											<a href="/kontakty/"><br />
											Контакты<br />
											</a>
									</li>
</ul>
<ul>
<li>
											<a href="https://vk.com/amadeya26"><br />
											</a>
									</li>
<li>
											<a href="https://wa.me/79888641010"><br />
											</a>
									</li>
<li>
											<a href="https://t.me/amadeya26"><br />
											</a>
									</li>
</ul>
<p>													<img fetchpriority="high" decoding="async" width="1024" height="1024" src="/wp-content/uploads/2024/06/photo_323-1024x1024.webp" alt="" srcset="/wp-content/uploads/2024/06/photo_323-1024x1024.webp 1024w, /wp-content/uploads/2024/06/photo_323-300x300.webp 300w, /wp-content/uploads/2024/06/photo_323-150x150.webp 150w, /wp-content/uploads/2024/06/photo_323-768x768.webp 768w, /wp-content/uploads/2024/06/photo_323-225x225.webp 225w, /wp-content/uploads/2024/06/photo_323.webp 1280w" sizes="(max-width: 1024px) 100vw, 1024px" />													</p>
<h2>КЛИНИКА АМАДЕЯ</h2>
<p>			<a href="tel:+79888641010"><br />
									ВЫЗВАТЬ ВРАЧА<br />
					</a></p>
<p>ул. 45 параллель 2</p>
<p>пн-сб: с 7:30 до 20:00, вс: с 7:30 до 13:00</p>
<p>8 (988) 864-10-10</p>
<nav>
<ul id="menu-obrezannoe-menyu-dlya-rediza-2">
<li><a title="Главная" href="/">Главная</a></li>
<li><a title="Лечение зависимостей" href="#" data-toggle="dropdown" aria-expanded="false" id="menu-item-dropdown-5535">Лечение зависимостей</a>
<ul aria-labelledby="menu-item-dropdown-5535" role="menu">
<li><a title="Наши услуги" href="/lechenie-zavisimostei-v-stavropole-2/">Наши услуги</a></li>
<li><a title="Консультация нарколога" href="/konsultacziya-vracha-narkologa-v-stavr/">Консультация нарколога</a></li>
<li><a title="Онлайн-консультация нарколога" href="/onlain-konsultacziya-narkologa/">Онлайн-консультация нарколога</a></li>
<li><a title="Выезд врача-нарколога на дом" href="/vyezd-vracha-narkologa-na-dom/">Выезд врача-нарколога на дом</a></li>
<li><a title="Дезинтоксикация" href="/detoksikacziya/">Дезинтоксикация</a></li>
<li><a title="Лечение зависимостей в Ставрополе" href="/lechenie-zavisimostei-v-stavropole/">Лечение зависимостей в Ставрополе</a></li>
<li><a title="Прием психолога-аддиктолога в Ставрополе" href="/priem-psihologa-addiktologa-v-stavro/">Прием психолога-аддиктолога в Ставрополе</a></li>
<li><a title="Психотерапия при зависимости" href="/psihoterapiya-pri-zavisimosti/">Психотерапия при зависимости</a></li>
<li><a title="Супервизия при зависимости в Ставрополе" href="/superviziya-pri-zavisimosti-v-stavrop/">Супервизия при зависимости в Ставрополе</a></li>
</ul>
</li>
<li><a title="Психиатрия" href="/psihiatricheskaya-pomoshh-v-stavropole/">Психиатрия</a></li>
<li><a title="Психотерапия" href="/psihoterapevticheskaya-pomoshh-v-stavropole/">Психотерапия</a></li>
<li><a title="Психолог" href="/psihologicheskaya-pomoshh-v-stavropole/">Психолог</a></li>
<li><a title="Терапия" href="/priem-vracha-terapevta-v-stavropole/">Терапия</a></li>
<li><a title="Эндокринология" href="/priem-vracha-endokrinologa-v-stavropole/">Эндокринология</a></li>
<li><a title="Гирудотерапия" href="/girudoterapiya/">Гирудотерапия</a></li>
<li><a title="Онлайн-запись" href="/online-zapis-k-specialistam/">Онлайн-запись</a></li>
<li><a title="Ревматология" href="/elementor-1309/">Ревматология</a></li>
<li><a title="Дерматология" href="/priem-dermatologa-v-stavropole-klini/">Дерматология</a></li>
<li><a title="УЗИ" href="/ultrazvuovaya-diagnostika-v-stavrop/">УЗИ</a></li>
<li><a title="Гинекология" href="/priem-ginekologa-v-stavropole/">Гинекология</a></li>
</ul>
</nav>
<p>													<img decoding="async" width="300" height="199" src="/wp-content/uploads/2023/07/customer-reviews-2-300x199.jpg.webp" alt="" srcset="/wp-content/uploads/2023/07/customer-reviews-2-300x199.jpg.webp 300w, /wp-content/uploads/2023/07/customer-reviews-2-1024x678.jpg.webp 1024w, /wp-content/uploads/2023/07/customer-reviews-2-768x509.jpg.webp 768w, /wp-content/uploads/2023/07/customer-reviews-2-1536x1017.jpg.webp 1536w, /wp-content/uploads/2023/07/customer-reviews-2-2048x1356.jpg.webp 2048w" sizes="(max-width: 300px) 100vw, 300px" />													</p>
<p>Получите скидку на услуги центра при предъявлении вашего отзыва на площадках яндекс, 2гис, Гугл или ПроДокторов</p>
<h4>Телефон:</h4>
<ul>
<li>
											<a href="tel:+79888641010"><br />
											+7 (988) 864-10-10<br />
											</a>
									</li>
</ul>
<h4>Адрес:</h4>
<ul>
<li>
										г. Ставрополь, ул. 45 Параллель, д. 2
									</li>
</ul>
<h4>E-mail:</h4>
<ul>
<li>
											<a href="mailto:litehstavlab@gmail.com"><br />
											litehstavlab@gmail.com<br />
											</a>
									</li>
</ul>
<h4>Соц. сети:</h4>
<ul>
<li>
											<a href="https://vk.com/amadeya26"><br />
										vkontakte<br />
											</a>
									</li>
<li>
											<a href="https://t.me/amadeya26"><br />
										Telegram<br />
											</a>
									</li>
<li>
											<a href="https://wa.me/79888641010"><br />
										WhatsApp<br />
											</a>
									</li>
</ul>
<p>			<a href="https://prodoctorov.ru/stavropol/set/4874-laboratoriya-_liteh/" target="_blank" rel="noopener"><br />
<img decoding="async" src="https://prodoctorov.ru/rating/widget/recommend/98216/240.png" title="ПроДокторов - Лаборатория «Литех», Ставрополь" alt="ПроДокторов - Лаборатория «Литех», Ставрополь" ></a>		</p>
<p>Номер лицензии: Л041-01197-26/00327766</p>
<p>Информация, предоставленная на сайте носит ознакомительный характер и не является публичной офертой. Для получения подробной информации обращайтесь к администраторам клиники. До проведения процедур необходима консультация врача.</p>
<p><a href="http://narcologia26.ru/privacy.html" target="_blank" rel="noopener">Политика обработки<br />персональных данных</a></p>
                </div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Акция скидка на услуги центра за отзыв - Медицинский центр Амадея в Ставрополе",
  description: "Главная Лечение зависимостей Наши услуги Консультация нарколога Онлайн-консультация нарколога Выезд врача-нарколога на дом Дезинтоксикация Лечение зависимостей в Ставрополе Прием психолога-аддиктолога в Ставрополе Психотерапия при зависимости Супервизия при зависимости в Ставрополе Психиатрия Психотерапия Психолог Терапия Эндокринология Гирудотерапия Онлайн-запись Ревматология Дерматология УЗИ…",
  alternates: { canonical: "https://amadeya26.ru/elementor-2743/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Акция скидка на услуги центра за отзыв - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/elementor-2743/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function Elementor2743Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/elementor-2743/","url":"https://amadeya26.ru/elementor-2743/","name":"Акция скидка на услуги центра за отзыв - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/elementor-2743/#primaryimage"},"image":{"@id":"https://amadeya26.ru/elementor-2743/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/bezymyannyj-300x165.webp","datePublished":"2023-09-28T11:42:14+00:00","dateModified":"2024-08-22T14:39:40+00:00","breadcrumb":{"@id":"https://amadeya26.ru/elementor-2743/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/elementor-2743/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/elementor-2743/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/06/bezymyannyj.webp","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/bezymyannyj.webp","width":310,"height":171},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/elementor-2743/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Акция скидка на услуги центра за отзыв"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0410\\u043a\\u0446\\u0438\\u044f \\u0441\\u043a\\u0438\\u0434\\u043a\\u0430 \\u043d\\u0430 \\u0443\\u0441\\u043b\\u0443\\u0433\\u0438 \\u0446\\u0435\\u043d\\u0442\\u0440\\u0430 \\u0437\\u0430 \\u043e\\u0442\\u0437\\u044b\\u0432","item":"https:\\/\\/amadeya26.ru\\/elementor-2743\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
