
import Image from "next/image";
import w1 from '@/app/assets/service/w1.jpg'
import w2 from '@/app/assets/service/w2.jpg'
import w3 from '@/app/assets/service/w3.png'
import w4 from '@/app/assets/service/w4.jpg'
import img1 from './img1.png'
import img2 from './img2.png'

import w5 from '@/app/assets/service/w5.png'
import w6 from '@/app/assets/service/w6.png'
import w7 from '@/app/assets/service/w7.png'
import w8 from '@/app/assets/service/w8.png'
import w9 from '@/app/assets/service/w9.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
const Web = () => {
  const functionList =[
    {
      title:'高度定制',
      img:w2,
      desc:'根据客户的个性化需求，量身定制，功能灵活，适配业务需要',
    },
    {
      title:'可扩展性',
      img:w1,
      desc:'支持多端适配，支持未来升级扩展和优化',
    },
    {
      title:'高质量交付',
      img:w3,
      desc:'完善的开发流程与项目管理，确保项目按时交付',
    },
    {
      title:'安全保障',
      img:w4,
      desc:'全面的数据加密与安全防护，保护企业信息安全',
    },
  ]

  const scenariosList = [
    {
      title:'企业管理后台系统',
      img:w5,
      desc:'实时设备监控，高效客户管理',
    },
    {
      title:'自动化数据展示与分析平台',
      img:w6,
      desc:'城市能源优化，应急响应调控',
    },
    {
      title:'在线商城与支付系统',
      img:w7,
      desc:'能源统一调配，减少消耗浪费',
    },
    {
      title:'订单与账单管理平台',
      img:w8,
      desc:'提高能源利用，降低管理成本',
    },
    {
      title:'行业定制门户网站',
      img:w9,
      desc:'提高能源利用，降低管理成本',
    }
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
      <div className="pl-25 pr-25 pt-15">
        <section className="flex">
        <div
          className={`relative overflow-hidden w-500 h-90`}
        
        >
          <Image
            src={img1}
            alt=""
            fill
            className="object-cover object-bottom"
          />
        </div>
          <div className="bg-stone-100 p-10">
            <h3 className="text-3xl font-bold text-black">网站开发服务</h3>
            <p className="mt-5 text-sm text-black leading-7">
              我们提供专业的网页端软件定制开发服务，专注于满足不同行业客户在功能、流程、界面与系统集成等方面的个性化需求。通过深度调研与定制化设计，我们帮助企业快速搭建高效、稳定、可扩展且用户体验优秀的网页端软件系统，助力业务流程的在线化、智能化与数字化升级。
            </p>
            <p className="mt-5 text-sm text-black leading-7">
              我们的服务涵盖从产品原型设计、技术架构搭建、前后端开发到系统部署与持续维护的全生命周期开发流程。无论是企业内部管理系统（如ERP、CRM、OA）、客户服务平台、数据可视化后台，还是SaaS类在线应用，我们都能基于客户的业务目标提供定制化解决方案。
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

export default Web;
