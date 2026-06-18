import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-7671" class="post-7671 page type-page status-publish has-post-thumbnail hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Степурина Анна Андреевна</h1>
                </header>

                <div class="entry-content">
                    <p><img fetchpriority="high" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/08/1186047-622100-stepurina_square.jpg.webp" alt="" srcset="/wp-content/uploads/2024/08/1186047-622100-stepurina_square.jpg.webp 300w, /wp-content/uploads/2024/08/1186047-622100-stepurina_square.jpg-150x150.webp 150w, /wp-content/uploads/2024/08/1186047-622100-stepurina_square.jpg-225x225.webp 225w, /wp-content/uploads/2024/08/1186047-622100-stepurina_square.jpg-100x100.webp 100w" sizes="(max-width: 300px) 100vw, 300px" />													</p>
<p><strong><em>«От врачей и учителей требуют чуда, а если чудо свершится никто не удивляется» Мария фон Эбнер – Эшенбах</em></strong></p>
<h3>
							Опыт работы:<br />
					</h3>
<p>
						более 17 лет работы в частных и государственных медицинских учреждениях.					</p>
<h3>
							Профессиональный стаж<br />
					</h3>
<p>
						17 лет					</p>
<h3>
							Образование<br />
					</h3>
<p>
						Ставропольская государственная медицинская академия					</p>
<p>			<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=622100&#038;source=4" target="_blank" rel="nofollow noopener"><br />
									Записаться<br />
					</a></p>
<h2>Специализация</h2>
<p>Оториноларингология</p>
<h2>Опыт и достижения</h2>
<ul>
<li>С 2009 года по сегодняшний день работает практикующим врачом по своей специальности.</li>
<li>Ежегодно проходит курсы повышения квалификации.</li>
<li>За годы своей работы участвовала в различных научно – практических конферециях и семинарах:</li>
<li>Научно – практический семинар «Актуальные вопросы, инновационные технологии и стандарты лечения аллергических заболеваний.</li>
<li>Онлайн – семинар «Доказательная педиатрия: профессиональные ответы на актуальные вопросы», ЛОР – школа с профессором Шиленковой В.В.</li>
<li>«Острый и хронический тонзиллит: «подводные камни», пути решения проблемы»</li>
<li>Конференция «Рациональное применение антибиотиков в амбулаторной практике» 2019 г. СПб, и многих других.</li>
</ul>
<p>									<a data-gallery-index="0"><br />
						Лицензии, дипломы и сертификаты					</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/diplom-5-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="диплом" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY3NSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL2RpcGxvbS01LXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC0xYTVhNDA2YSJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/prilozhenie-k-diplomu-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="приложение к диплому" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY3NiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3ByaWxvemhlbmllLWstZGlwbG9tdS1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtMWE1YTQwNmEifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/sertifikat-2-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="Сертификат" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY3NywidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3NlcnRpZmlrYXQtMi1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtMWE1YTQwNmEifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/stepurina_diplom-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="Степурина_Диплом" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY3OCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3N0ZXB1cmluYV9kaXBsb20tcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLTFhNWE0MDZhIn0%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/stepurina_sertifikat-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="Степурина_сертификат" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY3OSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3N0ZXB1cmluYV9zZXJ0aWZpa2F0LXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC0xYTVhNDA2YSJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/stepurina_sertifikat_2-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="Степурина_сертификат_2" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY4MCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3N0ZXB1cmluYV9zZXJ0aWZpa2F0XzItcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLTFhNWE0MDZhIn0%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/stepurina_sertifikat_3-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="Степурина_сертификат_3" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY4MSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3N0ZXB1cmluYV9zZXJ0aWZpa2F0XzMtcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLTFhNWE0MDZhIn0%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/stepurina_sertifikat_4-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="Степурина_сертификат_4" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY4MiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3N0ZXB1cmluYV9zZXJ0aWZpa2F0XzQtcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLTFhNWE0MDZhIn0%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/stepurina_udostoverenie-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="Степурина_удостоверение" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY4MywidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3N0ZXB1cmluYV91ZG9zdG92ZXJlbmllLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC0xYTVhNDA2YSJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/stepurina_udostoverenie_2.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="Степурина_удостоверение_2" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY4NCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3N0ZXB1cmluYV91ZG9zdG92ZXJlbmllXzIuanBlZyIsInNsaWRlc2hvdyI6ImFsbC0xYTVhNDA2YSJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/udostoverenie-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="Удостоверение" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY4NSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3Vkb3N0b3ZlcmVuaWUtcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLTFhNWE0MDZhIn0%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/udostoverenie_1-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-1a5a406a" data-elementor-lightbox-title="удостоверение_1" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY4NiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3Vkb3N0b3ZlcmVuaWVfMS1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtMWE1YTQwNmEifQ%3D%3D"><br />
														</a></p>
                </div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Степурина Анна Андреевна - Медицинский центр Амадея в Ставрополе",
  description: "«От врачей и учителей требуют чуда, а если чудо свершится никто не удивляется» Мария фон Эбнер – Эшенбах Опыт работы: более 17 лет работы в частных и государственных медицинских учреждениях. Профессиональный стаж 17 лет Образование Ставропольская государственная медицинская академия Записаться…",
  alternates: { canonical: "https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Степурина Анна Андреевна - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function SpeczialistyStepurinaAnnaAndreevnaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/","url":"https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/","name":"Степурина Анна Андреевна - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/#primaryimage"},"image":{"@id":"https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/1186047-622100-stepurina_square.jpg.webp","datePublished":"2024-08-30T11:49:39+00:00","dateModified":"2024-11-05T18:10:43+00:00","breadcrumb":{"@id":"https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/08/1186047-622100-stepurina_square.jpg.webp","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/1186047-622100-stepurina_square.jpg.webp","width":300,"height":300},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/speczialisty/stepurina-anna-andreevna/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Специалисты","item":"https://amadeya26.ru/speczialisty/"},{"@type":"ListItem","position":3,"name":"Степурина Анна Андреевна"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/uploads\\/2024\\/08\\/1186047-622100-stepurina_square.jpg.webp","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0421\\u0442\\u0435\\u043f\\u0443\\u0440\\u0438\\u043d\\u0430 \\u0410\\u043d\\u043d\\u0430 \\u0410\\u043d\\u0434\\u0440\\u0435\\u0435\\u0432\\u043d\\u0430","item":"https:\\/\\/amadeya26.ru\\/speczialisty\\/stepurina-anna-andreevna\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
