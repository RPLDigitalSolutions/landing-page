import { useState } from 'react';
import { getWhatsAppLink } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo RPL Digital Solutions,\n\nNama: ${formData.name}\nSubject: ${formData.subject}\nPesan:\n${formData.message}`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      {/* Section Header */}
      <div className="section-label mb-16 md:mb-24">
        <span>06 / Start Collaboration</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-20 items-start">
        {/* Left Column: Headline & Studio Details */}
        <div className="reveal">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-paper leading-[1.05] tracking-tight mb-6">
            Start a<br />
            <span className="italic font-normal">project.</span>
          </h2>
          <p className="text-paper/60 font-mono text-xs md:text-sm max-w-md leading-relaxed mb-10">
            Ceritakan spesifikasi sistem atau ide yang ingin Anda bangun. Kami akan menganalisis kebutuhan teknis dan merespon dalam waktu kurang dari 24 jam.
          </p>
          
          <div className="flex flex-col gap-3 font-mono text-xs text-paper/40 pt-6 border-t border-rule">
            <div className="flex items-center gap-2">
              <span className="text-paper/20">EMAIL:</span>
              <a href="mailto:info@rpldigitalsolutions.tech" className="text-paper/80 hover:text-white transition-colors">
                info@rpldigitalsolutions.tech
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-paper/20">LOCATION:</span>
              <span className="text-paper/80">Bandar Lampung, Lampung, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-paper/20">RESPONSE:</span>
              <span className="text-paper/80">&lt; 24 Jam Kerja via WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Right Column: Modern Glass Form */}
        <div className="reveal w-full max-w-xl bg-press/40 backdrop-blur-md border border-rule p-8 md:p-10 rounded-[4px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/50 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-paper/5 border border-paper/15 text-paper font-mono text-xs md:text-sm focus:border-paper/60 focus:bg-paper/10 focus:outline-none px-4 py-3.5 transition-all rounded-[2px] placeholder:text-paper/20"
                placeholder="Contoh: Budi Santoso"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/50 mb-2">
                Jenis Layanan / Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-paper/5 border border-paper/15 text-paper font-mono text-xs md:text-sm focus:border-paper/60 focus:bg-paper/10 focus:outline-none px-4 py-3.5 transition-all rounded-[2px] placeholder:text-paper/20"
                placeholder="Web App / Android / Skripsi / IoT / Security"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/50 mb-2">
                Deskripsi Kebutuhan Project
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-paper/5 border border-paper/15 text-paper font-mono text-xs md:text-sm focus:border-paper/60 focus:bg-paper/10 focus:outline-none px-4 py-3.5 transition-all resize-none rounded-[2px] placeholder:text-paper/20"
                placeholder="Ceritakan gambaran sistem, fitur utama, atau kendala teknis Anda..."
              />
            </div>

            <button
              type="submit"
              className="group relative inline-flex justify-center items-center overflow-hidden px-8 py-4 border border-paper/40 text-paper font-mono text-xs uppercase tracking-[0.2em] mt-2 rounded-[2px] bg-paper/5 hover:bg-paper hover:text-press transition-all duration-300"
            >
              <span className="relative z-10 font-medium">
                Send via WhatsApp
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
