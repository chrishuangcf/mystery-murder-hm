import React, { useState } from 'react';

interface SectionProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const TutorialSection: React.FC<SectionProps> = ({ title, description, isOpen, onToggle, children }) => {
  return (
    <div className="border border-slate-700 rounded-xl bg-slate-800/50 overflow-hidden mb-4 transition-all duration-300">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800 transition-colors"
      >
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 border-t border-slate-700 bg-slate-900/50">
          {children}
        </div>
      </div>
    </div>
  );
};

interface ManuscriptTutorialProps {
  onBack: () => void;
}

const ManuscriptTutorial: React.FC<ManuscriptTutorialProps> = ({ onBack }) => {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-slate-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </button>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Manuscript <span className="text-purple-500">Guide</span></h1>
          <p className="text-xl text-slate-400">
            A comprehensive breakdown of how to script your world using Markdown. 
            Click the sections below to see syntax and allowed values.
          </p>
        </header>

        <div className="space-y-4">
          
          {/* Section 1: NPCs */}
          <TutorialSection 
            title="1. NPCs (Non-Player Characters)" 
            description="Defining character bios, roles, and daily routines."
            isOpen={openSection === 0}
            onToggle={() => toggleSection(0)}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-slate-300 text-sm">
                <p><strong className="text-purple-400">H3 Header:</strong> The character's full name.</p>
                <ul className="space-y-2 list-disc pl-4 marker:text-slate-600">
                  <li><strong>Age</strong>: Integer only (e.g., 52).</li>
                  <li><strong>Gender</strong>: male, female, nonbinary, other.</li>
                  <li><strong>Role</strong>: victim, suspect, witness, innocent.</li>
                  <li><strong>Alive</strong>: true/false. Used for game logic.</li>
                  <li><strong>Location</strong>: Must match a defined location header exactly.</li>
                  <li><strong>Personality</strong>: Adjectives guiding the AI's roleplay.</li>
                </ul>
              </div>
              <div className="bg-[#1e1e1e] p-4 rounded-lg border border-slate-700 font-mono text-xs overflow-x-auto">
<pre className="text-slate-300">
<span className="text-purple-400">### Lady Victoria Blackwood</span>
- <span className="text-yellow-300">**Age**</span>: 58
- <span className="text-yellow-300">**Gender**</span>: female
- <span className="text-yellow-300">**Role**</span>: victim
- <span className="text-yellow-300">**Alive**</span>: false
- <span className="text-yellow-300">**Location**</span>: Library
- <span className="text-yellow-300">**Personality**</span>: Stern, controlling.
- <span className="text-yellow-300">**Schedule**</span>:
  - <span className="text-green-400">**20:00-20:30**</span> @ Library | Reading
  - <span className="text-green-400">**21:30-22:00**</span> @ Study | Arguing
</pre>
              </div>
            </div>
          </TutorialSection>

          {/* Section 2: Locations */}
          <TutorialSection 
            title="2. Locations & Mapping" 
            description="Setting the scene, connections, and interactive spots."
            isOpen={openSection === 1}
            onToggle={() => toggleSection(1)}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-slate-300 text-sm">
                <p><strong className="text-purple-400">Structure:</strong> Use H3 for Region/Floor, H4 for specific Rooms.</p>
                <ul className="space-y-2 list-disc pl-4 marker:text-slate-600">
                  <li><strong>Connections</strong>: Define exits. Can be hidden or locked.</li>
                  <li><strong>Interactions</strong>: Things the player can click.
                    <ul className="pl-4 mt-1 text-xs text-slate-500">
                       <li>type=search (reveals items)</li>
                       <li>type=examine (gives info)</li>
                       <li>type=trigger (opens passages)</li>
                    </ul>
                  </li>
                  <li><strong>Items Present</strong>: List of props/evidence currently here.</li>
                </ul>
              </div>
              <div className="bg-[#1e1e1e] p-4 rounded-lg border border-slate-700 font-mono text-xs overflow-x-auto">
<pre className="text-slate-300">
<span className="text-blue-400">### Ground Floor</span>

<span className="text-purple-400">#### Library</span>
- <span className="text-yellow-300">**Type**</span>: crime_scene
- <span className="text-yellow-300">**Description**</span>: A grand room...
- <span className="text-yellow-300">**Connections**</span>:
  - Main Hall via door (bidirectional: true)
  - Study via secret_passage (hidden: true)
- <span className="text-yellow-300">**Interactions**</span>:
  - Search Bookshelf: type=search, reveals=Diary
  - Examine Desk: type=examine
</pre>
              </div>
            </div>
          </TutorialSection>

          {/* Section 3: Evidence & Items */}
          <TutorialSection 
            title="3. Evidence & Items" 
            description="Defining clues, weapons, and usable tools."
            isOpen={openSection === 2}
            onToggle={() => toggleSection(2)}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-slate-300 text-sm">
                 <p>Items can be physical objects or documents. Metadata JSON allows for complex game mechanics.</p>
                 <ul className="space-y-2 list-disc pl-4 marker:text-slate-600">
                  <li><strong>Type</strong>: physical, document, tool, key.</li>
                  <li><strong>Importance</strong>: 1-5 integer (AI weighing).</li>
                  <li><strong>Metadata</strong>: JSON block for specific attributes (forensics, contents, keys).</li>
                  <li><strong>Evidence Chains</strong>: How clues connect logically.</li>
                </ul>
              </div>
              <div className="bg-[#1e1e1e] p-4 rounded-lg border border-slate-700 font-mono text-xs overflow-x-auto">
<pre className="text-slate-300">
<span className="text-purple-400">### Hidden Diary</span>
- <span className="text-yellow-300">**Type**</span>: document
- <span className="text-yellow-300">**Importance**</span>: 5
- <span className="text-yellow-300">**Location**</span>: Library
- <span className="text-yellow-300">**Metadata**</span>:
  {'{'}
    "pages": 156,
    "key_entries": ["blackmail", "will"],
    "hidden": true
  {'}'}

- <span className="text-yellow-300">**Evidence Chains**</span>:
  - Supports: Motive (strength: 1.0)
</pre>
              </div>
            </div>
          </TutorialSection>

          {/* Section 4: Relationships & Logic */}
          <TutorialSection 
            title="4. Relationships & Knowledge" 
            description="Who knows what, who hates whom, and why."
            isOpen={openSection === 3}
            onToggle={() => toggleSection(3)}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-slate-300 text-sm">
                 <p>Define the social web. This dictates AI responses and deception.</p>
                 <ul className="space-y-2 list-disc pl-4 marker:text-slate-600">
                  <li><strong>Relationships</strong>: Target (type): sentiment.</li>
                  <li><strong>Evidence Knowledge</strong>: Does an NPC know about an item?</li>
                  <li><strong>Will Reveal</strong>: Threshold (0.0 - 1.0) or condition (never, immediately).</li>
                </ul>
              </div>
              <div className="bg-[#1e1e1e] p-4 rounded-lg border border-slate-700 font-mono text-xs overflow-x-auto">
<pre className="text-slate-300">
<span className="text-yellow-300">**Relationships**</span>:
- James (nephew): hostile | "Dislikes him"
- Margaret (maid): trusting | "Loyal"

<span className="text-yellow-300">**Evidence Knowledge**</span>:
- <span className="text-green-400">**Hidden Diary**</span>:
  - knows_about (confidence: 1.0)
  - will_reveal: 0.7 trust
- <span className="text-green-400">**Murder Weapon**</span>:
  - witnessed (emotional: shocked)
  - will_reveal: immediately
</pre>
              </div>
            </div>
          </TutorialSection>

           {/* Section 5: Events */}
           <TutorialSection 
            title="5. Events & Causality" 
            description="The timeline of the crime and triggered story beats."
            isOpen={openSection === 4}
            onToggle={() => toggleSection(4)}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-slate-300 text-sm">
                 <p>Events drive the simulation forward. They can be time-based or triggered by player actions.</p>
                 <ul className="space-y-2 list-disc pl-4 marker:text-slate-600">
                  <li><strong>Game Time</strong>: ISO format or specific HH:MM.</li>
                  <li><strong>Trigger Condition</strong>: e.g., secret_passage_found.</li>
                  <li><strong>Consequences</strong>: JSON causing state changes.</li>
                </ul>
              </div>
              <div className="bg-[#1e1e1e] p-4 rounded-lg border border-slate-700 font-mono text-xs overflow-x-auto">
<pre className="text-slate-300">
<span className="text-purple-400">### The Murder</span>
- <span className="text-yellow-300">**Time**</span>: 2025-10-12T22:00:00
- <span className="text-yellow-300">**Location**</span>: Library
- <span className="text-yellow-300">**Trigger**</span>: secret_passage_used
- <span className="text-yellow-300">**Consequences**</span>:
  {'{'}
    "victim": "Lady Victoria",
    "murder_weapon": "Letter Opener",
    "game_state": "murder_discovered"
  {'}'}

</pre>
              </div>
            </div>
          </TutorialSection>

        </div>
        
        <div className="mt-12 p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl text-center">
           <h3 className="text-white font-bold mb-2">Ready to write?</h3>
           <p className="text-slate-400 text-sm mb-4">You can draft your manuscript in any text editor. Save it as a .md file.</p>
           <button onClick={onBack} className="text-purple-400 hover:text-purple-300 font-bold text-sm">Return to Engine Overview</button>
        </div>

      </div>
    </div>
  );
};

export default ManuscriptTutorial;