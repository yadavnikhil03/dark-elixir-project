import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center pt-32 pb-24 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[50vh] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 font-mono text-xs text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              LEGAL_DOCUMENT
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm space-y-12">
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-blue-500 text-sm font-normal">01.</span> Introduction
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Welcome to Project DarkElixir. We respect your privacy and are committed to protecting any information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                  </p>
                  <p>
                    As a community-driven repository for custom Android firmware, we do not require user accounts, nor do we track personally identifiable information (PII) beyond standard server logs necessary for security and functionality.
                  </p>
                </div>
              </section>

              <div className="w-full h-px bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-blue-500 text-sm font-normal">02.</span> Information We Collect
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong>Log Data:</strong> Like many websites, our hosting providers may automatically log standard technical information when you visit. This can include your IP address, browser type, device information, and the pages you request. We use this exclusively for maintaining server security and analyzing broad traffic trends.
                  </p>
                  <p>
                    <strong>Cookies:</strong> We may use essential cookies to remember your preferences (such as light/dark mode). We do not use third-party tracking cookies or advertising pixels.
                  </p>
                  <p>
                    <strong>External Links:</strong> If you click links to download files from third parties (e.g., GitHub, SourceForge, Telegram), please note that those platforms have their own privacy policies. We are not responsible for the data collection practices of external hosts.
                  </p>
                </div>
              </section>

              <div className="w-full h-px bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-blue-500 text-sm font-normal">03.</span> How We Use Your Information
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Any technical data we collect is used solely to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ensure the security and stability of the website.</li>
                    <li>Prevent abuse or DDoS attacks on our infrastructure.</li>
                    <li>Understand general user preferences to improve the site layout and content.</li>
                  </ul>
                  <p>
                    We <strong>never</strong> sell, rent, or share your data with third parties for marketing purposes.
                  </p>
                </div>
              </section>

              <div className="w-full h-px bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-blue-500 text-sm font-normal">04.</span> Changes to this Policy
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our privacy practices.
                  </p>
                </div>
              </section>

              <div className="w-full h-px bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="font-mono text-blue-500 text-sm font-normal">05.</span> Contact Us
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    If you have any questions or concerns about this Privacy Policy, please reach out to us through our official Telegram channel: 
                    <a href="https://t.me/project_bd_updates" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-2 transition-colors">
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
