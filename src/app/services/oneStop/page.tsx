
import Image from "next/image";
import img1 from './img1.png'
import o1 from '@/app/assets/service/o1.png'
import o2 from '@/app/assets/service/o2.png'
import o3 from '@/app/assets/service/o3.png'
import o4 from '@/app/assets/service/o4.png'
import o5 from '@/app/assets/service/o5.png'
import o6 from '@/app/assets/service/o6.png'
import o7 from '@/app/assets/service/o7.png'
import o8 from '@/app/assets/service/o8.png'
import o9 from '@/app/assets/service/o9.png'
import o10 from '@/app/assets/service/o10.png'
import o11 from '@/app/assets/service/o11.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
const App = () => {
  const functionList =[
    {
      title:'智能数据管理',
      img:o1,
      desc:'大数据存储，可视化分析，自动化管理',
    },
    {
      title:'云计算与安全',
      img:o2,
      desc:'网络搭建，网站加速，数据加密',
    },
    {
      title:'监控和预警',
      img:o3,
      desc:'安全监控，故障预警，实时报告',
    },
    {
      title:'系统维护优化',
      img:o4,
      desc:'定期更新，功能扩展，故障诊断，技术支持',
    },
  ]

  const scenariosList = [
    {
      title:'传统企业转型',
      img:o5,
    },
    {
      title:'企业部门协调',
      img:o6,
    },
    {
      title:'高需求行业',
      img:o7,
    },
    {
      title:'实时响应系统',
      img:o8,
    },
  ]

  const advList =[
    {
      title:'高集成性',
      img:o9,
      desc:'各功能之间无缝协作，一站式管理，无忧切换',
    },
    {
      title:'高定制性',
      img:o10,
      desc:'根据企业规模，行业特点，灵活配置，按需定制',
    },
    {
      title:'高安全性',
      img:o11,
      desc:'分级保障，高度加密，确保数据安全和系统稳定',
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
          <div className="bg-stone-100 p-10">
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
            </div>
            ))}
          </section>
          <div className="w-full flex flex-col items-center py-10 bg-white">
          <h2 className="mt-36 mb-5 text-3xl md:text-3xl font-bold text-gray-800 mb-12">开发流程</h2>
          <section className="flex justify-between">
          {advList.map((item=>
            <div className="bg-white mr-10 flex flex-col items-center ml-10 mr-10">
                <Image src={item.img} alt={item.title} className="w-20 h-auto" />
                <h3 className="mt-3 text-sm font-bold text-black text-center ">{item.title}</h3>
                <h3 className="mt-2 text-sm w-55 font-bold text-black text-center text-stone-400">{item.desc}</h3>
            </div>
            ))}
          </section>
        </div>
      </div>


      <Footer/>
    </div>
  );
};

export default App;
