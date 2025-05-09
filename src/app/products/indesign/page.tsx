
import Image from "next/image";
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import p1 from '@/app/assets/home/web1.png'
import p2 from '@/app/assets/home/web2.png'
import e1 from '@/app/assets/products/e1.png'
import e2 from '@/app/assets/products/e2.png'
import e3 from '@/app/assets/products/e3.png'
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
      <section className="grid grid-cols-3 gap-6 p-10">
        <div className="bg-white p-15">
          <Image src={a2} alt="实时监控" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">智能算法</h3>
        </div>
        <div className="bg-white p-15">
          <Image src={a1} alt="故障诊断" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">风格渲染</h3>
        </div>
        <div className="bg-white p-15">
          <Image src={a3} alt="数据报告" className="w-full h-auto" />
          <h3 className="mt-6 text-2xl font-bold mt-2 text-black text-center">一键生成</h3>
        </div>
      </section>
      <h3 className="mt-26 text-4xl font-bold text-black text-center">用户体验展示</h3>
      <section className="grid grid-cols-2 gap-6 p-10">
        <div className="bg-white p-8">
          <Image src={p2} alt="AI设计" className="w-full h-auto" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black text-center">不同房型与风格</h3>
        </div>
        <div className="bg-white p-8">
          <Image src={p1} alt="数据可视化" className="w-full h-auto" />
          <h3 className="mt-6 text-lg font-bold mt-2 text-black text-center">餐娱运营云控平台</h3>
        </div>
      </section>
      <h3 className="mt-26 text-4xl font-bold text-black text-center">客户评价</h3>
        <div className="bg-white pl-8 pr-8 mt-8">
          <div className="p-8 rounded-full bg-blue-50 flex items-center">
            <Image src={e1} alt="实时监控" className="w-20 h-auto mr-10" />
            <div>
              <h2 className="text-black text-xl font-bold mb-2" >客户Candy</h2>
              <div className="text-stone-500">图片渲染很不错, 价格也比较低, xxxxxxxxxxxxxxasdasdasd</div>
            </div>
          </div>
        </div>
        <div className="bg-white pl-8 pr-8 mt-8">
          <div className="p-8 rounded-full bg-blue-50 flex items-center ">
            <Image src={e2} alt="实时监控" className="w-20 h-auto mr-10" />
            <div>
              <h2 className="text-black text-xl font-bold mb-2" >客户Mandy</h2>
              <div className="text-stone-500">图片渲染很不错, 价格也合适, 温度哦久啊搜狐到十点哦啊是都哈斯好滴哦啊是滴撒好丢大声道哈斯U盾哈斯好的撒好丢阿是打死u的搜i很低啊us好滴阿森纳丢阿萨弄丢阿爸哈斯达还扫地啊三打哈xxxxxxxxxxxxxxasdasdasd</div>
            </div>
          </div>
        </div>
        <div className="bg-white pl-8 pr-8 mt-8">
          <div className="p-8 rounded-full bg-blue-50 flex items-center ">
            <Image src={e3} alt="实时监控" className="w-20 h-auto mr-10" />
            <div>
              <h2 className="text-black text-xl font-bold mb-2" >客户Andy</h2>
              <div className="text-stone-500">图片渲染很不错, 我用来画专修很nice, xxxxxxxxxxxxxasdasdasd</div>
            </div>
          </div>
        </div>


      <Footer/>
    </div>
  );
};

export default Home;
