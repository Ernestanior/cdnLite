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


import { BookFilled, CloudFilled, ProductFilled, StarFilled } from "@ant-design/icons";
import { useLanguage } from "@/context/languageContext";

const Home = () => {
    const { t } = useLanguage();

    const functionList = [
      {
        title: t("优化网络性能"),
        img: o1,
        desc: [t("内容分发网络(CDN)"),t("TCP端口转发"),t("视频流媒体加速"),t("全站加速")],
      },
      {
        title: t("增强网络安全性"),
        img: o2,
        desc: [t("DDoS防御"),t("防CC攻击"),t("源点隐藏"),t("WAF防火墙"),t("SSL安全证书")],
      },
      {
        title: t("提高网络可用性"),
        img: o3,
        desc: [t("负载均衡"),t("智能路由"),t("全球机房"),t("多线直连")],
      },
      {
        title: t("激活网络可视化"),
        img: o4,
        desc: [t("错误检测"),t("实时状态警报"),t("综合统计报表"),t("月度报告")],
      },
    ]
    const services = [
        {
          icon:<StarFilled />,
          title: t("TAILORED_SOLUTIONS"),
          description: t("TAILORED_SOLUTIONS_DESC"),
        },
        {
          icon: <ProductFilled />,
          title: t("HIGH_QUALITY_DELIVERY"),
          description: t("HIGH_QUALITY_DELIVERY_DESC"),
        },
        {
          icon: <BookFilled />,
          title: t("TECHNICAL_EXPERTISE"),
          description: t("TECHNICAL_EXPERTISE_DESC"),
        },
        {
          icon: <CloudFilled />,
          title: t("INNOVATIVE_SUPPORT"),
          description: t("INNOVATIVE_SUPPORT_DESC"),
        },
      ];

  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <div className=" w-full h-200 flex flex-col  justify-center items-center" style={{background: 'linear-gradient(180deg, #03020d,#060928)',}}>
        <h1 className="font-mono my-20 mt-50 text-6xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          提供更加安全快速的网络
        </h1>
        <Image src={h1} alt="KainoAI" className="h-165 w-340" />
      </div>
      {/* <HomeCarousel /> */}
      <div className=" w-full h-220 pt-50 flex justify-around items-center" style={{background: 'linear-gradient(180deg, #03020d,#03020d,#070b25,#06071a)',}}>
        <Image src={h2} alt="KainoAI" className="h-155 w-145" />
        <div className="text-white font-bold flex flex-col ">
          <h1 className="font-mono text-6xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("优化网络性能")}
          </h1>
          <h3 className="font-mono text-3xl mt-10">
            · {t("内容分发网络(CDN)")}
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("TCP端口转发")}  
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("视频流媒体加速")}
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("全站加速")}
          </h3>
        </div>
      </div>
      <div className=" w-full h-220 flex justify-around items-center" style={{background: 'linear-gradient(180deg, #06071a,#000,#000,#000,#000,#070835)',}}>
        <div className="text-white font-bold flex flex-col ">
          <h1 className="font-mono text-6xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("增强网络安全性")}
          </h1>
          <h3 className="font-mono text-3xl mt-10">
            · {t("DDoS防御")}
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("防CC攻击")}  
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("源点隐藏")}
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("WAF防火墙")}
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("SSL安全证书")}
          </h3>
        </div>
        <Image src={h3} alt="KainoAI" className="h-150 w-205" />
      </div>
      <div className=" w-full h-220 flex justify-around items-center" style={{background: 'linear-gradient(180deg,#070835,#080935,#080935,#110d44,#180f58,#180f58,#0d0834',}}>
        <Image src={h4} alt="KainoAI" className="h-135 w-165" />
        <div className="text-white font-bold flex flex-col ">
          <h1 className="font-mono text-6xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("提高网络可用性")}
          </h1>
          <h3 className="font-mono text-3xl mt-10">
            · {t("负载均衡")}
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("智能路由")}  
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("全球机房")}
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("多线直连")}
          </h3>
        </div>
      </div>
      <div className=" w-full h-220 flex justify-around items-center" style={{background: 'linear-gradient(180deg, #0d0834,#111529,#111529,#12162a,#12162a,#12162a,#12162a',}}>
        <div className="text-white font-bold flex flex-col ">
          <h1 className="font-mono text-6xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
            {t("激活网络可视化")}
          </h1>
          <h3 className="font-mono text-3xl mt-10">
            · {t("错误检测")}
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("实时状态警报")}  
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("综合统计报表")}
          </h3>
          <h3 className="font-mono text-3xl mt-10">
            · {t("月度报告")}
          </h3>
        </div>
        <Image src={h5} alt="KainoAI" className="h-135 w-145" />
      </div>
      <div className=" w-full h-220 flex flex-col items-center" style={{background: 'linear-gradient(180deg, #0d0834,#111529,#111529,#12162a,#12162a,#12162a,#12162a',}}>
        <h1 className="font-mono text-6xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
          {t("数据网络")}
        </h1>
        <div className="grid grid-cols-3 gap-40 mt-50">
        <div
          className="flex flex-col items-center 
                    border-[5px] border-stone-400 
                    rounded-xl font-bold px- py-25 
                    text-center
                    transition-all duration-300 ease-in-out
                    hover:border-emerald-300 
                    hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] 
                    hover:-translate-y-2 hover:scale-[1.02]"
        >
          <div className="text-emerald-300 text-8xl mb-10">9</div>
          <div className="text-white text-4xl">数据中心</div>
        </div>
        <div
          className="flex flex-col items-center 
                    border-[5px] border-stone-400 
                    rounded-xl font-bold px- py-25 
                    text-center
                    transition-all duration-300 ease-in-out
                    hover:border-emerald-300 
                    hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] 
                    hover:-translate-y-2 hover:scale-[1.02]"
        >
          <div className="text-emerald-300 text-8xl mb-10">900+</div>
          <div className="text-white text-4xl">节点</div>
        </div>
        <div
          className="flex flex-col items-center 
                    border-[5px] border-stone-400 
                    rounded-xl font-bold px- py-25 
                    text-center
                    transition-all duration-300 ease-in-out
                    hover:border-emerald-300 
                    hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] 
                    hover:-translate-y-2 hover:scale-[1.02]"
        >
          <div className="text-emerald-300 text-8xl mb-10">100亿+</div>
          <div className="text-white text-4xl">日请求量</div>
        </div>
      </div>
      </div>

      <div className=" w-full h-220 flex justify-around items-center" style={{background: 'linear-gradient(180deg, #12162a,#060730,#05073a,#04072f,#04072f)',}}>
        <Image src={h6} alt="KainoAI" className="h-155 w-145" />
        <div className="text-white font-bold flex flex-col items-center">
          <h1 className="font-mono text-6xl font-bold bg-gradient-to-r from-purple-100 to-cyan-50 text-transparent bg-clip-text drop-shadow-[5px_5px_10px_rgba(101,84,220,0.8)]">
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
      </div>
        <Footer/>
    </div>
  );
};

export default Home;
