'use client'
import Image from "next/image";
import e1 from '@/app/assets/service/e1.png'
import e2 from '@/app/assets/service/e2.png'
import e3 from '@/app/assets/service/e3.png'
import e4 from '@/app/assets/service/e4.png'
import img1 from './img1.jpg'
import img2 from './img2.png'

import e5 from '@/app/assets/service/e5.png'
import e6 from '@/app/assets/service/e6.png'
import e7 from '@/app/assets/service/e7.png'
import e8 from '@/app/assets/service/e8.png'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/languageContext";
import Timeline from "@/components/timeLine";
const App = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '#1',
      title:t('DISCOVERY_CONSULTATION'),
      description:t('DISCOVERY_CONSULTATION_DESC'),
      position: 'top',
    },
    {
      number: '#2',
      title:t('SOLUTION_PLANNING'),
      description:t('SOLUTION_PLANNING_DESC'),
      position: 'bottom',
    },
    {
      number: '#3',
      title:t('TECHNICAL_IMPLEMENTATION'),
      description:t('TECHNICAL_IMPLEMENTATION_DESC'),
      position: 'top',
    },
    {
      number: '#4',
      title:t('VALIDATION_REVIEW'),
      description:t('VALIDATION_REVIEW_DESC'),
      position: 'bottom',
    },
    {
      number: '#5',
      title:t('TRAINING_SUPPORT'),
      description:t('TRAINING_SUPPORT_DESC'),
      position: 'top',
    },
  ];

  const functionList =[
    {
      title:t("INDUSTRY_CUSTOMIZATION"),
      img:e1,
      desc:t("INDUSTRY_CUSTOMIZATION_DESC"),
    },
    {
      title:t("FULLSTACK_SUPPORT"),
      img:e2,
      desc:t("FULLSTACK_SUPPORT_DESC"),
    },
    {
      title:t("EFFICIENT_TURNAROUND"),
      img:e3,
      desc:t("EFFICIENT_TURNAROUND_DESC"),
    },
    {
      title:t("FLEXIBLE_ARCHITECTURE"),
      img:e4,
      desc:t("FLEXIBLE_ARCHITECTURE_DESC"),
    },
  ]

  const scenariosList = [
    {
      title:t("PROCESS_AUTOMATION"),
      img:e5,
      desc:t("PROCESS_AUTOMATION_DESC"),
    },
    {
      title:t("RESOURCE_OPTIMIZATION"),
      img:e6,
      desc:t("RESOURCE_OPTIMIZATION_DESC"),
    },
    {
      title:t("SUPPLY_CHAIN_MONITORING"),
      img:e7,
      desc:t("SUPPLY_CHAIN_MONITORING_DESC"),
    },
    {
      title:t("OPERATIONAL_DATA_SUPPORT"),
      img:e8,
      desc:t("OPERATIONAL_DATA_SUPPORT_DESC"),
    },
  ]

  return (
    <div className="bg-white" style={{minWidth:1400}}>
      <Navbar />
      <div className="pl-25 pr-25 pt-14">
        <section className="flex">
        <div
          className={`relative overflow-hidden w-550 h-100`}
        >
          <Image
            src={img1}
            alt=""
            fill
            className="object-cover object-bottom"
          />
        </div>
          <div className="bg-stone-100 w-550 p-8">
            <h3 className="text-3xl font-bold text-black">{t("ENTERPRISE_DIGITAL_SOLUTIONS")}</h3>
            <p className="mt-5 text-sm text-black leading-7">
            {t("ENTERPRISE_DIGITAL_DESC")}
            </p>
            <p className="mt-5 text-sm text-black leading-7">
            {t("DIGITAL_SOLUTIONS_DETAIL")}
            </p>
          </div>
        </section>


        <h3 className="mt-36 mb-5 text-3xl font-bold mt-2 text-black text-center">{t("KEY_FEATURES")}</h3>
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
            <h3 className="text-base font-bold text-black text-center">{item.title}</h3>
          </div>
          ))}
          </section>
          <h3 className="mt-36 mb-15 text-3xl font-bold text-black text-center">{t("INDUSTRY_APPLICATIONS")}</h3>
          <section className="flex justify-between ">
          {scenariosList.map((item=>
            <div className="bg-white ml-5 mr-5">
                <Image src={item.img} alt={item.title} className="w-170 h-auto" />
                <h3 className="mt-6 text-sm font-bold text-black text-center text-yellow-500">{item.title}</h3>
                <h3 className="mt-2 text-sm font-bold text-black text-center ">{item.desc}</h3>
            </div>
            ))}
          </section>
          <div className="w-full flex flex-col items-center py-10 bg-white">
          <h2 className="mt-36 mb-5 text-3xl md:text-3xl font-bold text-gray-800 mb-2">{t("DEV_FLOW")}</h2>
          <Timeline steps={steps}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
