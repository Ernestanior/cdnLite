
import Image from "next/image";
import p1 from '@/app/assets/service/p1.png'
import p2 from '@/app/assets/service/p2.png'
import p3 from '@/app/assets/service/p3.png'
import p4 from '@/app/assets/service/p4.png'
import img1 from './img1.png'
import img2 from './img2.png'

import p5 from '@/app/assets/service/p5.png'
import p6 from '@/app/assets/service/p6.png'
import p7 from '@/app/assets/service/p7.png'
import p8 from '@/app/assets/service/p8.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
const App = () => {
  const functionList =[
    {
      title:'灵活客制化',
      img:p2,
      desc:'根据不同业务需求，自定义移动端界面。',
    },
    {
      title:'跨平台兼容',
      img:p1,
      desc:'支持主流浏览器与移动设备，提供一致且优质的使用体验。',
    },
    {
      title:'高性能响应',
      img:p3,
      desc:'优化页面加载速度与用户交互体验，确保操作流畅、无延迟',
    },
    {
      title:'强安全稳定',
      img:p4,
      desc:'严格的防护技术与安全验证，保障用户与企业数据安全。',
    },
  ]

  const scenariosList = [
    {
      title:'企业移动官网开发',
      img:p5,
      desc:'提供适配移动端的企业官网，提升用户访问体验',
    },
    {
      title:'业务管理与推广平台',
      img:p6,
      desc:'支持企业内部业务流程管理与市场营销功能',
    },
    {
      title:'行业移动端门户网站',
      img:p7,
      desc:'根据行业特点打造专业移动端门户',
    },
    {
      title:'订单与账单管理平台',
      img:p8,
      desc:'提高能源利用，降低管理成本',
    },
  ]
  // const developFlow = [
  //   {
  //     title:'了解需求',
  //     desc:'与客户沟通需求，明确项目目标'
  //   },
  //   {
  //     title:'原型开发',
  //     desc:'创建项目原型，确认设计框架'
  //   },
  //   {
  //     title:'代码创建',
  //     desc:'规范化编写代码，实现功能'
  //   },
  //   {
  //     title:'部署测试',
  //     desc:'完成部署与测试，确保系统稳定运行'
  //   },
  //   {
  //     title:'上线交付',
  //     desc:'验收交付，提供售后支持服务'
  //   },
  // ]
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
            <h3 className="text-3xl font-bold text-black">移动端APP开发服务</h3>
            <p className="mt-5 text-sm text-black leading-7">
              我们提供专业的移动端网页开发服务，致力于为企业打造高效、稳定、功能完善的移动端网页系统，全面满足当前快速发展的移动互联网需求。通过深入理解行业特性与用户行为，我们为客户量身定制具有良好交互体验、优雅界面设计和出色性能表现的移动网页解决方案。
            </p>
            <p className="mt-5 text-sm text-black leading-7">
              我们的服务不仅聚焦前端页面开发，还涵盖移动端架构设计、响应式布局、自适应UI设计、性能优化、数据安全、API集成等全流程技术支持。借助现代化开发框架（如Vue.js、React、uni-app 等），我们帮助企业在移动端实现更快的加载速度、更流畅的用户体验和更强的系统可扩展性。
            </p>
          </div>
        </section>


        <h3 className="mt-36 mb-10 text-3xl font-bold mt-2 text-black text-center">功能特点</h3>
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
