import React, { useState } from 'react';

// Mock Data for the UI
const RECENT_EVENTS = [
  { time: '11:34:45 AM', type: 'info', text: 'You entered the Conservatory.' },
  { time: '11:30:00 AM', type: 'event', text: 'EVENT: Police Arrive. The local constabulary seals the exits.' },
  { time: '11:15:00 AM', type: 'dialogue', text: 'Margaret: "I swear I saw him near the study..."' },
];

const INVENTORY = [
  { name: 'Notebook', type: 'Tool', icon: '📓' },
  { name: 'Magnifying Glass', type: 'Tool', icon: '🔍' },
];

const LOCATIONS = [
  { id: 'conservatory', x: 200, y: 300, label: 'Conservatory', color: 'bg-emerald-600' },
  { id: 'library', x: 400, y: 350, label: 'Library', color: 'bg-blue-600' },
  { id: 'hall', x: 250, y: 200, label: 'Main Hall', color: 'bg-slate-600' },
  { id: 'kitchen', x: 450, y: 450, label: 'Kitchen', color: 'bg-orange-700' },
];

const CONNECTIONS = [
  { from: 'hall', to: 'conservatory' },
  { from: 'hall', to: 'library' },
  { from: 'library', to: 'kitchen' },
];

interface GameDashboardProps {
  onExit: () => void;
}

