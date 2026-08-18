const engineers = [
  {
    name: "Andika Dinata",
    bio: "Pertama kali ngoding saat usia 13 tahun. Pernah membuat chatbot, cms, sistem informasi. Fluent di JavaScript/Typescript. Saat ini mulai fokus di cybersecurity.",
    avatar: "https://avatars.githubusercontent.com/u/73385158?v=4",
    github: "https://github.com/andika0x01"
  },
  {
    name: "Aqil Fadhil Murbantresna",
    bio: "Memiliki pengalaman membuat sistem informasi menggunakan Codeigniter dan Laravel. Pernah membuat project IoT menggunakan Arduino dan Raspberry Pi.",
    avatar: "https://avatars.githubusercontent.com/u/154386191?v=4",
    github: "https://github.com/aqilfadhil1225"
  },
  {
    name: "Aziz Prayoga",
    bio: "Memiliki pengalaman membuat sistem informasi menggunakan Next.js, Astro. Pernah membuat android app menggunakan Flutter dan React Native. Sekarang tertarik ke cybersecurity, CTF, dan bug hunting.",
    avatar: "https://avatars.githubusercontent.com/u/88768457?v=4",
    github: "https://github.com/AzizPrayoga1"
  },
  {
    name: "Muhammmad Defrizal",
    bio: "Memiliki pengalaman membuat sistem informasi menggunakan Next.js, Nest. Pernah membuat android app menggunakan React Native. Pernah menjadi asisten dosen di kampus.",
    avatar: "https://avatars.githubusercontent.com/u/93093757?v=4",
    github: "https://github.com/mhmddefrizal"
  }
];

export default function Engineers() {
  return (
    <section id="team" className="py-24">
      <div className="text-sm text-zinc-500 uppercase tracking-widest mb-16">04 / Engineers</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {engineers.map((eng, i) => (
          <div key={i} className="group flex flex-col gap-6">
            <a href={eng.github} target="_blank" rel="noopener noreferrer" className="block w-full max-w-sm aspect-square overflow-hidden bg-zinc-900 relative">
              <img 
                src={eng.avatar} 
                alt={eng.name} 
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </a>
            <div>
              <a href={eng.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:opacity-70 transition-opacity mb-3">
                <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">{eng.name}</h3>
              </a>
              <p className="text-zinc-400 leading-relaxed max-w-md">{eng.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
