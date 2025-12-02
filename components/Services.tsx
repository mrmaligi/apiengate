import React from 'react';
import { Workflow, ShieldCheck, Code, Database, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "System Integration",
    desc: "Connect CRM, ERP, and e-commerce into one ecosystem.",
    examples: ["Salesforce ↔ SAP real-time sync", "Shopify to Xero automation"],
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "API Management",
    desc: "Secure gateways with 24/7 monitoring and analytics.",
    examples: ["Kong Gateway for Fintech", "OAuth2 & Rate Limiting setup"],
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Custom Dev",
    desc: "Bespoke endpoints tailored to your business logic.",
    examples: ["Logistics tracking microservice", "Internal HR booking system"],
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Modernization",
    desc: "Wrap legacy systems in modern REST or GraphQL APIs.",
    examples: ["SOAP to REST migration", "Mainframe data wrapper"],
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data Sync",
    desc: "Real-time bi-directional synchronization engines.",
    examples: ["Multi-store inventory sync", "Customer profile unification"],
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Optimization",
    desc: "Fine-tuning response times for millisecond latency.",
    examples: ["Latency reduced: 2s → 200ms", "Redis caching layer implementation"],
  }
];

export const Services: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-6 bg-white/50 relative">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        
        <div className="text-center mb-6 shrink-0">
          <h2 className="font-serif text-4xl md:text-5xl text-ink-900 mb-2">
            Intelligent Solutions
          </h2>
          <p className="text-ink-500 font-light">Everything you need to connect your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-4 md:p-5 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:border-stone-200 transition-all duration-300 flex flex-col items-start hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-paper-100 border border-stone-100 flex items-center justify-center text-ink-900 group-hover:bg-ink-900 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink-900">{service.title}</h3>
              </div>
              
              <p className="text-ink-600 text-sm leading-snug font-light mb-3">
                {service.desc}
              </p>

              <div className="mt-auto w-full pt-3 border-t border-stone-50">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">Recent Projects</p>
                  <ul className="space-y-1">
                      {service.examples.map((ex, i) => (
                          <li key={i} className="text-xs text-ink-500 flex items-start gap-1.5">
                              <span className="w-1 h-1 bg-watercolor-orange rounded-full mt-1.5 shrink-0"></span>
                              <span className="leading-tight">{ex}</span>
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};