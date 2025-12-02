import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';

export type ViewState = 'home' | 'services' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  return (
    <div className="h-screen w-screen overflow-hidden relative flex flex-col bg-paper-50">
      {/* Global Grain Overlay */}
      <div className="bg-grain"></div>

      {/* Main Content Area - Fixed Height */}
      <main className="flex-grow relative h-full w-full overflow-hidden">
        
        {/* Render active view with simple fade/mounting */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${currentView === 'home' ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'}`}>
          <Hero />
        </div>
        
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${currentView === 'services' ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'}`}>
          <Services />
        </div>

        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${currentView === 'about' ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'}`}>
          <About />
        </div>

        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${currentView === 'contact' ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'}`}>
          <Contact />
        </div>

      </main>

      {/* Floating Bottom Navigation (Replacing Top Navbar) */}
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <Chatbot />
    </div>
  );
};

export default App;