"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "@/context/languageContext";



export default function CardCarousel({cards}:any) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useLanguage();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      centerPadding: "15%", // 留出两侧空间
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      afterChange: (current: number) => setActiveIndex(current),
      appendDots: (dots: React.ReactNode) => (
        <div className="mt-4">
          <ul className="flex justify-center [&>li.slick-active>div]:bg-orange-500">{dots}</ul>
        </div>
      ),
      customPaging: () => (
        <div className="h-2 w-2 rounded-full bg-gray-400 mx-1 transition-all duration-300"/>
      ),
    };
  return (
    <div className="px-4 py-15 bg-slate-50">
        <h3 className="text-3xl mb-5 font-bold text-black text-center">{t('KEY_FEATURES')}</h3>
      <Slider {...settings}>
        {cards.map((item:any, index:number) => {
          const isActive = index === activeIndex;
          return (
            <div key={index} className="px-2">
              <div
                className={`
                  bg-white h-100 my-10 rounded-2xl p-6 flex flex-col items-center text-center
                  transform transition-all duration-500
                  ${isActive ? "scale-100" : "scale-90 opacity-70"}
                `}
                style={{boxShadow:"0 0 15px 0 #ccc"}}
              >
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>);}