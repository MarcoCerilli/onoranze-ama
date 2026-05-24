import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-foreground/50 py-16 border-t border-border">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <Image 
                src="/logo.png" 
                alt="Logo Agenzia Funebre AMA" 
                fill
                className="object-contain drop-shadow-[0_0_10px_rgba(255,180,0,0.1)]"
              />
            </div>
            <h2 className="text-2xl font-headline font-bold text-primary leading-tight">AGENZIA FUNEBRE AMA</h2>
          </div>
          <p className="text-sm font-light">Onoranze Funebri AMA s.r.l.s.<br/>Un'esperienza di commiato diversa.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-foreground font-bold">Informazioni</h4>
          <ul className="space-y-2 text-sm">
            <li>Sede Legale: Via Archimede, 181</li>
            <li>00197 ROMA</li>
            <li>P.IVA: 18133571002</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-foreground font-bold">Navigazione & Contatti</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/filosofia" className="hover:text-primary transition-colors">La Nostra Filosofia</Link></li>
            <li><Link href="/servizi" className="hover:text-primary transition-colors">I Nostri Servizi</Link></li>
            <li><Link href="/necrologi" className="hover:text-primary transition-colors">Necrologi</Link></li>
            <li className="pt-2 mt-2 border-t border-border/50">Tel: 327 7068076</li>
            <li>Email: onoranzefunebriama@libero.it</li>
            <li>PEC: amasrls2025@legalmail.it</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-border text-center text-[10px] uppercase tracking-widest text-foreground/40">
        © {new Date().getFullYear()} ONORANZE FUNEBRI AMA s.r.l.s. - Tutti i diritti riservati.
      </div>
    </footer>
  );
}
