"use client";

import { motion } from "framer-motion";

export function Story() {
  return (
    <section className="py-32 px-4 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-[100%] blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-8">
            Built for enthusiasts, <br />
            by an enthusiast.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-lg md:text-xl text-white/60 font-light leading-relaxed"
        >
          <p>
            When I first started developing for Android, it wasn't about adding features. It was about reclaiming performance. The Redmi Note 5 Pro (whyred) is legendary hardware, but extracting its full potential requires meticulous kernel tuning and clean ROM compilation.
          </p>
          <p>
            I build Android software because I believe in device longevity. Every custom ROM, recovery, and kernel released here goes through extensive real-world testing. No marketing buzzwords, no exaggerated claims—just solid, reliable code that makes your device feel brand new.
          </p>
          <p>
            Over the years, the community has downloaded my releases hundreds of thousands of times across Pling and SourceForge. That trust is earned through transparency, consistent updates, and a genuine passion for the open-source Android ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10"
        >
          <div>
            <div className="text-4xl font-display font-medium text-white mb-2">4+</div>
            <div className="text-sm text-white/50">Years Active</div>
          </div>
          <div>
            <div className="text-4xl font-display font-medium text-white mb-2">500k</div>
            <div className="text-sm text-white/50">Downloads</div>
          </div>
          <div>
            <div className="text-4xl font-display font-medium text-white mb-2">12</div>
            <div className="text-sm text-white/50">Projects</div>
          </div>
          <div>
            <div className="text-4xl font-display font-medium text-white mb-2">99%</div>
            <div className="text-sm text-white/50">Stability</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
