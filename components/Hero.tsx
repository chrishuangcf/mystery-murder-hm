import React, { useState, useEffect } from 'react';

// Cinematic slides matching the user's provided concept art.
// Updated with reliable Unsplash IDs to ensure all images load correctly.
const HERO_SLIDES = [
  {
    // Sci-Fi/Fantasy Group Concept -> Gamer/Sci-Fi vibe
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=80", 
    alt: "Heroes of all genres emerging from the screen",
    theme: "Worlds Collide",
    description: "Sci-Fi · Fantasy · Retro"
  },
  {
    // Cyberpunk Detective (Neon Noir) -> Neon Rain Street
    url: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=1600&q=80",
    alt: "Cyberpunk detective in neon rain",
    theme: "Neon Noir",
    description: "High Tech · Low Life"
  },
  {
    // Fantasy Spirit -> Mystical Forest
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=80",
    alt: "Glowing spirit deer in ancient ruins",
    theme: "Ancient Magic",
    description: "Myths · Legends · Spirits"
  },
  {
    // BW Noir Detective -> Cinematic BW
    url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80",
    alt: "Black and white noir mystery",
    theme: "The Shadowed Rose",
    description: "Mystery · Intrigue · Secrets"
  }
];

interface HeroProps {
  onNavigateMission: () => void;
  onNavigateGameDetails: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateMission, onNavigateGameDetails }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-10 px-4">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-slate-900 to-blue-900/20 z-0 pointer-events-none" />
      
      <div className="container mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left animate-fade-in relative z-20 order-2 lg:order-1">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold tracking-wide">
            GAME ENGINE V1.0
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Where Stories <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Come Alive</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
            A dynamic mystery game engine combining the depth of manuscripts with the soul of AI. 
            From Cyberpunk to Fairytales, your world is no longer static.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button 
              onClick={onNavigateGameDetails} 
              className="px-8 py-4 rounded-lg font-bold text-white shadow-lg transition-all transform hover:scale-105 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
            >
              Explore Features
            </button>
            <button 
              onClick={onNavigateMission} 
              className="px-8 py-4 rounded-lg font-bold text-slate-300 border border-slate-600 hover:bg-slate-800 transition-all"
            >
              Our Mission
            </button>
          </div>
        </div>

        {/* Cinematic Slideshow Display */}
        <div className="relative group perspective-1000 h-[500px] lg:h-[600px] w-full order-1 lg:order-2">
          {/* Glowing Backdrop */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
          
          {/* Main Frame */}
          <div className="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800">
            {HERO_SLIDES.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Image with Slow Ken Burns Effect */}
                <div className="w-full h-full overflow-hidden">
                   <img 
                     src={slide.url} 
                     alt={slide.alt}
                     className={`w-full h-full object-cover transform transition-transform duration-[12000ms] ease-out ${
                       index === currentSlide ? 'scale-125' : 'scale-100'
                     }`}
                   />
                </div>
                
                {/* Cinematic Vignette & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30" />

                {/* Slide Caption - Movie Title Style */}
                <div className="absolute bottom-10 left-8 z-20">
                  <div className="overflow-hidden mb-2">
                     <span className={`inline-block text-xs font-mono text-emerald-400 tracking-widest uppercase transition-transform duration-1000 delay-300 ${
                        index === currentSlide ? 'translate-y-0' : 'translate-y-full'
                     }`}>
                        {slide.description}
                     </span>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className={`text-3xl md:text-4xl font-bold text-white drop-shadow-lg brand-font transition-transform duration-1000 delay-500 ${
                       index === currentSlide ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                      {slide.theme}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Film Strip Accents */}
          <div className="absolute top-4 right-4 flex space-x-1 z-30">
             {HERO_SLIDES.map((_, i) => (
               <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentSlide ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'w-2 bg-white/20'
                }`}
               />
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
