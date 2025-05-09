
import Image from "next/image";
import homebg from '@/app/assets/home/homebg.jpeg'
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import a4 from '@/app/assets/products/a4.png'
import a5 from '@/app/assets/products/a5.png'
import c1 from '@/app/assets/products/c1.jpg'
import c2 from '@/app/assets/products/c2.jpg'
import d1 from '@/app/assets/products/d1.png'
import d2 from '@/app/assets/products/d2.png'
import d3 from '@/app/assets/products/d3.png'
import d4 from '@/app/assets/products/d4.png'
import { BookFilled, CloudFilled, ProductFilled, StarFilled } from "@ant-design/icons";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
const Home = () => {
  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <h3 className="mt-26 text-4xl font-bold text-black text-center">产品简介</h3>
      <h4 className="mt-20 text-4xl font-bold text-black text-center">XXXXXXXXXXXXXXX</h4>
      <h4 className="mt-2 text-4xl font-bold text-black text-center">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</h4>

     <h3 className="mt-26 text-4xl font-bold mt-2 text-black text-center">功能特点</h3>
      <section className="grid grid-cols-5 gap-6 p-10">
        <div className="bg-white p-8">
          <Image src={a2} alt="实时监控" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">智能下单</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a1} alt="故障诊断" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">库存管理</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a3} alt="数据报告" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">员工管理</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a4} alt="账单管理" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">账单结算</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a5} alt="账单管理" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">运营数据</h3>
        </div>
      </section>
      <h3 className="mt-26 text-4xl font-bold text-black text-center">适用行业</h3>
      <section className="grid grid-cols-4 gap-6 p-15 pl-40 pr-40">
        <div className="bg-white p-8">
          <div className="p-10 rounded-full bg-purple-50">
            <Image src={d4} alt="实时监控" className="w-full h-auto" />
          </div>
        <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">餐饮</h3>
        </div>
        <div className="bg-white p-8">
          <div className="p-10 rounded-full bg-purple-50">
            <Image src={d1} alt="故障诊断" className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">娱乐</h3>
        </div>
        <div className="bg-white p-8">
          <div className="p-10 rounded-full bg-purple-50">
            <Image src={d3} alt="数据报告" className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">连锁</h3>
        </div>
        <div className="bg-white p-8">
          <div className="p-10 rounded-full bg-purple-50">
            <Image src={d2} alt="账单管理" className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">度假村</h3>
        </div>
      </section>
      <h3 className="mt-26 text-4xl font-bold text-black text-center">实用案例</h3>
      <section className="grid grid-cols-2 gap-6 p-10">
        <div className="bg-white p-8">
          <Image src={c1} alt="AI设计" className="w-full h-auto" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black text-center">KTV官网</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={c2} alt="数据可视化" className="w-full h-auto" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black text-center">KTV后台展示</h3>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;
