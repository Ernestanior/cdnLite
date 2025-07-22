'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import a1 from '@/app/assets/about/a1.jpeg'

import Image from "next/image";
import { useLanguage } from "@/context/languageContext";
import TypewriterText from "./typer";
import { RevealOnScroll } from "./animate";

const About = () => {
    const { t } = useLanguage();

  return (
    <div style={{backgroundColor:"#090705"}}>
        <Navbar />
        <div className="flex justify-around items-center">
            <div  className="text-white font-bold flex flex-col mt-30 lg:mt-5">
            <RevealOnScroll>
                <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
                    {t("关于我们")}
                </h1>
            </RevealOnScroll>
                
                <TypewriterText text="Greypanel总部位于新加坡，是一家提供网络安全服务和互联网解决方案的创新公司。公司致力于为政府机构，中小型公司和大型企业提供安全，快速的网络解决方案。" />
            </div>
            <Image src={a1} alt="KainoAI" className="h-auto w-105  hidden lg:block" />
        </div>
        <div className="h-50"></div>


        <Footer/>
    </div>
  );
};

export default About;
