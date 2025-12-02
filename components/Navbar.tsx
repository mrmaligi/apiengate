import React from 'react';
import { Home, Layers, Info, Mail } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'services', label: 'Services', icon: <Layers className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-xl border border-stone-200 shadow-2xl shadow-stone-200/50 rounded-full px-2 py-2 flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`
                relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${isActive 
                  ? 'bg-ink-900 text-white shadow-lg scale-105' 
                  : 'text-ink-600 hover:bg-stone-100 hover:text-ink-900'
                }
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};