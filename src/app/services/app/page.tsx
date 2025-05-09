
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
const Home = () => {


  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <h3 className="mt-26 text-4xl font-bold text-black text-center">app服务简介</h3>
      <h4 className="mt-20 text-4xl font-bold text-black text-center">XXXXXXXXXXXXXXX</h4>
      <h4 className="mt-2 text-4xl font-bold text-black text-center">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</h4>

     <h3 className="mt-26 text-4xl font-bold mt-2 text-black text-center">功能特点</h3>
      <section className="grid grid-cols-4 gap-6 p-10">
        <div className="bg-white p-8">
          <Image src={a2} alt="实时监控" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">高度定制</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a1} alt="故障诊断" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">可扩展性</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a3} alt="数据报告" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">高质量交付</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a4} alt="账单管理" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">安全保障</h3>
        </div>
      </section>
      <h3 className="mt-26 text-4xl font-bold text-black text-center">服务范围</h3>
      <section className="grid grid-cols-4 gap-6 p-15 pl-40 pr-40">
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={f1} alt="实时监控" className="w-full h-auto" />
          </div>
        <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">后台管理</h3>
        </div>
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={f2} alt="故障诊断" className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">数据收集</h3>
        </div>
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={f3} alt="数据报告" className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">数据分析</h3>
        </div>
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={f4} alt="账单管理" className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">账单管理</h3>
        </div>
      </section>
      <div className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">开发流程</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {['了解需求','原型开发','代码创建','部署测试','上线交付'].map((step, index) => (
          <div key={index} className="relative flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-12 py-6 rounded-l-md shadow-md">
              {step}
            </div>
              <div className="w-0 h-0 border-t-[36] border-t-transparent border-b-[36] border-b-transparent border-l-[30px] border-l-blue-700" />
          </div>
        ))}
      </div>
    </div>

      <Footer/>
    </div>
  );
};

export default Home;
