export const WA_NUMBER = "62895610120719";

export function openWhatsApp(customText?: string) {
  const defaultText = "Halo RPL Digital Solutions, saya ingin berkonsultasi mengenai kebutuhan software / IT house.";
  const text = encodeURIComponent(customText || defaultText);
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
}
