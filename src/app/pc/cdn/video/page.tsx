'use client'
import Image from "next/image";
import s2 from '@/app/assets/cdn/video1.jpeg'
import staticFile from '@/app/assets/cdn/staticFile.jpg'
import staticVideo from '@/app/assets/cdn/staticVideo.jpg'
import staticWebsite from '@/app/assets/cdn/staticWebsite.jpg'
import videoBg from '@/app/assets/cdn/videoBg.jpg'
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

  const cards = [
    { num:900, rightString:"+", label:t("全球加速节点") },
    { num:200, rightString:"+", label:t("国家/地区覆盖") },
    { num:99, rightString:"%", label:t("高可用稳定性") },
    { num:3, leftString:"<", label:t("秒首帧加载") }
  ];
    const advantage = [
      {
        title: "超低延迟",
        icon: FaBolt,
        desc: "通过就近节点调度与协议优化，极大减少首帧加载时间与播放延迟。"
      },
      {
        title: "分布式缓存",
        icon: FaGlobe,
        desc: "热点视频提前缓存至边缘节点，减少回源，提高并发承载力。"
      },
      {
        title: "高并发承载",
        icon: FaExpandArrowsAlt,
        desc: "百G+带宽储备与动态扩展能力，保障大规模直播或活动稳定流畅。"
      },
      {
        title: "智能自适应",
        icon: FaSyncAlt,
        desc: "支持多码率切换，根据用户网络状况智能选择最佳画质。"
      },
      {
        title: "内容安全",
        icon: FaShieldAlt,
        desc: "提供防盗链、HTTPS加密、访问控制等多种安全策略，保障版权内容安全。"
      },
      {
        title: "快速集成",
        icon: FaCogs,
        desc: "支持主流播放器与协议，部署简单，快速接入，无缝升级原有系统。"
      }
    ];
  return (
    <div style={{ backgroundColor: "#000" }} >
      <Navbar />
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{backgroundImage:`url(${videoBg.src})`}}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <TypingText texts={['提供高质量视频播放', '降低卡顿与延迟', '保障全球流畅体验']}></TypingText>
        </div>
      </div>
      <div ref={section1Ref} className="flex justify-around items-center py-20 bg-black" >
        <div className="text-white font-bold flex flex-col">
          <RevealOnScroll>
            <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("流媒体加速")}
            </h1>
          </RevealOnScroll>
          <TypewriterText text="视频流媒体加速通过将热点视频内容智能缓存至离用户最近的边缘节点，搭配自适应码率技术和网络优化策略，有效缓解源站压力，减少播放卡顿、首帧加载慢等问题，显著提升用户观看体验，特别适用于在线视频、直播、点播等场景。" />
        </div>
        <Image ref={image1Ref} src={s2} alt="KainoAI" className="h-auto w-125 hidden lg:block" />
      </div>
      <div className="flex flex-col justify-center items-center py-20">
          <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("方案介绍")}
          </h1>
          <div className="w-50 md:w-180 text-center font-bold text-base/9">借助全球边缘节点与智能调度技术，视频流媒体加速实现内容就近分发，有效降低首帧延迟与卡顿率，满足多地区、多终端用户稳定播放的需求，提升平台整体服务质量与用户粘性。</div>
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
            key={item.title}
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
            <div className="bg-black text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">在线视频平台</h3>
              <p className="text-sm opacity-80 mb-4">提升视频点播加载速度，优化观看体验，降低用户跳出率</p>
              <Image src={staticWebsite} alt="static site" className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="bg-black text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">大型直播活动</h3>
              <p className="text-sm opacity-80 mb-4">支持高并发访问，保障多地观众同步、流畅观看直播</p>
              <Image src={staticVideo} alt="video delivery" className="h-50 w-full object-cover rounded-md " />
            </div>
            <div className="bg-black text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">短视频/UGC平台</h3>
              <p className="text-sm opacity-80 mb-4">为碎片化内容提供稳定加速，快速打开每一条视频</p>
              <Image src={staticFile} alt="image acceleration" className="h-50 w-full object-cover rounded-md" />
            </div>
          </div>
        </RevealOnScroll>
        <div className="text-center pt-30">
        <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("准备好开始加速了吗？")}
        </h1>

          <p className="text-lg text-white/70 mb-8">立即接入我们的CDN，享受高品质的视频播放体验</p>
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
