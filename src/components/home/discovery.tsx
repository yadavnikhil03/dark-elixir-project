"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NEEDS = [
  "Better battery", "Gaming", "Customization", 
  "Root", "Recovery", "ROM", 
  "Performance", "Photography", "Privacy"
];

const DEVICES = ["Redmi Note 5 Pro (whyred)", "Other Devices"];

const ANDROID_VERSIONS = ["Android 14", "Android 13", "Android 12", "Android 11", "Older"];

export function Discovery() {
  const [step, setStep] = useState(0);
  const [device, setDevice] = useState("");
  const [version, setVersion] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const toggleNeed = (need: string) => {
    setNeeds(prev => 
      prev.includes(need) 
        ? prev.filter(n => n !== need)
        : [...prev, need]
    );
  };

  const isNextDisabled = () => {
    if (step === 0 && !device) return true;
    if (step === 1 && !version) return true;
    if (step === 2 && needs.length === 0) return true;
    return false;
  };

  return (
    <section id="discovery" className="py-24 px-4 min-h-screen flex items-center bg-[#050505]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">
            Find what you need.
          </h2>
          <p className="text-white/50 text-lg">
            Tell me about your setup, and I'll recommend the perfect release.
          </p>
        </div>

        <div className="relative min-h-[400px] w-full">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl text-white/80 font-medium">Which device are you using?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DEVICES.map((d) => (
                    <button
                      key={d}
                      onClick={() => { setDevice(d); setTimeout(handleNext, 300); }}
                      className={cn(
                        "flex items-center justify-between p-6 rounded-xl border transition-all duration-300 text-left group",
                        device === d 
                          ? "border-white bg-white/5" 
                          : "border-white/10 hover:border-white/30 hover:bg-white-[0.02]"
                      )}
                    >
                      <span className={cn("text-lg", device === d ? "text-white" : "text-white/70")}>{d}</span>
                      <div className={cn(
                        "w-6 h-6 rounded-full border flex items-center justify-center transition-colors",
                        device === d ? "border-white bg-white text-black" : "border-white/20"
                      )}>
                        {device === d && <Check className="w-4 h-4" />}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl text-white/80 font-medium">Which Android version?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {ANDROID_VERSIONS.map((v) => (
                    <button
                      key={v}
                      onClick={() => { setVersion(v); setTimeout(handleNext, 300); }}
                      className={cn(
                        "p-4 rounded-xl border text-center transition-all duration-300",
                        version === v 
                          ? "border-white bg-white/5 text-white" 
                          : "border-white/10 hover:border-white/30 text-white/70 hover:bg-white-[0.02]"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl text-white/80 font-medium">What are you optimizing for? (Select multiple)</h3>
                <div className="flex flex-wrap gap-3">
                  {NEEDS.map((need) => (
                    <button
                      key={need}
                      onClick={() => toggleNeed(need)}
                      className={cn(
                        "px-6 py-3 rounded-full border transition-all duration-300",
                        needs.includes(need)
                          ? "border-white bg-white text-black font-medium" 
                          : "border-white/10 hover:border-white/30 text-white/70 hover:bg-white-[0.02]"
                      )}
                    >
                      {need}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display text-white mb-2">Analyzing your setup...</h3>
                <p className="text-white/50 mb-8 max-w-md">
                  Looking for the best {needs.join(", ")} optimizations for {device} running {version}.
                </p>
                <button 
                  className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
                  onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Recommendations
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {step < 3 && (
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
            <button
              onClick={handleBack}
              className={cn(
                "px-6 py-2 text-white/50 hover:text-white transition-colors",
                step === 0 && "opacity-0 pointer-events-none"
              )}
            >
              Back
            </button>
            <div className="flex gap-2">
              {[0, 1, 2].map((s) => (
                <div 
                  key={s} 
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors duration-300",
                    s === step ? "bg-white" : s < step ? "bg-white/30" : "bg-white/10"
                  )} 
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={isNextDisabled()}
              className="flex items-center gap-2 px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
