'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import InfoSection from "./infoSection";
import about1 from '@/app/assets/about/about1.jpg';
import about2 from '@/app/assets/about/about2.jpg';
import about3 from '@/app/assets/about/about3.jpg';
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
    <div className="bg-white min-w-7xl">
        <Navbar />
        <div >
            {/* 第一部分 */}
            <InfoSection
                image={about1}
                title={t('ABOUT_US')}
                content={[t('COMPANY_PROFILE_DESC1'),t('COMPANY_PROFILE_DESC2')]}
            />
            {/* 第二部分 - 反向布局 */}
            <InfoSection
                image={about2}
                title={t('STRATEGIC_VISION')}
                content={[
                    t('STRATEGIC_VISION_DESC1'),
                    t('STRATEGIC_VISION_DESC2')
                ]}
                reverse
            />
        </div>
        <div className="px-24 py-15 bg-slate-100">
            <h3 className="text-4xl font-bold text-black text-center mb-10">{t('CORE_VALUE')}</h3>
            <div className="grid grid-cols-2 gap-8">
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

        <section className="py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-8">{t('EXPERTISE_AREAS')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-15">
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
                    <span className="text-white text-2xl font-bold text-center">{item.title}</span>
                </div>
            </div>
            ))}
        </div>
        </section>
        {/* <div className="flex flex-col items-center p-10 bg-gray-50" >
            <div className="text-stone-900 text-3xl font-black pb-10">合作的企业</div>
            <div className="flex justify-around w-250 pb-3">
                <Image src={brand5} alt={""} className="h-10 object-contain" />
                <Image src={brand1} alt={""} className="h-15 object-contain" />
                <Image src={brand2} alt={""} className="h-15 object-contain" />
                <Image src={brand3} alt={""} className="h-10 object-contain" />
                <Image src={brand4} alt={""} className="h-15 object-contain" />
            </div>
        </div> */}
        {/* <div className=" p-10" >

        </div> */}
        {/* <div className="flex flex-col items-center gap-8 px-26 py-12">
            <div className="text-stone-900 text-3xl font-black pb-10">技术团队</div>
            <div className="flex">
                <TeamMember
                    image={profile}
                    name="Michael Wong"
                    position="Software Development Manager"
                    experience="8+ years in software development and team leadership"
                    responsibility="Oversee development teams, ensure timely delivery of high-quality software solutions."
                    bgColor="bg-blue-400"
                />
                <TeamMember
                    image={profile}
                    name="Emily Lee"
                    position="Project Manager"
                    experience="6+ years in data analytics and project management"
                    responsibility="Design project roadmaps and lead a team of analysts to drive data-driven strategies."
                    bgColor="bg-blue-400"
                />

                <TeamMember
                    image={profile}
                    name="David Loh"
                    position="Backend Software Engineer"
                    bgColor="bg-blue-400"
                />

                <TeamMember
                    image={profile}
                    name="Jason Chong"
                    position="QA Automation Engineer"
                    bgColor="bg-blue-400"
                />
            </div>

        </div> */}
        <Footer/>
    </div>
  );
};

export default About;
