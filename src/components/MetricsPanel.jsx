import { useState, useEffect } from 'react';

const generateMetrics = () => ({
  beanEntropy: (Math.random() * 100).toFixed(2),
  grindLatency: Math.floor(Math.random() * 800) + 120,
  quantumRoastIndex: (Math.random() * 9 + 1).toFixed(3),
  thermalFluctuation: (Math.random() * 5).toFixed(2),
  pressureVariance: (Math.random() * 20 - 10).toFixed(1),
  networkJitter: Math.floor(Math.random() * 40)
});

export default function MetricsPanel() {
  const [metrics, setMetrics] = useState(generateMetrics());

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(generateMetrics());
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border border-brew-amber/30 p-4 bg-brew-amber/5">
      <div className="flex flex-col">
        <span className="text-xs opacity-60 font-heading">BEAN ENTROPY (μE)</span>
        <span className="text-xl font-mono text-brew-amber">{metrics.beanEntropy}%</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs opacity-60 font-heading">GRIND LATENCY</span>
        <span className="text-xl font-mono text-brew-amber">{metrics.grindLatency}ms</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs opacity-60 font-heading">QUANTUM ROAST IDX</span>
        <span className="text-xl font-mono text-brew-amber">{metrics.quantumRoastIndex} 𝚿</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs opacity-60 font-heading">THERMAL VARIANCE</span>
        <span className="text-xl font-mono text-brew-amber">±{metrics.thermalFluctuation}°C</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs opacity-60 font-heading">PRESSURE DELTA</span>
        <span className="text-xl font-mono text-brew-amber">{metrics.pressureVariance} hPa</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs opacity-60 font-heading">TCP/UDP JITTER</span>
        <span className="text-xl font-mono text-brew-amber">{metrics.networkJitter}ms</span>
      </div>
    </div>
  );
}
