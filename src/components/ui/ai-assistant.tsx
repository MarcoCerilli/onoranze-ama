"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { compassionAIAssistant } from "@/ai/flows/compassion-ai-assistant";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Buongiorno, sono il vostro assistente virtuale. Come posso aiutarvi in questo momento delicato?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await compassionAIAssistant(userMsg);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Siamo spiacenti, si è verificato un errore. Per assistenza immediata utilizzate il pulsante WhatsApp per le urgenze." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-[88px] right-6 sm:bottom-[88px] z-50">
      {isOpen ? (
        <Card className="w-80 sm:w-96 shadow-2xl border-slate-200 animate-in slide-in-from-bottom-5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-slate-900 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-amber-400" />
              <CardTitle className="text-sm font-headline">Assistente Eternità</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-slate-800 h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 bg-slate-50">
            <ScrollArea className="h-80 pr-4" ref={scrollRef}>
              <div className="flex flex-col gap-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                      m.role === "user" ? "bg-slate-900 text-white" : "bg-white text-slate-800 border"
                    }`}>
                      {m.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border rounded-2xl px-4 py-2 text-sm italic text-slate-400 animate-pulse">
                      Sto scrivendo...
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-3 bg-white rounded-b-lg border-t">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex w-full gap-2">
              <Input
                placeholder="Scrivete qui la vostra domanda..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-slate-900"
              />
              <Button type="submit" size="icon" disabled={isLoading} className="bg-slate-900 hover:bg-slate-800">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <div className="flex items-center gap-3 animate-fade-in-slow">
          <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-border/50 text-sm font-bold text-slate-800 animate-pulse relative">
            <span className="hidden sm:inline">Assistente Virtuale</span>
            <span className="sm:hidden">Supporto</span>
            {/* Triangolino che punta verso destra */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-white border-b-[6px] border-b-transparent"></div>
          </div>
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-slate-900 text-white shadow-2xl hover:bg-slate-800 transition-transform hover:scale-110 flex-shrink-0"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
}
