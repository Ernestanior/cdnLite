'use client'
import Image from "next/image";
import a1 from '@/app/assets/products/a1.jpg'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.jpg'
import a4 from '@/app/assets/products/a4.png'
import a5 from '@/app/assets/products/a5.png'
import avatar1 from '@/app/assets/products/avatar1.png'
import avatar2 from '@/app/assets/products/avatar2.png'
import avatar3 from '@/app/assets/products/avatar3.png'
import img1 from './img1.png'
import img2 from './img2.png'
import f1 from '@/app/assets/products/b1.png'
import f2 from '@/app/assets/products/b2.png'
import f3 from '@/app/assets/products/b3.png'
import f4 from '@/app/assets/products/b4.png'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useLanguage } from "@/context/languageContext";


const Home = () => {
  const { t } = useLanguage();

  const functionList =[
    {
      title:t('REALTIME_MONITORING_1'),
      img:a2,
      desc:t('REALTIME_MONITORING_DESC'),
    },
    {
      title:t('FAULT_PREDICTION'),
      img:a1,
      desc:t('FAULT_PREDICTION_DESC'),
    },
    {
      title:t('DATA_REPORTS'),
      img:a3,
      desc:t('DATA_REPORTS_DESC'),
    },
    {
      title:t('BILLING_MANAGEMENT'),
      img:a4,
      desc:t('BILLING_MANAGEMENT_DESC'),
    },
    {
      title:t('CROSS_PLATFORM_COMPATIBILITY'),
      img:a5,
      desc:t('CROSS_PLATFORM_COMPATIBILITY_DESC'),
    },
  ]
  
  const scenariosList = [
    {
      title:t('UTILITY_COMPANIES'),
      img:f1,
      desc:t('UTILITY_COMPANIES_DESC'),
    },
    {
      title:t('SMART_CITIES'),
      img:f3,
      desc:t('URBAN_OPT'),
    },
    {
      title:t('COMMERCIAL_BUILDINGS'),
      img:f2,
      desc:t('COMMERCIAL_BUILDINGS_DESC'),
    },
    {
      title:t('INDUSTRIAL_PARKS'),
      img:f4,
      desc:t('EFFICIENCY_ENERGY_USAGE'),
    },
  ]
  
  const commentList=[
    {
      avatar:avatar1,
      comment:t('QUOTE_1')
    },
    {
      avatar:avatar2,
      comment:t('QUOTE_2')
    },
    {
      avatar:avatar3,
      comment:t('QUOTE_3')
    },
  ]
  return (
    <div className="bg-white min-w-7xl">
    <Navbar />
    <div className="bg-white min-w-7xl ">
      <div className="pl-30 pr-30">
        <h3 className="mt-26 text-4xl font-bold text-black">{t('SOLARENGY_PLATFORM_DESC1')}</h3>
        <div className="mt-15 text-base text-stone-500">
          {t('SOLARENGY_PLATFORM_DESC2')}
        </div>
        <div className="mt-8 text-base text-stone-500">
          {t('SOLARENGY_PLATFORM_DESC3')}
        </div>
        <div className="mt-8 text-base text-stone-500">
          {t('SOLARENGY_PLATFORM_DESC4')}
        </div>
        <div className="mt-8 text-base text-stone-500">
          {t('SOLARENGY_PLATFORM_DESC5')}
        </div>
        <Image src={img1} alt={""} className="h-auto mt-10 pl-20 pr-20" />
      </div>
      <div className="p-15 mt-26 bg-slate-100 mb-20">
        <h3 className="text-4xl font-bold text-black 
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
        <h3 className=" text-4xl font-bold text-black text-center">{t('INDUSTRY_APPLICATIONS')}</h3>
        <section className="flex justify-center mt-15">
        {scenariosList.map((item=>
          <div key={item.title} className="bg-white ml-10 mr-10">
              <Image src={item.img} alt={item.title} className="w-full h-auto" />
            <h3 className="mt-6 text-base font-bold text-amber-500 text-center">{item.title}</h3>
            <div className="mt-2 text-base font-bold text-black text-center">{item.desc}</div>
          </div>
          ))}
        </section>
      </div>
      <div className="pl-30 pr-30 mb-10">

      <h3 className="mt-25 mb-15 text-4xl font-bold text-black text-center">{t('CUSTOMER_STORIES')}</h3>
        <section className="bg-white flex justify-between">
          <div className="flex-5">
            <Image src={img2} alt="" className="w-full h-auto" />
          </div>
          <div className="box-border text-black ml-20 w-100 flex flex-col items-center bg-stone-500 p-8 " style={{backgroundColor:"#f5f1e4"}}>
            <h3 className="mb-4 text-xl font-bold">{t('SOLAR_PLATFORM_INTEGRATION')}</h3>
            <div className="text-sm text-stone-600 leading-6">{t('FULL_CYCLE_DATA')}</div>
            <ol>
              {
                commentList.map((item,index)=> <li key={index} className="mb-5 text-lg mt-15 ">
                <div className="flex">
                  <Image src={item.avatar} alt="" className="w-12 h-12 ml-3 mr-3" />
                  <div>
                    <div className="flex">
                      <StarFilled style={{color:"#ffbb00",marginRight:8}}/>
                      <StarFilled style={{color:"#ffbb00",marginRight:8}}/>
                      <StarFilled style={{color:"#ffbb00",marginRight:8}}/>
                      <StarFilled style={{color:"#ffbb00",marginRight:8}}/>
                      <StarOutlined style={{color:"#ffbb00",marginRight:8}}/>
                    </div>
                    <p className="text-sm mt-3 leading-6">
                      {item.comment}
                    </p>
                  </div>
                </div>
              </li>)
              }
            </ol>

          </div>
        </section>
      </div>

        </div>

      <Footer/>
    </div>
  );
};

export default Home;
