import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { DisableInspect } from "@/components/ui/disable-inspect";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project DarkElixir | Redmi Note 5 Pro Development",
  description: "The definitive destination for Redmi Note 5 Pro (Whyred) custom ROMs, kernels, recoveries, firmware, and guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        inter.variable,
        outfit.variable,
        "h-full antialiased selection:bg-white/20 selection:text-white"
      )}
    >
      <body className="min-h-full bg-background text-foreground font-sans flex flex-col overflow-x-hidden">
        <DisableInspect />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
