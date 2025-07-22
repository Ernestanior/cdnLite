'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  end: number;
  leftText?:string;
  rightText?:string;
  duration?: number; // 秒数
  className?: string;
}

export function CountUp({ end,leftText,rightText, duration = 2, className = '' }: CountUpProps) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const frameRate = 60;
    const totalFrames = duration * frameRate;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const current = Math.floor(progress * end);
      setCount(current);
      if (progress === 1) clearInterval(counter);
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className={className}>
      <span className='className="text-emerald-300 text-7xl mb-10"'>{leftText}</span>
      {count.toLocaleString()}
      <span className='className="text-emerald-300 text-7xl mb-10"'>{rightText}</span>

    </div>
  );
}
