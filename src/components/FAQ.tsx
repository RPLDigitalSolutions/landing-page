import { useState } from 'react';

const faqs = [
  {
    q: "Berapa estimasi waktu pengerjaan?",
    a: "Untuk project standar mulai dari 500K IDR, turnaround kilat kami mulai dari 2 hari (48 jam). Waktu pengerjaan akan disepakati transparan di awal berdasarkan cakupan fitur."
  },
  {
    q: "Bagaimana sistem pembayaran project?",
    a: "Skema transparan: 50% Down Payment (DP) saat project disepakati dan dimulai, serta 50% pelunasan setelah sistem selesai diuji dan siap serah terima."
  },
  {
    q: "Apakah ada garansi setelah pengerjaan selesai?",
    a: "Pasti. Kami memberikan garansi perbaikan bug & error gratis selama 30 hari penuh pasca deployment live, memastikan sistem berjalan stabil."
  },
  {
    q: "Apakah saya mendapatkan 100% full source code?",
    a: "Tentu. Seluruh hak cipta dan aset kode menjadi milik Anda 100%, diserahkan via GitHub Private Repository atau compressed archive file."
  },
  {
    q: "Bagaimana jika saya baru punya konsep kasar?",
    a: "Engineer kami akan membantu membedah konsep Anda menjadi spesifikasi teknis arsitektur yang jelas: rancangan database, UI wireframe, dan pemilihan tech stack."
  },
  {
    q: "Teknologi (Tech Stack) apa saja yang digunakan?",
    a: "Framework modern berperforma tinggi: Next.js, React, Astro, Tailwind CSS di frontend; Node.js, Laravel, PostgreSQL/D1 di backend; dan React Native atau Flutter di mobile."
  },
  {
    q: "Apakah harga 500K sudah termasuk domain & server?",
    a: "Harga 500K berfokus pada jasa engineering. Kami membantu setup deployment gratis ke cloud serverless (Cloudflare / Vercel). Domain kustom dapat dihubungkan langsung."
  },
  {
    q: "Apakah melayani audit dan perbaikan aplikasi lama?",
    a: "Ya, kami melayani Security Assessment dan Code Refactoring untuk menambal celah keamanan, mengoptimasi database, atau melanjutkan codebase lama (legacy)."
  },
  {
    q: "Bagaimana alur komunikasi selama proses development?",
    a: "Komunikasi intensif dan langsung dengan lead engineer via WhatsApp. Anda mendapatkan live demo preview berkala tanpa birokrasi berbelit."
  },
  {
    q: "Apakah melayani tugas akhir / skripsi mahasiswa?",
    a: "Ya. Kami membantu implementasi teknis sistem riset mahasiswa. Code ditulis rapi dan clean architecture sehingga mudah dijelaskan saat sidang pengujian."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  const carouselItems = faqs.slice(0, 5);
  const N = carouselItems.length;

  return (
    <section id="faq" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="section-label mb-16 md:mb-24">
        <span>05 / Questions & Answers</span>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif font-light text-paper tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="font-mono text-xs text-paper/40 uppercase tracking-[0.2em]">
          Klik card untuk memutar atau gunakan kontrol navigasi
        </p>
      </div>

      {/* 3D Carousel Stage */}
      <div 
        className="relative h-[360px] md:h-[420px] my-4 md:my-6 overflow-hidden flex items-center justify-center"
        style={{ perspective: '900px', perspectiveOrigin: '50% 48%' }}
      >
        <div className="relative w-full h-full max-w-4xl mx-auto">
          {carouselItems.map((faq, i) => {
            const offset = ((i - active + N) % N);
            const angle = (offset / N) * 360;
            const distance = Math.min(offset, N - offset);
            const scale = offset === 0 ? 1 : 0.82 - distance * 0.05;
            const blur = distance === 0 ? 0 : distance * 2;
            const zIndex = offset === 0 ? 30 : 20 - distance * 5;
            const yOffset = distance === 0 ? 0 : distance * -12;

            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="absolute top-1/2 left-1/2 cursor-pointer select-none"
                style={{
                  width: 'min(280px, 80vw)',
                  height: '300px',
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(240px) rotateY(${-angle}deg) translateY(${yOffset}px) scale(${scale})`,
                  filter: blur > 0 ? `blur(${blur}px)` : 'none',
                  zIndex,
                  transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s ease',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* 3D Glass Card Container */}
                <div className={`w-full h-full relative p-5 md:p-8 flex flex-col justify-between rounded-[4px] border transition-colors duration-400 ${
                  offset === 0 
                    ? 'bg-press/90 border-paper/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl' 
                    : 'bg-press/60 border-paper/10 backdrop-blur-md opacity-60 hover:opacity-90'
                }`}>
                  {/* Pear Star Ornaments */}
                  <svg 
                    viewBox="0 0 24 24" 
                    className={`w-3 h-3 absolute top-3 left-3 transition-opacity duration-300 ${offset === 0 ? 'fill-paper/60' : 'fill-paper/20'}`}
                  >
                    <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z"></path>
                  </svg>
                  <svg 
                    viewBox="0 0 24 24" 
                    className={`w-3 h-3 absolute bottom-3 right-3 transition-opacity duration-300 ${offset === 0 ? 'fill-paper/60' : 'fill-paper/20'}`}
                  >
                    <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z"></path>
                  </svg>

                  {/* Card Content */}
                  <div>
                    <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-paper/30 block mb-3">
                      Question 0{i + 1}
                    </span>
                    <h3 className="font-serif font-light text-paper text-lg md:text-2xl leading-snug tracking-tight mb-3">
                      {faq.q}
                    </h3>
                  </div>

                  <p className={`text-paper/70 font-mono text-[0.65rem] md:text-xs leading-relaxed transition-opacity duration-400 ${
                    offset === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Navigation Bar */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          type="button"
          onClick={() => setActive((active - 1 + N) % N)}
          aria-label="Previous question"
          className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-paper/50 hover:text-paper transition-colors py-2 px-4 border border-paper/15 rounded-[2px] bg-paper/5 hover:bg-paper/15"
        >
          Previous
        </button>

        {/* Indicator dots */}
        <div className="flex items-center gap-2">
          {carouselItems.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setActive(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIndex === active ? 'w-6 bg-paper' : 'w-1.5 bg-paper/20 hover:bg-paper/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActive((active + 1) % N)}
          aria-label="Next question"
          className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-paper/50 hover:text-paper transition-colors py-2 px-4 border border-paper/15 rounded-[2px] bg-paper/5 hover:bg-paper/15"
        >
          Next
        </button>
      </div>

      {/* Expandable secondary FAQ list */}
      <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-rule">
        <div className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-paper/40 mb-6 flex items-center justify-between">
          <span>Pertanyaan Lainnya</span>
          <span>5 Topik Tambahan</span>
        </div>
        
        <div className="flex flex-col">
          {faqs.slice(5).map((faq, idx) => (
            <details key={idx} className="group border-b border-rule py-5">
              <summary className="flex justify-between items-center font-serif text-lg md:text-xl font-light text-paper cursor-pointer list-none hover:text-white transition-colors [&::-webkit-details-marker]:hidden">
                <span className="pr-6">{faq.q}</span>
                <span className="font-mono text-xl text-paper/40 transition-transform duration-300 group-open:rotate-45 font-light">
                  +
                </span>
              </summary>
              <p className="text-paper/60 font-mono text-xs md:text-sm leading-relaxed pt-4 pr-6">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
