'use client'
import Image from "next/image";
import w1 from '@/app/assets/service/web/w1.jpg'
import w2 from '@/app/assets/service/web/w2.jpg'
import w3 from '@/app/assets/service/web/w3.png'
import w4 from '@/app/assets/service/web/w4.jpg'
import w5 from '@/app/assets/service/web/w5.png'
import w6 from '@/app/assets/service/web/w6.png'
import w7 from '@/app/assets/service/web/w7.png'
import w8 from '@/app/assets/service/web/w8.png'
import w9 from '@/app/assets/service/web/w9.png'
import img1 from '@/app/assets/service/web/img1.jpeg'
import icon from '@/app/assets/service/web/icon1.png'
import Navbar from "@/app/mobile/components/navbar";
import Footer from "@/app/mobile/components/footer";
import { useLanguage } from "@/context/languageContext";
import Timeline from "@/app/mobile/components/timeLine";
import CardCarousel from "../crousel";
const Web = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '#1',
      title: t('REQUIREMENT_GATHERING'),
      description: t('REQUIREMENT_GATHERING_DESC'),
      position: 'top',
    },
    {
      number: '#2',
      title: t('PROTOTYPING'),
      description: t('PROTOTYPING_DESC'),
      position: 'bottom',
    },
    {
      number: '#3',
      title: t('CODE_DEVELOPMENT'),
      description: t('CODE_DEVELOPMENT_DESC'),
      position: 'top',
    },
    {
      number: '#4',
      title: t('DEPLOYMENT_TESTING'),
      description: t('DEPLOYMENT_TESTING_DESC'),
      position: 'bottom',
    },
    {
      number: '#5',
      title: t('LAUNCH_SUPPORT'),
      description: t('LAUNCH_SUPPORT_DESC'),
      position: 'top',
    },
  ];

  const cards = [
    {
      title: t('TAILORED_FUNCTIONALITY'),
      img: w2,
      desc: t('TAILORED_FUNCTIONALITY_DESC'),
    },
    {
      title: t('SCALABLE_ARCHITECTURE'),
      img: w4,
      desc: t('SCALABLE_ARCHITECTURE_DESC'),
    },
    {
      title: t('HIGH_QUALITY_DELIVERY'),
      img: w3,
      desc: t('HIGH_QUALITY_DELIVERY_DESC'),
    },
    {
      title: t('SECURITY_ASSURANCE'),
      img: w1,
      desc: t('SECURITY_ASSURANCE_DESC'),
    },
  ]

  const scenariosList = [
    {
      title: t('ENTERPRISE_DEVELOP'),
      img: w8,
    },
    {
      title: t('DATA_VISUALIZATION'),
      img: w7,
    },
    {
      title: t('ECOMMERCE_RETAIL'),
      img: w6,
    },
    {
      title: t('LOGISTICS_OPERATIONS'),
      img: w5,
    },
    {
      title: t('CUSTOM_PORTALS'),
      img: w9,
    }
  ]

  return (
    <div className="bg-white">
      <Navbar />
        <section className="flex flex-col px-5 py-10">
            <Image
              src={img1}
              alt=""
              className="w-full"
            />
          <div className="mt-10 flex-1">
            <h3 className="text-3xl font-bold text-black">{t('WEB_DEV_SERVICE')}</h3>
            <p className="mt-5 text-sm text-black leading-6">
              {t('WEB_DEV_DESC')}
            </p>
            <p className="mt-5 text-sm text-black leading-6">
              {t('WEB_DEV_FLOW')}
            </p>
          </div>
        </section>
        <CardCarousel cards={cards}/>
        <section className="my-15">
          <h3 className="mb-5 text-3xl font-bold text-black text-center">{t('INDUSTRY_APPLICATIONS')}</h3>
          <div className="grid grid-cols-2 place-items-center">
              {scenariosList.map(((item,index) =>
                <div key={item.title} className={`${index==scenariosList.length-1 && 'col-span-full'} bg-white mt-10 mx-5 flex flex-col items-center `}>
                  <Image src={item.img} alt={item.title} className="w-40 h-auto" />
                  <h3 className="mt-6 text-sm font-bold text-black text-center text-yellow-500 w-40">{item.title}</h3>
                </div>
              ))}
          </div>
        </section>

          <Timeline steps={steps} icon={icon}/>



      <Footer />
    </div>
  );
};

export default Web;
