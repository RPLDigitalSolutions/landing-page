import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Search, Home, Layers, Info, FolderGit2, MessageSquare, ExternalLink, X, CornerDownLeft } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pages = [
    { name: "Beranda Utama", path: "/", icon: Home, desc: "Ringkasan kapabilitas & layanan utama RPL Digital Solutions" },
    { name: "Layanan & Harga", path: "/services", icon: Layers, desc: "Daftar 6 bidang layanan software engineering & price tiers" },
    { name: "Tentang Kami & Tim", path: "/about", icon: Info, desc: "Sejarah perusahaan, filosofi rekayasa, & profil tim software engineer" },
    { name: "Portofolio Proyek", path: "/projects", icon: FolderGit2, desc: "Kumpulan studi kasus proyek & spesifikasi teknis" },
  ];

  const actions = [
    {
      name: "Konsultasi Proyek via WhatsApp",
      action: () => {
        openWhatsApp("Halo RPL Digital Solutions, saya ingin berkonsultasi mengenai estimasi proyek.");
        onClose();
      },
      icon: MessageSquare,
      desc: "Konsultasi langsung via WhatsApp resmi",
    },
    {
      name: "Kunjungi GitHub Staff Engineer",
      action: () => {
        window.open("https://github.com/andika0x01", "_blank");
        onClose();
      },
      icon: ExternalLink,
      desc: "Lihat repository & aktivitas open source Andika Dinata (Staff Software Engineer)",
    },
  ];

  const filteredPages = pages.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredActions = actions.filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-4 sm:pt-16 md:pt-20 px-3 sm:px-4 pb-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl max-h-[85vh] sm:max-h-[80vh] bg-white border border-[#d0d5db] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col font-sans">
        <div className="flex items-center px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-[#e5e7eb] bg-[#f9fafb] shrink-0">
          <Search className="w-4 h-4 text-[#676767] mr-2.5 sm:mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik untuk mencari halaman atau layanan..."
            className="w-full bg-transparent text-sm sm:text-xs text-black placeholder-[#8a8a8a] focus:outline-none font-sans py-1"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#8a8a8a] hover:text-black mr-1 text-xs font-mono"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#676767] hover:text-black hover:bg-[#e5e7eb] transition-colors ml-1 shrink-0"
            aria-label="Tutup pencarian"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-4 font-sans">
          {filteredPages.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#676767]">
                Navigasi Halaman
              </div>
              <div className="space-y-1 mt-1">
                {filteredPages.map((page) => {
                  const Icon = page.icon;
                  return (
                    <button
                      key={page.path}
                      onClick={() => {
                        navigate(page.path);
                        onClose();
                      }}
                      className="w-full text-left flex items-center justify-between p-3 sm:p-2.5 rounded-xl sm:rounded-lg hover:bg-[#f4f5f7] active:bg-[#e8eaee] group transition-colors gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 sm:p-2.5 rounded-lg bg-[#f4f5f7] group-hover:bg-black group-hover:text-white text-black transition-colors shrink-0 border border-[#e5e7eb]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-xs font-semibold text-black font-sans truncate">
                            {page.name}
                          </div>
                          <div className="text-[11px] text-[#676767] mt-0.5 leading-snug line-clamp-1">
                            {page.desc}
                          </div>
                        </div>
                      </div>
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#ababab] group-hover:text-black shrink-0 hidden sm:block" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {filteredActions.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#676767]">
                Aksi Cepat & Kontak
              </div>
              <div className="space-y-1 mt-1">
                {filteredActions.map((act) => {
                  const Icon = act.icon;
                  return (
                    <button
                      key={act.name}
                      onClick={act.action}
                      className="w-full text-left flex items-center justify-between p-3 sm:p-2.5 rounded-xl sm:rounded-lg hover:bg-[#f4f5f7] active:bg-[#e8eaee] group transition-colors gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 sm:p-2.5 rounded-lg bg-[#f4f5f7] group-hover:bg-black group-hover:text-white text-black transition-colors shrink-0 border border-[#e5e7eb]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-xs font-semibold text-black font-sans truncate">
                            {act.name}
                          </div>
                          <div className="text-[11px] text-[#676767] mt-0.5 leading-snug line-clamp-1">
                            {act.desc}
                          </div>
                        </div>
                      </div>
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#ababab] group-hover:text-black shrink-0 hidden sm:block" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {filteredPages.length === 0 && filteredActions.length === 0 && (
            <div className="py-10 text-center text-[#676767] font-sans text-xs">
              Tidak ada hasil pencarian untuk "{query}"
            </div>
          )}
        </div>

        <div className="px-3.5 sm:px-4 py-2.5 bg-[#f9fafb] border-t border-[#e5e7eb] flex items-center justify-between text-[10px] text-[#676767] font-mono shrink-0">
          <span className="hidden sm:inline">Klik menu untuk berpindah halaman</span>
          <span className="sm:hidden">Ketuk menu pilihan Anda</span>
          <button
            onClick={onClose}
            className="bg-white px-2 py-0.5 rounded border border-[#d0d5db] text-black font-semibold hover:bg-[#e5e7eb] transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}


