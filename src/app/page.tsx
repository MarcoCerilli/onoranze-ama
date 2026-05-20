"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, Truck, FileText, Heart, Clock, Phone, MapPin, Mail } from "lucide-react";
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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-headline font-bold text-slate-900 leading-tight">ETERNITÀ</h1>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-700 font-semibold">Onoranze Funebri</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#servizi" className="hover:text-slate-900 transition-colors">Servizi</a>
            <a href="#chi-siamo" className="hover:text-slate-900 transition-colors">Chi Siamo</a>
            <a href="#contatti" className="hover:text-slate-900 transition-colors">Contatti</a>
          </nav>
          <div className="flex items-center gap-4">
             <a href="tel:+390773123456" className="hidden sm:flex items-center gap-2 text-slate-900 font-bold">
               <Phone className="h-4 w-4 text-amber-700" />
               0773 123456
             </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Eternità Onoranze Funebri"
          fill
          className="object-cover brightness-[0.4]"
          priority
          data-ai-hint="funeral solemn background"
        />
        <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto animate-fade-in-slow">
          <span className="text-amber-500 font-semibold tracking-widest uppercase text-xs mb-4 block">Assistenza e Rispetto</span>
          <h2 className="text-4xl md:text-6xl font-headline text-white mb-6 leading-tight">
            Accompagniamo i vostri cari con dignità e discrezione.
          </h2>
          <p className="text-lg text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Servizi funebri completi h24 a Terracina, Latina e provincia. Un supporto umano e professionale nel momento del bisogno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-none px-10 transition-all">
              I Nostri Servizi
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-none px-10">
              Contattaci Ora
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="flex flex-col items-center gap-2 opacity-80">
              <Clock className="h-6 w-6 text-amber-500" />
              <span className="text-xs uppercase tracking-wider">Disponibili 24/7</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80">
              <Shield className="h-6 w-6 text-amber-500" />
              <span className="text-xs uppercase tracking-wider">Massima Discrezione</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80">
              <Heart className="h-6 w-6 text-amber-500" />
              <span className="text-xs uppercase tracking-wider">Supporto Umano</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80">
              <MapPin className="h-6 w-6 text-amber-500" />
              <span className="text-xs uppercase tracking-wider">Terracina & Latina</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servizi" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline mb-4 text-slate-900">Servizi d'Eccellenza</h2>
            <div className="h-1 w-20 bg-amber-700 mx-auto mb-6"></div>
            <p className="text-slate-600 font-light leading-relaxed">
              Offriamo una gamma completa di servizi funebri per sollevarvi da ogni incombenza pratica e burocratica, permettendovi di vivere il lutto con la necessaria serenità.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="group border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || ""}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <service.icon className="text-white h-12 w-12" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-headline font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contatti" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-headline mb-4 text-slate-900">Contattaci per informazioni</h2>
                <div className="h-1 w-20 bg-amber-700 mb-6"></div>
                <p className="text-slate-600 font-light mb-8">
                  Siamo a vostra completa disposizione per preventivi gratuiti o per assistenza immediata. Potete chiamarci h24 o compilare il form.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-amber-700 group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Telefono H24</h4>
                    <p className="text-slate-600">0773 123456</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-amber-700 group-hover:text-white transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Sede Terracina</h4>
                    <p className="text-slate-600">Via Roma 123, 04019 Terracina (LT)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-amber-700 group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@eternitaonoranze.it</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl border-none p-2 bg-slate-50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-slate-400">Nome Completo</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white border-none focus-visible:ring-1 focus-visible:ring-amber-700 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-slate-400">Telefono</label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white border-none focus-visible:ring-1 focus-visible:ring-amber-700 h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-slate-400">Email</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border-none focus-visible:ring-1 focus-visible:ring-amber-700 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-slate-400">Messaggio</label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white border-none focus-visible:ring-1 focus-visible:ring-amber-700"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-14 rounded-none transition-all"
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white leading-tight">ETERNITÀ</h2>
            <p className="text-sm font-light">Onoranze funebri d'eccellenza, operiamo con etica e dedizione in tutta la provincia di Latina.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Note Legali</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold">Certificazioni</h4>
            <p className="text-xs font-light">Eternità Onoranze è iscritta ai registri regionali per i servizi funebri professionali.</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-900 text-center text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Eternità Onoranze Funebri. Tutti i diritti riservati. P.IVA 01234567890
        </div>
      </footer>
    </div>
  );
}
