'use client';
import Image from "next/image";
import { useRef, useState } from 'react';

interface ImageComparisonProps {
  leftImage: any;
  rightImage: any;
}

export default function ImageComparison({ leftImage, rightImage }: ImageComparisonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // 初始位置 50%
  const [isDragging, setIsDragging] = useState(false); // 控制是否正在拖动
    console.log(position);
    
  const handleTouchStart = (e: React.TouchEvent) => {

    e.stopPropagation()

    if ( !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    console.log(x);

    const percentage = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percentage)));
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation()
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    console.log(x,'zz');

    const percentage = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-lg touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseMove={isDragging ? undefined : (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setPosition(Math.max(0, Math.min(100, percentage)));
      }}
    >
      {/* 右图：背景层始终完整展示 */}
      <Image
        src={rightImage}
        alt="Right"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 左图：根据 position clip 展示部分 */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={leftImage}
          alt="Left"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 分割线 */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white"
        style={{ left: `${position}%`, transform: 'translateX(-1px)' }}
      />

      {/* 圆形指示器 */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border border-gray-400 flex items-center justify-center text-sm text-gray-600"
        style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
      >
        ⇆
      </div>
    </div>
  );
}