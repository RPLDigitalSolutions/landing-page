import { siteConfig } from '../config';

const navItems = [
  { label: 'Capabilities', href: '/#capabilities', num: '01' },
  { label: 'Terms', href: '/#terms', num: '02' },
  { label: 'Work', href: '/#work', num: '03' },
  { label: 'Engineers', href: '/#team', num: '04' },
  { label: 'FAQ', href: '/#faq', num: '05' },
  { label: 'Contact', href: '/#contact', num: '06' },
];

export default function Header() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-12 lg:px-16 py-6 md:py-8 pointer-events-none">
        {/* Brand Mark */}
        <a 
          href="/" 
          className="pointer-events-auto group flex items-baseline gap-1 text-paper hover:opacity-80 transition-opacity"
        >
          <span className="font-serif italic font-normal text-xl md:text-2xl tracking-tight">RPL</span>
          <span className="font-serif italic text-sm md:text-base text-paper/40 font-light">Digital Solutions</span>
          <span className="w-1 h-1 rounded-full bg-paper/60 inline-block ml-0.5 self-center"></span>
        </a>
        
        {/* Desktop Nav Actions */}
        <div className="hidden md:flex items-center gap-8 pointer-events-auto font-mono text-[0.6875rem] uppercase tracking-[0.2em]">
          <a 
            href="/blog" 
            className="text-paper/60 hover:text-paper transition-colors cursor-pointer py-1"
          >
            Blog
          </a>
          <a 
            href="/#contact" 
            className="group relative inline-flex items-center border border-paper/30 px-4 py-2 text-paper bg-press/40 backdrop-blur-sm hover:bg-paper hover:text-press transition-all duration-300 rounded-[2px]"
          >
            <span>Start a project</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          type="button" 
          id="mobile-menu-toggle"
          aria-label="Toggle Menu"
          className="md:hidden pointer-events-auto text-paper p-2 flex flex-col gap-1.5 cursor-pointer bg-press/40 backdrop-blur-sm border border-paper/15 rounded-[2px]"
        >
          <span className="w-5 h-px bg-paper block transition-transform duration-300"></span>
          <span className="w-5 h-px bg-paper block transition-opacity duration-300"></span>
          <span className="w-3.5 h-px bg-paper block self-end transition-transform duration-300"></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu-overlay"
        className="fixed inset-0 z-40 bg-press/95 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden h-[100dvh] transition-all duration-400 opacity-0 pointer-events-none"
      >
        <div className="max-w-xs mx-auto w-full flex flex-col gap-6">
          <div className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-paper/30 pb-3 border-b border-rule">
            Navigation
          </div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-baseline gap-4 text-paper/70 hover:text-paper transition-colors cursor-pointer group"
            >
              <span className="font-mono text-[0.625rem] tracking-[0.2em] text-paper/35 group-hover:text-paper/70 transition-colors">{item.num}</span>
              <span className="font-serif text-2xl font-light">{item.label}</span>
            </a>
          ))}
          <div className="pt-6 mt-4 border-t border-rule flex flex-col gap-4">
            <a 
              href="/blog" 
              className="font-mono text-xs uppercase tracking-[0.2em] text-paper/60 hover:text-paper transition-colors"
            >
              Blog
            </a>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center border border-paper/40 px-5 py-3.5 text-paper font-mono text-xs uppercase tracking-[0.2em] bg-paper/5 hover:bg-paper hover:text-press transition-all duration-300 rounded-[2px]"
            >
              <span>Start a project</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
