
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
const App = () => {
  const functionList =[
    {
      title:'深度定制',
      img:a2,
      desc:'针对行业需求，设计打造专属数字化解决方案',
    },
    {
      title:'技术支持',
      img:a1,
      desc:'涵盖前端、后端、移动端开发及系统集成等全栈技术支持',
    },
    {
      title:'快速交付',
      img:a3,
      desc:'专业团队和开发流程，保障项目高效推进并按期交付',
    },
    {
      title:'可扩展架构',
      img:a4,
      desc:'系统架构灵活，支持后续功能拓展和业务规模增长需求',
    },
  ]

  const scenariosList = [
    {
      title:'自动化管理',
      img:f1,
      desc:'通过智能化工具实现业务流程自动化',
    },
    {
      title:'企业资源优化',
      img:f2,
      desc:'实现企业系统集成，数据互通与协同办公',
    },
    {
      title:'供销链监控',
      img:f3,
      desc:'优化物流调度与供应链管理，实现精细化运营',
    },
    {
      title:'运营数据支持',
      img:f4,
      desc:'提供数据管理、分析与运维服务',
    }
  ]
  const developFlow = [
    {
      title:'了解需求',
      desc:'详细沟通，深入了解，全面认识'
    },
    {
      title:'设计方案',
      desc:'分析需求，明确架构、规划模块，量身定制'
    },
    {
      title:'投入开发',
      desc:'确定方案，快速投入，敏捷开发，按时交付'
    },
    {
      title:'测试与部署',
      desc:'全面测试性能及安全，成功部署到生产环境中'
    },
    {
      title:'培训与维护',
      desc:'提供培训，技术支持与系统维护'
    },
  ]
  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <h3 className="mt-26 text-4xl font-bold text-black text-center">企业定制开发服务简介</h3>
      <h5 className="mt-5 text-3xl text-black text-center pl-50 pr-50 leading-16">
        我们为企业提供数字化定制开发服务，涵盖自动化管理、系统集成、代码定制优化和数据运维等领域，集中解决企业运营的痛点，提升业务流程效率，降低运营成本，帮助企业实现从传统模式向现代化、智能化运营的全面转型。
        无论是企业管理后台、自动化数据分析，还是业务流程的优化与集成，为您的业务量身打造高效、智能的数字化解决方案。帮助企业实现数字化升级和可持续发展目标
      </h5>

      <h3 className="mt-36 mb-10 text-4xl font-bold mt-2 text-black text-center">功能特点</h3>
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
      <h3 className="mt-36 text-4xl font-bold text-black text-center">适用行业</h3>
      <section className="grid grid-cols-4 gap-6 p-15 pl-40 pr-40">
      {scenariosList.map((item=>
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={item.img} alt={item.title} className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-black text-center">{item.title}</h3>
        </div>
        ))}
      </section>
      <div className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">开发流程</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {developFlow.map((step, index) => (
          <div key={index} className="relative flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-8 py-4 rounded-l-md shadow-md">
              <div className="text-lg">{step.title}</div>
              <div className="text-xs">{step.desc}</div>
            </div>
            
              <div className="w-0 h-0 border-t-[36] border-t-transparent border-b-[40] border-b-transparent border-l-[30px] border-l-blue-700" />
          </div>
        ))}
      </div>
    </div>

      <Footer/>
    </div>
  );
};

export default App;
