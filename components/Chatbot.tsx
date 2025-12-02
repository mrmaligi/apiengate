import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles, Layers } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hello! I can answer questions about our API integration services or help you start a project. How can I assist you?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Initialize chat session if it doesn't exist
      if (!chatSessionRef.current) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-pro-preview',
          config: {
            systemInstruction: "You are a helpful, professional AI assistant for APIEngage, a Melbourne-based company specializing in API integration, management, and custom development for Australian businesses. Your tone is polite, concise, and knowledgeable about technical topics like REST, GraphQL, Salesforce, Xero, and system architecture. Services offered: System Integration, API Management, Custom Development, Modernization, Data Sync, Performance Optimization. Keep answers relatively short and business-focused.",
          }
        });
      }

      const result = await chatSessionRef.current.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to our systems right now. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-white text-ink-900 rotate-90' : 'bg-ink-900 text-white'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-[90vw] sm:w-[400px] bg-paper-50 rounded-2xl shadow-2xl border border-stone-200 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
        style={{ maxHeight: '600px', height: '80vh' }}
      >
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-stone-100 flex items-center gap-3">
          <div className="p-1.5 bg-ink-900 rounded-lg text-white">
             <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-ink-900 leading-none">APIEngage Assistant</h3>
            <span className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Online
            </span>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-paper-50 scroll-smooth">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-ink-900 text-white rounded-br-none shadow-md'
                    : 'bg-white text-ink-800 border border-stone-100 rounded-bl-none shadow-sm'
                }`}
              >
                 {msg.role === 'model' && index !== 0 && (
                    <div className="flex items-center gap-1.5 mb-1 text-xs text-watercolor-orange font-bold uppercase tracking-wider opacity-80">
                         <Sparkles className="w-3 h-3" /> AI Assistant
                    </div>
                 )}
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-stone-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-stone-400" />
                <span className="text-xs text-stone-400 font-medium">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-100">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              className="w-full pl-4 pr-12 py-3 bg-paper-50 border border-stone-200 rounded-xl focus:outline-none focus:border-ink-900 focus:bg-white transition-colors text-sm text-ink-900 placeholder:text-stone-400"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 bg-watercolor-orange rounded-lg text-ink-900 hover:bg-[#FDD09F] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-stone-400">Powered by Gemini AI • Information may vary</p>
          </div>
        </div>
      </div>
    </>
  );
};