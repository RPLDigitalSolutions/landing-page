import React, { useState } from "react";
import type { Route } from "./+types/projects";
import {
  FolderGit2,
  Filter,
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
    title: "Portofolio & Studi Kasus Proyek | RPL Digital Solutions",
    description:
      "Portofolio proyek software house RPL Digital Solutions: Money Tracker, Sistem Web Enterprise, Aplikasi Android Native, IoT Telemetri, dan Penetration Testing.",
    path: "/projects",
    keywords:
      "portofolio software house, hasil kerja rpl digital solutions, contoh website enterprise, aplikasi android native, sistem iot telemetri, portfolio IT lampung",
  });
}

interface ProjectItem {
  id: string;
  title: string;
  category: "Web & SaaS" | "Android Mobile" | "IoT Telemetry" | "Cybersecurity";
  status: "Open Source" | "Production" | "Verified Audit";
  shortDesc: string;
  techStack: string[];
  githubUrl?: string;
}

export default function Projects() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("Semua");

  const projectsData: ProjectItem[] = [
    {
      id: "01",
      title: "Money Tracker Financial System",
      category: "Web & SaaS",
      status: "Open Source",
      shortDesc:
        "Aplikasi pelacak pemasukan dan pengeluaran keuangan pribadi/bisnis dengan grafik analytics visual & kategorisasi otomatis.",
      techStack: ["React", "JavaScript", "Chart Analytics", "Tailwind CSS", "Open Source"],
      githubUrl: "https://github.com/RPLDigitalSolutions/money-tracker",
    },
    {
      id: "02",
      title: "Enterprise Inventory & ERP Dashboard",
      category: "Web & SaaS",
      status: "Production",
      shortDesc:
        "Dashboard manajemen stok gudang, laporan penjualan real-time, dan manajemen hak akses karyawan berskala enterprise.",
      techStack: ["React 19", "Node.js", "PostgreSQL", "Edge Cloud", "Tailwind CSS"],
    },
    {
      id: "03",
      title: "Field Force Operations Android App",
      category: "Android Mobile",
      status: "Verified Audit",
      shortDesc:
        "Aplikasi Android native untuk tim lapangan dengan dukungan presensi GPS geotagging dan sinkronisasi offline-first.",
      techStack: ["Kotlin", "Jetpack Compose", "Room DB", "Coroutines", "Google Maps API"],
    },
    {
      id: "04",
      title: "Smart Telemetry & Industrial IoT Node",
      category: "IoT Telemetry",
      status: "Production",
      shortDesc:
        "Stasiun pemantauan suhu, kelembaban, dan arus listrik industri menggunakan ESP32 dan protokol MQTT streaming.",
      techStack: ["Embedded C++", "ESP32", "MQTT Broker", "WebSockets", "Grafana"],
    },
    {
      id: "05",
      title: "Infrastructure Penetration Testing Suite",
      category: "Cybersecurity",
      status: "Verified Audit",
      shortDesc:
        "Audit keamanan sistem web & API enterprise, identifikasi kerentanan OWASP Top 10, dan laporan remediasi kode.",
      techStack: ["Burp Suite", "OWASP ZAP", "Python Hardening", "Network Security Audit"],
    },
  ];

  const categories = ["Semua", "Web & SaaS", "Android Mobile", "IoT Telemetry", "Cybersecurity"];

  const filteredProjects =
    activeFilter === "Semua"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-black selection:text-white">
      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      <main className="flex-1">
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4f5f7] border border-[#d0d5db] rounded-full text-black font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5 text-black shrink-0" />
              <span>PORTOFOLIO REKAYASA & STUDI KASUS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-black leading-tight">
              Arsip Proyek
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#4a4a4a] max-w-2xl leading-relaxed">
              Kumpulan proyek sistem digital, aplikasi Android native, integrasi IoT hardware, dan audit keamanan yang telah diimplementasikan.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono pb-6 border-b border-[#e5e7eb]">
              <div className="flex items-center gap-2 text-xs text-[#4a4a4a] font-semibold uppercase shrink-0">
                <Filter className="w-4 h-4 text-[#676767]" />
                <span>Kategori:</span>
              </div>

              <div className="flex flex-wrap gap-1.5 bg-[#f4f5f7] p-1.5 rounded-lg border border-[#d0d5db] w-full sm:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs rounded-md transition-all font-medium ${
                      activeFilter === cat
                        ? "bg-black text-white font-semibold shadow-xs"
                        : "text-[#4a4a4a] hover:text-black hover:bg-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#f9fafb] border border-[#d0d5db] hover:border-black rounded-2xl p-5 sm:p-6 md:p-8 space-y-6 flex flex-col justify-between group transition-all shadow-xs h-full"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between text-xs font-mono gap-2">
                      <span className="text-[#676767] uppercase truncate">{proj.category}</span>
                      <span className="px-2.5 py-0.5 bg-black text-white text-[10px] font-semibold rounded font-mono shrink-0">
                        {proj.status}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold font-display text-black group-hover:text-[#1a1a1a] transition-colors">
                        {proj.title}
                      </h2>
                    </div>

                    <p className="text-xs text-[#4a4a4a] leading-relaxed">
                      {proj.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px]">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-white border border-[#d0d5db] text-[#3b3b3b] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {proj.githubUrl && (
                    <div className="pt-6 border-t border-[#e5e7eb] flex items-center justify-end text-xs">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#676767] hover:text-black p-1"
                        title="Lihat Repository GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  )}
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

