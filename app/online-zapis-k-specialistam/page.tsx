import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<main>
    <div class="container">
                    <article id="post-30" class="post-30 page type-page status-publish hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Онлайн-запись</h1>
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
<p>															<img fetchpriority="high" decoding="async" width="1024" height="1024" src="/wp-content/uploads/2024/06/photo_323-1024x1024.webp" alt="" srcset="/wp-content/uploads/2024/06/photo_323-1024x1024.webp 1024w, /wp-content/uploads/2024/06/photo_323-300x300.webp 300w, /wp-content/uploads/2024/06/photo_323-150x150.webp 150w, /wp-content/uploads/2024/06/photo_323-768x768.webp 768w, /wp-content/uploads/2024/06/photo_323-225x225.webp 225w, /wp-content/uploads/2024/06/photo_323.webp 1280w" sizes="(max-width: 1024px) 100vw, 1024px" />															</p>
<h2>КЛИНИКА АМАДЕЯ</h2>
<p>					<a href="tel:+79888641010"><br />
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
<li><a title="Дерматология" href="/priem-dermatologa-v-stavropole-klini/">Дерматология</a></li>
<li><a title="УЗИ" href="/ultrazvuovaya-diagnostika-v-stavrop/">УЗИ</a></li>
<li><a title="Гинекология" href="/priem-ginekologa-v-stavropole/">Гинекология</a></li>
</ul>
</nav>
<h2>Онлайн-запись к специалистам клиники &#171;Амадея&#187;</h2>
<figure><img decoding="async" width="150" height="150" src="/wp-content/uploads/2022/12/d69c3f3090ae5bf72cd78c3a1c96150312f7d8b861c8b9e120a25188e4b137c8e35a66f89a5fc7914e2101de15ee1c64cd63dd20007b52d5e27fbcf5e7f46db1_150x150.jpg.webp" alt="" /></figure>
<h3>Мутаева Ольга Юрьевна</h3>
<p>Нарколог • психиатр • психотерапевт • рефлексотерапевт<br />
<P>стаж 20 лет<br />
<P>Высшая категория</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=579654" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><img decoding="async" width="150" height="150" src="/wp-content/uploads/2022/12/de9002ffef829917189d032bc040cd6128a151f8d4c029f3c3550660c5a44ea970b91c3c898918d57f5d2e69abd395ce34a8197cefc5dc9aafc34a4f23c789b9_150x150.jpg.webp" alt="" /></figure>
<h3>Денисенко Игорь Александрович</h3>
<p>Нарколог • психиатр • психотерапевт<br />
<P>стаж 14 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=575464" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=390801" tabindex="-1"><img loading="lazy" decoding="async" width="150" height="150" src="/wp-content/uploads/2022/12/1ab0b00a79f7bf7b29fcb56fdf244da51db9269f9689e40394d2d15ffc79ffb710942676b102470573220f2b81f0c1fce58a6c24f6b3391f82777f448017d165_150x150.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=390801">Карамышева Ирина Николаевна</a></h3>
<p>Врач УЗИ • гинеколог • гинеколог-эндокринолог<br />
<P>Стаж 24 года • 1 категория</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=390801" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=151413&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2023/07/543210-151413-kron_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=151413&#038;source=4">Крон Елена Ивановна</a></h3>
<p>Нарколог<br />
<P>Стаж 30 лет • высшая категория</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=151413&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=390801" tabindex="-1"><img loading="lazy" decoding="async" width="800" height="800" src="/wp-content/uploads/2023/03/photo_2023-03-18_20-01-54.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=390801">Фоменко Оксана Анатольевна</a></h3>
<p>Дерматолог • венеролог<br />
<P>Стаж 20 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=361490&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=14941&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2023/03/1595096-14941-erkenova_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=14941&#038;source=4">Эркенова Жанна Алиевна </a></h3>
<p>Гинеколог<br />
<P>Стаж 24 года</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=14941&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=967328&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2023/03/1361978-967328-balakina_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=967328&#038;source=4">Балакина Светлана Александровна</a></h3>
<p>Хирург<br />
<P>Стаж  7 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=967328&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1043261&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2023/12/2248243-1043261-ushakova_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1043261&#038;source=4">Ушакова (Глазова) Олеся Викторовна</a></h3>
<p>Психолог<br />
<P>Стаж 8 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1043261&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1092321&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="150" height="150" src="/wp-content/uploads/2024/02/d99c69937fdfb056cf59215024ecac4ebe8b6e5067023f4743331dbd2de3ba9737b456012101fb38a5df5d606394d1c0eacf57635ba5fc7aa34b3a0411752067_150x150.jpg" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1092321&#038;source=4">Пучкова Анастасия Андреевна</a></h3>
<p>Клинический психолог • психолог<br />
<P>Стаж 5 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1092321&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=151417&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2023/12/1092907-151417-vodolazhskiy_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=151417&#038;source=4">Водолажский Андрей Федорович</a></h3>
<p>Психотерапевт • нарколог<br />
<P>Стаж 36 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=151417&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=537493&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="150" height="150" src="/wp-content/uploads/2024/02/b558f2211d18f3ab99c703a08b44029dd5877bff0dfdc8c9ed975329dc2c184c816a667d0930f9aa5f9f4526d1ba002225ea8fe10419daed4fe31473fe38eab8_150x150.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=537493&#038;source=4">Лукашевич Лада Сергеевна</a></h3>
<p>Эндокринолог • детский эндокринолог<br />
<P> Стаж 9 лет. Вторая категория</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=537493&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=939888&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2022/12/1519383-939888-mozharuk_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=939888&#038;source=4">Можарук Дарья Сергеевна</a></h3>
<p>Терапевт • кардиолог<br />
<P>Стаж  5 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=939888&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=580327&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="150" height="150" src="/wp-content/uploads/2022/12/f37598f1e6f4d106ba41d8434cf13814017c13419e53d86b74947b9156fba6f2969f374143bb2d34a64d8b35e13182be4b479c992aebd2b190558fab05aef9fb_150x150.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=580327&#038;source=4">Чимшит Анна Фаритовна</a></h3>
<p>Функциональный диагност<br />
<P>Стаж 17 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=580327&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1153657&#038;source=4%20" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2025/02/2849272-1153657-lavrentev_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1153657&#038;source=4%20">Лаврентьев Илья Дмитриевич</a></h3>
<p>Клинический психолог • Гипнолог</p>
<p>Стаж 9 лет</p>
<p>					<a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1153657&#038;source=4%20" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1042455&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2023/12/2009055-1042455-vlasenko_square.png.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1042455&#038;source=4">Власенко Валерий Андреевич</a></h3>
<p>Педиатр<br />
<P>Стаж  1 год</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1042455&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://prodoctorov.ru/stavropol/vrach/451396-rahmatulina/" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/05/1607082-451396-rahmatulina_square.jpg" alt="" /></a></figure>
<h3><a href="https://prodoctorov.ru/stavropol/vrach/451396-rahmatulina/">Рахматулина Елена Николаевна</a></h3>
<p>Врач УЗИ<br />
<P>Стаж 29 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=451396&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=812066&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/05/2391974-812066-grigoriadis_square.jpg" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=812066&#038;source=4">Григориадис Лариса Феодосиевна</a></h3>
<p>Детский эндокринолог<br />
<P>Стаж 10 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=812066&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://prodoctorov.ru/stavropol/vrach/362572-lomonosova/" tabindex="-1"><img decoding="async" src="https://prodoctorov.ru/media/photo/stavropol/doctorimage/362572/2081646-362572-lomonosova_square.jpg" title="" alt="" loading="lazy" /></a></figure>
<h3><a href="https://prodoctorov.ru/stavropol/vrach/362572-lomonosova/">Кильдишева Ксения Владимировна</a></h3>
<p>Кардиолог • Терапевт<br />
<P>Стаж 9 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=15203&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1176945&#038;source=4%20" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2025/02/2870266-1176945-borisova_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1176945&#038;source=4%20">Борисова Елена Алексеевна</a></h3>
<p>Клинический психолог • психолог<br />
<P>Стаж 14 лет</p>
<p>					<a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1176945&#038;source=4%20" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=809137&#038;source=4" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2023/12/2084229-809137-stepanyan_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=809137&#038;source=4">Степанян Виктория Владимировна</a></h3>
<p>Врач УЗИ<br />
<P>Стаж 25 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=809137&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://prodoctorov.ru/stavropol/vrach/808605-rusanova/" tabindex="-1"><img decoding="async" src="https://prodoctorov.ru/media/photo/stavropol/doctorimage/808605/2991169-808605-rusanova_square.jpg" title="" alt="" loading="lazy" /></a></figure>
<h3><a href="https://prodoctorov.ru/stavropol/vrach/808605-rusanova/">Боброва (Русанова) Мария Юрьевна</a></h3>
<p>Педиатр • аллерголог • детский аллерголог<br />
<P>Стаж 5 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1126274&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://prodoctorov.ru/stavropol/vrach/1186826-blohina/" tabindex="-1"><img decoding="async" src="https://prodoctorov.ru/media/photo/stavropol/doctorimage/1186826/2922615-1186826-blohina_square.jpg" title="" alt="" loading="lazy" /></a></figure>
<h3><a href="https://prodoctorov.ru/stavropol/vrach/1186826-blohina/">Блохина Юлия Алексеевна</a></h3>
<p>Психолог • детский психолог<br />
<P>Стаж 16 лет</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1126250&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1068600&#038;source=4%20" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2025/02/2327376-1068600-boyunsuzova_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1068600&#038;source=4%20">Боюнсузова Зухра Руслановна</a></h3>
<p>Невролог </p>
<p>Стаж 6 лет</p>
<p>					<a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1068600&#038;source=4%20" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=14987&#038;source=4" tabindex="-1"><img decoding="async" src="https://prodoctorov.ru/media/photo/stavropol/doctorimage/14987/2867632-14987-bobrova_square.jpg" title="" alt="" loading="lazy" /></a></figure>
<h3><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=14987&#038;source=4">Боброва Александра Николаевна</a></h3>
<p>Психотерапевт • Психолог •Психиатр<br />
<P>Стаж 21 год.</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=553756&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1225238&#038;source=4%20" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2025/02/2896470-540802-magomedova_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1225238&#038;source=4%20">Магомедова Зухра Магомедэминовна</a></h3>
<p>детский уролог • Детский ортопед • Детский хирург</p>
<p>Стаж 8 лет</p>
<p>					<a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1225238&#038;source=4%20" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=577045&#038;source=4%20" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2025/02/3106175-577045-kumratova_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=577045&#038;source=4%20">Кумратова Наталья Александровна</a></h3>
<p>Психиатр • Психотерапевт<br />
<P>Стаж 22 года</p>
<p>					<a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=577045&#038;source=4%20" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1193774&#038;source=4%20" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2025/02/2961933-1193774-parmon_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1193774&#038;source=4%20">Пармон Анастасия Сергеевна</a></h3>
<p>Детский психиатр<br />
<P>Стаж 3 года</p>
<p>					<a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1193774&#038;source=4%20" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1133823&#038;source=4%20" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2025/02/2664109-1133823-kuzmenko_square.jpg.webp" alt="" /></a></figure>
<h3><a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1133823&#038;source=4%20">Кузьменко Дарья Васильевна</a></h3>
<p>Клинический психолог</p>
<p>Стаж 13 лет</p>
<p>					<a href="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1133823&#038;source=4%20" target="_blank" rel="nofollow"><br />
									Записаться<br />
					</a></p>
