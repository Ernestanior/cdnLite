'use client';

import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import web1 from '@/app/assets/home/web1.jpg'
import web2 from '@/app/assets/home/web2.jpg'
import web3 from '@/app/assets/home/web3.jpg'
import { ArrowRightOutlined, BookFilled, CloudFilled, EnvironmentOutlined, MailOutlined, PhoneOutlined, ProductFilled, StarFilled } from "@ant-design/icons";
import Link from "next/link";
import HomeCarousel from "./carousel";
import { useLanguage } from "@/context/languageContext";

const Home = () => {
    const { t } = useLanguage();

    const services = [
        {
          icon:<StarFilled />,
          title: t("TAILORED_SOLUTIONS"),
          description: t("TAILORED_SOLUTIONS_DESC"),
        },
        {
          icon: <ProductFilled />,
          title: t("HIGH_QUALITY_DELIVERY"),
          description: t("HIGH_QUALITY_DELIVERY_DESC"),
        },
        {
          icon: <BookFilled />,
          title: t("TECHNICAL_EXPERTISE"),
          description: t("TECHNICAL_EXPERTISE_DESC"),
        },
        {
          icon: <CloudFilled />,
          title: t("INNOVATIVE_SUPPORT"),
          description: t("INNOVATIVE_SUPPORT_DESC"),
        },
      ];

  return (
    <div className="bg-white">
      <Navbar />
      <HomeCarousel />
     <h3 className="mt-16 mb-5 text-3xl font-bold text-black text-center">{t('INDUSTRY_CASES')}</h3>
      <section className="flex flex-col justify-around gap-6 p-10">
        <div className="bg-white">
          <Image src={web2} alt="KainoAI" className="h-65" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black">{t('KAINOAI_CASE')}</h3>
          <p className="mt-2 text-gray-600 text-base">{t('SMART_ENERGY_DESC')}</p>
          <Link href="/products/kainoAi" className="text-sm  text-amber-500" >
            <button className="mt-2 mb-15 w-full border-1 pointer-cursor text-sm hover:text-orange-500 border-amber-500 text-amber-500 py-3 rounded">
              {t('HOW_IT_WORKS')} <ArrowRightOutlined />
            </button>
          </Link>
        </div>
        <div className="bg-white">
          <Image src={web1} alt="SolarEngy" className="h-65" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black">{t('SOLARENGY_CASE')}</h3>
          <p className="mt-2 text-gray-600 text-base">{t('HOSPITALITY_DESC')}</p>
          <Link href="/products/solar" className="text-sm hover:text-orange-500 text-amber-500" >
            <button className="mt-2 mb-15 w-full border-1 text-sm border-amber-500 hover:text-orange-500 text-amber-500 py-3 rounded">
              {t('HOW_IT_WORKS')} <ArrowRightOutlined />
            </button>
          </Link>
        </div>
        <div className="bg-white">
          <Image src={web3} alt="ElysiumCore" className="h-65" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black ">{t('ELYSIUMCORE_CASE')}</h3>
          <p className="mt-2 text-gray-600 text-base">{t('INTERIOR_DESC')}</p>
          <Link href="/products/elysiumCore" className="text-sm hover:text-orange-500 text-amber-500" >
            <button className="mt-2 mb-15 w-full border-1 text-sm border-amber-500 text-amber-500 py-3 rounded">
              {t('HOW_IT_WORKS')} <ArrowRightOutlined />
            </button>
          </Link>
        </div>

      </section>
      <div className="py-18 px-10 bg-stone-100">
        <h3 className="mb-10 text-3xl font-bold text-black">{t('WHY_CHOOSE_US')}</h3>
        <div className="flex flex-col items-center gap-6 ">
          {services.map((service, index) => (
              <div key={service.title} className="bg-white shadow-xl shadow-stone-200 rounded-lg p-6 w-full ">
                  <div className="w-16 h-16 text-2xl flex text-white items-center justify-center bg-amber-500 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mt-4">{service.title}</h3>
                  <div className="h-1 w-15 bg-amber-500 mt-3 mb-4"></div>
                  <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
              </div>
          ))}
          </div>
      </div>


        <Footer/>
    </div>
  );
};

export default Home;
