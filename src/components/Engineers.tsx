const engineers = [
  {
    name: "Andika Dinata",
    role: "Fullstack & Security",
    bio: "Pertama kali ngoding saat usia 13 tahun. Berpengalaman membangun automated chatbot, CMS, dan sistem informasi performa tinggi. Fluent di ekosistem TypeScript dan fokus di cybersecurity.",
    avatar: "https://avatars.githubusercontent.com/u/73385158?v=4",
    github: "https://github.com/andika0x01"
  },
  {
    name: "Aqil Fadhil Murbantresna",
    role: "Backend & IoT",
    bio: "Berpengalaman merancang sistem informasi database kompleks dengan Laravel & PHP. Mengembangkan integrasi mikrokontroler hardware IoT menggunakan Arduino dan Raspberry Pi.",
    avatar: "https://avatars.githubusercontent.com/u/154386191?v=4",
    github: "https://github.com/aqilfadhil1225"
  },
  {
    name: "Aziz Prayoga",
    role: "Frontend & Mobile",
    bio: "Berpengalaman mengembangkan sistem modern menggunakan Next.js & Astro serta aplikasi mobile dengan Flutter & React Native. Aktif dalam CTF, ethical bug hunting, dan security audit.",
    avatar: "https://avatars.githubusercontent.com/u/88768457?v=4",
    github: "https://github.com/AzizPrayoga1"
  },
  {
    name: "Muhammmad Defrizal",
    role: "Fullstack & Cloud",
    bio: "Berpengalaman membangun arsitektur backend berskala menggunakan NestJS, Next.js, dan mobile app React Native. Memiliki rekam jejak sebagai asisten dosen teknik informatika.",
    avatar: "https://avatars.githubusercontent.com/u/93093757?v=4",
    github: "https://github.com/mhmddefrizal"
  }
];

export default function Engineers() {
  return (
    <section id="team" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="section-label mb-16 md:mb-24">
        <span>04 / Core Engineers</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-24">
        {engineers.map((eng, i) => (
          <div 
            key={i} 
            className="reveal group flex flex-col gap-5" 
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Portrait Image Container */}
            <a 
              href={eng.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full aspect-square sm:aspect-[4/5] overflow-hidden bg-paper/5 border border-rule relative rounded-[2px]"
            >
              <img 
                src={eng.avatar} 
                alt={eng.name} 
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-75 contrast-110 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-press/20 group-hover:bg-transparent transition-colors duration-500" />
            </a>
            
            {/* Engineer Info */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-baseline border-b border-rule pb-3">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-paper tracking-tight">
                    {eng.name}
                  </h3>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/40">
                    {eng.role}
                  </span>
                </div>
                <a 
                  href={eng.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-paper/40 hover:text-paper hover:underline underline-offset-4 transition-all py-1"
                >
                  GitHub
                </a>
              </div>
              <p className="text-paper/60 font-mono text-xs md:text-sm leading-relaxed max-w-lg">
                {eng.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
