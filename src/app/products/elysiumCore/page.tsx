
import Image from "next/image";
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import a4 from '@/app/assets/products/a4.png'
import a5 from '@/app/assets/products/a5.png'
import p1 from '@/app/assets/home/web3.jpg'
import f1 from '@/app/assets/products/b1.png'
import f2 from '@/app/assets/products/b2.png'
import f3 from '@/app/assets/products/b3.png'
import f4 from '@/app/assets/products/b4.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const functionList =[
  {
    title:'智能订单管理',
    img:a2,
    desc:'提供点餐和预约功能，优化顾客体验，减少传统下单等候时间，提高服务效率',
  },
  {
    title:'实时库存更新',
    img:a1,
    desc:'即时更新库存，帮助管理者预测库存需求，及时采购，完善销售与供应链管理',
  },
  {
    title:'运营数据监控',
    img:a3,
    desc:'全面监控运营数据，包括顾客流量、订单处理、库存动态、员工排班等，帮助管理者全面掌握运营情况',
  },
  {
    title:'快速账单结算',
    img:a4,
    desc:'集成账单管理模块，自动生成账单，智能打印，简化结算流程',
  },
  {
    title:'灵活员工管理',
    img:a5,
    desc:'智能排班管理工具，优化人力资源配置，降低管理复杂性，提升团队协作效率',
  },
]

const scenariosList = [
  {
    title:'能源公司',
    img:f1,
    desc:'实时设备监控，高效客户管理',
  },
  {
    title:'公共设施',
    img:f2,
    desc:'城市能源优化，应急响应调控',
  },
  {
    title:'商业建筑',
    img:f3,
    desc:'能源统一调配，减少消耗浪费',
  },
  {
    title:'工业园区',
    img:f4,
    desc:'提高能源利用，降低管理成本',
  },
]
const ElysiumCore= () => {
  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <h3 className="mt-26 mb-10 text-4xl font-bold text-black text-center">产品简介</h3>
      <h5 className="mt-2 text-3xl text-black text-center pl-50 pr-50 leading-16">ElysiumCore是一款专为餐饮与娱乐行业量身定制的智能管理平台。平台将运营过程中的各项业务模块融合在一起，提供全方位的数据支持与智能化工具。帮助企业实现精细化运营，简化管理流程，提高服务质量</h5>

     <h3 className="mt-36 mb-10 text-4xl font-bold mt-2 text-black 
     text-center">功能特点</h3>
      <section className="grid grid-cols-5 gap-6 p-10">
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
          <div className="mt-2 text-sm text-black text-center">{item.desc}</div>
        </div>
        ))}
      </section>
      <h3 className="mt-20 mb-10 text-4xl font-bold text-black text-center">实用案例</h3>
        <section className="bg-white p-8 flex justify-around ">
          <Image src={p1} alt="AI设计" className="w-150 h-auto" />
          <div className="text-black ml-20">
            <h3 className="mt-6 mb-4 text-3xl font-bold mt-2">KTV娱乐系统平台接入</h3>
            <div>与KTV娱乐系统进行深度整合，通过平台的智能化管理工具，高效地管理顾客订单、房间分配、账单结算等环节，进一步优化服务</div>
            <h1 className="font-bold py-2 text-2xl mt-20 mb-3">客户评价：</h1>
            <ol>
              <li className="mb-5 text-lg">“房间服务快速响应，点单和预订房间都非常快速，体验感很好.” – VIP顾客</li>
              <li className="mb-5 text-lg">“系统升级以后，预订出单结算都很便捷，大大提高了我们的工作效率，不会出现手忙脚乱的情况。“ – 员工</li>
              <li className="mb-5 text-lg">“平台的智能订单管理和实时数据监控让我们能够更好地掌握顾客需求和库存状态，让我们的运营流程更加顺畅” – 老板</li>
            </ol>

          </div>
        </section>

      <Footer/>
    </div>
  );
};

export default ElysiumCore;
