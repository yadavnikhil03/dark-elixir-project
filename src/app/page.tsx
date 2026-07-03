import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmartRecommendation } from "@/components/home/smart-recommendation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Zap, Shield, Sparkles, Smartphone, Layers, Cpu } from "lucide-react";
import Link from "next/link";
import { MorphText } from "@/components/ui/morph-text";
import { LegacyStory } from "@/components/home/legacy-story";
import { MaskedAvatars } from "@/components/ui/masked-avatars";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-white/20 selection:text-white">
      <Navbar />
      
      <main className="flex flex-col items-center">
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-[#050505]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full flex justify-center pointer-events-none select-none overflow-hidden opacity-30">
            <span className="text-[22vw] font-display font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">
              WHYRED
            </span>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium text-white/80 backdrop-blur-md shadow-2xl hover:bg-white/[0.05] transition-colors cursor-pointer group">
              <span className="flex h-2 w-2 rounded-full bg-green-500 relative">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50" />
              </span>
              Android 16 Support Now Available
              <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
            </div>
            <div className="flex flex-col items-center w-full mb-12">
              <MorphText 
                words={["CUSTOM ROMS", "KERNELS", "RECOVERIES", "FIRMWARE"]}
                subtext="THE DEFINITIVE REDMI NOTE 5 PRO HUB"
                className="text-white w-full"
                textClassName="text-white font-display drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                subtextClassName="text-white/50 tracking-[0.3em] font-medium mt-12 md:mt-16 text-sm sm:text-base md:text-lg"
                fontSize="clamp(2.5rem, 8vw, 7rem)"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Keeping the legendary Whyred alive. All the custom ROMs, kernels, and guides you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center sm:w-auto">
              <Button size="lg" className="h-14 px-8 text-base gap-2 bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.1)] rounded-xl" asChild>
                <Link href="/downloads">
                  Explore Downloads
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all w-full sm:w-auto rounded-xl backdrop-blur-sm" asChild>
                <Link href="/guides">
                  Read the Docs
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <LegacyStory />
        <section className="w-full py-24 relative z-20 bg-[#050505]">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-primary tracking-tight">Hardware Unbound.</h2>
              <p className="text-muted-foreground text-lg max-w-xl">Push the silicon beyond manufacturer limits. Everything you need to keep Whyred flying.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-white/5 blur-[120px] rounded-full pointer-events-none" />
              <a href="https://t.me/project_bd_updates" target="_blank" rel="noopener noreferrer" className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-500 group block cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-48 md:w-64 h-32 md:h-40 bg-black/60 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md shadow-2xl transform group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:rotate-2 transition-all duration-500">
                  <div className="w-full h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="p-3 font-mono text-[10px] md:text-xs text-blue-400 leading-tight">
                    <p className="text-white/60 mb-1">$ repo sync -c -j8</p>
                    <p className="text-green-400">Fetching project platform/build...</p>
                    <p className="text-white/60 mt-1">$ mka bacon</p>
                    <p className="animate-pulse mt-1">Building Android 16 for whyred...</p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="max-w-[60%]">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors duration-500">
                      <Smartphone className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-white tracking-tight flex items-center gap-2">
                      Android 16 Ports
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-muted-foreground">
                      Experience the bleeding edge. Our community compiles the newest Android releases for Whyred faster than officially supported devices.
                    </p>
                  </div>
                </div>
              </a>
              <a href="https://sourceforge.net/projects/aosp-project-whyred/files/southwest/" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-500 group block cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute -bottom-6 -right-6 w-40 h-32 flex items-end gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  {[40, 65, 45, 80, 55, 95, 75, 100].map((h, i) => (
                    <div 
                      key={i}
                      className="w-4 bg-gradient-to-t from-purple-500/20 to-purple-500 rounded-t-sm transition-all duration-1000 group-hover:animate-pulse"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-colors duration-500">
                      <Zap className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white tracking-tight flex items-center gap-2">
                      Custom Kernels
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Overclock the SD636 to 2.2GHz. Tuned schedulers for sustained gaming performance.
                    </p>
                  </div>
                </div>
              </a>
              <a href="https://github.com/yadavnikhil03/Play-integrity-fix-guide" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-500 group block cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-green-500/10 rounded-full flex items-center justify-center group-hover:border-green-500/30 transition-colors duration-500">
                  <div className="absolute inset-0 bg-green-500/5 rounded-full animate-pulse" />
                  <Shield className="w-12 h-12 text-green-500/20 group-hover:text-green-500/50 transition-colors duration-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-colors duration-500">
                      <Shield className="w-5 h-5 text-white group-hover:text-green-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white tracking-tight flex items-center gap-2">
                      Play Integrity
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Pass device certification effortlessly. No banking app lockouts on custom firmware.
                    </p>
                  </div>
                </div>
              </a>
              <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-500 group flex flex-col md:flex-row items-center gap-8">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex-1 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:bg-zinc-100/10 group-hover:border-zinc-100/20 transition-colors duration-500">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white tracking-tight">Smart Setup Engine</h3>
                  <p className="text-muted-foreground text-sm max-w-sm mb-6">
                    Not sure what to flash? Answer two questions and our engine will configure the perfect ROM, Kernel, and Magisk modules for you.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-white group/link hover:no-underline" asChild>
                    <Link href="#recommend">
                      Launch Engine <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                <div className="flex-1 w-full h-full min-h-[150px] bg-black/40 rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-white/50" />
                    </div>
                    <div className="w-8 h-px bg-white/10" />
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center animate-pulse">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="w-8 h-px bg-white/10" />
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-white/50" />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section id="recommend" className="w-full py-24 relative z-20 bg-black border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
          <div className="container px-4 mx-auto relative z-10">
            <SmartRecommendation />
          </div>
        </section>
        <section className="w-full py-24 relative z-20 bg-[#050505] border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="container px-4 mx-auto relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-white tracking-tight">Meet the Team.</h2>
            <p className="text-muted-foreground text-lg max-w-xl mb-16">
              The developers and maintainers behind the Project.
            </p>
            
            <MaskedAvatars 
              size={80}
              className="mb-12"
              avatars={[
                { avatar: "https://github.com/Arijit78.png", name: "Arijit Saha" },
                { avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luffy&style=circle", name: "Chethan Gowda" },
                { avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ultron&style=circle", name: "Ultron" },
                { avatar: "https://github.com/yadavnikhil03.png", name: "Nikhil Yadav" }
              ]}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto w-full">
              <div className="flex flex-col items-center">
                <span className="font-medium text-white mb-1">Arijit Saha</span>
                <span className="text-xs font-mono text-blue-400">Lead Developer</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium text-white mb-1">Chethan Gowda</span>
                <span className="text-xs font-mono text-blue-400">Core Tester</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium text-white mb-1">Ultron</span>
                <span className="text-xs font-mono text-blue-400">Senior Tester</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium text-white mb-1">Nikhil Yadav</span>
                <span className="text-xs font-mono text-blue-400">Web Developer</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
