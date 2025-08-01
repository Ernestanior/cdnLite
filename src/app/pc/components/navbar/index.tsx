'use client';
import { GlobalOutlined, SearchOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
import { Dropdown } from 'antd';
import { useLanguage } from '@/context/languageContext';
import ContactButton from "../contactButton";

const Navbar = () => {
  const { lang, toggleLang } = useLanguage();
  const { t } = useLanguage();

  const products: MenuProps['items'] = [
    {
      key: '1',
      label: t('大陆直连CDN'),
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
      label: <Link href="/dns" className="text-base text-teal-500 hover:text-stone-500">{t('智能解析DNS')}</Link>,
    },
    // {
    //   key: '9',
    //   label: <Link href="/security/ssl" className="text-base text-teal-500 hover:text-stone-500">{t('SSL证书')}</Link>,
    // },
    {
      key: '3',
      label: <Link href="/security/ddos" className="text-base text-teal-500 hover:text-stone-500">{t('DDoS防御')}</Link>,
    },
    {
      key: '4',
      label: <Link href="/security/cc" className="text-base text-teal-500 hover:text-stone-500">{t('CC攻击防御')}</Link>,
    },
    {
      key: '5',
      label: <Link href="/security/waf" className="text-base text-teal-500 hover:text-stone-500">{t('屏蔽域名跳转')}</Link>,
    },
  ]
  
  
  return (
    <nav className="z-100 sticky top-0 flex justify-between items-center p-5 pl-15 pr-24 shadow-md"  style={{ background: 'linear-gradient(180deg,#2d012e,#000)'}}>
        <ContactButton />
        <Link href="/home" className="text-2xl font-bold" >
          <span className="text-fuchsia-400 p-2">CDN</span>
          <span className="text-white">LITE</span>
        </Link>
      <ul className="flex space-x-5 sm:space-x-10 lg:space-x-20 items-center ">
        <li >
          <Link href="/home" className="text-lg font-bold text-white hover:text-fuchsia-400 hidden lg:block w-10">{t('主页')}</Link>
        </li>
        <li>
          <Link href="/about" className="text-lg font-bold text-white hover:text-fuchsia-400 hidden lg:block w-20">{t('关于我们')}</Link>
        </li>
        <li>
          <Dropdown menu={{ items:products }}>
              <div className="text-white text-lg font-bold cursor-pointer hover:text-fuchsia-400 w-10">
                {t('产品')}
              </div>
          </Dropdown>
        </li>
        {/* <li>
            <div onClick={toggleLang}
              className="w-23 hover:border-grey-500 hover:text-fuchsia-400 text-white text-base font-bold cursor-pointer w-15 hidden sm:block" >
                <GlobalOutlined style={{marginRight:10}}/>{lang === 'en' ? '中文' : 'English'}
            </div>
        </li> */}
        {/* <li>
          <div className=" py-1 border-2 rounded-3xl bg-white hover:bg-black text-black text-center  hover:text-white w-25 hidden md:block">
            <Link href="/contact" className="text-base font-bold ">{t('联系我们')}</Link>
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
