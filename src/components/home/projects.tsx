"use strict";
import { ExternalLink, Star, Download, Cpu, Battery, Search } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">
              Featured Releases.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl">
              Hand-crafted software compiled with precision for optimal performance, battery life, and stability.
            </p>
          </div>
          
          <div className="relative group w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/30 group-focus-within:text-white/70 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full md:w-64 bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <div 
      className="group flex flex-col bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-500"
    >
      <div className="h-48 relative overflow-hidden bg-[#111]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
             style={{ background: `linear-gradient(45deg, ${project.color}20, transparent)` }} />
        
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="px-2.5 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white/90">
            {project.category}
          </span>
          {project.isNew && (
            <span className="px-2.5 py-1 text-xs font-medium bg-white text-black rounded-full">
              New Update
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col relative z-20 -mt-12">
        <div className="w-16 h-16 rounded-2xl bg-[#171717] border border-white/10 flex items-center justify-center shadow-2xl mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500">
          <project.icon className="w-8 h-8 text-white/80" />
        </div>

        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-white/50 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-white/40 mb-6">
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>{project.downloads}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{project.rating}</span>
          </div>
          <div>v{project.version}</div>
        </div>

        <a 
          href={project.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 font-medium text-sm"
        >
          Download from {project.host}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    id: "rom-lineage",
    title: "LineageOS 21",
    category: "Custom ROM",
    description: "Pure, stable, and highly optimized LineageOS build for whyred. Focuses on absolute stability and battery life with minimal bloatware.",
    version: "21.0-20240315",
    downloads: "125k+",
    rating: "4.9",
    color: "#16a34a",
    icon: Cpu,
    host: "SourceForge",
    downloadUrl: "https://sourceforge.net",
    isNew: true
  },
  {
    id: "kernel-dark",
    title: "Dark Elixir Kernel",
    category: "Kernel",
    description: "A heavily modified custom kernel prioritizing extreme battery life without compromising on UI smoothness. EAS optimized.",
    version: "v4.5-stable",
    downloads: "89k+",
    rating: "4.8",
    color: "#6366f1",
    icon: Battery,
    host: "Pling",
    downloadUrl: "https://pling.com",
    isNew: false
  },
  {
    id: "rom-evo",
    title: "Evolution X",
    category: "Custom ROM",
    description: "Pixel feel with extreme customization capabilities. Includes the latest security patches and custom monet engine implementations.",
    version: "8.3",
    downloads: "210k+",
    rating: "4.9",
    color: "#ec4899",
    icon: Star,
    host: "SourceForge",
    downloadUrl: "https://sourceforge.net",
    isNew: false
  }
];
