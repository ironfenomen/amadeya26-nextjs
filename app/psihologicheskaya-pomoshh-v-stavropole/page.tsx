import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-6038" class="post-6038 page type-page status-publish hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Психологическая помощь в Ставрополе</h1>
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
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf17f2818" aria-expanded="true" aria-controls="collapse-318ff566797cf17f2818">
										                    Семейное и детское психологическое консультирование:<br />
					                </h5>
<style>.elementor-6040 .elementor-element.elementor-element-3f93405d{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6040 .elementor-element.elementor-element-559adf3e{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6040 .elementor-element.elementor-element-3f93405d{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6040 .elementor-element.elementor-element-3f93405d{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Мы поможем вашей семье стать дружнее и счастливее. Вместе найдем способы лучше понимать друг друга и решать проблемы. Ваши дети будут расти в атмосфере любви и поддержки.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf17f3d83" aria-expanded="false" aria-controls="collapse-318ff566797cf17f3d83">
										                    Нейропсихологическая диагностика и коррекция в детском возрасте:<br />
					                </h5>
<style>.elementor-6045 .elementor-element.elementor-element-64a2d597{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6045 .elementor-element.elementor-element-3cc80048{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6045 .elementor-element.elementor-element-64a2d597{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6045 .elementor-element.elementor-element-64a2d597{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Узнайте, как развивается мозг вашего ребенка и как ему помочь учиться лучше. Мы подберем игры и занятия, которые помогут ребенку стать успешнее в школе и в общении с друзьями.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf1800f62" aria-expanded="false" aria-controls="collapse-318ff566797cf1800f62">
										                    Помощь при нарушении пищевого поведения:<br />
					                </h5>
<style>.elementor-6049 .elementor-element.elementor-element-2eb0b406{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6049 .elementor-element.elementor-element-67a7c5f2{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6049 .elementor-element.elementor-element-2eb0b406{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6049 .elementor-element.elementor-element-2eb0b406{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Еда не должна быть врагом. Мы поможем вам наладить здоровые отношения с едой, полюбить свое тело и почувствовать себя свободнее. Вместе мы найдем путь к гармоничной жизни без диет и запретов.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf18024b4" aria-expanded="false" aria-controls="collapse-318ff566797cf18024b4">
										                    Когнитивно-поведенческая психотерапия:<br />
					                </h5>
<style>.elementor-6053 .elementor-element.elementor-element-4991553f{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6053 .elementor-element.elementor-element-66f81756{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6053 .elementor-element.elementor-element-4991553f{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6053 .elementor-element.elementor-element-4991553f{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Научитесь управлять своими мыслями и поступками. Мы покажем, как избавиться от негативных мыслей и привычек, которые мешают вам жить. Вы станете увереннее и счастливее.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf1803897" aria-expanded="false" aria-controls="collapse-318ff566797cf1803897">
										                    АРТ-терапия:<br />
					                </h5>
<style>.elementor-6057 .elementor-element.elementor-element-2f4c6f51{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6057 .elementor-element.elementor-element-cfe2c9b{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6057 .elementor-element.elementor-element-2f4c6f51{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6057 .elementor-element.elementor-element-2f4c6f51{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Раскройте свой внутренний мир через творчество. Рисуя, лепя или создавая коллажи, вы поймете себя лучше и найдете новые способы решения проблем. Это весело и помогает снять стресс.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf1804ccd" aria-expanded="false" aria-controls="collapse-318ff566797cf1804ccd">
										                    Логопедия, дефектология:<br />
					                </h5>
<style>.elementor-6061 .elementor-element.elementor-element-163a7431{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6061 .elementor-element.elementor-element-50779ebb{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6061 .elementor-element.elementor-element-163a7431{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6061 .elementor-element.elementor-element-163a7431{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Поможем вашему ребенку говорить четко и понятно. Мы сделаем занятия интересными, чтобы ребенок с удовольствием учился правильно произносить звуки и строить предложения.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf180615a" aria-expanded="false" aria-controls="collapse-318ff566797cf180615a">
										                    Кризисная психология, гештальт-терапия:<br />
					                </h5>
<style>.elementor-6065 .elementor-element.elementor-element-43624a35{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6065 .elementor-element.elementor-element-33e0c9ec{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6065 .elementor-element.elementor-element-43624a35{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6065 .elementor-element.elementor-element-43624a35{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>: Когда кажется, что мир рушится, мы поможем вам найти опору. Вместе мы пройдем через трудные времена и найдем в них новые возможности для роста. Вы станете сильнее и увереннее в себе.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf18075c3" aria-expanded="false" aria-controls="collapse-318ff566797cf18075c3">
										                    Детская психология:<br />
					                </h5>
<style>.elementor-6069 .elementor-element.elementor-element-41fe178a{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6069 .elementor-element.elementor-element-4c3b3a38{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6069 .elementor-element.elementor-element-41fe178a{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6069 .elementor-element.elementor-element-41fe178a{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Поможем вам лучше понимать своего ребенка. Вы узнаете, как поддержать его в трудные моменты и как развивать его таланты. Вместе мы сделаем детство вашего ребенка счастливым.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf1808a7c" aria-expanded="false" aria-controls="collapse-318ff566797cf1808a7c">
										                    Психологическое консультирование и психологическая диагностика личности:<br />
					                </h5>
<style>.elementor-6073 .elementor-element.elementor-element-ee1f634{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6073 .elementor-element.elementor-element-2d3fdf8a{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6073 .elementor-element.elementor-element-ee1f634{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6073 .elementor-element.elementor-element-ee1f634{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Узнайте себя лучше. Мы поможем вам разобраться в своих сильных сторонах и понять, что вам мешает быть счастливым. Вместе мы наметим путь к жизни, о которой вы мечтаете.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf1809e64" aria-expanded="false" aria-controls="collapse-318ff566797cf1809e64">
										                    Психосоматика и телесная психотерапия:<br />
					                </h5>
<style>.elementor-6077 .elementor-element.elementor-element-4208b4ea{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6077 .elementor-element.elementor-element-46fe039{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6077 .elementor-element.elementor-element-4208b4ea{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6077 .elementor-element.elementor-element-4208b4ea{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Научитесь слушать свое тело. Мы покажем, как стресс влияет на здоровье и как с этим справиться. Вы почувствуете себя лучше и физически, и эмоционально.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf180b3ce" aria-expanded="false" aria-controls="collapse-318ff566797cf180b3ce">
										                    Психология зависимости:<br />
					                </h5>
<style>.elementor-6084 .elementor-element.elementor-element-62418647{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6084 .elementor-element.elementor-element-5e7555f{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6084 .elementor-element.elementor-element-62418647{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6084 .elementor-element.elementor-element-62418647{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Освободитесь от того, что вас сковывает. Мы поможем вам понять причины зависимости и найти силы ее преодолеть. Вы вернете контроль над своей жизнью и обретете свободу выбора.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf180c879" aria-expanded="false" aria-controls="collapse-318ff566797cf180c879">
										                    Терапия принятия ответственности:<br />
					                </h5>
<style>.elementor-6088 .elementor-element.elementor-element-49a4a359{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6088 .elementor-element.elementor-element-724d1660{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6088 .elementor-element.elementor-element-49a4a359{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6088 .elementor-element.elementor-element-49a4a359{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Станьте хозяином своей жизни. Мы научим вас принимать решения и отвечать за них без страха и сожаления. Вы почувствуете уверенность и свободу в своих действиях.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf180dc1d" aria-expanded="false" aria-controls="collapse-318ff566797cf180dc1d">
										                    Психоанализ:<br />
					                </h5>
<style>.elementor-6092 .elementor-element.elementor-element-34b0f9ce{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6092 .elementor-element.elementor-element-7402e9d9{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6092 .elementor-element.elementor-element-34b0f9ce{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6092 .elementor-element.elementor-element-34b0f9ce{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Раскройте тайны своего подсознания. Вместе мы разберемся в глубинных причинах ваших проблем и найдем пути к изменениям. Вы лучше поймете себя и свои истинные желания.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf180ef49" aria-expanded="false" aria-controls="collapse-318ff566797cf180ef49">
										                    Интерперсональная терапия:<br />
					                </h5>
<style>.elementor-6096 .elementor-element.elementor-element-c33d94e{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6096 .elementor-element.elementor-element-3ad630a5{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6096 .elementor-element.elementor-element-c33d94e{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6096 .elementor-element.elementor-element-c33d94e{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Улучшите свои отношения с людьми. Мы поможем вам научиться общаться так, чтобы вас понимали и ценили. Вы почувствуете себя комфортнее в любой компании.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf181035b" aria-expanded="false" aria-controls="collapse-318ff566797cf181035b">
										                    Майндфулнесс-терапия:<br />
					                </h5>
<style>.elementor-6100 .elementor-element.elementor-element-2149da54{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6100 .elementor-element.elementor-element-5ed0c33c{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6100 .elementor-element.elementor-element-2149da54{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6100 .elementor-element.elementor-element-2149da54{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Научитесь жить здесь и сейчас. Мы покажем, как справляться со стрессом и тревогой через осознанность. Вы станете спокойнее и начнете получать больше удовольствия от каждого дня.</p>
<p>			<a><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf1811811" aria-expanded="false" aria-controls="collapse-318ff566797cf1811811">
										                    Нарративная терапия:<br />
					                </h5>
<style>.elementor-6104 .elementor-element.elementor-element-77720cc9{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6104 .elementor-element.elementor-element-1ee8b0bb{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6104 .elementor-element.elementor-element-77720cc9{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6104 .elementor-element.elementor-element-77720cc9{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Станьте автором истории своей жизни. Мы поможем вам увидеть свою жизнь по-новому и изменить те части истории, которые вам не нравятся. Вы почувствуете, что можете влиять на свою судьбу.</p>
<p>			<a href="https://wa.me/79888641010"><br />
		Получить консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-318ff566797cf1812c08" aria-expanded="false" aria-controls="collapse-318ff566797cf1812c08">
										                    Схема-терапия:<br />
					                </h5>
<style>.elementor-6112 .elementor-element.elementor-element-11a87f5d{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6112 .elementor-element.elementor-element-124751f3{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6112 .elementor-element.elementor-element-11a87f5d{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6112 .elementor-element.elementor-element-11a87f5d{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Разберитесь в повторяющихся проблемах вашей жизни. Мы поможем вам понять и изменить глубинные схемы поведения. Вы научитесь справляться с трудностями и строить более здоровые отношения.</p>
<p>			<a><br />
		Записаться на консультацию<br />
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
			<a href="https://vk.com/amadeya26" target="_blank">						</a>        </li>
<li title="whatsapp" data-toggle="tooltip" data-placement="top">
			<a href="https://wa.me/79888641010" target="_blank">						</a>        </li>
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
  title: "Психологическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе",
  description: "Психологическая помощь в Ставрополе в клинике «Амадея»: консультации психолога при стрессе, тревоге, зависимостях и семейных трудностях. Запись ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Психологическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function PsihologicheskayaPomoshhVStavropolePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/","url":"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/","name":"Психологическая помощь в Ставрополе - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/#primaryimage"},"image":{"@id":"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323-1024x1024.webp","datePublished":"2024-07-27T13:47:41+00:00","dateModified":"2025-01-27T18:23:20+00:00","breadcrumb":{"@id":"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","width":1280,"height":1280},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/psihologicheskaya-pomoshh-v-stavropole/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Психологическая помощь в Ставрополе"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041f\\u0441\\u0438\\u0445\\u043e\\u043b\\u043e\\u0433\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u043f\\u043e\\u043c\\u043e\\u0449\\u044c \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/psihologicheskaya-pomoshh-v-stavropole\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
