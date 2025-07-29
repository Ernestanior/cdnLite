'use client'
import Image from "next/image";
import s1 from '@/app/assets/security/waf1.jpeg'
import waf2 from '@/app/assets/security/waf2.jpg'
import waf3 from '@/app/assets/security/waf3.jpg'
import waf4 from '@/app/assets/security/waf4.jpg'

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
import {FaBell, FaCogs, FaExclamationTriangle, FaFilter, FaRetweet, FaShieldAlt } from 'react-icons/fa';
import TypingText from "../../home/writer";
import AnimatedBorderButton from "../../components/AnimatedButton";
import { useRouter } from "next/navigation";
import { CountUp } from "../../components/countUp";

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
    { num: 100, rightString: "%", label: t("非法域名识别准确率") },
    { num: 0, rightString: "", label: t("误判合法流量") },
    { num: 5, rightString: "min", label: t("策略生效时间") },
    { num: 24, rightString: "h", label: t("持续监控防护") }
  ];
  const advantage = [
    {
      title: "拦截非法访问",
      icon: FaShieldAlt,
      desc: "自动识别未授权域名访问请求，拦截并跳转至安全地址。"
    },
    {
      title: "品牌防钓鱼",
      icon: FaExclamationTriangle,
      desc: "有效防止第三方仿站、恶意钓鱼，保护用户信任。"
    },
    {
      title: "统一跳转策略",
      icon: FaRetweet,
      desc: "可设置统一跳转页面或首页，引导访问至正规入口。"
    },
    {
      title: "快速配置",
      icon: FaCogs,
      desc: "简单设置即可上线，无需代码改动，兼容各类服务。"
    },
    {
      title: "灵活匹配规则",
      icon: FaFilter,
      desc: "支持泛域名、关键词、子域名等多种规则匹配拦截。"
    },
    {
      title: "实时监控与告警",
      icon: FaBell,
      desc: "系统实时监控非法跳转行为并支持告警通知。"
    }
  ]
  
  return (
    <div style={{backgroundColor:"#030d20"}}>
      <Navbar />
      <div className="relative w-full h-[500px] bg-cover bg-center bg-[url('@/app/assets/security/wafBg.jpeg')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <TypingText texts={['拒绝恶意跳转，守护品牌安全', '屏蔽无效域名访问', '精准引导合法流量']}></TypingText>
        </div>
      </div>
      <div ref={section1Ref} className="flex justify-around items-center py-20" style={{backgroundColor:"#030d20"}} >
        <div className="text-white font-bold flex flex-col">
          <RevealOnScroll>
            <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("屏蔽域名跳转")}
            </h1>
          </RevealOnScroll>

          <TypewriterText text="屏蔽域名跳转服务可帮助企业防止恶意解析、钓鱼伪站和非法跳转，通过智能识别与统一跳转策略，将非法访问流量重定向至指定地址，有效保障品牌形象与业务安全。" />
        </div>
        <Image ref={image1Ref} src={s1} alt="WAF" className="h-auto w-125 hidden lg:block" />
      </div>
      <div className="flex flex-col justify-center items-center py-20 ">
        <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("方案介绍")}
        </h1>
        <div className="w-50 md:w-180 text-center font-bold text-base/9">通过遍布全球的边缘节点，和各节点间多条高速直连线路，结合智能调度技术，既满足了客户的扩展需求，缓解了源站压力，同时又保证用户就近访问，提高网页响应速度，为终端用户提供更优的访问体验，并有效预防单节点故障影响全局访问。</div>
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
          {t("方案优势")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 pt-15">
          {advantage.map((item, index) => {
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
      <section className="flex flex-col justify-center items-center py-20 px-10 md:px-30 " >
        <h1 className="font-mono text-5xl mb-15 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("使用场景")}
        </h1>
        <RevealOnScroll delay={.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-slate-950 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">品牌保护</h3>
              <p className="text-sm opacity-80 mb-4">防止域名被冒用造成信任损失，提升正规访问占比</p>
              <Image src={waf3} alt="static site" className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="bg-slate-950 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">安全合规需求</h3>
              <p className="text-sm opacity-80 mb-4">满足政府监管要求，禁止跳转至非法或海外站点</p>
              <Image src={waf2} alt="video delivery" className="h-50 w-full object-cover rounded-md " />
            </div>
            <div className="bg-slate-950 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">防止恶意流量劫持</h3>
              <p className="text-sm opacity-80 mb-4">拦截来自非法 DNS 的访问请求，保护核心资源</p>
              <Image src={waf4} alt="image acceleration" className="h-50 w-full object-cover rounded-md" />
            </div>
          </div>
        </RevealOnScroll>
        <div className="text-center pt-30 ">
          <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("为您的网站部署域名跳转防护")}
          </h1>

          <p className="text-lg text-white/70 mb-8">立即启用屏蔽跳转策略，保护品牌与用户安全</p>
          <AnimatedBorderButton onClick={() => {
            router.push('/contact');
          }}>
            启用跳转防护
          </AnimatedBorderButton>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default StaticPage;
