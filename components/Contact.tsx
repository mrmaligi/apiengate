import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <div className="flex flex-col justify-center">
                <h2 className="font-serif text-5xl text-ink-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-ink-600 mb-10 font-light">
                  Ready to optimize your business workflow? Fill out the form or reach out directly. We're here to help.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-paper-50 rounded-full text-ink-900">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-stone-500 font-bold uppercase mb-1">Email Us</p>
                            <a href="mailto:hello@apiengage.com" className="text-lg text-ink-900 hover:text-watercolor-orange transition-colors">hello@apiengage.com</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-paper-50 rounded-full text-ink-900">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-stone-500 font-bold uppercase mb-1">Visit Us</p>
                            <p className="text-lg text-ink-900">Melbourne, Victoria, Australia</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-paper-50 p-8 md:p-10 rounded-3xl border border-stone-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-ink-900 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-ink-900 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-ink-900 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-ink-900 focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-ink-900 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-ink-900 focus:outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSent 
                      ? 'bg-green-600 text-white' 
                      : 'bg-ink-900 text-white hover:bg-ink-800 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : isSent ? 'Message Sent' : 'Send Message'}
                  {!isSent && !isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>

        </div>
      </div>
    </section>
  );
};