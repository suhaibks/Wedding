'use client';

import { AnimatePresence, motion } from 'framer-motion';

type OpeningScreenProps = {
  isOpen: boolean;
  onOpen: () => void;
};

export function OpeningScreen({ isOpen, onOpen }: OpeningScreenProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.button
          type="button"
          aria-label="Open wedding invitation"
          onClick={onOpen}
          className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#efe5d4] px-6 text-left"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 1.05 } }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_40%)]" />
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 18 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.03, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="paper-grain relative h-[min(72vh,560px)] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/70 bg-paper p-5 shadow-invitation md:max-w-lg md:rounded-[2.5rem] md:p-7"
            style={{ perspective: 1400 }}
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-[2rem] border-b border-[#d8c0a0]/60 bg-gradient-to-b from-[#fdf8f1] to-[#f2e4d0] md:rounded-t-[2.5rem]"
              animate={{ rotateX: [0, 0, -112], y: [0, 0, -18] }}
              transition={{ duration: 1.18, ease: [0.65, 0, 0.35, 1], times: [0, 0.18, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.12))]" />
              <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-[#c7a471] to-transparent" />
            </motion.div>

            <motion.div
              className="absolute inset-4 rounded-[1.75rem] border border-[#d4b792]/45 md:inset-5"
              animate={{ boxShadow: ['0 22px 70px rgba(62,45,30,0.08)', '0 36px 100px rgba(62,45,30,0.16)'] }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />

            <motion.div
              animate={{ scale: [1, 1.015, 0.985], rotate: [0, 0.15, -0.25] }}
              transition={{ duration: 1.15, ease: [0.65, 0, 0.35, 1] }}
              className="relative flex h-full flex-col items-center justify-center gap-6 rounded-[1.75rem] border border-white/50 bg-white/38 px-7 text-center backdrop-blur-[2px]"
            >
              <div className="space-y-5">
                <p className="font-serif text-xl leading-relaxed tracking-[0.18em] text-charcoal/90 md:text-2xl" dir="rtl">
                  بِسْمِ ٱللَّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
                </p>
                <div className="space-y-1 text-charcoal">
                  <h1 className="font-serif text-4xl tracking-[0.14em] md:text-5xl">Ayaan Khan</h1>
                  <p className="font-serif text-xl text-gold">&amp;</p>
                  <h2 className="font-serif text-4xl tracking-[0.14em] md:text-5xl">Zara Sheikh</h2>
                </div>
              </div>
              <motion.p
                animate={{ opacity: [0.55, 1, 0.55] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                className="text-xs uppercase tracking-[0.45em] text-charcoal/60"
              >
                Tap to enter
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
