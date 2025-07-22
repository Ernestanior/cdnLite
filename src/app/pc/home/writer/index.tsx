'use client';

import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number; // 每个字出现的时间（ms）
  deletingSpeed?: number; // 每个字删除的时间（ms）
  pause?: number; // 每段文字打完后停顿时间（ms）
  className?: string;
}

export default function TypingText({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pause = 1500,
  className = '',
}: TypingTextProps) {
  const [textIndex, setTextIndex] = useState(0); // 当前句子
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex % texts.length];

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={`${className} my-20 mt-15 text-center`}>
      <span className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
        {displayText}
        </span>
        <span className="animate-pulse text-6xl">|</span>
    </span>
  );
}
