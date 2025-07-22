'use client';

import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import h1 from '@/app/assets/home/h1.jpeg'
import h2 from '@/app/assets/home/h2.jpg'
import h3 from '@/app/assets/home/h3.jpeg'
import h4 from '@/app/assets/home/h4.jpeg'
import h5 from '@/app/assets/home/h5.jpg'
import h6 from '@/app/assets/home/h6.jpg'

import o1 from '@/app/assets/service/it/o1.png'
import o2 from '@/app/assets/service/it/o2.png'
import o3 from '@/app/assets/service/it/o3.png'
import o4 from '@/app/assets/service/it/o4.png'

import { useLanguage } from "@/context/languageContext";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TypingText from "./writer";
import { CountUp } from "./countUp";
import { RevealOnScroll } from "../components/animate";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { t } = useLanguage();

  const items1 = [t("内容分发网络(CDN)"), t("TCP端口转发"), t("视频流媒体加速"), t("全站加速")];
  const items2 = [t("DDoS防御"), t("防CC攻击"), t("源点隐藏"), t("WAF防火墙"), t("SSL安全证书")];
  const items3 = [t("负载均衡"), t("智能路由"), t("全球机房"), t("多线直连")];
  const items4 = [t("错误检测"), t("实时状态警报"), t("综合统计报表"), t("月度报告")];
  const cards = [{num:9,label:t("数据中心")}, {num:900,numString:"+",label:t("节点")}, {num:100,numString:"亿",label:t("日请求量")}];

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        image1Ref.current,
        { y: 1000, opacity: 1 },
        {
          y: 0,
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
      const ctx = gsap.context(() => {
        gsap.fromTo(
          image2Ref.current,
          { x: 1000, opacity: 1 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section2Ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

      }, section2Ref);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // gsap.fromTo(
      //   text3Ref.current,
      //   { x: 1000, opacity: 0 },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     duration: 1.2,
      //     ease: 'power3.out',
      //     scrollTrigger: {
      //       trigger: section3Ref.current,
      //       start: 'top 80%',
      //       toggleActions: 'play none none reverse',
      //     },
      //   }
      // );
      gsap.fromTo(
        image3Ref.current,
        { x: -1000, opacity: 1 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section3Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

    }, section3Ref);

  return () => ctx.revert();
}, []);
  
  const functionList = [
    {
      title: t("优化网络性能"),
      img: o1,
      desc: [t("内容分发网络(CDN)"), t("TCP端口转发"), t("视频流媒体加速"), t("全站加速")],
    },
    {
      title: t("增强网络安全性"),
      img: o2,
      desc: [t("DDoS防御"), t("防CC攻击"), t("源点隐藏"), t("WAF防火墙"), t("SSL安全证书")],
    },
    {
      title: t("提高网络可用性"),
      img: o3,
      desc: [t("负载均衡"), t("智能路由"), t("全球机房"), t("多线直连")],
    },
    {
      title: t("激活网络可视化"),
      img: o4,
      desc: [t("错误检测"), t("实时状态警报"), t("综合统计报表"), t("月度报告")],
    },
  ]


  return (
    <div className="bg-black h-screen scroll-smooth snap-y snap-mandatory">
      <Navbar />
      {/* <Reveal zIndex={1}> */}
        <div className="w-full h-screen flex flex-col items-center" style={{ background: 'linear-gradient(180deg, #03020d,black)', }}>
          <TypingText texts={['CDN全球加速','超强安全防护','稳定 · 安全 · 极速']}></TypingText>
          <Image src={h1} alt="KainoAI" className="w-250 h-auto " />
        </div>
      {/* </Reveal> */}
       {/* <Reveal zIndex={2}> */}
        <section ref={section1Ref} className="will-change-transform overflow-hidden w-full h-screen flex justify-around items-center " style={{ background: 'linear-gradient(180deg, #03020d,#03020d,#070b25,#06071a)'}}>
          <Image ref={image1Ref} src={h2} alt="KainoAI" className="h-auto w-110 hidden md:block" />
          <div  className="text-white font-bold flex flex-col">
            <RevealOnScroll>
              <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
                  {t("优化网络性能")}
              </h1>
            </RevealOnScroll>
            {items1.map((value, i) => (
              <RevealOnScroll key={value} delay={0.2 + i * 0.2}>
                <h3 className="text-xl md:text-2xl mt-10">· {value}</h3>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      {/* </Reveal> */}
      {/* <Reveal zIndex={3}> */}
        <section ref={section2Ref} className="will-change-transform overflow-hidden w-full h-screen flex justify-around items-center" style={{ background: 'linear-gradient(180deg, #06071a,#0c1435,#091434,#091434,#0d1f55,#0b153c,#070835)', }}>
          <div className="text-white font-bold flex flex-col ml-20">
          <RevealOnScroll>
              <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
                  {t("增强网络安全性")}
              </h1>
            </RevealOnScroll>
            {items2.map((value, i) => (
              <RevealOnScroll key={value} delay={0.2 + i * 0.2}>
                <h3 className="text-xl md:text-2xl mt-10">· {value}</h3>
              </RevealOnScroll>
            ))}
          </div>
          <Image ref={image2Ref} src={h3} alt="KainoAI" className="h-auto w-90 hidden md:block" />
        </section>
      {/* </Reveal>

      <Reveal zIndex={4}> */}
        <section ref={section3Ref} className="will-change-transform overflow-hidden w-full h-screen flex justify-around items-center" style={{ background: 'linear-gradient(180deg,#070835,#080935,#080935,#110d44,#180f58,#180f58,#0d0834', }}>
          <Image ref={image3Ref} src={h4} alt="KainoAI" className="h-auto w-125 hidden md:block" />
          <div className="text-white font-bold flex flex-col ">
            
            <RevealOnScroll>
              <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
                  {t("提高网络可用性")}
              </h1>
            </RevealOnScroll>
            {items3.map((value, i) => (
              <RevealOnScroll key={value} delay={0.2 + i * 0.2}>
                <h3 className="text-xl md:text-2xl mt-10">· {value}</h3>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      {/* </Reveal>

      <Reveal zIndex={5}> */}
        <section className=" w-full h-screen flex justify-around items-center" style={{ background: 'linear-gradient(180deg, #0d0834,#111529,#111529,#12162a,#12162a,#12162a,#12162a', }}>
          <div className="text-white font-bold flex flex-col ">
          <RevealOnScroll>
              <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
                  {t("激活网络可视化")}
              </h1>
            </RevealOnScroll>
            {items4.map((value, i) => (
              <RevealOnScroll key={value} delay={0.2 + i * 0.2}>
                <h3 className="text-xl md:text-2xl mt-10">· {value}</h3>
              </RevealOnScroll>
            ))}
          </div>
          <Image src={h5} alt="KainoAI" className="h-auto w-125 hidden md:block" />
        </section>
      {/* </Reveal>

      <Reveal zIndex={6}> */}
        <section className=" w-full flex flex-col items-center pt-30" style={{ background: 'linear-gradient(180deg, #0d0834,#111529,#111529,#12162a,#12162a,#12162a,#12162a', }}>
          <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("数据网络")}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 mt-20"> 
          {cards.map((item)=><RevealOnScroll key={item.num} delay={.2}><div
              className="flex flex-col items-center 
                    border-[5px] border-stone-400 
                    w-60
                    rounded-xl font-bold py-25 
                    text-center
                    transition-all duration-300 ease-in-out
                    hover:border-emerald-300 
                    hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] 
                    hover:-translate-y-2 hover:scale-[1.02]"
            >
              <CountUp
                end={typeof item.num === 'number' ? item.num : 0}
                text={item.numString}
                className="text-emerald-300 text-6xl mb-10"
              />
              <div className="text-white text-3xl">{item.label}</div>
            </div></RevealOnScroll>)}
          </div>
        </section>
      {/* </Reveal>
      <Reveal zIndex={7}> */}
        <section className=" w-full h-screen flex justify-around items-center" style={{ background: 'linear-gradient(180deg, #12162a,#040630,#040630,#040630,#040630,#04072f)', }}>
          <Image src={h6} alt="KainoAI" className=" w-105 hidden md:block" />
          <div className="text-white font-bold flex flex-col items-center">
            <h1 className="font-mono text-5xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
              {t("提供操作后台")}
            </h1>
            <div className="flex gap-15 mt-15">
              <div className="border-2 border-stone-50 rounded-lg px-5 py-3 text-xl bg-white text-purple-950" >
                免费测试
              </div>
              <div className="border-2 border-purple-100 rounded-lg px-5 py-3 text-xl text-purple-100">
                联系我们
              </div>
            </div>
          </div>
        </section>
        <Footer />
      {/* </Reveal> */}
    </div>
  );
};

export default Home;
