'use client'
import Image from "next/image";
import s2 from '@/app/assets/cdn/static2.jpeg'
import staticFile from '@/app/assets/cdn/staticFile.jpg'
import staticVideo from '@/app/assets/cdn/staticVideo.jpg'
import staticWebsite from '@/app/assets/cdn/staticWebsite.jpg'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "@/app/pc/components/navbar";
import Footer from "@/app/pc/components/footer";
import { useLanguage } from "@/context/languageContext";
import { RevealOnScroll } from "../../about/animate";
import TypewriterText from "../../about/typer";
import { CountUp } from "../../components/countUp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { FaShieldAlt, FaBolt, FaCogs, FaExpandArrowsAlt, FaGlobe, FaSyncAlt } from 'react-icons/fa';
import TypingText from "../../home/writer";
import AnimatedBorderButton from "../../components/AnimatedButton";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const StaticPage = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true });
  const router = useRouter();
  const [hasAnimated, setHasAnimated] = useState(false);

  const section1Ref = useRef(null);
  const image1Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        image1Ref.current,
        { x: 1000, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section1Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, section1Ref)
    return () => ctx.revert();
  }, []);
  
  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  const cards = [{num:900,rightString:"+",label:t("全球节点")}, {num:60,rightString:"+",label:t("每天请求十亿")}, {num:100,rightString:"+",label:t("Tbps冗余宽带")},{num:30,leftString:"<",label:t("毫秒响应时间")}];

  const advantage=[{title:"广域覆盖",icon:FaGlobe,desc:"拥有900+节点，遍布全球，实现用户就近访问，极大提升访问速度与体验。"},
    {title:"强扩展性",icon:FaExpandArrowsAlt,desc:"百G带宽储备，无需为源站购置冗余带宽，轻松应对突发流量，保障业务持续稳定。"},
    {title:"安全保障",icon:FaShieldAlt,desc:"隐藏客户源站地址，有效防护源站服务器，免受攻击威胁，安全无忧。"},
    {title:"稳定可靠",icon:FaSyncAlt,desc:"多条备用线路智能切换，保障服务稳定不中断，提升访问连续性。"},
    {title:"极速响应",icon:FaBolt,desc:"依托全球优质网络，带来极致响应速度，秒级加载，让用户畅享极速体验。"},
    {title:"简单易用",icon:FaCogs,desc:"无需额外设备支持，操作简便，一键配置，秒级部署上线，轻松实现加速。"}]

  return (
    <div style={{ backgroundColor: "#000" }} >
      <Navbar />
      <div className="relative w-full h-[500px] bg-cover bg-center bg-[url('@/app/assets/cdn/staticBg.jpg')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <TypingText texts={['提供极速全球分发','提升加载速度','减少延迟']}></TypingText>
        </div>
      </div>
      <div ref={section1Ref} className="flex justify-around items-center py-20" style={{backgroundColor:"#171832"}}>
        <div className="text-white font-bold flex flex-col">
          <RevealOnScroll>
            <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("方案介绍")}
            </h1>
          </RevealOnScroll>

          <TypewriterText text="静态内容加速是将更新频率较低的文字，图片或视频等静态文件通过智能调度系统分发到 CDN 网络的边缘节点，以满足终端用户就近访问的需求，大大提升终端用户的访问体验。客户可根据需求对静态内容进行定期或不定期更新。" />
        </div>
        <Image ref={image1Ref} src={s2} alt="KainoAI" className="h-auto w-105 hidden lg:block" />
      </div>
      <div className="flex flex-col justify-center items-center py-20" style={{ background: 'linear-gradient(180deg, #171832,#000'}}>
          <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("静态加速")}
          </h1>
          <div className="w-50 md:w-180 text-center font-bold text-base/9">通过遍布全球的边缘节点，和各节点间多条高速直连线路，结合智能调度技术，既满足了客户的扩展需求，缓解了源站压力，同时又保证用户就近访问，提高网页响应速度，为终端用户提供更优的访问体验，并有效预防单节点故障影响全局访问。</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30 mt-30"> 
          {cards.map((item)=><RevealOnScroll key={item.num} delay={.2}><div
              className="flex flex-col items-center 
                    w-40
                    rounded-xl font-bold 
                    text-center
                    transition-all duration-300 ease-in-out"
            >
              <CountUp
                end={typeof item.num === 'number' ? item.num : 0}
                leftText={item.leftString}
                rightText={item.rightString}
                className="text-emerald-300 text-7xl mb-10"
              />
              <div className="text-white text-2xl">{item.label}</div>
            </div></RevealOnScroll>)}
          </div>
      </div>
      <section className="flex flex-col justify-center items-center py-20">
          <h1 className="font-mono text-5xl  font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("方案优势")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 pt-15">
          {advantage.map((item,index)=>{
            const Icon = item.icon;
            return <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
          ><div className="px-6
                  border-[3px] border-stone-50 
                  w-80
                  h-65
                  rounded-xl font-bold flex flex-col justify-center
                  text-center
                  transition-all duration-300 ease-in-out
                  hover:border-emerald-300 
                  hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] 
                  hover:-translate-y-2 hover:scale-[1.02]
                  ">
              <Icon className="text-purple-50 bg-gradient-to-r from-purple-200 to-cyan-50 bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)] text-4xl mb-3 mx-auto" />
          <h1 className="font-mono text-2xl font-bold  bg-clip-text mb-5 text-emerald-300 ">
              {t(item.title)}
          </h1>
          <div className="font-mono text-base font-bold bg-clip-text">
              {t(item.desc)}
          </div>
        </div></motion.div>
          })}
          </div>

      </section>
      <section className="flex flex-col justify-center items-center py-20 px-10 md:px-30 ">
        <h1 className="font-mono text-5xl mb-15 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("使用场景")}
        </h1>
        <RevealOnScroll delay={.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-slate-800 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">企业官网 / 电商页面</h3>
              <p className="text-sm opacity-80 mb-4">确保页面秒开，提高转化率和搜索引擎评分</p>
              <Image src={staticWebsite} alt="static site" className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="bg-slate-800 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">视频/音频分发</h3>
              <p className="text-sm opacity-80 mb-4">加速媒体内容加载，提升播放体验</p>
              <Image src={staticVideo} alt="video delivery" className="h-50 w-full object-cover rounded-md " />
            </div>
            <div className="bg-slate-800 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">图像 / 文件托管</h3>
              <p className="text-sm opacity-80 mb-4">稳定承载海量图像与下载请求，降低源站负载</p>
              <Image src={staticFile} alt="image acceleration" className="h-50 w-full object-cover rounded-md" />
            </div>
          </div>
        </RevealOnScroll>
        <div className="text-center pt-30">
        <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("准备好开始加速了吗？")}
        </h1>

          <p className="text-lg text-white/70 mb-8">立即接入我们的CDN，享受极速稳定的网页加载体验</p>
          <AnimatedBorderButton onClick={()=>{
            router.push('/contact');
          }}>
            免费试用
          </AnimatedBorderButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StaticPage;
