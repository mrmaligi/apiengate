import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-6 bg-white relative">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
        <div className="flex flex-col justify-center space-y-8">
            <div>
                <h2 className="font-serif text-5xl md:text-6xl text-ink-900 mb-4">Get In Touch</h2>
                <p className="text-lg text-ink-600 font-light">
                    Ready to optimize your business workflow? We're here to help.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-paper-50 rounded-full flex items-center justify-center text-ink-900 group-hover:bg-watercolor-orange transition-colors">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-0.5">Email Us</p>
                        <p className="text-lg text-ink-900">hello@apiengage.com</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-paper-50 rounded-full flex items-center justify-center text-ink-900 group-hover:bg-watercolor-orange transition-colors">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-0.5">Based In</p>
                        <p className="text-lg text-ink-900">Melbourne, Australia</p>
                    </div>
                </div>
            </div>
            
             <div className="pt-8 border-t border-stone-100">
                <p className="text-xs text-stone-400">&copy; {new Date().getFullYear()} APIEngage Pty Ltd.</p>
             </div>
        </div>

        <div className="bg-paper-50 p-8 rounded-3xl border border-stone-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-ink-900 mb-1.5 uppercase tracking-wide">Name</label>
                    <input type="text" className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-lg focus:border-ink-900 focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-ink-900 mb-1.5 uppercase tracking-wide">Email</label>
                    <input type="email" className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-lg focus:border-ink-900 focus:outline-none transition-colors" placeholder="john@company.com" />
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold text-ink-900 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea rows={4} className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-lg focus:border-ink-900 focus:outline-none transition-colors resize-none" placeholder="How can we help?"></textarea>
            </div>

            <button
                type="submit"
                className={`w-full py-3.5 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSent ? 'bg-green-600 text-white' : 'bg-ink-900 text-white hover:bg-ink-800'
                }`}
            >
                {isSent ? 'Message Sent' : 'Send Message'}
                {!isSent && <Send className="w-4 h-4" />}
            </button>
            </form>
        </div>

      </div>
    </section>
  );
};