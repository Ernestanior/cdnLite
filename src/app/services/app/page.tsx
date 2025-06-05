'use client'
import Image from "next/image";
import p1 from '@/app/assets/service/p1.png'
import p2 from '@/app/assets/service/p2.png'
import p3 from '@/app/assets/service/p3.png'
import p4 from '@/app/assets/service/p4.png'
import img1 from './img1.png'
import icon from './icon.png'
import p5 from '@/app/assets/service/p5.png'
import p6 from '@/app/assets/service/p6.png'
import p7 from '@/app/assets/service/p7.png'
import p8 from '@/app/assets/service/p8.png'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/languageContext";
import Timeline from "@/components/timeLine";

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

  const functionList =[
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
    <div className="bg-white" style={{minWidth:1400}}>
      <Navbar />
      <div className="pt-14">
        <section className="flex pl-53 pr-53">
        <div className={`relative overflow-hidden w-550 h-110`}>
          <Image
            src={img1}
            alt=""
            fill
            className="object-cover object-bottom"
          />
        </div>
          <div className="bg-indigo-50 p-8 w-550">
            <h3 className="text-3xl font-bold text-black">{t('MOBILE_WEB_SERVICE')}</h3>
            <p className="mt-5 text-sm text-black leading-7">
            {t('MOBILE_WEB_DESC')}
            </p>
            <p className="mt-5 text-sm text-black leading-7">
            {t('MOBILE_WEB_DETAIL')}
            </p>
          </div>
        </section>
        <div className="p-15 mt-26 bg-slate-100 mb-20">
          <h3 className="mb-6 text-4xl font-bold text-black text-center">{t('KEY_FEATURES')}</h3>
          <section className="flex justify-center p-5">
            {functionList.map((item =>
              <div className="flex flex-col bg-white items-center ml-5 mr-5 shadow-xl overflow-hidden rounded-lg w-60 px-5 py-5">
                <div className="h-50 w-full  flex items-center">
                  <Image src={item.img} alt={item.title} className="w-100 h-auto" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-black text-center h-13">{item.title}</h3>
                <div className="mt-4 text-sm text-stone-500 text-center">{item.desc}</div>
              </div>
            ))}
          </section>
        </div>
          <div className="pl-40 pr-40">

          <h3 className="mb-15 text-3xl font-bold text-black text-center">{t('INDUSTRY_APPLICATIONS')}</h3>
          <section className="flex justify-around ">
          {scenariosList.map((item=>
            <div >
              <Image src={item.img} alt={item.title} className="w-50 h-auto" />
              <h3 className="mt-6 text-sm font-bold text-black text-center text-yellow-500">{item.title}</h3>
              <h3 className="mt-2 text-sm font-bold text-black text-center w-50">{item.desc}</h3>
            </div>
          ))}
          </section>
          </div>

          <Timeline steps={steps} icon={icon}/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
