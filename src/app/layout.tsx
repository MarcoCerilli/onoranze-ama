import type {Metadata} from 'next';
import './globals.css';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { AIAssistant } from '@/components/ui/ai-assistant';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
export const metadata: Metadata = {
  title: 'Eternità Onoranze | Onoranze Funebri Terracina e Latina',
  description: 'Eternità Onoranze Funebri offre servizi professionali e discreti a Terracina, Latina e provincia. Assistenza h24, cremazione, trasporti e disbrigo pratiche.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <AIAssistant />
        <Toaster />
      </body>
    </html>
  );
}
