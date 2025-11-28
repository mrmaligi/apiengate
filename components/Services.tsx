import React from 'react';
import { Workflow, ShieldCheck, Code, Database, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "System Integration",
    desc: "Seamlessly connect Xero, Salesforce, Shopify, and more into a unified ecosystem."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "API Management",
    desc: "Enterprise-grade gateways ensuring your data remains secure and monitored 24/7."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Custom Development",
    desc: "Bespoke API solutions tailored specifically to your unique business logic."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Modernization",
    desc: "Wrap legacy systems in modern REST or GraphQL APIs to extend their lifespan."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Sync",
    desc: "Real-time bi-directional synchronization ensuring data consistency everywhere."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimization",
    desc: "Fine-tuning response times and payloads for lightning-fast applications."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="min-h-screen flex items-center py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        
        <div className="text-center mb-20">
          <span className="text-ink-400 font-bold tracking-widest text-xs uppercase mb-3 block">What We Do</span>
          <h2 className="font-serif text-4xl md:text-5xl text-ink-900 mb-6">
            Intelligent Solutions
          </h2>
          <div className="w-20 h-1 bg-watercolor-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-paper-50 p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-stone-200 hover:shadow-lg hover:bg-white group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-ink-900 mb-6 shadow-sm group-hover:bg-ink-900 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-ink-900 mb-3">{service.title}</h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};