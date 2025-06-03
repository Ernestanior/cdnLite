'use client';
import { GlobalOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, MenuProps } from "antd";
import Link from "next/link";
import { Dropdown } from 'antd';
import { useLanguage } from '@/context/languageContext';

const Navbar = () => {
  const { lang, toggleLang } = useLanguage();
  const { t } = useLanguage();

  const products: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href="/products/solar" className="text-sm text-gray-500 hover:text-orange-500">{t("SOLARENGY")}</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link href="/products/elysiumCore" className="text-sm text-gray-500 hover:text-orange-500">{t("ELYSIUMCORE")}</Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link href="/products/kainoAi" className="text-sm text-gray-500 hover:text-orange-500">{t("KAINOAI")}</Link>
        //  <Link href="https://www.kainoai.com/home" passHref legacyBehavior>
        //    <a target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-orange-500">
        //      AI室内设计app
        //    </a>
        //  </Link>
      ),
    },
    {
      key: '4',
      label: t('MAKE_SOLUTIONS'),
      children: [
        {
          key: '4-1',
          label: <Link href="/services/web" className="text-sm text-gray-500 hover:text-orange-500">{t('WEB_DEV_SERVICE')}</Link>,
        },
        {
          key: '4-2',
          label: <Link href="/services/app" className="text-sm text-gray-500 hover:text-orange-500">{t('MOBILE_WEB_SERVICE')}</Link>,
        },
        {
          key: '4-3',
          label: <Link href="/services/enterprise" className="text-sm text-gray-500 hover:text-orange-500">{t('ENTERPRISE_DIGITAL_SOLUTIONS')}</Link>,
        },
        {
          key: '4-4',
          label:<Link href="/services/oneStop" className="text-sm text-gray-500 hover:text-orange-500">{t('INFRASTRUCTURE_SOLUTIONS')}</Link>
        },
      ],
    },

  ]
  
  const services: MenuProps['items'] = [
    {
      key: '1',
      label: t('DOCUMENT'),
    },
    {
      key: '2',
      label: 'Q&A',
    },
  ]
  
  const news: MenuProps['items'] = [
    {
      key: '1',
      label: t('NEWS'),
    },
    {
      key: '2',
      label: t('ACTIVITY'),
    },
    {
      key: '3',
      label: t('INFORMATION'),
    },
  ]
  
  return (
    <nav className="flex justify-between items-center p-4 pl-24 pr-24 bg-white shadow-md">
      <div className="text-2xl font-bold">
        <span className="text-amber-500 p-2">RIFT</span>
        <span className="text-stone-950">VALLEY</span>
        </div>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link href="/home" className="text-sm text-gray-500 hover:text-orange-500">{t('HOME')}</Link>
        </li>
        <li>
          <Link href="/about" className="text-sm text-gray-500 hover:text-orange-500">{t('ABOUT_US')}</Link>
        </li>
        <li>
          <Dropdown menu={{ items:products }}>
              <div className="text-gray-500 text-sm cursor-pointer">
                {t('PRODUCTS_SOLUTIONS')}
              </div>
          </Dropdown>
        </li>
        <li>
          <Link href="/contact" className="text-sm text-gray-500 hover:text-orange-500">{t('CONTACT_US')}</Link>
        </li>
        <li>
            <Input suffix={<SearchOutlined />}></Input>
        </li>
        <li>
            <div onClick={toggleLang}
              className="p-1 pl-4 pr-4 hover:border-orange-500 hover:text-orange-500 rounded border-1 text-gray-500 text-sm cursor-pointer" >
                <GlobalOutlined style={{marginRight:8}}/>{lang === 'en' ? '中文' : 'English'}
            </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
