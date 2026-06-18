import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// G1 render-crawl: <main> taken verbatim from live (the_content() HTML, no Elementor render)
const pageContent = `

<div class="wp-site-blocks"><header class="wp-block-template-part">
<div class="wp-block-group alignwide has-base-background-color has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style="padding-top:20px;padding-bottom:20px">
<div class="wp-block-group alignwide is-content-justification-space-between is-layout-flex wp-container-core-group-is-layout-b585a4aa wp-block-group-is-layout-flex">
<div class="wp-block-group is-layout-flex wp-container-core-group-is-layout-fbcf6490 wp-block-group-is-layout-flex"><div class="wp-block-site-logo"><a href="/" class="custom-logo-link" rel="home"><img width="60" height="60" src="/wp-content/uploads/2022/10/LOGO12.png" class="custom-logo" alt="Медицинский центр Амадея в Ставрополе" decoding="async" /></a></div>


<div class="wp-block-group is-layout-flow wp-container-core-group-is-layout-47e5a185 wp-block-group-is-layout-flow"><p class="wp-block-site-title"><a href="" target="_self" rel="home">Медицинский центр Амадея в Ставрополе</a></p></div>
</div>



<div class="wp-block-group is-content-justification-left is-layout-flex wp-container-core-group-is-layout-bc8e6f51 wp-block-group-is-layout-flex"><nav class="is-responsive items-justified-right wp-block-navigation is-horizontal is-content-justification-right is-layout-flex wp-container-core-navigation-is-layout-cca85a86 wp-block-navigation-is-layout-flex" aria-label="Обрезанное меню для редиза" 
		 data-wp-interactive="core/navigation" data-wp-context='{"overlayOpenedBy":{"click":false,"hover":false,"focus":false},"type":"overlay","roleAttribute":"","ariaLabel":"\\u041c\\u0435\\u043d\\u044e"}'><button aria-haspopup="dialog" aria-label="Открыть меню" class="wp-block-navigation__responsive-container-open" 
				data-wp-on-async--click="actions.openMenuOnClick"
				data-wp-on--keydown="actions.handleMenuKeydown"
			><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="7.5" width="16" height="1.5" /><rect x="4" y="15" width="16" height="1.5" /></svg></button>
				<div class="wp-block-navigation__responsive-container"  id="modal-1" 
				data-wp-class--has-modal-open="state.isMenuOpen"
				data-wp-class--is-menu-open="state.isMenuOpen"
				data-wp-watch="callbacks.initMenu"
				data-wp-on--keydown="actions.handleMenuKeydown"
				data-wp-on-async--focusout="actions.handleMenuFocusout"
				tabindex="-1"
			>
					<div class="wp-block-navigation__responsive-close" tabindex="-1">
						<div class="wp-block-navigation__responsive-dialog" 
				data-wp-bind--aria-modal="state.ariaModal"
				data-wp-bind--aria-label="state.ariaLabel"
				data-wp-bind--role="state.roleAttribute"
			>
							<button aria-label="Закрыть меню" class="wp-block-navigation__responsive-container-close" 
				data-wp-on-async--click="actions.closeMenuOnClick"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z"></path></svg></button>
							<div class="wp-block-navigation__responsive-container-content" 
				data-wp-watch="callbacks.focusFirstElement"
			 id="modal-1-content">
								<ul class="wp-block-navigation__container is-responsive items-justified-right wp-block-navigation"><li data-wp-context="{ &quot;submenuOpenedBy&quot;: { &quot;click&quot;: false, &quot;hover&quot;: false, &quot;focus&quot;: false }, &quot;type&quot;: &quot;submenu&quot;, &quot;modal&quot;: null }" data-wp-interactive="core/navigation" data-wp-on--focusout="actions.handleMenuFocusout" data-wp-on--keydown="actions.handleMenuKeydown" data-wp-on-async--mouseenter="actions.openMenuOnHover" data-wp-on-async--mouseleave="actions.closeMenuOnHover" data-wp-watch="callbacks.initMenu" tabindex="-1" class="wp-block-navigation-item has-child open-on-hover-click  menu-item menu-item-type-post_type menu-item-object-page menu-item-home wp-block-navigation-submenu"><a class="wp-block-navigation-item__content" href="/" title=""><span class="wp-block-navigation-item__label">Главная</span></a><button data-wp-bind--aria-expanded="state.isMenuOpen" data-wp-on-async--click="actions.toggleMenuOnClick" aria-label="Главная подменю" class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle" ><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false"><path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path></svg></button><ul data-wp-on-async--focus="actions.openMenuOnFocus" class="wp-block-navigation__submenu-container  menu-item menu-item-type-post_type menu-item-object-page menu-item-home wp-block-navigation-submenu"><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/speczialisty/" title=""><span class="wp-block-navigation-item__label">Специалисты</span></a></li></ul></li><li data-wp-context="{ &quot;submenuOpenedBy&quot;: { &quot;click&quot;: false, &quot;hover&quot;: false, &quot;focus&quot;: false }, &quot;type&quot;: &quot;submenu&quot;, &quot;modal&quot;: null }" data-wp-interactive="core/navigation" data-wp-on--focusout="actions.handleMenuFocusout" data-wp-on--keydown="actions.handleMenuKeydown" data-wp-on-async--mouseenter="actions.openMenuOnHover" data-wp-on-async--mouseleave="actions.closeMenuOnHover" data-wp-watch="callbacks.initMenu" tabindex="-1" class="wp-block-navigation-item has-child open-on-hover-click  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-submenu"><a class="wp-block-navigation-item__content" href="/lechenie-zavisimostei-v-stavropole-2/" title=""><span class="wp-block-navigation-item__label">Лечение зависимостей</span></a><button data-wp-bind--aria-expanded="state.isMenuOpen" data-wp-on-async--click="actions.toggleMenuOnClick" aria-label="Лечение зависимостей подменю" class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle" ><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false"><path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path></svg></button><ul data-wp-on-async--focus="actions.openMenuOnFocus" class="wp-block-navigation__submenu-container  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-submenu"><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/lechenie-zavisimostei-v-stavropole-2/" title=""><span class="wp-block-navigation-item__label">Наши услуги</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/konsultacziya-vracha-narkologa-v-stavr/" title=""><span class="wp-block-navigation-item__label">Консультация нарколога</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/onlain-konsultacziya-narkologa/" title=""><span class="wp-block-navigation-item__label">Онлайн-консультация нарколога</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/vyezd-vracha-narkologa-na-dom/" title=""><span class="wp-block-navigation-item__label">Выезд врача-нарколога на дом</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/detoksikacziya/" title=""><span class="wp-block-navigation-item__label">Дезинтоксикация</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/lechenie-zavisimostei-v-stavropole/" title=""><span class="wp-block-navigation-item__label">Лечение зависимостей в Ставрополе</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/priem-psihologa-addiktologa-v-stavro/" title=""><span class="wp-block-navigation-item__label">Прием психолога-аддиктолога в Ставрополе</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/psihoterapiya-pri-zavisimosti/" title=""><span class="wp-block-navigation-item__label">Психотерапия при зависимости</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/superviziya-pri-zavisimosti-v-stavrop/" title=""><span class="wp-block-navigation-item__label">Супервизия при зависимости в Ставрополе</span></a></li></ul></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/psihiatricheskaya-pomoshh-v-stavropole/" title=""><span class="wp-block-navigation-item__label">Психиатрия</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/psihoterapevticheskaya-pomoshh-v-stavropole/" title=""><span class="wp-block-navigation-item__label">Психотерапия</span></a></li><li data-wp-context="{ &quot;submenuOpenedBy&quot;: { &quot;click&quot;: false, &quot;hover&quot;: false, &quot;focus&quot;: false }, &quot;type&quot;: &quot;submenu&quot;, &quot;modal&quot;: null }" data-wp-interactive="core/navigation" data-wp-on--focusout="actions.handleMenuFocusout" data-wp-on--keydown="actions.handleMenuKeydown" data-wp-on-async--mouseenter="actions.openMenuOnHover" data-wp-on-async--mouseleave="actions.closeMenuOnHover" data-wp-watch="callbacks.initMenu" tabindex="-1" class="wp-block-navigation-item has-child open-on-hover-click  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-submenu"><a class="wp-block-navigation-item__content" href="/psihologicheskaya-pomoshh-v-stavropole/" title=""><span class="wp-block-navigation-item__label">Психолог</span></a><button data-wp-bind--aria-expanded="state.isMenuOpen" data-wp-on-async--click="actions.toggleMenuOnClick" aria-label="Психолог подменю" class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle" ><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false"><path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path></svg></button><ul data-wp-on-async--focus="actions.openMenuOnFocus" class="wp-block-navigation__submenu-container  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-submenu"><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/avtorskie-vebinary-po-art-terapii-ot-praktikuyushchego-klinicheskogo-psihologa-korotinoj-olgi-viktorovny/" title=""><span class="wp-block-navigation-item__label">Арт-терапия</span></a></li></ul></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/priem-vracha-terapevta-v-stavropole/" title=""><span class="wp-block-navigation-item__label">Терапия</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/priem-vracha-endokrinologa-v-stavropole/" title=""><span class="wp-block-navigation-item__label">Эндокринология</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/girudoterapiya/" title=""><span class="wp-block-navigation-item__label">Гирудотерапия</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/online-zapis-k-specialistam/" title=""><span class="wp-block-navigation-item__label">Онлайн-запись</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/priem-dermatologa-v-stavropole-klini/" title=""><span class="wp-block-navigation-item__label">Дерматология</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/ultrazvuovaya-diagnostika-v-stavrop/" title=""><span class="wp-block-navigation-item__label">УЗИ</span></a></li><li class=" wp-block-navigation-item  menu-item menu-item-type-post_type menu-item-object-page wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="/priem-ginekologa-v-stavropole/" title=""><span class="wp-block-navigation-item__label">Гинекология</span></a></li></ul>
							</div>
						</div>
					</div>
				</div></nav></div>
</div>
</div>
</header>


<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<figure class="wp-block-image aligncenter size-large is-resized"><img width="768" height="1024" src="/wp-content/uploads/2024/07/IMG_8627-768x1024.jpeg" alt="" class="wp-image-5045" style="width:453px;height:auto" srcset="/wp-content/uploads/2024/07/IMG_8627-768x1024.jpeg 768w, /wp-content/uploads/2024/07/IMG_8627-225x300.jpeg 225w, /wp-content/uploads/2024/07/IMG_8627-1152x1536.jpeg 1152w, /wp-content/uploads/2024/07/IMG_8627-1536x2048.jpeg 1536w, /wp-content/uploads/2024/07/IMG_8627-169x225.jpeg 169w, /wp-content/uploads/2024/07/IMG_8627-scaled.jpeg 1920w" sizes="(max-width: 768px) 100vw, 768px" /></figure>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<h2 class="wp-block-heading">Мутаева Ольга Юрьевна</h2>



<p>Психиатр, клинический психолог, нарколог, психолог, психотерапевт, рефлексотерапевт</p>



<h2 class="wp-block-heading">Специализация:</h2>



<p>аутизм, индивидуальная психотерапия, лечение алкоголизма, лечение алкогольной зависимости, лечение аффективных расстройств, лечение деменции, лечение зависимостей, лечение задержки психического развития, лечение навязчивых состояний, лечение наркомании, лечение нарушений пищевого поведения, лечение неврастении, лечение невропатии различного генеза, лечение опиоидной зависимости, лечение панических расстройств, лечение психических расстройств у пожилых людей, лечение психоза, лечение расстройств адаптации, лечение табакокурения, лечение тревожно-депрессивных расстройств пограничного уровня, лечение фобических расстройств пограничного уровня, лечение шизофрении, лечение эпилепсии, психологическая помощь при зависимости, психоневрология, психосоматическая медицина, психофармакотерапия</p>
</div>
</div>



<h2 class="wp-block-heading has-text-align-center"></h2>



<pre class="wp-block-code"><code>&lt;div class="timeline-doctor"&gt;
    &lt;h3&gt;Опыт и достижения&lt;/h3&gt;
    
    &lt;div class="timeline-item"&gt;
        &lt;div class="timeline-year"&gt;2000-2007&lt;/div&gt;
        &lt;div class="timeline-content"&gt;
            &lt;strong&gt;Врач общей практики&lt;/strong&gt;
            &lt;p class="timeline-place"&gt;Ставропольский наркологический диспансер&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="timeline-item"&gt;
        &lt;div class="timeline-year"&gt;2007-2011&lt;/div&gt;
        &lt;div class="timeline-content"&gt;
            &lt;strong&gt;Врач-специалист&lt;/strong&gt;
            &lt;p class="timeline-place"&gt;Клиника доктора Воробьева&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="timeline-item"&gt;
        &lt;div class="timeline-year"&gt;2011-2020&lt;/div&gt;
        &lt;div class="timeline-content"&gt;
            &lt;strong&gt;Врач общей практики&lt;/strong&gt;
            &lt;p class="timeline-place"&gt;Ейский психоневрологический диспансер&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="timeline-item"&gt;
        &lt;div class="timeline-year"&gt;2021 - н.в.&lt;/div&gt;
        &lt;div class="timeline-content"&gt;
            &lt;strong&gt;Ведущий специалист&lt;/strong&gt;
            &lt;p class="timeline-place"&gt;Амадея&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>



<main class="wp-block-group is-layout-flow wp-block-group-is-layout-flow"></main>


<footer class="wp-block-template-part">
<div class="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style="padding-top:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50)">
<div class="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="flex-basis:30%">
<div class="wp-block-group is-vertical is-layout-flex wp-container-core-group-is-layout-fe9cc265 wp-block-group-is-layout-flex"><div class="wp-block-site-logo"><a href="/" class="custom-logo-link" rel="home"><img width="20" height="20" src="/wp-content/uploads/2022/10/LOGO12.png" class="custom-logo" alt="Медицинский центр Амадея в Ставрополе" decoding="async" /></a></div>

<p class="wp-block-site-title has-medium-font-size"><a href="" target="_self" rel="home">Медицинский центр Амадея в Ставрополе</a></p>

</div>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="flex-basis:20%"></div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="flex-basis:50%">
<div class="wp-block-group is-content-justification-space-between is-layout-flex wp-container-core-group-is-layout-e5edad21 wp-block-group-is-layout-flex">
<div class="wp-block-group is-vertical is-content-justification-stretch is-layout-flex wp-container-core-group-is-layout-353c4f5a wp-block-group-is-layout-flex">
<h2 class="wp-block-heading has-medium-font-size has-body-font-family" style="font-style:normal;font-weight:600">Про нас</h2>



<div class="wp-block-group is-vertical is-layout-flex wp-container-core-group-is-layout-ea0cb840 wp-block-group-is-layout-flex"><nav style="font-style:normal;font-weight:400;" class="has-small-font-size  is-vertical wp-block-navigation is-layout-flex wp-container-core-navigation-is-layout-ea0cb840 wp-block-navigation-is-layout-flex" aria-label="Про нас Про нас"><ul style="font-style:normal;font-weight:400;" class="wp-block-navigation__container has-small-font-size  is-vertical wp-block-navigation has-small-font-size" aria-label="Про нас"><li class="has-small-font-size wp-block-navigation-item wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="#"><span class="wp-block-navigation-item__label">Команда</span></a></li><li class="has-small-font-size wp-block-navigation-item wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="#"><span class="wp-block-navigation-item__label">История</span></a></li><li class="has-small-font-size wp-block-navigation-item wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="#"><span class="wp-block-navigation-item__label">Карьера</span></a></li></ul></nav></div>
</div>



<div class="wp-block-group is-vertical is-content-justification-stretch is-layout-flex wp-container-core-group-is-layout-353c4f5a wp-block-group-is-layout-flex">
<h2 class="wp-block-heading has-medium-font-size has-body-font-family" style="font-style:normal;font-weight:600">Политика конфиденциальности</h2>



<div class="wp-block-group is-vertical is-layout-flex wp-container-core-group-is-layout-ea0cb840 wp-block-group-is-layout-flex"><nav style="font-style:normal;font-weight:400;" class="has-small-font-size  is-vertical wp-block-navigation is-layout-flex wp-container-core-navigation-is-layout-ea0cb840 wp-block-navigation-is-layout-flex" aria-label="Политика конфиденциальности Политика конфиденциальности"><ul style="font-style:normal;font-weight:400;" class="wp-block-navigation__container has-small-font-size  is-vertical wp-block-navigation has-small-font-size" aria-label="Политика конфиденциальности"><li class="has-small-font-size wp-block-navigation-item wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="#"><span class="wp-block-navigation-item__label">Политика конфиденциальности</span></a></li><li class="has-small-font-size wp-block-navigation-item wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="#"><span class="wp-block-navigation-item__label">Правила и условия</span></a></li><li class="has-small-font-size wp-block-navigation-item wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="#"><span class="wp-block-navigation-item__label">Свяжитесь с нами</span></a></li></ul></nav></div>
</div>



<div class="wp-block-group is-vertical is-content-justification-stretch is-layout-flex wp-container-core-group-is-layout-353c4f5a wp-block-group-is-layout-flex">
<h2 class="wp-block-heading has-medium-font-size has-body-font-family" style="font-style:normal;font-weight:600">Соц.сети</h2>



<div class="wp-block-group is-vertical is-layout-flex wp-container-core-group-is-layout-ea0cb840 wp-block-group-is-layout-flex"><nav style="font-style:normal;font-weight:400;" class="has-small-font-size  is-vertical wp-block-navigation is-layout-flex wp-container-core-navigation-is-layout-ea0cb840 wp-block-navigation-is-layout-flex" aria-label="Социальные сети Социальные сети"><ul style="font-style:normal;font-weight:400;" class="wp-block-navigation__container has-small-font-size  is-vertical wp-block-navigation has-small-font-size" aria-label="Социальные сети"><li class="has-small-font-size wp-block-navigation-item wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="#"><span class="wp-block-navigation-item__label">Facebook</span></a></li><li class="has-small-font-size wp-block-navigation-item wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="#"><span class="wp-block-navigation-item__label">Instagram</span></a></li><li class="has-small-font-size wp-block-navigation-item wp-block-navigation-link"><a class="wp-block-navigation-item__content"  href="#"><span class="wp-block-navigation-item__label">Twitter/X</span></a></li></ul></nav></div>
</div>
</div>
</div>
</div>



<div class="wp-block-group alignwide is-layout-flow wp-block-group-is-layout-flow" style="padding-top:var(--wp--preset--spacing--50);padding-bottom:0">
<p class="has-contrast-2-color has-text-color has-link-color has-small-font-size wp-elements-b3031718746f97408da5752471e2a3a6">
		Разработано на <a href="https://ru.wordpress.org" rel="nofollow">WordPress</a>		</p>
</div>
</div>
</footer></div>













		<!-- Cookie Notice plugin v2.5.7 by Hu-manity.co https://hu-manity.co/ -->
		<div id="cookie-notice" role="dialog" class="cookie-notice-hidden cookie-revoke-hidden cn-position-bottom" aria-label="Cookie Notice" style="background-color: rgba(50,50,58,1);"><div class="cookie-notice-container" style="color: #fff"><span id="cn-notice-text" class="cn-text-container">Мы используем куки для наилучшего представления нашего сайта. Если Вы продолжите использовать сайт, мы будем считать что Вас это устраивает.</span><span id="cn-notice-buttons" class="cn-buttons-container"><button id="cn-accept-cookie" data-cookie-set="accept" class="cn-set-cookie cn-button" aria-label="Хорошо" style="background-color: #00a99d">Хорошо</button></span><span id="cn-close-notice" data-cookie-set="accept" class="cn-close-icon" title="Нет"></span></div>
			
		</div>
		<!-- / Cookie Notice plugin -->`;

