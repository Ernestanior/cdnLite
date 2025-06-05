'use client'
import { useLanguage } from "@/context/languageContext";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="py-12 px-24 flex items-center bg-amber-500">
      {/* 联系方式 */}
      <div className="flex-2 text-white w-60">
          <h2 className="text-lg font-semibold mb-5">{t('CONTACT_US')}</h2>
          <p className="gap-2 text-xs text-white flex items-center">
              <span className="text-base text-white" >
                  <PhoneOutlined /> 
              </span>
              <span>(65) 6284 6860</span>
          </p>
          {/* <p className="mt-2 gap-2 text-xs text-white flex items-center">
              <span className="text-base  text-white">
                  <EnvironmentOutlined />
              </span>
              <span>152 Beach Road #21-05/06, Gateway East Singapore 189721</span>
          </p> */}
          <p className="mt-2 gap-2 text-xs text-white flex items-center">
              <span className="text-base  text-white">
                  <MailOutlined />
              </span> 
              <span>sales@riftvalley.ai</span>
          </p>
      </div>

      {/* 底部导航 */}
      <div className="flex flex-3 mt-3 text-center text-white justify-around">
          <div>
          <h3 className="font-semibold mb-5"><Link href="/home" className="text-sm text-white hover:text-orange-500">{t('HOME')}</Link></h3>
          <p className="mb-2 text-sm"><Link href="/about" className="text-sm text-white hover:text-orange-500">{t('ABOUT_US')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/contact" className="text-sm text-white hover:text-orange-500">{t('CONTACT_US')}</Link></p>
          </div>
          <div>
          <h3 className="font-semibold mb-5">{t('PRODUCTS')}</h3>
          <p className="mb-2 text-sm"><Link href="/products/solar" className="text-sm text-white hover:text-orange-500">{t('SOLARENGY')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/products/elysiumCore" className="text-sm text-white hover:text-orange-500">{t('ELYSIUMCORE')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/products/kainoAi" className="text-sm text-white hover:text-orange-500">{t('KAINOAI')}</Link></p>
          </div>
          <div>
          <h3 className="font-semibold mb-5">{t('SOLUTIONS')}</h3>
          <p className="mb-2 text-sm"><Link href="/services/web" className="text-sm text-white hover:text-orange-500">{t('WEB_DEV_SERVICE')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/services/app" className="text-sm text-white hover:text-orange-500">{t('MOBILE_WEB_SERVICE')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/services/enterprise" className="text-sm text-white hover:text-orange-500">{t('ENTERPRISE_DIGITALIZATION')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/services/oneStop" className="text-sm text-white hover:text-orange-500">{t('IT_INFRA_MANAGEMENT')}</Link></p>
          </div>
      </div>
  </div>
    <div className="p-4 bg-gray-50 flex justify-between">
      <span className="text-stone-500 text-xs">riftvalley@2024 Copyright</span>
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
