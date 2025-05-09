
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
      <section className="grid grid-cols-4 gap-6 p-10">
        <div className="bg-white p-8">
          <Image src={a2} alt="实时监控" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">实时监控</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a1} alt="故障诊断" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">故障诊断</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a3} alt="数据报告" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">数据报告</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={a4} alt="账单管理" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">账单管理</h3>
        </div>
      </section>
      <h3 className="mt-26 text-4xl font-bold text-black text-center">应用场景</h3>
      <section className="grid grid-cols-4 gap-6 p-15 pl-40 pr-40">
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={f1} alt="实时监控" className="w-full h-auto" />
          </div>
        <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">能源公司</h3>
        </div>
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={f2} alt="故障诊断" className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">政府</h3>
        </div>
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={f3} alt="数据报告" className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">电力公司</h3>
        </div>
        <div className="bg-white p-8">
          <div className="p-8 rounded-full bg-blue-50">
            <Image src={f4} alt="账单管理" className="w-full h-auto" />
          </div>
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">商用</h3>
        </div>
      </section>
      <h3 className="mt-26 text-4xl font-bold text-black text-center">成功案例</h3>
      <section className="grid grid-cols-2 gap-6 p-10">
        <div className="bg-white p-8">
          <Image src={p1} alt="AI设计" className="w-full h-auto" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black text-center">YangSolar后台管理</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={p2} alt="数据可视化" className="w-full h-auto" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black text-center">餐娱运营云控平台</h3>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;
