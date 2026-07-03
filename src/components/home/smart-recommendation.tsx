"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Smartphone, Cpu, RotateCcw, Wand2, Package, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  { id: "rom", label: "Custom ROM", icon: Smartphone },
  { id: "kernel", label: "Kernel", icon: Cpu },
  { id: "recovery", label: "Recovery", icon: RotateCcw },
  { id: "magisk", label: "Magisk Module", icon: Wand2 },
  { id: "firmware", label: "Firmware", icon: Package },
];

const needs = {
  rom: [
    { id: "gaming", label: "Need gaming performance?" },
    { id: "battery", label: "Need better battery?" },
    { id: "stable", label: "Need a stable daily driver?" },
    { id: "pixel", label: "Need Pixel experience?" },
    { id: "latest", label: "Need Android 16?" },
  ],
  kernel: [
    { id: "gaming", label: "Overclocking & Gaming" },
    { id: "battery", label: "Maximum Battery Life" },
    { id: "balanced", label: "Balanced Performance" },
  ],
  recovery: [
    { id: "twrp", label: "TWRP (Standard)" },
    { id: "orangefox", label: "OrangeFox (Advanced)" },
  ],
  magisk: [
    { id: "audio", label: "Audio Enhancement" },
    { id: "performance", label: "Performance Tweaks" },
  ],
  firmware: [
    { id: "latest", label: "Latest Global" },
    { id: "custom", label: "Custom Firmware" },
  ]
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
};

