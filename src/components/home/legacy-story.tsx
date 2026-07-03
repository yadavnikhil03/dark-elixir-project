"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const Story3DScene = dynamic(
  () => import("./story-3d-scene").then((mod) => mod.Story3DScene),
  { ssr: false }
);

const timelineEvents = [
  {
    year: "2018",
    title: "The Genesis",
    description: "Xiaomi launched the Redmi Note 5 Pro with Android 7.1 Nougat. A legendary mid-ranger was born, setting the standard for performance on a budget.",
  },
  {
    year: "2020",
    title: "The Official End",
    description: "Official support ended at Android 9 Pie. For most smartphones, this is where the story ends. But Whyred was different.",
  },
  {
    year: "2021 — 2025",
    title: "The Open Source Rebellion",
    description: "The community refused to let it die. Relentless developers pushed Android 10, 11, 12, 13, 14, and 15 against all odds, bringing modern features to aging hardware.",
  },
  {
    year: "2026",
    title: "The Impossible",
    description: "8 years later. Android 16. Still breathing. Still performing. A true testament to open-source dedication and the brilliance of the community.",
  }
];

export function LegacyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-[#050505] relative w-full py-32 z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />
      <Story3DScene scrollYProgress={scrollYProgress} />
      
      <div ref={containerRef} className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-4">
              An 8-Year Legacy.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              The story of a device that defied obsolescence, powered entirely by community passion.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full" />
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.6)] rounded-full z-10"
            style={{ height: lineHeight }}
          />
          <div className="flex flex-col gap-16 md:gap-32 relative z-20">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }: { event: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col md:flex-row items-start md:items-center w-full relative",
        isEven ? "md:flex-row-reverse" : ""
      )}
    >
      <div className={cn(
        "hidden md:flex flex-1 justify-center items-center opacity-20 hover:opacity-40 transition-opacity duration-700",
        isEven ? "justify-start pl-16" : "justify-end pr-16"
      )}>
        <div className="w-full max-w-[280px] h-[180px] rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden relative group-hover:border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
          <div className="p-4 font-mono text-[10px] text-white/40 leading-relaxed">
            {index === 0 && (
              <>
                $ fastboot oem unlock<br/>
                (bootloader) Unlocking device...<br/>
                (bootloader) OKAY [ 0.042s]<br/>
                $ fastboot flash recovery twrp.img<br/>
                Sending 'recovery' (28416 KB)...<br/>
                OKAY [ 0.923s]<br/>
                Writing 'recovery'...<br/>
                OKAY [ 0.124s]
              </>
            )}
            {index === 1 && (
              <>
                TARGET_ARCH := arm64<br/>
                TARGET_ARCH_VARIANT := armv8-a<br/>
                TARGET_CPU_ABI := arm64-v8a<br/>
                TARGET_CPU_ABI2 :=<br/>
                TARGET_CPU_VARIANT := generic<br/>
                <br/>
                # EOL Reached. Deprecating.
              </>
            )}
            {index === 2 && (
              <>
                commit 8f9a2b4<br/>
                Author: Community &lt;dev@aosp.org&gt;<br/>
                Date:   Sat May 14 02:21:40 2022 +0000<br/>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;whyred: update common kernel<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;whyred: switch to dynamic partitions<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;whyred: inline perf config
              </>
            )}
            {index === 3 && (
              <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
                <div className="w-16 h-16 rounded-full border-4 border-dashed border-white/20 animate-[spin_10s_linear_infinite]" />
                <span className="tracking-widest mt-2">SYSTEM_ALIVE</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-[2px] border-white/20 -translate-x-1/2 mt-[6px] md:mt-0 z-20" />
      <motion.div 
        className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-purple-500 -translate-x-1/2 mt-[6px] md:mt-0 z-30 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
      />
      <div className={cn(
        "flex-1 pl-12 md:pl-0 w-full",
        isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
      )}>
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/[0.03] border border-white/10 text-white/80 text-sm font-mono mb-4 tracking-wider">
          {event.year}
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4 tracking-tight">
          {event.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}
