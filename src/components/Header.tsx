import { siteConfig } from '../config';

const navItems = [
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Terms', href: '/#terms' },
  { label: 'Work', href: '/#work' },
  { label: 'Engineers', href: '/#team' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  return (
    <>
      <header className="py-8 md:py-12 text-sm font-medium tracking-tight flex justify-between items-center relative z-50">
        <a href="/" className="text-white hover:text-zinc-300 transition-colors">{siteConfig.name}.</a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:block">
          <a href="/#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
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
          <a
            key={item.label}
            href={item.href}
            className="text-3xl text-zinc-500 hover:text-white transition-colors cursor-pointer"
          >
            {item.label}
          </a>
        ))}
        <a 
          href="/#contact" 
          className="text-3xl text-white mt-8"
        >
          Contact
        </a>
      </div>
    </>
  );
}
