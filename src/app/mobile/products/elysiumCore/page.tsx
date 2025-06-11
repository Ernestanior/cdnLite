'use client'
import Image from "next/image";
import avatar1 from '@/app/assets/products/avatar1.png'
import avatar2 from '@/app/assets/products/avatar2.png'
import avatar3 from '@/app/assets/products/avatar3.png'
import g1 from '@/app/assets/products/elysiumCore/g1.png'
import g2 from '@/app/assets/products/elysiumCore/g2.png'
import g3 from '@/app/assets/products/elysiumCore/g3.png'
import g4 from '@/app/assets/products/elysiumCore/g4.png'
import g5 from '@/app/assets/products/elysiumCore/g5.png'
import img1 from '@/app/assets/products/elysiumCore/img1.png'
import img2 from '@/app/assets/products/elysiumCore/img2.png'
import Navbar from "@/app/mobile/components/navbar";
import Footer from "@/app/mobile/components/footer";
import { useLanguage } from "@/context/languageContext";
import CardCarousel from "../crousel";


const ElysiumCore = () => {
  const { t } = useLanguage();

  const cards = [
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
    <div className="bg-white">
      <Navbar />
      <div className="p-6 mb-10">
        <Image src={img1} alt={""} className="h-auto " />
        <h3 className="my-10 text-3xl font-bold text-black">{t('ELYSIUMCORE_TITLE')}</h3>
        <div className="mt-15 text-base text-stone-500">
            {t('ELYSIUMCORE_DESC_1')}
          </div>
          <div className="mt-8 text-base text-stone-500">
            {t('ELYSIUMCORE_DESC_2')}
          </div>
          <div className="mt-8 text-base text-stone-500">
            {t('ELYSIUMCORE_DESC_3')}
          </div>
      </div>
      <CardCarousel cards={cards}/>
      <div className="px-5 py-15 bg-stone-100" >
        <h3 className="mb-15 text-3xl font-bold text-black text-center">{t('CUSTOMER_STORIES')}</h3>
        <section className="flex flex-col items-between">
              <Image src={img2} alt="" className="w-full h-auto" />
            <div className="bg-white box-border text-black flex flex-col items-center bg-stone-500 p-8 ">
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
      <Footer/>
    </div>
  );
};

export default ElysiumCore;
