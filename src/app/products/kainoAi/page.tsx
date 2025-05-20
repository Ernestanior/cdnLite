
import Image from "next/image";
import a1 from '@/app/assets/products/a1.png'
import a2 from '@/app/assets/products/a2.png'
import a3 from '@/app/assets/products/a3.png'
import a4 from '@/app/assets/products/a4.png'
import icon from './icon.png'
import avatar1 from '@/app/assets/products/avatar1.png'
import avatar2 from '@/app/assets/products/avatar2.png'
import avatar3 from '@/app/assets/products/avatar3.png'
import img1 from './img1.png'
import img2 from './img2.jpg'
import img3 from '@/app/assets/products/desktop.png'

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const functionList =[
  {
    title:'智能算法',
    img:a2,
    desc:'KainoAI 的核心优势在于其先进的AI算法驱动设计引擎，可根据空间结构、用户偏好快速生成多个高质量设计方案。',
  },
  {
    title:'风格渲染',
    img:a1,
    desc:'基于大数据分析流行趋势，支持多种个性化风格切换。',
  },
  {
    title:'一键生成',
    img:a3,
    desc:'一键生成设计方案，轻松完成家居规划。',
  },
  {
    title:'跨设备操作',
    img:a4,
    desc:'支持用户随时在手机、平板或电脑上查看保存的设计方案。',
  },
]

const commentList=[
  {
    avatar:avatar1,
    role:"居家用户",
    comment:'“我只需上传房间照片，几秒钟就能看到我的家变成梦想中的样子，太方便了！”%以上，运行状态一目了然，非常直观。”'
  },
  {
    avatar:avatar2,
    role:"专业室内设计师",
    comment:'“这个APP协助我在与客户沟通是，快速生成风格效果图，还有多种潮流风格供选择，提高沟通效率。”  '
  },
  {
    avatar:avatar3,
    role:"初次装修者",
    comment:'“操作简单直观，对没有设计经验的人非常友好，完全超出了我的期待。”  '
  },
]
const Home = () => {
  return (
    <div className="bg-white min-w-7xl">
    <Navbar />
    <div className="bg-white min-w-7xl pl-30 pr-30">

      <h3 className="mt-26 mb-10 text-4xl font-bold text-black">人工智能室内设计平台（Kaino AI）</h3>
      <div className="mt-15 text-base text-stone-500">
        KainoAI 室内设计APP是一款融合人工智能与创新设计理念的智能化工具，专为室内设计爱好者、装修用户以及专业设计师打造。凭借强大的功能和直观友好的操作体验，KainoAI 让每一位用户都能轻松完成专业水准的空间设计，无需掌握复杂的设计软件，也能快速上手，实现创意落地。
      </div>
      <div className="mt-8 text-base text-stone-500">
        无论是家庭装修、商业空间规划，还是个性化的创意设计项目，KainoAI 都能提供精准且灵活的解决方案。平台内置多种风格模板、丰富的材质库与家具模型，视图切换、智能布置、光影模拟等核心功能，用户只需通过拖拽与点击即可搭建理想空间。同时，基于AI算法，系统可根据用户偏好与空间特性，智能推荐设计方案与搭配建议，显著提高设计效率与效果。
      </div>
      <div className="mt-8 text-base text-stone-500">
        此外，KainoAI 还支持AR/VR实景体验、即时渲染、空间测量以及多端同步，用户可以随时随地预览和调整设计，便于与客户、家人或施工方进行协同沟通，极大地提升了设计流程的便捷性与协作效率。
      </div>
      <div className="mt-8 text-base text-stone-500">
        通过 KainoAI，设计变得更智能、更高效、更具创造力。它不仅是一款工具，更是用户探索空间美学、实现理想生活的得力助手。
      </div>

      <Image src={img1} alt={""} className="w-full h-auto mt-10" />
      <a 
        href="https://www.kainoai.com/home"
        target="_blank"
        className="mt-10 w-full text-center py-3 rounded flex justify-center items-center cursor-pointer"
        style={{
          background: 'linear-gradient(to right, #06daff 45%, #bbf7d0 75%)',
        }}
      >
        <Image src={icon} alt="" className="w-6 mr-4" />
        <h2 className="text-white text-xl font-semibold">GET STARTED</h2>
      </a>


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
            <h3 className="mb-4 text-2xl font-bold">人工智能室内设计SaaS平台</h3>
            <div className="text-sm text-stone-600 text-center">用户A：原始户型一居室公寓，通过APP生成现代简约风格设计方案，满意度达98%。</div>
            <ol>
              {
                commentList.map((item)=> <li className="mb-5 text-lg mt-15 ">
                <div className="flex justify-center">
                  <Image src={item.avatar} alt="" className="w-12 h-12 ml-3 mr-3" />
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
