import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'none';
}

export function ScrollReveal({
  children,
  delay = 0,
  className = '',
  direction = 'left',
}: ScrollRevealProps) {
  const initial =
    direction === 'left'
      ? { opacity: 0, x: -52 }
      : direction === 'right'
      ? { opacity: 0, x: 52 }
      : direction === 'up'
      ? { opacity: 0, y: 36 }
      : { opacity: 0 };

  const visible =
    direction === 'left' || direction === 'right'
      ? { opacity: 1, x: 0 }
      : direction === 'up'
      ? { opacity: 1, y: 0 }
      : { opacity: 1 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={visible}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
