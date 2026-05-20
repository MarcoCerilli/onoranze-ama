'use server';
/**
 * @fileOverview An AI assistant flow for providing information about funeral services.
 *
 * - compassionAIAssistant - A function that handles user queries for the AI assistant.
 * - CompassionAIAssistantInput - The input type for the compassionAIAssistant function.
 * - CompassionAIAssistantOutput - The return type for the compassionAIAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CompassionAIAssistantInputSchema = z.string().describe("The user's query to the AI assistant about funeral services.");
export type CompassionAIAssistantInput = z.infer<typeof CompassionAIAssistantInputSchema>;

const CompassionAIAssistantOutputSchema = z.string().describe("The AI assistant's sensitive and informative response.");
export type CompassionAIAssistantOutput = z.infer<typeof CompassionAIAssistantOutputSchema>;

export async function compassionAIAssistant(input: CompassionAIAssistantInput): Promise<CompassionAIAssistantOutput> {
  return compassionAIAssistantFlow(input);
}

const compassionAIAssistantPrompt = ai.definePrompt({
  name: 'compassionAIAssistantPrompt',
  input: { schema: CompassionAIAssistantInputSchema },
  output: { schema: CompassionAIAssistantOutputSchema },
  prompt: `Sei un assistente AI compassionevole, discreto e informativo per "Eternità Onoranze", un'agenzia funebre moderna e sobria. Il tuo obiettivo è fornire risposte immediate e sensibili alle domande degli utenti sui nostri servizi.

Le aree principali di domanda possono includere: costi dei servizi funebri, processo di cremazione, orari di apertura e disponibilità, disbrigo pratiche, vestizione, trasporto.

Se l'utente esprime urgenza o necessità di contatto immediato, ricordagli che siamo disponibili 24 ore su 24 tramite il pulsante WhatsApp "Urgenze H24" sul nostro sito web per assistenza diretta.

Rispondi sempre con tono empatico e professionale.

Domanda dell'utente: {{{this}}}`,
});

const compassionAIAssistantFlow = ai.defineFlow(
  {
    name: 'compassionAIAssistantFlow',
    inputSchema: CompassionAIAssistantInputSchema,
    outputSchema: CompassionAIAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await compassionAIAssistantPrompt(input);
    return output!;
  }
);
