import Link from 'next/link';
import { SectionReveal } from './section-reveal';

const events = [
  {
    title: 'Nikah Ceremony',
    detail: '12 December 2026 · 11:30 AM',
    venue: 'Masjid-e-Noor, Bangalore',
    map: 'https://maps.google.com/?q=Masjid-e-Noor+Bangalore'
  },
  {
    title: 'Reception',
    detail: '12 December 2026 · 7:00 PM',
    venue: 'Royal Orchid Palace, Bangalore',
    map: 'https://maps.google.com/?q=Royal+Orchid+Palace+Bangalore'
  }
];

export function EventsSection() {
  return (
    <SectionReveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Wedding events</p>
        <h2 className="mt-5 font-serif text-4xl md:text-5xl">A day of vows and celebration.</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <article
            key={event.title}
            className="invitation-shell rounded-[2rem] border border-white/80 p-8 shadow-soft transition-transform duration-500 hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.38em] text-gold/70">Event</p>
            <h3 className="mt-4 font-serif text-3xl">{event.title}</h3>
            <p className="mt-6 text-lg text-charcoal/80">{event.detail}</p>
            <p className="mt-2 text-base leading-relaxed text-charcoal/68">{event.venue}</p>
            <Link
              href={event.map}
              target="_blank"
              className="mt-8 inline-flex rounded-full border border-[#ccb08b] px-5 py-2 text-sm uppercase tracking-[0.28em] text-charcoal/75 transition hover:border-gold hover:text-charcoal"
            >
              View map
            </Link>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
