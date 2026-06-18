import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-5983" class="post-5983 page type-page status-publish hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Психотерапевтическая помощь в Ставрополе</h1>
                </header>

                <div class="entry-content">
                    <p><a href="https://vk.com/amadeya26" target="_blank"><br />
						Icon-social-vkontakte<br />
											</a><br />
					<a href="https://wa.me/79888641010" target="_blank"><br />
						Whatsapp<br />
											</a><br />
					<a href="https://t.me/amadeyastav" target="_blank"><br />
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
											<a href="https://t.me/amadeyastav"><br />
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
<ul>
<li>
											<a href="tel:+79888641010"><br />
										8 (988) 864-10-10<br />
											</a>
									</li>
</ul>
<nav>
<ul id="menu-obrezannoe-menyu-dlya-rediza-2">
<li><a title="Главная" href="#" data-toggle="dropdown" aria-expanded="false" id="menu-item-dropdown-4821">Главная</a>
<ul aria-labelledby="menu-item-dropdown-4821" role="menu">
<li><a title="Специалисты" href="/speczialisty/">Специалисты</a></li>
</ul>
</li>
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
<h5 data-toggle="collapse" data-target="#collapse-64cb16067a4c2e545072" aria-expanded="true" aria-controls="collapse-64cb16067a4c2e545072">
										                    Системная семейная психотерапия:<br />
					                </h5>
