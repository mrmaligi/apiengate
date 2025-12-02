import React from 'react';
import { Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center p-6">
      
      {/* Re-added Branding since Top Navbar is gone */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-500">
         <Layers className="w-5 h-5 text-ink-900" />
         <span className="font-serif font-bold text-lg text-ink-900">
           API<span className="text-stone-500 font-normal">Engage</span>
         </span>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
         <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-watercolor-rose/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
         <div className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] bg-watercolor-blue/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <div className="inline-block mb-8 animate-float">
            <span className="px-4 py-1.5 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm text-ink-600 text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                Melbourne • Australia
            </span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-ink-900 mb-8 leading-[0.9] tracking-tighter">
          Simplified <br/>
          <span className="relative z-10 italic pr-2 inline-block">
            Connectivity
            <span className="absolute bottom-2 left-0 w-full h-[0.1em] bg-watercolor-orange/60 -z-10 rounded-full"></span>
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-ink-600 leading-relaxed font-light text-balance">
            We specialize in integrating complex APIs for businesses across Australia. From custom endpoints to full system architecture, we make your data flow.
        </p>

      </div>
    </section>
  );
};