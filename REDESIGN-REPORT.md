# AMADEYA26 · REDESIGN на Amadeya Web Core — итоговый отчёт

**Дата:** 2026-08-22 · **Ветка:** `redesign/web-core` · **Статус: READY TO DEPLOY** (деплой НЕ выполнялся — по инструкции)

---

## 1. Что пришло из Core (amadeya-web-core v1.0.0)

- `css/tokens.css` + `css/core.css` — скины `.v36-dark`, токены `--abyss/--gold/--parch`, типографика Playfair Display + Golos Text (28 файлов синхронизированы в `public/redesign/`).
- Механика оболочки: header, бургер-меню (vanilla `ov-lite.js`), footer, подложка с логотипом + «дыхание» при скролле, hero-грамматика v36 (бегущая строка, moment, nums, offers, posts, people, reviews, map).
- Тестовый инструментарий Core (menu-v2-check и др.).

## 2. Что осталось site-owned

- `public/redesign/a26.css` (~1100 строк) — сайт-специфичный слой: механика блоков главной (порт из эталона детокса), типографика `entry-content` для WP-контента, карточки врачей/записи, таблицы, wp-block сетки, контакты, 404.
- Контентные страницы (`app/**/page.tsx`) — WP-verbatim `the_content` с презентационной нормализацией (см. п.3).
- Лого `public/redesign/logo-a26.png` (выkeyен белый фон оригинала).

## 3. Обнаруженные расхождения и их классификация

| # | Расхождение | Класс | Решение |
|---|---|---|---|
| 1 | 26 страниц содержали **дублирующийся Elementor-хром** (шапка+подвал зашиты в the_content) | D (legacy workaround) | Снят скриптом: верх — до первого реального заголовка/таблицы; низ — от `<h4>Телефон:</h4>`; бейджи ПроДокторов сохранены |
| 2 | 3 страницы (mutaeva, category/stati, author/admin) — **полные wp-site-blocks дампы** со своими шапкой/подвалом и ~20 инлайн `<style>` с белой темой | D | Извлечён контент между `</header>` и `<footer>`, WP-стили удалены, у Мутаевой расэскейплен таймлайн |
| 3 | /online-zapis-k-specialistam — 29 врачей сырым потоком | A (site-specific) | Пересобрано в сетку карточек (`.a26-doc-card`), все ссылки/фото сохранены |
| 4 | /mediczinskie-analizy — прайс-таблица DataTables без скина | A | Тёмный скин таблиц в a26.css |
| 5 | 404 — дефолтная чёрная страница Next | C (missing capability) | Брендированный `app/not-found.tsx` |
| 6 | **sitemap.xml отсутствовал** в Next-приложении (robots.txt ссылается на sitemap_index.xml → 404 после деплоя) | C / pre-existing debt | Добавлены статические `public/sitemap.xml` + `public/sitemap_index.xml` (81 URL) — аддитивно, контракт не изменён |
| 7 | Тест меню Core: 5 FAIL (MM-06/07/09/11/08b) | Core-калибровка | Тест захардкожен на `/medic` детокса; вручную с `/services/` всё работает. **Core не трогал** — предложение: параметризовать тест |

## 4. Изменения immutable-core

**Нет.** Ни одной правки в Core. Все расхождения закрыты на уровне site-owned слоя.

## 5. Regression gates

- **Responsive:** горизонтальный overflow = 0 на 320/390/768/1024/1440 по 18 ключевым роутам (CDP-замер).
- **Visual:** полный скриншот-свип 81/81 роута @1440; до фиксов найдено 3 белые страницы (п.3.2) — исправлены; «белизна» главной (18.6%) = светлое hero-фото, норма.
- **Interaction:** бургер (аккордеон услуг, «Перейти в раздел», aria-expanded), свайперы врачей/отзывов, hero-переключатель утро/вечер, lazy-карта — проверены.
- **404:** `/speczialisty/denisenko-igor-aleksandrovich/` (битая ссылка из контента) → брендированная 404.

## 6. SEO diff (81 роут, snapshot до/после)

