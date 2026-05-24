"use client";

import Image from "next/image";
import { Flame, Feather, HeartHandshake, Leaf, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FilosofiaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background z-10"></div>
        {/* Usiamo un div colorato come fallback in caso non ci sia un'immagine specifica */}
        <div className="absolute inset-0 bg-card border-b border-border"></div>
        <div className="container relative z-20 px-4 text-center max-w-4xl mx-auto animate-fade-in-slow">
          <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">La Nostra Essenza</span>
          <h1 className="text-4xl md:text-6xl font-headline text-foreground mb-6 leading-tight">
            La Filosofia <span className="text-primary">AMA</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
            Un'esperienza di commiato diversa, basata sulla visione, l'educazione e un'etica del rispetto profondo.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xl md:text-2xl font-headline font-light leading-relaxed text-foreground/90 italic">
            "Crediamo che il momento del commiato non debba essere una procedura standardizzata, ma un atto di custodia sacra. Ogni vita è unica, e così deve essere l'ultimo saluto."
          </p>
          <div className="h-1 w-16 bg-primary mx-auto mt-12 mb-4"></div>
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">La Direzione</span>
        </div>
      </section>

      {/* I 5 Pilastri */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-primary">I Nostri 5 Pilastri</h2>
            <p className="text-foreground/70 font-light max-w-2xl mx-auto">
              Ciò che ci distingue dalle agenzie tradizionali e definisce il nostro approccio ad ogni servizio funebre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            
            {/* Pilastro 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary shadow-[0_0_15px_rgba(255,180,0,0.1)]">
                  <Flame className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground">Visione e Novità</h3>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed">
                Non ci limitiamo a ripetere protocolli consolidati. Portiamo un approccio fresco e innovativo nel settore funerario, cercando costantemente nuovi modi per onorare la memoria in modo significativo e contemporaneo.
              </p>
            </div>

            {/* Pilastro 2 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary shadow-[0_0_15px_rgba(255,180,0,0.1)]">
                  <Feather className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground">Personalizzazione Autentica</h3>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed">
                Rifiutiamo i "pacchetti preimpostati". Ogni servizio viene costruito su misura, ascoltando le storie, le passioni e i desideri della famiglia per riflettere l'autentica essenza della persona scomparsa.
              </p>
            </div>

            {/* Pilastro 3 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-secondary/20 rounded-full text-secondary shadow-[0_0_15px_rgba(200,0,0,0.1)]">
                  <HeartHandshake className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground">Custodia Sacra</h3>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed">
                La salma non è mai considerata una "pratica da sbrigare". La trattiamo con la massima delicatezza e reverenza, considerandoci custodi sacri in uno dei momenti più vulnerabili per la famiglia.
              </p>
            </div>

            {/* Pilastro 4 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary shadow-[0_0_15px_rgba(255,180,0,0.1)]">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground">Etica e Rispetto Profondo</h3>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed">
                Operiamo con assoluta trasparenza. Non speculiamo sul dolore, ma offriamo supporto umano reale, guidando le famiglie nelle scelte burocratiche ed economiche con onestà e chiarezza.
              </p>
            </div>

            {/* Pilastro 5 (Centrato) */}
            <div className="space-y-6 md:col-span-2 md:w-1/2 md:mx-auto">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary shadow-[0_0_15px_rgba(255,180,0,0.1)]">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground">Commiato Educato e Vivo</h3>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed">
                Crediamo che il funerale debba essere un rito che aiuta a vivere il lutto in modo sano. Promuoviamo un commiato che non è solo addio, ma celebrazione della vita vissuta, offrendo anche supporto psicologico post-evento.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-headline font-bold mb-6 text-foreground">Siamo qui per aiutarvi</h2>
          <p className="text-foreground/70 mb-10 font-light">
            Siamo a vostra completa disposizione 24 ore su 24 per supportarvi in ogni fase, garantendo la massima discrezione e professionalità.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-background font-bold rounded-none">
              <Link href="/#contatti">
                Contattaci Subito
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-card hover:text-primary rounded-none">
              <Link href="/servizi" className="flex items-center gap-2">
                Scopri i Servizi <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
