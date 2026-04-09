import { useState } from 'react';
import MetricsPanel from './MetricsPanel';
import SystemLog from './SystemLog';

export default function Dashboard({ onBrew, isBrewing }) {
  const [bloodType, setBloodType] = useState('A+');
  const [mood, setMood] = useState('MONDAY');
  const [coffeeType, setCoffeeType] = useState('ESPRESSO SUPREMO');
  const [pretentiousness, setPretentiousness] = useState(50);
  const [tosAgreed, setTosAgreed] = useState(false);

  const getSourcedLabel = () => {
    if (pretentiousness < 30) return "Dark Roast";
    if (pretentiousness < 70) return "Ethically Sourced Single-Origin";
    return "Single-Origin Ethically-Sourced Post-Harvest Fermented Micro-Lot Nano-Extraction";
  };

  const handleBrew = () => {
    if (!tosAgreed) {
      alert("WARNING: Must accept karmic responsibility for coffee (TOS requires agreement)");
      return;
    }
    onBrew();
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto z-10 relative">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Constraints Panel */}
        <div className="col-span-2 border border-brew-amber/30 p-6 bg-brew-black/50 backdrop-blur">
          <h2 className="font-heading text-2xl mb-6 tracking-widest border-b border-brew-amber/30 pb-2">
            BREW PARAMETERS & CONSTRAINTS
          </h2>

          <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
            <div className="space-y-4">
              <div>
                <label className="block mb-1 opacity-80">COFFEE CATEGORY</label>
                <select 
                  className="w-full bg-brew-amber/10 border border-brew-amber/50 p-2 focus:outline-none appearance-none cursor-pointer"
                  value={coffeeType}
                  onChange={(e) => setCoffeeType(e.target.value)}
                  disabled={isBrewing}
                >
                  <option>Espresso Supremo</option>
                  <option>Cold Brew Zero-G</option>
                  <option>Quantum Latte</option>
                  <option>Decaf (lol)</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 opacity-80">BLOOD TYPE COMPATIBILITY</label>
                <select 
                  className="w-full bg-brew-amber/10 border border-brew-amber/50 p-2 focus:outline-none appearance-none cursor-pointer"
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                  disabled={isBrewing}
                >
                  <option value="A+">A+ (Recommended)</option>
                  <option value="O-">O- (Universally Under-caffeinated)</option>
                  <option value="B+">B+</option>
                  <option value="AB-">AB- (Decaf suggested)</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-1 opacity-80">EXISTENTIAL MOOD STATE</label>
                <select 
                  className="w-full bg-brew-amber/10 border border-brew-amber/50 p-2 focus:outline-none appearance-none cursor-pointer"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  disabled={isBrewing}
                >
                  <option value="MONDAY">Monday</option>
                  <option value="HOSTILE">Pre-caffeinated (Hostile)</option>
                  <option value="DREAD">Existential Dread</option>
                  <option value="VOID">Staring into the Abyss</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1 opacity-80">
                  <label>PRETENTIOUSNESS INDEX</label>
                  <span>{pretentiousness}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="100" 
                  value={pretentiousness}
                  onChange={(e) => setPretentiousness(e.target.value)}
                  disabled={isBrewing}
                  className="w-full accent-brew-amber cursor-pointer"
                />
                <div className="mt-2 text-xs italic opacity-60 min-h-[32px]">
                  Output descriptor: {getSourcedLabel()}
                </div>
              </div>

              <div className="pt-4 border-t border-brew-amber/20 mt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mt-1 accent-brew-amber cursor-pointer"
                    checked={tosAgreed}
                    onChange={(e) => setTosAgreed(e.target.checked)}
                    disabled={isBrewing}
                  />
                  <span className="text-xs opacity-80 leading-relaxed">
                    I agree that coffee is a human right and accept all karmic responsibility for choosing decaf.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-brew-amber/30 text-center">
            <button 
              onClick={handleBrew}
              disabled={isBrewing}
              className={`w-full max-w-md py-4 text-2xl font-heading tracking-widest transition-all ${
                isBrewing 
                  ? 'bg-brew-amber/20 border-brew-amber/40 text-brew-amber/50 cursor-not-allowed' 
                  : tosAgreed 
                    ? 'bg-brew-amber border-2 border-brew-amber text-brew-black hover:bg-white hover:border-white shadow-[0_0_15px_rgba(239,159,39,0.5)]'
                    : 'bg-brew-amber/10 border-2 border-brew-amber text-brew-amber cursor-not-allowed hover:bg-brew-amber/20'
              }`}
            >
              {isBrewing ? 'EXECUTING...' : 'INITIATE BREW PROTOCOL (B)'}
            </button>
          </div>
        </div>

        {/* Live Metrics Column */}
        <div className="flex flex-col gap-6">
          <MetricsPanel />
          <div className="flex-1">
            <SystemLog />
          </div>
        </div>

      </div>
    </div>
  );
}
