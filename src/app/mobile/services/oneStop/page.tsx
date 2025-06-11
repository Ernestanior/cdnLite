'use client'
import Image from "next/image";
import img1 from '@/app/assets/service/it/img1.png'
import o1 from '@/app/assets/service/it/o1.png'
import o2 from '@/app/assets/service/it/o2.png'
import o3 from '@/app/assets/service/it/o3.png'
import o4 from '@/app/assets/service/it/o4.png'
import o5 from '@/app/assets/service/it/o5.png'
import o6 from '@/app/assets/service/it/o6.png'
import o7 from '@/app/assets/service/it/o7.png'
import o8 from '@/app/assets/service/it/o8.png'
import o9 from '@/app/assets/service/it/o9.png'
import o10 from '@/app/assets/service/it/o10.png'
import o11 from '@/app/assets/service/it/o11.png'
import Navbar from "@/app/mobile/components/navbar";
import Footer from "@/app/mobile/components/footer";
import { useLanguage } from "@/context/languageContext";
import CardCarousel from "../crousel";
const App = () => {
  const { t } = useLanguage();
  const cards = [
    {
      title: t("DATA_MANAGEMENT_VISUALIZATION"),
      img: o1,
      desc: [t("DATA_MANAGEMENT_VISUALIZATION_DESC_1"),t("DATA_MANAGEMENT_VISUALIZATION_DESC_2"),t("DATA_MANAGEMENT_VISUALIZATION_DESC_3")],
    },
    {
      title: t("CLOUD_ENCRYPTION"),
      img: o2,
      desc: [t("CLOUD_ENCRYPTION_DESC_1"),t("CLOUD_ENCRYPTION_DESC_2"),t("CLOUD_ENCRYPTION_DESC_3")],
    },
    {
      title: t("MONITORING_ALERT"),
      img: o3,
      desc: [t("MONITORING_ALERT_DESC_1"),t("MONITORING_ALERT_DESC_2"),t("MONITORING_ALERT_DESC_3")],
    },
    {
      title: t("MAINTENANCE_OPTIMIZATION"),
      img: o4,
      desc: [t("MAINTENANCE_OPTIMIZATION_DESC_1"),t("MAINTENANCE_OPTIMIZATION_DESC_2"),t("MAINTENANCE_OPTIMIZATION_DESC_3"),t("MAINTENANCE_OPTIMIZATION_DESC_4")],
    },
  ]

  const scenariosList = [
    {
      title: t("ENTERPRISE_TRANSFORMATION"),
      img: o5,
    },
    {
      title: t("CROSS_DEPARTMENT_COLLABORATION"),
      img: o6,
    },
    {
      title: t("HIGH_DEMAND_SOLUTIONS"),
      img: o7,
    },
    {
      title: t("REALTIME_RESPONSE_SYSTEMS"),
      img: o8,
    },
  ]

  const advList = [
    {
      title: t("END_TO_END_INTEGRATION"),
      img: o9,
      desc: t("END_TO_END_DESC"),
    },
    {
      title: t("FULL_SCALE_CUSTOMIZATION"),
      img: o10,
      desc: t("FULL_SCALE_DESC"),
    },
    {
      title: t("COMPREHENSIVE_SECURITY"),
      img: o11,
      desc: t("COMPREHENSIVE_SECURITY_DESC"),
    },
  ]

  return (
    <div className="bg-white" >
      <Navbar />
        <section className="flex flex-col px-5 pt-10">
            <Image
              src={img1}
              alt=""
            />
          <div className="my-10">
            <h3 className="text-3xl font-bold text-black">{t("INFRASTRUCTURE_SOLUTIONS")}</h3>
            <p className="mt-5 text-sm text-black leading-7">
              {t("INFRASTRUCTURE_SOLUTIONS_DESC")}
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
                </div>
              ))}
          </div>
        </section>

        <div className="bg-slate-100 w-full flex flex-col items-center py-15">
          <h2 className="mb-10 text-3xl md:text-3xl font-bold text-gray-800 mb-12">{t("BENEFIT_SOLUTION")}</h2>
          <section className="flex flex-col  justify-between">
            {advList.map((item =>
              <div key={item.title} className="bg-white mb-10 flex flex-col items-center ml-10 mr-10 shadow-lg shadow-stone-200 rounded-lg p-8">
                <Image src={item.img} alt={item.title} className="w-25 h-auto text-orange-500" />
                <h3 className="mt-5 text-lg font-bold text-black text-center ">{item.title}</h3>
                <h3 className="mt-5 text-base w-73 font-bold text-black text-center text-stone-400">{item.desc}</h3>
              </div>
            ))}
          </section>
        </div>
      <Footer />
    </div>
  );
};

export default App;
