export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative md:min-h-[100svh] flex flex-col justify-end pb-12 md:pb-24 pt-24 md:pt-40"
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end w-full">
        {/* Left Column: Eyebrow + Huge Headline + Subhead + CTA */}
        <div className="max-w-4xl">
          {/* Eyebrow / Region metadata */}
          <div className="flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-paper/40 mb-8 md:mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Bandar Lampung, Indonesia</span>
            <span className="text-paper/20">/</span>
            <span>Software House</span>
          </div>

          {/* Headline with Line Clip Reveals */}
          <h1 
            data-line-reveal
            className="font-serif font-light text-paper leading-[1.04] md:leading-[1.02] text-[clamp(2.5rem,8.5vw,7.5rem)] tracking-[-0.025em] mb-8"
          >
            <span className="ln">
              <i>We architect</i>
            </span>
            <span className="ln">
              <i className="italic font-normal">digital solutions.</i>
            </span>
          </h1>

          {/* Subheadline with italic serif accent */}
          <p className="hero-stand opacity-0 translate-y-4 transition-all duration-700 font-serif italic text-paper/60 text-lg md:text-xl lg:text-2xl font-light max-w-2xl leading-snug mb-10">
            Bukan sekadar agensi dengan argo jam kerja — kami partner teknologi yang membangun sistem siap scale.
          </p>

          {/* Flood-fill CTA Button */}
          <div className="hero-cta opacity-0 translate-y-4 transition-all duration-700 inline-block">
            <a 
              href="/#contact" 
              className="group relative inline-flex items-center border border-paper/30 px-8 py-3.5 text-paper font-mono text-xs uppercase tracking-[0.2em] overflow-hidden rounded-[2px]"
            >
              <span className="relative z-10 group-hover:text-press transition-colors duration-300 font-medium">
                Start a project
              </span>
              <span 
                aria-hidden="true" 
                className="absolute inset-0 bg-paper transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" 
              />
            </a>
          </div>
        </div>

        {/* Right Column: Pear-style Stand Column (tablet + desktop) */}
        <div className="hero-stand opacity-0 transition-all duration-700 hidden md:flex flex-col gap-5 md:max-w-[220px] lg:max-w-[280px] pb-2 font-mono text-xs text-paper/40 leading-relaxed border-l border-rule pl-6 md:pl-8">
          <p className="text-[0.7rem] md:text-xs">
            Membangun web, mobile app, AI/ML, dan IoT dari konsep ke produksi dalam waktu singkat dengan arsitektur bersih.
          </p>
          <div className="space-y-1 text-[0.6875rem] text-paper/30 uppercase tracking-widest pt-2 border-t border-rule">
            <div>Turnaround mulai <span className="text-paper/70 font-medium">48 Jam</span></div>
            <div>Mulai <span className="text-paper/70 font-medium">500K IDR</span></div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[0.5625rem] uppercase tracking-[0.25em] text-paper/50">Scroll</span>
        <span className="w-px h-6 bg-gradient-to-b from-paper/40 to-transparent"></span>
      </div>
    </section>
  );
}
