import { getWhatsAppLink, siteConfig } from '../config';

export default function Footer() {
  return (
    <footer className="py-16 mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
      <div>&copy; {new Date().getFullYear()} {siteConfig.name}.</div>
      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mt-4 md:mt-0">WhatsApp</a>
    </footer>
  );
}
