"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from '@/app/assets/home/c1.png';
import c2 from '@/app/assets/home/c2.png';
import c3 from '@/app/assets/home/c3.png';
import a1 from '@/app/assets/home/a1.png';
import a2 from '@/app/assets/home/a2.png';
import a3 from '@/app/assets/home/a3.png';

import Link from "next/link";
import { useLanguage } from "@/context/languageContext";

export default function HomeCarousel() {
    const { t } = useLanguage();

    const banners = [
        { src: a3, title: t('SOLARENGY_EX'),subTitle:"(YangSolar)",desc:t('SOLAR_DESC'),page:"/contact" },
        { src: a2, title: t('ELYSIUMCORE_EX'),subTitle:"(ElysiumCore)",desc:t('KTV_DESC'),page:"/contact"},
        { src: a1, title:t('KAINOAI_EX'),subTitle:"(KainoAI)",desc:t('KAINO_DESC'),page:"/contact"  },
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
        <ul className="flex justify-center [&>li.slick-active>div]:opacity-100">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-1 w-4 bg-white opacity-50 rounded-sm mx-1 transition-all duration-300 "></div>
    ),
    };

  return (
    <div className="w-full home-carousel">
      <Slider {...settings}>
        {banners.map((item, index) => (
          <div key={index} className="p-10 pt-20  h-[700px] bg-sky-100" >
            <div className="flex flex-col items-center">
              <h2 className="text-3xl text-center font-bold text-stone-900 leading-13">{item.title}</h2>
              <p className="text-gray-400 text-center mt-6">{item.desc}</p>
              <div className="text-center mt-5 bg-amber-500 text-white mx-12 py-2 px-10 rounded ">
                <Link href={item.page} >{t('CAROUSEL_BTN')}</Link>
              </div>
              <Image
                src={item.src}
                alt={''}
                className="h-70 w-65 mt-10"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
