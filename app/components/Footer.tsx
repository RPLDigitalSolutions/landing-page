import React from "react";
import { Link } from "react-router";
import { MessageSquare, ShieldCheck, MapPin } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-white border-t border-[#e5e7eb] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-[#e5e7eb]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-black text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#1a1a1a] border border-[#3b3b3b] rounded-lg text-[10px] sm:text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>KONSULTASI ARSITEKTUR & REKAYASA SOFTWARE</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight leading-snug">
              Siap mentransformasi kebutuhan digital Anda menjadi sistem performa tinggi?
            </h3>
            <p className="text-xs text-[#ababab] leading-relaxed">
              Tim software engineer kami di Bandar Lampung siap membantu merancang website modern, aplikasi mobile Android, sistem IoT, hingga audit keamanan siber.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => openWhatsApp("Halo RPL Digital Solutions, saya ingin meminta penawaran untuk proyek software / IT.")}
              className="btn-tactile w-full sm:w-auto px-5 py-3 bg-white text-black hover:bg-[#e5e7eb] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-black shrink-0" />
              <span>Diskusi via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col items-start gap-2.5">
            <div className="h-9 w-48 bg-black rounded-lg overflow-hidden flex items-center justify-center border border-black/10 shadow-xs p-1">
              <img
                src="/logo.png"
                alt="RPL Digital Solutions Horizontal Logo"
                className="w-full h-full object-cover scale-[1.35] object-center"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#f4f5f7] border border-[#e5e7eb] rounded-md text-[10px] font-mono text-[#4a4a4a]">
              <img src="/logo-1.png" alt="RPL Icon" className="w-3.5 h-3.5 bg-black rounded-xs object-contain" />
              <span>SOFTWARE HOUSE & IT STUDIO</span>
            </div>
          </div>
          <p className="text-[#676767] text-[11px] leading-relaxed">
            Software House & IT Consultant terpercaya dari Bandar Lampung. Spesialis arsitektur web modern, aplikasi Android native, sistem IoT telemetri, dan audit keamanan siber.
          </p>
          <div className="text-[11px] text-[#676767] flex items-center gap-1.5 pt-1 font-mono">
            <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
            <span>Bandar Lampung, Indonesia</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-bold text-black uppercase tracking-wider font-mono">
            Navigasi Halaman
          </div>
          <ul className="space-y-2 text-[#4a4a4a] font-medium">
            <li>
              <Link to="/" className="hover:text-black transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-black transition-colors">
                Layanan & Harga
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black transition-colors">
                Tentang Kami & Tim
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-black transition-colors">
                Portofolio Proyek
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-bold text-black uppercase tracking-wider font-mono">
            Layanan Utama
          </div>
          <ul className="space-y-2 text-[#4a4a4a]">
            <li>Web & SaaS Architecture</li>
            <li>Android Native Development</li>
            <li>IoT & Hardware Telemetry</li>
            <li>Machine Learning & Analytics</li>
            <li>Managed Cloud & Infrastructure</li>
            <li>Penetration Testing & Audit</li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-bold text-black uppercase tracking-wider font-mono">
            Tim Software Engineer
          </div>
          <ul className="space-y-3 text-[#4a4a4a]">
            <li className="flex items-center justify-between">
              <div>
                <span className="text-black font-semibold block">Andika Dinata</span>
                <span className="text-[10px] text-[#676767] font-mono">Staff Software Engineer</span>
              </div>
              <a
                href="https://github.com/andika0x01"
                target="_blank"
                rel="noreferrer"
                className="text-[#676767] hover:text-black"
                title="GitHub Profil Andika Dinata"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <span className="text-black font-semibold block">Aqil Fadhil Murbantresna</span>
                <span className="text-[10px] text-[#676767] font-mono">Software Engineer</span>
              </div>
              <a
                href="https://github.com/aqilfadhil1225"
                target="_blank"
                rel="noreferrer"
                className="text-[#676767] hover:text-black"
                title="GitHub Profil Aqil Fadhil"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <span className="text-black font-semibold block">Aziz Prayoga</span>
                <span className="text-[10px] text-[#676767] font-mono">Software Engineer</span>
              </div>
              <a
                href="https://github.com/AzizPrayoga1"
                target="_blank"
                rel="noreferrer"
                className="text-[#676767] hover:text-black"
                title="GitHub Profil Aziz Prayoga"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <span className="text-black font-semibold block">Muhammad Defrizal</span>
                <span className="text-[10px] text-[#676767] font-mono">Software Engineer</span>
              </div>
              <a
                href="https://github.com/mhmddefrizal"
                target="_blank"
                rel="noreferrer"
                className="text-[#676767] hover:text-black"
                title="GitHub Profil Muhammad Defrizal"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e5e7eb] bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#676767] gap-2 font-mono text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} RPL DIGITAL SOLUTIONS. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Bandar Lampung, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

