import { useState, useEffect } from 'react';

const FAKE_LOGS = [
  "Pinging Swiss coffee authority... timeout",
  "Garbage collecting stale brew promises...",
  "Running flavor neural net epoch 847/∞",
  "Re-aligning bean entropy vectors via HTCPCP...",
  "Querying Larry Masinter's ghost... 404",
  "Bypassing quantum roast index limitations...",
  "Decrypting single-origin provenance blockchain...",
  "Warning: Pretentiousness Index exceeding safe limits",
  "Initializing existential dread subroutine...",
  "Validating municipal brew permit... forged",
  "Heating elements active. Spout check: OK. Handle check: OK.",
  "Injecting dark matter into espresso stream..."
];

export function useFakeWebSocket() {
  const [logs, setLogs] = useState(["[SYSTEM] BrewOS 3000 initialized. Listening on HTCPCP port 80."]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = FAKE_LOGS[Math.floor(Math.random() * FAKE_LOGS.length)];
      const timestamp = new Date().toISOString().split('T')[1].slice(0, -1);
      setLogs(prev => [...prev, `[${timestamp}] ${randomLog}`].slice(-50)); // Keep last 50
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return logs;
}
