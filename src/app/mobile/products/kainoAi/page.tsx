'use client'
import Image from "next/image";
import k1 from '@/app/assets/products/kainoAi/k1.png'
import k2 from '@/app/assets/products/kainoAi/k2.jpg'
import k3 from '@/app/assets/products/kainoAi/k3.jpg'
import k4 from '@/app/assets/products/kainoAi/k4.jpg'
import avatar1 from '@/app/assets/products/avatar1.png'
import avatar2 from '@/app/assets/products/avatar2.png'
import avatar3 from '@/app/assets/products/avatar3.png'
import img2 from '@/app/assets/products/kainoAi/img2.png'
import img3 from '@/app/assets/products/kainoAi/img3.png'
import i1 from '@/app/assets/products/kainoAi/i1.png'
import i2 from '@/app/assets/products/kainoAi/i2.png'

import Navbar from "@/app/mobile/components/navbar";
import Footer from "@/app/mobile/components/footer";

import { useLanguage } from "@/context/languageContext";
import ImageComparisonSlider from "./display";
import CardCarousel from "../crousel";


const Home = () => {
  const { t } = useLanguage();

  const cards =[
    {
      title:t('AI_DESIGN'),
      img:k1,
      desc:t('AI_DESIGN_DESC'),
    },
    {
      title:t('STYLE_SWITCHING'),
      img:k2,
      desc:t('STYLE_SWITCHING_DESC'),
    },
    {
      title:t('ONECLICK_DESIGN'),
      img:k3,
      desc:t('ONECLICK_DESIGN_DESC'),
    },
    {
      title:t('CROSSDEVICE_SUPPORT'),
      img:k4,
      desc:t('CROSSDEVICE_SUPPORT_DESC'),
    },
  ]
  
  const commentList=[
    {
      avatar:avatar1,
      role:t('HOME_USER'),
      comment:t('QUOTE_HOME_USER'),
    },
    {
      avatar:avatar2,
      role:t('INTERIOR_DESIGNER'),
      comment:t('QUOTE_INTERIOR_DESIGNER'),
    },
    {
      avatar:avatar3,
      role:t('FIRST_TIME_RENOVATOR'),
      comment:t('QUOTE_FIRST_TIME_RENOVATOR'),
    },
  ]

  return (
    <div className="bg-white">
    <Navbar />
    <div className="px-6 py-10">
      <ImageComparisonSlider leftImage={i1} rightImage={i2}/>
      <h3 className="mt-10 mb-10 text-3xl font-bold text-black">{t('KAINOAI_TITLE')}</h3>
      <div className="text-base text-stone-500">
        {t('KAINOAI_DESC_1')}  
      </div>
      <div className="mt-8 text-base text-stone-500">
        {t('KAINOAI_DESC_2')} 
      </div>
      <div className="mt-8 text-base text-stone-500">
        {t('KAINOAI_DESC_3')}
      </div>

    </div>
    <div className="flex justify-center mt-8">
      </div>
    <CardCarousel cards={cards}/>
    <div className="px-5 py-15 bg-stone-100">
      <h3 className="mb-15 text-3xl font-bold text-black text-center">{t('CUSTOMER_STORIES')}</h3>
      <section className="flex flex-col items-between">
        <div className="flex-5">
          <Image src={img2} alt="" className="w-full h-auto" />
        </div>
        <div className="bg-white box-border text-black flex flex-col items-center bg-stone-500 p-8">
          <h3 className="mb-8 text-xl font-bold">{t('STYLE_RENDERING')}</h3>
          <div className="text-sm text-stone-600">{t('STYLE_RENDERING_DESC')}</div>
          <ol>
            {
              commentList.map((item,index)=> <li key={index} className="mb-5 text-lg mt-15 ">
              <div className="flex">
                <Image src={item.avatar} alt="" className="w-12 h-12 ml-3 mr-3" />
                <div className="flex flex-col items-end">
                  <p className="text-xs leading-5 ">
                      {item.comment}
                    </p>
                  <p className="text-xs leading-5 text-stone-500">
                      --{item.role}
                  </p>
                </div>
              </div>
            </li>)
            }
          </ol>
        </div>
      </section>
      <div className="h-50 overflow-hidden relative mt-10">
        <Image src={img3} alt="" className="w-220 h-50 cursor-pointer" />
        <div className="absolute left-0 top-0 h-full flex flex-col w-full items-center justify-center">
          <div className="text-stone-950 text-center text-sm">
            <div className="mb-2">{t('KAINO_BTN_DESC_1')}</div>
            <div className="w-170 mb-6">{t('KAINO_BTN_DESC_2')}</div>
          </div>
          <a href="https://www.kainoai.com/home" target="_blank">
              <div className="w-40 rounded-lg py-3 text-center bg-amber-500 text-white text-sm font-bold cursor-pointer">{t('GET_YOUR_DESIGN')}</div>
          </a>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Home;
