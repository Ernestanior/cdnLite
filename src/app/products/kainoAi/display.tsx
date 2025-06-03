import React, { useState, useRef } from 'react';
import i1 from './i1.png'
import i2 from './i2.png'
import Image from "next/image";

const ImageComparisonSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dividerPosition, setDividerPosition] = useState(50); // 百分比

  const handleDrag = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setDividerPosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl aspect-[2/1] overflow-hidden border border-blue-400 rounded-md select-none cursor-col-resize"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleDrag(e);
      }}
      onMouseDown={handleDrag}
    >
      {/* 左图（背景图） */}
        <Image src={i1} alt="Before" className="absolute inset-0 w-full h-full object-cover" />

      {/* 右图（覆盖在左图上，用宽度控制显示） */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${dividerPosition}%` }}
      >

        <Image src={i2} alt="After" className=" w-full h-full object-cover" />

      </div>

      {/* 滑块线 */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-md"
        style={{ left: `${dividerPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-gray-400 flex items-center justify-center">
          <span className="text-gray-500 text-xs">⇆</span>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
