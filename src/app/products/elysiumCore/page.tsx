
import Image from "next/image";
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import a4 from '@/app/assets/products/a4.png'
import a5 from '@/app/assets/products/a5.png'
import avatar1 from '@/app/assets/products/avatar1.png'
import avatar2 from '@/app/assets/products/avatar2.png'
import avatar3 from '@/app/assets/products/avatar3.png'
import img1 from './img1.png'
import img2 from './img2.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const functionList =[
  {
    title:'智能订单管理',
    img:a5,
    desc:'提供点餐和预约功能，优化顾客体验，减少传统下单等候时间，提高服务效率',
  },
  {
    title:'实时库存更新',
    img:a1,
    desc:'即时更新库存，帮助管理者预测库存需求，及时采购，完善销售与供应链管理。',
  },
  {
    title:'运营数据监控',
    img:a3,
    desc:'全面监控运营数据，包括顾客流量、订单处理、库存动态、员工排班等，帮助管理者全面掌握运营情况。',
  },
  {
    title:'快速账单结算',
    img:a4,
    desc:'集成账单管理模块，自动生成账单，智能打印，简化结算流程。',
  },
  {
    title:'灵活员工管理',
    img:a2,
    desc:'智能排班管理工具，优化人力资源配置，降低管理复杂性，提升团队协作效率。',
  },
]

const commentList=[
  {
    avatar:avatar1,
    role:"VIP客户",
    comment:'“房间服务快速响应，点单和预订房间都非常快速，体验感很好。”   %以上，运行状态一目了然，非常直观。”'
  },
  {
    avatar:avatar2,
    role:"员工",
    comment:'“系统升级以后，预订出单结算都很便捷，大大提高了我们的工作效率，不会出现手忙脚乱的情况。” '
  },
  {
    avatar:avatar3,
    role:"老板",
    comment:'“平台的智能订单管理和实时数据监控让我们能够更好地掌握顾客需求和库存状态，让我们的运营流程更加顺畅”'
  },
]
const Home = () => {
  return (
    <div className="bg-white min-w-7xl">
    <Navbar />
    <div className="bg-white min-w-7xl pl-30 pr-30">

      <h3 className="mt-26 mb-10 text-4xl font-bold text-black">娱乐业智能综合管理系统</h3>
      <div className="mt-15 text-base text-stone-500">
        ElysiumCore 是一款专为餐饮与娱乐行业量身打造的智能管理平台，融合了前沿技术与行业实践经验，致力于为企业提供高效、便捷、智能的一体化运营解决方案。该平台深度整合运营过程中的各项核心业务模块，包括点餐管理、库存控制、人力排班、会员营销、财务结算、数据分析等功能，实现业务流、信息流和数据流的高效协同
      </div>
      <div className="mt-8 text-base text-stone-500">
        ElysiumCore 通过统一的数据中台和智能化工具，为企业管理者提供实时可视化的运营数据，助力决策优化与问题预警。平台支持多终端操作（如POS终端、移动设备、后台管理系统），并具备强大的权限控制与角色分工机制，确保信息安全与操作高效
      </div>
      <div className="mt-8 text-base text-stone-500">
        此外，ElysiumCore 还具备灵活的系统扩展能力，支持与第三方支付平台、点餐系统、会员CRM、供应链系统等进行无缝对接，构建完整的数字化生态。其智能推荐与客户画像功能，能够提升客户体验，实现个性化营销，增强客户粘性
      </div>
      <div className="mt-8 text-base text-stone-500">
        借助 ElysiumCore，企业不仅可以简化管理流程，提升整体运营效率，还能在激烈的市场竞争中保持敏捷反应与持续创新能力，从而全面提升服务质量与客户满意度。
      </div>

      <Image src={img1} alt={""} className="w-full h-auto mt-10" />



     <h3 className="mt-36 mb-6 text-4xl font-bold text-black 
     text-center">功能特点</h3>
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
          <h3 className="mt-4 text-xl font-bold text-black text-center">{item.title}</h3>

        </div>
        ))}
        
      </section>
      <h3 className="mt-25 mb-15 text-4xl font-bold text-black text-center">成功案例</h3>
        <section className="bg-white flex justify-between">
          <div className="flex-5">
            <Image src={img2} alt="" className="w-full h-auto" />
          </div>
          <div className="box-border text-black ml-20 flex-2 flex flex-col items-center bg-stone-500 p-8 " style={{backgroundColor:"#f5f1e4"}}>
            <h3 className="mb-4 text-2xl font-bold">娱乐智能综合管理系统</h3>
            <div className="text-sm text-stone-600 text-center">与KTV娱乐系统进行深度整合，通过平台的智能化管理工具，高效地管理顾客订单、房间分配、账单结算等环节，进一步优化服务。</div>
            <ol>
              {
                commentList.map((item,index)=> <li key={index} className="mb-5 text-lg mt-15 ">
                <div className="flex justify-center">
                  <Image src={item.avatar} alt="" className="w-12 h-12 mr-6" />
                  <div className="flex flex-col items-end">
                    <p className="text-xs leading-5 ">
                        {item.comment}
                      </p>
                    <p className="text-xs leading-5 text-stone-500">
                        --{item.role}
                    </p>
                  </div>
                </div>
              </li>)
              }
            </ol>

          </div>
        </section>
        </div>

      <Footer/>
    </div>
  );
};

export default Home;
