import React, { useState } from "react";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import {
  Globe,
  Smartphone,
  Cpu,
  BrainCircuit,
  Server,
  Lock,
  ChevronRight,
  ExternalLink,
  FolderGit2,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CommandMenu } from "../components/CommandMenu";
import { openWhatsApp } from "../utils/whatsapp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RPL Digital Solutions | Software House & IT Consultant Bandar Lampung" },
    {
      name: "description",
      content:
        "Software House & IT Consultant terpercaya dari Bandar Lampung. Kami merancang arsitektur web modern, aplikasi Android native, sistem telemetri IoT, dan audit keamanan siber.",
    },
  ];
}

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);

  const openContactWithService = (service: string) => {
    openWhatsApp(`Halo RPL Digital Solutions, saya mau konsultasi mengenai layanan ${service}.`);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-black selection:text-white">
      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      <main className="flex-1">
        <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4f5f7] border border-[#d0d5db] rounded-full text-[11px] sm:text-xs font-mono text-[#3b3b3b] mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shrink-0" />
              <span className="font-semibold text-black">
                Software House & IT Consultant • Bandar Lampung
              </span>
            </div>

            <div className="max-w-4xl space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-black leading-[1.08] sm:leading-[1.05]">
                Rekayasa Perangkat Lunak & Arsitektur Digital.
              </h1>

              <p className="text-sm sm:text-base md:text-xl text-[#4a4a4a] font-normal leading-relaxed max-w-2xl">
                Kami bantu Anda buat website, aplikasi HP, dan sistem digital — dari ide awal sampai jadi dan bisa dipakai.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <button
                  onClick={() => openWhatsApp("Halo RPL Digital Solutions, saya ingin konsultasi proyek IT gratis.")}
                  className="btn-tactile px-6 py-3.5 bg-black hover:bg-[#1a1a1a] text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Konsultasi Proyek Gratis</span>
                </button>

                <Link
                  to="/projects"
                  className="btn-tactile px-6 py-3.5 bg-white hover:bg-[#f4f5f7] border border-[#d0d5db] text-black rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <span>Lihat Portofolio Proyek</span>
                  <FolderGit2 className="w-4 h-4 text-[#4a4a4a] shrink-0" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#e5e7eb]">
              <div className="bg-[#f9fafb] border border-[#e5e7eb] p-5 rounded-xl">
                <div className="text-[#676767] text-[10px] font-mono uppercase tracking-wider mb-1">
                  JENIS LAYANAN
                </div>
                <div className="text-2xl font-bold font-display text-black">6 Bidang</div>
                <div className="text-[#676767] text-[11px] mt-1 font-sans">Website, App Android, IoT, AI, Server, Keamanan</div>
              </div>

              <div className="bg-[#f9fafb] border border-[#e5e7eb] p-5 rounded-xl">
                <div className="text-[#676767] text-[10px] font-mono uppercase tracking-wider mb-1">
                  KEAMANAN DATA
                </div>
                <div className="text-2xl font-bold font-display text-emerald-700">Terlindungi</div>
                <div className="text-[#676767] text-[11px] mt-1 font-sans">Data Anda dienkripsi & diuji dari celah</div>
              </div>

              <div className="bg-[#f9fafb] border border-[#e5e7eb] p-5 rounded-xl">
                <div className="text-[#676767] text-[10px] font-mono uppercase tracking-wider mb-1">
                  UPTIME SERVER
                </div>
                <div className="text-2xl font-bold font-display text-black">Selalu Online</div>
                <div className="text-[#676767] text-[11px] mt-1 font-sans">Aplikasi aktif 24 jam tanpa gangguan</div>
              </div>

              <div className="bg-[#f9fafb] border border-[#e5e7eb] p-5 rounded-xl">
                <div className="text-[#676767] text-[10px] font-mono uppercase tracking-wider mb-1">
                  AKTIF SEJAK
                </div>
                <div className="text-2xl font-bold font-display text-black">2022</div>
                <div className="text-[#676767] text-[11px] mt-1 font-sans">Tim berpengalaman di Bandar Lampung</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
              <div className="space-y-2">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3b3b3b]">
                  LAYANAN
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-black">
                  Apa yang Kami Kerjakan
                </h2>
                <p className="text-xs sm:text-sm text-[#676767] max-w-xl">
                  Enam bidang layanan dengan harga transparan dan scope yang jelas.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:text-[#4a4a4a] group shrink-0"
              >
                <span>Lihat Layanan & Harga</span>
                <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-white border border-[#d0d5db] hover:border-black rounded-xl p-5 sm:p-6 transition-all flex flex-col justify-between group shadow-xs">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#f4f5f7] border border-[#e5e7eb] text-black">
                      <Globe className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-[10px] font-mono text-[#8a8a8a] uppercase">WEB & CLOUD</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-black">
                    Website & Aplikasi Web
                  </h3>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Dari halaman profil bisnis sederhana hingga sistem manajemen data yang kompleks — kami buatkan sesuai kebutuhan Anda.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-[#e5e7eb] flex items-center justify-between">
                  <span className="text-[10px] text-[#8a8a8a] font-mono uppercase">WEBSITE</span>
                  <button
                    onClick={() => openContactWithService("Web Development")}
                    className="text-black hover:text-[#3b3b3b] font-sans text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Konsultasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </div>

              <div className="bg-white border border-[#d0d5db] hover:border-black rounded-xl p-5 sm:p-6 transition-all flex flex-col justify-between group shadow-xs">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#f4f5f7] border border-[#e5e7eb] text-black">
                      <Smartphone className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-[10px] font-mono text-[#8a8a8a] uppercase">ANDROID</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-black">
                    Aplikasi Android
                  </h3>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Aplikasi untuk HP Android — bisa untuk toko online, absensi karyawan, pemantauan lapangan, atau kebutuhan lainnya.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-[#e5e7eb] flex items-center justify-between">
                  <span className="text-[10px] text-[#8a8a8a] font-mono uppercase">ANDROID</span>
                  <button
                    onClick={() => openContactWithService("Android Development")}
                    className="text-black hover:text-[#3b3b3b] font-sans text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Konsultasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </div>

              <div className="bg-white border border-[#d0d5db] hover:border-black rounded-xl p-5 sm:p-6 transition-all flex flex-col justify-between group shadow-xs">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#f4f5f7] border border-[#e5e7eb] text-black">
                      <Cpu className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-[10px] font-mono text-[#8a8a8a] uppercase">HARDWARE & IOT</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-black">
                    Sistem Sensor & IoT
                  </h3>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Pasang sensor di mesin, ruangan, atau lahan — lalu pantau datanya dari HP atau komputer secara langsung.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-[#e5e7eb] flex items-center justify-between">
                  <span className="text-[10px] text-[#8a8a8a] font-mono uppercase">SENSOR & IOT</span>
                  <button
                    onClick={() => openContactWithService("IoT Development")}
                    className="text-black hover:text-[#3b3b3b] font-sans text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Konsultasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </div>

              <div className="bg-white border border-[#d0d5db] hover:border-black rounded-xl p-5 sm:p-6 transition-all flex flex-col justify-between group shadow-xs">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#f4f5f7] border border-[#e5e7eb] text-black">
                      <BrainCircuit className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-[10px] font-mono text-[#8a8a8a] uppercase">AI & ANALYTICS</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-black">
                    Analisis Data & AI
                  </h3>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Sistem yang bisa membaca pola dari data Anda — mendeteksi anomali, memprediksi permintaan, atau mengenali gambar secara otomatis.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-[#e5e7eb] flex items-center justify-between">
                  <span className="text-[10px] text-[#8a8a8a] font-mono uppercase">DATA & AI</span>
                  <button
                    onClick={() => openContactWithService("Machine Learning")}
                    className="text-black hover:text-[#3b3b3b] font-sans text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Konsultasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </div>

              <div className="bg-white border border-[#d0d5db] hover:border-black rounded-xl p-5 sm:p-6 transition-all flex flex-col justify-between group shadow-xs">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#f4f5f7] border border-[#e5e7eb] text-black">
                      <Server className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-[10px] font-mono text-[#8a8a8a] uppercase">DEVOPS</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-black">
                    Hosting & Pengelolaan Server
                  </h3>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Kami yang urus servernya — aplikasi Anda tetap online, cepat, dan berjalan tanpa perlu Anda pusing soal teknis.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-[#e5e7eb] flex items-center justify-between">
                  <span className="text-[10px] text-[#8a8a8a] font-mono uppercase">SERVER</span>
                  <button
                    onClick={() => openContactWithService("Managed Hosting")}
                    className="text-black hover:text-[#3b3b3b] font-sans text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Konsultasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </div>

              <div className="bg-white border border-[#d0d5db] hover:border-black rounded-xl p-5 sm:p-6 transition-all flex flex-col justify-between group shadow-xs">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#f4f5f7] border border-[#e5e7eb] text-black">
                      <Lock className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-[10px] font-mono text-[#8a8a8a] uppercase">CYBERSECURITY</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-black">
                    Uji Keamanan Sistem
                  </h3>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Kami coba "bobol" sistem Anda sendiri untuk menemukan celah keamanan — sebelum orang lain yang jahat melakukannya.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-[#e5e7eb] flex items-center justify-between">
                  <span className="text-[10px] text-[#8a8a8a] font-mono uppercase">KEAMANAN</span>
                  <button
                    onClick={() => openContactWithService("Penetration Testing")}
                    className="text-black hover:text-[#3b3b3b] font-sans text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Konsultasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight">
                  Studi Kasus
                </h2>
                <p className="text-xs text-[#676767] mt-1">
                  Proyek nyata yang bisa dilihat kode dan hasil akhirnya.
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:text-[#4a4a4a] group shrink-0"
              >
                <span>Lihat Seluruh Portofolio</span>
                <FolderGit2 className="w-4 h-4 text-black group-hover:scale-105 transition-transform" />
              </Link>
            </div>

            <div className="bg-black text-white rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 relative z-10">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-[11px] font-mono font-semibold rounded">
                      OPEN SOURCE PROJECT
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white">
                    Money Tracker
                  </h3>
                  <p className="text-xs text-[#ababab] leading-relaxed">
                    Aplikasi pelacak keuangan pribadi. Catat pemasukan dan pengeluaran, lihat arus kas, dan filter per kategori — tanpa biaya langganan.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 text-[10px] sm:text-[11px] font-mono">
                    <span className="px-2.5 py-1 bg-[#1a1a1a] border border-[#3b3b3b] text-[#d0d5db] rounded">
                      Open Source
                    </span>
                    <span className="px-2.5 py-1 bg-[#1a1a1a] border border-[#3b3b3b] text-[#d0d5db] rounded">
                      MIT License
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-start lg:items-end gap-6">
                  <div className="text-right text-xs text-[#ababab] hidden lg:block font-mono">
                    <div>Status: Production Ready</div>
                    <div>Licence: MIT Open Source</div>
                  </div>
                  <a
                    href="https://github.com/RPLDigitalSolutions/money-tracker"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-tactile px-5 py-3 bg-white text-black hover:bg-[#e5e7eb] text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs w-full sm:w-auto justify-center"
                  >
                    <span>Source Code di GitHub</span>
                    <ExternalLink className="w-4 h-4 text-black shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight">
                  Tim Kami
                </h2>
                <p className="text-xs text-[#676767] mt-1">
                  Empat software engineer berbasis di Bandar Lampung, aktif sejak 2022.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:text-[#4a4a4a] group shrink-0"
              >
                <span>Profil & Filosofi Tim</span>
                <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#f9fafb] border border-[#d0d5db] rounded-2xl p-5 sm:p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#676767]">Pengalaman Sejak 2022</span>
                    <span className="text-black font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                      Staff Software Engineer
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://avatars.githubusercontent.com/u/73385158?v=4"
                      alt="Andika Dinata"
                      className="w-14 h-14 rounded-xl object-cover border border-[#d0d5db] shrink-0"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-black">Andika Dinata</h3>
                      <div className="text-xs text-[#676767]">Staff Software Engineer</div>
                    </div>
                  </div>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Bergerak di sistem informasi, keamanan siber, machine learning, dan embedded systems sejak 2022.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#e5e7eb] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#676767]">Bandar Lampung, Indonesia</span>
                  <a
                    href="https://github.com/andika0x01"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black hover:text-[#4a4a4a] font-semibold flex items-center gap-1"
                  >
                    GitHub Profil <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              <div className="bg-[#f9fafb] border border-[#d0d5db] rounded-2xl p-5 sm:p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#676767]">Pengalaman Sejak 2022</span>
                    <span className="text-black font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                      Software Engineer
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://avatars.githubusercontent.com/u/154386191?v=4"
                      alt="Aqil Fadhil Murbantresna"
                      className="w-14 h-14 rounded-xl object-cover border border-[#d0d5db] shrink-0"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-black">Aqil Fadhil Murbantresna</h3>
                      <div className="text-xs text-[#676767]">Software Engineer</div>
                    </div>
                  </div>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Fokus pada arsitektur fullstack, cloud, dan integrasi IoT. Terbiasa bekerja dari desain sistem hingga deployment.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#e5e7eb] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#676767]">Bandar Lampung, Indonesia</span>
                  <a
                    href="https://github.com/aqilfadhil1225"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black hover:text-[#4a4a4a] font-semibold flex items-center gap-1"
                  >
                    GitHub Profil <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              <div className="bg-[#f9fafb] border border-[#d0d5db] rounded-2xl p-5 sm:p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#676767]">Pengalaman Sejak 2022</span>
                    <span className="text-black font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                      Software Engineer
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://github.com/AzizPrayoga1.png"
                      alt="Aziz Prayoga"
                      className="w-14 h-14 rounded-xl object-cover border border-[#d0d5db] shrink-0"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-black">Aziz Prayoga</h3>
                      <div className="text-xs text-[#676767]">Software Engineer</div>
                    </div>
                  </div>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Mengerjakan web, backend API, dan keamanan siber (cybersecurity) — dengan perhatian khusus pada performa serta pengujian & audit keamanan sistem.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#e5e7eb] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#676767]">Bandar Lampung, Indonesia</span>
                  <a
                    href="https://github.com/AzizPrayoga1"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black hover:text-[#4a4a4a] font-semibold flex items-center gap-1"
                  >
                    GitHub Profil <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              <div className="bg-[#f9fafb] border border-[#d0d5db] rounded-2xl p-5 sm:p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#676767]">Pengalaman Sejak 2022</span>
                    <span className="text-black font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                      Software Engineer
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://github.com/mhmddefrizal.png"
                      alt="Muhammad Defrizal"
                      className="w-14 h-14 rounded-xl object-cover border border-[#d0d5db] shrink-0"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-black">Muhammad Defrizal</h3>
                      <div className="text-xs text-[#676767]">Software Engineer</div>
                    </div>
                  </div>
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    Spesialis pada pengembangan aplikasi, cloud serverless, dan pipeline CI/CD otomatis.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#e5e7eb] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#676767]">Bandar Lampung, Indonesia</span>
                  <a
                    href="https://github.com/mhmddefrizal"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black hover:text-[#4a4a4a] font-semibold flex items-center gap-1"
                  >
                    GitHub Profil <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CommandMenu
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </div>
  );
}

