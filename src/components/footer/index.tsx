'use client'
import { useLanguage } from "@/context/languageContext";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="bg-white py-12 px-24 flex items-center">
      {/* 联系方式 */}
      <div className="flex-2 text-gray-900 w-60">
          <h2 className="text-lg font-semibold mb-5">{t('CONTACT_US')}</h2>
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
          <h3 className="font-semibold mb-5">{t('HOME')}</h3>
          <p className="mb-2 text-sm">{t('ABOUT_US')}</p>
          <p className="mb-2 text-sm">{t('SUPPORT')}</p>
          <p className="mb-2 text-sm">{t('CORPORATE_NEWS')}</p>
          <p className="mb-2 text-sm">{t('CONTACT_US')}</p>
          </div>
          <div>
          <h3 className="font-semibold mb-5">{t('PRODUCTS')}</h3>
          <p className="mb-2 text-sm"><Link href="/products/solar" className="text-sm text-gray-500 hover:text-orange-500">{t('SOLARENGY')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/products/elysiumCore" className="text-sm text-gray-500 hover:text-orange-500">{t('ELYSIUMCORE')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/products/kainoAi" className="text-sm text-gray-500 hover:text-orange-500">{t('KAINOAI')}</Link></p>
          </div>
          <div>
          <h3 className="font-semibold mb-5">{t('SOLUTIONS')}</h3>
          <p className="mb-2 text-sm"><Link href="/services/web" className="text-sm text-gray-500 hover:text-orange-500">{t('WEB_DEV_SERVICE')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/services/app" className="text-sm text-gray-500 hover:text-orange-500">{t('MOBILE_WEB_SERVICE')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/services/enterprise" className="text-sm text-gray-500 hover:text-orange-500">{t('ENTERPRISE_DIGITALIZATION')}</Link></p>
          <p className="mb-2 text-sm"><Link href="/services/oneStop" className="text-sm text-gray-500 hover:text-orange-500">{t('IT_INFRA_MANAGEMENT')}</Link></p>
          </div>
      </div>
  </div>
    <div className="p-4 bg-gray-50 mt-10 flex justify-between">
      <span className="text-stone-500 text-xs">riftvalley@2024 Copyright</span>
      <div className="text-amber-500 grid grid-cols-3 text-xl">
        <FacebookOutlined className="mr-5"/>
        <TwitterOutlined />
        <InstagramOutlined />
      </div>
    </div>
    </footer>

  );
};

export default Footer;
