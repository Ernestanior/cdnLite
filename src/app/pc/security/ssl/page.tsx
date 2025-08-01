'use client'
import Image from "next/image";
import s1 from '@/app/assets/security/sslShopping.jpg'
import sslShopping from '@/app/assets/security/sslShopping.jpg'
import sslEnterprise from '@/app/assets/security/sslEnterprise.jpg'
import sslMobile from '@/app/assets/security/sslMobile.jpg'
import wafBg from '@/app/assets/security/wafBg.jpeg'
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
import { FaSyncAlt, FaLock, FaChartLine, FaMobileAlt, FaMousePointer, FaHandshake } from 'react-icons/fa';
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
    { num: 95, rightString: "%", label: t("主流浏览器兼容性") },
    { num: 100, rightString: "%", label: t("自动续签成功率") },
    { num: 5, rightString: "+", label: t("合作CA品牌") },
    { num: 0, rightString: "", label: t("手动维护成本") }
  ];
  const advantage = [
    {
      title: "知名品牌合作",
      icon: FaHandshake,
      desc: "与全球领先证书颁发机构（CA）合作，签发安全可靠的SSL证书。"
    },
    {
      title: "一键申请证书",
      icon: FaMousePointer,
      desc: "集成式申请流程，支持一键签发与自动绑定，简化部署流程。"
    },
    {
      title: "自动续签",
      icon: FaSyncAlt,
      desc: "通过Greypanel平台申请的证书支持自动续签，无需人工干预。"
    },
    {
      title: "HTTPS加密防篡改",
      icon: FaLock,
      desc: "启用HTTPS加密，防止数据被中间人窃取或修改，保护用户隐私。"
    },
    {
      title: "提升搜索排名",
      icon: FaChartLine,
      desc: "启用SSL证书可提升搜索引擎排名，增强品牌信任度。"
    },
    {
      title: "全平台兼容",
      icon: FaMobileAlt,
      desc: "支持所有主流浏览器、iOS与Android设备，覆盖全面。"
    }
  ];
  return (
    <div style={{backgroundColor:"#030d20"}}>
      <Navbar />
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{backgroundImage:`url(${wafBg.src})`}}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <TypingText texts={['为网站和应用加密传输', '一键申请SSL证书', '保障数据安全可信']}></TypingText>
        </div>
      </div>
      <div ref={section1Ref} className="flex justify-around items-center py-20" style={{backgroundColor:"#030d20"}} >
        <div className="text-white font-bold flex flex-col">
          <RevealOnScroll>
            <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("SSL证书")}
            </h1>
          </RevealOnScroll>

          <TypewriterText text="证书方案提供一站式 HTTPS 加密服务。支持证书申请、上传、自动续签与集中管理，覆盖主流浏览器与移动端，保护用户数据不被窃听或篡改，提升访问安全与搜索排名。" />
        </div>
        <Image ref={image1Ref} src={s1} alt="SSL证书保护网站通信安全" className="h-auto w-125 hidden lg:block" />
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
      <section className="flex flex-col justify-center items-center py-20 px-10 md:px-30 " >
        <h1 className="font-mono text-5xl mb-15 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("使用场景")}
        </h1>
        <RevealOnScroll delay={.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-slate-950 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">企业官网 / 品牌站</h3>
              <p className="text-sm opacity-80 mb-4">保障官网安全访问，建立企业信任感</p>
              <Image src={sslEnterprise} alt="static site" className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="bg-slate-950 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">在线商城 / SaaS平台</h3>
              <p className="text-sm opacity-80 mb-4">保护支付与用户敏感数据传输，防劫持防泄露</p>
              <Image src={sslShopping} alt="video delivery" className="h-50 w-full object-cover rounded-md " />
            </div>
            <div className="bg-slate-950 text-white p-5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,255)]  shadow-[0_0_5px_rgba(255,255,255,5)]">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">移动APP接口加密</h3>
              <p className="text-sm opacity-80 mb-4">移动端 API 与服务器通信加密，阻断监听</p>
              <Image src={sslMobile} alt="image acceleration" className="h-50 w-full object-cover rounded-md" />
            </div>
          </div>
        </RevealOnScroll>
        <div className="text-center pt-30 ">
          <h1 className="font-mono text-5xl mb-10 font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("为您的网站启用全站加密")}
          </h1>

          <p className="text-lg text-white/70 mb-8">一站式证书申请、部署与续签服务</p>
          <AnimatedBorderButton onClick={() => {
            router.push('/contact');
          }}>
            马上启用 SSL
          </AnimatedBorderButton>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default StaticPage;
