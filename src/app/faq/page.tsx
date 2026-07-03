import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whyred FAQ | Redmi Note 5 Pro Custom ROMs & Modding",
  description: "Frequently asked questions about flashing custom ROMs, kernels, unlocking bootloaders, and passing Play Integrity on the Redmi Note 5 Pro (Whyred).",
  keywords: ["Whyred FAQ", "Redmi Note 5 Pro custom ROM", "Whyred Android 16", "How to install TWRP Whyred", "Pass Play Integrity Whyred", "Best gaming kernel whyred"],
};

const faqs = [
  {
    question: "What is the latest Android version available for Redmi Note 5 Pro (Whyred)?",
    answer: "Thanks to our dedicated developer community, Whyred currently supports up to Android 16 (and experimental Android 17 ports). You can find the latest builds in the Custom ROMs section of our site."
  },
  {
    question: "Do I need to unlock my bootloader before flashing?",
    answer: "Yes. You cannot flash custom recoveries (like TWRP or OrangeFox) or custom ROMs without first officially unlocking your Xiaomi bootloader using the Mi Unlock Tool."
  },
  {
    question: "How do I pass Play Integrity (SafetyNet) on a custom ROM?",
    answer: "Most modern custom ROMs pass Play Integrity out of the box. If yours does not, you can completely fix it by following the exact steps in this comprehensive guide by yadavnikhil03 on GitHub: <a href='https://github.com/yadavnikhil03/Play-integrity-fix-guide' target='_blank' rel='noopener noreferrer' class='text-green-400 hover:underline'>Play-integrity-fix-guide</a>"
  },
  {
    question: "Which custom kernel is best for gaming on Whyred?",
    answer: "Kernels that allow overclocking the Snapdragon 636 up to 2.2GHz (like some specific forks of Mystic or Extended kernels) are best for gaming. However, ensure your thermals are properly managed to avoid throttling."
  },
  {
    question: "Will flashing a custom ROM brick my device?",
    answer: "If you follow the instructions carefully, verify your firmware versions, and use the correct recovery, the risk is minimal. However, flashing is always done at your own risk. Ensure your battery is at least 60% before starting."
  },
  {
    question: "My device is stuck in a bootloop. What do I do?",
    answer: "Don't panic. Boot back into your custom recovery (Hold Volume Up + Power). From there, you can either wipe Data/Cache and re-flash the ROM cleanly, or flash a stock MIUI fastboot ROM via a PC if the recovery is inaccessible."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>?/gm, '')
      }
    }))
  };

  return (
    <div className="bg-[#050505] min-h-screen selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="flex-1 flex flex-col items-center pt-32 pb-24 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[50vh] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="container px-4 mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-white tracking-tight">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Everything you need to know about modifying, flashing, and maintaining your Redmi Note 5 Pro.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3 flex items-start gap-3">
                  <span className="text-green-500 font-mono text-base mt-0.5">Q.</span>
                  {faq.question}
                </h3>
                <div 
                  className="text-muted-foreground leading-relaxed pl-7"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center p-8 bg-blue-500/5 border border-blue-500/10 rounded-3xl">
            <h3 className="text-xl font-semibold text-white mb-2">Still need help?</h3>
            <p className="text-muted-foreground mb-6">
              Join our active Telegram support group to get help from other Whyred users and developers.
            </p>
            <a 
              href="https://t.me/project_bd_support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
            >
              Ask in Telegram
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
