"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#030303]"
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,178,36,.2),transparent_32%)]" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex flex-col items-center gap-5"
          >
            <div className="relative h-24 w-24 rounded-full border border-primary/25 bg-primary/10 shadow-glow">
              <motion.div
                className="absolute inset-3 rounded-full border border-dashed border-primary/70"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <div className="absolute inset-0 grid place-items-center font-display text-2xl font-bold text-primary">MA</div>
            </div>
            <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-accent via-primary to-[#ffe7a3]"
                initial={{ width: "8%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            <p className="font-display text-xs uppercase tracking-[0.4em] text-primary/80">Initializing AI Portfolio</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
