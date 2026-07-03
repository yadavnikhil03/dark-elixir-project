import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { BookOpen, AlertTriangle, ShieldCheck, Settings } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const guides = [
  {
    slug: "unlock-bootloader",
    title: "Unlock Bootloader",
    description: "The essential first step to flashing any custom ROM or recovery on your Redmi Note 5 Pro.",
    icon: ShieldCheck,
    difficulty: "Beginner",
  },
  {
    slug: "install-twrp",
    title: "Install Custom Recovery (TWRP/OrangeFox)",
    description: "Learn how to flash a custom recovery using fastboot to install ZIP files and make backups.",
    icon: Settings,
    difficulty: "Intermediate",
  },
  {
    slug: "flash-rom",
    title: "How to Flash a Custom ROM",
    description: "Step-by-step guide on wiping partitions, flashing firmware, and installing your new Android ROM.",
    icon: BookOpen,
    difficulty: "Intermediate",
  },
  {
    slug: "fix-bootloop",
    title: "Fix Bootloop & Soft Brick",
    description: "Phone stuck on the Mi logo? Don't panic. Learn how to recover your device safely.",
    icon: AlertTriangle,
    difficulty: "Advanced",
  },
];

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Knowledge Base</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Comprehensive guides to safely modify your Redmi Note 5 Pro. Read all warnings carefully before proceeding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Card key={guide.slug} className="bg-white/[0.02] border-white/5 hover:border-white/10 transition-colors flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/5 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-muted-foreground border border-white/5">
                        {guide.difficulty}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold font-display tracking-tight text-primary">
                      {guide.title}
                    </h2>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">
                      {guide.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-primary" asChild>
                      <Link href={`/guides/${guide.slug}`}>
                        Read Guide
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
