'use client'
import Image from "next/image";
import p1 from '@/app/assets/service/app/p1.png'
import p2 from '@/app/assets/service/app/p2.png'
import p3 from '@/app/assets/service/app/p3.png'
import p4 from '@/app/assets/service/app/p4.png'
import p5 from '@/app/assets/service/app/p5.png'
import p6 from '@/app/assets/service/app/p6.png'
import p7 from '@/app/assets/service/app/p7.png'
import p8 from '@/app/assets/service/app/p8.png'
import img1 from '@/app/assets/service/app/img1.png'
import icon from '@/app/assets/service/app/icon1.png'
import Navbar from "@/app/mobile/components/navbar";
import Footer from "@/app/mobile/components/footer";
import { useLanguage } from "@/context/languageContext";
import Timeline from "@/app/mobile/components/timeLine";
import CardCarousel  from "../crousel";

const App = () => {
  const { t } = useLanguage();
  const steps = [
    {
      number: '#1',
      title:t('REQUIREMENT_ANALYSIS'),
      description:t('REQUIREMENT_ANALYSIS_DESC'),
      position: 'top',
    },
    {
      number: '#2',
      title:t('INTERFACE_DESIGN'),
      description:t('INTERFACE_DESIGN_DESC'),
      position: 'bottom',
    },
    {
      number: '#3',
      title:t('INTEGRATED_DEVELOPMENT'),
      description:t('INTEGRATED_DEVELOPMENT_DESC'),
      position: 'top',
    },
    {
      number: '#4',
      title:t('QUALITY_ASSURANCE'),
      description:t('QUALITY_ASSURANCE_DESC'),
      position: 'bottom',
    },
    {
      number: '#5',
      title:t('DEPLOYMENT_SUPPORT'),
      description:t('DEPLOYMENT_SUPPORT_DESC'),
      position: 'top',
    },
  ];

  const cards =[
    {
      title:t('FLEXIBLE_CUSTOMIZATION'),
      img:p2,
      desc:t('FLEXIBLE_CUSTOMIZATION_DESC'),
    },
    {
      title:t('CROSS_PLATFORM_COMPATIBILITY'),
      img:p1,
      desc:t('CROSS_PLATFORM_COMPATIBILITY_DESC'),
    },
    {
      title:t('HIGH_PERFORMANCE'),
      img:p3,
      desc:t('FAST_LOAD_RESPONSIVE_UI'),
    },
    {
      title:t('ENTERPRISE_SECURITY'),
      img:p4,
      desc:t('STRICT_PROTECTION'),
    },
  ]

  const scenariosList = [
    {
      title:t('MOBILE_CORPORATE_WEBSITES'),
      img:p5,
      desc:t('MOBILE_CORPORATE_DESC'),
    },
    {
      title:t('BUSINESS_MARKETING_PLATFORMS'),
      img:p8,
      desc:t('BUSINESS_MARKETING_DESC'),
    },
    {
      title:t('MOBILE_ANALYTICS_PLATFORMS'),
      img:p7,
      desc:t('MOBILE_ANALYTICS_DESC'),
    },
    {
      title:t('ORDER_BILLING_PORTALS'),
      img:p6,
      desc:t('ORDER_BILLING_DESC'),
    },
  ]

  return (
    <div className="bg-white" >
      <Navbar />
      <div className="py-10 px-5">
        <section className="flex flex-col">
          <Image
            src={img1}
            alt=""
          />
          <div className="my-10">
            <h3 className="text-3xl font-bold text-black">{t('MOBILE_WEB_SERVICE')}</h3>
            <p className="mt-5 text-sm text-black leading-7">
            {t('MOBILE_WEB_DESC')}
            </p>
            <p className="mt-5 text-sm text-black leading-7">
            {t('MOBILE_WEB_DETAIL')}
            </p>
          </div>
        </section>
        <CardCarousel cards={cards}/>
        <section className="py-15">
          <h3 className="mb-5 text-3xl font-bold text-black text-center">{t('INDUSTRY_APPLICATIONS')}</h3>
          <div className="grid grid-cols-2 place-items-center">
              {scenariosList.map(((item,index) =>
                <div key={item.title} className={` bg-white mt-10 mx-5 flex flex-col items-center `}>
                  <Image src={item.img} alt={item.title} className="w-40 h-auto" />
                  <h3 className="mt-6 text-sm font-bold text-black text-center text-yellow-500 w-40">{item.title}</h3>
                  <h3 className="mt-2 text-sm font-bold text-black text-center w-40">{item.desc}</h3>
                </div>
              ))}
          </div>
        </section>
      </div>
      <Timeline steps={steps} icon={icon}/>

      <Footer/>
    </div>
  );
};

export default App;
