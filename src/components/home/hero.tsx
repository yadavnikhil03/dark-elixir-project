"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Crafting Android Experiences
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-white mb-6"
        >
          Engineering precision <br className="hidden md:block" />
          <span className="text-white/40">for your device.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          Discover premium custom ROMs, high-performance kernels, and essential tools built specifically for the Redmi Note 5 Pro (whyred) and the broader Android ecosystem.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById("discovery")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex items-center justify-center w-16 h-16 rounded-full bg-white text-black transition-colors hover:bg-white/90"
        >
          <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </motion.button>
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
      </div>
    </section>
  );
}
