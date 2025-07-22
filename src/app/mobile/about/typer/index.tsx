'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // 每个字的间隔（毫秒）
  className?: string;
}

export default function TypewriterText({ text, speed = 20, className = '' }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className={` text-left line-font-mono text-base/11 text-white font-bold w-50 sm:w-100 ${className}`}>
      {displayedText}
    </div>
  );
}
