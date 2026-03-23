import { SectionReveal } from './section-reveal';

export function StorySection() {
  return (
    <SectionReveal className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
      <p className="text-xs uppercase tracking-[0.5em] text-gold/80">Our story</p>
      <div className="mt-8 space-y-4 font-serif text-3xl leading-tight text-charcoal md:text-5xl">
        <p>It started with a hello...</p>
        <p>It grew into something beautiful...</p>
        <p>Now, it becomes forever.</p>
      </div>
    </SectionReveal>
  );
}
