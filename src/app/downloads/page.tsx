"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ReleaseCard } from "@/components/ui/release-card";
import { Release } from "@/lib/crawler";
import { Input } from "@/components/ui/input";
import { Search, Folder, ChevronRight } from "lucide-react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function DownloadsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const buildParam = searchParams.get("build");
  const focusParam = searchParams.get("focus");

  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const getInitialFolder = () => {
    if (categoryParam === "rom") return "Custom ROMs";
    if (categoryParam === "kernel") return "Kernels";
    if (categoryParam === "recovery") return "Recoveries";
    return null;
  };
  
  const getInitialSearch = () => {
    let q = "";
    if (buildParam) q += buildParam + " ";
    if (focusParam && focusParam !== "latest" && focusParam !== "stable") q += focusParam;
    return q.trim();
  };

  const [searchQuery, setSearchQuery] = useState(getInitialSearch());
  const [currentFolder, setCurrentFolder] = useState<string | null>(getInitialFolder());

  useEffect(() => {
    async function fetchReleases() {
      try {
        const res = await fetch("/api/releases");
        const data = await res.json();
        setReleases(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchReleases();
  }, []);
  const folders = Array.from(new Set(releases.map(r => r.folderName))).filter(f => f !== "Root").sort();

  const filteredReleases = releases.filter((r) => {
    const matchesSearch = r.projectName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.androidVersion.includes(searchQuery) ||
                          r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
                          
    const matchesFolder = currentFolder === null ? true : r.folderName === currentFolder;
                            
    return matchesSearch && matchesFolder;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Downloads</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Browse all official SourceForge releases for Whyred. Navigate the folders exactly as they appear on the repository.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium">
              <button 
                onClick={() => setCurrentFolder(null)}
                className={`transition-colors ${currentFolder === null ? 'text-primary' : 'text-muted-foreground hover:text-white'}`}
              >
                Root
              </button>
              {currentFolder && (
                <>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <span className="text-primary">{currentFolder}</span>
                </>
              )}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search releases..." 
                className="pl-9 bg-white/5 border-white/10 h-11 focus-visible:ring-primary focus-visible:border-primary"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-48 rounded-xl bg-white/5 animate-pulse border border-white/5" />
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {currentFolder === null && !searchQuery && folders.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {folders.map(folder => {
                    const count = releases.filter(r => r.folderName === folder).length;
                    return (
                      <button
                        key={folder}
                        onClick={() => setCurrentFolder(folder)}
                        className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all text-left"
                      >
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                          <Folder className="w-6 h-6 fill-blue-500/20" />
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-primary transition-colors">{folder}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{count} files</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
              {(!searchQuery && currentFolder === null) && (
                <h2 className="text-xl font-display font-semibold mt-12 mb-6 border-b border-white/10 pb-4">All Files</h2>
              )}

              {filteredReleases.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredReleases.map(release => (
                    <ReleaseCard key={release.id} release={release} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 border border-white/5 rounded-2xl bg-white/[0.02]">
                  <h3 className="text-xl font-semibold mb-2">No files found</h3>
                  <p className="text-muted-foreground">Try navigating to a different folder or adjusting your search.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function DownloadsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    }>
      <DownloadsContent />
    </Suspense>
  );
}
