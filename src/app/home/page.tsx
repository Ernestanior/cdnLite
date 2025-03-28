
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import homebg from '@/app/assets/home/homebg.jpeg'
import web1 from '@/app/assets/home/web1.png'
import web2 from '@/app/assets/home/web2.png'
import web3 from '@/app/assets/home/web3.png'
import { ArrowRightOutlined, BookFilled, CloudFilled, EnvironmentOutlined, MailOutlined, PhoneOutlined, ProductFilled, StarFilled } from "@ant-design/icons";

const Home = () => {

    const services = [
        {
          icon:<StarFilled />,
          title: "定制化服务",
          description: "提供符合客户业务模式及技术架构的多样性解决方案，可高度契合客户定制化需求。",
        },
        {
          icon: <ProductFilled />,
          title: "高质量产品交付",
          description: "多年行业经验，帮助客户通过前沿算法实现技术突破和企业数字化转型。",
        },
        {
          icon: <BookFilled />,
          title: "深厚的技术积累",
          description: "高效的项目管理和团队协作，实现持续集成和交付，最大限度缩短开发周期。",
        },
        {
          icon: <CloudFilled />,
          title: "创新能力突破",
          description: "为客户提供长期的技术支持，包括系统维护、迭代优化等，确保交付产品的稳定性和延续性。",
        },
      ];

  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <div className="relative w-full bg-gray-100 flex flex-col justify-center items-center">
        <Image
            src={homebg}
            alt="背景图"
            className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col p-30 pl-60 text-white">
            <h2 className="text-4xl font-bold text-stone-900 font-mono">智能能源管理平台</h2>
            <h2 className="text-4xl mt-2 font-bold text-stone-900 font-mono" >(YangSolar)</h2>
            <p className="text-gray-400 mt-12 ">为企业提供最先进的能源管理和优化解决方案</p>
            <button className="mt-4 w-40 bg-amber-500 text-white px-4 py-2 rounded">了解更多</button>
        </div>
     </div>

      <section className="grid grid-cols-3 gap-6 p-10">
        <div className="bg-white p-8">
          <Image src={web1} alt="AI设计" className="w-full h-auto" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black">AI室内设计APP</h3>
          <p className="mt-2 text-gray-600 text-sm">通过AI技术自动生成符合您需求的室内设计风格</p>
          <button className="mt-8 w-full border-1 text-sm border-amber-500 text-amber-500 py-3 rounded">了解更多</button>
        </div>
        <div className="bg-white p-8">
          <Image src={web2} alt="智能能源" className="w-full h-auto" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black">智能能源管理平台</h3>
          <p className="mt-2 text-gray-600 text-sm">提供高效能源管理的先进能源管理解决方案</p>
          <button className="mt-8 w-full border-1 text-sm border-amber-500 text-amber-500 py-3 rounded">了解更多</button>
        </div>
        <div className="bg-white p-8">
          <Image src={web3} alt="数据可视化" className="w-full h-auto" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black">餐娱运营云控平台</h3>
          <p className="mt-2 text-gray-600 text-sm">专为餐饮与娱乐行业量身定制的智能管理平台</p>
          <button className="mt-8 w-full border-1 text-sm border-amber-500 text-amber-500 py-3 rounded">了解更多</button>
        </div>
      </section>
      <div className="flex justify-center gap-8 px-24 py-12">
        {services.map((service, index) => (
            <div className="bg-white shadow-xl shadow-stone-200 rounded-lg p-6 text-center w-full max-w-xs">
                <div className="w-16 h-16 text-2xl mx-auto flex items-center justify-center bg-amber-500 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-4">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
        ))}
        </div>
        <footer className="bg-white py-12 px-24 flex items-center">
            {/* 联系方式 */}
            <div className="flex-2 text-gray-900 w-60">
                <h2 className="text-lg font-semibold mb-5">联系我们</h2>
                <p className="gap-2 text-xs text-stone-600 flex items-center">
                    <span className="text-base text-amber-500" >
                        <PhoneOutlined /> 
                    </span>
                    <span>(65) 6284 6860</span>
                </p>
                <p className="mt-2 gap-2 text-xs text-stone-600 flex items-center">
                    <span className="text-base  text-amber-500">
                        <EnvironmentOutlined />
                    </span>
                    <span>152 Beach Road #21-05/06, Gateway East Singapore 189721</span>
                </p>
                <p className="mt-2 gap-2 text-xs text-stone-600 flex items-center">
                    <span className="text-base  text-amber-500">
                        <MailOutlined />
                    </span> 
                    <span>sales@riftvalley.com</span>
                </p>
            </div>

            {/* 底部导航 */}
            <div className="flex flex-3 mt-12 text-center text-gray-700 justify-around">
                <div>
                <h3 className="font-semibold mb-5">首页</h3>
                <p className="mb-2 text-sm">公司简介</p>
                <p className="mb-2 text-sm">服务支持</p>
                <p className="mb-2 text-sm">公司动态</p>
                <p className="mb-2 text-sm">联系我们</p>
                </div>
                <div>
                <h3 className="font-semibold mb-5">产品</h3>
                <p className="mb-2 text-sm">新能源管理平台</p>
                <p className="mb-2 text-sm">餐娱运营云控平台</p>
                <p className="mb-2 text-sm">AI室内设计APP</p>
                </div>
                <div>
                <h3 className="font-semibold mb-5">解决方案</h3>
                <p className="mb-2 text-sm">定制开发解决方案</p>
                <p className="mb-2 text-sm">一站式IT解决方案</p>
                </div>
            </div>

        </footer>
        <Footer/>
    </div>
  );
};

export default Home;
