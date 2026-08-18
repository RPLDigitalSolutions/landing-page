import { getWhatsAppLink, siteConfig } from '../config';

const navItems = [
  { label: 'Capabilities', id: 'capabilities' },
  { label: 'Terms', id: 'terms' },
  { label: 'Work', id: 'work' },
  { label: 'Engineers', id: 'team' },
  { label: 'FAQ', id: 'faq' },
];

export default function Header() {
  return (
    <>
      <header className="py-8 md:py-12 text-sm font-medium tracking-tight flex justify-between items-center relative z-50">
        <div className="text-white">{siteConfig.name}.</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              data-scroll-to={item.id}
              className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:block">
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          type="button" 
          id="mobile-menu-toggle"
          className="md:hidden text-zinc-400 hover:text-white transition-colors uppercase text-xs tracking-widest cursor-pointer"
        >
          <span className="toggle-text-open">Menu</span>
          <span className="toggle-text-close hidden">Close</span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu-overlay"
        className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center gap-10 md:hidden h-[100dvh] transition-all duration-300 opacity-0 pointer-events-none"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            data-scroll-to={item.id}
            className="text-3xl text-zinc-500 hover:text-white transition-colors cursor-pointer"
          >
            {item.label}
          </button>
        ))}
        <a 
          href={getWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl text-white mt-8"
        >
          Contact
        </a>
      </div>
    </>
  );
}
