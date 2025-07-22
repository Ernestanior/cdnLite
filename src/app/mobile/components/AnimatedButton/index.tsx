'use client';

import Link from 'next/link';
import styles from './index.module.css';
import React from 'react';

interface AnimatedBorderButtonProps {
  onClick: ()=>void;
  children: React.ReactNode;
}

export default function AnimatedBorderButton({ onClick, children }: AnimatedBorderButtonProps) {
  return (
    <button onClick={onClick} className="cursor-pointer overflow-hidden relative inline-block group ">
      <span className="relative text-white font-semibold px-6 py-2 inline-block bg-black hover:text-black transition-all 
        hover:bg-[#03e9f4]">
        {children}
      </span>
      <span className={`${styles.borderSpan} ${styles.one}`} />
      <span className={`${styles.borderSpan} ${styles.two}`} />
      <span className={`${styles.borderSpan} ${styles.three}`} />
      <span className={`${styles.borderSpan} ${styles.four}`} />
    </button>
  );
}
