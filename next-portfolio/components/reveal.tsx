'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-56px' }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
