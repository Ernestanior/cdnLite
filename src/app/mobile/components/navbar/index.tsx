'use client';
import { GlobalOutlined, SearchOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
import { Dropdown } from 'antd';
import { useLanguage } from '@/context/languageContext';

const Navbar = () => {
  const { lang, toggleLang } = useLanguage();
  const { t } = useLanguage();

  const products: MenuProps['items'] = [
    {
      key: '1',
      label: t('CDN 加速'),
      children: [
        {
          key: '1-1',
          label: <Link href="/cdn/static" className="text-base text-teal-500 hover:text-stone-500">{t('静态内容加速')}</Link>,
        },
        {
          key: '1-2',
          label: <Link href="/cdn/game" className="text-base text-teal-500 hover:text-stone-500">{t('游戏应用加速')}</Link>,
        },
        {
          key: '1-3',
          label: <Link href="/cdn/video
          " className="text-base text-teal-500 hover:text-stone-500">{t('视频流媒体加速')}</Link>,
        },
      ],
    },
    {
      key: '2',
      label: t('安全防御'),
      children: [
        {
          key: '2-1',
          label: <Link href="/security/ssl" className="text-base text-teal-500 hover:text-stone-500">{t('SSL证书')}</Link>,
        },
        {
          key: '2-2',
          label: <Link href="/security/ddos" className="text-base text-teal-500 hover:text-stone-500">{t('DDoS攻击高防')}</Link>,
        },
        {
          key: '2-3',
          label: <Link href="/security/cc" className="text-base text-teal-500 hover:text-stone-500">{t('CC攻击防御')}</Link>,
        },
      ],
    },
  ]
  
  
  return (
    <nav className="z-100 sticky top-0 flex justify-between items-center p-5 pl-15 pr-24 shadow-md"  style={{ background: 'linear-gradient(180deg,#2d012e,#000)'}}>
        <Link href="/home" className="text-2xl font-bold" >
          <span className="text-fuchsia-400 p-2">CDN</span>
          <span className="text-white">LITE</span>
        </Link>
      <ul className="flex space-x-5 sm:space-x-10 lg:space-x-20 items-center ">
        <li >
          <Link href="/home" className="text-lg font-bold text-white hover:text-fuchsia-400 hidden lg:block w-10">{t('HOME')}</Link>
        </li>
        <li>
          <Link href="/about" className="text-lg font-bold text-white hover:text-fuchsia-400 hidden lg:block w-20">{t('ABOUT_US')}</Link>
        </li>
        <li>
          <Dropdown menu={{ items:products }}>
              <div className="text-white text-lg font-bold cursor-pointer hover:text-fuchsia-400 w-10">
                {t('产品')}
              </div>
          </Dropdown>
        </li>
        <li>
            <div onClick={toggleLang}
              className="w-23 hover:border-grey-500 hover:text-fuchsia-400 text-white text-base font-bold cursor-pointer w-15 hidden sm:block" >
                <GlobalOutlined style={{marginRight:10}}/>{lang === 'en' ? '中文' : 'English'}
            </div>
        </li>
        <li>
          <div className=" py-1 border-2 rounded-3xl bg-white hover:bg-black text-black text-center  hover:text-white w-25 hidden md:block">
            <Link href="/contact" className="text-base font-bold ">{t('CONTACT_US')}</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
