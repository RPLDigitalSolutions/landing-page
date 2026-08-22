export default function ChapterRail() {
  const chapters = [
    { id: "hero",         label: "Overview",     num: "00" },
    { id: "capabilities", label: "Capabilities", num: "01" },
    { id: "terms",        label: "Terms",        num: "02" },
    { id: "work",         label: "Works",        num: "03" },
    { id: "team",         label: "Engineers",    num: "04" },
    { id: "faq",          label: "FAQ",          num: "05" },
    { id: "contact",      label: "Contact",      num: "06" },
  ];

  return (
    <nav 
      aria-label="Section Navigation"
      className="hidden lg:flex fixed left-6 xl:left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-4 pointer-events-auto select-none"
    >
      {chapters.map((ch) => (
        <a
          key={ch.id}
          href={`#${ch.id}`}
          data-target={ch.id}
          className="chapter-rail-dot group flex items-center gap-3.5 text-paper/30 hover:text-paper/80 transition-colors py-1 cursor-pointer"
        >
          {/* Indicator Dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-paper/30 group-hover:bg-paper/70 group-[.active]:bg-paper group-[.active]:scale-150 transition-all duration-300 flex-shrink-0" />
          
          {/* Slide-in Label */}
          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-[.active]:opacity-100 group-[.active]:translate-x-0 transition-all duration-300 font-mono text-[0.625rem] uppercase tracking-[0.2em] flex items-center gap-2 whitespace-nowrap bg-press/60 backdrop-blur-md px-2.5 py-1 rounded-[2px] border border-paper/10">
            <span className="text-paper/40 group-[.active]:text-paper/80 font-medium">{ch.num}</span>
            <span className="text-paper/70 group-[.active]:text-paper font-normal">{ch.label}</span>
          </span>
        </a>
      ))}
    </nav>
  );
}
