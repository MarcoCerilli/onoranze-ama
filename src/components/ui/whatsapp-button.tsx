import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  const phoneNumber = "393331234567"; // Esempio numero
  const message = encodeURIComponent("Salve, ho bisogno di assistenza urgente...");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-slow">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-green-600 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
        <div className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 shadow-lg">
          Urgenze H24
        </div>
      </Link>
    </div>
  );
}
