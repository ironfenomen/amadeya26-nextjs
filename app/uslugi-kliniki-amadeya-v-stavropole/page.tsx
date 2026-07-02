import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-6357" class="post-6357 page type-page status-publish hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Услуги клиники Амадея в Ставрополе</h1>
                </header>

                <div class="entry-content">
                    <p><a href="https://vk.com/amadeya26" target="_blank"><br />
						Icon-social-vkontakte<br />
											</a><br />
					<a href="https://wa.me/79888641010" target="_blank"><br />
						Whatsapp<br />
											</a><br />
					<a href="https://t.me/amadeya26" target="_blank"><br />
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
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac582397a99" aria-expanded="true" aria-controls="collapse-e23581b67ac582397a99">
										                    Лечение зависимостей<br />
					                </h5>
<style>.elementor-6359 .elementor-element.elementor-element-6d5a6227{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6359 .elementor-element.elementor-element-6d5a6227.e-con{--flex-grow:0;--flex-shrink:0;}.elementor-6359 .elementor-element.elementor-element-101c3525{text-align:left;color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6359 .elementor-element.elementor-element-6d5a6227{--grid-auto-flow:row;}}@media(min-width:768px){.elementor-6359 .elementor-element.elementor-element-6d5a6227{--width:92.38%;}}@media(max-width:767px){.elementor-6359 .elementor-element.elementor-element-6d5a6227{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Лечение зависимостей – это комплексный процесс, включающий медицинскую помощь, психотерапию и социальную реабилитацию. Наша цель – помочь пациентам вернуться к здоровой и полноценной жизни.</p>
<p>			<a href="/lechenie-zavisimostei-v-stavropole-2/"><br />
		Узнать подробнее<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac5823995a0" aria-expanded="false" aria-controls="collapse-e23581b67ac5823995a0">
										                    Психиатрия<br />
					                </h5>
<style>.elementor-6366 .elementor-element.elementor-element-2d7c643{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6366 .elementor-element.elementor-element-351b4d02{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6366 .elementor-element.elementor-element-2d7c643{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6366 .elementor-element.elementor-element-2d7c643{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>это область медицины, которая занимается диагностикой, лечением и профилактикой психических расстройств. В нашей клинике работают опытные психиатры, которые помогут вам или вашему близкому человеку справиться с эмоциональными трудностями и восстановить душевное равновесие.</p>
<p>			<a href="/psihiatricheskaya-pomoshh-v-stavropole/"><br />
		Записаться на консультацию<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac58239aafb" aria-expanded="false" aria-controls="collapse-e23581b67ac58239aafb">
										                    Психотерапия<br />
					                </h5>
<style>.elementor-6370 .elementor-element.elementor-element-3e9a8761{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6370 .elementor-element.elementor-element-1c376458{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6370 .elementor-element.elementor-element-3e9a8761{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6370 .elementor-element.elementor-element-3e9a8761{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Метод лечения, основанный на разговоре. Наши психотерапевты помогут вам разобраться в своих чувствах, мыслях и поведении, чтобы улучшить качество жизни и достичь гармонии.</p>
<p>			<a href="/psihoterapevticheskaya-pomoshh-v-stavropole/"><br />
		Узнать об услуге<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac58239bf06" aria-expanded="false" aria-controls="collapse-e23581b67ac58239bf06">
										                    Психолог<br />
					                </h5>
<style>.elementor-6381 .elementor-element.elementor-element-c84596{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6381 .elementor-element.elementor-element-27a483a1{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6381 .elementor-element.elementor-element-c84596{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6381 .elementor-element.elementor-element-c84596{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Возможность получить профессиональную поддержку и рекомендации от специалиста в области психологии. Наши психологи помогут вам лучше понять себя, свои чувства и поведение, а также найти пути решения проблем.</p>
<p>			<a href="/psihologicheskaya-pomoshh-v-stavropole/"><br />
		Узнать об услуге<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac58239d2e3" aria-expanded="false" aria-controls="collapse-e23581b67ac58239d2e3">
										                    Терапия<br />
					                </h5>
<style>.elementor-6389 .elementor-element.elementor-element-54bf0ffc{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6389 .elementor-element.elementor-element-bc15bb9{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6389 .elementor-element.elementor-element-54bf0ffc{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6389 .elementor-element.elementor-element-54bf0ffc{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Комплекс мер, направленных на лечение и профилактику заболеваний. Наши терапевты помогут вам восстановить здоровье и улучшить качество жизни.</p>
<p>			<a href="/priem-vracha-terapevta-v-stavropole/"><br />
		Узнать об услуге<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac58239e75f" aria-expanded="false" aria-controls="collapse-e23581b67ac58239e75f">
										                    Эндокринология<br />
					                </h5>
<style>.elementor-6396 .elementor-element.elementor-element-7fb99368{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6396 .elementor-element.elementor-element-13a09a7b{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6396 .elementor-element.elementor-element-7fb99368{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6396 .elementor-element.elementor-element-7fb99368{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Наши эндокринологи занимаются диагностикой и лечением гормональных нарушений, помогая пациентам поддерживать здоровье и хорошее самочувствие.</p>
<p>			<a href="/priem-vracha-endokrinologa-v-stavropole/"><br />
		Узнать об услуге<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac58239fb49" aria-expanded="false" aria-controls="collapse-e23581b67ac58239fb49">
										                    Гирудотерапия<br />
					                </h5>
<style>.elementor-6400 .elementor-element.elementor-element-2871a8cd{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6400 .elementor-element.elementor-element-1e66ed41{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6400 .elementor-element.elementor-element-2871a8cd{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6400 .elementor-element.elementor-element-2871a8cd{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Метод лечения, использующий медицинских пиявок. В нашей клинике применяются современные методики гирудотерапии, которые помогают улучшить кровообращение и обмен веществ.</p>
<p>			<a href="/girudoterapiya/"><br />
		Узнать об услуге<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac5823a0ed6" aria-expanded="false" aria-controls="collapse-e23581b67ac5823a0ed6">
										                    Онлайн-запись к специалистам<br />
					                </h5>
<style>.elementor-6404 .elementor-element.elementor-element-4a9cd945{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6404 .elementor-element.elementor-element-139c9d73{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6404 .elementor-element.elementor-element-4a9cd945{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6404 .elementor-element.elementor-element-4a9cd945{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Удобный сервис, позволяющий записаться на приём к специалисту, не выходя из дома. Мы ценим ваше время и хотим сделать процесс посещения врача максимально простым и удобным.</p>
<p>			<a href="/online-zapis-k-specialistam/"><br />
		Узнать об услуге<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac5823a240d" aria-expanded="false" aria-controls="collapse-e23581b67ac5823a240d">
										                    Ревматология<br />
					                </h5>
<style>.elementor-6411 .elementor-element.elementor-element-3628aea3{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6411 .elementor-element.elementor-element-24493d99{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6411 .elementor-element.elementor-element-3628aea3{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6411 .elementor-element.elementor-element-3628aea3{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Ревматологи помогут вам справиться с болью и воспалением, а также предотвратить развитие осложнений.</p>
<p>			<a href="/elementor-1309/"><br />
		Узнать об услуге<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac5823a3894" aria-expanded="false" aria-controls="collapse-e23581b67ac5823a3894">
										                    Дерматология<br />
					                </h5>
<style>.elementor-6415 .elementor-element.elementor-element-23a0aebd{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6415 .elementor-element.elementor-element-68c2b418{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6415 .elementor-element.elementor-element-23a0aebd{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6415 .elementor-element.elementor-element-23a0aebd{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>Дерматологи клиники Амадея занимаются диагностикой и лечением кожных заболеваний, помогая пациентам сохранить здоровье и красоту кожи.</p>
<p>			<a href="/priem-dermatologa-v-stavropole-klini/"><br />
		Узнать об услуге<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac5823a4b41" aria-expanded="false" aria-controls="collapse-e23581b67ac5823a4b41">
										                    УЗИ<br />
					                </h5>
<style>.elementor-6423 .elementor-element.elementor-element-56bb471{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6423 .elementor-element.elementor-element-4eb008a{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6423 .elementor-element.elementor-element-56bb471{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6423 .elementor-element.elementor-element-56bb471{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>В нашей клинике мы предлагаем широкий спектр ультразвуковых исследований, включая УЗИ органов брюшной полости, почек, мочевого пузыря, предстательной железы, молочных желёз, щитовидной железы и других органов и систем. Наши специалисты проведут УЗИ быстро, безболезненно и с максимальной точностью.</p>
<p>			<a href="/ultrazvuovaya-diagnostika-v-stavrop/"><br />
		Узнать об услуге<br />
	</a></p>
<h5 data-toggle="collapse" data-target="#collapse-e23581b67ac5823a5ec7" aria-expanded="false" aria-controls="collapse-e23581b67ac5823a5ec7">
										                    Гинекология<br />
					                </h5>
<style>.elementor-6427 .elementor-element.elementor-element-297226ec{--display:grid;--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;--background-transition:0.3s;}.elementor-6427 .elementor-element.elementor-element-14e7da0{color:var( --e-global-color-primary );}@media(max-width:1024px){.elementor-6427 .elementor-element.elementor-element-297226ec{--grid-auto-flow:row;}}@media(max-width:767px){.elementor-6427 .elementor-element.elementor-element-297226ec{--e-con-grid-template-columns:repeat(1, 1fr);--e-con-grid-template-rows:repeat(2, 1fr);--grid-auto-flow:row;}}</style>
<p>В нашей клинике работают опытные гинекологи, которые занимаются наблюдением состояния женских половых органов и при наличии заболеваний их лечением в динамике, профилактикой возможных осложнений.</p>
<p>Мы предлагаем широкий спектр услуг в области гинекологии, включая консультации, диагностику и лечение различных заболеваний. Наши специалисты используют современное оборудование и передовые методы лечения, чтобы обеспечить высокое качество обслуживания и эффективность лечения.</p>
<p>			<a href="/priem-ginekologa-v-stavropole/"><br />
		Узнать об услуге<br />
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
<p>			<a href="https://prodoctorov.ru/stavropol/lpu/78673-liteh/" target="_blank"><br />
<img decoding="async" src="https://prodoctorov.ru/rating/widget/recommend/78673/240.png" title="ПроДокторов - Лаборатория «Литех», Ставрополь" alt="ПроДокторов - Лаборатория «Литех», Ставрополь" ></a>		</p>
<p>Номер лицензии: Л041-01197-26/00327766</p>
<p>Информация, предоставленная на сайте носит ознакомительный характер и не является публичной офертой. Для получения подробной информации обращайтесь к администраторам клиники. До проведения процедур необходима консультация врача.</p>
<p><a href="http://narcologia26.ru/privacy.html" target="_blank" rel="noopener">Политика обработки<br />персональных данных</a></p>
                </div>
            </article>
            </div>
</main>

`;

export const metadata: Metadata = {
  title: "Услуги клиники Амадея в Ставрополе - Медицинский центр Амадея в Ставрополе",
  description: "Услуги клиники «Амадея» в Ставрополе: наркология, психиатрия, психотерапия, терапия, эндокринология, дерматология, УЗИ и лабораторные анализы. Запись ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Услуги клиники Амадея в Ставрополе - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function UslugiKlinikiAmadeyaVStavropolePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/","url":"https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/","name":"Услуги клиники Амадея в Ставрополе - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/#primaryimage"},"image":{"@id":"https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323-1024x1024.webp","datePublished":"2024-08-06T15:44:44+00:00","dateModified":"2025-02-12T08:13:23+00:00","breadcrumb":{"@id":"https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","width":1280,"height":1280},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/uslugi-kliniki-amadeya-v-stavropole/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Услуги клиники Амадея в Ставрополе"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u0423\\u0441\\u043b\\u0443\\u0433\\u0438 \\u043a\\u043b\\u0438\\u043d\\u0438\\u043a\\u0438 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/uslugi-kliniki-amadeya-v-stavropole\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
