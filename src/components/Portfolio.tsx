const portfolios = [
  {
    title: "Money Tracker",
    tags: ["Web App", "Security", "Cloudflare D1"],
    desc: "Alat pencatatan keuangan berdasarkan kategori, dilengkapi visualisasi data analitik dan dienkripsi menggunakan standar AES-256.",
    github: "https://github.com/RPLDS-Bot/money-tracker",
    live: "https://money-tracker.0x69.workers.dev/",
  },
  {
    title: "SPP Rizky",
    tags: ["Fullstack System", "Database", "Tailwind"],
    desc: "Sistem Informasi Pembayaran SPP terstruktur untuk mempermudah pencatatan, verifikasi kwitansi, dan rekapitulasi data pembayaran siswa.",
    github: "https://github.com/RPLDigitalSolutions/spp-rizky",
    live: "https://spp-rizky.0x69.workers.dev",
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="section-label mb-16 md:mb-24">
        <span>03 / Selected Works</span>
      </div>
      
      <div className="flex flex-col">
        {portfolios.map((item, i) => (
          <div 
            key={i} 
            className="reveal group border-t border-rule py-12 md:py-16 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center justify-between transition-colors duration-500"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Number */}
            <div className="text-paper/20 font-mono text-xs md:text-sm w-10 flex-shrink-0 tracking-[0.2em]">
              0{i + 1}
            </div>
            
            {/* Content */}
            <div className="flex-grow max-w-2xl">
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-paper/40 bg-paper/5 px-2 py-0.5 border border-paper/10 rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-paper mb-3 group-hover:text-white transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-paper/60 font-mono text-xs md:text-sm leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </div>
            
            {/* Action Links */}
            <div className="flex items-center gap-6 flex-shrink-0 pt-2 md:pt-0 font-mono text-xs uppercase tracking-[0.2em]">
              {item.live && (
                <a 
                  href={item.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-paper/70 hover:text-paper hover:underline underline-offset-4 transition-all py-1"
                >
                  Live Demo
                </a>
              )}
              {item.github && (
                <a 
                  href={item.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-paper/40 hover:text-paper/80 hover:underline underline-offset-4 transition-all py-1"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
        {/* Bottom rule */}
        <div className="border-t border-rule w-full"></div>
      </div>
    </section>
  );
}
