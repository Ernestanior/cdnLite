"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from './homebg1.png';
import s2 from './homebg2.png';
import s3 from './homebg3.png';
import Link from "next/link";
import { useLanguage } from "@/context/languageContext";



export default function HomeCarousel() {
    const { t } = useLanguage();

    const banners = [
        { src: s3, title: t('SOLARENGY_EX'),subTitle:"(YangSolar)",desc:t('SOLAR_DESC'),page:"/contact" },
        { src: s2, title: t('ELYSIUMCORE_EX'),subTitle:"(ElysiumCore)",desc:t('KTV_DESC'),page:"/contact"},
        { src: s1, title:t('KAINOAI_EX'),subTitle:"(KainoAI)",desc:t('KAINO_DESC'),page:"/contact"  },
      ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
      appendDots: (dots: React.ReactNode) => (
    <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
      <ul className="flex justify-center">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div className="h-1 w-4 bg-white opacity-50 rounded-sm mx-1 transition-all duration-300 group-hover:opacity-100"></div>
  ),
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {banners.map((item, index) => (
          <div key={index} className="relative h-[500px] w-full">
            <Image
              src={item.src}
              alt={''}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-50 flex flex-col p-30 pl-20 text-white">
                <h2 className="text-4xl font-bold text-stone-900 w-120 leading-13">{item.title}</h2>
                <p className="text-gray-400 mt-6 w-100">{item.desc}</p>
                <Link href={item.page} className="text-center mt-4 w-40 bg-amber-500 text-white px-4 py-2 rounded ">{t('CAROUSEL_BTN')}</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
