export const siteConfig = {
  name: "RPL Digital Solutions",
  whatsappNumber: "62895610120719", // Ganti dengan nomor WhatsApp yang asli (format: 628...)
  whatsappMessage: "Halo RPL Digital Solutions, saya tertarik untuk mendiskusikan sebuah project."
};

export const getWhatsAppLink = () => {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
};
