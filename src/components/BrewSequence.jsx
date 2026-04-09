import { BREW_STEPS } from '../hooks/useBrewSequence';

export default function BrewSequence({ currentStep, progress, isBrewing }) {
  if (!isBrewing && currentStep === BREW_STEPS.IDLE) return null;

  return (
    <div className="mt-8 border border-brew-amber/50 bg-brew-black p-6 relative">
      <h3 className="font-heading text-2xl mb-4 tracking-widest text-brew-amber">
        HTCPCP BREW EXECUTION SEQUENCE
      </h3>
      
      <div className="mb-2 flex justify-between font-mono text-sm opacity-80">
        <span>STATUS: {currentStep}</span>
        <span>{progress}%</span>
      </div>

      <div className="w-full h-4 bg-brew-amber/10 border border-brew-amber/30 relative overflow-hidden">
        <div 
          className="h-full bg-brew-amber transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
        {/* Fake scanline over progress bar */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] w-[200%] animate-[slide_2s_infinite]"></div>
      </div>
      
      {currentStep === BREW_STEPS.BLOCKCHAIN && (
        <div className="mt-2 text-xs font-mono text-brew-amber/60 animate-pulse">
          Establishing consensus among 14,000 nodes... Please wait (ETA: ∞)
        </div>
      )}
    </div>
  );
}
