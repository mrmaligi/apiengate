import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-8 bg-paper-50 relative">
        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-watercolor-orange/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="text-watercolor-orange font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Who We Are</span>
            <h2 className="font-serif text-5xl md:text-7xl text-ink-900 mb-10 leading-none">
            Local Expertise.<br/>
            National Reach.
            </h2>
            
            <div className="space-y-6 text-ink-600 text-xl md:text-2xl font-light leading-relaxed">
                <p>
                    Based in the heart of <span className="text-ink-900 font-normal">Melbourne</span>, APIEngage provides premier integration services to businesses across Australia.
                </p>
                <p>
                    We bridge the gap between complex technical requirements and business goals, ensuring your digital ecosystem is robust, secure, and scalable.
                </p>
            </div>
            
            <div className="mt-12 flex justify-center gap-12 text-center">
                <div>
                    <span className="block font-serif text-4xl text-ink-900">100+</span>
                    <span className="text-xs text-stone-500 uppercase tracking-wider mt-1 block">Integrations</span>
                </div>
                <div>
                    <span className="block font-serif text-4xl text-ink-900">24/7</span>
                    <span className="text-xs text-stone-500 uppercase tracking-wider mt-1 block">Monitoring</span>
                </div>
                <div>
                    <span className="block font-serif text-4xl text-ink-900">AU</span>
                    <span className="text-xs text-stone-500 uppercase tracking-wider mt-1 block">Based Team</span>
                </div>
            </div>
        </div>
    </section>
  );
};