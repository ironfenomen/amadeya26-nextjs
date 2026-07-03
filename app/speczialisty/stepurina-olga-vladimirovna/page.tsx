import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-7690" class="post-7690 page type-page status-publish has-post-thumbnail hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Степурина Ольга Владимировна</h1>
                </header>

                <div class="entry-content">
                    <p><img loading="lazy" decoding="async" fetchpriority="high" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/08/341489-553756-stepurina_square-1.jpg.webp" alt="" srcset="/wp-content/uploads/2024/08/341489-553756-stepurina_square-1.jpg.webp 300w, /wp-content/uploads/2024/08/341489-553756-stepurina_square-1-150x150.jpg.webp 150w, /wp-content/uploads/2024/08/341489-553756-stepurina_square-1-225x225.jpg.webp 225w, /wp-content/uploads/2024/08/341489-553756-stepurina_square-1-100x100.jpg.webp 100w" sizes="(max-width: 300px) 100vw, 300px" />													</p>
<h3>
							Опыт работы:<br />
					</h3>
<p>
						более 36 лет работы в частных и государственных медицинских учреждениях.					</p>
<h3>
							Профессиональный стаж<br />
					</h3>
<p>
						36 лет					</p>
<h3>
							Образование<br />
					</h3>
<p>
						Ставропольская государственная медицинская академия					</p>
<p>			<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=553756&#038;source=4" target="_blank" rel="nofollow noopener"><br />
									Записаться<br />
					</a></p>
<h2>Специализация</h2>
<p>Кандидат наук, высшая категория</p>
<h2>Опыт и достижения</h2>
<p>									<a data-gallery-index="0"><br />
						Лицензии, дипломы и сертификаты					</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/diplom-pediatriya-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="диплом педиатрия" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY5NCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL2RpcGxvbS1wZWRpYXRyaXlhLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC00NWEzODM1NyJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/kand.nauk-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="канд.наук" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY5NSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL2thbmQubmF1ay1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtNDVhMzgzNTcifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/pediatriya-2020-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="педиатрия 2020" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY5NiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3BlZGlhdHJpeWEtMjAyMC1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtNDVhMzgzNTcifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/pov-e-kvalifikaczii-det.kardiologiya-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="пов-е квалификации дет.кардиология" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY5NywidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3Bvdi1lLWt2YWxpZmlrYWN6aWktZGV0LmthcmRpb2xvZ2l5YS1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtNDVhMzgzNTcifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/povysh-e-kvalif.-kardiologiya-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="повыш-е квалиф. кардиология" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY5OCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3BvdnlzaC1lLWt2YWxpZi4ta2FyZGlvbG9naXlhLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC00NWEzODM1NyJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/povysh-e-kval-czii-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="повыш-е квал-ции" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzY5OSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3BvdnlzaC1lLWt2YWwtY3ppaS1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtNDVhMzgzNTcifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/sert.-det.kard-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="серт. дет.кард" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcwMCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3NlcnQuLWRldC5rYXJkLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC00NWEzODM1NyJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/sertifikat-gastro-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="сертификат гастро" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcwMSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3NlcnRpZmlrYXQtZ2FzdHJvLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC00NWEzODM1NyJ9"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/sertifikat-pediatriya-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="сертификат педиатрия" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcwMiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3NlcnRpZmlrYXQtcGVkaWF0cml5YS1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtNDVhMzgzNTcifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/udost-lor-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="удост лор" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcwMywidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3Vkb3N0LWxvci1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtNDVhMzgzNTcifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/udost.-gastro-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="удост. гастро" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcwNCwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3Vkb3N0Li1nYXN0cm8tcm90YXRlZC5qcGVnIiwic2xpZGVzaG93IjoiYWxsLTQ1YTM4MzU3In0%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/udost.-det.kard-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="удост. дет.кард" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcwNSwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3Vkb3N0Li1kZXQua2FyZC1yb3RhdGVkLmpwZWciLCJzbGlkZXNob3ciOiJhbGwtNDVhMzgzNTcifQ%3D%3D"><br />
														</a><br />
							<a data-e-gallery-tags="0" href="/wp-content/uploads/2024/08/udost.-pediatriya-rotated.jpeg" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="all-45a38357" data-elementor-lightbox-title="удост. педиатрия" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NzcwNiwidXJsIjoiaHR0cHM6XC9cL2FtYWRleWEyNi5ydVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDhcL3Vkb3N0Li1wZWRpYXRyaXlhLXJvdGF0ZWQuanBlZyIsInNsaWRlc2hvdyI6ImFsbC00NWEzODM1NyJ9"><br />
														</a></p>
                </div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Степурина Ольга Владимировна - Медицинский центр Амадея в Ставрополе",
  description: "Опыт работы: более 36 лет работы в частных и государственных медицинских учреждениях. Профессиональный стаж 36 лет Образование Ставропольская государственная медицинская академия Записаться Специализация Кандидат наук, высшая категория Опыт и достижения Лицензии, дипломы и сертификаты",
  alternates: { canonical: "https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Степурина Ольга Владимировна - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function SpeczialistyStepurinaOlgaVladimirovnaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/","url":"https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/","name":"Степурина Ольга Владимировна - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/#primaryimage"},"image":{"@id":"https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/341489-553756-stepurina_square-1.jpg","datePublished":"2024-08-30T11:59:59+00:00","dateModified":"2024-11-05T17:59:18+00:00","breadcrumb":{"@id":"https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/08/341489-553756-stepurina_square-1.jpg","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/341489-553756-stepurina_square-1.jpg","width":300,"height":300},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/speczialisty/stepurina-olga-vladimirovna/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Специалисты","item":"https://amadeya26.ru/speczialisty/"},{"@type":"ListItem","position":3,"name":"Степурина Ольга Владимировна"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/uploads\\/2024\\/08\\/341489-553756-stepurina_square-1.jpg","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0421\\u0442\\u0435\\u043f\\u0443\\u0440\\u0438\\u043d\\u0430 \\u041e\\u043b\\u044c\\u0433\\u0430 \\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\\u043e\\u0432\\u043d\\u0430","item":"https:\\/\\/amadeya26.ru\\/speczialisty\\/stepurina-olga-vladimirovna\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