export const metadata: Metadata = {
  title: "Мутаева Ольга Юрьевна - Медицинский центр Амадея в Ставрополе",
  alternates: { canonical: "https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/" },
  openGraph: { locale: "ru_RU", type: "website", title: "Мутаева Ольга Юрьевна - Медицинский центр Амадея в Ставрополе", url: "https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/", siteName: "Медицинский центр Амадея в Ставрополе" },
};

export default function SpeczialistyMutaevaOlgaYurevnaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/","url":"https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/","name":"Мутаева Ольга Юрьевна - Медицинский центр Амадея в Ставрополе","isPartOf":{"@id":"https://amadeya26.ru/#website"},"primaryImageOfPage":{"@id":"https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/#primaryimage"},"image":{"@id":"https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/#primaryimage"},"thumbnailUrl":"https://amadeya26.ru/wp-content/uploads/2024/07/photo_2024-07-06_16-02-14.png","datePublished":"2024-08-28T21:23:36+00:00","dateModified":"2026-03-01T14:28:30+00:00","breadcrumb":{"@id":"https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/"]}]},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/#primaryimage","url":"https://amadeya26.ru/wp-content/uploads/2024/07/photo_2024-07-06_16-02-14.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2024/07/photo_2024-07-06_16-02-14.png","width":965,"height":1280},{"@type":"BreadcrumbList","@id":"https://amadeya26.ru/speczialisty/mutaeva-olga-yurevna/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://amadeya26.ru/"},{"@type":"ListItem","position":2,"name":"Специалисты","item":"https://amadeya26.ru/speczialisty/"},{"@type":"ListItem","position":3,"name":"Мутаева Ольга Юрьевна"}]},{"@type":"WebSite","@id":"https://amadeya26.ru/#website","url":"https://amadeya26.ru/","name":"Медицинский центр Амадея в Ставрополе","description":"","publisher":{"@id":"https://amadeya26.ru/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://amadeya26.ru/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"ru-RU"},{"@type":"Organization","@id":"https://amadeya26.ru/#organization","name":"Медицинский центр Амадея в Ставрополе","url":"https://amadeya26.ru/","logo":{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://amadeya26.ru/#/schema/logo/image/","url":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","contentUrl":"https://amadeya26.ru/wp-content/uploads/2022/10/LOGO12.png","width":68,"height":68,"caption":"Медицинский центр Амадея в Ставрополе"},"image":{"@id":"https://amadeya26.ru/#/schema/logo/image/"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"MedicalClinic","name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","url":"https:\\/\\/amadeya26.ru\\/","telephone":"+7 (988) 864-10-10","address":{"@type":"PostalAddress","streetAddress":"\\u0433. \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c, \\u0443\\u043b. 45 \\u043f\\u0430\\u0440\\u0430\\u043b\\u043b\\u0435\\u043b\\u044c, 2","addressLocality":"\\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u044c","addressCountry":"RU"},"openingHours":["\\u043f\\u043d-\\u0441\\u0431: 7:30-20:00, \\u0432\\u0441: 7:30-13:00"],"image":"https:\\/\\/amadeya26.ru\\/wp-content\\/uploads\\/2024\\/07\\/photo_2024-07-06_16-02-14-772x1024.png","sameAs":[]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https:\\/\\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0446\\u0435\\u043d\\u0442\\u0440 \\u0410\\u043c\\u0430\\u0434\\u0435\\u044f \\u0432 \\u0421\\u0442\\u0430\\u0432\\u0440\\u043e\\u043f\\u043e\\u043b\\u0435","item":"https:\\/\\/amadeya26.ru\\/"},{"@type":"ListItem","position":2,"name":"\\u041c\\u0443\\u0442\\u0430\\u0435\\u0432\\u0430 \\u041e\\u043b\\u044c\\u0433\\u0430 \\u042e\\u0440\\u044c\\u0435\\u0432\\u043d\\u0430","item":"https:\\/\\/amadeya26.ru\\/speczialisty\\/mutaeva-olga-yurevna\\/"}]}` }} />
      <link rel="stylesheet" href="/wp-includes/blocks/navigation/style.min.css?ver=6.8.5" />
      <style dangerouslySetInnerHTML={{ __html: `img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-block-site-logo{box-sizing:border-box;line-height:0}.wp-block-site-logo a{display:inline-block;line-height:0}.wp-block-site-logo.is-default-size img{height:auto;width:120px}.wp-block-site-logo img{height:auto;max-width:100%}.wp-block-site-logo a,.wp-block-site-logo img{border-radius:inherit}.wp-block-site-logo.aligncenter{margin-left:auto;margin-right:auto;text-align:center}:root :where(.wp-block-site-logo.is-style-rounded){border-radius:9999px}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-block-site-title{box-sizing:border-box}.wp-block-site-title :where(a){color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-decoration:inherit}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-block-group{box-sizing:border-box}:where(.wp-block-group.wp-block-group-is-layout-constrained){position:relative}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-block-navigation .wp-block-navigation-item__label{overflow-wrap:break-word}.wp-block-navigation .wp-block-navigation-item__description{display:none}.link-ui-tools{border-top:1px solid #f0f0f0;padding:8px}.link-ui-block-inserter{padding-top:8px}.link-ui-block-inserter__back{margin-left:8px;text-transform:uppercase}

				.is-style-arrow-link .wp-block-navigation-item__label:after {
					content: "\\2197";
					padding-inline-start: 0.25rem;
					vertical-align: middle;
					text-decoration: none;
					display: inline-block;
				}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-block-image>a,.wp-block-image>figure>a{display:inline-block}.wp-block-image img{box-sizing:border-box;height:auto;max-width:100%;vertical-align:bottom}@media not (prefers-reduced-motion){.wp-block-image img.hide{visibility:hidden}.wp-block-image img.show{animation:show-content-image .4s}}.wp-block-image[style*=border-radius] img,.wp-block-image[style*=border-radius]>a{border-radius:inherit}.wp-block-image.has-custom-border img{box-sizing:border-box}.wp-block-image.aligncenter{text-align:center}.wp-block-image.alignfull>a,.wp-block-image.alignwide>a{width:100%}.wp-block-image.alignfull img,.wp-block-image.alignwide img{height:auto;width:100%}.wp-block-image .aligncenter,.wp-block-image .alignleft,.wp-block-image .alignright,.wp-block-image.aligncenter,.wp-block-image.alignleft,.wp-block-image.alignright{display:table}.wp-block-image .aligncenter>figcaption,.wp-block-image .alignleft>figcaption,.wp-block-image .alignright>figcaption,.wp-block-image.aligncenter>figcaption,.wp-block-image.alignleft>figcaption,.wp-block-image.alignright>figcaption{caption-side:bottom;display:table-caption}.wp-block-image .alignleft{float:left;margin:.5em 1em .5em 0}.wp-block-image .alignright{float:right;margin:.5em 0 .5em 1em}.wp-block-image .aligncenter{margin-left:auto;margin-right:auto}.wp-block-image :where(figcaption){margin-bottom:1em;margin-top:.5em}.wp-block-image.is-style-circle-mask img{border-radius:9999px}@supports ((-webkit-mask-image:none) or (mask-image:none)) or (-webkit-mask-image:none){.wp-block-image.is-style-circle-mask img{border-radius:0;-webkit-mask-image:url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');mask-image:url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');mask-mode:alpha;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain}}:root :where(.wp-block-image.is-style-rounded img,.wp-block-image .is-style-rounded img){border-radius:9999px}.wp-block-image figure{margin:0}.wp-lightbox-container{display:flex;flex-direction:column;position:relative}.wp-lightbox-container img{cursor:zoom-in}.wp-lightbox-container img:hover+button{opacity:1}.wp-lightbox-container button{align-items:center;-webkit-backdrop-filter:blur(16px) saturate(180%);backdrop-filter:blur(16px) saturate(180%);background-color:#5a5a5a40;border:none;border-radius:4px;cursor:zoom-in;display:flex;height:20px;justify-content:center;opacity:0;padding:0;position:absolute;right:16px;text-align:center;top:16px;width:20px;z-index:100}@media not (prefers-reduced-motion){.wp-lightbox-container button{transition:opacity .2s ease}}.wp-lightbox-container button:focus-visible{outline:3px auto #5a5a5a40;outline:3px auto -webkit-focus-ring-color;outline-offset:3px}.wp-lightbox-container button:hover{cursor:pointer;opacity:1}.wp-lightbox-container button:focus{opacity:1}.wp-lightbox-container button:focus,.wp-lightbox-container button:hover,.wp-lightbox-container button:not(:hover):not(:active):not(.has-background){background-color:#5a5a5a40;border:none}.wp-lightbox-overlay{box-sizing:border-box;cursor:zoom-out;height:100vh;left:0;overflow:hidden;position:fixed;top:0;visibility:hidden;width:100%;z-index:100000}.wp-lightbox-overlay .close-button{align-items:center;cursor:pointer;display:flex;justify-content:center;min-height:40px;min-width:40px;padding:0;position:absolute;right:calc(env(safe-area-inset-right) + 16px);top:calc(env(safe-area-inset-top) + 16px);z-index:5000000}.wp-lightbox-overlay .close-button:focus,.wp-lightbox-overlay .close-button:hover,.wp-lightbox-overlay .close-button:not(:hover):not(:active):not(.has-background){background:none;border:none}.wp-lightbox-overlay .lightbox-image-container{height:var(--wp--lightbox-container-height);left:50%;overflow:hidden;position:absolute;top:50%;transform:translate(-50%,-50%);transform-origin:top left;width:var(--wp--lightbox-container-width);z-index:9999999999}.wp-lightbox-overlay .wp-block-image{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:center;margin:0;position:relative;transform-origin:0 0;width:100%;z-index:3000000}.wp-lightbox-overlay .wp-block-image img{height:var(--wp--lightbox-image-height);min-height:var(--wp--lightbox-image-height);min-width:var(--wp--lightbox-image-width);width:var(--wp--lightbox-image-width)}.wp-lightbox-overlay .wp-block-image figcaption{display:none}.wp-lightbox-overlay button{background:none;border:none}.wp-lightbox-overlay .scrim{background-color:#fff;height:100%;opacity:.9;position:absolute;width:100%;z-index:2000000}.wp-lightbox-overlay.active{visibility:visible}@media not (prefers-reduced-motion){.wp-lightbox-overlay.active{animation:turn-on-visibility .25s both}.wp-lightbox-overlay.active img{animation:turn-on-visibility .35s both}.wp-lightbox-overlay.show-closing-animation:not(.active){animation:turn-off-visibility .35s both}.wp-lightbox-overlay.show-closing-animation:not(.active) img{animation:turn-off-visibility .25s both}.wp-lightbox-overlay.zoom.active{animation:none;opacity:1;visibility:visible}.wp-lightbox-overlay.zoom.active .lightbox-image-container{animation:lightbox-zoom-in .4s}.wp-lightbox-overlay.zoom.active .lightbox-image-container img{animation:none}.wp-lightbox-overlay.zoom.active .scrim{animation:turn-on-visibility .4s forwards}.wp-lightbox-overlay.zoom.show-closing-animation:not(.active){animation:none}.wp-lightbox-overlay.zoom.show-closing-animation:not(.active) .lightbox-image-container{animation:lightbox-zoom-out .4s}.wp-lightbox-overlay.zoom.show-closing-animation:not(.active) .lightbox-image-container img{animation:none}.wp-lightbox-overlay.zoom.show-closing-animation:not(.active) .scrim{animation:turn-off-visibility .4s forwards}}@keyframes show-content-image{0%{visibility:hidden}99%{visibility:hidden}to{visibility:visible}}@keyframes turn-on-visibility{0%{opacity:0}to{opacity:1}}@keyframes turn-off-visibility{0%{opacity:1;visibility:visible}99%{opacity:0;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes lightbox-zoom-in{0%{transform:translate(calc((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position)),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale))}to{transform:translate(-50%,-50%) scale(1)}}@keyframes lightbox-zoom-out{0%{transform:translate(-50%,-50%) scale(1);visibility:visible}99%{visibility:visible}to{transform:translate(calc((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position)),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));visibility:hidden}}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
h1.has-background,h2.has-background,h3.has-background,h4.has-background,h5.has-background,h6.has-background{padding:1.25em 2.375em}h1.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h1.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h2.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h2.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h3.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h3.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h4.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h4.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h5.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h5.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h6.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h6.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]){rotate:180deg}

				.is-style-asterisk:before {
					content: '';
					width: 1.5rem;
					height: 3rem;
					background: var(--wp--preset--color--contrast-2, currentColor);
					clip-path: path('M11.93.684v8.039l5.633-5.633 1.216 1.23-5.66 5.66h8.04v1.737H13.2l5.701 5.701-1.23 1.23-5.742-5.742V21h-1.737v-8.094l-5.77 5.77-1.23-1.217 5.743-5.742H.842V9.98h8.162l-5.701-5.7 1.23-1.231 5.66 5.66V.684h1.737Z');
					display: block;
				}

				/* Hide the asterisk if the heading has no content, to avoid using empty headings to display the asterisk only, which is an A11Y issue */
				.is-style-asterisk:empty:before {
					content: none;
				}

				.is-style-asterisk:-moz-only-whitespace:before {
					content: none;
				}

				.is-style-asterisk.has-text-align-center:before {
					margin: 0 auto;
				}

				.is-style-asterisk.has-text-align-right:before {
					margin-left: auto;
				}

				.rtl .is-style-asterisk.has-text-align-left:before {
					margin-right: auto;
				}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.is-small-text{font-size:.875em}.is-regular-text{font-size:1em}.is-large-text{font-size:2.25em}.is-larger-text{font-size:3em}.has-drop-cap:not(:focus):first-letter{float:left;font-size:8.4em;font-style:normal;font-weight:100;line-height:.68;margin:.05em .1em 0 0;text-transform:uppercase}body.rtl .has-drop-cap:not(:focus):first-letter{float:none;margin-left:.1em}p.has-drop-cap.has-background{overflow:hidden}:root :where(p.has-background){padding:1.25em 2.375em}:where(p.has-text-color:not(.has-link-color)) a{color:inherit}p.has-text-align-left[style*="writing-mode:vertical-lr"],p.has-text-align-right[style*="writing-mode:vertical-rl"]{rotate:180deg}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-block-columns{align-items:normal!important;box-sizing:border-box;display:flex;flex-wrap:wrap!important}@media (min-width:782px){.wp-block-columns{flex-wrap:nowrap!important}}.wp-block-columns.are-vertically-aligned-top{align-items:flex-start}.wp-block-columns.are-vertically-aligned-center{align-items:center}.wp-block-columns.are-vertically-aligned-bottom{align-items:flex-end}@media (max-width:781px){.wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column{flex-basis:100%!important}}@media (min-width:782px){.wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column{flex-basis:0;flex-grow:1}.wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column[style*=flex-basis]{flex-grow:0}}.wp-block-columns.is-not-stacked-on-mobile{flex-wrap:nowrap!important}.wp-block-columns.is-not-stacked-on-mobile>.wp-block-column{flex-basis:0;flex-grow:1}.wp-block-columns.is-not-stacked-on-mobile>.wp-block-column[style*=flex-basis]{flex-grow:0}:where(.wp-block-columns){margin-bottom:1.75em}:where(.wp-block-columns.has-background){padding:1.25em 2.375em}.wp-block-column{flex-grow:1;min-width:0;overflow-wrap:break-word;word-break:break-word}.wp-block-column.is-vertically-aligned-top{align-self:flex-start}.wp-block-column.is-vertically-aligned-center{align-self:center}.wp-block-column.is-vertically-aligned-bottom{align-self:flex-end}.wp-block-column.is-vertically-aligned-stretch{align-self:stretch}.wp-block-column.is-vertically-aligned-bottom,.wp-block-column.is-vertically-aligned-center,.wp-block-column.is-vertically-aligned-top{width:100%}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-block-code{box-sizing:border-box}.wp-block-code code{
  /*!rtl:begin:ignore*/direction:ltr;display:block;font-family:inherit;overflow-wrap:break-word;text-align:initial;white-space:pre-wrap
  /*!rtl:end:ignore*/}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-block-post-content{display:flow-root}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-block-site-tagline{box-sizing:border-box}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
:root{--wp-admin-theme-color:#007cba;--wp-admin-theme-color--rgb:0,124,186;--wp-admin-theme-color-darker-10:#006ba1;--wp-admin-theme-color-darker-10--rgb:0,107,161;--wp-admin-theme-color-darker-20:#005a87;--wp-admin-theme-color-darker-20--rgb:0,90,135;--wp-admin-border-width-focus:2px;--wp-block-synced-color:#7a00df;--wp-block-synced-color--rgb:122,0,223;--wp-bound-block-color:var(--wp-block-synced-color)}@media (min-resolution:192dpi){:root{--wp-admin-border-width-focus:1.5px}}.wp-element-button{cursor:pointer}:root{--wp--preset--font-size--normal:16px;--wp--preset--font-size--huge:42px}:root .has-very-light-gray-background-color{background-color:#eee}:root .has-very-dark-gray-background-color{background-color:#313131}:root .has-very-light-gray-color{color:#eee}:root .has-very-dark-gray-color{color:#313131}:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background{background:linear-gradient(135deg,#00d084,#0693e3)}:root .has-purple-crush-gradient-background{background:linear-gradient(135deg,#34e2e4,#4721fb 50%,#ab1dfe)}:root .has-hazy-dawn-gradient-background{background:linear-gradient(135deg,#faaca8,#dad0ec)}:root .has-subdued-olive-gradient-background{background:linear-gradient(135deg,#fafae1,#67a671)}:root .has-atomic-cream-gradient-background{background:linear-gradient(135deg,#fdd79a,#004a59)}:root .has-nightshade-gradient-background{background:linear-gradient(135deg,#330968,#31cdcf)}:root .has-midnight-gradient-background{background:linear-gradient(135deg,#020381,#2874fc)}.has-regular-font-size{font-size:1em}.has-larger-font-size{font-size:2.625em}.has-normal-font-size{font-size:var(--wp--preset--font-size--normal)}.has-huge-font-size{font-size:var(--wp--preset--font-size--huge)}.has-text-align-center{text-align:center}.has-text-align-left{text-align:left}.has-text-align-right{text-align:right}#end-resizable-editor-section{display:none}.aligncenter{clear:both}.items-justified-left{justify-content:flex-start}.items-justified-center{justify-content:center}.items-justified-right{justify-content:flex-end}.items-justified-space-between{justify-content:space-between}.screen-reader-text{border:0;clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;word-wrap:normal!important}.screen-reader-text:focus{background-color:#ddd;clip-path:none;color:#444;display:block;font-size:1em;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}html :where(.has-border-color){border-style:solid}html :where([style*=border-top-color]){border-top-style:solid}html :where([style*=border-right-color]){border-right-style:solid}html :where([style*=border-bottom-color]){border-bottom-style:solid}html :where([style*=border-left-color]){border-left-style:solid}html :where([style*=border-width]){border-style:solid}html :where([style*=border-top-width]){border-top-style:solid}html :where([style*=border-right-width]){border-right-style:solid}html :where([style*=border-bottom-width]){border-bottom-style:solid}html :where([style*=border-left-width]){border-left-style:solid}html :where(img[class*=wp-image-]){height:auto;max-width:100%}:where(figure){margin:0 0 1em}html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:var(--wp-admin--admin-bar--height,0px)}@media screen and (max-width:600px){html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:0px}}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--base: #f9f9f9;--wp--preset--color--base-2: #ffffff;--wp--preset--color--contrast: #111111;--wp--preset--color--contrast-2: #636363;--wp--preset--color--contrast-3: #A4A4A4;--wp--preset--color--accent: #cfcabe;--wp--preset--color--accent-2: #c2a990;--wp--preset--color--accent-3: #d8613c;--wp--preset--color--accent-4: #b1c5a4;--wp--preset--color--accent-5: #b5bdbc;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--gradient--gradient-1: linear-gradient(to bottom, #cfcabe 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-2: linear-gradient(to bottom, #C2A990 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-3: linear-gradient(to bottom, #D8613C 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-4: linear-gradient(to bottom, #B1C5A4 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-5: linear-gradient(to bottom, #B5BDBC 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-6: linear-gradient(to bottom, #A4A4A4 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-7: linear-gradient(to bottom, #cfcabe 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-8: linear-gradient(to bottom, #C2A990 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-9: linear-gradient(to bottom, #D8613C 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-10: linear-gradient(to bottom, #B1C5A4 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-11: linear-gradient(to bottom, #B5BDBC 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-12: linear-gradient(to bottom, #A4A4A4 50%, #F9F9F9 50%);--wp--preset--font-size--small: 0.9rem;--wp--preset--font-size--medium: 1.05rem;--wp--preset--font-size--large: clamp(1.39rem, 1.39rem + ((1vw - 0.2rem) * 0.767), 1.85rem);--wp--preset--font-size--x-large: clamp(1.85rem, 1.85rem + ((1vw - 0.2rem) * 1.083), 2.5rem);--wp--preset--font-size--xx-large: clamp(2.5rem, 2.5rem + ((1vw - 0.2rem) * 1.283), 3.27rem);--wp--preset--font-family--body: "Inter", sans-serif;--wp--preset--font-family--heading: Cardo;--wp--preset--font-family--system-sans-serif: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;--wp--preset--font-family--system-serif: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;--wp--preset--spacing--20: min(1.5rem, 2vw);--wp--preset--spacing--30: min(2.5rem, 3vw);--wp--preset--spacing--40: min(4rem, 5vw);--wp--preset--spacing--50: min(6.5rem, 8vw);--wp--preset--spacing--60: min(10.5rem, 13vw);--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--spacing--10: 1rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:root { --wp--style--global--content-size: 620px;--wp--style--global--wide-size: 1280px; }:where(body) { margin: 0; }.wp-site-blocks { padding-top: var(--wp--style--root--padding-top); padding-bottom: var(--wp--style--root--padding-bottom); }.has-global-padding { padding-right: var(--wp--style--root--padding-right); padding-left: var(--wp--style--root--padding-left); }.has-global-padding > .alignfull { margin-right: calc(var(--wp--style--root--padding-right) * -1); margin-left: calc(var(--wp--style--root--padding-left) * -1); }.has-global-padding :where(:not(.alignfull.is-layout-flow) > .has-global-padding:not(.wp-block-block, .alignfull)) { padding-right: 0; padding-left: 0; }.has-global-padding :where(:not(.alignfull.is-layout-flow) > .has-global-padding:not(.wp-block-block, .alignfull)) > .alignfull { margin-left: 0; margin-right: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: 1.2rem; margin-block-end: 0; }:where(.wp-site-blocks) > :first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child { margin-block-end: 0; }:root { --wp--style--block-gap: 1.2rem; }:root :where(.is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.is-layout-flow) > *{margin-block-start: 1.2rem;margin-block-end: 0;}:root :where(.is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.is-layout-constrained) > *{margin-block-start: 1.2rem;margin-block-end: 0;}:root :where(.is-layout-flex){gap: 1.2rem;}:root :where(.is-layout-grid){gap: 1.2rem;}.is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{background-color: var(--wp--preset--color--base);color: var(--wp--preset--color--contrast);font-family: var(--wp--preset--font-family--body);font-size: var(--wp--preset--font-size--medium);font-style: normal;font-weight: 400;line-height: 1.55;--wp--style--root--padding-top: 0px;--wp--style--root--padding-right: var(--wp--preset--spacing--50);--wp--style--root--padding-bottom: 0px;--wp--style--root--padding-left: var(--wp--preset--spacing--50);}a:where(:not(.wp-element-button)){color: var(--wp--preset--color--contrast);text-decoration: underline;}:root :where(a:where(:not(.wp-element-button)):hover){text-decoration: none;}h1, h2, h3, h4, h5, h6{color: var(--wp--preset--color--contrast);font-family: var(--wp--preset--font-family--heading);font-weight: 400;line-height: 1.2;}h1{font-size: var(--wp--preset--font-size--xx-large);line-height: 1.15;}h2{font-size: var(--wp--preset--font-size--x-large);}h3{font-size: var(--wp--preset--font-size--large);}h4{font-size: clamp(1.1rem, 1.1rem + ((1vw - 0.2rem) * 0.767), 1.5rem);}h5{font-size: var(--wp--preset--font-size--medium);}h6{font-size: var(--wp--preset--font-size--small);}:root :where(.wp-element-button, .wp-block-button__link){background-color: var(--wp--preset--color--contrast);border-radius: .33rem;border-color: var(--wp--preset--color--contrast);border-width: 0;color: var(--wp--preset--color--base);font-family: inherit;font-size: var(--wp--preset--font-size--small);font-style: normal;font-weight: 500;line-height: inherit;padding-top: 0.6rem;padding-right: 1rem;padding-bottom: 0.6rem;padding-left: 1rem;text-decoration: none;}:root :where(.wp-element-button:hover, .wp-block-button__link:hover){background-color: var(--wp--preset--color--contrast-2);border-color: var(--wp--preset--color--contrast-2);color: var(--wp--preset--color--base);}:root :where(.wp-element-button:focus, .wp-block-button__link:focus){background-color: var(--wp--preset--color--contrast-2);border-color: var(--wp--preset--color--contrast-2);color: var(--wp--preset--color--base);outline-color: var(--wp--preset--color--contrast);outline-offset: 2px;}:root :where(.wp-element-button:active, .wp-block-button__link:active){background-color: var(--wp--preset--color--contrast);color: var(--wp--preset--color--base);}:root :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption){color: var(--wp--preset--color--contrast-2);font-family: var(--wp--preset--font-family--body);font-size: 0.8rem;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-base-color{color: var(--wp--preset--color--base) !important;}.has-base-2-color{color: var(--wp--preset--color--base-2) !important;}.has-contrast-color{color: var(--wp--preset--color--contrast) !important;}.has-contrast-2-color{color: var(--wp--preset--color--contrast-2) !important;}.has-contrast-3-color{color: var(--wp--preset--color--contrast-3) !important;}.has-accent-color{color: var(--wp--preset--color--accent) !important;}.has-accent-2-color{color: var(--wp--preset--color--accent-2) !important;}.has-accent-3-color{color: var(--wp--preset--color--accent-3) !important;}.has-accent-4-color{color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-color{color: var(--wp--preset--color--accent-5) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-base-background-color{background-color: var(--wp--preset--color--base) !important;}.has-base-2-background-color{background-color: var(--wp--preset--color--base-2) !important;}.has-contrast-background-color{background-color: var(--wp--preset--color--contrast) !important;}.has-contrast-2-background-color{background-color: var(--wp--preset--color--contrast-2) !important;}.has-contrast-3-background-color{background-color: var(--wp--preset--color--contrast-3) !important;}.has-accent-background-color{background-color: var(--wp--preset--color--accent) !important;}.has-accent-2-background-color{background-color: var(--wp--preset--color--accent-2) !important;}.has-accent-3-background-color{background-color: var(--wp--preset--color--accent-3) !important;}.has-accent-4-background-color{background-color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-background-color{background-color: var(--wp--preset--color--accent-5) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-base-border-color{border-color: var(--wp--preset--color--base) !important;}.has-base-2-border-color{border-color: var(--wp--preset--color--base-2) !important;}.has-contrast-border-color{border-color: var(--wp--preset--color--contrast) !important;}.has-contrast-2-border-color{border-color: var(--wp--preset--color--contrast-2) !important;}.has-contrast-3-border-color{border-color: var(--wp--preset--color--contrast-3) !important;}.has-accent-border-color{border-color: var(--wp--preset--color--accent) !important;}.has-accent-2-border-color{border-color: var(--wp--preset--color--accent-2) !important;}.has-accent-3-border-color{border-color: var(--wp--preset--color--accent-3) !important;}.has-accent-4-border-color{border-color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-border-color{border-color: var(--wp--preset--color--accent-5) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-gradient-1-gradient-background{background: var(--wp--preset--gradient--gradient-1) !important;}.has-gradient-2-gradient-background{background: var(--wp--preset--gradient--gradient-2) !important;}.has-gradient-3-gradient-background{background: var(--wp--preset--gradient--gradient-3) !important;}.has-gradient-4-gradient-background{background: var(--wp--preset--gradient--gradient-4) !important;}.has-gradient-5-gradient-background{background: var(--wp--preset--gradient--gradient-5) !important;}.has-gradient-6-gradient-background{background: var(--wp--preset--gradient--gradient-6) !important;}.has-gradient-7-gradient-background{background: var(--wp--preset--gradient--gradient-7) !important;}.has-gradient-8-gradient-background{background: var(--wp--preset--gradient--gradient-8) !important;}.has-gradient-9-gradient-background{background: var(--wp--preset--gradient--gradient-9) !important;}.has-gradient-10-gradient-background{background: var(--wp--preset--gradient--gradient-10) !important;}.has-gradient-11-gradient-background{background: var(--wp--preset--gradient--gradient-11) !important;}.has-gradient-12-gradient-background{background: var(--wp--preset--gradient--gradient-12) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-xx-large-font-size{font-size: var(--wp--preset--font-size--xx-large) !important;}.has-body-font-family{font-family: var(--wp--preset--font-family--body) !important;}.has-heading-font-family{font-family: var(--wp--preset--font-family--heading) !important;}.has-system-sans-serif-font-family{font-family: var(--wp--preset--font-family--system-sans-serif) !important;}.has-system-serif-font-family{font-family: var(--wp--preset--font-family--system-serif) !important;}/* Таймлайн для страницы врача */
.timeline-doctor {
    max-width: 700px;
    margin: 30px 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.timeline-doctor h3 {
    font-size: 24px;
    margin-bottom: 30px;
    color: #2c3e50;
    border-left: 4px solid #4299e1;
    padding-left: 15px;
}

/* Элемент таймлайна */
.timeline-item {
    display: flex;
    margin-bottom: 25px;
    position: relative;
    padding-left: 20px;
}

/* Вертикальная линия слева */
.timeline-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    bottom: -20px;
    width: 2px;
    background: linear-gradient(to bottom, #4299e1, #b3d9ff);
}

/* Убираем линию у последнего элемента */
.timeline-item:last-child::before {
    display: none;
}

/* Кружок-маркер на линии */
.timeline-item::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #4299e1;
    border: 2px solid white;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.3);
}

/* Год */
.timeline-year {
    flex: 0 0 100px;
    font-weight: 700;
    color: #2c5282;
    font-size: 16px;
    padding-top: 2px;
}

/* Контент (место работы) */
.timeline-content {
    flex: 1;
    background: #f8fafc;
    padding: 10px 15px;
    border-radius: 8px;
    margin-left: 15px;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
}

.timeline-content:hover {
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border-color: #4299e1;
}

.timeline-content strong {
    display: block;
    font-size: 16px;
    color: #1e293b;
    margin-bottom: 4px;
}

.timeline-place {
    margin: 0;
    color: #4a5568;
    font-size: 14px;
    line-height: 1.5;
}

/* Адаптация для мобильных */
@media (max-width: 600px) {
    .timeline-item {
        flex-direction: column;
        padding-left: 15px;
    }
    
    .timeline-year {
        flex: none;
        margin-bottom: 5px;
        font-size: 14px;
    }
    
    .timeline-content {
        margin-left: 0;
    }
}:where(.wp-site-blocks *:focus){outline-width:2px;outline-style:solid}
:root :where(.wp-block-code){background-color: var(--wp--preset--color--base-2);border-radius: var(--wp--preset--spacing--20);border-color: var(--wp--preset--color--contrast);color: var(--wp--preset--color--contrast-2);font-size: var(--wp--preset--font-size--medium);font-style: normal;font-weight: 400;line-height: 1.6;padding-top: calc(var(--wp--preset--spacing--30) + 0.75rem);padding-right: calc(var(--wp--preset--spacing--30) + 0.75rem);padding-bottom: calc(var(--wp--preset--spacing--30) + 0.75rem);padding-left: calc(var(--wp--preset--spacing--30) + 0.75rem);}
:root :where(.wp-block-navigation){font-weight: 500;}
:root :where(.wp-block-navigation a:where(:not(.wp-element-button))){text-decoration: none;}
:root :where(.wp-block-navigation a:where(:not(.wp-element-button)):hover){text-decoration: underline;}
:root :where(.wp-block-site-tagline){color: var(--wp--preset--color--contrast-2);font-size: var(--wp--preset--font-size--small);}
:root :where(.wp-block-site-title){font-family: var(--wp--preset--font-family--body);font-size: clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.542), 1.2rem);font-style: normal;font-weight: 600;}
:root :where(.wp-block-site-title a:where(:not(.wp-element-button))){text-decoration: none;}
:root :where(.wp-block-site-title a:where(:not(.wp-element-button)):hover){text-decoration: none;}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
.wp-container-core-group-is-layout-47e5a185 > *{margin-block-start:0;margin-block-end:0;}.wp-container-core-group-is-layout-47e5a185 > * + *{margin-block-start:0px;margin-block-end:0;}.wp-container-core-group-is-layout-fbcf6490{gap:var(--wp--preset--spacing--20);}.wp-container-core-navigation-is-layout-cca85a86{gap:var(--wp--preset--spacing--20);justify-content:flex-end;}.wp-container-core-group-is-layout-bc8e6f51{justify-content:flex-start;}.wp-container-core-group-is-layout-b585a4aa{justify-content:space-between;}.wp-container-core-columns-is-layout-28f84493{flex-wrap:nowrap;}.wp-container-core-group-is-layout-fe9cc265{flex-direction:column;align-items:flex-start;}.wp-container-core-navigation-is-layout-ea0cb840{gap:var(--wp--preset--spacing--10);flex-direction:column;align-items:flex-start;}.wp-container-core-group-is-layout-ea0cb840{gap:var(--wp--preset--spacing--10);flex-direction:column;align-items:flex-start;}.wp-container-core-group-is-layout-353c4f5a{flex-direction:column;align-items:stretch;}.wp-container-core-group-is-layout-e5edad21{justify-content:space-between;align-items:flex-start;}.wp-elements-b3031718746f97408da5752471e2a3a6 a:where(:not(.wp-element-button)){color:var(--wp--preset--color--contrast);}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `

		.skip-link.screen-reader-text {
			border: 0;
			clip-path: inset(50%);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute !important;
			width: 1px;
			word-wrap: normal !important;
		}

		.skip-link.screen-reader-text:focus {
			background-color: #eee;
			clip-path: none;
			color: #444;
			display: block;
			font-size: 1em;
			height: auto;
			left: 5px;
			line-height: normal;
			padding: 15px 23px 14px;
			text-decoration: none;
			top: 5px;
			width: auto;
			z-index: 100000;
		}
` }} />
      <style dangerouslySetInnerHTML={{ __html: `

			.a-stats {
				--akismet-color-mid-green: #357b49;
				--akismet-color-white: #fff;
				--akismet-color-light-grey: #f6f7f7;

				max-width: 350px;
				width: auto;
			}

			.a-stats * {
				all: unset;
				box-sizing: border-box;
			}

			.a-stats strong {
				font-weight: 600;
			}

			.a-stats a.a-stats__link,
			.a-stats a.a-stats__link:visited,
			.a-stats a.a-stats__link:active {
				background: var(--akismet-color-mid-green);
				border: none;
				box-shadow: none;
				border-radius: 8px;
				color: var(--akismet-color-white);
				cursor: pointer;
				display: block;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif;
				font-weight: 500;
				padding: 12px;
				text-align: center;
				text-decoration: none;
				transition: all 0.2s ease;
			}

			/* Extra specificity to deal with TwentyTwentyOne focus style */
			.widget .a-stats a.a-stats__link:focus {
				background: var(--akismet-color-mid-green);
				color: var(--akismet-color-white);
				text-decoration: none;
			}

			.a-stats a.a-stats__link:hover {
				filter: brightness(110%);
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06), 0 0 2px rgba(0, 0, 0, 0.16);
			}

			.a-stats .count {
				color: var(--akismet-color-white);
				display: block;
				font-size: 1.5em;
				line-height: 1.4;
				padding: 0 13px;
				white-space: nowrap;
			}
		
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
@font-face{font-family:Inter;font-style:normal;font-weight:300 900;font-display:fallback;src:url('/wp-content/themes/twentytwentyfour/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff2') format('woff2');font-stretch:normal;}
@font-face{font-family:Cardo;font-style:normal;font-weight:400;font-display:fallback;src:url('/wp-content/themes/twentytwentyfour/assets/fonts/cardo/cardo_normal_400.woff2') format('woff2');}
@font-face{font-family:Cardo;font-style:italic;font-weight:400;font-display:fallback;src:url('/wp-content/themes/twentytwentyfour/assets/fonts/cardo/cardo_italic_400.woff2') format('woff2');}
@font-face{font-family:Cardo;font-style:normal;font-weight:700;font-display:fallback;src:url('/wp-content/themes/twentytwentyfour/assets/fonts/cardo/cardo_normal_700.woff2') format('woff2');}
` }} />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </>
  );
}
