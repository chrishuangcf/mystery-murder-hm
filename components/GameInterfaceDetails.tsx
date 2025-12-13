import React from 'react';

interface GameInterfaceDetailsProps {
  onBack: () => void;
}

const GameInterfaceDetails: React.FC<GameInterfaceDetailsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-slate-400 hover:text-white transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </button>

        <header className="mb-16 border-b border-slate-800 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Interface <span className="text-purple-500">Mechanics</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            The Mystery Engine is not just a chat window. It is a complex simulation of time, space, and psychology. 
            Here is a deep dive into how the dashboard empowers the player to dissect the world.
          </p>
        </header>

        <div className="space-y-24">
          
          {/* Section 1: The Live Dashboard */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4">01. Main View</div>
              <h2 className="text-3xl font-bold text-white mb-4">The Living Dashboard</h2>
              <p className="text-slate-400 mb-6">
                The main game page serves as your command center. Unlike traditional text adventures, the world is alive.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">▹</span>
                  <span className="text-slate-300 text-sm"><strong>Real-time vs Game Time:</strong> The engine tracks an internal clock. Events trigger at specific times (e.g., "Police Arrive at 10:30 PM") regardless of player actions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">▹</span>
                  <span className="text-slate-300 text-sm"><strong>Metrics:</strong> Monitor LLM token usage and backend server health in real-time via the top bar.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">▹</span>
                  <span className="text-slate-300 text-sm"><strong>Dynamic Narratives:</strong> Location descriptions change based on time of day, lighting, and recent events.</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-8 bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-2xl">
               <div className="border-l-2 border-purple-500 pl-6 py-2 mb-6">
                  <h3 className="text-white font-bold text-lg">Context-Aware Actions</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Actions are not hardcoded list. They are generated dynamically based on:
                  </p>
                  <div className="flex gap-2 mt-3">
                     <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">Time of Day</span>
                     <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">Current Location</span>
                     <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">NPC Proximity</span>
                     <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">Items Held</span>
                  </div>
               </div>
               <div className="space-y-3">
                  <div className="bg-slate-800 p-3 rounded flex justify-between items-center">
                     <span className="text-slate-300 text-sm">Examine the painting</span>
                     <span className="text-xs text-slate-500 font-mono">REQ: Magnifying Glass</span>
                  </div>
                  <div className="bg-slate-800 p-3 rounded flex justify-between items-center opacity-50">
                     <span className="text-slate-300 text-sm">Unlock Secret Door</span>
                     <span className="text-xs text-red-400 font-mono">MISSING: Brass Key</span>
                  </div>
               </div>
            </div>
          </section>

          {/* Section 2: Spatial & Admin */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8 order-2 md:order-1">
               <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                     <h3 className="text-white font-bold mb-4 flex items-center">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg mr-3">🗺️</span>
                        Spatial Map
                     </h3>
                     <p className="text-slate-400 text-sm mb-4">
                        A visual 2D representation of the world. While currently a visual aid, the roadmap includes travel-time mechanics where moving between distant nodes advances the game clock.
                     </p>
                     <div className="h-24 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-slate-800 rounded opacity-50"></div>
                  </div>
                  
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                     <h3 className="text-white font-bold mb-4 flex items-center">
                        <span className="bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mr-3">🕸️</span>
                        Relationship Graph
                     </h3>
                     <p className="text-slate-400 text-sm mb-4">
                        A force-directed graph visualization in the Admin panel. It connects every entity in the game realm:
                     </p>
                     <div className="flex flex-wrap gap-2 text-xs text-indigo-300">
                        <span>NPCs</span> • <span>Locations</span> • <span>Evidence</span> • <span>Narratives</span> • <span>Events</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="md:col-span-4 order-1 md:order-2">
              <div className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">02. World Data</div>
              <h2 className="text-3xl font-bold text-white mb-4">The Admin Mindmap</h2>
              <p className="text-slate-400 mb-6">
                The Administrative Page allows the player (or Game Master) to configure the simulation in depth.
              </p>
              <p className="text-slate-400 text-sm mb-4">
                 Everything is inter-related. If an NPC knows about an evidence item, a line is drawn in the database. The <strong>Graph Visualization</strong> exposes these hidden connections, allowing you to debug the mystery logic visually.
              </p>
              <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                 <h4 className="text-white font-bold text-sm mb-2">Import/Export</h4>
                 <p className="text-slate-500 text-xs">
                    The entire game state is portable. Import a Markdown manuscript to start a new game, or export your current state to share a save file with the community.
                 </p>
              </div>
            </div>
          </section>

          {/* Section 3: AI & Controls */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4">
              <div className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">03. Simulation</div>
              <h2 className="text-3xl font-bold text-white mb-4">God-Mode Controls</h2>
              <p className="text-slate-400 mb-6">
                You are not just playing a game; you are running an engine. Take control of the AI and the timeline.
              </p>
              <ul className="space-y-4">
                <li className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                   <strong className="text-white block mb-1">Compute Switching</strong>
                   <p className="text-slate-400 text-sm">Switch between open-source LLMs hosted on Docker or OpenAI API compatible models. Use a beefy local GPU for privacy, or the cloud for speed.</p>
                </li>
                <li className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                   <strong className="text-white block mb-1">Time Manipulation</strong>
                   <p className="text-slate-400 text-sm">Reset the clock to retry a failed interrogation, or fast-forward to trigger specific scheduled events.</p>
                </li>
              </ul>
            </div>
            <div className="md:col-span-8">
               <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10 grid gap-8">
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Dynamic NPC Personas</h3>
                        <p className="text-slate-300 leading-relaxed mb-6">
                           NPCs are not just text bots. They are configured with:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                              <span className="block text-emerald-400 font-bold mb-1">Honesty Meter</span>
                              <span className="text-xs text-slate-400">Can be truthful or deceptive based on relationship score.</span>
                           </div>
                           <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                              <span className="block text-orange-400 font-bold mb-1">Temperament</span>
                              <span className="text-xs text-slate-400">Can get irritated, shut down, or become cooperative.</span>
                           </div>
                           <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                              <span className="block text-blue-400 font-bold mb-1">Knowledge Guardrails</span>
                              <span className="text-xs text-slate-400">Strictly limited to what they "know" in the game world.</span>
                           </div>
                        </div>
                     </div>

                     <div className="border-t border-slate-800 pt-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Perspective Shifting</h3>
                        <p className="text-slate-300">
                           Player started out as a detective, an outsider. However, the engine allows you to <span className="text-white font-bold">Play as an NPC</span>. 
                        </p>
                        <p className="text-slate-400 text-sm mt-2 italic">
                           "It would be haywire if the player wanted to be the storyline character that had been murdered though. Death can't talk right? RIGHT?"
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </section>

        </div>

        <div className="mt-20 flex justify-center">
            <button onClick={onBack} className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg">
               Return to Landing Page
            </button>
        </div>

      </div>
    </div>
  );
};

export default GameInterfaceDetails;
