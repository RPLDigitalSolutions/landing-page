import { getWhatsAppLink, siteConfig } from '../config';

export default function Footer() {
  return (
    <footer className="py-16 mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 text-sm text-zinc-500">
      <div>&copy; {new Date().getFullYear()} {siteConfig.name}.</div>
      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
    </footer>
  );
}
