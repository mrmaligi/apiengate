import React, { useState, useEffect } from 'react';
import { Menu, X, Layers } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better triggering

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 border-b ${
        scrolled || isOpen ? 'bg-white/80 backdrop-blur-md border-stone-200 py-3' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.location.href = '#'}>
            <div className="p-2 bg-ink-900 rounded-lg text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                <Layers className="w-5 h-5" />
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight text-ink-900">
              API<span className="text-stone-500 font-normal">Engage</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    isActive 
                      ? 'bg-ink-900 text-white shadow-md' 
                      : 'text-ink-600 hover:bg-stone-100 hover:text-ink-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="ml-4 pl-4 border-l border-stone-200">
                <a
                  href="#contact"
                  className="px-6 py-2.5 rounded-full bg-watercolor-orange text-ink-900 font-bold text-sm hover:bg-[#FDD09F] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Get Started
                </a>
            </div>
          </div>
          
          {/* Mobile Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-ink-600 hover:bg-stone-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out border-t border-stone-100 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="px-6 py-6 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                activeSection === link.href.substring(1) 
                  ? 'bg-ink-900 text-white' 
                  : 'text-ink-600 hover:bg-stone-50 hover:text-ink-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-stone-100">
            <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-4 rounded-xl bg-watercolor-orange text-ink-900 font-bold text-lg hover:bg-[#FDD09F] transition-colors"
            >
                Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};