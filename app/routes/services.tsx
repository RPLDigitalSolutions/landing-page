import React, { useState } from "react";
import type { Route } from "./+types/services";
import {
  Globe,
  Smartphone,
  Cpu,
  BrainCircuit,
  Server,
  Lock,
  CheckCircle2,
  Layers,
  MessageSquare,
  Zap,
  Star,
  Package,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CommandMenu } from "../components/CommandMenu";
import { openWhatsApp } from "../utils/whatsapp";

import { getSeoMeta } from "../utils/seo";

export function meta({}: Route.MetaArgs) {
  return getSeoMeta({
    title: "Layanan & Harga Software Engineering | RPL Digital Solutions",
    description:
      "Layanan software engineering RPL Digital Solutions: Web, Android, IoT, ML, Cloud, dan Penetration Testing. Harga mulai IDR 500.000 dengan 3 tier pilihan.",
    path: "/services",
    keywords:
      "layanan software house, jasa bikin website murah lampung, jasa buat aplikasi android, pembuat sistem iot, penetrasi testing murah, biaya pembuatan software bandar lampung",
  });
}

const servicesList = [
  {
    id: "01",
    title: "Website & Aplikasi Web",
    category: "Website",
    icon: Globe,
    shortDesc:
      "Dari halaman profil bisnis sederhana hingga sistem manajemen data yang kompleks — kami buatkan sesuai kebutuhan Anda.",
    pricing: {
      basic: {
        label: "Basic",
        price: "Rp 500.000",
        deliverables: [
          "Landing page / profil bisnis",
          "Desain responsif mobile-first",
          "Form kontak & integrasi WhatsApp",
          "Deploy ke hosting (1 domain)",
        ],
        note: "Cocok untuk UMKM & startup awal",
      },
      standard: {
        label: "Standar",
        price: "Rp 5.000.000",
        deliverables: [
          "Sistem CRUD lengkap + autentikasi",
          "Dashboard admin & manajemen data",
          "Integrasi API pihak ketiga",
          "Source code + dokumentasi",
        ],
        note: "Cocok untuk aplikasi bisnis internal",
      },
      enterprise: {
        label: "Enterprise",
        price: "Negosiasi",
        deliverables: [
          "Arsitektur microservice / multi-tenant",
          "Real-time sync & analytics dashboard",
          "CI/CD pipeline otomatis",
          "SLA & garansi pemeliharaan",
        ],
        note: "Hubungi kami untuk diskusikan scope",
      },
    },
  },
  {
    id: "02",
    title: "Aplikasi Android",
    category: "Aplikasi HP",
    icon: Smartphone,
    shortDesc:
      "Aplikasi untuk HP Android — bisa untuk toko online, absensi karyawan, pemantauan lapangan, atau kebutuhan lainnya.",
    pricing: {
      basic: {
        label: "Basic",
        price: "Rp 500.000",
        deliverables: [
          "Aplikasi informasi / katalog sederhana",
          "UI Jetpack Compose (3–5 layar)",
          "Build APK siap install",
          "Support Android 8.0+",
        ],
        note: "Cocok untuk app profil atau direktori",
      },
      standard: {
        label: "Standar",
        price: "Rp 5.000.000",
        deliverables: [
          "Autentikasi & manajemen pengguna",
          "Sinkronisasi data dengan REST API",
          "Database lokal Room + caching",
          "Source code + dokumentasi teknis",
        ],
        note: "Cocok untuk app operasional lapangan",
      },
      enterprise: {
        label: "Enterprise",
        price: "Negosiasi",
        deliverables: [
          "Arsitektur Clean / MVVM penuh",
          "Integrasi sensor (GPS, kamera, BLE)",
          "Google Play publishing & review",
          "Unit test & crash monitoring",
        ],
        note: "Hubungi kami untuk diskusikan scope",
      },
    },
  },
  {
    id: "03",
    title: "Sistem Sensor & IoT",
    category: "Sensor & Perangkat Keras",
    icon: Cpu,
    shortDesc:
      "Pasang sensor di mesin, ruangan, atau lahan — lalu pantau datanya dari HP atau komputer secara langsung.",
    pricing: {
      basic: {
        label: "Basic",
        price: "Rp 500.000",
        deliverables: [
          "Firmware ESP32 / Arduino sederhana",
          "Baca 1–2 sensor & output serial",
          "Skema wiring + dokumentasi",
          "Konsultasi teknis hardware",
        ],
        note: "Cocok untuk prototipe & tugas akhir",
      },
      standard: {
        label: "Standar",
        price: "Rp 5.000.000",
        deliverables: [
          "Firmware multi-sensor + MQTT publisher",
          "Dashboard monitoring real-time (web)",
          "Enkripsi data & autentikasi broker",
          "Pengujian stabilitas jaringan",
        ],
        note: "Cocok untuk sistem monitoring lokal",
      },
      enterprise: {
        label: "Enterprise",
        price: "Negosiasi",
        deliverables: [
          "Arsitektur IoT fleet multi-perangkat",
          "OTA update firmware via cloud",
          "Time-series DB + visualisasi historis",
          "Integrasi alert & notifikasi",
        ],
        note: "Hubungi kami untuk diskusikan scope",
      },
    },
  },
  {
    id: "04",
    title: "Analisis Data & AI",
    category: "Data & Kecerdasan Buatan",
    icon: BrainCircuit,
    shortDesc:
      "Sistem yang bisa membaca pola dari data Anda — mendeteksi anomali, memprediksi permintaan, atau mengenali gambar secara otomatis.",
    pricing: {
      basic: {
        label: "Basic",
        price: "Rp 500.000",
        deliverables: [
          "Analisis & visualisasi dataset (EDA)",
          "Model klasifikasi sederhana (sklearn)",
          "Laporan akurasi & interpretasi hasil",
          "Notebook Jupyter terdokumentasi",
        ],
        note: "Cocok untuk riset & tugas akhir",
      },
      standard: {
        label: "Standar",
        price: "Rp 5.000.000",
        deliverables: [
          "Model pelatihan dengan dataset kustom",
          "REST API inferensi (FastAPI / Flask)",
          "Pipeline preprocessing otomatis",
          "Evaluasi & benchmark model",
        ],
        note: "Cocok untuk integrasi ke produk",
      },
      enterprise: {
        label: "Enterprise",
        price: "Negosiasi",
        deliverables: [
          "Model deep learning + fine-tuning",
          "Deployment inferensi di cloud/edge",
          "Monitoring drift & retraining pipeline",
          "Integrasi ke sistem produksi",
        ],
        note: "Hubungi kami untuk diskusikan scope",
      },
    },
  },
  {
    id: "05",
    title: "Hosting & Pengelolaan Server",
    category: "Server & Infrastruktur",
    icon: Server,
    shortDesc:
      "Kami yang urus servernya — aplikasi Anda tetap online, cepat, dan berjalan tanpa perlu Anda pusing soal teknis.",
    pricing: {
      basic: {
        label: "Basic",
        price: "Rp 500.000",
        deliverables: [
          "Deploy aplikasi ke VPS / shared hosting",
          "Setup SSL/TLS + domain konfigurasi",
          "Nginx reverse proxy dasar",
          "Panduan pengelolaan mandiri",
        ],
        note: "Cocok untuk deploy awal proyek",
      },
      standard: {
        label: "Standar",
        price: "Rp 5.000.000",
        deliverables: [
          "Containerization dengan Docker Compose",
          "CI/CD pipeline otomatis (GitHub Actions)",
          "Monitoring uptime + alert email",
          "Strategi backup berkala",
        ],
        note: "Cocok untuk tim & proyek aktif",
      },
      enterprise: {
        label: "Enterprise",
        price: "Negosiasi",
        deliverables: [
          "Arsitektur multi-server + load balancer",
          "Auto-scaling & failover otomatis",
          "Disaster recovery plan",
          "SLA response & on-call support",
        ],
        note: "Hubungi kami untuk diskusikan scope",
      },
    },
  },
  {
    id: "06",
    title: "Uji Keamanan Sistem",
    category: "Keamanan Digital",
    icon: Lock,
    shortDesc:
      "Kami coba \"bobol\" sistem Anda sendiri untuk menemukan celah keamanan — sebelum orang lain yang jahat melakukannya.",
    pricing: {
      basic: {
        label: "Basic",
        price: "Rp 500.000",
        deliverables: [
          "Vulnerability scan otomatis (web/server)",
          "Laporan temuan dengan peringkat risiko",
          "Checklist hardening dasar",
          "Rekomendasi perbaikan tertulis",
        ],
        note: "Cocok untuk cek awal keamanan sistem",
      },
      standard: {
        label: "Standar",
        price: "Rp 5.000.000",
        deliverables: [
          "Pentest manual (OWASP Top 10 penuh)",
          "Uji autentikasi & manajemen sesi",
          "Laporan komprehensif + PoC eksploit",
          "Sesi review remediasi (1x meeting)",
        ],
        note: "Cocok untuk aplikasi produksi",
      },
      enterprise: {
        label: "Enterprise",
        price: "Negosiasi",
        deliverables: [
          "Red Team simulation end-to-end",
          "Pentest mobile (APK reverse engineering)",
          "Audit kode sumber manual",
          "Sertifikat verifikasi keamanan",
        ],
        note: "Hubungi kami untuk diskusikan scope",
      },
    },
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Ceritakan Kebutuhan Anda",
    desc: "Kami dengarkan dulu apa yang Anda butuhkan — tidak perlu paham teknis, cukup ceritakan masalah atau tujuannya.",
  },
  {
    step: "02",
    title: "Kami Rancangkan Solusinya",
    desc: "Tim kami buat rancangan tampilan dan alur sistemnya. Anda bisa lihat dan berikan masukan sebelum pengerjaan dimulai.",
  },
  {
    step: "03",
    title: "Pengerjaan Bertahap",
    desc: "Kami kerjakan secara bertahap dan Anda bisa melihat progresnya langsung — tidak ada kejutan di akhir.",
  },
  {
    step: "04",
    title: "Pengujian Sebelum Rilis",
    desc: "Sistem diuji menyeluruh sebelum diberikan ke Anda — pastikan semua berjalan sesuai yang diharapkan.",
  },
  {
    step: "05",
    title: "Serah Terima & Dukungan",
    desc: "Sistem diserahkan, kami dampingi proses awal penggunaan, dan siap dihubungi jika ada kendala.",
  },
];

