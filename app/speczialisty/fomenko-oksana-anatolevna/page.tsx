import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-7710" class="post-7710 page type-page status-publish has-post-thumbnail hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Фоменко Оксана Анатольевна</h1>
                </header>

                <div class="entry-content">
                    <p><img loading="lazy" decoding="async" fetchpriority="high" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/08/305112-361490-fomenko_square.jpg.webp" alt="" srcset="/wp-content/uploads/2024/08/305112-361490-fomenko_square.jpg.webp 300w, /wp-content/uploads/2024/08/305112-361490-fomenko_square-150x150.jpg.webp 150w, /wp-content/uploads/2024/08/305112-361490-fomenko_square-225x225.jpg.webp 225w, /wp-content/uploads/2024/08/305112-361490-fomenko_square-100x100.jpg.webp 100w" sizes="(max-width: 300px) 100vw, 300px" />													</p>
<p><strong><em>«Если больному после разговора с врачом не стало легче, то это не врач» В.М. Бехтерев</em></strong></p>
<h3>
							Опыт работы:<br />
					</h3>
<p>
						более 20 лет работы в частных и государственных медицинских учреждениях.					</p>
<h3>
							Профессиональный стаж<br />
					</h3>
<p>
						20 лет					</p>
<h3>
							Образование<br />
					</h3>
<p>
						Курский государственный медицинский университет					</p>
<p>			<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=361490&#038;source=4" target="_blank" rel="nofollow noopener"><br />
									Записаться<br />
					</a></p>
<h2>Специализация</h2>
<p>Занимается лечением всех кожных заболеваний у детей и взрослых с 2005 по настоящий момент.</p>
<h2>Опыт и достижения</h2>
<ul>
<li>2004 – 2005 гг. специализация «Дерматовенерология» на базе кафедры кожных и венерических болезней КККВД г. Курска.</li>
<li>С 2005 г работала в Государственной поликлинике на приёме с взрослыми и детьми. Вела прием в ОДКБ (Областной Курской детской больнице) и консультировала детей в стационаре. Также имеет базовое образование по косметологии, работала в течение 3-х лет дерматологом – косметологом. В течение последних 7 лет ведёт прием только в частных клиниках и центрах.</li>
<li>В 2010, 2015 и 2020 г повышение квалификации по специальности «Дерматовенерология». Имеются многочисленные сертификаты о прохождении курсов и прослушивание семинаров по дерматоскопии, акне, дерматоонкологии, псориазу.</li>
<li>Постоянно посещает и совершенствует свои знания на конференциях и дерматологических чтениях в Москве и Санкт – Петербурге.</li>
</ul>
<p>									<a data-gallery-index="0"><br />
						Лицензии, дипломы и сертификаты					</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/diplom-fomenko-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-5a1b48da" data-elementor-lightbox-title="диплом Фоменко" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcxMywidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL2RpcGxvbS1mb21lbmtvLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC01YTFiNDhkYSJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/svid-vo-fomenko-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-5a1b48da" data-elementor-lightbox-title="свид-во Фоменко" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcxNCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3N2aWQtdm8tZm9tZW5rby1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtNWExYjQ4ZGEifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/sert-t-fomenko-2015g-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-5a1b48da" data-elementor-lightbox-title="серт-т Фоменко 2015г" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcxNSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3NlcnQtdC1mb21lbmtvLTIwMTVnLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC01YTFiNDhkYSJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/sert-t-fomenko-2020g.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-5a1b48da" data-elementor-lightbox-title="серт-т Фоменко 2020г" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcxNiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3NlcnQtdC1mb21lbmtvLTIwMjBnLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtNWExYjQ4ZGEifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/udost.-fomenko-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-5a1b48da" data-elementor-lightbox-title="удост. Фоменко" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcxNywidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3Vkb3N0Li1mb21lbmtvLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC01YTFiNDhkYSJ9"><br />
														</a></p>
                </div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Фоменко Оксана Анатольевна - Медицинский центр Амадея в Ставрополе",
  description: "«Если больному после разговора с врачом не стало легче, то это не врач» В.М. Бехтерев Опыт работы: более 20 лет работы в частных и государственных медицинских учреждениях. Профессиональный стаж 20 лет Образование Курский государственный медицинский университет Записаться Специализация Занимается лечением…",
  alternates: { canonical: "https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Фоменко Оксана Анатольевна - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function SpeczialistyFomenkoOksanaAnatolevnaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/","url":"https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/","name":"Фоменко Оксана Анатольевна - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/#primaryimage"},"image":{"@id":"https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/305112-361490-fomenko_square.jpg","datePublished":"2024-08-30T12:05:37+00:00","dateModified":"2024-11-05T17:58:25+00:00","breadcrumb":{"@id":"https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/08/305112-361490-fomenko_square.jpg","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/305112-361490-fomenko_square.jpg","width":300,"height":300},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/speczialisty/fomenko-oksana-anatolevna/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Специалисты","item":"https://amadeya26.ru/speczialisty/"},{"@type":"ListItem","position":3,"name":"Фоменко Оксана Анатольевна"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/uploads\\/2024\\/08\\/305112-361490-fomenko_square.jpg","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0424\\u043e\\u043c\\u0435\\u043d\\u043a\\u043e \\u041e\\u043a\\u0441\\u0430\\u043d\\u0430 \\u0410\\u043d\\u0430\\u0442\\u043e\\u043b\\u044c\\u0435\\u0432\\u043d\\u0430","item":"https:\\/\\/amadeya26.ru\\/speczialisty\\/fomenko-oksana-anatolevna\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
