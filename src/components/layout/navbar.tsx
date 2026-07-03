"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Downloads", href: "/downloads" },
  { name: "Guides", href: "/guides" },
  { name: "FAQ", href: "/faq" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
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
          <nav className="hidden md:flex gap-1 ml-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5",
                  pathname === link.href ? "text-primary bg-white/5" : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Search className="w-5 h-5" />
          </Button>
          <Button className="gap-2" asChild>
            <Link href="/downloads">
              <Download className="w-4 h-4" />
              Latest Release
            </Link>
          </Button>
        </div>

        <button 
          className="md:hidden text-muted-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-white/5 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-white/5",
                pathname === link.href ? "text-primary bg-white/5" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full mt-4 gap-2" asChild>
            <Link href="/downloads" onClick={() => setMobileMenuOpen(false)}>
              <Download className="w-4 h-4" />
              Get Latest Release
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
