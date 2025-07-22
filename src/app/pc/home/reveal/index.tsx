// components/Reveal.tsx
'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Reveal({ children,zIndex=1 }: { children: React.ReactNode,zIndex:number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <div className={`sticky top-20 z-${zIndex}`}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
                visible: {
                clipPath: 'inset(0% 0% 0% 0%)',
                opacity: 1,
                transition: { duration: 1.2, ease: "easeOut" },
                },
            }}
            >
            {children}
          </motion.div>
        
    </div>

  );
}
