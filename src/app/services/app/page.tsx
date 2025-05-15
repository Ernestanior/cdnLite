
import Image from "next/image";
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import a4 from '@/app/assets/products/a4.png'
import p1 from '@/app/assets/home/web1.png'
import p2 from '@/app/assets/home/web2.png'
import f1 from '@/app/assets/products/b1.png'
import f2 from '@/app/assets/products/b2.png'
import f3 from '@/app/assets/products/b3.png'
import f4 from '@/app/assets/products/b4.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
const App = () => {
  const functionList =[
    {
      title:'灵活客制化',
      img:a2,
      desc:'根据不同业务需求，自定义移动端界面',
    },
    {
      title:'跨平台兼容',
      img:a1,
      desc:'支持主流浏览器与移动设备，提供一致且优质的使用体验',
    },
    {
      title:'高性能响应',
      img:a3,
      desc:'优化页面加载速度与用户交互体验，确保操作流畅、无延迟',
    },
    {
      title:'强安全稳定',
      img:a4,
      desc:'严格的防护技术与安全验证，保障用户与企业数据安全',
    },
  ]

  const scenariosList = [
    {
      title:'企业移动官网开发',
      img:f1,
      desc:'提供适配移动端的企业官网，提升用户访问体验',
    },
    {
      title:'业务管理与推广平台',
      img:f2,
      desc:'支持企业内部业务流程管理与市场营销功能',
    },
    {
      title:'行业移动端门户网站',
      img:f3,
      desc:'根据行业特点打造专业移动端门户',
    },
    {
      title:'移动端服务平台',
      img:f4,
      desc:'实现商品展示，订单统计，客户管理，实时数据的应用开发',
    }
  ]
  const developFlow = [
    {
      title:'需求规划',
      desc:'深入沟通，明确客户需求和功能设计'
    },
    {
      title:'界面设计',
      desc:'提供用户体验原型与视觉设计'
    },
    {
      title:'集成开发',
      desc:'前端与后端功能开发，实现项目核心功能'
    },
    {
      title:'QA测试',
      desc:'功能测试、性能优化与安全检测，保障产品质量'
    },
    {
      title:'部署上线',
      desc:'完成项目部署与上线，提供长期维护与支持服务'
    },
  ]
  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <h3 className="mt-26 text-4xl font-bold text-black text-center">移动端服务简介</h3>
      <h5 className="mt-5 text-3xl text-black text-center pl-50 pr-50 leading-16">
        我们提供专业的移动端网页开发服务，帮助企业快速打造高效、稳定、功能强大的移动端网页系统，助力企业拓展移动市场、提升用户体验，实现业务增长与数字化升级。
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
              <div className="text-lg mb-2">{step.title}</div>
              <div className="text-xs w-35">{step.desc}</div>
            </div>
              <div className="w-0 h-0 border-t-[50] border-t-transparent border-b-[50] border-b-transparent border-l-[30px] border-l-blue-700" />
          </div>
        ))}
      </div>
    </div>

      <Footer/>
    </div>
  );
};

export default App;
