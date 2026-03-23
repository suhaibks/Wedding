'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
} & MotionProps;

export function SectionReveal({ children, className, ...props }: SectionRevealProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={defaultVariants}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
