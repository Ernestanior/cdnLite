
import Image from "next/image";
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import a5 from '@/app/assets/products/a5.png'
import e1 from '@/app/assets/products/e1.png'
import e2 from '@/app/assets/products/e2.png'
import e3 from '@/app/assets/products/e3.png'
import before from './before.png'
import after from './after.png'
import { BookFilled, CloudFilled, ProductFilled, StarFilled } from "@ant-design/icons";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Button } from "antd";
const functionList =[
  {
    title:'智能算法',
    img:a2,
    desc:'利用AI算法快速生成多个设计方案',
  },
  {
    title:'风格渲染',
    img:a1,
    desc:'基于大数据分析流行趋势，支持多种个性化风格切换',
  },
  {
    title:'一键生成',
    img:a3,
    desc:'一键生成设计方案，轻松完成家居规划',
  },
  {
    title:'跨设备操作',
    img:a5,
    desc:'支持用户随时在手机、平板或电脑上查看保存的设计方案',
  },
]

const KainoAi= () => {
  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <div className="flex flex-col items-center">
        <h3 className="mt-26 mb-10 text-4xl font-bold text-black text-center">产品简介</h3>
        <h5 className="mt-2 text-3xl text-black text-center pl-50 pr-50 leading-16">通过KainoAI室内设计APP的强大功能和直观体验，用户可以轻松完成专业级的室内设计，无论是家庭装修、商业场所规划还是创意设计，都能满足各种需求</h5>
        <a href="https://www.kainoai.com/home" target="_blank" className="bg-blue-500 w-50 text-center rounded-4xl p-3 mt-5">官网链接</a>
      </div>


     <h3 className="mt-36 mb-10 text-4xl font-bold text-black text-center">功能特点</h3>
      <section className="flex justify-around">
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
      <section className="grid grid-cols-2 gap-6 pt-15 pl-40 pr-40">
        <Image src={before} alt="渲染前" className="w-200 h-auto mr-10" />
        <Image src={after} alt="渲染后" className="w-200 h-auto mr-10" />
      </section>
      <div className="flex flex-col items-center mt-5">
          <div className="text-xl font-bold text-black text-center">用户A</div>
          <div className="text-black text-center">原图：一居室公寓，居住10年，待装修
            渲染风格：简约欧式
            对比效果：xxxxx
          </div>
        </div>
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

export default KainoAi;
