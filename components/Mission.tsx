import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            When I look at the AI revolution, I see more than just fast math—I see a once-in-a-lifetime chance 
            to build something incredible together. Prompt engineers are already giving AI a "soul". 
            We are turning that power into a <span className="text-white font-bold">living, breathing game world</span>.
          </p>
          
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">A Shared Playground</h3>
            <p className="text-slate-400 mb-6">
              AI tokens cost real money. That is exactly why I'm committed to keeping this game system 
              <span className="text-emerald-400 font-semibold"> free of charge </span> for the community.
            </p>
            <p className="text-slate-400">
              We envision a community-driven platform where AI designs the systems, plots intricate murder mysteries, 
              and even turns your adventure into a full novel. This is not a marketplace—it is a place for pure creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <div className="text-3xl mb-3">🧩</div>
              <h4 className="text-lg font-bold text-white mb-2">Portable Mysteries</h4>
              <p className="text-slate-400 text-sm">Define complete scenarios in simple Markdown files. Share, import, and play instantly.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <div className="text-3xl mb-3">🕰️</div>
              <h4 className="text-lg font-bold text-white mb-2">Time-Based World</h4>
              <p className="text-slate-400 text-sm">The world evolves. NPCs have schedules, secrets, and lives that continue whether you are there or not.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="text-lg font-bold text-white mb-2">AI Personas</h4>
              <p className="text-slate-400 text-sm">NPCs aren't static text boxes. They have dynamic personalities filled in by AI for lively interactions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
