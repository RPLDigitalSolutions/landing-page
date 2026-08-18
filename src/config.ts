export const siteConfig = {
  name: "RPL Digital Solutions",
  description: "Fast, precise, and built for scale. Jasa pembuatan custom software (Web, Android, AI/ML, IoT) terpercaya mulai dari 500K IDR.",
  url: "https://rpldigitalsolutions.tech", // Ganti dengan URL domain asli Anda nantinya
  ogImage: "https://rpldigitalsolutions.tech/og-image.png", // Ganti dengan path URL gambar banner Anda
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp yang asli (format: 628...)
  whatsappMessage: "Halo RPL Digital Solutions, saya tertarik untuk mendiskusikan sebuah project."
};

export const getWhatsAppLink = () => {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
};
