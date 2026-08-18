const services = [
  { title: "Web App Development", desc: "Responsive, performant web applications built with modern stacks." },
  { title: "Android App Development", desc: "Native and cross-platform mobile solutions for Android devices." },
  { title: "Final Project/Thesis", desc: "Technical implementation assistance for academic requirements." },
  { title: "AI/ML Development", desc: "Intelligent systems, data analysis, and predictive modeling." },
  { title: "IoT Development", desc: "Connected hardware and sensor networks with real-time dashboards." },
  { title: "Security Audit", desc: "Vulnerability assessment and code review for your applications." },
  { title: "Managed Hosting", desc: "Reliable, scalable infrastructure deployment and maintenance." }
];

export default function Services() {
  return (
    <section id="capabilities" className="py-24">
      <div className="text-sm text-zinc-500 uppercase tracking-widest mb-16">01 / Capabilities</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {services.map((s, i) => (
          <div key={i}>
            <h3 className="text-xl font-medium mb-3 text-white tracking-tight">{s.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
