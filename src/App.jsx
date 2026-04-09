import { useState, useEffect } from 'react';
import { useBrewSequence, BREW_STEPS } from './hooks/useBrewSequence';
import Dashboard from './components/Dashboard';
import BrewSequence from './components/BrewSequence';
import CaptchaModal from './components/CaptchaModal';
import TeapotModal from './components/TeapotModal';
import AboutModal from './components/AboutModal';
import PricingPage from './components/PricingPage';
import { Coffee, Code, Info, DollarSign } from 'lucide-react';

export default function App() {
  const { 
    currentStep, 
    progress, 
    isBrewing, 
    errorHeader, 
    startBrew, 
    resolveCaptcha, 
    reset 
  } = useBrewSequence();

  const [uptime, setUptime] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  // Uptime counter
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut for Brew (B)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'b' && !isBrewing && currentStep === BREW_STEPS.IDLE) {
        startBrew();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBrewing, currentStep, startBrew]);

  const formatUptime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-brew-black text-brew-amber font-mono overflow-x-hidden selection:bg-brew-amber selection:text-brew-black relative flex flex-col">
      <div className="crt-overlay pointer-events-none"></div>

      {/* Header */}
      <header className="border-b border-brew-amber/30 p-4 bg-brew-black/90 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <h1 className="font-heading text-4xl leading-none flex items-center gap-2">
                <Coffee className="w-8 h-8" />
                BREWOS 3000
              </h1>
              <span className="text-[10px] tracking-widest opacity-60">ENTERPRISE CAFFEINATION SYSTEM</span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <div className="flex flex-col items-end opacity-80">
              <span className="text-[10px] tracking-widest uppercase">System Uptime</span>
              <span className="font-bold">{formatUptime(uptime)}</span>
            </div>
            <div className="flex items-center gap-2 border border-brew-amber/30 px-3 py-1 bg-brew-amber/5">
              <span className="w-2 h-2 rounded-full bg-brew-green animate-blink"></span>
              <span className="text-brew-green font-bold tracking-wider">ONLINE · NEVER BREWED</span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 py-8">
        <Dashboard onBrew={startBrew} isBrewing={isBrewing} />
        
        {isBrewing || currentStep !== BREW_STEPS.IDLE ? (
          <BrewSequence currentStep={currentStep} progress={progress} isBrewing={isBrewing} />
        ) : null}
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-brew-amber/30 p-4 mt-auto text-xs opacity-60 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            <span>Powered by HTCPCP/1.0 · RFC 2324</span>
          </div>
          
          <div className="flex gap-6">
            <button onClick={() => setShowPricing(true)} className="hover:text-brew-amber flex items-center gap-1">
              <DollarSign className="w-3 h-3"/> Pricing
            </button>
            <button onClick={() => setShowAbout(true)} className="hover:text-brew-amber flex items-center gap-1">
              <Info className="w-3 h-3"/> About Us
            </button>
          </div>

          <div>
            © 2025 BrewOS Inc. No coffee was harmed (because none was made).
          </div>
        </div>
      </footer>

      {/* Modals */}
      {currentStep === BREW_STEPS.CAPTCHA && (
        <CaptchaModal onVerify={resolveCaptcha} onCancel={reset} />
      )}
      
      {currentStep === BREW_STEPS.TEAPOT && (
        <TeapotModal errorHeader={errorHeader} onClose={reset} />
      )}

      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      {showPricing && <PricingPage onClose={() => setShowPricing(false)} />}

    </div>
  );
}
