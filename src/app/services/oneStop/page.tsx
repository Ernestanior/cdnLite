'use client'
import Image from "next/image";
import img1 from './img1.png'
import o1 from '@/app/assets/service/o1.png'
import o2 from '@/app/assets/service/o2.png'
import o3 from '@/app/assets/service/o3.png'
import o4 from '@/app/assets/service/o4.png'
import o5 from '@/app/assets/service/o5.png'
import o6 from '@/app/assets/service/o6.png'
import o7 from '@/app/assets/service/o7.png'
import o8 from '@/app/assets/service/o8.png'
import o9 from '@/app/assets/service/o9.png'
import o10 from '@/app/assets/service/o10.png'
import o11 from '@/app/assets/service/o11.png'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/languageContext";
const App = () => {
  const { t } = useLanguage();

  const functionList = [
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
    <div className="bg-white min-w-7xl " style={{ minWidth: 1500 }}>
      <Navbar />
      <div className="pt-14">
        <section className="flex pl-30 pr-30">
          <div className={`relative overflow-hidden w-550 h-100`}>
            <Image
              src={img1}
              alt=""
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="bg-stone-100 pl-10 pr-10 pt-10 w-500">
            <h3 className="text-3xl font-bold text-black">{t("INFRASTRUCTURE_SOLUTIONS")}</h3>
            <p className="mt-5 text-sm text-black leading-7">
              {t("INFRASTRUCTURE_SOLUTIONS_DESC")}
            </p>
          </div>
        </section>
        <div className="py-15 mt-26 bg-slate-100 mb-20">
          <h3 className="mb-6 text-3xl font-bold text-black text-center">{t('KEY_FEATURES')}</h3>
          <section className="flex justify-center p-5">
            {functionList.map((item =>
              <div key={item.title} className="flex flex-col bg-white items-center ml-5 mr-5 shadow-xl overflow-hidden rounded-lg w-73 p-5">
                <div className="h-50 w-full  flex items-center">
                  <Image src={item.img} alt={item.title} className="w-100 h-auto" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-black text-center h-18">{item.title}</h3>
                <ol>
                  {item.desc.map((item)=><li className="mt-2 text-sm text-stone-500 text-center">· {item}</li>)}
                </ol>
              </div>
            ))}
          </section>
        </div>
        <div className="flex flex-col items-center">
          <h3 className=" mb-15 text-3xl font-bold text-black text-center">{t("INDUSTRY_APPLICATIONS")}</h3>
          <section className="flex justify-between">
            {scenariosList.map((item =>
              <div key={item.title} className="bg-white ml-7 mr-7 ">
                <Image src={item.img} alt={item.title} className="w-65 h-auto" />
                <h3 className="mt-6 text-sm font-bold text-black text-center text-yellow-500 w-65">{item.title}</h3>
              </div>
            ))}
          </section>
        </div>

        <div className="mt-26 bg-slate-100 w-full flex flex-col items-center py-15">
          <h2 className="mb-10 text-3xl md:text-3xl font-bold text-gray-800 mb-12">{t("DEV_FLOW")}</h2>
          <section className="flex justify-between">
            {advList.map((item =>
              <div key={item.title} className="bg-white flex flex-col items-center ml-10 mr-10 shadow-xl shadow-stone-200 rounded-lg p-8">
                <Image src={item.img} alt={item.title} className="w-25 h-auto text-orange-500" />
                <h3 className="mt-5 text-sm font-bold text-black text-center ">{item.title}</h3>
                <h3 className="mt-5 text-sm w-73 font-bold text-black text-center text-stone-400">{item.desc}</h3>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
