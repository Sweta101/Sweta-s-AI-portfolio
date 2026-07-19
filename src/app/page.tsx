import { Hero } from "@/components/home/Hero";
import { IdentityStory } from "@/components/home/IdentityStory";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { ScrollToTop } from "@/components/home/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <IdentityStory />

      <section id="ask" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
            Interactive
          </p>
          <h2 className="section-title mt-3">Talk with Sweta’s AI portfolio bot</h2>
          <p className="mt-3 prose-muted">
            Ask about my GTM Engineering, Sales Analyst, or RevOps fit, pipeline results,
            CRM tools, live demos, education, or career journey. I answer from my approved
            portfolio knowledge.
          </p>
        </div>
        <div className="h-[min(640px,75vh)] sm:h-[680px]">
          <ChatPanel embedded className="h-full" />
        </div>
      </section>

      <FeaturedWork />
    </>
  );
}
