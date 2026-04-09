import { useState } from 'react';

export default function CaptchaModal({ onVerify, onCancel }) {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      answer1.toUpperCase() === 'EEFFOC' &&
      answer2 === '0' &&
      answer3.toLowerCase().includes('clap') || answer3.length > 3
    ) {
      onVerify();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-brew-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-brew-black border border-brew-amber w-full max-w-md p-6">
        <h2 className="font-heading text-2xl text-brew-amber mb-4 tracking-widest">
          MILK AUTHORIZATION REQUIRED
        </h2>
        
        <p className="text-sm font-mono opacity-80 mb-6">
          To prevent unauthorized automated milk dispensation, please prove you are a human barista.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 font-mono text-sm">
          <div>
            <label className="block text-brew-amber mb-1">1. Spell COFFEE backwards:</label>
            <input 
              type="text" 
              className="w-full bg-brew-amber/10 border border-brew-amber/50 p-2 text-brew-amber focus:outline-none focus:border-brew-amber"
              value={answer1}
              onChange={e => setAnswer1(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-brew-amber mb-1">2. How many beans in a perfect espresso? (±0):</label>
            <input 
              type="text" 
              className="w-full bg-brew-amber/10 border border-brew-amber/50 p-2 text-brew-amber focus:outline-none focus:border-brew-amber"
              value={answer2}
              onChange={e => setAnswer2(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-brew-amber mb-1">3. Enter the sound of one hand caffeinating:</label>
            <input 
              type="text" 
              className="w-full bg-brew-amber/10 border border-brew-amber/50 p-2 text-brew-amber focus:outline-none focus:border-brew-amber"
              value={answer3}
              onChange={e => setAnswer3(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-brew-red text-xs mt-2">AUTHORIZATION FAILED. TRY AGAIN.</div>}

          <div className="flex justify-end gap-4 pt-4 mt-6 border-t border-brew-amber/30">
            <button 
              type="button" 
              onClick={onCancel}
              className="px-4 py-2 text-brew-amber/60 hover:text-brew-amber"
            >
              CANCEL BREW
            </button>
            <button 
              type="submit"
              className="bg-brew-amber text-brew-black px-6 py-2 font-heading tracking-widest hover:bg-white transition-colors"
            >
              VERIFY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
