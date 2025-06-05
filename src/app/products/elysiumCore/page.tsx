'use client'
import Image from "next/image";
import g1 from '@/app/assets/products/g1.png'
import g2 from '@/app/assets/products/g2.png'
import g3 from '@/app/assets/products/g3.png'
import g4 from '@/app/assets/products/g4.png'
import g5 from '@/app/assets/products/g5.png'
import avatar1 from '@/app/assets/products/avatar1.png'
import avatar2 from '@/app/assets/products/avatar2.png'
import avatar3 from '@/app/assets/products/avatar3.png'
import img1 from './img1.png'
import img2 from './img2.png'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/languageContext";


const ElysiumCore = () => {
  const { t } = useLanguage();

  const functionList = [
    {
      title: t('ORDERING_SYSTEM'),
      img: g1,
      desc: t('ORDERING_SYSTEM_DESC'),
    },
    {
      title: t('INVENTORY_UPDATES'),
      img: g2,
      desc: t('INVENTORY_UPDATES_DESC'),
    },
    {
      title: t('METRICS_REPORTING'),
      img: g3,
      desc: t('METRICS_REPORTING_DESC'),
    },
    {
      title: t('BILLING_CHECKOUT'),
      img: g4,
      desc: t('BILLING_CHECKOUT_DESC'),
    },
    {
      title: t('ROLE_MANAGEMENT'),
      img: g5,
      desc: t('ROLE_MANAGEMENT_DESC'),
    },
  ]

  const commentList = [
    {
      avatar: avatar1,
      role: t('QUOTE_VIP_ROLE'),
      comment: t('QUOTE_VIP'),
    },
    {
      avatar: avatar2,
      role: t('QUOTE_STAFF_ROLE'),
      comment: t('QUOTE_STAFF'),
    },
    {
      avatar: avatar3,
      role: t('QUOTE_OWNER_ROLE'),
      comment: t('QUOTE_OWNER'),
    },
  ]

  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <div className="bg-white min-w-7xl">
        <div className="pl-30 pr-30">
          <h3 className="mt-26 mb-10 text-4xl font-bold text-black">{t('ELYSIUMCORE_TITLE')}</h3>
          <div className="mt-15 text-base text-stone-500">
            {t('ELYSIUMCORE_DESC_1')}
          </div>
          <div className="mt-8 text-base text-stone-500">
            {t('ELYSIUMCORE_DESC_2')}
          </div>
          <div className="mt-8 text-base text-stone-500">
            {t('ELYSIUMCORE_DESC_3')}
          </div>
          <Image src={img1} alt={""} className="w-full h-auto mt-10 pl-30 pr-30" />
        </div>
        <div className="p-15 mt-26 bg-slate-100 mb-20">
        <h3 className="text-4xl font-bold text-black 
        text-center">{t('KEY_FEATURES')}</h3>
        <section className="flex justify-center p-10">
          {functionList.map((item=>
          <div key={item.title} className="flex flex-col items-center ml-5 mr-5">
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
            <h3 className="mt-6 text-xl font-bold text-black text-center">{item.title}</h3>
          </div>
          ))}
        </section>
      </div>
        <div className="pl-30 pr-30 mb-15">

          <h3 className="mt-25 mb-15 text-4xl font-bold text-black text-center">{t('CUSTOMER_STORIES')}</h3>
          <section className="bg-white flex justify-between">
            <div className="flex-5">
              <Image src={img2} alt="" className="w-full h-auto" />
            </div>
            <div className="box-border w-100 text-black ml-20 flex flex-col items-center bg-stone-500 p-8 " style={{ backgroundColor: "#f5f1e4" }}>
              <h3 className="mb-10 text-xl font-bold">{t('ENTERTAINMENT_INTEGRATION')}</h3>
              <div className="text-sm text-stone-600">{t('ENTERTAINMENT_INTEGRATION_DESC')}</div>
              <ol>
                {
                  commentList.map((item, index) => <li key={index} className="mb-5 text-lg mt-15 ">
                    <div className="flex">
                      <Image src={item.avatar} alt="" className="w-12 h-12 mr-6" />
                      <div className="flex flex-col items-end">
                        <p className="text-xs leading-5 ">
                          {item.comment}
                        </p>
                        <p className="text-xs leading-5 text-stone-500">
                          --{item.role}
                        </p>
                      </div>
                    </div>
                  </li>)
                }
              </ol>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ElysiumCore;
