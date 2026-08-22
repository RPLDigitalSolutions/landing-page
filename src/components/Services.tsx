const services = [
  { 
    category: "Fullstack Web", 
    title: "Web Application & Platform Engineering", 
    desc: "Aplikasi web berkinerja tinggi yang dibangun dengan framework modern (Astro, Next.js, React). Cepat diakses, responsif, dan didesain agar mudah di-index mesin pencari serta siap scale." 
  },
  { 
    category: "Mobile Ecosystem", 
    title: "Android & Cross-Platform Mobile Apps", 
    desc: "Aplikasi Android native dan cross-platform menggunakan Flutter dan React Native. UI/UX mulus, integrasi API real-time, dan siap dipublikasikan ke Google Play Store." 
  },
  { 
    category: "Academic & Research", 
    title: "Tugas Akhir, Skripsi & Final Project", 
    desc: "Pendampingan implementasi teknis pembuatan sistem untuk mahasiswa tingkat akhir. Clean code architecture, dokumentasi terstruktur, dan siap dipresentasikan saat sidang." 
  },
  { 
    category: "Machine Intelligence", 
    title: "AI, Machine Learning & Data Systems", 
    desc: "Integrasi model kecerdasan buatan, visual recognition, predictive analytics, dan Large Language Models (LLM) untuk otomatisasi proses bisnis dan pengolahan data." 
  },
  { 
    category: "Hardware & IoT", 
    title: "Internet of Things & Embedded Systems", 
    desc: "Jaringan sensor pintar dan mikrokontroler (Arduino, ESP32, Raspberry Pi) yang terhubung ke dashboard monitoring real-time berbasis cloud." 
  },
  { 
    category: "Security & Audit", 
    title: "Security Assessment & Code Refactoring", 
    desc: "Pemeriksaan celah keamanan (vulnerability assessment), audit arsitektur database, dan refactor legacy code agar aplikasi tahan serangan dan lebih efisien." 
  },
  { 
    category: "Cloud Ops", 
    title: "Managed Cloud Deployment & DevOps", 
    desc: "Setup infrastruktur cloud cepat dan hemat (Cloudflare Workers, Vercel, VPS Linux, Docker). Dilengkapi SSL otomatis, automated CI/CD, dan monitoring downtime." 
  }
];

export default function Services() {
  return (
    <section id="capabilities" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="section-label mb-16 md:mb-24">
        <span>01 / Capabilities</span>
      </div>
      
      {/* Vertical Editorial List */}
      <div className="flex flex-col">
        {services.map((s, i) => (
          <div 
            key={i} 
            className="reveal group border-t border-rule py-10 md:py-14 grid grid-cols-1 md:grid-cols-[13rem_1fr] lg:grid-cols-[16rem_1fr] gap-6 md:gap-12 items-start"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Left Column: Category Badge + Number */}
            <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-4">
              <span className="inline-flex items-center font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/70 bg-paper/5 px-3 py-1 border border-paper/10 rounded-full">
                {s.category}
              </span>
              <span className="font-mono text-xs text-paper/20 tracking-[0.2em]">
                0{i + 1}
              </span>
            </div>

            {/* Right Column: Large Serif Headline + Description */}
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-paper tracking-[-0.015em] leading-[1.12] mb-4 group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-paper/60 font-mono text-xs md:text-sm leading-relaxed max-w-2xl">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
        {/* Bottom divider */}
        <div className="border-t border-rule w-full"></div>
      </div>
    </section>
  );
}
