"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050505] pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer mb-6">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/[0.02] overflow-hidden group-hover:border-white/30 transition-colors duration-500">
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
                 <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] group-hover:scale-[2] group-hover:bg-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-500" />
              </div>
              <div className="flex items-baseline tracking-tighter">
                <span className="font-display font-semibold text-xl text-white tracking-tight">
                  Project
                </span>
                <span className="font-display font-light text-xl text-white/40 ml-1">
                  DarkElixir
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
              The definitive destination for Redmi Note 5 Pro (Whyred) custom ROMs, kernels, recoveries, firmware, and guides. Built for the Android community.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com/yadavnikhil03" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18v4"/></svg>
              </a>
              <a href="https://t.me/project_bd_updates" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary mb-4">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/downloads" className="hover:text-primary transition-colors">Downloads</Link></li>
              <li><Link href="/guides" className="hover:text-primary transition-colors">Installation Guides</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><a href="https://sourceforge.net/projects/aosp-project-whyred/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">SourceForge</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary mb-4">Categories</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/downloads?category=custom-roms" className="hover:text-primary transition-colors">Custom ROMs</Link></li>
              <li><Link href="/downloads?category=kernels" className="hover:text-primary transition-colors">Kernels</Link></li>
              <li><Link href="/downloads?category=recoveries" className="hover:text-primary transition-colors">Recoveries</Link></li>
              <li><Link href="/downloads?category=firmware" className="hover:text-primary transition-colors">Firmware</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1.5">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="text-white font-semibold tracking-wide">Project DarkElixir</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="font-mono text-[10px] uppercase tracking-wider opacity-60">Independently engineered. Zero affiliation with Xiaomi Inc.</span>
          </div>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
