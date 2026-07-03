import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-7369" class="post-7369 page type-page status-publish hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Специалисты</h1>
                </header>

                <div class="entry-content">
                    <p><img loading="lazy" decoding="async" fetchpriority="high" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/08/1531642-580327-chimshit_square.jpg.webp" alt="" srcset="/wp-content/uploads/2024/08/1531642-580327-chimshit_square.jpg.webp 300w, /wp-content/uploads/2024/08/1531642-580327-chimshit_square-150x150.jpg.webp 150w, /wp-content/uploads/2024/08/1531642-580327-chimshit_square-225x225.jpg.webp 225w, /wp-content/uploads/2024/08/1531642-580327-chimshit_square-100x100.jpg.webp 100w" sizes="(max-width: 300px) 100vw, 300px" />															</p>
<h2>Чимшит Анна Фаритовна</h2>
<p>Функциональный диагност</p>
<p>					<a href="/speczialisty/chimshit-anna-faritovna/"><br />
	    Подробнее<br />
	</a><br />
															<img loading="lazy" decoding="async" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/08/305112-361490-fomenko_square.jpg.webp" alt="" srcset="/wp-content/uploads/2024/08/305112-361490-fomenko_square.jpg.webp 300w, /wp-content/uploads/2024/08/305112-361490-fomenko_square-150x150.jpg.webp 150w, /wp-content/uploads/2024/08/305112-361490-fomenko_square-225x225.jpg.webp 225w, /wp-content/uploads/2024/08/305112-361490-fomenko_square-100x100.jpg.webp 100w" sizes="(max-width: 300px) 100vw, 300px" />															</p>
<h2>Фоменко Оксана Анатольевна</h2>
<p>Дерматолог</p>
<p>					<a href="/speczialisty/fomenko-oksana-anatolevna/"><br />
	    Подробнее<br />
	</a><br />
															<img loading="lazy" decoding="async" decoding="async" width="800" height="800" src="/wp-content/uploads/2023/03/kb0musurvkhgq5yprfozxzl998zwf2nibtgarcwp-1.jpg.webp" alt="" srcset="/wp-content/uploads/2023/03/kb0musurvkhgq5yprfozxzl998zwf2nibtgarcwp-1.jpg.webp 800w, /wp-content/uploads/2023/03/kb0musurvkhgq5yprfozxzl998zwf2nibtgarcwp-1-300x300.jpg.webp 300w, /wp-content/uploads/2023/03/kb0musurvkhgq5yprfozxzl998zwf2nibtgarcwp-1-150x150.jpg.webp 150w, /wp-content/uploads/2023/03/kb0musurvkhgq5yprfozxzl998zwf2nibtgarcwp-1-768x768.jpg.webp 768w, /wp-content/uploads/2023/03/kb0musurvkhgq5yprfozxzl998zwf2nibtgarcwp-1-225x225.jpg.webp 225w" sizes="(max-width: 800px) 100vw, 800px" />															</p>
<h2>Карамышева Ирина Николаевна</h2>
<p>Гинеколог</p>
<p>					<a href="/speczialisty/karamysheva-irina-nikolaevna/"><br />
	    Подробнее<br />
	</a><br />
															<img loading="lazy" decoding="async" width="768" height="1024" src="/wp-content/uploads/2024/07/IMG_8627-768x1024.jpeg" alt="" srcset="/wp-content/uploads/2024/07/IMG_8627-768x1024.jpeg 768w, /wp-content/uploads/2024/07/IMG_8627-225x300.jpeg 225w, /wp-content/uploads/2024/07/IMG_8627-1152x1536.jpeg 1152w, /wp-content/uploads/2024/07/IMG_8627-1536x2048.jpeg 1536w, /wp-content/uploads/2024/07/IMG_8627-169x225.jpeg 169w, /wp-content/uploads/2024/07/IMG_8627-scaled.jpeg 1920w" sizes="auto, (max-width: 768px) 100vw, 768px" />															</p>
<h2>Мутаева Ольга Юрьевна</h2>
<p>Нарколог • психиатр • психотерапевт</p>
<p>					<a href="/speczialisty/mutaeva-olga-yurevna/"><br />
	    Подробнее<br />
	</a><br />
															<img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2023/07/543210-151413-kron_square.jpg.webp" alt="" srcset="/wp-content/uploads/2023/07/543210-151413-kron_square.jpg.webp 300w, /wp-content/uploads/2023/07/543210-151413-kron_square-150x150.jpg.webp 150w, /wp-content/uploads/2023/07/543210-151413-kron_square-225x225.jpg.webp 225w" sizes="auto, (max-width: 300px) 100vw, 300px" />															</p>
<h2>Крон Елена Ивановна</h2>
<p>нарколог • психиатр • психотерапевт</p>
<p>					<a href="/speczialisty/kron-elena-ivanovna/"><br />
	    Подробнее<br />
	</a><br />
															<img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/08/1607082-451396-rahmatulina_square.jpg.webp" alt="" srcset="/wp-content/uploads/2024/08/1607082-451396-rahmatulina_square.jpg.webp 300w, /wp-content/uploads/2024/08/1607082-451396-rahmatulina_square-150x150.jpg.webp 150w, /wp-content/uploads/2024/08/1607082-451396-rahmatulina_square-225x225.jpg.webp 225w, /wp-content/uploads/2024/08/1607082-451396-rahmatulina_square-100x100.jpg.webp 100w" sizes="auto, (max-width: 300px) 100vw, 300px" />															</p>
