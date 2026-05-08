"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Expand point of light to Moon (0s - 0.5s)
    const t1 = setTimeout(() => setPhase(1), 500);
    // Phase 2: Telemetry & Waxing to Full (0.5s - 1.2s)
    const t2 = setTimeout(() => setPhase(2), 1200);
    // Phase 3: Ping and Logo Transition (1.2s - 2.0s)
    const t3 = setTimeout(() => setPhase(3), 2000);
    // Phase 4: Complete and unmount (2.0s - 2.5s)
    const t4 = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono text-[10px] sm:text-xs text-[#D4AF37] pointer-events-none"
        >
          {/* Phase 2: Telemetry Data */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 0.8 : 0 }}
            className="absolute inset-0 p-4 flex flex-col justify-between"
          >
            <div className="flex justify-between">
              <div className="animate-pulse">INIT LUNA_SEQ...</div>
              <div className="text-right">LOC: 12.9716° N<br/>(BANGALORE)</div>
            </div>
            <div className="flex justify-between items-end">
              <div>PHASE: 100% FULL</div>
              <div className="text-right">EST: 2019</div>
            </div>
          </motion.div>

          {/* Phase 1 & 2: Moon Sphere */}
          {phase < 2 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex items-center justify-center bg-black"
              style={{
                boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)",
              }}
            >
              <motion.img 
                src="/moon.png"
                alt="Realistic Moon"
                animate={{ rotate: 20 }}
                transition={{ duration: 2, ease: "linear" }}
                className="absolute inset-0 w-full h-full object-cover scale-110"
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.7, delay: 0.5, ease: "linear" }}
                className="absolute inset-0 bg-black/90 rounded-full z-10"
                style={{ filter: "blur(8px)" }}
              />
            </motion.div>
          )}

          {/* Phase 3: Ping and Logo */}
          {phase === 2 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 0.8, times: [0, 0.4, 1], ease: "easeInOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Ping Glow */}
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-[#D4AF37]"
                style={{ filter: "blur(20px)" }}
              />
              
              {/* Logo Text */}
              <motion.div 
                initial={{ letterSpacing: "0em", opacity: 0 }}
                animate={{ letterSpacing: "0.2em", opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center justify-center relative z-10"
              >
                <span className="text-4xl md:text-6xl font-bold tracking-widest text-white uppercase">
                  Luna <span className="gold-gradient">365</span>
                </span>
                <span className="text-sm md:text-base tracking-[0.4em] uppercase text-gray-300 mt-2">
                  Bar and Kitchen
                </span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
