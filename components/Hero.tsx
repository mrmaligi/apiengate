import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      
      {/* Background Elements - Subtle Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-paper-50">
         <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-watercolor-rose/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
         <div className="absolute top-[15%] right-[10%] w-[35vw] h-[35vw] bg-watercolor-blue/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        <div className="inline-block mb-6 animate-float">
            <span className="px-4 py-1.5 rounded-full border border-stone-200 bg-white/80 backdrop-blur-md text-ink-600 text-xs font-bold tracking-widest uppercase shadow-sm">
                Melbourne • Australia
            </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink-900 mb-8 leading-[1.1] tracking-tight">
          Simplified <br/>
          <span className="relative z-10 italic pr-2 inline-block">
            Connectivity
            <span className="absolute bottom-1 left-0 w-full h-[0.15em] bg-watercolor-orange/60 -z-10 rounded-full"></span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-ink-600 leading-relaxed mb-10 font-light text-balance">
            We specialize in integrating complex APIs for businesses across Australia. From custom endpoints to full system architecture, we make your data flow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <a href="#contact" className="px-8 py-4 bg-ink-900 text-white rounded-full font-bold text-base hover:bg-ink-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center min-w-[180px]">
            Start Project
          </a>
          
          <a href="#services" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white border border-stone-200 rounded-full text-ink-900 font-medium text-base hover:border-ink-900 transition-all w-full sm:w-auto min-w-[180px]">
            Our Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};