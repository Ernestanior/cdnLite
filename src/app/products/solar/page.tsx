
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
import img3 from '@/app/assets/products/desktop.png'
import f1 from '@/app/assets/products/b1.png'
import f2 from '@/app/assets/products/b2.png'
import f3 from '@/app/assets/products/b3.png'
import f4 from '@/app/assets/products/b4.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const functionList =[
  {
    title:'实时同步监控',
    img:a2,
    desc:'对站点和设备进行数据收集和监控，实时同步到管理平台，用户可以通过平台仪表盘查看各站点和设备的状态及能源使用情况',
  },
  {
    title:'故障预测诊断',
    img:a1,
    desc:'当站点设备故障或性能下降，系统可智能检测并及时告警，帮助用户快速定位问题',
  },
  {
    title:'数据分析报告',
    img:a3,
    desc:'提供各站点设备的状态和详尽的能源使用报告，帮助用户进行长期的能源趋势预测和成本控制',
  },
  {
    title:'客户账单管理',
    img:a4,
    desc:'智能统计生成账单，及时更新客户付款状态，减少人工消耗',
  },
  {
    title:'可多平台兼容',
    img:a5,
    desc:'支持不同能源供应商接入平台，提高系统兼容性，避免跨平台操作带来的资源消耗',
  },
]

const scenariosList = [
  {
    title:'能源公司',
    img:f1,
    desc:'实时设备监控，高效客户管理',
  },
  {
    title:'政府机构',
    img:f3,
    desc:'城市能源优化，应急响应调控',
  },
  {
    title:'电力公司',
    img:f2,
    desc:'能源统一调配，减少消耗浪费',
  },
  {
    title:'商业用途',
    img:f4,
    desc:'提高能源利用，降低管理成本',
  },
]

const commentList=[
  {
    avatar:avatar1,
    comment:'“使用智能能源管理平台以后，我们的管理效率提升了30%以上，运行状态一目了然，非常直观。”'
  },
  {
    avatar:avatar2,
    comment:'“平台的稳定性和可扩展性非常强，未来我们还计划接入更多的分布式能源设备。”'
  },
  {
    avatar:avatar3,
    comment:'“服务团队响应迅速，支持非常到位，期待未来更多合作。”'
  },
]
const Home = () => {
  return (
    <div className="bg-white min-w-7xl">
    <Navbar />
    <div className="bg-white min-w-7xl pl-30 pr-30">

      <h3 className="mt-26 mb-10 text-4xl font-bold text-black">SolarEngy 新能源智能管理平台</h3>
      <div className="mt-15 text-base text-stone-500">
        Solar 是一款面向现代能源管理需求的先进解决方案，致力于为企业、园区、工厂及其他能源密集型场景提供全面、高效的能源管理服务。该系统通过模块化设计，集成了能耗数据采集、智能分析、实时监控、可视化报表、能效评估、告警管理等多项功能，覆盖能源管理的全生命周期。
      </div>
      <div className="mt-8 text-base text-stone-500">
        Solar 能够自动化采集来自电力、水、气、热等多种能源介质的使用数据，识别能耗趋势、诊断异常能耗行为，并提出节能优化建议，从而帮助用户精准掌控能源使用状况，优化能源配置。
      </div>
      <div className="mt-8 text-base text-stone-500">
        同时，Solar 平台支持灵活的权限管理与多维度的数据展示，便于不同角色的用户进行操作与决策支持，实现能源管理的智能化、集成化和自动化。
        通过 Solar，用户不仅能够有效降低能源管理的运营成本，提升能效水平，还能增强整体系统的稳定性与安全性，助力企业实现绿色低碳发展目标。
      </div>
      <Image src={img1} alt={""} className="w-full h-auto mt-10" />



     <h3 className="mt-36 mb-5 text-4xl font-bold text-black 
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
      <h3 className="mt-36 text-4xl font-bold text-black text-center">应用场景</h3>
      <section className="flex justify-center mt-15">
      {scenariosList.map((item=>
        <div className="bg-white ml-10 mr-10">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={item.img} alt={item.title} className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-black text-center">{item.title}</h3>
          <div className="mt-2 text-sm text-black text-center">{item.desc}</div>
        </div>
        ))}
      </section>
      <h3 className="mt-25 mb-15 text-4xl font-bold text-black text-center">成功案例</h3>
        <section className="bg-white flex justify-between">
          <div className="relative flex-5">
            <Image src={img3} alt="" className="absolute left-0 top-0 w-160 h-160" />
            <div className="absolute left-28 top-34 w-107 h-61">
              <Image
                src={img2}
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="box-border text-black ml-20 flex-2 flex flex-col items-center bg-stone-500 p-8 " style={{backgroundColor:"#f5f1e4"}}>
            <h3 className="mb-4 text-2xl font-bold">新能源综合管理平台</h3>
            <div className="text-sm text-stone-600 text-center">帮助客户端到端地管理数据生命周期，赋能从数据源、数据摄取、数据处理、数据存储、数据治理到数据分享的完整链路。既能满足实时监控与智能优化，又具备高可用、高安全、多租户、多接入场景的特点。</div>
            <ol>
              {
                commentList.map((item)=> <li className="mb-5 text-lg mt-15 ">
                <div className="flex justify-center">
                  <Image src={item.avatar} alt="" className="w-12 h-12 ml-3 mr-3" />
                  <div>
                    <div className="flex">
                      <StarFilled style={{color:"#ffbb00",marginRight:8}}/>
                      <StarFilled style={{color:"#ffbb00",marginRight:8}}/>
                      <StarFilled style={{color:"#ffbb00",marginRight:8}}/>
                      <StarFilled style={{color:"#ffbb00",marginRight:8}}/>
                      <StarOutlined style={{color:"#ffbb00",marginRight:8}}/>
                    </div>
                    <p className="text-xs mt-3 leading-5">
                      {item.comment}
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
