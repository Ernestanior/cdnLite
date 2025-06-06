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

import Navbar from "@/app/pc/components/navbar";
import Footer from "@/app/pc/components/footer";

import { useLanguage } from "@/context/languageContext";
import ImageComparisonSlider from "./display";


const Home = () => {
  const { t } = useLanguage();

  const functionList =[
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
    <div className="bg-white min-w-7xl">
    <Navbar />
    <div className="bg-white min-w-7xl">
    <div className="pl-30 pr-30">
      <h3 className="mt-26 mb-10 text-4xl font-bold text-black">{t('KAINOAI_TITLE')}</h3>
      <div className="mt-15 text-base text-stone-500">
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
      <ImageComparisonSlider leftImage={i1} rightImage={i2}/>
      </div>
    <div className="p-15 mt-26 bg-slate-100 mb-20">
     <h3 className="mb-5 text-4xl font-bold text-black 
     text-center">{t('KEY_FEATURES')}</h3>
      <section className="flex justify-center p-10">
        {functionList.map((item=>
        <div key={item.title} className="flex flex-col items-center ml-5 mr-5">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Image src={item.img} alt={item.title} className="w-full h-auto" />
              </div>
              <div className="flip-card-back">
                <div>{item.desc}</div>
              </div>
            </div>
          </div>
          <h3 className="mt-6 text-xl font-bold text-black text-center">{item.title}</h3>
        </div>
        ))}
      </section>
    </div>
    <div className="pl-30 pr-30">
      <h3 className="mt-25 mb-15 text-4xl font-bold text-black text-center">{t('CUSTOMER_STORIES')}</h3>
      <section className="bg-white flex justify-between">
        <div className="flex-5">
          <Image src={img2} alt="" className="w-full h-auto" />
        </div>
        <div className="box-border text-black ml-20 w-100 flex flex-col items-center bg-stone-500 p-8 " style={{backgroundColor:"#f5f1e4"}}>
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
      <div className="h-60 overflow-hidden relative mb-10">
        <Image src={img3} alt="" className="w-320 h-auto mt-15 mb-15 cursor-pointer" />
        <div className="absolute left-15 top-29 h-20 flex w-full">
          <div className="text-stone-950">
            <div className="mb-5">{t('KAINO_BTN_DESC_1')}</div>
            <div className="w-170">{t('KAINO_BTN_DESC_2')}</div>
          </div>
          <a href="https://www.kainoai.com/home" target="_blank">
            <div className="absolute top-[-100] right-80">
              <div className="w-40 rounded-lg py-3 text-center bg-amber-500 text-white absolute top-28 left-[20%]  text-sm font-bold cursor-pointer">{t('GET_YOUR_DESIGN')}</div>
            </div>
          </a>
        </div>
      </div>
    </div>


        </div>

      <Footer/>
    </div>
  );
};

export default Home;
