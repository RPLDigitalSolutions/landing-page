const faqs = [
  {
    q: "Berapa lama waktu pengerjaan sebuah project?",
    a: "Untuk layanan mulai dari 500K, kami memberikan estimasi waktu pengerjaan kilat mulai dari 2 hari. Waktu pengerjaan akan disesuaikan kembali secara transparan berdasarkan kompleksitas dan skala project Anda."
  },
  {
    q: "Bagaimana sistem pembayaran yang berlaku?",
    a: "Kami memberlakukan sistem DP (Down Payment) sebesar 50% di awal sebelum project dimulai, dan pelunasan 50% sisanya setelah project selesai dan disetujui oleh klien."
  },
  {
    q: "Apakah ada garansi setelah project selesai?",
    a: "Ya, kami memberikan garansi perbaikan bug dan error selama 30 hari setelah project diserahterimakan, tanpa dikenakan biaya tambahan."
  },
  {
    q: "Apakah saya akan mendapatkan seluruh source code?",
    a: "Tentu. Klien memiliki hak milik penuh atas hasil akhir pekerjaan. Seluruh source code akan diserahkan melalui repositori Github private atau archive file."
  },
  {
    q: "Saya hanya memiliki ide kasar, apakah bisa dibantu merancangnya?",
    a: "Pasti. Tim kami akan membantu mematangkan ide Anda menjadi arsitektur sistem yang jelas, mencakup desain UI/UX, struktur database, hingga pemilihan tech stack yang tepat."
  },
  {
    q: "Teknologi (Tech Stack) apa saja yang digunakan?",
    a: "Kami selalu menggunakan teknologi modern yang relevan. Umumnya kami menggunakan Next.js/Astro/React untuk Frontend, Node.js/Laravel untuk Backend, dan React Native/Flutter untuk Mobile Apps."
  },
  {
    q: "Apakah harga 500K sudah termasuk domain dan server?",
    a: "Harga 500K berfokus pada biaya development. Namun, kami siap membantu setup deployment secara gratis ke platform cloud seperti Vercel atau Cloudflare. Domain kustom (misal .com atau .id) dikenakan biaya terpisah."
  },
  {
    q: "Apakah menerima perbaikan atau maintenance aplikasi yang sudah ada?",
    a: "Ya, kami melayani Security Audit dan Code Refactoring untuk memperbaiki, mengamankan, atau melanjutkan sistem (legacy code) yang sudah berjalan."
  },
  {
    q: "Bagaimana alur komunikasi selama proses development?",
    a: "Komunikasi dilakukan secara langsung dan transparan melalui WhatsApp. Anda akan mendapatkan update progress pekerjaan secara berkala tanpa birokrasi yang rumit."
  },
  {
    q: "Apakah melayani project untuk kebutuhan skripsi / tugas akhir mahasiswa?",
    a: "Ya. Kami melayani jasa implementasi teknis pembuatan sistem khusus untuk mahasiswa tingkat akhir. Code yang kami tulis rapi dan clean, sehingga mudah dipahami untuk dipresentasikan saat sidang."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="text-sm text-zinc-500 uppercase tracking-widest mb-16">05 / FAQ</div>
      <div className="max-w-4xl flex flex-col gap-6">
        {faqs.map((faq, i) => (
          <details key={i} className="group">
            <summary className="flex justify-between items-start md:items-center font-medium cursor-pointer list-none text-white text-lg md:text-xl py-2 hover:text-zinc-300 transition-colors [&::-webkit-details-marker]:hidden">
              <span className="tracking-tight pr-6">{faq.q}</span>
              <span className="transition-transform duration-300 group-open:rotate-45 text-zinc-500 flex-shrink-0 text-2xl font-light">+</span>
            </summary>
            <div className="text-zinc-400 mt-4 mb-8 leading-relaxed max-w-3xl text-base md:text-lg">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
