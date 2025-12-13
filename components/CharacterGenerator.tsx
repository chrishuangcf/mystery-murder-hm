import React, { useState, useEffect } from 'react';

const MANUSCRIPT_CODE = `## NPC: Neon-V
### Character Profile
- **Role**: Info Broker / Noodle Cook
- **Location**: Sector 7 Slums
- **Personality**: Sarcastic, street-smart, greedy.
- **Voice**: Cyberpunk slang, rapid-fire speech.

### Knowledge Graph
- **Public**: Best ramen in the sector.
- **Secret**: Knows the Syndicate moves cargo at 0300.
- **Lie**: Claims to be "just a cook" if asked about crime.

### Logic Guardrails
1. **IF** player threatens **THEN** deflect.
2. **IF** player offers > 500 credits **THEN** reveal Secret.`;

const SIMULATION_STEPS = [
  {
    type: 'user',
    text: "I heard you know about the Syndicate movement."
  },
  {
    type: 'ai',
    text: "Syndicate? Look choom, I just flip noodles. You want tonkotsu or miso?",
    status: 'ACTIVE: Deflection Pattern (The Lie)'
  },
  {
    type: 'user',
    text: "[Transfers 600 Credits] I'm not hungry. I need info."
  },
  {
    type: 'system',
    text: "GUARDRAIL PASSED: Payment Threshold > 500. Unlocking Secret..."
  },
  {
    type: 'ai',
    text: "Pleasure doing business. Listen close... they're moving the 'package' through the MagLev tunnels at 0300 tonight.",
    status: 'ACTIVE: Secret Revealed'
  }
];

const CharacterGenerator: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (SIMULATION_STEPS.length + 1));
    }, 3500); // Cycle steps every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bring Your <span className="text-purple-500">NPCs to Life</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            No complex scripting. Just describe your character in plain Markdown, and the Engine handles the psychology, deception, and narrative flow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Panel: The Manuscript */}
          <div className="bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col h-full transform transition hover:scale-[1.01] duration-500">
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center space-x-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-slate-400 font-mono">npc_neon_v.md</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-auto flex-1">
              <pre>
                <code className="text-slate-300">
                  <span className="text-purple-400">## NPC: Neon-V</span>{'\n'}
                  <span className="text-blue-400">### Character Profile</span>{'\n'}
                  - <span className="text-yellow-300">**Role**</span>: Info Broker / Noodle Cook{'\n'}
                  - <span className="text-yellow-300">**Personality**</span>: Sarcastic, street-smart{'\n'}
                  {'\n'}
                  <span className="text-blue-400">### Knowledge Graph</span>{'\n'}
                  - <span className="text-yellow-300">**Secret**</span>: Knows Syndicate moves cargo{'\n'}
                  <div className={`transition-colors duration-500 ${activeStep === 1 ? 'bg-red-500/20 -mx-6 px-6 py-1' : ''}`}>
                  - <span className="text-red-400">**Lie**</span>: Claims to be "just a cook"
                  </div>
                  {'\n'}
                  <span className="text-blue-400">### Logic Guardrails</span>{'\n'}
                  <div className={`transition-colors duration-500 ${activeStep === 3 || activeStep === 4 ? 'bg-emerald-500/20 -mx-6 px-6 py-1' : ''}`}>
                  2. <span className="text-emerald-400">**IF**</span> player offers {'>'} 500 credits <span className="text-emerald-400">**THEN**</span> reveal Secret.
                  </div>
                </code>
              </pre>
            </div>
          </div>

          {/* Right Panel: The Simulation */}
          <div className="bg-slate-900 rounded-xl border border-slate-700 shadow-2xl flex flex-col h-[500px]">
            <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex justify-between items-center">
              <h3 className="font-bold text-white flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Game Engine Output
              </h3>
              <span className="text-xs px-2 py-1 bg-slate-700 rounded text-slate-300">Live Preview</span>
            </div>
            
            <div className="flex-1 p-6 space-y-4 overflow-hidden relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-slate-900/0 to-slate-900/0 pointer-events-none"></div>

              {SIMULATION_STEPS.map((step, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 transform ${
                    index < activeStep 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4 absolute'
                  }`}
                >
                  {step.type === 'system' ? (
                     <div className="flex justify-center my-4">
                       <span className="text-xs font-mono text-emerald-400 bg-emerald-900/20 border border-emerald-900/50 px-3 py-1 rounded-full">
                         ⚙️ {step.text}
                       </span>
                     </div>
                  ) : (
                    <div className={`flex flex-col ${step.type === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-lg ${
                        step.type === 'user' 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none'
                      }`}>
                        <p className="text-sm md:text-base">{step.text}</p>
                      </div>
                      {step.status && (
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 ml-2 font-mono">
                          {step.status}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {activeStep === SIMULATION_STEPS.length && (
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm z-10">
                    <button 
                      onClick={() => setActiveStep(0)}
                      className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors shadow-lg flex items-center"
                    >
                      <span className="mr-2">↻</span> Replay Simulation
                    </button>
                 </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CharacterGenerator;