<figure><a href="https://prodoctorov.ru/stavropol/vrach/1126250-zakrevskaya/" tabindex="-1"><img loading="lazy" decoding="async" width="300" height="300" src="/wp-content/uploads/2024/05/2608795-1126250-zakrevskaya_square.jpg" alt="" /></a></figure>
<h3><a href="https://prodoctorov.ru/stavropol/vrach/1126250-zakrevskaya/">Закревская Нелли Геннадьевна</a></h3>
<p>Дефектолог<br />
<P>Стаж 2 года</p>
<p>					<a href="https://booking.medflex.ru/?user=d08403255205cfe5edb04db2691b5e68&#038;employeeId=1126250&#038;source=4" target="_blank" rel="nofollow"><br />
									Записаться<br />
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
<p>					<a href="https://prodoctorov.ru/stavropol/lpu/78673-liteh/" target="_blank"><br />
<img decoding="async" src="https://prodoctorov.ru/rating/widget/recommend/78673/240.png" title="ПроДокторов - Лаборатория «Литех», Ставрополь" alt="ПроДокторов - Лаборатория «Литех», Ставрополь" ></a>				</p>
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
<p>					<a href="https://prodoctorov.ru/stavropol/lpu/98216-amadeya/" target="_blank"><br />
<img decoding="async" src="https://prodoctorov.ru/rating/widget/round/98216/200.png" title="ПроДокторов - Клиника «Амадея» (Лаборатория «Литех» на 45-й Параллели 2)" alt="ПроДокторов - Клиника «Амадея» (Лаборатория «Литех» на 45-й Параллели 2)" ></a>				</p>
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
  title: "Онлайн-запись - Медицинский центр Амадея в Ставрополе",
  description: "Онлайн-запись к специалистам клиники «Амадея» в Ставрополе: удобная запись к врачу через сайт или по телефону ☎ 8 (988) 864-10-10.",
  alternates: { canonical: "https://amadeya26.ru/online-zapis-k-specialistam/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Онлайн-запись - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/online-zapis-k-specialistam/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function OnlineZapisKSpecialistamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/online-zapis-k-specialistam/","url":"https://amadeya26.ru/online-zapis-k-specialistam/","name":"Онлайн-запись - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/online-zapis-k-specialistam/#primaryimage"},"image":{"@id":"https://amadeya26.ru/online-zapis-k-specialistam/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323-1024x1024.webp","datePublished":"2022-10-25T19:51:01+00:00","dateModified":"2025-08-11T06:02:58+00:00","breadcrumb":{"@id":"https://amadeya26.ru/online-zapis-k-specialistam/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/online-zapis-k-specialistam/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/online-zapis-k-specialistam/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/06/photo_323.webp","width":1280,"height":1280},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/online-zapis-k-specialistam/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Онлайн-запись"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/themes\\/amadeya-redesign\\/assets\\/img\\/logo.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041e\\u043d\\u043b\\u0430\\u0439\\u043d-\\u0437\\u0430\\u043f\\u0438\\u0441\\u044c","item":"https:\\/\\/amadeya26.ru\\/online-zapis-k-specialistam\\/"}]}` }} />
      <Header />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
