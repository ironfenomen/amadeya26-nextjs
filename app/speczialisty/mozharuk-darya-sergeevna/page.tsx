import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-7620" class="post-7620 page type-page status-publish has-post-thumbnail hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Можарук Дарья Сергеевна</h1>
                </header>

                <div class="entry-content">
                    <p><img loading="lazy" decoding="async" fetchpriority="high" decoding="async" width="768" height="1024" src="/wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-768x1024.jpg.webp" alt="" srcset="/wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-768x1024.jpg.webp 768w, /wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-225x300.jpg.webp 225w, /wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-1152x1536.jpg.webp 1152w, /wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-1536x2048.jpg.webp 1536w, /wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-169x225.jpg.webp 169w, /wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-scaled.jpg.webp 1920w" sizes="(max-width: 768px) 100vw, 768px" />															</p>
<h3>
							Опыт работы:<br />
					</h3>
<p>
						более 5 лет работы в частных и государственных медицинских учреждениях.					</p>
<h3>
							Профессиональный стаж<br />
					</h3>
<p>
						5 лет					</p>
<h3>
							Образование<br />
					</h3>
<p>
						Ставропольский государственный медицинский университет					</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=939888&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<h2>Специализация</h2>
<p>Терапевт, кардиолог</p>
<p>Гастрит, ревматоидный артрит, болезнь гастроэзофагеальная рефлюксная, подагра, системная красная волчанка, пневмония, отит, тонзиллит, артериальная гипертензия, ишемическая болезнь сердца</p>
<h2>Опыт и достижения</h2>
<ul>
<li>
<p>2019 г. Диплом по специальности &#171;Лечебное дело&#187;, Ставропольский государственный медицинский университет</p>
<p>2021г. Ординатура по специальности &#171;Терапия&#187;, Ставропольская государственная медицинская академия</p>
</li>
</ul>
<p>									<a data-gallery-index="0"><br />
						Лицензии, дипломы и сертификаты					</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/1-3-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-a17f203" data-elementor-lightbox-title="1" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzYyMiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcLzEtMy1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtYTE3ZjIwMyJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/8-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-a17f203" data-elementor-lightbox-title="8" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzYyMywidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcLzgtMS1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtYTE3ZjIwMyJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/9-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-a17f203" data-elementor-lightbox-title="9" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzYyNCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcLzktMS1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtYTE3ZjIwMyJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/12-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-a17f203" data-elementor-lightbox-title="12" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzYyNSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcLzEyLTEtcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLWExN2YyMDMifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/13-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-a17f203" data-elementor-lightbox-title="13" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzYyNiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcLzEzLTEtcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLWExN2YyMDMifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/17-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-a17f203" data-elementor-lightbox-title="17" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzYyNywidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcLzE3LTEtcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLWExN2YyMDMifQ%3D%3D"><br />
														</a></p>
                </div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Можарук Дарья Сергеевна - Медицинский центр Амадея в Ставрополе",
  description: "Опыт работы: более 5 лет работы в частных и государственных медицинских учреждениях. Профессиональный стаж 5 лет Образование Ставропольский государственный медицинский университет Записаться Специализация Терапевт, кардиологГастрит, ревматоидный артрит, болезнь гастроэзофагеальная рефлюксная, подагра, системная красная волчанка, пневмония, отит, тонзиллит, артериальная гипертензия, ишемическая…",
  alternates: { canonical: "https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Можарук Дарья Сергеевна - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function SpeczialistyMozharukDaryaSergeevnaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/","url":"https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/","name":"Можарук Дарья Сергеевна - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/#primaryimage"},"image":{"@id":"https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-scaled.jpg","datePublished":"2024-08-29T18:06:35+00:00","dateModified":"2025-08-11T04:28:20+00:00","breadcrumb":{"@id":"https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-scaled.jpg","contentUrl":"https://amadeya26.ru/wp-content/uploads/2023/03/0beb40d65a8621c5e6d93064d924ebd1-scaled.jpg","width":1920,"height":2560},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/speczialisty/mozharuk-darya-sergeevna/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Специалисты","item":"https://amadeya26.ru/speczialisty/"},{"@type":"ListItem","position":3,"name":"Можарук Дарья Сергеевна"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/uploads\\/2023\\/03\\/0beb40d65a8621c5e6d93064d924ebd1-768x1024.jpg","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041c\\u043e\\u0436\\u0430\\u0440\\u0443\\u043a \\u0414\\u0430\\u0440\\u044c\\u044f \\u0421\\u0435\\u0440\\u0433\\u0435\\u0435\\u0432\\u043d\\u0430","item":"https:\\/\\/amadeya26.ru\\/speczialisty\\/mozharuk-darya-sergeevna\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
