import React, { useState } from 'react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import GameConcept from './components/GameConcept';
import GameInterfaceDetails from './components/GameInterfaceDetails';
import CharacterGenerator from './components/CharacterGenerator';
import ManuscriptPromo from './components/ManuscriptPromo';
import ManuscriptTutorial from './components/ManuscriptTutorial';
import CreateWorld from './components/CreateWorld';
import GameDashboard from './components/GameDashboard';

function App() {
  const [view, setView] = useState<'home' | 'tutorial' | 'create' | 'game' | 'game-details'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId?: string) => {
    setView('home');
    if (sectionId) {
      // Allow time for component to mount if we were on a different view
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  if (view === 'game') {
    return <GameDashboard onExit={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => handleNavClick()}
          >
            <span className="text-lg md:text-2xl font-bold brand-font text-white">MYSTERY MURDER <span className="text-purple-500">GAME ENGINE</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <button onClick={() => handleNavClick()} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => handleNavClick('mission')} className="hover:text-white transition-colors">Mission</button>
            <button onClick={() => handleNavClick('gameplay')} className="hover:text-white transition-colors">Gameplay</button>
            <button onClick={() => setView('create')} className="hover:text-white transition-colors">Create</button>
            <button onClick={() => setView('tutorial')} className="hover:text-white transition-colors">Guide</button>
            <button 
              onClick={() => window.location.href = 'https://github.com/chrishuangcf/mystery-murder/blob/main/documents/player/QUICK_START.md#quick-setup-with-docker'} 
              className="px-4 py-2 bg-slate-100 text-slate-900 rounded-md hover:bg-white transition-colors font-bold"
            >
              Enter Game
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5"
          >
            <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-white/10">
            <div className="px-4 py-3 space-y-2">
              <button 
                onClick={() => {
                  handleNavClick();
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  handleNavClick('mission');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
              >
                Mission
              </button>
              <button 
                onClick={() => {
                  handleNavClick('gameplay');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
              >
                Gameplay
              </button>
              <button 
                onClick={() => {
                  setView('create');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
              >
                Create
              </button>
              <button 
                onClick={() => {
                  setView('tutorial');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
              >
                Guide
              </button>
              <button 
                onClick={() => {
                  window.location.href = 'https://github.com/chrishuangcf/mystery-murder/blob/main/documents/player/QUICK_START.md#quick-setup-with-docker';
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-2 bg-slate-100 text-slate-900 rounded-md hover:bg-white transition-colors font-bold"
              >
                Enter Game
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        {view === 'home' && (
          <>
            <Hero 
              onNavigateMission={() => handleNavClick('mission')}
              onNavigateGameDetails={() => {
                setView('game-details');
                window.scrollTo(0, 0);
              }}
            />
            <Mission />
            <GameConcept onViewDetails={() => {
              setView('game-details');
              window.scrollTo(0, 0);
            }} />
            <Features />
            <ManuscriptPromo onOpenTutorial={() => {
              setView('tutorial');
              window.scrollTo(0, 0);
            }} />
            <CharacterGenerator />
          </>
        )}
        
        {view === 'game-details' && (
          <GameInterfaceDetails onBack={() => {
            setView('home');
            // Timeout to allow DOM to render before scrolling to section
            setTimeout(() => {
              const element = document.getElementById('gameplay');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }} />
        )}

        {view === 'tutorial' && (
          <ManuscriptTutorial onBack={() => {
            setView('home');
            window.scrollTo(0, 0);
          }} />
        )}

        {view === 'create' && (
          <CreateWorld onBack={() => {
            setView('home');
            window.scrollTo(0, 0);
          }} />
        )}
      </main>

      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="brand-font text-2xl text-white mb-4">MYSTERY MURDER <span className="text-purple-500">GAME ENGINE</span></h3>
          <p className="text-slate-500 max-w-lg mx-auto mb-8">
            An open-source initiative to revolutionize storytelling through AI.
            Create, Share, Play.
          </p>
          <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Mystery Murder Game Engine. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
