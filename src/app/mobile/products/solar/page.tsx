'use client'
import Image from "next/image";
import avatar1 from '@/app/assets/products/avatar1.png'
import avatar2 from '@/app/assets/products/avatar2.png'
import avatar3 from '@/app/assets/products/avatar3.png'
import img1 from '@/app/assets/products/solar/img1.png'
import img2 from '@/app/assets/products/solar/img2.png'
import a1 from '@/app/assets/products/solar/a1.jpg'
import a2 from '@/app/assets/products/solar/a2.png'
import a3 from '@/app/assets/products/solar/a3.jpg'
import a4 from '@/app/assets/products/solar/a4.png'
import a5 from '@/app/assets/products/solar/a5.png'
import f1 from '@/app/assets/products/solar/b1.png'
import f2 from '@/app/assets/products/solar/b2.png'
import f3 from '@/app/assets/products/solar/b3.png'
import f4 from '@/app/assets/products/solar/b4.png'
import Navbar from "@/app/mobile/components/navbar";
import Footer from "@/app/mobile/components/footer";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useLanguage } from "@/context/languageContext";
import CardCarousel from "../crousel";


const Home = () => {
  const { t } = useLanguage();

  const cards =[
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

  // const scenariosList = [
  //   {
  //     title:t('UTILITY_COMPANIES'),
  //     img:f1,
  //     desc:[t('UTILITY_COMPANIES_DESC1'),t('UTILITY_COMPANIES_DESC2')],
  //   },
  //   {
  //     title:t('SMART_CITIES'),
  //     img:f3,
  //     desc:[t('URBAN_OPT1'),t('URBAN_OPT2')],
  //   },
  //   {
  //     title:t('COMMERCIAL_BUILDINGS'),
  //     img:f2,
  //     desc:[t('COMMERCIAL_BUILDINGS_DESC1'),t('COMMERCIAL_BUILDINGS_DESC2')],
  //   },
  //   {
  //     title:t('INDUSTRIAL_PARKS'),
  //     img:f4,
  //     desc:[t('EFFICIENCY_ENERGY_USAGE1'),t('EFFICIENCY_ENERGY_USAGE2')],
  //   },
  // ]
  
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
    <div className="bg-white">
      <Navbar />
      <div className="p-6">
        <Image src={img1} alt={""} className="h-auto " />
        <h3 className="mt-8 text-3xl font-bold text-black">{t('SOLARENGY_PLATFORM_DESC1')}</h3>
        <div className="mt-8 text-base text-stone-500">
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
      </div>
      <CardCarousel cards={cards}/>
      <div className="px-12 py-15 ">
        <h3 className="text-3xl font-bold text-black text-center">{t('INDUSTRY_APPLICATIONS')}</h3>
        <section className="grid grid-cols-2 gap-16 items-center mt-15">
        {scenariosList.map((item=>
          <div key={item.title} className="h-65 bg-white ">
              <Image src={item.img} alt={item.title} className="w-full h-auto" />
            <h3 className="mt-6 text-base font-bold text-amber-500 text-center h-13">{item.title}</h3>
            <div className="mt-2 text-base font-bold text-black text-center">{item.desc}</div>
          </div>
          ))}
        </section>
      </div>
      <div className="px-5 py-15 bg-stone-100" >
        <h3 className="mb-15 text-3xl font-bold text-black text-center">{t('CUSTOMER_STORIES')}</h3>
        <section className="flex flex-col items-between ">
            <Image src={img2} alt="" className="w-full h-auto" />
          <div className="bg-white box-border text-black flex flex-col items-center bg-stone-500 p-8 " >
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
      <Footer/>
    </div>
  );
};

export default Home;
