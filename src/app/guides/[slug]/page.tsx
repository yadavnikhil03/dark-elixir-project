import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, AlertCircle, CheckCircle2 } from "lucide-react";
import { guidesData } from "@/lib/guides-content";
import { notFound } from "next/navigation";

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = guidesData[resolvedParams.slug];
  
  if (!guide) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-3xl">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Base
          </Link>
          
          <article className="prose prose-invert prose-blue max-w-none">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-white">
              {guide.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              {guide.description}
            </p>
            
            {guide.warning && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 mb-10 flex gap-4 text-destructive-foreground">
                <AlertCircle className="w-6 h-6 shrink-0 mt-0.5 text-destructive" />
                <div className="text-sm leading-relaxed">
                  <strong className="block mb-1 text-destructive font-semibold">CRITICAL WARNING</strong>
                  {guide.warning}
                </div>
              </div>
            )}
            
            <h2 className="text-2xl font-semibold mt-10 mb-6 text-white border-b border-white/10 pb-4">Prerequisites</h2>
            <ul className="space-y-3 text-muted-foreground mb-12 list-none pl-0">
              {guide.prerequisites.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-white border-b border-white/10 pb-4">Step-by-Step Instructions</h2>
            <ol className="space-y-6 text-muted-foreground list-none pl-0 counter-reset-steps">
              {guide.steps.map((step, i) => (
                <li key={i} className="relative pl-10">
                  <span className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-mono text-sm font-bold border border-blue-500/30">
                    {i + 1}
                  </span>
                  <div className="pt-0.5 leading-relaxed">
                    {step}
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
