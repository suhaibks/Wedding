import { SectionReveal } from './section-reveal';

export function BlessingSection() {
  return (
    <SectionReveal className="mx-auto max-w-4xl px-6 pb-24 pt-20 text-center md:pb-32 md:pt-28">
      <div className="mx-auto max-w-3xl rounded-[2.25rem] border border-white/80 bg-white/45 px-8 py-12 shadow-soft backdrop-blur-sm">
        <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Blessing</p>
        <p className="mt-8 font-serif text-3xl leading-relaxed md:text-4xl">
          Barakallahu lakuma wa baraka ‘alaykuma wa jama‘a baynakuma fi khayr.
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-charcoal/60">
          Your presence is our greatest gift.
        </p>
      </div>
    </SectionReveal>
  );
}
