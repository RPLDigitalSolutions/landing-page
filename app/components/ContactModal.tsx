import React, { useState } from "react";
import { X, Send, CheckCircle2, MessageSquare, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ContactModal({ isOpen, onClose, defaultService = "Web Development" }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState("Rp 5 Juta - 15 Juta");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo RPL Digital Solutions,\n\nNama: ${name || "Klien"}\nEmail: ${email || "-"}\nLayanan: ${service}\nEstimasi Budget: ${budget}\n\nPesan:\n${message || "Saya ingin berkonsultasi mengenai proyek IT."}`
    );
    window.open(`https://wa.me/62895610120719?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-[#d0d5db] rounded-2xl shadow-2xl z-10 p-5 sm:p-6 md:p-8 font-sans">
        <div className="flex items-start justify-between pb-4 sm:pb-5 border-b border-[#e5e7eb]">
          <div>
            <div className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-black flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>KONSULTASI & ESTIMASI PROYEK</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-black mt-1">Formulir Kebutuhan Sistem</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#676767] hover:text-black hover:bg-[#f4f5f7] transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 sm:py-10 text-center space-y-4">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="text-base sm:text-lg font-bold font-display text-black">Pesan Berhasil Terkirim</h4>
            <p className="text-xs text-[#676767] max-w-xs mx-auto leading-relaxed">
              Tim software engineer RPL Digital Solutions telah menerima rincian kebutuhan Anda dan akan merespon dalam waktu maksimal 24 jam.
            </p>
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="btn-tactile w-full py-3 bg-black text-white hover:bg-[#1a1a1a] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lanjutkan via WhatsApp Instan</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-[#676767] hover:text-black"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 space-y-4 font-sans text-xs">
            <div>
              <label className="block text-[11px] font-medium text-black mb-1">
                Nama Lengkap / Nama Instansi
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: PT Lampung Digital Inovasi"
                className="w-full bg-[#f9fafb] border border-[#d0d5db] focus:border-black rounded-lg px-3.5 py-2.5 text-xs text-black placeholder-[#8a8a8a] focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium text-black mb-1">
                  Alamat Email / Kontak
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@perusahaan.com"
                  className="w-full bg-[#f9fafb] border border-[#d0d5db] focus:border-black rounded-lg px-3.5 py-2.5 text-xs text-black placeholder-[#8a8a8a] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-black mb-1">
                  Layanan Yang Dibutuhkan
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#f9fafb] border border-[#d0d5db] focus:border-black rounded-lg px-3.5 py-2.5 text-xs text-black focus:outline-none transition-colors"
                >
                  <option value="Web Development">Web & Cloud Architecture</option>
                  <option value="Android Development">Android Native Development</option>
                  <option value="IoT Development">IoT & Hardware Telemetry</option>
                  <option value="Machine Learning">Machine Learning & Analytics</option>
                  <option value="Managed Hosting">Managed Cloud & DevOps</option>
                  <option value="Penetration Testing">Penetration Testing & Security</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-black mb-1">
                Estimasi Alokasi Anggaran (Budget)
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-[#f9fafb] border border-[#d0d5db] focus:border-black rounded-lg px-3.5 py-2.5 text-xs text-black focus:outline-none transition-colors"
              >
                <option value="< Rp 5 Juta">&lt; Rp 5 Juta (Website Company Profile / Landing Page)</option>
                <option value="Rp 5 Juta - 15 Juta">Rp 5 Juta - 15 Juta (Aplikasi Web / Mobile Standar)</option>
                <option value="Rp 15 Juta - 50 Juta">Rp 15 Juta - 50 Juta (Sistem Enterprise & Cloud)</option>
                <option value="> Rp 50 Juta">&gt; Rp 50 Juta (Infrastruktur Custom Kompleks)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-black mb-1">
                Ringkasan Kebutuhan Proyek
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Jelaskan secara singkat fitur utama, alur kerja bisnis, atau tujuan proyek Anda..."
                className="w-full bg-[#f9fafb] border border-[#d0d5db] focus:border-black rounded-lg px-3.5 py-2.5 text-xs text-black placeholder-[#8a8a8a] focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="btn-tactile flex-1 py-3 bg-black text-white hover:bg-[#1a1a1a] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span>Kirim Permintaan Konsultasi</span>
              </button>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="btn-tactile py-3 px-4 bg-[#f4f5f7] border border-[#d0d5db] hover:border-black text-black text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>WhatsApp Instan</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

