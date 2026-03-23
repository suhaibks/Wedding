'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from './section-reveal';

export function DateRevealScribble() {
  return (
    <SectionReveal className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
      <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Save the date</p>
      <div className="mt-8 inline-flex flex-col items-center">
        <span className="font-serif text-4xl md:text-6xl">12 December 2026</span>
        <svg
          viewBox="0 0 420 80"
          className="mt-4 h-14 w-[min(85vw,420px)] overflow-visible"
          role="img"
          aria-label="Animated scribble underlining the wedding date"
        >
          <motion.path
            d="M12 45 C80 18, 144 68, 212 44 S332 16, 406 42"
            fill="none"
            stroke="#b08b57"
            strokeWidth="4.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d="M42 56 C122 38, 176 66, 255 50 S356 27, 384 52"
            fill="none"
            stroke="#c9a46a"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.95 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          />
        </svg>
      </div>
    </SectionReveal>
  );
}
