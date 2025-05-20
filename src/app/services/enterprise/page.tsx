
import Image from "next/image";
import e1 from '@/app/assets/service/e1.png'
import e2 from '@/app/assets/service/e2.png'
import e3 from '@/app/assets/service/e3.png'
import e4 from '@/app/assets/service/e4.png'
import img1 from './img1.jpg'
import img2 from './img2.png'

import e5 from '@/app/assets/service/e5.png'
import e6 from '@/app/assets/service/e6.png'
import e7 from '@/app/assets/service/e7.png'
import e8 from '@/app/assets/service/e8.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
const App = () => {
  const functionList =[
    {
      title:'深度定制',
      img:e1,
      desc:'针对行业需求，设计打造专属数字化解决方案',
    },
    {
      title:'技术支持',
      img:e2,
      desc:'涵盖前端、后端、移动端开发及系统集成等全栈技术支持。',
    },
    {
      title:'快速交付',
      img:e3,
      desc:'专业团队和开发流程，保障项目高效推进并按期交付。',
    },
    {
      title:'可扩展架构',
      img:e4,
      desc:'系统架构灵活，支持后续功能拓展和业务规模增长需求。',
    },
  ]

  const scenariosList = [
    {
      title:'自动化管理',
      img:e5,
      desc:'通过智能化工具实现业务流程自动化。',
    },
    {
      title:'企业资源优化',
      img:e6,
      desc:'实现企业系统集成，数据互通与协同办公。',
    },
    {
      title:'供销链监控',
      img:e7,
      desc:'根据行业特点打优化物流调度与供应链管理，实现精细化运营造专业移动端门户',
    },
    {
      title:'运营数据支持',
      img:e8,
      desc:'提供数据管理、分析与运维服务。',
    },
  ]

  return (
    <div className="bg-white min-w-7xl ">
      <Navbar />
      <div className="pl-25 pr-25 pt-14">
        <section className="flex">
        <div
          className={`relative overflow-hidden w-550 h-100`}
        >
          <Image
            src={img1}
            alt=""
            fill
            className="object-cover object-bottom"
          />
        </div>
          <div className="bg-stone-100 p-8">
            <h3 className="text-3xl font-bold text-black">企业数字化转型方案服务</h3>
            <p className="mt-5 text-sm text-black leading-7">
            我们为企业提供数字化定制开发服务，涵盖自动化管理、系统集成、代码定制优化和数据运维等领域，集中解决企业运营的痛点，提升业务流程效率，降低运营成本，帮助企业实现从传统模式向现代化、智能化运营的全面转型。
            </p>
            <p className="mt-5 text-sm text-black leading-7">
            无论是企业管理后台、自动化数据分析，还是业务流程的优化与集成，为您的业务量身打造高效、智能的数字化解决方案。帮助企业实现数字化升级和可持续发展目标。
            </p>
          </div>
        </section>


        <h3 className="mt-36 mb-5 text-3xl font-bold mt-2 text-black text-center">功能特点</h3>
        <section className="flex justify-center p-10">
          {functionList.map((item=>
          <div className="flex flex-col items-center ml-5 mr-5">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image src={item.img} alt={item.title} className="w-full h-auto" />
                </div>
                <div className="flip-card-back">
                  <div>{item.desc}</div>
                </div>
              </div>
            </div>
            <h3 className="text-base font-bold text-black text-center">{item.title}</h3>
          </div>
          ))}
          </section>
          <h3 className="mt-36 mb-15 text-3xl font-bold text-black text-center">服务范围</h3>
          <section className="flex justify-between ">
          {scenariosList.map((item=>
            <div className="bg-white ml-5 mr-5">
                <Image src={item.img} alt={item.title} className="w-full h-auto" />
                <h3 className="mt-6 text-sm font-bold text-black text-center text-yellow-500">{item.title}</h3>
                <h3 className="mt-2 text-sm font-bold text-black text-center ">{item.desc}</h3>
            </div>
            ))}
          </section>
          <div className="w-full flex flex-col items-center py-10 bg-white">
          <h2 className="mt-36 mb-5 text-3xl md:text-3xl font-bold text-gray-800 mb-12">开发流程</h2>
          <Image
            src={img2}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