export default function Services() {
  const [commandOpen, setCommandOpen] = useState(false);

  const openContact = (serviceName: string, tier: string) => {
    if (tier === "Enterprise") {
      openWhatsApp(
        `Halo RPL Digital Solutions, saya ingin mendiskusikan kebutuhan custom untuk layanan ${serviceName}. Mohon info lebih lanjut.`
      );
    } else {
      openWhatsApp(
        `Halo RPL Digital Solutions, saya tertarik dengan paket ${tier} untuk layanan ${serviceName}. Boleh saya minta detail lebih lanjut?`
      );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-black selection:text-white">
      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      <main className="flex-1">
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4f5f7] border border-[#d0d5db] rounded-full text-black font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-black shrink-0" />
              <span>LAYANAN & HARGA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-black leading-tight">
              Layanan & Harga
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#4a4a4a] max-w-2xl leading-relaxed">
              Enam jenis layanan digital dengan harga yang jelas. Tidak ada biaya tersembunyi — Anda tahu dulu biayanya sebelum memutuskan.
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2 text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f4f5f7] border border-[#d0d5db] rounded-lg text-black">
                <Package className="w-3.5 h-3.5 text-[#676767] shrink-0" />
                <span>Basic: mulai Rp 500.000</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-lg">
                <Star className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Standar: mulai Rp 5.000.000</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f4f5f7] border border-[#d0d5db] rounded-lg text-black">
                <Zap className="w-3.5 h-3.5 text-[#3b3b3b] shrink-0" />
                <span>Enterprise: Negosiasi Scope</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
            {servicesList.map((srv) => {
              const Icon = srv.icon;
              return (
                <div key={srv.id} className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#e5e7eb]">
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="mt-1 p-2.5 sm:p-3 rounded-xl bg-[#f4f5f7] border border-[#d0d5db] text-black shrink-0">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-[#8a8a8a] uppercase tracking-widest mb-1">
                          {srv.category}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold font-display text-black tracking-tight">
                          {srv.title}
                        </h2>
                        <p className="text-xs text-[#4a4a4a] mt-1.5 max-w-xl leading-relaxed">
                          {srv.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-[#8a8a8a] shrink-0 hidden sm:block">
                      {srv.id}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    <div className="bg-[#f9fafb] border border-[#d0d5db] rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 h-full">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-[#676767] shrink-0" />
                          <span className="text-xs font-semibold text-black uppercase tracking-wider">
                            {srv.pricing.basic.label}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl sm:text-2xl font-bold font-display text-black">
                            {srv.pricing.basic.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#676767] italic">
                          {srv.pricing.basic.note}
                        </p>
                        <ul className="space-y-2 pt-2">
                          {srv.pricing.basic.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs text-[#4a4a4a]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3b3b3b] shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => openContact(srv.title, srv.pricing.basic.label)}
                        className="btn-tactile w-full px-4 py-2.5 bg-white border border-[#d0d5db] hover:border-black text-black text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 mt-auto"
                      >
                        <span>Pilih Paket Basic</span>
                        <MessageSquare className="w-3.5 h-3.5 text-[#676767] shrink-0" />
                      </button>
                    </div>

                    <div className="bg-black text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 relative shadow-lg h-full">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-0.5 bg-emerald-500 text-black text-[10px] font-mono font-bold rounded-full uppercase tracking-wider whitespace-nowrap shadow-xs">
                          Paling Banyak Dipilih
                        </span>
                      </div>
                      <div className="space-y-3 flex-1 pt-1">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-xs font-semibold text-white uppercase tracking-wider">
                            {srv.pricing.standard.label}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl sm:text-2xl font-bold font-display text-white">
                            {srv.pricing.standard.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#ababab] italic">
                          {srv.pricing.standard.note}
                        </p>
                        <ul className="space-y-2 pt-2">
                          {srv.pricing.standard.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs text-[#d0d5db]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => openContact(srv.title, srv.pricing.standard.label)}
                        className="btn-tactile w-full px-4 py-2.5 bg-white text-black hover:bg-[#e5e7eb] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 mt-auto"
                      >
                        <span>Pilih Paket Standar</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </button>
                    </div>

                    <div className="bg-[#f9fafb] border border-[#d0d5db] rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 h-full">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-[#3b3b3b] shrink-0" />
                          <span className="text-xs font-semibold text-black uppercase tracking-wider">
                            {srv.pricing.enterprise.label}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl sm:text-2xl font-bold font-display text-black">
                            {srv.pricing.enterprise.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#676767] italic">
                          {srv.pricing.enterprise.note}
                        </p>
                        <ul className="space-y-2 pt-2">
                          {srv.pricing.enterprise.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs text-[#4a4a4a]">
                              <BadgeCheck className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => openContact(srv.title, srv.pricing.enterprise.label)}
                        className="btn-tactile w-full px-4 py-2.5 bg-[#f4f5f7] border border-[#d0d5db] hover:border-black text-black text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 mt-auto"
                      >
                        <span>Diskusikan Kebutuhan</span>
                        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb] bg-white">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3b3b3b]">
                CARA KERJA KAMI
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight">
                Dari Obrolan Sampai Jadi
              </h2>
              <p className="text-xs sm:text-sm text-[#676767] max-w-xl">
                Lima langkah sederhana yang kami jalani bersama Anda, dari awal sampai sistem siap dipakai.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {workflowSteps.map((wf) => (
                <div
                  key={wf.step}
                  className="bg-[#f9fafb] border border-[#d0d5db] rounded-xl p-5 space-y-3 flex flex-col justify-between h-full"
                >
                  <div className="space-y-2">
                    <div className="text-xl font-bold font-display text-black font-mono">{wf.step}</div>
                    <h3 className="text-xs font-bold text-black leading-snug">{wf.title}</h3>
                    <p className="text-[11px] text-[#4a4a4a] leading-relaxed">{wf.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-6 bg-black text-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] border border-[#3b3b3b] rounded-full text-[10px] sm:text-xs font-mono text-[#d0d5db]">
              <span>Tanpa Kontrak Minimal • Diskusi Transparan</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white leading-snug">
              Ada Kebutuhan yang Belum Anda Temukan di Sini?
            </h2>
            <p className="text-xs md:text-sm text-[#ababab] max-w-xl mx-auto leading-relaxed">
              Tidak perlu bingung dulu. Ceritakan saja situasi Anda — kami bantu pikirkan solusinya bersama.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() =>
                  openWhatsApp("Halo RPL Digital Solutions, saya ingin konsultasi kebutuhan proyek IT.")
                }
                className="btn-tactile px-6 py-3 bg-white text-black hover:bg-[#e5e7eb] text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs w-full sm:w-auto"
              >
                <span>Konsultasi Gratis via WhatsApp</span>
                <MessageSquare className="w-4 h-4 text-black shrink-0" />
              </button>
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

