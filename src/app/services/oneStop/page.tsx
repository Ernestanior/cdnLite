
import Image from "next/image";
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import a4 from '@/app/assets/products/a4.png'
import f1 from '@/app/assets/products/b1.png'
import f2 from '@/app/assets/products/b2.png'
import f3 from '@/app/assets/products/b3.png'
import f4 from '@/app/assets/products/b4.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Button } from "antd";
const App = () => {
  const functionList =[
    {
      title:'智能数据管理',
      img:a2,
      desc:'大数据存储，可视化分析，自动化管理',
    },
    {
      title:'云计算与安全',
      img:a1,
      desc:'网络搭建，网站加速，数据加密',
    },
    {
      title:'监控和预警',
      img:a3,
      desc:'安全监控，故障预警，实时报告',
    },
    {
      title:'系统维护优化',
      img:a4,
      desc:'定期更新，功能扩展，故障诊断，技术支持',
    },
  ]

  const scenariosList = [
    {
      title:'传统企业转型',
      img:f1,
    },
    {
      title:'企业部门协调',
      img:f2,
    },
    {
      title:'高需求行业',
      img:f3,
    },
    {
      title:'实时响应系统',
      img:f4,
    }
  ]
  const developFlow = [
    {
      title:'高集成性',
      img:a1,
      desc:'各功能之间无缝协作，一站式管理，无忧切换'
    },
    {
      title:'高定制性',
      img:a2,
      desc:'根据企业规模，行业特点，灵活配置，按需定制'
    },
    {
      title:'高安全性',
      img:a3,
      desc:'分级保障，高度加密，确保数据安全和系统稳定'
    },

  ]
  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <h3 className="mt-26 text-4xl font-bold text-black text-center">企业定制开发服务简介</h3>
      <h5 className="mt-5 text-3xl text-black text-center pl-50 pr-50 leading-16">
        从云计算到资源管理，从数据安全到系统维护，裂谷一站式IT管理解决方案为企业提供全生命周期支持，助力企业实现一站式智能化管理，减少运营损耗，提高安全保障
      </h5>
      <h3 className="mt-36 mb-13 text-4xl font-bold mt-2 text-black text-center">产品功能</h3>
      <section className="flex justify-around">
          {functionList.map((item=>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image src={item.img} alt={item.title} className="w-full h-auto" />
                  <h3 className="mt-6 text-xl font-bold mt-2 text-black text-center">{item.title}</h3>
                </div>
                <div className="flip-card-back">
                  <div>{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
      </section>
      <h3 className="mt-46 text-4xl font-bold text-black text-center">应用场景</h3>
      <section className="grid grid-cols-4 gap-6 p-5 pl-40 pr-40">
      {scenariosList.map((item=>
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={item.img} alt={item.title} className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-black text-center">{item.title}</h3>
        </div>
        ))}
      </section>
      <div className="mt-10 w-full flex flex-col items-center py-10 bg-white">
        <h2 className=" mb-5 text-4xl font-bold text-gray-800 ">方案优势</h2>
        <section className="flex gap-6 p-5 pl-40 pr-40">
          {developFlow.map((item=>
            <div className="bg-white p-8 flex">
              <div className="p-6 rounded-full bg-blue-50 mr-5">
                <Image src={item.img} alt={item.title} className="w-40 h-auto" />
              </div>
              <div className="w-70  text-black">
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <h3 className="mt-2 text-base">{item.desc}</h3>
              </div>
              </div>
          ))}
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
