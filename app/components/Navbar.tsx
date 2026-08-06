import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import { Search, Menu, X, MessageSquare } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenContact?: () => void;
}

export function Navbar({ onOpenCommand, onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/services" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Portofolio", path: "/projects" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-xl flex items-center justify-center p-1 shadow-xs border border-black/10 group-hover:scale-105 group-hover:shadow-md transition-all duration-200 overflow-hidden shrink-0">
            <img
              src="/logo-1.png"
              alt="RPL Digital Solutions Logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center min-w-0">
            <div className="text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold font-display tracking-tight text-black flex items-center gap-1.5 uppercase leading-none truncate">
              <span>RPL DIGITAL SOLUTIONS</span>
            </div>
            <div className="text-[8.5px] min-[360px]:text-[9px] sm:text-[10px] font-mono text-[#676767] mt-0.5 sm:mt-1 truncate">
              Software Engineering Studio
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-[#f4f5f7] border border-[#e5e7eb] p-1 rounded-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 ${
                  isActive
                    ? "bg-black text-white font-semibold shadow-xs"
                    : "text-[#4a4a4a] hover:text-black hover:bg-white/60"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            onClick={onOpenCommand}
            className="sm:hidden p-2 bg-[#f4f5f7] hover:bg-[#e8eaee] border border-[#d0d5db] rounded-lg text-[#3b3b3b] hover:text-black transition-colors"
            title="Cari Halaman"
            aria-label="Cari Halaman"
          >
            <Search className="w-4 h-4 text-[#3b3b3b]" />
          </button>

          <button
            onClick={onOpenCommand}
            className="hidden sm:flex items-center gap-2 px-2.5 sm:px-3 py-1.5 bg-[#f4f5f7] hover:bg-[#e8eaee] border border-[#d0d5db] rounded-lg text-[#3b3b3b] hover:text-black transition-colors text-xs font-sans"
            title="Cari Halaman atau Fitur (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#676767]" />
            <span className="text-[11px] font-medium hidden lg:inline">Cari...</span>
            <kbd className="bg-white px-1.5 py-0.5 rounded text-[9px] text-[#3b3b3b] border border-[#d0d5db] font-mono">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={() => (onOpenContact ? onOpenContact() : openWhatsApp())}
            className="btn-tactile px-2 sm:px-3.5 py-1.5 bg-black hover:bg-[#1a1a1a] text-white rounded-lg text-xs font-sans font-medium transition-all shadow-xs flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs">WhatsApp</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-[#3b3b3b] hover:text-black hover:bg-[#f4f5f7] rounded-lg border border-[#e5e7eb]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e5e7eb] px-4 py-4 space-y-3 font-sans shadow-lg animate-in slide-in-from-top-2 duration-150 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-black text-white font-semibold"
                      : "text-[#4a4a4a] hover:text-black hover:bg-[#f4f5f7]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-[#e5e7eb] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommand();
              }}
              className="flex items-center gap-2 text-xs font-medium text-[#4a4a4a] hover:text-black py-1.5"
            >
              <Search className="w-4 h-4 text-[#676767]" />
              <span>Cari Halaman & Fitur</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


