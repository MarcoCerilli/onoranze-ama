"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity z-50">
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Logo Agenzia Funebre AMA" 
              fill
              className="object-contain drop-shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl md:text-2xl font-headline font-bold text-primary tracking-wide leading-none">
              AGENZIA FUNEBRE AMA
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-foreground/60 font-medium mt-1">
              Onoranze Funebri s.r.l.s.
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <Link href="/filosofia" className="hover:text-primary transition-colors">La Nostra Filosofia</Link>
          <Link href="/servizi" className="hover:text-primary transition-colors">Servizi</Link>
          <Link href="/necrologi" className="hover:text-primary transition-colors">Necrologi e Condoglianze</Link>
          <Link href="/#contatti" className="hover:text-primary transition-colors">Contatti</Link>
        </nav>
        
        <div className="hidden lg:flex items-center gap-4">
           <a href="tel:+393277068076" className="flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors">
             <Phone className="h-4 w-4 text-primary" />
             327 7068076
           </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-foreground z-50 hover:bg-muted rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl py-4 flex flex-col items-center gap-6 animate-fade-in-slow">
          <Link href="/filosofia" className="text-foreground/90 font-medium hover:text-primary text-lg" onClick={() => setIsMenuOpen(false)}>La Nostra Filosofia</Link>
          <Link href="/servizi" className="text-foreground/90 font-medium hover:text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Servizi</Link>
          <Link href="/necrologi" className="text-foreground/90 font-medium hover:text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Necrologi</Link>
          <Link href="/#contatti" className="text-foreground/90 font-medium hover:text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Contatti</Link>
          <a href="tel:+393277068076" className="flex items-center gap-2 text-primary font-bold text-xl mt-4 bg-primary/10 px-6 py-3 rounded-full">
             <Phone className="h-5 w-5" />
             327 7068076
          </a>
        </div>
      )}
    </header>
  );
}
