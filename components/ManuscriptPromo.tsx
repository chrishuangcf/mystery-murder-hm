import React from 'react';

interface ManuscriptPromoProps {
  onOpenTutorial: () => void;
}

const ManuscriptPromo: React.FC<ManuscriptPromoProps> = ({ onOpenTutorial }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="bg-[#1e1e1e] rounded-2xl border border-slate-700 p-8 md:p-12 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
          
          {/* Decorative Code Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none overflow-hidden hidden md:block">
            <pre className="text-xs text-purple-300 font-mono p-4">
              {`## NPC: Detective
- **Role**: protagonist
- **Logic**: deductive
### Location
- **Type**: crime_scene`}
            </pre>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold tracking-wide mb-4">
              DOCUMENTATION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Master the Art of the <span className="text-purple-500">Manuscript</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our engine is powered by standard Markdown. You don't need to be a coder to build a world. 
              Learn how to define NPCs, map out crime scenes, and script complex logic chains using our simple syntax.
            </p>
            
            <button 
              onClick={onOpenTutorial}
              className="inline-flex items-center space-x-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors shadow-lg shadow-purple-900/20"
            >
              <span>Read the Writing Guide</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManuscriptPromo;