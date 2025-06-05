'use client'
import Image from "next/image";
import w1 from '@/app/assets/service/w1.jpg'
import w2 from '@/app/assets/service/w2.jpg'
import w3 from '@/app/assets/service/w3.png'
import w4 from '@/app/assets/service/w4.jpg'
import img1 from './img1.jpeg'
import icon from './icon.png'
import w5 from '@/app/assets/service/w5.png'
import w6 from '@/app/assets/service/w6.png'
import w7 from '@/app/assets/service/w7.png'
import w8 from '@/app/assets/service/w8.png'
import w9 from '@/app/assets/service/w9.png'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/languageContext";
import Timeline from "@/components/timeLine";
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

  const functionList = [
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
    <div className="bg-white" style={{ minWidth: 1400 }}>
      <Navbar />
      <div className="pt-10">
        <section className="flex pl-46 pr-46">
          <div className={`relative overflow-hidden w-130 h-110`}>
            <Image
              src={img1}
              alt=""
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="bg-stone-100 pl-10 pr-10 pt-6 flex-1">
            <h3 className="text-3xl font-bold text-black">{t('WEB_DEV_SERVICE')}</h3>
            <p className="mt-5 text-sm text-black leading-6">
              {t('WEB_DEV_DESC')}
            </p>
            <p className="mt-5 text-sm text-black leading-6">
              {t('WEB_DEV_FLOW')}
            </p>
          </div>
        </section>
        <div className="p-15 mt-26 bg-slate-100 mb-20">
          <h3 className="mb-6 text-4xl font-bold text-black text-center">{t('KEY_FEATURES')}</h3>
          <section className="flex justify-center p-5">
            {functionList.map((item =>
              <div className="flex flex-col bg-white items-center ml-5 mr-5 shadow-xl overflow-hidden rounded-lg w-60 px-5 pb-5">
                <div className="h-50 w-60  flex items-center">
                  <Image src={item.img} alt={item.title} className="w-100 h-auto" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-black text-center h-13">{item.title}</h3>
                <div className="mt-4 text-sm text-stone-500 text-center">{item.desc}</div>
              </div>
            ))}
          </section>
        </div>
        <div className="pl-50 pr-50">
          <h3 className="mb-15 text-3xl font-bold text-black text-center">{t('INDUSTRY_APPLICATIONS')}</h3>
          <section className="flex justify-center">
            {scenariosList.map((item =>
              <div className="bg-white ml-5 mr-5 flex flex-col items-center ">
                <Image src={item.img} alt={item.title} className="w-50 h-auto" />
                <h3 className="mt-6 text-sm font-bold text-black text-center text-yellow-500 w-35">{item.title}</h3>
              </div>
            ))}
          </section>
        </div>
          <Timeline steps={steps} icon={icon}/>

      </div>


      <Footer />
    </div>
  );
};

export default Web;