export function SmartRecommendation() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<{ category?: string, need?: string, buildType?: string }>({});

  const handleCategorySelect = (id: string) => {
    setSelections({ category: id });
    setStep(1);
  };

  const handleNeedSelect = (id: string) => {
    if (selections.category === "rom") {
      setSelections(prev => ({ ...prev, need: id }));
      setStep(2);
    } else {
      const params = new URLSearchParams();
      if (selections.category) params.set("category", selections.category);
      params.set("focus", id);
      router.push(`/downloads?${params.toString()}`);
    }
  };

  const handleBuildTypeSelect = (id: string) => {
    const params = new URLSearchParams();
    if (selections.category) params.set("category", selections.category);
    if (selections.need) params.set("focus", selections.need);
    params.set("build", id);
    router.push(`/downloads?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative mt-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="relative z-10 bg-[#0a0a0a]/80 border border-white/10 rounded-2xl backdrop-blur-3xl shadow-2xl overflow-hidden group">
        <div className="w-full h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            setup_engine_v2.sh
          </div>
          <div className="w-16" />
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl font-display font-semibold tracking-tight text-white flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
                {step === 0 ? "Target Selection" : step === 1 ? "Parameter Configuration" : "Build Variant"}
              </h2>
              <p className="text-muted-foreground font-mono text-sm mt-2">
                {step === 0 
                  ? "> Select target component for configuration..." 
                  : step === 1
                  ? "> Define primary optimization metric..."
                  : "> Select preferred build variant..."}
              </p>
            </div>
            <div className="font-mono text-xs flex items-center gap-2 text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              STATUS: {step === 0 ? "AWAITING INPUT" : "CONFIGURING"}
            </div>
          </div>

          <div className="min-h-[300px] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step-0"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-col gap-3"
                >
                  {questions.map((q) => {
                    const Icon = q.icon;
                    return (
                      <motion.button
                        variants={itemVariants}
                        key={q.id}
                        onClick={() => handleCategorySelect(q.id)}
                        className={cn(
                          "relative w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group/btn",
                          "bg-white/[0.02] border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 overflow-hidden"
                        )}
                      >
                        <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center group-hover/btn:border-blue-500/30 transition-colors">
                            <Icon className="w-5 h-5 text-white/70 group-hover/btn:text-blue-400" />
                          </div>
                          <div className="text-left">
                            <div className="font-mono text-xs text-muted-foreground mb-1">
                              [ {q.id.toUpperCase()} ]
                            </div>
                            <span className="font-medium text-white/90 text-lg tracking-wide group-hover/btn:text-white">{q.label}</span>
                          </div>
                        </div>
                        
                        <div className="opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">
                          <ArrowRight className="w-5 h-5 text-blue-400" />
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}

              {step === 1 && selections.category && (
                <motion.div
                  key="step-1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-col gap-3"
                >
                  {(needs as any)[selections.category]?.map((need: any) => (
                    <motion.button
                      variants={itemVariants}
                      key={need.id}
                      onClick={() => handleNeedSelect(need.id)}
                      className={cn(
                        "relative w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 group/need",
                        "bg-white/[0.02] border border-white/5 hover:bg-purple-500/10 hover:border-purple-500/30 overflow-hidden"
                      )}
                    >
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-purple-500 opacity-0 group-hover/need:opacity-100 transition-opacity duration-300" />
                      
                      <div className="text-left flex items-center gap-4">
                        <span className="font-mono text-purple-400/50 group-hover/need:text-purple-400 transition-colors">
                          {">"}
                        </span>
                        <span className="font-medium text-white/90 text-lg tracking-tight group-hover/need:text-white">
                          {need.label}
                        </span>
                      </div>
                      
                      <div className="font-mono text-xs text-purple-400 opacity-0 group-hover/need:opacity-100 transition-opacity">
                        EXECUTE_QUERY
                      </div>
                    </motion.button>
                  ))}
                  
                  <motion.div variants={itemVariants} className="mt-8 border-t border-white/10 pt-6">
                    <Button 
                      variant="ghost" 
                      className="font-mono text-xs gap-2 text-muted-foreground hover:text-white"
                      onClick={() => setStep(0)}
                    >
                      <ArrowLeft className="w-3 h-3" />
                      cd ..
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {step === 2 && selections.category === "rom" && (
                <motion.div
                  key="step-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-col gap-3"
                >
                  <motion.button
                    variants={itemVariants}
                    onClick={() => handleBuildTypeSelect('vanilla')}
                    className={cn(
                      "relative w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 group/need",
                      "bg-white/[0.02] border border-white/5 hover:bg-green-500/10 hover:border-green-500/30 overflow-hidden"
                    )}
                  >
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-green-500 opacity-0 group-hover/need:opacity-100 transition-opacity duration-300" />
                    <div className="text-left flex items-center gap-4">
                      <span className="font-mono text-green-400/50 group-hover/need:text-green-400 transition-colors">{">"}</span>
                      <div>
                        <span className="font-medium text-white/90 text-lg tracking-tight group-hover/need:text-white block">Vanilla (AOSP)</span>
                        <span className="font-mono text-xs text-muted-foreground">Pure Android. No Google Apps pre-installed.</span>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-green-400 opacity-0 group-hover/need:opacity-100 transition-opacity">
                      EXECUTE_QUERY
                    </div>
                  </motion.button>

                  <motion.button
                    variants={itemVariants}
                    onClick={() => handleBuildTypeSelect('gapps')}
                    className={cn(
                      "relative w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 group/need",
                      "bg-white/[0.02] border border-white/5 hover:bg-green-500/10 hover:border-green-500/30 overflow-hidden"
                    )}
                  >
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-green-500 opacity-0 group-hover/need:opacity-100 transition-opacity duration-300" />
                    <div className="text-left flex items-center gap-4">
                      <span className="font-mono text-green-400/50 group-hover/need:text-green-400 transition-colors">{">"}</span>
                      <div>
                        <span className="font-medium text-white/90 text-lg tracking-tight group-hover/need:text-white block">GApps Included</span>
                        <span className="font-mono text-xs text-muted-foreground">Google Play Services & Core Apps pre-installed.</span>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-green-400 opacity-0 group-hover/need:opacity-100 transition-opacity">
                      EXECUTE_QUERY
                    </div>
                  </motion.button>
                  
                  <motion.div variants={itemVariants} className="mt-8 border-t border-white/10 pt-6">
                    <Button 
                      variant="ghost" 
                      className="font-mono text-xs gap-2 text-muted-foreground hover:text-white"
                      onClick={() => setStep(1)}
                    >
                      <ArrowLeft className="w-3 h-3" />
                      cd ..
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
