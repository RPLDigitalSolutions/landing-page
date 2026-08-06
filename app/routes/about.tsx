import React, { useState } from "react";
import type { Route } from "./+types/about";
import {
  Info,
  Award,
  ShieldCheck,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CommandMenu } from "../components/CommandMenu";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

import { getSeoMeta } from "../utils/seo";

export function meta({}: Route.MetaArgs) {
  return getSeoMeta({
    title: "Tentang Kami & Tim Software Engineer | RPL Digital Solutions",
    description:
      "Sejarah perusahaan, filosofi rekayasa perangkat lunak, serta profil tim software engineer RPL Digital Solutions di Bandar Lampung.",
    path: "/about",
    keywords:
      "tentang rpl digital solutions, tim software engineer bandar lampung, konsultan it lampung, profil perusahaan software house",
  });
}

export default function About() {
  const [commandOpen, setCommandOpen] = useState(false);

  const timelineEvents = [
    {
      year: "2026",
      title: "Berdirinya RPL Digital Solutions",
      desc: "RPL Digital Solutions resmi didirikan di Bandar Lampung — membawa pengalaman engineering tim sejak 2022 ke dalam satu brand yang terfokus pada software berkualitas tinggi, aman, dan dapat diandalkan.",
    },
    {
      year: "2026 — Q3",
      title: "Peluncuran Layanan & Klien Pertama",
      desc: "Membuka layanan pengembangan sistem informasi kustom, web & mobile app, serta konsultasi keamanan siber. Menyelesaikan proyek pertama untuk klien lokal di Lampung.",
    },
    {
      year: "2027",
      title: "Ekspansi Produk & Portofolio",
      desc: "Target memperluas klien ke skala nasional, mengembangkan produk SaaS pertama, dan memperkuat kapabilitas cloud-native serta integrasi IoT.",
    },
    {
      year: "2028 — 2030",
      title: "Visi: Studio Teknologi Terdepan di Sumatera",
      desc: "Menjadi software house rujukan di Sumatera dengan rekam jejak proyek enterprise, keamanan siber, dan sistem berbasis AI — memberikan dampak nyata bagi bisnis lokal dan nasional.",
    },
  ];

  const visionMission = {
    vision: "Menjadi studio rekayasa perangkat lunak paling terpercaya di Sumatera pada 2030 — dikenal atas kualitas kode, etika kerja, dan dampak nyata bagi klien.",
    missions: [
      "Membangun software kustom yang bisa diandalkan, aman, dan mudah dikembangkan jangka panjang.",
      "Mengutamakan transparansi dan komunikasi terbuka di setiap tahap proyek.",
      "Menerapkan standar keamanan siber dari awal, bukan setelah terjadi masalah.",
      "Memberdayakan bisnis lokal dan UMKM dengan teknologi yang selama ini hanya terjangkau perusahaan besar.",
      "Tumbuh bersama ekosistem digital Indonesia — berkontribusi pada komunitas developer Lampung dan sekitarnya.",
    ],
    roadmap: [
      { year: "2026", label: "Fondasi", desc: "Pendirian resmi, klien pertama, membangun reputasi lokal." },
      { year: "2027", label: "Ekspansi", desc: "Produk SaaS, klien nasional, penguatan tim." },
      { year: "2028", label: "Skala", desc: "Enterprise projects, integrasi AI, brand awareness nasional." },
      { year: "2029", label: "Konsolidasi", desc: "Recurring revenue, komunitas developer, R&D aktif." },
      { year: "2030", label: "Visi Tercapai", desc: "Studio terdepan di Sumatera, dampak luas, tim solid." },
    ],
  };

  const teamMembers = [
    {
      id: "01",
      name: "Andika Dinata",
      role: "Staff Software Engineer",
      activeSince: "2020",
      avatar: "https://avatars.githubusercontent.com/u/73385158?v=4",
      github: "https://github.com/andika0x01",
      bio: "Bergerak di sistem informasi, keamanan siber, machine learning, dan embedded systems sejak 2022.",
      expertise: ["Cybersecurity & Pentesting", "Machine Learning (Python/PyTorch)", "Embedded Systems Design", "Fullstack System Architecture"],
    },
    {
      id: "02",
      name: "Aqil Fadhil Murbantresna",
      role: "Software Engineer",
      activeSince: "2022",
      avatar: "https://avatars.githubusercontent.com/u/154386191?v=4",
      github: "https://github.com/aqilfadhil1225",
      bio: "Fokus pada arsitektur fullstack, cloud, dan integrasi IoT. Terbiasa bekerja dari desain sistem hingga deployment.",
      expertise: ["React & Modern Web Frameworks", "Cloud Infrastructure & Serverless", "IoT & Sensor Network", "Database Architecture"],
    },
    {
      id: "03",
      name: "Aziz Prayoga",
      role: "Software Engineer",
      activeSince: "2022",
      avatar: "https://github.com/AzizPrayoga1.png",
      github: "https://github.com/AzizPrayoga1",
      bio: "Fokus pada pengembangan web, backend API, dan keamanan siber (cybersecurity) — dengan perhatian khusus pada performa serta pengujian & audit keamanan sistem.",
      expertise: ["Cybersecurity & Web Security", "Frontend & Web Systems", "Backend API Architecture", "Database & System Hardening"],
    },
    {
      id: "04",
      name: "Muhammad Defrizal",
      role: "Software Engineer",
      activeSince: "2022",
      avatar: "https://github.com/mhmddefrizal.png",
      github: "https://github.com/mhmddefrizal",
      bio: "Spesialis pada pengembangan aplikasi, cloud serverless, dan pipeline CI/CD otomatis.",
      expertise: ["Fullstack Web Development", "Cloud Infrastructure", "REST & GraphQL APIs", "DevOps & Automation"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-black selection:text-white">
      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      <main className="flex-1">
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4f5f7] border border-[#d0d5db] rounded-full text-black font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <Info className="w-3.5 h-3.5 text-black shrink-0" />
              <span>PROFIL STUDIO & FILOSOFI REKAYASA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-black leading-tight">
              Tentang RPL Digital Solutions
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#4a4a4a] max-w-2xl leading-relaxed">
              Software house dari Bandar Lampung, berdiri di atas prinsip kode yang bersih, aman, dan bisa diandalkan.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3b3b3b]">
                VISI & KOMITMEN STUDIO
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight leading-snug">
                Kami Ada untuk Membantu Anda Wujudkan Ide Digital
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#4a4a4a] leading-relaxed">
                <p>
                  RPL Digital Solutions berdiri pada 2026 di Bandar Lampung — membawa pengalaman nyata tim engineer yang telah aktif mengerjakan proyek software sejak 2022. Bukan perusahaan baru yang belajar dari nol.
                </p>
                <p>
                  Kami membangun kode kustom — bukan template — mulai dari platform keuangan, Android native, monitoring IoT, hingga penetration testing infrastruktur. Transparan, terukur, dan bisa diandalkan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 font-sans">
              <div className="bg-[#f9fafb] border border-[#d0d5db] p-5 sm:p-6 rounded-2xl space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-black font-mono">
                  <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                  <span>KODE YANG BISA DIANDALKAN</span>
                </div>
                <p className="text-xs text-[#4a4a4a] leading-relaxed">
                  Sistem yang kami bangun tidak hanya berfungsi hari ini — tapi juga mudah diperbaiki dan dikembangkan di masa depan.
                </p>
              </div>

              <div className="bg-[#f9fafb] border border-[#d0d5db] p-5 sm:p-6 rounded-2xl space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-black font-mono">
                  <Award className="w-4 h-4 text-black shrink-0" />
                  <span>DATA ANDA AMAN</span>
                </div>
                <p className="text-xs text-[#4a4a4a] leading-relaxed">
                  Setiap sistem yang kami bangun diuji ketahanan keamanannya — data Anda, pelanggan Anda, tidak bocor ke tempat yang salah.
                </p>
              </div>

              <div className="bg-[#f9fafb] border border-[#d0d5db] p-5 sm:p-6 rounded-2xl space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-black font-mono">
                  <MapPin className="w-4 h-4 text-black shrink-0" />
                  <span>BERBASIS DI BANDAR LAMPUNG</span>
                </div>
                <p className="text-xs text-[#4a4a4a] leading-relaxed">
                  Tim kami ada di Bandar Lampung dan bisa Anda temui langsung — bukan vendor anonim dari kota lain.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3b3b3b]">
                IDENTITAS VISUAL STUDIO
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight">
                Aset Brand & Logo Resmi
              </h2>
              <p className="text-xs sm:text-sm text-[#4a4a4a] max-w-xl">
                Identitas visual resmi RPL Digital Solutions menggunakan kombinasi lambang emblem (1:1) dan banner horizontal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black text-white p-5 sm:p-6 rounded-2xl border border-black/20 shadow-md flex flex-col justify-between space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] sm:text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider truncate">
                    EMBLEM PERUSAHAAN (SQUARE 1:1)
                  </span>
                  <span className="text-[10px] font-mono bg-[#1a1a1a] text-[#ababab] px-2 py-0.5 rounded border border-[#3b3b3b] shrink-0">
                    logo-1.png
                  </span>
                </div>

                <div className="h-28 sm:h-32 flex items-center justify-center bg-[#0d0d0d] rounded-xl p-4 border border-[#222]">
                  <img
                    src="/logo-1.png"
                    alt="RPL Digital Solutions Square Emblem Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>

                <p className="text-xs text-[#ababab] leading-relaxed">
                  Digunakan sebagai favicon web, avatar sistem, ikon aplikasi mobile, dan badge header navbar.
                </p>
              </div>

              <div className="bg-black text-white p-5 sm:p-6 rounded-2xl border border-black/20 shadow-md flex flex-col justify-between space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] sm:text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider truncate">
                    BANNER HORISONTAL (PRIMARY BRAND)
                  </span>
                  <span className="text-[10px] font-mono bg-[#1a1a1a] text-[#ababab] px-2 py-0.5 rounded border border-[#3b3b3b] shrink-0">
                    logo.png
                  </span>
                </div>

                <div className="h-28 sm:h-32 flex items-center justify-center bg-[#0d0d0d] rounded-xl p-4 border border-[#222] overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="RPL Digital Solutions Horizontal Banner Logo"
                    className="w-full h-full object-cover scale-[1.35] object-center"
                  />
                </div>

                <p className="text-xs text-[#ababab] leading-relaxed">
                  Digunakan sebagai brand header resmi, publikasi media, dokumen penawaran, dan footer situs web.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3b3b3b]">
                REKAM JEJAK
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight">
                Perjalanan & Milestones Perusahaan
              </h2>
            </div>

            <div className="relative border-l border-[#d0d5db] ml-3 sm:ml-6 space-y-8 sm:space-y-10">
              {timelineEvents.map((evt) => (
                <div key={evt.year} className="relative pl-6 sm:pl-8 group">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-black rounded-full group-hover:bg-black transition-colors" />
                  <div className="text-xs font-mono font-bold text-black mb-1">{evt.year}</div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-black mb-1">{evt.title}</h3>
                  <p className="text-xs text-[#4a4a4a] max-w-2xl leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3b3b3b]">
                VISI & MISI
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight">
                Menuju 2030
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-black font-mono uppercase tracking-wider">
                  <Award className="w-4 h-4 text-black shrink-0" />
                  <span>VISI</span>
                </div>
                <p className="text-sm sm:text-base text-[#1a1a1a] leading-relaxed font-medium">
                  {visionMission.vision}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-black font-mono uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>MISI</span>
                </div>
                <ul className="space-y-3">
                  {visionMission.missions.map((m, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3b3b3b] leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3b3b3b]">
                ROADMAP 2026 — 2030
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
                {visionMission.roadmap.map((r) => (
                  <div key={r.year} className="bg-white border border-[#d0d5db] rounded-2xl p-4 space-y-2 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-black">{r.year}</div>
                      <div className="text-sm font-bold font-display text-black mt-0.5">{r.label}</div>
                    </div>
                    <p className="text-xs text-[#676767] leading-relaxed mt-2">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3b3b3b]">
                TIM SOFTWARE ENGINEER
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight">
                Profil Software Engineer
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#f9fafb] border border-[#d0d5db] rounded-2xl p-5 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex flex-wrap items-center justify-between border-b border-[#e5e7eb] pb-3 sm:pb-4 text-xs font-mono gap-2">
                      <span className="text-[#676767]">{member.role}</span>
                      <span className="text-black font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        Aktif Sejak {member.activeSince}
                      </span>
                    </div>

                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-5">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-[#d0d5db] shrink-0"
                      />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-black">{member.name}</h3>
                        <div className="text-xs text-[#676767] font-mono mt-0.5">{member.role}</div>
                      </div>
                    </div>

                    <p className="text-xs text-[#4a4a4a] leading-relaxed">{member.bio}</p>

                    <div>
                      <div className="text-[11px] font-mono font-bold text-black uppercase tracking-wider mb-2">
                        Area Spesialisasi Utama:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#3b3b3b]">
                        {member.expertise.map((exp) => (
                          <li key={exp} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#e5e7eb] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <span className="text-[#676767]">Bandar Lampung, Indonesia</span>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-tactile px-3.5 py-1.5 bg-black text-white hover:bg-[#1a1a1a] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub Profil</span>
                    </a>
                  </div>
                </div>
              ))}
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

