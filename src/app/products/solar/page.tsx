
import Image from "next/image";
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import a4 from '@/app/assets/products/a4.png'
import a5 from '@/app/assets/products/a5.png'
import p1 from '@/app/assets/home/web1.jpg'
import f1 from '@/app/assets/products/b1.png'
import f2 from '@/app/assets/products/b2.png'
import f3 from '@/app/assets/products/b3.png'
import f4 from '@/app/assets/products/b4.png'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

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
const Home = () => {
  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <h3 className="mt-26 mb-10 text-4xl font-bold text-black text-center">产品简介</h3>
      <h5 className="mt-2 text-3xl text-black text-center pl-50 pr-50 leading-16">Solar是一款提供高效能源管理的先进能源管理解决方案。通过完善的功能模块，帮助用户收集，管理，监控能源的分配和使用，降低能源管理成本的同时，最大化效益，提高系统稳定性。</h5>

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
      <h3 className="mt-36 text-4xl font-bold text-black text-center">应用场景</h3>
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
      <h3 className="mt-20 mb-10 text-4xl font-bold text-black text-center">成功案例</h3>
        <section className="bg-white p-8 flex justify-around ">
          <Image src={p1} alt="AI设计" className="w-150 h-auto" />
          <div className="text-black ml-20">
            <h3 className="mt-6 mb-4 text-3xl font-bold mt-2">YangSolar后台管理</h3>
            <div>某太阳能公司接入我公司的智能能源管理平台后，通过平台实现了对太阳能电站和设备的统一管理，智能统计数据并生成账单，提高工作效率</div>
            <h1 className="font-bold py-2 text-2xl mt-20 mb-3">客户评价：</h1>
            <ol>
            <li className="mb-5 text-lg">“使用智能能源管理平台以后，我们的管理效率提升了30%以上，运行状态一目了然，非常直观。”</li>
            <li className="mb-5 text-lg">“平台的稳定性和可扩展性非常强，未来我们还计划接入更多的分布式能源设备。”</li>
            <li className="mb-5 text-lg">“服务团队响应迅速，支持非常到位，期待未来更多合作。”</li>
            </ol>

          </div>
        </section>

      <Footer/>
    </div>
  );
};

export default Home;
