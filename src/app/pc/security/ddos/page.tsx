'use client'
import Image from "next/image";
import s1 from '@/app/assets/security/ddos1.jpeg'
import ddosGame from '@/app/assets/security/ddosGame.jpeg'
import ddosShop from '@/app/assets/security/ddosShop.jpeg'
import ddosFinance from '@/app/assets/security/ddosFinance.jpeg'
import ddosBg from '@/app/assets/security/ddosBg.jpeg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "@/app/pc/components/navbar";
import Footer from "@/app/pc/components/footer";
import { useLanguage } from "@/context/languageContext";
import { RevealOnScroll } from "../../about/animate";
import TypewriterText from "../../about/typer";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { FaShieldAlt, FaServer, FaBolt, FaChartLine, FaBrain, FaSatelliteDish } from 'react-icons/fa';
import TypingText from "../../home/writer";
import AnimatedBorderButton from "../../components/AnimatedButton";
import { useRouter } from "next/navigation";
import { CountUp } from "../../components/countUp";

gsap.registerPlugin(ScrollTrigger);

const DDoSProtectionPage = () => {
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
    { num: 2000, rightString: "+", label: t("Gbps防护峰值") },
    { num: 10, rightString: "+", label: t("全球清洗中心") },
    { num: 3, rightString: "秒", label: t("攻击响应时延") },
    { num: 99.99, rightString: "%", label: t("业务可用率") }
  ];
  const advantage = [
    {
      title: "超大防护带宽",
      icon: FaShieldAlt,
      desc: "Tbps级带宽储备，防护各类大流量DDoS攻击。"
    },
    {
      title: "智能流量识别",
      icon: FaBrain,
      desc: "AI识别恶意流量，精准过滤攻击。"
    },
    {
      title: "秒级响应",
      icon: FaBolt,
      desc: "攻击检测后3秒内启动防护机制，降低风险。"
    },
    {
      title: "全球清洗节点",
      icon: FaSatelliteDish,
      desc: "多地部署清洗中心，就近处理攻击流量。"
    },
    {
      title: "零部署接入",
      icon: FaServer,
      desc: "接入简单，无需额外软硬件，快速上线。"
    },
    {
      title: "业务稳定运行",
      icon: FaChartLine,
      desc: "攻击期间保障业务连续性与可用性。"
    }
  ];

  return (
    <div style={{ backgroundColor: "#000" }} className="bg-gradient-to-tr from-[#7f5cff]/10 via-[#00ffd1]/10 to-transparent">
      <Navbar />
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{backgroundImage:`url(${ddosBg.src})`}}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <TypingText texts={['超强DDoS防护', '守护网站与服务稳定', '让攻击无所遁形']}></TypingText>
        </div>
      </div>
      <div ref={section1Ref} className="flex justify-around items-center py-20 bg-black">
        <div className="text-white font-bold">
          <RevealOnScroll>
            <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("方案介绍")}
            </h1>
          </RevealOnScroll>

          <TypewriterText text="高防方案可智能识别并拦截DDoS攻击流量，保障网站、平台、应用在攻击期间稳定可用。支持秒级响应、全自动处理，防护无死角。" />
        </div>
        <Image ref={image1Ref} src={s1} alt="DDoS攻击防护" className="h-auto w-145 hidden md:block" />
      </div>

      <div className="flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#000] via-[#7f5cff]/10 via-[#00ffd1]/10 to-transparent">
        <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("能力指标")}
        </h1>
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
                  hover:-translate-y-2 hover:scale-[1.02]">
                <Icon className="text-purple-50 bg-gradient-to-r from-purple-200 to-cyan-50 bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)] text-4xl mb-3 mx-auto" />
                <h1 className="font-mono text-2xl font-bold  bg-clip-text mb-5 text-emerald-300 ">{t(item.title)}</h1>
                <div className="font-mono text-base font-bold bg-clip-text">{t(item.desc)}</div>
              </div></motion.div>
          })}
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-20 px-10 md:px-30 ">
        <h1 className="font-mono text-5xl mb-15 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("适用场景")}
        </h1>
        <RevealOnScroll delay={.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div style={{backgroundColor:"#0c1915"}} className="text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">游戏服务器</h3>
              <p className="text-sm opacity-80 mb-4">保障游戏联机不中断，抵御恶意攻击行为。</p>
              <Image src={ddosGame} alt="ddos gaming" className="h-50 w-full object-cover rounded-md" />
            </div>
            <div style={{backgroundColor:"#0c1915"}} className="text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">电商平台</h3>
              <p className="text-sm opacity-80 mb-4">高防保障活动期间业务连续不中断。</p>
              <Image src={ddosShop} alt="ddos ecommerce" className="h-50 w-full object-cover rounded-md" />
            </div>
            <div style={{backgroundColor:"#0c1915"}} className="text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">金融支付系统</h3>
              <p className="text-sm opacity-80 mb-4">防止攻击导致资金系统不可用或用户流失。</p>
              <Image src={ddosFinance} alt="ddos finance" className="h-50 w-full object-cover rounded-md" />
            </div>
          </div>
        </RevealOnScroll>
        <div className="text-center pt-30 ">
          <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("让攻击止步于此")}
          </h1>

          <p className="text-lg text-white/70 mb-8">部署企业级高防方案，即刻保护您的业务</p>
          <AnimatedBorderButton onClick={() => {
            router.push('/contact');
          }}>
            获取高防服务
          </AnimatedBorderButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DDoSProtectionPage;