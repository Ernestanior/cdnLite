'use client'
import Image from "next/image";
import s1 from '@/app/assets/dns/dns1.jpeg'
import sslShopping from '@/app/assets/security/sslShopping.jpg'
import sslEnterprise from '@/app/assets/security/sslEnterprise.jpg'
import sslMobile from '@/app/assets/security/sslMobile.jpg'
import wafBg from '@/app/assets/dns/bg.jpeg'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "@/app/pc/components/navbar";
import Footer from "@/app/pc/components/footer";
import { useLanguage } from "@/context/languageContext";
import { RevealOnScroll } from "../about/animate";
import TypewriterText from "../about/typer";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { FaSyncAlt, FaLock, FaChartLine, FaMobileAlt, FaMousePointer, FaHandshake } from 'react-icons/fa';
import TypingText from "../home/writer";
import AnimatedBorderButton from "../components/AnimatedButton";
import { useRouter } from "next/navigation";
import { CountUp } from "../components/countUp";

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
    { num: 99.9, rightString: "%", label: t("解析成功率") },
    { num: 100, rightString: "%", label: t("故障切换自动化率") },
    { num: 500, rightString: "+", label: t("全球节点数量") },
    { num: 0, rightString: "", label: t("维护操作复杂度") }
  ];
  const advantage = [
    {
      title: "智能调度引擎",
      icon: FaSyncAlt,
      desc: "实时分析访问数据，智能选择最优解析结果，保障业务高可用。"
    },
    {
      title: "秒级DNS更新",
      icon: FaMousePointer,
      desc: "支持快速生效，减少业务中断时间。"
    },
    {
      title: "高可用集群",
      icon: FaLock,
      desc: "多活架构自动故障切换，避免单点风险。"
    },
    {
      title: "数据驱动优化",
      icon: FaChartLine,
      desc: "通过访问数据分析，不断优化调度策略，提升响应速度。"
    },
    {
      title: "全球节点加速",
      icon: FaMobileAlt,
      desc: "覆盖全球的智能解析节点，提升全球访问体验。"
    },
    {
      title: "兼容多种协议",
      icon: FaHandshake,
      desc: "支持IPv6、DoH、DoT等多种协议，灵活适配不同网络需求。"
    }
  ];

  return (
    <div style={{backgroundColor:"#1c0911"}}>
      <Navbar />
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{backgroundImage:`url(${wafBg.src})`}}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <TypingText texts={['智能DNS解析服务', '全网加速，自动容灾', '保障访问快速与稳定']}></TypingText>
        </div>
      </div>
      <div ref={section1Ref} className="flex justify-around items-center py-20"  style={{ background:'#090f20', }}>
        <div className="text-white font-bold flex flex-col">
          <RevealOnScroll>
            <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("智能解析DNS")}
            </h1>
          </RevealOnScroll>

          <TypewriterText text="通过智能DNS解析技术，提供稳定快速的域名解析体验。支持全网节点、实时调度、容灾切换，确保用户访问不中断，助力业务全球拓展。" />
        </div>
        <Image ref={image1Ref} src={s1} alt="智能DNS服务" className="h-auto w-125 hidden lg:block" />
      </div>

      <div className="flex flex-col justify-center items-center py-20 ">
        <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("服务概览")}
        </h1>
        <div className="w-50 md:w-180 text-center font-bold text-base/9">通过智能调度和高速DNS解析平台，实现域名实时生效、就近解析、负载均衡和自动故障切换，帮助企业降低网络中断风险，提升用户访问体验。</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28 mt-30">
          {cards.map((item) => <RevealOnScroll key={item.num} delay={.2}><div
            className="flex flex-col items-center 
                    w-40
                    rounded-xl font-bold 
                    text-center
                    transition-all duration-300 ease-in-out"
          >
            <CountUp
              end={typeof item.num === 'number' ? item.num : 0}
              rightText={item.rightString}
              className="text-emerald-300 text-7xl mb-10"
            />
            <div className="text-white text-2xl">{item.label}</div>
          </div></RevealOnScroll>)}
        </div>
      </div>

      <section className="flex flex-col justify-center items-center py-20">
        <h1 className="font-mono text-5xl  font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("服务优势")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 pt-15">
          {advantage.map((item, index) => {
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
                  hover:-translate-y-2 hover:scale-[1.02]"
              >
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

      <section className="flex flex-col justify-center items-center py-20 px-10 md:px-30 " >
        <h1 className="font-mono text-5xl mb-15 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("适用场景")}
        </h1>
        <RevealOnScroll delay={.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-slate-950 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">多分支办公</h3>
              <p className="text-sm opacity-80 mb-4">保障企业各地办公网络稳定互联</p>
              <Image src={sslShopping} alt="企业办公" className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="bg-slate-950 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">全球网站访问加速</h3>
              <p className="text-sm opacity-80 mb-4">智能解析分发用户请求，提升访问速度</p>
              <Image src={sslEnterprise} alt="全球加速" className="h-50 w-full object-cover rounded-md " />
            </div>
            <div className="bg-slate-950 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">移动应用连接优化</h3>
              <p className="text-sm opacity-80 mb-4">提升APP接口响应速度与可用性</p>
              <Image src={sslMobile} alt="移动优化" className="h-50 w-full object-cover rounded-md" />
            </div>
          </div>
        </RevealOnScroll>
        <div className="text-center pt-30 ">
          <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("立即启用智能解析")}
          </h1>

          <p className="text-lg text-white/70 mb-8">快速配置，弹性扩展，保障业务持续在线</p>
          <AnimatedBorderButton onClick={() => {
            router.push('/contact');
          }}>
            启用智能DNS
          </AnimatedBorderButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StaticPage;