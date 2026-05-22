'use client';

import { useEffect, useState } from 'react';

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    // Simulate progress with varying speeds
    intervals.push(
      setTimeout(() => setProgress(10), 100),
      setTimeout(() => setProgress(25), 400),
      setTimeout(() => setProgress(45), 800),
      setTimeout(() => setProgress(65), 1400),
      setTimeout(() => setProgress(80), 2000)
    );

    return () => intervals.forEach(interval => clearTimeout(interval));
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-dark via-slate-darker to-slate-dark flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Robot Animation */}
        <div className="w-24 h-24 relative">
          {/* Robot Body */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            {/* Head */}
            <rect x="35" y="15" width="30" height="30" fill="#32D3A3" rx="3" />
            {/* Eyes */}
            <circle cx="42" cy="25" r="3" fill="#E2E8F0" className="animate-pulse" />
            <circle cx="58" cy="25" r="3" fill="#E2E8F0" className="animate-pulse" />
            {/* Antenna */}
            <line x1="50" y1="15" x2="50" y2="5" stroke="#E2E8F0" strokeWidth="2" />
            <circle cx="50" cy="3" r="2" fill="#34D399" />
            {/* Body */}
            <rect x="30" y="50" width="40" height="35" fill="#1E293B" rx="3" />
            {/* Arms */}
            <rect x="15" y="55" width="15" height="8" fill="#32D3A3" rx="2" />
            <rect x="70" y="55" width="15" height="8" fill="#32D3A3" rx="2" />
            {/* Legs */}
            <rect x="38" y="88" width="8" height="12" fill="#E2E8F0" />
            <rect x="54" y="88" width="8" height="12" fill="#E2E8F0" />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Loading</h2>
          <p className="text-[#32D3A3] text-sm flex items-center gap-1">
            <span className="animate-pulse">Initializing</span>
            <span className="inline-block">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>.</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
            </span>
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 space-y-2">
          <div className="h-2 bg-slate-darker rounded-full overflow-hidden border border-mint/30">
            <div
              className="h-full bg-gradient-to-r from-mint via-teal to-mint rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(52, 211, 153, 0.5)'
              }}
            ></div>
          </div>
          <div className="text-center">
            <span className="text-xs text-mint font-mono">{progress}%</span>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-mint/20 via-teal/20 to-mint/20 blur-2xl -z-10 opacity-0 animate-pulse"></div>
      </div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(52,211,153,.1)_25%,rgba(52,211,153,.1)_26%,transparent_27%,transparent_74%,rgba(52,211,153,.1)_75%,rgba(52,211,153,.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(52,211,153,.1)_25%,rgba(52,211,153,.1)_26%,transparent_27%,transparent_74%,rgba(52,211,153,.1)_75%,rgba(52,211,153,.1)_76%,transparent_77%,transparent)] bg-[length:50px_50px] opacity-20 pointer-events-none"></div>
    </div>
  );
}
