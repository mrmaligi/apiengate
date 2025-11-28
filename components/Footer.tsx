import React from 'react';
import { Layers, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <Layers className="w-5 h-5 text-ink-900" />
            <span className="font-serif font-bold text-xl text-ink-900">
              API<span className="text-stone-500 font-normal">Engage</span>
            </span>
        </div>

        <div className="flex gap-6 mb-8">
            <a href="#" className="p-2 rounded-full bg-paper-100 text-ink-600 hover:bg-stone-200 hover:text-ink-900 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="p-2 rounded-full bg-paper-100 text-ink-600 hover:bg-stone-200 hover:text-ink-900 transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>

        <div className="text-stone-400 text-xs text-center font-medium">
          <p>&copy; {new Date().getFullYear()} APIEngage Pty Ltd. Proudly Australian.</p>
        </div>
      </div>
    </footer>
  );
};