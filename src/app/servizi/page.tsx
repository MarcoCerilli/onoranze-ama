"use client";

import { Shield, Truck, FileText, Heart, Flame, Feather, HeartHandshake, Leaf, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const servizi = [
  {
    title: "Organizzazione e Personalizzazione Autentica",
    description: "Abbandoniamo il concetto di 'pacchetto preimpostato'. Ogni rito viene costruito su misura, rispettando le ultime volontà del defunto e le necessità emotive della famiglia, per un commiato unico e autentico.",
    icon: Feather,
    tags: ["Cerimonie Laiche e Religiose", "Scelta del Rito", "Allestimenti Personalizzati"]
  },
  {
    title: "Custodia Sacra e Preparazione",
    description: "La preparazione della salma è gestita con estrema sensibilità e rispetto profondo. Non c'è distanza emotiva, ma una cura attenta che restituisce dignità al corpo nel suo ultimo viaggio.",
    icon: HeartHandshake,
    tags: ["Vestizione", "Tanatoestetica", "Composizione Salma"]
  },
  {
    title: "Gestione Amministrativa Trasparente",
    description: "Sostituiamo le complesse procedure standard con un'etica nuova. Ci occupiamo di tutte le pratiche burocratiche in modo trasparente, sollevando la famiglia da ogni peso amministrativo senza speculazioni.",
    icon: FileText,
    tags: ["Certificati di Morte", "Pratiche Cimiteriali", "Autorizzazioni al Trasporto"]
  },
  {
    title: "Trasporto Funebre Nazionale e Internazionale",
    description: "Flotta di mezzi eleganti e moderni per trasferimenti sicuri e decorosi su tutto il territorio nazionale ed estero, curando ogni dettaglio logistico con massima puntualità.",
    icon: Truck,
    tags: ["Auto Funebri Luxury", "Rimpatrio Salme", "Trasporti Aerei"]
  },
  {
    title: "Cremazione e Affido Ceneri",
    description: "Assistenza completa per la pratica di cremazione, dalla prenotazione del forno crematorio fino alla scelta dell'urna cineraria, con supporto per l'affido o la dispersione delle ceneri.",
    icon: Flame,
    tags: ["Pratiche Cremazione", "Urne Cinerarie", "Dispersione Ceneri"]
  },
  {
    title: "Addobbi Floreali e Arte Funeraria",
    description: "Composizioni floreali fresche ed eleganti create dai migliori fioristi. Forniamo anche supporto per la realizzazione di lapidi, monumenti e ricordini fotografici.",
    icon: Leaf,
    tags: ["Cuscini e Corone", "Copribara", "Fotoceramiche", "Lapidi"]
  }
];

export default function ServiziPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">Cosa Facciamo</span>
          <h1 className="text-4xl md:text-6xl font-headline text-foreground mb-6 leading-tight">
            I Nostri <span className="text-primary">Servizi</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed mb-8">
            AMA non offre solo servizi burocratici o "pacchetti preimpostati". Offriamo un'esperienza di commiato diversa, basata sulla visione, l'educazione e un'etica del rispetto che altrove è difficile trovare.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>
      </section>

      {/* Servizi Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servizi.map((servizio, idx) => (
              <Card key={idx} className="group border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <servizio.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-4 text-foreground">{servizio.title}</h3>
                  <p className="text-foreground/70 font-light leading-relaxed mb-6">
                    {servizio.description}
                  </p>
                  <ul className="space-y-2">
                    {servizio.tags.map((tag, tagIdx) => (
                      <li key={tagIdx} className="flex items-center gap-2 text-sm text-foreground/60">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <Lightbulb className="h-12 w-12 text-primary mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-headline font-bold mb-6 text-foreground">Hai bisogno di assistenza immediata?</h2>
          <p className="text-foreground/70 mb-10 font-light text-lg">
            Siamo operativi 24 ore su 24, 7 giorni su 7 su tutto il territorio di Roma e provincia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-background font-bold rounded-none">
              <a href="tel:+393277068076">Chiama Ora: 327 7068076</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-background hover:text-primary rounded-none">
              <Link href="/#contatti">
                Vai ai Contatti
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
