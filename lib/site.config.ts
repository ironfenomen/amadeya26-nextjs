/* AMADEYA26 — site-данные для AMADEYA WEB CORE (world.js).
   Sanctioned override: только объявленные поля. Детокс: свои значения в своём site.config.
   popupAttr: у детокса — acms popup; у amadeya26 — модалка modal-form.js (биндинг [data-a26-modal]). */
export const V36_SITE = {
  tel: "8 (988) 864-10-10",
  telHref: "+79888641010",
  waHref: "+79888641010",
  ctaCall: "Вызвать врача",
  ctaWa: "Написать в WhatsApp",
  popupAttr: ' data-a26-modal="1"',
  addrHtml:
    'г. Ставрополь, ул. 45 параллель, 2<br>пн-сб: 7:30–20:00, вс: 7:30–13:00',
} as const;
