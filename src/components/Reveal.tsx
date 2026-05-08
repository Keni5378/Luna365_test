"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0.6, className }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15, 
        delay,
        duration: 0.8 
      }}
    >
      {children}
    </motion.div>
  );
}
