import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function WhatsAppButton() {
  const phoneNumber = "393277068076"; // Numero AMA
  const message = encodeURIComponent("Salve, avrei bisogno di assistenza urgente...");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-slow flex items-center gap-3">
      <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-border/50 text-sm font-bold text-slate-800 animate-pulse relative">
        <span className="hidden sm:inline">Assistenza H24</span>
        <span className="sm:hidden">Scrivici</span>
        {/* Triangolino */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-white border-b-[6px] border-b-transparent"></div>
      </div>
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-green-600 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <FaWhatsapp className="h-8 w-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </Link>
    </div>
  );
}
