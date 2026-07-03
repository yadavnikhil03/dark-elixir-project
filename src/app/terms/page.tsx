import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center pt-32 pb-24 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[50vh] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 font-mono text-xs text-purple-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
              LEGAL_DOCUMENT
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-invert prose-purple max-w-none">
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm space-y-12">
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-purple-500 text-sm font-normal">01.</span> Acceptance of Terms
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    By accessing and using Project DarkElixir ("we," "our," or "us"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use or download materials from our platform.
                  </p>
                </div>
              </section>

              <div className="w-full h-px bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-purple-500 text-sm font-normal">02.</span> Standard Developer Disclaimer
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-red-200/90 font-mono text-sm">
                    <p className="mb-2 text-red-400 font-bold">#include &lt;std_disclaimer.h&gt;</p>
                    <p>
                      /* Your warranty is now void. I am not responsible for bricked devices, dead SD cards, thermonuclear war, or you getting fired because the alarm app failed. Please do some research if you have any concerns about features included in these ROMs/Kernels before flashing it! YOU are choosing to make these modifications, and if you point the finger at us for messing up your device, we will laugh at you. */
                    </p>
                  </div>
                  <p>
                    All custom firmwares, ROMs, kernels, recoveries, and modifications hosted or linked on this site are provided "AS IS" without warranty of any kind. Flashing custom software onto your device carries inherent risks, including but not limited to permanent hardware damage ("bricking").
                  </p>
                </div>
              </section>

              <div className="w-full h-px bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-purple-500 text-sm font-normal">03.</span> External Links and Hosted Content
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Project DarkElixir serves as an index and discovery platform for the Redmi Note 5 Pro (Whyred) development community. We do not directly host the majority of the firmware files; rather, we link to trusted third-party repositories (e.g., SourceForge, GitHub, Telegram).
                  </p>
                  <p>
                    We are not responsible for the contents of any linked site, nor do we guarantee the stability, safety, or legality of external downloads. Use them at your own discretion.
                  </p>
                </div>
              </section>

              <div className="w-full h-px bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-purple-500 text-sm font-normal">04.</span> Fair Use and Community Guidelines
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Do not use bots or automated scripts to aggressively scrape or overwhelm our server infrastructure.</li>
                    <li>If you are a developer whose work is featured here and you wish to have it removed or updated, please contact us and we will promptly comply.</li>
                    <li>Always credit the original developers and maintainers when redistributing or modifying their work.</li>
                  </ul>
                </div>
              </section>

              <div className="w-full h-px bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-purple-500 text-sm font-normal">05.</span> Contact
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    For removal requests, suggestions, or other inquiries regarding these terms, contact the project maintainers via Telegram:
                    <a href="https://t.me/project_bd_updates" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 ml-2 transition-colors">
                      @project_bd_updates
                    </a>
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
