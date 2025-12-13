import React, { useState } from 'react';

const PROMPTS = {
  manuscript: `Role: Expert Game Designer & Mystery Writer.

Task: Create a complete Mystery Murder Game Manuscript in Markdown format.

Context: 
The year is 2077, the Cyberpunk Age. The Mayor of Neo-Veridia has been murdered in his fortified penthouse. The player is a burnt-out detective with cybernetic enhancements trying to figure out what is going on.

Requirements:
1. Use the structure defined in the provided 'MANUSCRIPT_WRITING_GUIDE.md'.
2. Define at least 4 NPCs (Victim, Killer, Suspects).
3. Create complex relationships and hidden secrets.
4. Define evidence chains that logically prove the killer's guilt.
5. Include red herrings to mislead the player.

Reference Material:
[PASTE CONTENT OF MANUSCRIPT_WRITING_GUIDE.MD HERE]`,

  walkthrough: `Role: QA Tester & Logic Analyst.

Task: Create a step-by-step Solution Walkthrough for the provided game manuscript.

Input:
[PASTE YOUR GENERATED MANUSCRIPT HERE]

Requirements:
1. Analyze the core mystery logic (Motive, Means, Opportunity).
2. Create a chronological timeline of the night of the murder based on NPC schedules.
3. Write a Chapter-by-Chapter walkthrough of what the player must do to solve the case.
4. Highlight which evidence unlocks which new locations or dialogue.
5. Explain clearly why the Killer is the only logical suspect and disprove the Red Herrings.`,

  novel: `Role: Best-selling Mystery Novelist (Style: Sherlock Holmes / Noir).

Task: Write a short novel adaptation of the mystery game.

Inputs:
1. Manuscript (World Context): [PASTE MANUSCRIPT HERE]
2. Walkthrough (Plot): [PASTE WALKTHROUGH HERE]

Requirements:
1. Perspective: First-person detective (Noir style).
2. Tone: Atmospheric, gritty, and intellectual.
3. Structure: 
   - Chapter 1: The Discovery (Arrival and Crime Scene).
   - Middle Chapters: The Investigation (Interrogations and Clues).
   - Final Chapter: The Parlor Scene (Accusation and Confession).
4. Focus on sensory details and the internal monologue of the detective regarding the clues.`
};

const PromptSection: React.FC<{
  title: string;
  image: string;
  description: string;
  promptText: string;
  stepNumber: string;
}> = ({ title, image, description, promptText, stepNumber }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1e1e1e] rounded-2xl border border-slate-700 overflow-hidden mb-16 shadow-2xl">
      <div className="relative h-64 md:h-80 overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 md:left-10">
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2 block">Step {stepNumber}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white shadow-black drop-shadow-lg">{title}</h2>
        </div>
      </div>
      
      <div className="p-6 md:p-10 grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold text-slate-200 mb-4">Objective</h3>
          <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
          
          <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
            <h4 className="text-blue-300 font-bold text-sm mb-2 flex items-center">
              <span className="mr-2">💡</span> Pro Tip
            </h4>
            <p className="text-blue-200/70 text-sm">
              For best results, use a model with a large context window (like Gemini 1.5 Pro) so you can paste the entire Writing Guide without truncation.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-bold text-slate-400">AI Prompt Template</label>
            <button 
              onClick={handleCopy}
              className={`text-xs font-bold px-3 py-1 rounded transition-colors ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
          <div className="bg-slate-950 rounded-lg border border-slate-800 p-4 h-64 overflow-y-auto font-mono text-xs text-slate-300 shadow-inner custom-scrollbar">
            <pre className="whitespace-pre-wrap">{promptText}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CreateWorldProps {
  onBack: () => void;
}

const CreateWorld: React.FC<CreateWorldProps> = ({ onBack }) => {
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
          Back to Dashboard
        </button>

        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">World</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Building a complex mystery is difficult. Using AI to do it is easy.
            Follow this three-step pipeline to generate a playable game and a publishable novel from a single idea.
          </p>
        </header>

        {/* Step 1: Manuscript */}
        <PromptSection 
          stepNumber="01"
          title="The Manuscript"
          image="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80"
          description="The foundation of your world. You will provide the AI with our Writing Guide and a specific setting (e.g., Cyberpunk 2077). The AI will return a structured Markdown file containing NPCs, locations, evidence chains, and plot triggers ready for the game engine."
          promptText={PROMPTS.manuscript}
        />

        {/* Step 2: Walkthrough */}
        <PromptSection 
          stepNumber="02"
          title="The Logic Walkthrough"
          image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80"
          description="A game is only as good as its logic. In this step, you feed the generated manuscript back into the AI to verify the mystery. It will produce a step-by-step solution, ensuring clues link together logically and identifying any plot holes before players find them."
          promptText={PROMPTS.walkthrough}
        />

        {/* Step 3: Novel */}
        <PromptSection 
          stepNumber="03"
          title="The Novelization"
          image="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80"
          description="Transform your game mechanics into literature. By combining the vivid world of the Manuscript with the strict logic of the Walkthrough, the AI can write a compelling narrative from the perspective of the detective, turning your game into a story in the style of Sherlock Holmes."
          promptText={PROMPTS.novel}
        />

        <div className="mt-12 text-center">
          <p className="text-slate-500 italic">
            "The logic of the game ensures the plot of the novel holds water."
          </p>
        </div>

      </div>
    </div>
  );
};

export default CreateWorld;