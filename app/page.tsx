'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BlessingSection } from '@/components/blessing-section';
import { CountdownSection } from '@/components/countdown-section';
import { DateRevealScribble } from '@/components/date-reveal-scribble';
import { EventsSection } from '@/components/events-section';
import { GallerySection } from '@/components/gallery-section';
import { OpeningScreen } from '@/components/opening-screen';
import { StorySection } from '@/components/story-section';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <OpeningScreen isOpen={isOpen} onOpen={() => setIsOpen(true)} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <section className="px-6 pb-10 pt-16 md:pb-16 md:pt-24">
              <div className="paper-grain invitation-shell mx-auto max-w-5xl rounded-[2.5rem] border border-white/80 px-6 py-12 shadow-invitation md:px-12 md:py-16">
                <p className="text-center font-serif text-lg leading-relaxed tracking-[0.16em] text-charcoal/85 md:text-2xl" dir="rtl">
                  بِسْمِ ٱللَّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
                </p>
                <div className="mt-10 text-center">
                  <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Wedding invitation</p>
                  <h1 className="mt-6 font-serif text-5xl leading-none md:text-7xl">Ayaan Khan</h1>
                  <p className="mt-4 font-serif text-2xl text-gold md:text-3xl">&amp;</p>
                  <h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Zara Sheikh</h2>
                </div>
              </div>
            </section>

            <StorySection />
            <EventsSection />
            <DateRevealScribble />
            <GallerySection />
            <CountdownSection />
            <BlessingSection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
