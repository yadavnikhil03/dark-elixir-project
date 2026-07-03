"use client";

import { Release } from "@/lib/crawler";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar, HardDrive, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReleaseCard({ release }: { release: Release }) {
  return (
    <Card className="group relative overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-white/10 flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-semibold text-xl tracking-tight text-primary">
            {release.projectName}
          </h3>
          <div className="flex gap-2 flex-wrap justify-end">
            {release.buildType && release.buildType !== "Unknown" && (
              <span className={cn(
                "px-2.5 py-1 rounded-full text-xs font-bold border",
                release.buildType.toLowerCase() === "gapps" 
                  ? "bg-green-500/10 text-green-400 border-green-500/20"
                  : "bg-blue-500/10 text-blue-400 border-blue-500/20"
              )}>
                {release.buildType.toUpperCase()}
              </span>
            )}
            {release.androidVersion !== "Unknown" && (
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-xs font-medium text-primary border border-white/5">
                A{release.androidVersion}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-white/70 border border-white/5">
              {release.category}
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground font-mono">
          {release.releaseVersion !== "Unknown" ? `v${release.releaseVersion}` : "Latest Build"}
        </p>
      </CardHeader>
      
      <CardContent className="pb-6">
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-white/40" />
            <span>{new Date(release.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-white/40" />
            <span>{release.size}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Smartphone className="w-4 h-4 text-white/40" />
            <span>
              Maintained by {release.maintainer}
            </span>
          </div>
        </div>
      </CardContent>
      <div className="flex-1" />

      <CardFooter className="pt-2">
        <Button className="w-full gap-2 bg-white text-black hover:bg-white/90 font-medium group/btn" asChild>
          <a href={release.officialSFLink} target="_blank" rel="noreferrer">
            <Download className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
            Download from SourceForge
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
