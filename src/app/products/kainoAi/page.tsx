'use client'
import Image from "next/image";
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import a4 from '@/app/assets/products/a4.png'
import icon from './icon.png'
import avatar1 from '@/app/assets/products/avatar1.png'
import avatar2 from '@/app/assets/products/avatar2.png'
import avatar3 from '@/app/assets/products/avatar3.png'
import img1 from './img1.png'
import img2 from './img2.png'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { useLanguage } from "@/context/languageContext";


const Home = () => {
  const { t } = useLanguage();

  const functionList =[
    {
      title:t('AI_DESIGN'),
      img:a2,
      desc:t('AI_DESIGN_DESC'),
    },
    {
      title:t('STYLE_SWITCHING'),
      img:a1,
      desc:t('STYLE_SWITCHING_DESC'),
    },
    {
      title:t('ONECLICK_DESIGN'),
      img:a3,
      desc:t('ONECLICK_DESIGN_DESC'),
    },
    {
      title:t('CROSSDEVICE_SUPPORT'),
      img:a4,
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
    <div className="bg-white min-w-7xl pl-30 pr-30">

      <h3 className="mt-26 mb-10 text-4xl font-bold text-black">{t('KAINOAI_TITLE')}</h3>
      <div className="mt-15 text-base text-stone-500">
        {t('KAINOAI_DESC')}  
      </div>
      <div className="mt-8 text-base text-stone-500">
        {t('KAINOAI_FEATURES')} 
      </div>
      <div className="mt-8 text-base text-stone-500">
        {t('KAINOAI_AI')}
      </div>
      <div className="mt-8 text-base text-stone-500">
        {t('KAINOAI_BENEFITS')} 
      </div>

      <Image src={img1} alt={""} className="w-full h-auto mt-10" />
      <a 
        href="https://www.kainoai.com/home"
        target="_blank"
        className="mt-10 w-full text-center py-3 rounded flex justify-center items-center cursor-pointer"
        style={{
          background: 'linear-gradient(to right, #06daff 45%, #bbf7d0 75%)',
        }}
      >
        <Image src={icon} alt="" className="w-6 mr-4" />
        <h2 className="text-white text-xl font-semibold">{t('GET_STARTED')}</h2>
      </a>


     <h3 className="mt-36 mb-5 text-4xl font-bold text-black 
     text-center">{t('KEY_FEATURES')}</h3>
      <section className="flex justify-center p-10">
        {functionList.map((item=>
        <div className="flex flex-col items-center ml-5 mr-5">
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
          <h3 className="mt-4 text-xl font-bold text-black text-center">{item.title}</h3>
        </div>
        ))}
      </section>
      <h3 className="mt-25 mb-15 text-4xl font-bold text-black text-center">{t('CUSTOMER_STORIES')}</h3>
        <section className="bg-white flex justify-between">
          <div className="flex-5">
            <Image src={img2} alt="" className="w-full h-auto" />
          </div>
          <div className="box-border text-black ml-20 flex-2 flex flex-col items-center bg-stone-500 p-8 " style={{backgroundColor:"#f5f1e4"}}>
            <h3 className="mb-4 text-2xl font-bold">{t('STYLE_RENDERING')}</h3>
            <div className="text-sm text-stone-600 text-center">{t('STYLE_RENDERING_DESC')}</div>
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
        </div>

      <Footer/>
    </div>
  );
};

export default Home;
