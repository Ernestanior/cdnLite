'use client'
import Image from "next/image";
import ccOverview from '@/app/assets/security/cc1.jpeg'
import ccBusiness from '@/app/assets/security/sslEnterprise.jpg'
import ccGaming from '@/app/assets/security/sslEnterprise.jpg'
import ccLogin from '@/app/assets/security/sslEnterprise.jpg'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "@/app/pc/components/navbar";
import Footer from "@/app/pc/components/footer";
import { useLanguage } from "@/context/languageContext";
import { RevealOnScroll } from "../../about/animate";
import TypewriterText from "../../about/typer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { FaShieldAlt, FaBrain, FaSyncAlt, FaTachometerAlt, FaLock, FaTools } from 'react-icons/fa';
import TypingText from "../../home/writer";
import AnimatedBorderButton from "../../components/AnimatedButton";
import { useRouter } from "next/navigation";
import { CountUp } from "../../components/countUp";

gsap.registerPlugin(ScrollTrigger);

const CcProtectionPage = () => {
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
    { num: 1, rightString: '亿+', label: t('日均拦截请求') },
    { num: 99.99, rightString: '%', label: t('平台可用性') },
    { num: 30, rightString: 'ms', label: t('平均响应时间') },
    { num: 0, rightString: '', label: t('源站运维负担') }
  ];

  const advantage = [
    {
      title: "精准识别拦截",
      icon: FaShieldAlt,
      desc: "多维度行为分析+规则识别，实时阻断恶意请求。"
    },
    {
      title: "智能算法加持",
      icon: FaBrain,
      desc: "基于AI动态学习与人机识别，有效区分真实用户。"
    },
    {
      title: "稳定服务保障",
      icon: FaSyncAlt,
      desc: "秒级响应，自动切换节点，保障服务连续可用。"
    },
    {
      title: "性能无感拦截",
      icon: FaTachometerAlt,
      desc: "前端无感知，保障用户体验，后台精准限速。"
    },
    {
      title: "源站隐藏保护",
      icon: FaLock,
      desc: "隐藏真实源IP，隔离攻击直接来源。"
    },
    {
      title: "快速部署启用",
      icon: FaTools,
      desc: "一键开启防护，无需改动代码或增加设备。"
    }
  ];

  return (
    <div style={{backgroundColor:"#000"}}>
      <Navbar />
      <div className="relative w-full h-[500px] bg-cover bg-center bg-[url('@/app/assets/security/ccBg.jpeg')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <TypingText texts={["一站式CC攻击防护", "智能识别，精准拦截", "保障业务连续稳定"]}></TypingText>
        </div>
      </div>
      <div ref={section1Ref} className="flex justify-around items-center py-20 bg-black">
        <div className="text-white font-bold flex flex-col">
          <RevealOnScroll>
            <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("方案介绍")}
            </h1>
          </RevealOnScroll>
          <TypewriterText text="Greypanel CC防护通过行为识别与规则引擎，智能拦截异常请求，防止网站被恶意访问瘫痪，为业务运行保驾护航。" />
        </div>
        <Image ref={image1Ref} src={ccOverview} alt="CC攻击防护方案介绍" className="h-auto w-125 hidden lg:block" />
      </div>
      <div className="flex flex-col justify-center items-center py-20 ">
        <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("能力数据")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30 mt-30">
          {cards.map((item) => <RevealOnScroll key={item.num} delay={.2}><div className="flex flex-col items-center w-40 rounded-xl font-bold text-center transition-all duration-300 ease-in-out">
            <CountUp end={typeof item.num === 'number' ? item.num : 0} rightText={item.rightString} className="text-emerald-300 text-7xl mb-10" />
            <div className="text-white text-2xl">{item.label}</div>
          </div></RevealOnScroll>)}
        </div>
      </div>
      <section className="flex flex-col justify-center items-center py-20">
        <h1 className="font-mono text-5xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("方案优势")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 pt-15">
          {advantage.map((item, index) => {
            const Icon = item.icon;
            return <motion.div ref={ref} initial={{ opacity: 0, scale: 0.5 }} animate={hasAnimated ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.9 }}>
              <div className="px-6 border-[3px] border-stone-50 w-80 h-65 rounded-xl font-bold flex flex-col justify-center text-center transition-all duration-300 ease-in-out hover:border-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] hover:-translate-y-2 hover:scale-[1.02]">
                <Icon className="text-purple-50 bg-gradient-to-r from-purple-200 to-cyan-50 bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)] text-4xl mb-3 mx-auto" />
                <h1 className="font-mono text-2xl font-bold text-emerald-300 ">{t(item.title)}</h1>
                <div className="font-mono text-base font-bold">{t(item.desc)}</div>
              </div></motion.div>
          })}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-20 px-10 md:px-30">
        <h1 className="font-mono text-5xl mb-15 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("使用场景")}
        </h1>
        <RevealOnScroll delay={.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-black text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">企业官网</h3>
              <p className="text-sm opacity-80 mb-4">防止攻击导致访问卡顿或瘫痪，保障品牌形象</p>
              <Image src={ccBusiness} alt="business site" className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="bg-black text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">游戏服务端</h3>
              <p className="text-sm opacity-80 mb-4">防止游戏登录/对战接口被刷请求，保障流畅体验</p>
              <Image src={ccGaming} alt="gaming service" className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="bg-black text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">登录/注册接口</h3>
              <p className="text-sm opacity-80 mb-4">防止接口被刷爆，提高业务安全性</p>
              <Image src={ccLogin} alt="login security" className="h-50 w-full object-cover rounded-md" />
            </div>
          </div>
        </RevealOnScroll>
        <div className="text-center pt-30">
          <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("为业务接入智能防护")}
          </h1>
          <p className="text-lg text-white/70 mb-8">CC防护全面升级，实时拦截恶意请求</p>
          <AnimatedBorderButton onClick={() => {
            router.push('/contact');
          }}>
            马上部署防护
          </AnimatedBorderButton>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CcProtectionPage;