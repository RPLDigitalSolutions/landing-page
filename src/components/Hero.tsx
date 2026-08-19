export default function Hero() {
  return (
    <section className="py-40 md:py-48">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-white leading-tight">
        We architect <br />digital solutions.
      </h1>
      <p className="text-base md:text-xl text-zinc-400 max-w-2xl mb-16 leading-relaxed">
        Fast, precise, and built for scale. From concept to production in 2 days. 
        Transparent pricing starting at 500K IDR.
      </p>
      <div>
        <a 
          href="/#contact" 
          className="group inline-flex items-center gap-4 text-lg font-medium text-white"
        >
          <span>Start a project</span>
        </a>
      </div>
    </section>
  );
}
