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
    <section id="contact" className="py-24 md:py-32 border-t border-zinc-900">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-16 text-white">Contact Us.</h2>
      
      <form onSubmit={handleSubmit} className="max-w-xl flex flex-col gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-zinc-800 text-white focus:border-white focus:outline-none py-2 transition-colors placeholder:text-zinc-700"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-zinc-800 text-white focus:border-white focus:outline-none py-2 transition-colors placeholder:text-zinc-700"
            placeholder="Web Development Project"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Isi Pesan</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-zinc-800 text-white focus:border-white focus:outline-none py-2 transition-colors resize-none placeholder:text-zinc-700"
            placeholder="Ceritakan tentang project Anda..."
          />
        </div>

        <button
          type="submit"
          className="self-start mt-4 px-8 py-3 bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
