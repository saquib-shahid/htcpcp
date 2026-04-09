export default function AboutModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-40 bg-brew-black/80 backdrop-blur flex items-center justify-center p-4">
      <div className="bg-brew-black border border-brew-amber w-full max-w-xl p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brew-amber/60 hover:text-brew-amber text-xl"
        >
          &times;
        </button>

        <h2 className="font-heading text-4xl text-brew-amber mb-6 tracking-widest border-b border-brew-amber/30 pb-4">
          ABOUT BREWOS 3000
        </h2>
        
        <div className="space-y-4 font-mono text-sm leading-relaxed opacity-90 text-brew-amber/80">
          <p>
            BrewOS was founded in 2021 after our CEO waited 4 minutes for a latte and 
            decided the world needed a distributed coffee infrastructure platform.
          </p>
          <p>
            We have raised $47M in Series B funding led by prominent Silicon Valley 
            visionaries who believe that caffeine extraction must be moved to the blockchain. 
            Our proprietary HTCPCP/1.0 microservices architecture dynamically allocates 
            roast parameters across serverless edge functions to ensure sub-millisecond 
            bean analysis.
          </p>
          <p className="font-bold text-brew-amber">
            We have never made a cup of coffee.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-brew-amber/30 flex justify-between text-xs opacity-50 font-mono">
          <span>© 2025 BrewOS Inc.</span>
          <span>v3.0.0-rc.847</span>
        </div>
      </div>
    </div>
  );
}
