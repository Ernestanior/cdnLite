'use client'
import Image from "next/image";
import e1 from '@/app/assets/service/enterprise/e1.png'
import e2 from '@/app/assets/service/enterprise/e2.png'
import e3 from '@/app/assets/service/enterprise/e3.png'
import e4 from '@/app/assets/service/enterprise/e4.png'
import e5 from '@/app/assets/service/enterprise/e5.png'
import e6 from '@/app/assets/service/enterprise/e6.png'
import e7 from '@/app/assets/service/enterprise/e7.png'
import e8 from '@/app/assets/service/enterprise/e8.png'
import img1 from '@/app/assets/service/enterprise/img1.jpg'
import icon from '@/app/assets/service/enterprise/icon1.png'
import Navbar from "@/app/mobile/components/navbar";
import Footer from "@/app/mobile/components/footer";
import { useLanguage } from "@/context/languageContext";
import Timeline from "@/app/mobile/components/timeLine";
import CardCarousel from "../crousel";
const App = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '#1',
      title: t('DISCOVERY_CONSULTATION'),
      description: t('DISCOVERY_CONSULTATION_DESC'),
      position: 'top',
    },
    {
      number: '#2',
      title: t('SOLUTION_PLANNING'),
      description: t('SOLUTION_PLANNING_DESC'),
      position: 'bottom',
    },
    {
      number: '#3',
      title: t('TECHNICAL_IMPLEMENTATION'),
      description: t('TECHNICAL_IMPLEMENTATION_DESC'),
      position: 'top',
    },
    {
      number: '#4',
      title: t('VALIDATION_REVIEW'),
      description: t('VALIDATION_REVIEW_DESC'),
      position: 'bottom',
    },
    {
      number: '#5',
      title: t('TRAINING_SUPPORT'),
      description: t('TRAINING_SUPPORT_DESC'),
      position: 'top',
    },
  ];

  const cards = [
    {
      title: t("INDUSTRY_CUSTOMIZATION"),
      img: e1,
      desc: t("INDUSTRY_CUSTOMIZATION_DESC"),
    },
    {
      title: t("FULLSTACK_SUPPORT"),
      img: e2,
      desc: t("FULLSTACK_SUPPORT_DESC"),
    },
    {
      title: t("EFFICIENT_TURNAROUND"),
      img: e3,
      desc: t("EFFICIENT_TURNAROUND_DESC"),
    },
    {
      title: t("FLEXIBLE_ARCHITECTURE"),
      img: e4,
      desc: t("FLEXIBLE_ARCHITECTURE_DESC"),
    },
  ]

  const scenariosList = [
    {
      title: t("PROCESS_AUTOMATION"),
      img: e5,
      desc: t("PROCESS_AUTOMATION_DESC"),
    },
    {
      title: t("RESOURCE_OPTIMIZATION"),
      img: e6,
      desc: t("RESOURCE_OPTIMIZATION_DESC"),
    },
    {
      title: t("SUPPLY_CHAIN_MONITORING"),
      img: e7,
      desc: t("SUPPLY_CHAIN_MONITORING_DESC"),
    },
    {
      title: t("OPERATIONAL_DATA_SUPPORT"),
      img: e8,
      desc: t("OPERATIONAL_DATA_SUPPORT_DESC"),
    },
  ]

  return (
    <div className="bg-white">
      <Navbar />
        <section className="flex flex-col px-5 pt-10">
            <Image
              src={img1}
              alt=""
            />
          <div className="my-10">
            <h3 className="text-3xl font-bold text-black">{t("ENTERPRISE_DIGITAL_SOLUTIONS")}</h3>
            <p className="mt-5 text-sm text-black leading-7">
              {t("ENTERPRISE_DIGITAL_DESC")}
            </p>
            <p className="mt-5 text-sm text-black leading-7">
              {t("DIGITAL_SOLUTIONS_DETAIL")}
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
        <Timeline steps={steps} icon={icon}/>

      <Footer />
    </div>
  );
};

export default App;
