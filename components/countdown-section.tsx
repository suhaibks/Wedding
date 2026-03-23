'use client';

import { useEffect, useMemo, useState } from 'react';
import { SectionReveal } from './section-reveal';

const targetDate = new Date('2026-12-12T11:30:00+05:30').getTime();

function getCountdown() {
  const now = Date.now();
  const difference = Math.max(targetDate - now, 0);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getCountdown);

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(getCountdown()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const units = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds }
    ],
    [timeLeft]
  );

  return (
    <SectionReveal className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="invitation-shell rounded-[2.25rem] border border-white/80 px-6 py-10 text-center shadow-invitation md:px-12 md:py-14">
        <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Anticipation</p>
        <h2 className="mt-5 font-serif text-4xl md:text-5xl">Until the day unfolds.</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {units.map((unit) => (
            <div key={unit.label} className="rounded-[1.5rem] border border-[#dcc4a3]/50 bg-white/55 px-4 py-6">
              <div className="font-serif text-4xl md:text-5xl">{String(unit.value).padStart(2, '0')}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.35em] text-charcoal/60">{unit.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
