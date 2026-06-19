import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Медицинский центр Амадея в Ставрополе",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru-RU">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://maps.yastatic.net" crossOrigin="" />
        <link rel="preconnect" href="https://booking.medflex.ru" />
        <link rel="dns-prefetch" href="https://yandex.ru" />
        <style dangerouslySetInnerHTML={{ __html: `img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }` }} />
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
` }} />
        <link rel='stylesheet' id='cookie-notice-front-css' href='/wp-content/plugins/cookie-notice/css/front.min.css?ver=2.5.7' media='all' />
        <link rel='stylesheet' id='wpos-slick-style-css' href='/wp-content/plugins/wp-responsive-recent-post-slider/assets/css/slick.css?ver=3.7.1' media='all' />
        <link rel='stylesheet' id='wppsac-public-style-css' href='/wp-content/plugins/wp-responsive-recent-post-slider/assets/css/recent-post-style.css?ver=3.7.1' media='all' />
        <link rel='stylesheet' id='twentytwentyfour-style-css' href='/wp-content/themes/twentytwentyfour/style.css?ver=1.3' media='all' />
        <link rel='stylesheet' id='amadeya-redesign-style-css' href='/wp-content/themes/amadeya-redesign/style.css?ver=1.0.0' media='all' />
        <link rel='stylesheet' id='amadeya-redesign-main-css' href='/wp-content/themes/amadeya-redesign/assets/css/styles.css?ver=1.0.0' media='all' />
        <link rel='stylesheet' id='swiper-css-css' href='/vendor/swiper/swiper-bundle.min.css?ver=11.2.10' media='all' />
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
@font-face{font-family:Inter;font-style:normal;font-weight:300 900;font-display:fallback;src:url('https://amadeya26.ru/wp-content/themes/twentytwentyfour/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff2') format('woff2');font-stretch:normal;}
@font-face{font-family:Cardo;font-style:normal;font-weight:400;font-display:fallback;src:url('https://amadeya26.ru/wp-content/themes/twentytwentyfour/assets/fonts/cardo/cardo_normal_400.woff2') format('woff2');}
@font-face{font-family:Cardo;font-style:italic;font-weight:400;font-display:fallback;src:url('https://amadeya26.ru/wp-content/themes/twentytwentyfour/assets/fonts/cardo/cardo_italic_400.woff2') format('woff2');}
@font-face{font-family:Cardo;font-style:normal;font-weight:700;font-display:fallback;src:url('https://amadeya26.ru/wp-content/themes/twentytwentyfour/assets/fonts/cardo/cardo_normal_700.woff2') format('woff2');}
` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(91506218,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});` }} />
      </head>
      <body className="wp-singular page-template page wp-custom-logo wp-embed-responsive wp-theme-twentytwentyfour wp-child-theme-amadeya-redesign cookies-not-set">
        <noscript><div><img src="https://mc.yandex.ru/watch/91506218" style={{position:'absolute',left:'-9999px'}} alt="" /></div></noscript>
        {children}
        {/* shared overlays: cookie-notice plugin + medflex (на всех страницах) */}
        <div dangerouslySetInnerHTML={{ __html: `<div id="cookie-notice" role="dialog" class="cookie-notice-hidden cookie-revoke-hidden cn-position-bottom" aria-label="Cookie Notice" style="background-color: rgba(50,50,58,1);"><div class="cookie-notice-container" style="color: #fff"><span id="cn-notice-text" class="cn-text-container">Мы используем куки для наилучшего представления нашего сайта. Если Вы продолжите использовать сайт, мы будем считать что Вас это устраивает.</span><span id="cn-notice-buttons" class="cn-buttons-container"><button id="cn-accept-cookie" data-cookie-set="accept" class="cn-set-cookie cn-button" aria-label="Хорошо" style="background-color: #00a99d">Хорошо</button></span><span id="cn-close-notice" data-cookie-set="accept" class="cn-close-icon" title="Нет"></span></div>
			
		</div>
		<!-- / Cookie Notice plugin -->
<!-- MedFlex онлайн запись -->` }} />
        <div id="medflexRoundWidgetData" data-src="https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68&isRoundWidget=false" />

        <script dangerouslySetInnerHTML={{ __html: `var cnArgs = {"ajaxUrl":"https:\\/\\/amadeya26.ru\\/wp-admin\\/admin-ajax.php","nonce":"05c90f8f89","hideEffect":"fade","position":"bottom","onScroll":false,"onScrollOffset":100,"onClick":false,"cookieName":"cookie_notice_accepted","cookieTime":2592000,"cookieTimeRejected":2592000,"globalCookie":false,"redirection":false,"cache":true,"revokeCookies":false,"revokeCookiesOpt":"automatic"};` }} />
        <script src="/wp-includes/js/jquery/jquery.min.js"></script>
        <script src="/wp-includes/js/jquery/jquery-migrate.min.js"></script>
        <script src="/wp-content/plugins/cookie-notice/js/front.min.js?ver=2.5.7"></script>
        <script src="/vendor/swiper/swiper-bundle.min.js?ver=11.2.10"></script>
        <script src="/wp-content/themes/amadeya-redesign/assets/js/config.js?ver=1.0.0" defer></script>
        <script src="/wp-content/themes/amadeya-redesign/assets/js/header.js?ver=1.0.0" defer></script>
        <script src="/wp-content/themes/amadeya-redesign/assets/js/carousel.js?ver=1.0.0" defer></script>
        <script src="/wp-content/themes/amadeya-redesign/assets/js/carousel-booking.js?ver=1.0.0" defer></script>
        <script src="/wp-content/themes/amadeya-redesign/assets/js/cookie-consent.js?ver=1.0.0" defer></script>
        <script src="/wp-content/themes/amadeya-redesign/assets/js/modal-form.js?ver=1.0.0" defer></script>
        <script src="/wp-content/themes/amadeya-redesign/assets/js/medflex-integration.js?ver=1.0.0" defer></script>
        <script src="/wp-content/themes/amadeya-redesign/assets/js/mobile-menu.js?ver=1.0.0" defer></script>
        <script src="/wp-content/themes/amadeya-redesign/assets/js/specialist-list.js?ver=1.0.0" defer></script>
        <Script src="https://booking.medflex.ru/components/round/round_widget_button.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
