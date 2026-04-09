export default function PricingPage({ onClose }) {
  return (
    <div className="fixed inset-0 z-40 bg-brew-black/90 backdrop-blur flex items-center justify-center p-4">
      <div className="bg-brew-black border border-brew-amber w-full max-w-4xl p-8 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brew-amber/60 hover:text-brew-amber text-xl"
        >
          &times;
        </button>

        <h2 className="font-heading text-4xl text-brew-amber mb-2 tracking-widest text-center">
          ENTERPRISE PRICING
        </h2>
        <p className="font-mono text-sm text-center mb-10 opacity-70">
          Scalable solutions for teams that don't need coffee anyway.
        </p>

        <div className="grid md:grid-cols-3 gap-6 font-mono">
          
          {/* Barista Tier */}
          <div className="border border-brew-amber/30 p-6 flex flex-col">
            <h3 className="font-heading text-2xl mb-2">BARISTA</h3>
            <div className="text-3xl mb-4">$0<span className="text-sm opacity-50">/mo</span></div>
            <ul className="space-y-3 flex-1 text-sm opacity-80 mb-6">
              <li>✓ 0 coffees/day limit</li>
              <li>✓ Standard 418 Errors only</li>
              <li>✓ Community Support</li>
              <li>✗ No Teapot customization</li>
            </ul>
            <button className="w-full bg-brew-amber/10 border border-brew-amber py-2 hover:bg-brew-amber hover:text-brew-black transition-colors font-bold uppercase tracking-wider">
              Current Plan
            </button>
          </div>

          {/* Roaster Tier */}
          <div className="border-2 border-brew-amber bg-brew-amber/5 p-6 flex flex-col transform md:-translate-y-4 shadow-[0_0_20px_rgba(239,159,39,0.15)] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brew-amber text-brew-black px-3 py-1 text-xs font-bold w-max">MOST POPULAR</div>
            <h3 className="font-heading text-2xl mb-2 text-brew-amber">ROASTER</h3>
            <div className="text-3xl mb-4 text-brew-amber">$99<span className="text-sm opacity-50">/mo</span></div>
            <ul className="space-y-3 flex-1 text-sm opacity-90 mb-6 text-brew-amber/90">
              <li>✓ 0 coffees/day limit</li>
              <li>✓ 2x Faster 418 Errors</li>
              <li>✓ Priority Queue for failures</li>
              <li>✓ Basic Teapot aesthetics</li>
            </ul>
            <button className="w-full bg-brew-amber text-brew-black py-2 hover:bg-white transition-colors font-bold uppercase tracking-wider">
              Upgrade Now
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="border border-brew-amber/30 p-6 flex flex-col bg-gradient-to-br from-brew-black to-brew-amber/5">
            <h3 className="font-heading text-2xl mb-2">ENTERPRISE</h3>
            <div className="text-3xl mb-4">Contact Us</div>
            <ul className="space-y-3 flex-1 text-sm opacity-80 mb-6">
              <li>✓ Custom SLA ranking on 418s</li>
              <li>✓ Dedicated Virtual Teapot</li>
              <li>✓ White-glove Failure Analysis</li>
              <li>✓ Larry Masinter on Speed Dial</li>
            </ul>
            <button className="w-full bg-brew-amber/10 border border-brew-amber py-2 hover:bg-brew-amber hover:text-brew-black transition-colors font-bold uppercase tracking-wider">
              Talk to Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
