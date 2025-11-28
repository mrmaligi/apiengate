import React from 'react';
import { MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 relative overflow-hidden bg-paper-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 order-2 lg:order-1 w-full">
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                 {/* Map Visualization */}
                 <div className="bg-stone-200 aspect-[4/3] relative">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201880.56947098732!2d144.96328!3d-37.814107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1647833215234!5m2!1sen!2sau" 
                        width="100%" 
                        height="100%" 
                        style={{border:0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} 
                        allowFullScreen={false} 
                        loading="lazy"
                        className="absolute inset-0"
                    ></iframe>
                    
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>

                    <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
                         <div className="bg-ink-900 p-2 rounded-full text-white">
                             <MapPin className="w-4 h-4" />
                         </div>
                         <div>
                             <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Headquarters</p>
                             <p className="text-sm font-serif font-bold text-ink-900">Melbourne, VIC</p>
                         </div>
                    </div>
                 </div>
             </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-watercolor-orange font-bold tracking-widest text-xs uppercase mb-2 block">Our Location</span>
            <h2 className="font-serif text-5xl text-ink-900 mb-8 leading-tight">
              Local Expertise.<br/>
              National Reach.
            </h2>
            
            <div className="space-y-6 text-ink-600 text-lg font-light leading-relaxed">
              <p>
                Based in the heart of Melbourne, APIEngage provides premier integration services to businesses across Australia. We understand local compliance, security standards, and the Australian digital ecosystem.
              </p>
              <p>
                We believe in clear communication and transparent processes. Whether you need an on-site consultation in the CBD or remote support in Perth, our team is ready to connect your systems.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};