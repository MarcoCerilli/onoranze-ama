"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, Truck, FileText, Heart, Clock, Phone, MapPin, Mail, Flame, Feather, HeartHandshake, Leaf, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    title: "Cremazione",
    description: "Servizio completo di cremazione, assistenza per le ceneri e urne cinerarie.",
    icon: Shield,
    image: PlaceHolderImages.find(img => img.id === 'service-cremation')?.imageUrl
  },
  {
    title: "Trasporto Funebre",
    description: "Mezzi moderni e decorosi per trasporti nazionali ed internazionali.",
    icon: Truck,
    image: PlaceHolderImages.find(img => img.id === 'service-transport')?.imageUrl
  },
  {
    title: "Disbrigo Pratiche",
    description: "Gestione burocratica completa presso comuni, ASL e uffici giudiziari.",
    icon: FileText,
    image: PlaceHolderImages.find(img => img.id === 'service-admin')?.imageUrl
  },
  {
    title: "Addobbi Floreali",
    description: "Composizioni floreali eleganti studiate per onorare la memoria dei propri cari.",
    icon: Heart,
    image: PlaceHolderImages.find(img => img.id === 'service-flowers')?.imageUrl
  }
];

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) {
        toast({
          title: "Messaggio inviato",
          description: "Vi ricontatteremo il prima possibile."
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Errore",
        description: "Impossibile inviare il messaggio. Per urgenze chiamateci direttamente."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-funeral');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header rimosso perché ora nel layout.tsx */}

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Agenzia Funebre AMA"
          fill
          className="object-cover brightness-[0.2]"
          priority
          data-ai-hint="funeral solemn background"
        />
        <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto animate-fade-in-slow">
          <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">Assistenza e Rispetto</span>
          <h2 className="text-4xl md:text-6xl font-headline text-foreground mb-6 leading-tight">
            Non solo servizi, <br/><span className="text-primary italic">un'esperienza di commiato diversa.</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Basata sulla visione, l'educazione e un'etica del rispetto profondo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/80 text-white font-semibold rounded-none px-10 transition-all">
              I Nostri Servizi
            </Button>
            <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10 rounded-none px-10">
              Contattaci Ora
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-card py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-foreground">
            <div className="flex flex-col items-center gap-2 opacity-90">
              <Clock className="h-6 w-6 text-primary" />
              <span className="text-xs uppercase tracking-wider font-bold">Disponibili 24/7</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-90">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xs uppercase tracking-wider font-bold">Massima Discrezione</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-90">
              <HeartHandshake className="h-6 w-6 text-primary" />
              <span className="text-xs uppercase tracking-wider font-bold">Supporto Umano</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-90">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xs uppercase tracking-wider font-bold">Roma e Provincia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section: Perché Scegliere AMA */}
      <section id="perche-ama" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-primary">PERCHÉ SCEGLIERE AMA:</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          </div>

          <div className="max-w-5xl mx-auto bg-card rounded-xl border border-border shadow-2xl overflow-hidden p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Left Column: Altre Agenzie */}
              <div className="space-y-12">
                <h3 className="text-xl md:text-2xl font-headline font-semibold text-foreground/50 text-center uppercase tracking-widest pb-4 border-b border-border/50">
                  Altre Agenzie
                </h3>
                <ul className="space-y-10">
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground/50">
                    <div className="p-3 bg-muted rounded-full">
                      <Shield className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium pt-3">Approccio Tradizionale</span>
                  </li>
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground/50">
                    <div className="p-3 bg-muted rounded-full">
                      <Clock className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium pt-3">Pacchetti Preimpostati</span>
                  </li>
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground/50">
                    <div className="p-3 bg-muted rounded-full">
                      <FileText className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium pt-3">Gestione Amministrativa</span>
                  </li>
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground/50">
                    <div className="p-3 bg-muted rounded-full">
                      <Heart className="h-6 w-6 opacity-50" />
                    </div>
                    <span className="text-lg font-medium pt-3">Distanza Emotiva</span>
                  </li>
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground/50">
                    <div className="p-3 bg-muted rounded-full">
                      <FileText className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium pt-3">Procedure Standard</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: AMA */}
              <div className="space-y-12 border-l border-primary/20 pl-8 md:pl-16 relative">
                <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary to-primary/0"></div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground text-center uppercase tracking-widest pb-4 border-b border-primary/20">
                  Agenzia Funebre<br/><span className="text-primary text-4xl">AMA</span>
                </h3>
                <ul className="space-y-10">
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground">
                    <div className="p-3 bg-primary/10 rounded-full text-primary shadow-[0_0_15px_rgba(255,180,0,0.2)]">
                      <Flame className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-bold pt-3">Visione e Novità</span>
                  </li>
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground">
                    <div className="p-3 bg-primary/10 rounded-full text-primary shadow-[0_0_15px_rgba(255,180,0,0.2)]">
                      <Feather className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-bold pt-3">Personalizzazione Autentica</span>
                  </li>
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground">
                    <div className="p-3 bg-secondary/20 rounded-full text-secondary shadow-[0_0_15px_rgba(200,0,0,0.2)]">
                      <HeartHandshake className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-bold pt-3">Custodia Sacra e Sensibilità</span>
                  </li>
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground">
                    <div className="p-3 bg-primary/10 rounded-full text-primary shadow-[0_0_15px_rgba(255,180,0,0.2)]">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-bold pt-3">Etica Nuova e Rispetto Profondo</span>
                  </li>
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left text-foreground">
                    <div className="p-3 bg-primary/10 rounded-full text-primary shadow-[0_0_15px_rgba(255,180,0,0.2)]">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-bold pt-3">Un Commiato Educato e Vivo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border text-center">
              <p className="text-lg md:text-xl font-headline text-foreground/90 italic leading-relaxed max-w-3xl mx-auto">
                "AMA non offre solo servizi; offre un'esperienza di commiato diversa, basata sulla visione, l'educazione e un'etica del rispetto che altrove è difficile trovare."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servizi" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline mb-4 text-primary">I Nostri Servizi</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
            <p className="text-foreground/80 font-light leading-relaxed">
              Curiamo ogni dettaglio organizzativo e burocratico con estrema attenzione e professionalità.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="group border-border bg-card shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-500 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || ""}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <service.icon className="text-primary h-12 w-12" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-headline font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed font-light">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contatti" className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-headline mb-4 text-primary">Contattaci per informazioni</h2>
                <div className="h-1 w-20 bg-secondary mb-6"></div>
                <p className="text-foreground/80 font-light mb-8">
                  Siamo a vostra completa disposizione. Potete chiamarci h24 o compilare il form sottostante.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Telefono H24</h4>
                    <p className="text-foreground/70">327 7068076</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Sede Legale</h4>
                    <p className="text-foreground/70">Via Archimede, 181 - 00197 ROMA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email / PEC</h4>
                    <p className="text-foreground/70 text-sm">onoranzefunebriama@libero.it<br/>amasrls2025@legalmail.it</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl border-border bg-card p-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-foreground/50">Nome Completo</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background border-border focus-visible:ring-1 focus-visible:ring-primary h-12 text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-foreground/50">Telefono</label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background border-border focus-visible:ring-1 focus-visible:ring-primary h-12 text-foreground"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-foreground/50">Email</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border focus-visible:ring-1 focus-visible:ring-primary h-12 text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-foreground/50">Messaggio</label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border focus-visible:ring-1 focus-visible:ring-primary text-foreground"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-background font-bold h-14 rounded-none transition-all"
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer rimosso perché ora nel layout.tsx */}
    </div>
  );
}
