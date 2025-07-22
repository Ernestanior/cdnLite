'use client'
import { useLanguage } from "@/context/languageContext";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="bg-gradient-to-bl via-[#36098a]/10 py-12 px-24 flex flex-col justify-center items-center md:flex-row   shadow-[0_0_15px_rgba(255,255,255,255)]" >
      {/* 联系方式 */}
      <div className="flex-2 text-white w-60">
          <h2 className="text-base font-bold mb-5 text-center md:text-start">{t('CONTACT_US')}</h2>
          <p className="gap-2 text-base text-white flex items-center justify-center md:justify-start">
              <span className="text-xs text-white " >
                  <PhoneOutlined style={{fontSize:15}}/> 
              </span>
              <span className="text-sm font-semibold">(65) 6284 6860</span>
          </p>
          {/* <p className="mt-2 gap-2 text-base text-white flex items-center">
              <span className="text-xs  text-white">
                  <EnvironmentOutlined />
              </span>
              <span>152 Beach Road #21-05/06, Gateway East Singapore 189721</span>
          </p> */}
          <p className="mt-2 gap-2 text-base text-white flex items-center justify-center md:justify-start">
              <span className="text-xs text-white">
                  <MailOutlined style={{fontSize:15}}/>
              </span> 
              <span className="text-sm font-semibold" >sales@riftvalley.ai</span>
          </p>
      </div>

      {/* 底部导航 */}
      <div className="flex flex-col md:flex-row flex-3 mt-3 text-center text-white justify-around">
          <div>
          <h3 className="font-bold mb-5 mt-10 md:mt-0"><Link href="/home" className="text-base text-white hover:text-orange-500">{t('CDN加速')}</Link></h3>
          <p className="mb-2 font-semibold text-xs "><Link href="/about" className="text-xs text-white hover:text-orange-500">{t('静态内容加速')}</Link></p>
          <p className="mb-2 font-semibold text-xs"><Link href="/contact" className="text-xs text-white hover:text-orange-500">{t('游戏应用加速')}</Link></p>
          <p className="mb-2 font-semibold text-xs"><Link href="/terms" className="text-xs text-white hover:text-orange-500">{t('视频流媒体加速')}</Link></p>
          </div>
          <div>
          <h3 className="font-semibold mb-5 text-base mt-10 md:mt-0">{t('解决方案')}</h3>
          <p className="mb-2 font-semibold text-xs"><Link href="/products/solar" className="text-xs text-white hover:text-orange-500">{t('SSL证书')}</Link></p>
          <p className="mb-2 font-semibold text-xs"><Link href="/products/elysiumCore" className="text-xs text-white hover:text-orange-500">{t('DDoS攻击高防')}</Link></p>
          <p className="mb-2 font-semibold text-xs"><Link href="/products/kainoAi" className="text-xs text-white hover:text-orange-500">{t('CC攻击防御')}</Link></p>
          </div>
          <div>
          <h3 className="font-semibold mb-5 text-base mt-10 md:mt-0" >{t('资源')}</h3>
          <p className="mb-2 font-semibold text-xs"><Link href="/services/web" className="text-xs text-white hover:text-orange-500">{t('开发者API')}</Link></p>
          <p className="mb-2 font-semibold text-xs"><Link href="/services/app" className="text-xs text-white hover:text-orange-500">{t('使用文档')}</Link></p>
          </div>
      </div>
  </div>
    <div className="p-4 bg-black flex justify-between bg-gradient-to-bl via-[#36098a]/30">
      <span className="text-stone-50 text-base font-semibold">cdnLite@2024 Copyright</span>
      <div className="text-white grid grid-cols-3 text-xl">
        <FacebookOutlined className="mr-5"/>
        <TwitterOutlined />
        <InstagramOutlined />
      </div>
    </div>
    </footer>

  );
};

export default Footer;
