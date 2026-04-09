import { useFakeWebSocket } from '../hooks/useFakeWebSocket';
import { useEffect, useRef } from 'react';

export default function SystemLog() {
  const logs = useFakeWebSocket();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="flex flex-col h-64 border border-brew-amber/30 bg-brew-black p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full bg-brew-amber/10 border-b border-brew-amber/30 p-1 px-3 flex justify-between items-center text-xs">
        <span className="font-heading tracking-widest text-brew-amber">SYSTEM DIAGNOSTICS LOG</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brew-green animate-blink"></span>
          <span className="text-brew-green">LIVE</span>
        </span>
      </div>
      
      <div className="mt-6 flex-1 overflow-y-auto terminal-scroll text-sm opacity-80 break-all space-y-1">
        {logs.map((log, i) => (
          <div key={i} className="font-mono">{log}</div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
