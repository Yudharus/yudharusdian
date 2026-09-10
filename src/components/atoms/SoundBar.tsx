import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export const SoundBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorNodesRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const secondsRef = useRef(0);

  // Synthesize subtle ambient sound via Web Audio API
  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (!isPlaying) {
      // Start ambient synth chords (soft peaceful ambient pad in C major / pentatonic)
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Frequencies for a soft deep ambient chord (C2, G2, E3, B3)
      const freqs = [65.41, 98.0, 164.81, 246.94];
      oscillatorNodesRef.current = freqs.map((f) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        osc.connect(masterGain);
        osc.start();
        return osc;
      });

      setIsPlaying(true);
    } else {
      // Fade out
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      }
      setTimeout(() => {
        oscillatorNodesRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        oscillatorNodesRef.current = [];
        setIsPlaying(false);
      }, 500);
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        secondsRef.current += 1;
        const mins = Math.floor(secondsRef.current / 60)
          .toString()
          .padStart(2, '0');
        const secs = (secondsRef.current % 60).toString().padStart(2, '0');
        setCurrentTime(`${mins}:${secs}`);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <aside
      aria-label="Ambient sound controls"
      className="fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 sm:gap-4 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-zinc-900/85 backdrop-blur-xl border border-white/15 shadow-2xl transition-all hover:border-white/30 max-w-[92vw]"
    >
      {/* Play / Pause Pill */}
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause ambient audio' : 'Play ambient audio'}
        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer shrink-0"
      >
        {isPlaying ? (
          <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
        ) : (
          <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
        )}
      </button>

      {/* Visualizer & Track status */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-0.5 sm:gap-1 h-3">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className={`w-0.5 rounded-full bg-emerald-400 transition-all ${
                isPlaying ? 'animate-pulse' : 'h-1 opacity-30'
              }`}
              style={{
                height: isPlaying ? `${Math.sin(i + 1) * 8 + 10}px` : '4px',
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        <div className="text-[10px] sm:text-[11px] font-mono text-zinc-300 whitespace-nowrap">
          <span className="text-zinc-500 uppercase">AMBIENCE / </span>
          <span>{isPlaying ? 'ACTIVE' : 'MUTED'}</span>
        </div>

        <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 hidden xs:inline-block">
          {currentTime}
        </span>
      </div>

      {/* Mute icon toggle */}
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Mute ambient sound' : 'Unmute ambient sound'}
        className="text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-1"
      >
        {isPlaying ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
      </button>
    </aside>
  );
};
