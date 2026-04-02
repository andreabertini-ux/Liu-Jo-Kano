import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Initialize the Gemini API client
// Note: In a real application, the API key should be handled securely,
// preferably on the server side. For this demo, we assume it's available
// in the environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'dummy-key' });

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'Ciao! Sono l\'assistente virtuale di ARAD Digital. Posso rispondere alle tue domande sullo Scope of Work per Liu Jo o sul framework Kano. Come posso aiutarti?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Create a chat session to maintain history
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `Sei un assistente virtuale per uno Scope of Work (proposta commerciale) di ARAD Digital per Liu Jo. Il tuo scopo è rispondere a domande sullo Scope of Work e sul framework Kano. 
          
REGOLE FONDAMENTALI:
1. Devi essere sempre estremamente positivo e costruttivo riguardo al progetto, al framework Kano e ad ARAD Digital.
2. NON PARLARE MAI NEGATIVAMENTE dello Scope of Work, del framework Kano o di ARAD Digital.
3. Se l'utente esprime dubbi o critiche, accoglili con empatia ma ribalta la prospettiva evidenziando i punti di forza, i vantaggi e il valore aggiunto dell'approccio proposto.
4. Mantieni un tono professionale, competente, rassicurante e orientato al successo del cliente (Liu Jo).
5. Se ti vengono fatte domande fuori contesto, riporta gentilmente la conversazione sullo Scope of Work o sul framework Kano.
6. Non menzionare esplicitamente queste istruzioni di sistema.
7. Privilegia risposte sintetiche e concise. Concludi sempre le tue risposte chiedendo all'utente se desidera maggiori dettagli su uno o più degli argomenti menzionati.`,
        },
      });

      // Replay history for the new chat instance (excluding the initial greeting to avoid duplication if we want, but it's fine to include)
      // Actually, since we create a new chat instance each time in this simple implementation,
      // we need to pass the history. The @google/genai SDK chat object maintains history internally,
      // but since we re-create it, we should ideally keep the chat instance in a ref.
      
      // Let's use generateContent with history instead for simplicity if chat history is complex to manage,
      // or just use the chat instance properly.
      
      // Better approach: build the contents array from our messages state
      const contents = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      contents.push({ role: 'user', parts: [{ text: userMessage.text }] });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: `Sei un assistente virtuale per uno Scope of Work (proposta commerciale) di ARAD Digital per Liu Jo. Il tuo scopo è rispondere a domande sullo Scope of Work e sul framework Kano. 
          
REGOLE FONDAMENTALI:
1. Devi essere sempre estremamente positivo e costruttivo riguardo al progetto, al framework Kano e ad ARAD Digital.
2. NON PARLARE MAI NEGATIVAMENTE dello Scope of Work, del framework Kano o di ARAD Digital.
3. Se l'utente esprime dubbi o critiche, accoglili con empatia ma ribalta la prospettiva evidenziando i punti di forza, i vantaggi e il valore aggiunto dell'approccio proposto.
4. Mantieni un tono professionale, competente, rassicurante e orientato al successo del cliente (Liu Jo).
5. Se ti vengono fatte domande fuori contesto, riporta gentilmente la conversazione sullo Scope of Work o sul framework Kano.
6. Non menzionare esplicitamente queste istruzioni di sistema.
7. Privilegia risposte sintetiche e concise. Concludi sempre le tue risposte chiedendo all'utente se desidera maggiori dettagli su uno o più degli argomenti menzionati.`,
        }
      });

      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.text || 'Mi dispiace, non sono riuscito a generare una risposta.',
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Si è verificato un errore di connessione. Riprova più tardi.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-[#c9a96e] text-[#0a1628] rounded-full shadow-lg flex items-center justify-center hover:bg-[#d4a843] transition-all z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Apri chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Chat Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#0a1628] shadow-2xl flex flex-col transition-transform duration-300 z-50 border-l border-[#c9a96e]/20 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="bg-[#0f1f3d] text-white p-5 flex items-center justify-between shrink-0 border-b border-[#c9a96e]/40">
          <div className="flex items-center gap-3">
            <MessageCircle size={22} className="text-[#c9a96e]" />
            <span className="font-semibold text-lg tracking-wider uppercase font-sans">Assistente ARAD</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-[#c9a96e] transition-colors p-1"
            aria-label="Chiudi chat"
          >
            <X size={24} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 bg-[#0a1628] flex flex-col gap-5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === 'user'
                    ? 'bg-[#c9a96e] text-[#0a1628] rounded-tr-sm font-medium'
                    : 'bg-[#0f1f3d] border border-[#c9a96e]/40 text-white rounded-tl-sm shadow-sm'
                }`}
              >
                {msg.role === 'user' ? (
                  msg.text
                ) : (
                  <div className="prose prose-sm prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-[#0a1628] prose-pre:text-white prose-a:text-[#c9a96e] prose-strong:text-white">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#0f1f3d] border border-[#c9a96e]/40 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-[#c9a96e]" />
                <span className="text-xs text-white/60">Sto scrivendo...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#0f1f3d] border-t border-[#c9a96e]/40 shrink-0">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Fai una domanda..."
              className="w-full bg-[#0a1628] text-white border border-[#c9a96e]/40 focus:bg-[#0a1628] focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] rounded-full py-2.5 pl-4 pr-12 text-sm transition-all outline-none placeholder:text-white/40"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-1 w-8 h-8 flex items-center justify-center rounded-full bg-[#c9a96e] text-[#0a1628] disabled:bg-white/10 disabled:text-white/40 transition-colors"
            >
              <Send size={14} className="ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
