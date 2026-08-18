const portfolios = [
  {
    title: "Money Tracker",
    desc: "Alat pencatatan keuangan berdasarkan kategori, dilengkapi dengan alat statistik dan dienkripsi menggunakan AES-256.",
    github: "https://github.com/RPLDS-Bot/money-tracker",
    live: "https://money-tracker.0x69.workers.dev/",
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24">
      <div className="text-sm text-zinc-500 uppercase tracking-widest mb-16">03 / Selected Works</div>
      <div className="grid grid-cols-1 gap-16">
        {portfolios.map((item, i) => (
          <div key={i} className="group">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">{item.title}</h3>
            <p className="text-lg text-zinc-400 max-w-3xl mb-8 leading-relaxed">{item.desc}</p>
            <div className="flex flex-wrap gap-8">
              {item.live && (
                <a 
                  href={item.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 text-white font-medium hover:opacity-70 transition-opacity"
                >
                  <span>View Live</span>
                </a>
              )}
              {item.github && (
                <a 
                  href={item.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
