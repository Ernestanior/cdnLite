'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import InfoSection from "./infoSection";
import about1 from '@/app/assets/about/about1.jpg';
import about2 from '@/app/assets/about/about2.jpg';
import bus1 from '@/app/assets/about/bus1.jpg';
import bus2 from '@/app/assets/about/bus2.png';
import bus3 from '@/app/assets/about/bus3.jpg';
import bus4 from '@/app/assets/about/bus4.png';
import bus5 from '@/app/assets/about/bus5.jpg';
import bus6 from '@/app/assets/about/bus6.jpg';
import bus7 from '@/app/assets/about/bus7.png';
import bus8 from '@/app/assets/about/bus8.png';

import icon1 from '@/app/assets/icon/think.png';
import icon2 from '@/app/assets/icon/user.png';
import icon3 from '@/app/assets/icon/coop.png';
import icon4 from '@/app/assets/icon/medal.png';
import Image from "next/image";
import { useLanguage } from "@/context/languageContext";

const About = () => {
    const { t } = useLanguage();
    
    const valueList =[{icon:icon1,title:t('INNOVATION_DRIVEN'),desc:t('INNOVATION_DRIVEN_DESC')},{icon:icon2,title:t('CUSTOMER_CENTRIC'),desc:t('CUSTOMER_CENTRIC_DESC')},{icon:icon3,title:t('COLLABORATIVE_GROWTH'),desc:t('COLLABORATIVE_GROWTH_DESC')},{icon:icon4,title:t('INTEGRITY_TRANSPARENCY'),desc:t('INTEGRITY_TRANSPARENCY_DESC')},]

    const businessList=[{
        title:t('ENERGY_MANAGEMENT_PLATFORM'),
        img:bus8
    },{
        title:t('SMART_ENTERTAINMENT_PLATFORM'),
        img:bus4
    },{
        title:t('STREAMING_LIVE_PLATFORM'),
        img:bus6
    },{
        title:t('AI_INTERIOR_DESIGN'),
        img:bus7
    },{
        title:t('WEB_MOBILE_SERVICE'),
        img:bus5
    },{
        title:t('ENTERPRISE_DIGITALIZATION_SOLUTIONS'),
        img:bus2
    },{
        title:t('IT_INFRASTRUCTURE_MANAGEMENT'),
        img:bus1
    },{
        title:t('DDOS_WAF_SERVICE'),
        img:bus3
    },]

  return (
    <div className="bg-white ">
        <Navbar />
            <InfoSection
                image={about1}
                title={t('ABOUT_US')}
                content={[t('COMPANY_PROFILE_DESC1'),t('COMPANY_PROFILE_DESC2')]}
            />
            <InfoSection
                image={about2}
                title={t('STRATEGIC_VISION')}
                content={[
                    t('STRATEGIC_VISION_DESC1'),
                    t('STRATEGIC_VISION_DESC2')
                ]}
            />
        <div className="px-6 py-15 bg-slate-100">
            <h3 className="text-4xl font-bold text-black text-center mb-10">{t('CORE_VALUE')}</h3>
            <div className="grid grid-cols-1 gap-8">
                {valueList.map((item, index) => (
                    <div key={item.title} className="flex bg-white border-2 border-stone-200 rounded-lg p-6">
                        <Image src={item.icon} alt={""} className="w-14 h-14 mr-6" />
                        <div>
                            <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-3">{item.desc}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
        <section className="py-5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-8 mb-4">{t('EXPERTISE_AREAS')}</h2>
        <div className="grid grid-cols-2 gap-4 p-4">
            {businessList.map((item, index) => (
            <div
                key={index}
                className="relative aspect-[5/3] rounded overflow-hidden shadow group"
            >
                <Image src={item.img} alt={""} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                 />
                <div className="absolute inset-0 bg-black opacity-20 ">
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-bold text-center">{item.title}</span>
                </div>
            </div>
            ))}
        </div>
        </section>
        <Footer/>
    </div>
  );
};

export default About;
