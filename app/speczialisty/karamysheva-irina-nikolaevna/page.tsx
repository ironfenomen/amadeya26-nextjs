import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-7497" class="post-7497 page type-page status-publish has-post-thumbnail hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Карамышева Ирина Николаевна</h1>
                </header>

                <div class="entry-content">
                    <p><img fetchpriority="high" decoding="async" width="350" height="350" src="/wp-content/uploads/2024/08/1872d0a3-4d8c-4b71-85aa-496b9eba3e92.jpg.webp" alt="" srcset="/wp-content/uploads/2024/08/1872d0a3-4d8c-4b71-85aa-496b9eba3e92.jpg.webp 350w, /wp-content/uploads/2024/08/1872d0a3-4d8c-4b71-85aa-496b9eba3e92-300x300.jpg.webp 300w, /wp-content/uploads/2024/08/1872d0a3-4d8c-4b71-85aa-496b9eba3e92-150x150.jpg.webp 150w, /wp-content/uploads/2024/08/1872d0a3-4d8c-4b71-85aa-496b9eba3e92-225x225.jpg.webp 225w" sizes="(max-width: 350px) 100vw, 350px" />													</p>
<h3>
							Опыт работы:<br />
					</h3>
<p>
						более 25 лет работы в частных и государственных медицинских учреждениях.					</p>
<h3>
							Профессиональный стаж<br />
					</h3>
<p>
						26 лет					</p>
<h3>
							Образование<br />
					</h3>
<p>
						Ставропольский государственный медицинский университет					</p>
<p>			<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=390801" target="_blank" rel="nofollow noopener"><br />
									Записаться<br />
					</a></p>
<h2>Специализация</h2>
<p>Диагностика и лечение следующих заболеваний:</p>
<p>бесплодие (различной этиологии);воспалительные заболевания (вульвит, вагинит и др.);заболевания, передающиеся половым путем (ЗППП): хламидиоз, уреаплазмоз, микоплазмоз и др; молочница (кандидоз);эрозия шейки матки. В качестве акушера проводит:планирование беременности; ведение беременности;ведение родов;невынашивание беременности;ведение послеродового периода.</p>
<p>В качестве УЗИ-специалиста проводит:УЗД молочных желез;  УЗИ в гинекологии – трансвагинальный и трансабдоминальный методы; фолликулогинез.</p>
<h2>Опыт и достижения</h2>
<p>1998 г. Диплом по специальности &#171;Лечебное дело&#187;, Ставропольский государственный медицинский университет</p>
<p>1999г. Интернатура по специальности &#171;Акушерство и гинекология&#187;, Ставропольский государственный медицинский университет</p>
<p>Курсы повышения квалификации<br />2017 г. &#171;Ультразвуковая диагностика&#187;, Ставропольский институт повышения квалификации КарьераМедиФарм</p>
<p>Член ассоциаций врачей</p>
<p>Российская ассоциация специалистов ультразвуковой диагностики в медицине</p>
<p>									<a data-gallery-index="0"><br />
						Лицензии, дипломы и сертификаты					</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/1-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1e276592" data-elementor-lightbox-title="1" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzUwNywidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcLzEtMS1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtMWUyNzY1OTIifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/diplom-2-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1e276592" data-elementor-lightbox-title="диплом 2" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzUwOCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL2RpcGxvbS0yLTEtcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLTFlMjc2NTkyIn0%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/diplom-2-1.jpeg-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1e276592" data-elementor-lightbox-title="диплом 2.jpeg" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzUwOSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL2RpcGxvbS0yLTEuanBlZy0xLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC0xZTI3NjU5MiJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/diplom-3-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1e276592" data-elementor-lightbox-title="диплом" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzUxMCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL2RpcGxvbS0zLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC0xZTI3NjU5MiJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/sertifikat-1-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1e276592" data-elementor-lightbox-title="сертификат 1" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzUxMSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3NlcnRpZmlrYXQtMS0xLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC0xZTI3NjU5MiJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/sertifikat-2-1.jpeg-1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1e276592" data-elementor-lightbox-title="сертификат 2.jpeg" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzUxMiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3NlcnRpZmlrYXQtMi0xLmpwZWctMS1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtMWUyNzY1OTIifQ%3D%3D"><br />
														</a></p>
                </div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Карамышева Ирина Николаевна - Медицинский центр Амадея в Ставрополе",
  description: "Опыт работы: более 25 лет работы в частных и государственных медицинских учреждениях. Профессиональный стаж 26 лет Образование Ставропольский государственный медицинский университет Записаться Специализация Диагностика и лечение следующих заболеваний:бесплодие (различной этиологии);воспалительные заболевания (вульвит, вагинит и др.);заболевания, передающиеся половым путем (ЗППП): хламидиоз,…",
  alternates: { canonical: "https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Карамышева Ирина Николаевна - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function SpeczialistyKaramyshevaIrinaNikolaevnaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/","url":"https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/","name":"Карамышева Ирина Николаевна - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/#primaryimage"},"image":{"@id":"https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/1872d0a3-4d8c-4b71-85aa-496b9eba3e92.jpg","datePublished":"2024-08-28T22:30:40+00:00","dateModified":"2024-11-05T19:08:34+00:00","breadcrumb":{"@id":"https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/08/1872d0a3-4d8c-4b71-85aa-496b9eba3e92.jpg","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/1872d0a3-4d8c-4b71-85aa-496b9eba3e92.jpg","width":350,"height":350},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/speczialisty/karamysheva-irina-nikolaevna/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Специалисты","item":"https://amadeya26.ru/speczialisty/"},{"@type":"ListItem","position":3,"name":"Карамышева Ирина Николаевна"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/uploads\\/2024\\/08\\/1872d0a3-4d8c-4b71-85aa-496b9eba3e92.jpg","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041a\\u0430\\u0440\\u0430\\u043c\\u044b\\u0448\\u0435\\u0432\\u0430 \\u0418\\u0440\\u0438\\u043d\\u0430 \\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u043d\\u0430","item":"https:\\/\\/amadeya26.ru\\/speczialisty\\/karamysheva-irina-nikolaevna\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
