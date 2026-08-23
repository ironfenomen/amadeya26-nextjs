import type { Metadata } from "next";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-34" class="post-34 page type-page status-publish hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Контакты</h1>
                </header>

                <div class="entry-content"><h2>Контакты клиники &#171;Амадея&#187;</h2>
<h2>Адрес</h2>
<p>ул. 45-я Параллель, 2, Ставрополь.</p>
<p>Ставропольский край, 355011</p>
<h2>Телефон и e-mail</h2>
<p><a href="tel:+380441234567">+7 (988) 864-10-10</a></p>
<p><a href="mailto:litehstavlab@gmail.com">litehstavlab@gmail.com</a></p>
<h2>Соц.сети и мессенджеры</h2>
<div class="a26-contacts-social">
					<a class="a26-soc a26-soc--wt" href="https://wa.me/79888641010" target="_blank" rel="noopener">Whatsapp</a>
					<a class="a26-soc a26-soc--tg" href="https://t.me/liteh_stav_lab" target="_blank" rel="noopener">Telegram</a>
					<a class="a26-soc a26-soc--vk" href="https://vk.com/litehstavlab" target="_blank" rel="noopener">Vk</a>
</div>
<p>			<iframe loading="lazy" title="Карта проезда — Медицинский центр Амадея" src="https://yandex.ru/map-widget/v1/?um=constructor%3A04d5da944667e458e6c1e125894c012662d627fa15e09ad9f11f2f612627fd23&amp;source=constructor" width="500" height="720" frameborder="0"></iframe>		</p>

<p>			<a href="https://prodoctorov.ru/stavropol/set/4874-laboratoriya-_liteh/" target="_blank" rel="noopener"><br />
<img referrerpolicy="no-referrer" loading="lazy" decoding="async" src="/images/ext/pd-recommend-amadeya-240.png" title="ПроДокторов - Лаборатория «Литех», Ставрополь" alt="ПроДокторов - Лаборатория «Литех», Ставрополь" ></a>		</p><p>Номер лицензии: Л041-01197-26/00327766</p>
<p>Информация, предоставленная на сайте носит ознакомительный характер и не является публичной офертой. Для получения подробной информации обращайтесь к администраторам клиники. До проведения процедур необходима консультация врача.</p>
</div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Контакты - Медицинский центр Амадея в Ставрополе",
  description: "Контакты клиники «Амадея» в Ставрополе: адрес, телефон, режим работы. Записаться на приём ☎ 8 (988) 864-10-10, ул. 45 параллель, 2.",
  alternates: { canonical: "https://amadeya26.ru/kontakty/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Контакты - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/kontakty/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function KontaktyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/kontakty/","url":"https://amadeya26.ru/kontakty/","name":"Контакты - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/kontakty/#primaryimage"},"image":{"@id":"https://amadeya26.ru/kontakty/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/bezymyannyj-300x165.webp","datePublished":"2022-12-03T15:11:52+00:00","dateModified":"2024-08-22T14:57:32+00:00","breadcrumb":{"@id":"https://amadeya26.ru/kontakty/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/kontakty/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/kontakty/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/06/bezymyannyj.webp","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/bezymyannyj.webp","width":310,"height":171},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/kontakty/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Контакты"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041a\\u043e\\u043d\\u0442\\u0430\\u043a\\u0442\\u044b","item":"https:\\/\\/amadeya26.ru\\/kontakty\\/"}]}` }} />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </>
  );
}
