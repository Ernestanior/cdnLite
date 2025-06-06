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
        <Link href="/products/solar" className="text-base text-amber-500 hover:text-stone-500">{t("SOLARENGY")}</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link href="/products/elysiumCore" className="text-base text-amber-500 hover:text-stone-500">{t("ELYSIUMCORE")}</Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link href="/products/kainoAi" className="text-base text-amber-500 hover:text-stone-500">{t("KAINOAI")}</Link>
        //  <Link href="https://www.kainoai.com/home" passHref legacyBehavior>
        //    <a target="_blank" rel="noopener noreferrer" className="text-base text-amber-500 hover:text-stone-500">
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
          label: <Link href="/services/web" className="text-base text-amber-500 hover:text-stone-500">{t('WEB_DEV_SERVICE')}</Link>,
        },
        {
          key: '4-2',
          label: <Link href="/services/app" className="text-base text-amber-500 hover:text-stone-500">{t('MOBILE_WEB_SERVICE')}</Link>,
        },
        {
          key: '4-3',
          label: <Link href="/services/enterprise" className="text-base text-amber-500 hover:text-stone-500">{t('ENTERPRISE_DIGITAL_SOLUTIONS')}</Link>,
        },
        {
          key: '4-4',
          label:<Link href="/services/oneStop" className="text-base text-amber-500 hover:text-stone-500">{t('INFRASTRUCTURE_SOLUTIONS')}</Link>
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
    <nav className="flex justify-between items-center p-5 pl-24 pr-24 bg-white shadow-md">

        <Link href="/home" className="text-2xl font-bold" >
          <span className="text-amber-500 p-2">RIFT</span>
          <span className="text-stone-950">VALLEY</span>
        </Link>

      <ul className="flex space-x-12 items-center">
        <li>
          <Link href="/home" className="text-base text-amber-500 hover:text-stone-500">{t('HOME')}</Link>
        </li>
        <li>
          <Link href="/about" className="text-base text-amber-500 hover:text-stone-500">{t('ABOUT_US')}</Link>
        </li>
        <li>
          <Dropdown menu={{ items:products }}>
              <div className="text-amber-500 text-base cursor-pointer hover:text-stone-500">
                {t('PRODUCTS_SOLUTIONS')}
              </div>
          </Dropdown>
        </li>
        <li>
          <Link href="/contact" className="text-base text-amber-500 hover:text-stone-500">{t('CONTACT_US')}</Link>
        </li>
        <li>
            <div onClick={toggleLang}
              className="w-20 mr-[-20] hover:border-grey-500 hover:text-stone-500 text-amber-500 text-base cursor-pointer" >
                <GlobalOutlined style={{marginRight:10}}/>{lang === 'en' ? '中文' : 'English'}
            </div>
        </li>
        <li>
            <SearchOutlined style={{color:"orange",fontSize:18}} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
