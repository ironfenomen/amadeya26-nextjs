/* Route group (inner): внутренние страницы получают класс .page (editorial-типографика
   Core: .v36-dark .page h1..h4, .text-block и т.д.). Главная живёт в корне app/ БЕЗ .page —
   как canonical-структура детокса (convergence 25.08: правила внутренних страниц
   перекрывали hero главной — .v36-dark .page h1 бил по .v36-hero h1). */
export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page" style={{ display: "contents" }}>
      {children}
    </div>
  );
}