<style>.elementor-5985 .elementor-element.elementor-element-c4f81d5{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-5985 .elementor-element.elementor-element-3a2122e{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-5985 .elementor-element.elementor-element-c4f81d5{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-5985 .elementor-element.elementor-element-c4f81d5{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Откройте новую главу в истории вашей семьи. Наша системная семейная терапия поможет вам наладить гармоничное общение и взаимопонимание между всеми членами семьи. Эффективна при решении семейных конфликтов и проблем в отношениях. Вместе мы создадим атмосферу, где каждый чувствует себя услышанным и ценным.</p>
<p>			<a><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-64cb16067a4c2e546818" aria-expanded="false" aria-controls="collapse-64cb16067a4c2e546818">
										                    Когнитивно-поведенческая терапия:<br />
					                </h5>
<style>.elementor-5992 .elementor-element.elementor-element-188ecc73{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-5992 .elementor-element.elementor-element-4ea06fcf{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-5992 .elementor-element.elementor-element-188ecc73{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-5992 .elementor-element.elementor-element-188ecc73{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Измените ход ваших мыслей – измените вашу жизнь. С помощью когнитивно-поведенческой терапии вы научитесь управлять своими эмоциями и поведением, Направлена на изменение негативных мыслей и поведенческих паттернов. Помогает развить навыки совладания с трудностями и стрессом. Эффективна при лечении депрессии, тревожности и фобий.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-64cb16067a4c2e547dca" aria-expanded="false" aria-controls="collapse-64cb16067a4c2e547dca">
										                    Психосоматика и телесная психотерапия:<br />
					                </h5>
<style>.elementor-5999 .elementor-element.elementor-element-64f45414{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-5999 .elementor-element.elementor-element-11f1c5b1{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-5999 .elementor-element.elementor-element-64f45414{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-5999 .elementor-element.elementor-element-64f45414{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Исследует связь между психологическими факторами и физическими симптомами. Наша терапия поможет вам расшифровать послания, которые тело отправляет вашему разуму. Освободитесь от физического дискомфорта, связанного с эмоциональными переживаниями, и обретите гармонию души и тела</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-64cb16067a4c2e549453" aria-expanded="false" aria-controls="collapse-64cb16067a4c2e549453">
										                    Психотерапия зависимости:<br />
					                </h5>
<style>.elementor-6006 .elementor-element.elementor-element-31c1dcf4{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6006 .elementor-element.elementor-element-247c53b2{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6006 .elementor-element.elementor-element-31c1dcf4{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6006 .elementor-element.elementor-element-31c1dcf4{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Верните себе свободу выбора. Мы поможем вам раскрыть истинные причины зависимости и вместе проложим путь к новой, полной жизни без оков пагубных привычек. Научитесь жить полной жизнью, наслаждаясь каждым моментом осознанно.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-64cb16067a4c2e54a83e" aria-expanded="false" aria-controls="collapse-64cb16067a4c2e54a83e">
										                    Терапия принятия ответственности:<br />
					                </h5>
<style>.elementor-6016 .elementor-element.elementor-element-49fa492e{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6016 .elementor-element.elementor-element-3e0ba1fb{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6016 .elementor-element.elementor-element-49fa492e{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6016 .elementor-element.elementor-element-49fa492e{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Станьте автором своей жизни. Наша терапия поможет вам взять штурвал в свои руки, научит принимать решения в соответствии с вашими истинными ценностями. Откройте в себе лидера, способного создать жизнь своей мечты.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-64cb16067a4c2e54bce4" aria-expanded="false" aria-controls="collapse-64cb16067a4c2e54bce4">
										                    Психоанализ:<br />
					                </h5>
<style>.elementor-6020 .elementor-element.elementor-element-631d697e{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6020 .elementor-element.elementor-element-101810e2{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6020 .elementor-element.elementor-element-631d697e{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6020 .elementor-element.elementor-element-631d697e{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Погрузитесь в глубины своего подсознания. Психоанализ – это увлекательное путешествие к истокам вашей личности, где вы сможете раскрыть тайны своего &#171;я&#187; и обрести небывалую свободу самовыражения. Подарите себе возможность стать той лучшей версией себя, о которой вы всегда мечтали.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-64cb16067a4c2e54d096" aria-expanded="false" aria-controls="collapse-64cb16067a4c2e54d096">
										                    Экзистенциальная терапия:<br />
					                </h5>
<style>.elementor-6026 .elementor-element.elementor-element-30d232d1{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6026 .elementor-element.elementor-element-7f2379aa{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6026 .elementor-element.elementor-element-30d232d1{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6026 .elementor-element.elementor-element-30d232d1{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Найдите свой уникальный смысл жизни. Экзистенциальная терапия поможет вам встретиться лицом к лицу с фундаментальными вопросами бытия и открыть новые горизонты самопознания. Вместе мы исследуем глубины вашей души, чтобы вы могли жить полной, осмысленной жизнью.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-64cb16067a4c2e54e4da" aria-expanded="false" aria-controls="collapse-64cb16067a4c2e54e4da">
										                    Лечение панических атак:<br />
					                </h5>
<style>.elementor-6030 .elementor-element.elementor-element-52a968b1{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6030 .elementor-element.elementor-element-3157d769{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6030 .elementor-element.elementor-element-52a968b1{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6030 .elementor-element.elementor-element-52a968b1{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Верните себе спокойствие и уверенность. Наша программа лечения панических атак поможет вам обрести контроль над своими эмоциями и телом. Мы научим вас техникам, которые позволят вам чувствовать себя в безопасности в любой ситуации, наслаждаясь каждым моментом жизни без страха и тревоги.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
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
											<a href="https://t.me/amadeyastav"><br />
										Telegram<br />
											</a>
									</li>
<li>
											<a href="https://wa.me/79888641010"><br />
										WhatsApp<br />
											</a>
									</li>
</ul>
<p>			<a href="https://prodoctorov.ru/stavropol/lpu/78673-liteh/" target="_blank"><br />
<img decoding="async" src="https://prodoctorov.ru/rating/widget/recommend/78673/240.png" title="ПроДокторов - Лаборатория «Литех», Ставрополь" alt="ПроДокторов - Лаборатория «Литех», Ставрополь" ></a>		</p>
<p>8 (988) 864-10-10</p>
<p>ул. 45 параллель 2 </br></p>
<p> пн-сб: с 7:30 &#8212; 20:00</p>
<p> вс: с 7:30 до 13:00		</p>
<ul>
<li title="icon-social-vkontakte" data-toggle="tooltip" data-placement="top">
									        </li>
<li title="whatsapp" data-toggle="tooltip" data-placement="top">
									        </li>
<li title="telegram-plane" data-toggle="tooltip" data-placement="top">
			<a href="https://t.me/amadeyastav" target="_blank">						</a>        </li>
</ul>
<p>			<a href="https://prodoctorov.ru/stavropol/lpu/98216-amadeya/" target="_blank"><br />
<img decoding="async" src="https://prodoctorov.ru/rating/widget/round/98216/200.png" title="ПроДокторов - Клиника «Амадея» (Лаборатория «Литех» на 45-й Параллели 2)" alt="ПроДокторов - Клиника «Амадея» (Лаборатория «Литех» на 45-й Параллели 2)" ></a>		</p>
<p>Номер лицензии: Л041-01197-26/00327766</p>
<p>ИНН/ОГРН: 2635248939/1212600004165</p>
<p>Информация, предоставленная на сайте носит ознакомительный характер и не является публичной офертой. Для получения подробной информации обращайтесь к администраторам клиники. До проведения процедур необходима консультация врача.</p>
<p><a href="/privacy/">Политика обработки персональных данных</a><br />
        <a href="tel:+79888641010">обратный звонок</a><br />
        <a href="https://wa.me/79888641010">написать в whatsapp</a></p>
                </div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Психотерапевтическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе",
  description: "Icon-social-vkontakte Whatsapp Telegram 8 (988) 864-10-10 Онлайн-запись Блог контакты О нас Врачи Контакты КЛИНИКА АМАДЕЯ ВЫЗВАТЬ ВРАЧА ул. 45 параллель 2пн-сб: с 7:30 до 20:00, вс: с 7:30 до 13:00 8 (988) 864-10-10 Главная Специалисты Лечение зависимостей Наши услуги Консультация…",
  alternates: { canonical: "https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Психотерапевтическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function PsihoterapevticheskayaPomoshhVStavropolePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/","url":"https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/","name":"Психотерапевтическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/#primaryimage"},"image":{"@id":"https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323-1024x1024.webp","datePublished":"2024-07-27T11:43:44+00:00","dateModified":"2025-02-06T14:10:45+00:00","breadcrumb":{"@id":"https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","width":1280,"height":1280},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/psihoterapevticheskaya-pomoshh-v-stavropole/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Психотерапевтическая помощь в Ставрополе"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041f\\u0441\\u0438\\u0445\\u043e\\u0442\\u0435\\u0440\\u0430\\u043f\\u0435\\u0432\\u0442\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u043f\\u043e\\u043c\\u043e\\u0449\\u044c \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/psihoterapevticheskaya-pomoshh-v-stavropole\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
