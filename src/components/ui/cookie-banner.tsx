"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-slate-900 border-t border-slate-800 p-4 md:p-6 text-white shadow-2xl animate-in slide-in-from-bottom-5">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base text-slate-300 text-center md:text-left">
          <p>
            Utilizziamo i cookie per migliorare la tua esperienza di navigazione, offrire funzionalità social e analizzare il nostro traffico. 
            Continuando a navigare, accetti il nostro utilizzo dei cookie.{" "}
            <Link href="/privacy" className="underline hover:text-primary transition-colors">
              Maggiori informazioni
            </Link>.
          </p>
        </div>
        <div className="flex gap-4 shrink-0 w-full md:w-auto mt-2 md:mt-0">
          <Button 
            onClick={handleAccept} 
            className="w-full md:w-auto bg-primary text-black hover:bg-primary/90 font-bold px-8"
          >
            Accetto
          </Button>
        </div>
      </div>
    </div>
  );
}
