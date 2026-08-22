export default function Process() {
  return (
    <section id="terms" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="section-label mb-16 md:mb-24">
        <span>02 / Terms & Model</span>
      </div>
      
      {/* Panel 1: Pricing & Efficiency */}
      <div 
        data-line-reveal
        className="reveal border-t border-rule pt-14 md:pt-20 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start"
      >
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-paper leading-[1.06] tracking-[-0.02em]">
            <span className="ln"><i>No hidden fees.</i></span>
            <span className="ln"><i>No templated bloat.</i></span>
            <span className="ln"><i className="italic">Just pure, clean code.</i></span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-paper text-press font-mono text-[0.625rem] uppercase tracking-[0.2em] font-bold rounded-[2px] mb-6">
              Full transparency
            </span>
            <p className="text-paper/70 font-mono text-xs md:text-sm leading-relaxed max-w-xl">
              Kami menghapus tarif per jam dan birokrasi berbelit. Biaya disepakati di awal secara transparan mulai dari 500K IDR. Anda memiliki hak milik penuh 100% atas source code, infrastruktur, dan database yang kami bangun.
            </p>
          </div>

          {/* Integrated Stats */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-rule mt-2">
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-paper leading-none mb-1">
                500<span className="text-paper/40 text-2xl md:text-3xl">K</span>
              </div>
              <div className="text-paper/40 font-mono uppercase tracking-[0.2em] text-[0.625rem]">
                Starting Price (IDR)
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-paper leading-none mb-1">
                48<span className="text-paper/40 text-2xl md:text-3xl">h</span>
              </div>
              <div className="text-paper/40 font-mono uppercase tracking-[0.2em] text-[0.625rem]">
                Min. Turnaround
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel 2: Partnership Criteria */}
      <div 
        data-line-reveal
        className="reveal border-t border-rule pt-14 md:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start"
      >
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-paper leading-[1.06] tracking-[-0.02em]">
            <span className="ln"><i>We say no</i></span>
            <span className="ln"><i className="italic">more often than yes.</i></span>
          </h2>
        </div>

        <div>
          <span className="inline-block px-3 py-1 bg-paper/10 text-paper border border-paper/20 font-mono text-[0.625rem] uppercase tracking-[0.2em] font-medium rounded-[2px] mb-6">
            Selective collaboration
          </span>
          <p className="text-paper/70 font-mono text-xs md:text-sm leading-relaxed max-w-xl mb-6">
            Kami hanya mengambil jumlah project terbatas di setiap periode. Tujuannya sederhana: memastikan setiap baris kode ditinjau langsung oleh engineer kami, dengan kecepatan pengerjaan maksimal dan kualitas arsitektur tanpa kompromi.
          </p>
          <div className="text-paper/40 font-mono text-xs leading-relaxed max-w-xl border-l border-rule pl-4">
            Garansi bug & error 30 hari pasca rilis disertakan untuk setiap project.
          </div>
        </div>
      </div>
    </section>
  );
}
