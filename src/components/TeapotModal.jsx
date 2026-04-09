import { useEffect } from 'react';
import { AlertOctagon } from 'lucide-react';

export default function TeapotModal({ errorHeader, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!errorHeader) return null;

  return (
    <div className="fixed inset-0 z-50 bg-brew-red/20 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-brew-black border-2 border-brew-red w-full max-w-2xl shadow-[0_0_50px_rgba(226,75,74,0.3)] animate-[shake_0.5s_ease-in-out]">
        
        <div className="bg-brew-red text-brew-black p-4 flex items-center gap-3">
          <AlertOctagon className="w-8 h-8" />
          <h2 className="font-heading text-4xl m-0 tracking-widest mt-1">FATAL ERROR 418</h2>
        </div>

        <div className="p-8 space-y-6 text-brew-red font-mono">
          <div className="text-xl">
            <span className="opacity-70">Status:</span> 418 — I'M A TEAPOT
          </div>
          
          <div className="p-4 border border-brew-red/30 bg-brew-red/5">
            <span className="opacity-70 text-sm mb-2 block">RESPONSE BODY:</span>
            <p className="text-lg">"The requested entity body is short and stout."</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm opacity-80 bg-brew-red/10 p-4 border border-brew-red/20">
            <div><span className="font-bold">X-Coffee-Pot-Status:</span> Teapot</div>
            <div><span className="font-bold">X-Brew-Protocol:</span> HTCPCP/1.0</div>
            <div><span className="font-bold">Citation:</span> RFC 2324 §2.3.2</div>
            <div><span className="font-bold">X-Larry-Masinter:</span> Legend</div>
          </div>

          <div className="text-center italic opacity-80 py-4 border-y border-brew-red/30">
            "I am a teapot<br/>
            Short and stout, here is my spout<br/>
            Your coffee: denied"
          </div>

          <div className="flex justify-between items-center pt-4">
            <a 
              href="https://datatracker.ietf.org/doc/html/rfc2324" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs underline hover:opacity-80"
            >
              FILE COMPLAINT WITH LARRY MASINTER
            </a>
            <button 
              onClick={onClose}
              className="bg-brew-red text-brew-black px-6 py-2 font-heading tracking-widest hover:bg-white transition-colors text-xl"
            >
              ABORT (ESC)
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
