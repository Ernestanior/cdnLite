'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode, useEffect, useState } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
}

export function RevealOnScroll({
  children,
  delay = 0,
  yOffset = 40,
}: RevealProps) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
