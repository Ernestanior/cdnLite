'use client'
import Image from "next/image";
import s1 from '@/app/assets/cdn/game3.jpeg'
import g1 from '@/app/assets/cdn/gameMMO.jpg'
import g2 from '@/app/assets/cdn/gameMobile.jpg'
import g3 from '@/app/assets/cdn/gamePatch.jpg'
import gameBg from '@/app/assets/cdn/gameBg.jpg'
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
import AnimatedBorderButton from "../../components/AnimatedButton";
import {useRouter} from "next/navigation";
import TypingText from "../../home/writer";

gsap.registerPlugin(ScrollTrigger);

const GamePage = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [ref, inView] = useInView({ threshold: 0.3,triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const section1Ref = useRef(null);
  const image1Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        image1Ref.current,
        { x: 1000, opacity: 1 },
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
    { num: 900, rightString: "+", label: t("全球加速节点") },
    { num: 100, rightString: "+", label: t("Tbps储备带宽") },
    { num: 99, rightString: "%", label: t("连接稳定率") },
    { num: 30, leftString: "<", label: t("毫秒响应时间") }
  ];
  const advantage = [
    {
      title: "低延迟连接",
      icon: FaBolt,
      desc: "就近调度玩家连接入口，减少网络跳数，显著降低连接延迟和波动。"
    },
    {
      title: "全球节点覆盖",
      icon: FaGlobe,
      desc: "覆盖全球主要游戏市场，支持跨洲跨区联机，保障全球玩家公平体验。"
    },
    {
      title: "补丁快速分发",
      icon: FaExpandArrowsAlt,
      desc: "大容量边缘缓存节点，确保游戏客户端和补丁更新极速分发，缓解源站压力。"
    },
    {
      title: "高可用保障",
      icon: FaSyncAlt,
      desc: "多节点智能切换与容灾机制，确保游戏服务稳定不中断。"
    },
    {
      title: "安全防护",
      icon: FaShieldAlt,
      desc: "隐藏源站地址，防御DDoS攻击和恶意探测，保障游戏稳定运行。"
    },
    {
      title: "便捷集成",
      icon: FaCogs,
      desc: "支持标准协议与SDK接入，快速对接平台，节省开发与运维成本。"
    }
  ];
  return (
    <div style={{ backgroundColor: "#000" }} >
      <Navbar />
      <div className="relative w-full h-[500px] bg-cover bg-center " style={{backgroundImage:`url(${gameBg.src})`}}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <TypingText texts={['全球游戏加速部署', '降低延迟与丢包', '保障流畅稳定体验']}></TypingText>
        </div>
      </div>
      <div ref={section1Ref} className="flex justify-around items-center py-20" style={{ background: 'linear-gradient(180deg, #0a072d,#0c082e', }}>
        <div className="text-white font-bold flex flex-col mt-20">
          <RevealOnScroll>
            <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("应用加速")}
            </h1>
          </RevealOnScroll>

          <TypewriterText text="游戏加速通过将游戏资源和连接请求调度至全球就近节点，提升玩家下载速度、降低连接延迟、减少丢包率。支持游戏客户端、补丁更新、实时联机等场景，有效缓解源站压力，保障海量玩家分布式高并发访问体验。" />
        </div>
        <Image ref={image1Ref} src={s1} alt="KainoAI" className="h-auto w-125 hidden lg:block" />
      </div>
      <div className="flex flex-col justify-center items-center py-20" style={{ background: 'linear-gradient(180deg, #0c082e,#000'}}>
        <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("方案介绍")}
        </h1>
        <div className="w-50 md:w-180 text-center font-bold text-base/9">游戏应用加速解决方案是针对网页游戏，手机游戏等而专门开发的加速服务。通过海量带宽资源和防御策略，缓解因攻击引起的卡顿和掉线；高性能节点服务器确保高峰期承载高并发流量，在抵抗攻击的同时，保证流畅的游戏体验。</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30 mt-30">
          {cards.map((item) => <RevealOnScroll key={item.num} delay={.2}><div
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
        <h1 className="font-mono text-5xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("方案优势")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
          {advantage.map((item, index) => {
            const Icon = item.icon;
            return <motion.div
              key={item.title}
              ref={ref}
              initial={{ opacity: 0, scale: 0.25,y:90  }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9 }}
            ><div className="px-6
                  border-[3px] border-stone-50 
                  pt-8
                  w-80
                  h-70
                  rounded-xl font-bold flex flex-col justify-start
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
      <section className="flex flex-col justify-center items-center py-20 px-10 md:px-30">
        <h1 className="font-mono text-5xl mb-15 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("使用场景")}
        </h1>
      <RevealOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-black text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)] shadow-[0_0_5px_rgba(255,255,255,5)]">
            <h3 className="text-xl font-bold text-emerald-300 mb-2">大型多人在线游戏 (MMO)</h3>
            <p className="text-sm opacity-80 mb-4">提升全球玩家实时交互体验，支持高并发战斗、社交场景</p>
            <Image src={g1} alt="KainoAI"className="h-50 object-cover" />
          </div>
          <div className="bg-black text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)] shadow-[0_0_5px_rgba(255,255,255,5)]">
            <h3 className="text-xl font-bold text-emerald-300 mb-2">手游分发与首发活动</h3>
            <p className="text-sm opacity-80 mb-4">加速游戏下载与更新，保障发版高峰流畅</p>
            <Image src={g2} alt="KainoAI" className="h-50" />
          </div>
          <div className="bg-black text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)] shadow-[0_0_5px_rgba(255,255,255,5)]">
            <h3 className="text-xl font-bold text-emerald-300 mb-2">补丁更新 / 热更分发</h3>
            <p className="text-sm opacity-80 mb-4">极速分发大体积资源包，缩短玩家等待时间</p>
            <Image src={g3} alt="KainoAI" className="h-50" />
          </div>
        </div>
      </RevealOnScroll>

        <div className="text-center pt-30">
        <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("准备好开始加速了吗？")}
        </h1>

          <p className="text-lg text-white/70 mb-8">立即接入我们的CDN，享受极速稳定的游戏传输体验</p>
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

export default GamePage;


