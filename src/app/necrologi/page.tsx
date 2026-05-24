"use client";

import { Lightbulb, Calendar, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const necrologi = [
  {
    nome: "Mario Rossi",
    eta: 78,
    dataDecesso: "18 Maggio 2026",
    dataEsequie: "20 Maggio 2026, ore 10:30",
    luogoEsequie: "Chiesa di San Silvestro, Roma",
    messaggio: "Ne danno il triste annuncio la moglie, i figli e i nipoti tutti.",
  },
  {
    nome: "Giulia Bianchi in Verdi",
    eta: 82,
    dataDecesso: "17 Maggio 2026",
    dataEsequie: "19 Maggio 2026, ore 15:00",
    luogoEsequie: "Parrocchia Santa Maria, Terracina",
    messaggio: "Ha raggiunto la casa del Padre, lasciando un vuoto incolmabile nei nostri cuori.",
  },
  {
    nome: "Roberto Conti",
    eta: 65,
    dataDecesso: "16 Maggio 2026",
    dataEsequie: "18 Maggio 2026, ore 11:00",
    luogoEsequie: "Tempio Crematorio Flaminio, Roma",
    messaggio: "La famiglia ringrazia anticipatamente quanti vorranno partecipare.",
  }
];

export default function NecrologiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="h-14 w-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(255,180,0,0.1)]">
             <Lightbulb className="h-7 w-7" />
          </div>
          <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">Un Commiato Educato e Vivo</span>
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6 leading-tight">
            Necrologi e <span className="text-primary">Condoglianze</span>
          </h1>
          <p className="text-lg text-foreground/80 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            In questa sezione è possibile consultare le date e i luoghi delle esequie, e lasciare un pensiero digitale per i familiari. Un modo per far sentire la propria vicinanza anche da lontano.
          </p>
        </div>
      </section>

      {/* Bacheca Necrologi */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-8">
            {necrologi.map((necrologio, idx) => (
              <Card key={idx} className="border-border bg-card shadow-lg hover:border-primary/30 transition-colors overflow-hidden relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/80"></div>
                <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between pl-10">
                  <div className="space-y-4 flex-1">
                    <h2 className="text-3xl font-headline font-bold text-foreground">
                      {necrologio.nome} <span className="text-lg font-light text-foreground/50">({necrologio.eta} anni)</span>
                    </h2>
                    <p className="text-foreground/80 italic font-light">"{necrologio.messaggio}"</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4">
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span><strong>Esequie:</strong> {necrologio.dataEsequie}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{necrologio.luogoEsequie}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-auto pt-6 md:pt-0 border-t border-border md:border-t-0 md:border-l md:pl-8 flex flex-col items-center">
                    <Button variant="outline" className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 rounded-none h-12 px-6 flex items-center gap-2" onClick={() => alert("Funzionalità di invio messaggio in fase di sviluppo.")}>
                      <Heart className="h-4 w-4" /> Lascia un Pensiero
                    </Button>
                    <span className="text-[10px] text-foreground/40 mt-3 uppercase tracking-wider">Servizio Gratuito</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
