export default function Process() {
  return (
    <section id="terms" className="py-32">
      <div className="text-sm text-zinc-500 uppercase tracking-widest mb-16">02 / Terms</div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
        <div>
          <div className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-2">500K</div>
          <div className="text-zinc-400 text-sm">Starting Price (IDR)</div>
        </div>
        <div>
          <div className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-2">48h</div>
          <div className="text-zinc-400 text-sm">Minimum Turnaround</div>
        </div>
      </div>
      <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed">
        No hidden fees. No templated bloat. Just pure, functional code delivered directly to your repository or live server.
      </p>
    </section>
  );
}
