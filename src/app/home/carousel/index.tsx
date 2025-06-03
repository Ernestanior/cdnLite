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
        { src: s1, title: t('SOLARENGY'),subTitle:"(YangSolar)",desc:t('SOLAR_DESC'),page:"/products/solar" },
        { src: s2, title: t('ELYSIUMCORE'),subTitle:"(ElysiumCore)",desc:t('KTV_DESC'),page:"/products/elysiumCore"},
        { src: s3, title:t('KAINOAI'),subTitle:"(KainoAI)",desc:t('KAINO_DESC'),page:"/products/kainoAi"  },
      ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full overflow-hidden">
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
                <h2 className="text-4xl font-bold text-stone-900 font-mono">{item.title}</h2>
                <h2 className="text-4xl mt-2 font-bold text-stone-900 font-mono" >{item.subTitle}</h2>
                <p className="text-gray-400 mt-12 ">{item.desc}</p>
                <Link href={item.page} className="text-center mt-4 w-40 bg-amber-500 text-white px-4 py-2 rounded">{t('CAROUSEL_BTN')}</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
