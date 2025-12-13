import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Core <span className="text-purple-500">Mechanics</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A system built for storytellers. No complex coding required—just pure narrative design driven by a robust simulation engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors group">
            <div className="w-14 h-14 bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Manuscript Driven</h3>
            <p className="text-slate-400 leading-relaxed">
              Write your entire game in standard <strong>Markdown</strong>. The engine parses headers, lists, and dialogue blocks to auto-generate locations, items, and conversation trees.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-500">
              <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> Instant Import/Export</li>
              <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> Human-readable format</li>
              <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> No proprietary tools needed</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors group">
            <div className="w-14 h-14 bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">⏱️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Temporal Dynamics</h3>
            <p className="text-slate-400 leading-relaxed">
              The world doesn't wait for the player. Time is a resource. Events trigger at specific times, creating urgency and a living world feeling.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-500">
              <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> Real-time or Turn-based clock</li>
              <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> Scheduled NPC routines</li>
              <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> Timed mystery clues</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors group">
            <div className="w-14 h-14 bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🎭</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Living Personas</h3>
            <p className="text-slate-400 leading-relaxed">
              Define an NPC's personality, secret, and goal. The AI fills in the gaps, improvising dialogue that feels natural rather than scripted loops.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-500">
              <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> Context-aware responses</li>
              <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> Memory of past interactions</li>
              <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> Dynamic emotional states</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;