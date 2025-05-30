'use client'
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
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
import bus7 from '@/app/assets/about/bus7.jpg';
import bus8 from '@/app/assets/about/bus8.png';
import profile from '@/app/assets/about/profile.jpg';
import Image from "next/image";
import TeamMember from "./member";
import { useLanguage } from "@/context/languageContext";


const About = () => {
    const { t } = useLanguage();

    const businessList=[{
        title:t('ENERGY_MANAGEMENT_PLATFORM'),
        img:bus1
    },{
        title:t('AI_INTERIOR_DESIGN'),
        img:bus2
    },{
        title:t('SMART_ENTERTAINMENT_PLATFORM'),
        img:bus3
    },{
        title:t('IT_INFRASTRUCTURE_MANAGEMENT'),
        img:bus4
    },{
        title:t('STREAMING_LIVE_PLATFORM'),
        img:bus5
    },{
        title:t('ENTERPRISE_DIGITALIZATION_SOLUTIONS'),
        img:bus6
    },{
        title:t('WEB_MOBILE_SERVICE'),
        img:bus7
    },{
        title:t('DDOS_WAF_SERVICE'),
        img:bus8
    },]

  return (
    <div className="bg-white min-w-7xl">
        <Navbar />
        <div >
            {/* 第一部分 */}
            <InfoSection
                image={about1}
                title={t('COMPANY_PROFILE')}
                content={[t('COMPANY_PROFILE_DESC')]}
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

            {/* 第三部分 */}
            <InfoSection
                image={about3}
                title={t('CORE_VALUE')}
                children={<div className="text-stone-900 pt-5">
                    <ol>
                        <li className="font-bold py-2">● {t('INNOVATION_DRIVEN')}</li>
                        <p className="text-stone-400 pl-2 pb-5 text-sm"> {t('INNOVATION_DRIVEN_DESC')}</p>
                        <li className="font-bold py-2">● {t('CUSTOMER_CENTRIC')}</li>
                        <p className="text-stone-400 pl-2 pb-5 text-sm"> {t('CUSTOMER_CENTRIC_DESC')}</p>
                        <li className="font-bold py-2">● {t('COLLABORATIVE_GROWTH')}</li>
                        <p className="text-stone-400 pl-2 pb-5 text-sm"> {t('COLLABORATIVE_GROWTH_DESC')}</p>
                        <li className="font-bold py-2">● {t('INTEGRITY_TRANSPARENCY')}</li>
                        <p className="text-stone-400 pl-2 pb-5 text-sm"> {t('INTEGRITY_TRANSPARENCY_DESC')}</p>
                    </ol>
                </div>}
            />
        </div>
        {/* <div className="flex flex-col items-center bg-gray-50" >
            <div className="text-stone-900 text-3xl font-black pb-10">合作的企业</div>
            <div className="grid grid-cols-4 pb-3 w-full">
                {businessList.map((item)=><div className="relative w-80 h-80 overflow-hidden bg-orange-500">
                    <Image src={item.img} alt={""} className="w-50" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{item.title}</div>
                </div>)}
            </div>
        </div> */}
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