<h2>Рахматулина Елена Николаевна</h2>
<p>Врач УЗИ</p>
<p>					<a href="/speczialisty/rahmatulina-elena-nikolaevna/"><br />
	    Подробнее<br />
	</a><br />
															<img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/07/1995607-537493-lukashevich_square.jpg.webp" alt="" srcset="/wp-content/uploads/2024/07/1995607-537493-lukashevich_square.jpg.webp 300w, /wp-content/uploads/2024/07/1995607-537493-lukashevich_square-150x150.jpg.webp 150w, /wp-content/uploads/2024/07/1995607-537493-lukashevich_square-225x225.jpg.webp 225w" sizes="auto, (max-width: 300px) 100vw, 300px" />															</p>
<h2>Лукашевич Лада Сергеевна</h2>
<p>Эндокринолог • детский эндокринолог</p>
<p>					<a><br />
	    Подробнее<br />
	</a><br />
															<img decoding="async" src="/wp-content/uploads/2024/08/photo_2024-06-27_12-59-20.jpg.webp" title="" alt="" loading="lazy" />															</p>
<h2><a href="/speczialisty/denisenko-igor-aleksandrovich/">Денисенко Игорь Александрович</a></h2>
<p>Нарколог • психиатр • психотерапевт</p>
<p>					<a><br />
	    Подробнее<br />
	</a><br />
															<img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2023/03/1361978-967328-balakina_square.jpg.webp" alt="" srcset="/wp-content/uploads/2023/03/1361978-967328-balakina_square.jpg.webp 300w, /wp-content/uploads/2023/03/1361978-967328-balakina_square-150x150.jpg.webp 150w, /wp-content/uploads/2023/03/1361978-967328-balakina_square-225x225.jpg.webp 225w" sizes="auto, (max-width: 300px) 100vw, 300px" />															</p>
<h2><a href="/speczialisty/denisenko-igor-aleksandrovich/">Балакина Светлана Александровна</a></h2>
<p>Хирург</p>
<p>					<a><br />
	    Подробнее<br />
	</a><br />
															<img decoding="async" src="/wp-content/uploads/2024/07/Водолажский-768x1024.webp" title="" alt="" loading="lazy" />															</p>
<h2><a href="/speczialisty/denisenko-igor-aleksandrovich/">Водолажский Андрей Федорович</a></h2>
<p>Психотерапевт • нарколог</p>
<p>					<a><br />
	    Подробнее<br />
	</a><br />
															<img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2022/12/1519383-939888-mozharuk_square.jpg.webp" alt="" srcset="/wp-content/uploads/2022/12/1519383-939888-mozharuk_square.jpg.webp 300w, /wp-content/uploads/2022/12/1519383-939888-mozharuk_square-150x150.jpg.webp 150w, /wp-content/uploads/2022/12/1519383-939888-mozharuk_square-225x225.jpg.webp 225w" sizes="auto, (max-width: 300px) 100vw, 300px" />															</p>
<h2>Можарук Дарья Сергеевна</h2>
<p>Терапевт • кардиолог</p>
<p>					<a href="/speczialisty/mozharuk-darya-sergeevna/"><br />
	    Подробнее<br />
	</a></p>
                </div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Специалисты - Медицинский центр Амадея в Ставрополе",
  description: "Чимшит Анна Фаритовна Функциональный диагност Подробнее Фоменко Оксана Анатольевна Дерматолог Подробнее Карамышева Ирина Николаевна Гинеколог Подробнее Мутаева Ольга Юрьевна Нарколог • психиатр • психотерапевт Подробнее Крон Елена Ивановна нарколог • психиатр • психотерапевт Подробнее Рахматулина Елена Николаевна Врач УЗИ Подробнее…",
  alternates: { canonical: "https://amadeya26.ru/speczialisty/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Специалисты - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/speczialisty/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function SpeczialistyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/speczialisty/","url":"https://amadeya26.ru/speczialisty/","name":"Специалисты - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/speczialisty/#primaryimage"},"image":{"@id":"https://amadeya26.ru/speczialisty/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/1531642-580327-chimshit_square.jpg","datePublished":"2024-08-28T21:22:47+00:00","dateModified":"2025-08-11T05:59:59+00:00","breadcrumb":{"@id":"https://amadeya26.ru/speczialisty/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/speczialisty/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/speczialisty/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/08/1531642-580327-chimshit_square.jpg","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/08/1531642-580327-chimshit_square.jpg","width":300,"height":300},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/speczialisty/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Специалисты"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0421\\u043f\\u0435\\u0446\\u0438\\u0430\\u043b\\u0438\\u0441\\u0442\\u044b","item":"https:\\/\\/amadeya26.ru\\/speczialisty\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