- status/title/description/canonical/robots/jsonld — **0 расхождений на всех 81 роутах**.
- H1: 0 расхождений, **кроме главной**: добавлен H1 «Медицинский центр «АМАДЕЯ»» (в baseline H1 отсутствовал; разрешено инструкцией «кроме главной и hero»).
- Внутренние ссылки: суммарно 2803 → 2107. Потери — только дублирующиеся меню внутри the_content (п.3.1), включавшие ссылки на несуществующий `/elementor-1309/`. **В baseline главная старым slug'ам не ссылалась** — основная навигация и раньше вела на canonical-версии; они покрыты шеллом на каждой странице (25 ссылок).
- Sitemap: добавлен (см. п.3.6).

## 7. Commits (redesign/web-core)

```
a11d503 PHASE 7-11: responsive 0 overflow, SEO diff чист, sitemap
93b0ba0 PHASE 5-6: wp-dump страницы, сетка блога, контакты, 404
c3ca0c4 PHASE 4.3: снятие Elementor-хрома (26 стр.), сетка онлайн-записи
6baf578 PHASE 4.2: типографика entry-content + карточка врача
309c240 PHASE 4.1: /speczialisty сетка
c003f25 PHASE 3: главная на v36-грамматике
5661447 PHASE 1-2: Web Core sync + shell
```

## 8. Production verification

Не выполнялась — деплой не делался. После деплоя: прогнать seo-snapshot против продового baseline, проверить sitemap_index.xml (200), hero-переключатель на Android, кнопку Medflex.

## Debt registry (не трогали, фиксируем)

1. `/speczialisty/denisenko-igor-aleksandrovich/` — ссылки из карточек Балакиной/Водолажского ведут на несуществующий роут (404). Контентный баг оригинала.
2. Тонкие страницы после снятия хрома (честное состояние оригинала): `lechenie-zavisimostei-v-stavropole-2`, `priem-ginekologa-v-stavropole`, `uslugi-kliniki-amadeya-v-stavropole`, `psihiatricheskaya/psihologicheskaya/psihoterapevticheskaya-pomoshh-v-stavropole`, `elementor-2743`, `blog-kliniki-amadeya` (индекс пуст и в baseline).
3. Старые русскоязычные slug-страницы (26 шт.) потеряли внутренние ссылки вместе со старым хромом — в основной навигации их не было и раньше; в sitemap включены.
4. Множественные H1 внутри контента ряда страниц (детоксикация и др.) — наследие Elementor.
5. E-mail в футере `litehstavlab@gmail.com` — исходный контент.
6. VPS: проверить, что после деплоя `/sitemap_index.xml` отдаётся из public (robots.txt на него ссылается).
7. Core: параметризовать menu-v2-check под slug услуг сайта.

## 9. Круг 2 (самопроверка после отчёта, коммит 8a2f481)

Второй проход по скринам sweep выявил и закрыл 3 остаточные проблемы (все — site-level, `public/redesign/a26.css`, Core не тронут):

1. **/category/stati/ и /author/admin/**: карточки постов — картинки не на всю ширину (инлайновые WP-стили `aspect-ratio:3/4` на figure + `height:100%` на img перекрывали CSS), сетка зажата в 860px (лимит entry-content для статей), ромбы-буллеты протекали в li карточек, мета-строка «— от автора admin в Статьи». Фикс: listing с query-блоком расширен до 1100px, figure/img принудительно full-bleed (`!important` против инлайнов), в мета оставлена только дата, буллеты и двойные паддинги вложенных групп убраны.
2. **WP-эмодзи**: на странице вебинаров SVG-эмодзи `s.w.org/images/core/emoji/*` без родной WP-CSS (`img.emoji{1em}`) рендерились гигантскими (страница 16797px высотой). Фикс: глобальное правило `img[src*="s.w.org/images/core/emoji"] { width/height: 1.15em !important; inline }` — страница стала 13237px, эмодзи инлайновые.
3. **Бургер на контентных страницах**: проверен на /detoksikacziya/ 390px — открытие, аккордеон «Медицинские услуги» первым тапом (подменю + «Перейти в раздел», без перехода), нижняя панель (телефон/Вызвать врача/WhatsApp) закреплена, фон с водяным знаком. Работает.

Контрольный замер overflow после правок: 0 на 390/1440 для /, /category/stati/, /avtorskie-vebinary…/, /speczialisty/.

Статус не изменился: **READY TO DEPLOY**, деплой — только по команде владельца.
