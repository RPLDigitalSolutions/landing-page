import { siteConfig } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 md:pt-36 pb-12 md:pb-16 border-t border-rule mt-20">
      {/* Monumental Brand Heading */}
      <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-28">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-light text-paper tracking-[-0.03em] leading-[0.95] mb-4 md:mb-6">
          RPL Digital<br className="sm:hidden" /> Solutions<span className="text-paper/30">.</span>
        </h2>
        <p className="font-serif italic text-paper/50 text-lg md:text-2xl lg:text-3xl font-light max-w-xs sm:max-w-lg">
          Fast, precise, and built for scale.
        </p>
      </div>

      {/* Meta Information Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 border-t border-rule font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/40">
        <div className="flex flex-col gap-1.5">
          <span className="text-paper/70 font-medium">&copy; {currentYear} {siteConfig.name}</span>
          <span>Bandar Lampung · Lampung · Indonesia</span>
        </div>

        <div className="flex flex-col md:text-right gap-1.5">
          <a 
            href="mailto:info@rpldigitalsolutions.tech" 
            className="hover:text-paper transition-colors"
          >
            INFO@RPLDIGITALSOLUTIONS.TECH
          </a>
          <a 
            href={siteConfig.url} 
            className="hover:text-paper transition-colors text-paper/60"
          >
            WWW.RPLDIGITALSOLUTIONS.TECH
          </a>
        </div>
      </div>
    </footer>
  );
}
