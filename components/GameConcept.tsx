import React from 'react';

interface GameConceptProps {
  onViewDetails: () => void;
}

const GameConcept: React.FC<GameConceptProps> = ({ onViewDetails }) => {
  return (
    <section id="gameplay" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Game Interface</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
            A breakdown of the detective's toolkit. From real-time narratives to god-mode controls, here is how you interact with the simulation.
          </p>
          <button 
            onClick={onViewDetails}
            className="inline-flex items-center space-x-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-600 transition-all shadow-lg hover:shadow-purple-900/20 group"
          >
            <span className="text-sm font-bold">Deep Dive into Interface Mechanics</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Feature 1: Main Game Loop (Large) */}
          <div className="group relative col-span-12 md:col-span-8 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80" 
              alt="Cyberpunk Interface" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 max-w-lg">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-3 py-1 mb-4 backdrop-blur-md">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide">Live Simulation</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Real-Time Narrative</h3>
              <p className="text-slate-300">
                Experience a living world. Monitor server health and token usage while interacting with NPCs who follow their own schedules. Events trigger in real-time, whether you witness them or not.
              </p>
            </div>
          </div>

          {/* Feature 2: The Map (Tall/Narrow) */}
          <div className="group relative col-span-12 md:col-span-4 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
              alt="Blueprint Map" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
               <div className="text-4xl mb-4">🗺️</div>
               <h3 className="text-2xl font-bold text-white mb-2">Spatial Awareness</h3>
               <p className="text-slate-400 text-sm">
                 A live 2D map visualizes the estate. Track your location and visualize the layout as you move between rooms, hunting for clues or chasing suspects.
               </p>
            </div>
          </div>

          {/* Feature 3: Admin & Relationships (Medium) */}
          <div className="group relative col-span-12 md:col-span-4 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 bg-slate-900/80 z-10 group-hover:bg-slate-900/70 transition-colors"></div>
            {/* Network Graph BG */}
            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-40">
               <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="4" fill="#6366f1" />
                  <circle cx="20" cy="30" r="3" fill="#ec4899" />
                  <circle cx="80" cy="70" r="3" fill="#10b981" />
                  <line x1="50" y1="50" x2="20" y2="30" stroke="#475569" strokeWidth="0.5" />
                  <line x1="50" y1="50" x2="80" y2="70" stroke="#475569" strokeWidth="0.5" />
               </svg>
            </div>

            <div className="absolute bottom-0 left-0 p-8 z-20">
               <h3 className="text-2xl font-bold text-white mb-2">Admin & Relationships</h3>
               <p className="text-slate-400 text-sm">
                 Peek behind the curtain. Visualize the knowledge graph that connects every NPC, item, and event. See who knows what, and how they relate to the victim.
               </p>
            </div>
          </div>

          {/* Feature 4: Controls (Large) */}
          <div className="group relative col-span-12 md:col-span-8 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
             <div className="grid h-full grid-cols-2">
                <div className="relative h-full">
                   <img 
                     src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" 
                     alt="Control Panel" 
                     className="absolute inset-0 w-full h-full object-cover opacity-60" 
                   />
                   <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                </div>
                <div className="relative p-8 flex flex-col justify-center z-10 bg-slate-900">
                   <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1 mb-4 w-fit">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">Engine Settings</span>
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-4">Total Control</h3>
                   <p className="text-slate-300 mb-6">
                     Swap between OpenAI and local LLMs instantly. Fast-forward time to trigger scheduled events or reset the clock to try a different approach. You are in command.
                   </p>
                   <div className="flex space-x-3">
                      <span className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-400">GPT-4</span>
                      <span className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-400">Llama 3</span>
                      <span className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-400">Gemini</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GameConcept;