const GameDashboard: React.FC<GameDashboardProps> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<'game' | 'map' | 'admin' | 'controls'>('game');
  const [showChat, setShowChat] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState('Detective');

  // --- SUB-COMPONENTS ---

  const TopBar = () => (
    <header className="bg-slate-900 border-b border-slate-700 h-16 flex items-center justify-between px-4 fixed top-0 w-full z-50">
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold text-white brand-font tracking-wider">Mystery Murder</h1>
        <div className="flex bg-slate-800 rounded-lg p-1 space-x-1">
          {['game', 'map', 'admin', 'controls'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors capitalize ${
                activeTab === tab 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Role Switcher */}
        <div className="relative group">
          <button className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded border border-slate-600 transition-colors">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-xs text-slate-300">Play as: <strong className="text-white">{currentPlayer}</strong></span>
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {/* Dropdown Mockup */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-xl overflow-hidden hidden group-hover:block z-50">
            <div className="p-2 text-xs text-slate-500 uppercase font-bold">Switch Perspective</div>
            <button onClick={() => setCurrentPlayer('Detective')} className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">Detective (Observer)</button>
            <button onClick={() => setCurrentPlayer('Isabella')} className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">Isabella Blackwood</button>
            <button onClick={() => setCurrentPlayer('James')} className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">James Blackwood</button>
          </div>
        </div>

        {/* System Status */}
        <div className="flex items-center space-x-3 text-xs font-mono">
           <div className="flex items-center px-2 py-1 bg-emerald-900/30 border border-emerald-500/30 rounded text-emerald-400">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
             Connected
           </div>
           <div className="flex items-center px-2 py-1 bg-blue-900/30 border border-blue-500/30 rounded text-blue-400">
             <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             2.7 tok/s
           </div>
           <button onClick={onExit} className="text-red-400 hover:text-red-300 ml-2">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
           </button>
        </div>
      </div>
    </header>
  );

  const GameView = () => (
    <div className="grid grid-cols-12 gap-6 h-full pt-20 pb-6 px-6">
      
      {/* LEFT COLUMN: Story & Events */}
      <div className="col-span-3 flex flex-col space-y-6 h-full overflow-hidden">
        <div className="bg-slate-800 rounded-xl border border-slate-700 flex-1 flex flex-col overflow-hidden shadow-lg">
          <div className="p-4 border-b border-slate-700 bg-slate-900/50 flex justify-between items-center">
             <h3 className="font-bold text-slate-200 flex items-center"><span className="mr-2">📜</span> Story & Events</h3>
             <button className="text-slate-500 hover:text-white">↻</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
             {RECENT_EVENTS.map((event, i) => (
               <div key={i} className={`p-3 rounded-lg border text-sm ${
                 event.type === 'event' ? 'bg-purple-900/20 border-purple-500/30 text-purple-200' : 
                 event.type === 'dialogue' ? 'bg-slate-700/50 border-slate-600 text-slate-300 italic' :
                 'bg-slate-900/50 border-slate-700 text-slate-400'
               }`}>
                 <div className="text-[10px] uppercase font-mono opacity-50 mb-1 flex justify-between">
                   <span>{event.time}</span>
                   <span>{event.type}</span>
                 </div>
                 {event.text}
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* CENTER COLUMN: Location & Interaction */}
      <div className="col-span-6 flex flex-col space-y-6 h-full">
        {/* Current Location Card */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-xl relative overflow-hidden min-h-[200px]">
           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
           <h2 className="text-2xl font-bold text-white mb-2">Conservatory</h2>
           <p className="text-slate-400 mb-6 leading-relaxed">
             A glass-walled room filled with exotic plants and painting easels. 
             Moonlight streams through the glass ceiling. The smell of turpentine and flowers mingles in the air.
           </p>
           
           <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700 mb-4">
             <label className="text-xs text-slate-500 uppercase font-bold mb-2 block">Change Location</label>
             <select className="w-full bg-slate-800 border border-slate-600 text-slate-200 text-sm rounded p-2 focus:ring-2 focus:ring-purple-500 outline-none">
               <option>Conservatory (Current)</option>
               <option>Main Hall</option>
               <option>Garden</option>
             </select>
           </div>
        </div>

        {/* People Here */}
        <div className="flex-1 bg-slate-800 rounded-xl border border-slate-700 flex flex-col shadow-lg">
          <div className="p-4 border-b border-slate-700 bg-slate-900/50">
             <h3 className="font-bold text-slate-200">People Here</h3>
          </div>
          <div className="p-4 grid gap-4">
            <div className="flex items-center justify-between bg-slate-700/30 p-4 rounded-lg border border-slate-600 hover:border-purple-500 transition-colors group">
               <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">IB</div>
                 <div>
                   <h4 className="font-bold text-white">Isabella Blackwood</h4>
                   <p className="text-xs text-slate-400">Artist · Anxious</p>
                 </div>
               </div>
               <button 
                 onClick={() => setShowChat(true)}
                 className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm rounded-md shadow-lg transition-all transform group-hover:scale-105"
               >
                 Chat
               </button>
            </div>
          </div>
        </div>

        {/* Available Actions */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 shadow-lg">
          <h3 className="font-bold text-slate-200 mb-3 flex items-center"><span className="text-purple-400 mr-2">⚡</span> Available Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 bg-pink-600/20 border border-pink-500/30 hover:bg-pink-600/40 text-pink-200 rounded-lg text-sm font-semibold transition-colors text-left">
              Examine Isabella's artwork
            </button>
            <button className="p-3 bg-pink-600/20 border border-pink-500/30 hover:bg-pink-600/40 text-pink-200 rounded-lg text-sm font-semibold transition-colors text-left">
              Examine Exotic plant collection
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Status & Inventory */}
      <div className="col-span-3 flex flex-col space-y-6 h-full">
         {/* Game Status */}
         <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 shadow-lg">
            <h3 className="font-bold text-white mb-4 border-b border-slate-700 pb-2">Game Status</h3>
            <div className="space-y-3 text-sm">
               <div className="flex justify-between">
                 <span className="text-slate-400">Status</span>
                 <span className="text-emerald-400 font-mono">running</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-slate-400">Time</span>
                 <span className="text-white font-mono">11/3/2025, 11:34:45 AM</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-slate-400">Speed</span>
                 <span className="text-yellow-400 font-mono">60x</span>
               </div>
            </div>
         </div>

         {/* Inventory */}
         <div className="bg-slate-800 rounded-xl border border-slate-700 flex-1 flex flex-col shadow-lg min-h-[250px]">
            <div className="p-4 border-b border-slate-700 bg-slate-900/50 flex justify-between items-center">
               <h3 className="font-bold text-slate-200">Inventory</h3>
               <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-400">0.5 kg</span>
            </div>
            <div className="p-2 space-y-2 flex-1 overflow-y-auto">
              <div className="relative">
                <input type="text" placeholder="Search items..." className="w-full bg-slate-900 border border-slate-600 rounded p-2 pl-8 text-sm text-slate-300" />
                <span className="absolute left-2.5 top-2.5 text-slate-500 text-xs">🔍</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                 {INVENTORY.map((item, idx) => (
                   <div key={idx} className="bg-slate-700/50 p-3 rounded border border-slate-600 hover:border-slate-400 cursor-pointer flex flex-col items-center justify-center text-center">
                     <div className="text-2xl mb-1">{item.icon}</div>
                     <span className="text-xs text-slate-300 font-medium">{item.name}</span>
                   </div>
                 ))}
                 <div className="bg-slate-900/30 p-3 rounded border border-slate-700 border-dashed flex items-center justify-center text-slate-600">
                   Empty Slot
                 </div>
              </div>
            </div>
         </div>

         {/* Journal */}
         <div className="bg-slate-800 rounded-xl border border-slate-700 flex-1 shadow-lg">
           <div className="flex text-sm font-medium border-b border-slate-700">
             <button className="flex-1 py-3 text-purple-400 border-b-2 border-purple-500 bg-slate-700/50">Journal</button>
             <button className="flex-1 py-3 text-slate-400 hover:text-slate-200">Evidence</button>
           </div>
           <div className="p-4 text-sm text-slate-400 italic">
             No new observations recorded.
           </div>
         </div>
      </div>
    </div>
  );

  const MapView = () => (
    <div className="h-full pt-20 px-6 pb-6 flex flex-col">
       <div className="bg-slate-200 rounded-xl flex-1 relative overflow-hidden shadow-inner border-4 border-slate-300">
          <div className="absolute top-4 left-4 z-10 bg-white/90 p-2 rounded shadow backdrop-blur-sm">
            <h2 className="text-slate-800 font-bold text-lg">Location Map</h2>
            <p className="text-slate-500 text-xs">Zoom: 70%</p>
          </div>

          <div className="absolute right-4 top-4 flex flex-col space-y-2 bg-white/90 p-1 rounded shadow text-slate-700">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded">+</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded">🏠</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded">-</button>
          </div>

          {/* Canvas Mockup */}
          <div className="w-full h-full relative bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]">
             {/* Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {CONNECTIONS.map((conn, i) => {
                  const start = LOCATIONS.find(l => l.id === conn.from);
                  const end = LOCATIONS.find(l => l.id === conn.to);
                  if(!start || !end) return null;
                  return <line key={i} x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#cbd5e1" strokeWidth="4" />
                })}
             </svg>
             
             {/* Nodes */}
             {LOCATIONS.map(loc => (
               <div 
                 key={loc.id}
                 className={`absolute w-24 h-24 rounded-full ${loc.color} shadow-xl flex items-center justify-center text-white font-bold border-4 border-white transform hover:scale-110 transition-transform cursor-pointer z-10`}
                 style={{ left: loc.x - 48, top: loc.y - 48 }}
               >
                 {loc.label}
                 {loc.id === 'conservatory' && (
                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-[10px]">
                     YOU
                   </div>
                 )}
               </div>
             ))}
          </div>
       </div>
       <div className="mt-4 flex justify-center space-x-6 text-sm text-slate-400">
          <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span> Current Location</span>
          <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></span> Accessible</span>
          <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-orange-700 mr-2"></span> Restricted</span>
       </div>
    </div>
  );

  const AdminView = () => (
    <div className="h-full pt-20 px-6 pb-6">
       <div className="bg-white rounded-xl h-full border border-slate-300 flex flex-col overflow-hidden text-slate-800">
          <div className="border-b border-slate-200 p-4 bg-slate-50 flex items-center space-x-6 overflow-x-auto">
             <h2 className="text-xl font-bold text-slate-700 flex items-center min-w-max"><span className="mr-2">🛠️</span> Game Admin</h2>
             <nav className="flex space-x-1">
               {['Maps', 'Items', 'Evidence', 'Chapters', 'Narratives', 'Events', 'NPCs', 'Relationships'].map(item => (
                 <button key={item} className={`px-3 py-1.5 rounded-md text-sm font-medium ${item === 'Relationships' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`}>
                   {item}
                 </button>
               ))}
             </nav>
          </div>
          
          <div className="flex-1 flex overflow-hidden">
             {/* Sidebar Filter */}
             <div className="w-64 bg-slate-50 border-r border-slate-200 p-4 overflow-y-auto">
                <h3 className="font-bold text-slate-600 mb-4">Filter Graph</h3>
                <div className="space-y-2">
                   {['NPCs', 'Locations', 'Evidence', 'Items', 'Events'].map(type => (
                     <label key={type} className="flex items-center space-x-2 text-sm text-slate-600">
                       <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                       <span>{type}</span>
                     </label>
                   ))}
                </div>
                <div className="mt-8">
                   <button className="w-full py-2 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700 transition-colors shadow">Reload Data</button>
                </div>
             </div>

             {/* Graph Area */}
             <div className="flex-1 relative bg-slate-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-500 mb-4">Relationship Graph Visualization</p>
                  {/* CSS Mockup of a D3 Graph */}
                  <div className="relative w-[600px] h-[400px]">
                     {/* Center Node */}
                     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg z-20">
                       Lady Victoria
                     </div>
                     {/* Surrounding Nodes */}
                     <div className="absolute top-10 left-20 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs text-center p-1 shadow z-10">James (Nephew)</div>
                     <div className="absolute bottom-20 right-20 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs text-center p-1 shadow z-10">Missing Vial</div>
                     <div className="absolute top-1/2 right-10 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs shadow z-10">Library</div>

                     {/* Lines */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="50%" y1="50%" x2="25%" y2="15%" stroke="#94a3b8" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#94a3b8" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#94a3b8" strokeWidth="2" />
                     </svg>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );

  const ControlsView = () => (
    <div className="h-full pt-20 px-6 pb-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8">
         
         <div className="flex items-center space-x-3 mb-8">
           <span className="text-3xl">🎮</span>
           <h2 className="text-3xl font-bold text-white">Game Controls</h2>
         </div>

         {/* AI Model Settings */}
         <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
           <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center"><span className="mr-2">🤖</span> AI Model</h3>
           <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4 mb-6">
             <div className="flex items-center justify-between mb-4">
               <label className="text-sm font-bold text-slate-300">Provider</label>
               <span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded uppercase">OpenAI</span>
             </div>
             <div className="flex items-center space-x-4 bg-slate-900 p-3 rounded border border-slate-700">
               <span className="text-slate-400 font-mono text-sm">Model:</span>
               <span className="text-white font-mono text-sm">gpt-3.5-turbo</span>
             </div>
             <p className="text-xs text-slate-500 mt-2 italic">
               To switch LLM providers (e.g., to local Ollama with GPU acceleration), edit the .env file and restart the backend.
             </p>
           </div>
         </div>

         {/* Time Control */}
         <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center"><span className="text-purple-400 mr-2">🕒</span> Time Control</h3>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Current Game Time</p>
                <p className="text-2xl font-mono text-white">13:19:13</p>
              </div>
              <div className="flex items-center space-x-2">
                <input type="time" className="bg-slate-800 border border-slate-600 text-white px-3 py-2 rounded" defaultValue="12:00" />
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded shadow transition-colors">
                  Fast-Forward
                </button>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Fast-forwarding will simulate NPC schedules and events up to the target time.
            </p>
         </div>

         {/* Save/Load */}
         <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
           <h3 className="text-xl font-bold text-white mb-4 flex items-center"><span className="text-green-400 mr-2">💾</span> Save Game</h3>
           <div className="flex space-x-4">
             <input type="text" placeholder="Save Name..." className="flex-1 bg-slate-900 border border-slate-700 rounded px-4 py-2 text-white" />
             <input type="text" placeholder="Description (optional)" className="flex-[2] bg-slate-900 border border-slate-700 rounded px-4 py-2 text-white" />
             <button className="px-6 py-2 bg-slate-600 hover:bg-slate-500 text-white font-bold rounded shadow">Create Save</button>
           </div>
         </div>
      </div>
    </div>
  );

  // --- MAIN RENDER ---

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500/30">
      <TopBar />
      
      <main className="h-screen pt-0 overflow-hidden relative">
        {activeTab === 'game' && <GameView />}
        {activeTab === 'map' && <MapView />}
        {activeTab === 'admin' && <AdminView />}
        {activeTab === 'controls' && <ControlsView />}
      </main>

      {/* Chat Overlay */}
      {showChat && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-fade-in">
             <div className="p-4 border-b flex justify-between items-center bg-slate-50">
               <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">IB</div>
                 <div>
                   <h3 className="font-bold text-lg">Conversation with Isabella Blackwood</h3>
                   <span className="text-xs text-slate-500">Artist</span>
                 </div>
               </div>
               <button onClick={() => setShowChat(false)} className="text-slate-400 hover:text-red-500">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
               </button>
             </div>
             
             <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-100">
                <div className="flex justify-end">
                   <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] shadow">
                     how are you this morning? did you see what's going on at the murder scene?
                   </div>
                </div>
                <div className="flex justify-start">
                   <div className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%] shadow">
                     <span className="text-xs font-bold text-slate-500 block mb-1">Isabella Blackwood:</span>
                     I'm doing alright, thank you. No, I haven't seen anything at the murder scene.
                   </div>
                </div>
             </div>

             <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex space-x-2">
                   <input type="text" placeholder="Ask Isabella Blackwood a question..." className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                   <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                     Send
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDashboard;