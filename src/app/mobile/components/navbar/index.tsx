'use client';
import { GlobalOutlined, SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Drawer, Input, Menu, MenuProps } from "antd";
import Link from "next/link";
import { useLanguage } from '@/context/languageContext';
import { useState } from "react";

type MenuItem = Required<MenuProps>['items'][number];

const Navbar = () => {
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const { t } = useLanguage();

  const items: MenuItem[] = [
    { key: '1', label: <Link href="/home" className="text-base text-stone-500 hover:text-stone-500">{t('HOME')}</Link>,onClick:()=>setOpen(false) },
    { key: '2', label: <Link href="/about" className="text-base text-stone-500 hover:text-stone-500">{t('COMPANY_PROFILE')}</Link> ,onClick:()=>setOpen(false)},
    {
      key: 'sub2',
      label: <div className="text-stone-500 text-base cursor-pointer hover:text-stone-500">{t('PRODUCTS_SOLUTIONS')}</div>,
      children: [
        { key: '4', label: <Link href="/products/solar" className="text-base text-stone-500 hover:text-stone-500">{t("SOLARENGY")}</Link> ,onClick:()=>setOpen(false)},
        { key: '5', label: <Link href="/products/elysiumCore" className="text-base text-stone-500 hover:text-stone-500">{t("ELYSIUMCORE")}</Link> ,onClick:()=>setOpen(false)},
        { key: '6', label: <Link href="/products/kainoAi" className="text-base text-stone-500 hover:text-stone-500">{t("KAINOAI")}</Link>,onClick:()=>setOpen(false)},
        {
          key: 'sub3',
          label: <div className="text-stone-500 text-base cursor-pointer hover:text-stone-500">{t('MAKE_SOLUTIONS')}</div>,
          children: [
            { key: '7', label: <Link href="/services/web" className="text-base text-stone-500 hover:text-stone-500">{t('WEB_DEV_SERVICE')}</Link> ,onClick:()=>setOpen(false)},
            { key: '8', label: <Link href="/services/app" className="text-base text-stone-500 hover:text-stone-500">{t('MOBILE_WEB_SERVICE')}</Link> ,onClick:()=>setOpen(false)},
            { key: '9', label: <Link href="/services/enterprise" className="text-base text-stone-500 hover:text-stone-500">{t('ENTERPRISE_DIGITAL_SOLUTIONS')}</Link> ,onClick:()=>setOpen(false)},
            { key: '10', label: <Link href="/services/oneStop" className="text-base text-stone-500 hover:text-stone-500">{t('INFRASTRUCTURE_SOLUTIONS')}</Link> ,onClick:()=>setOpen(false)},
          ],
        },
      ],
    },
    { key: '11', label: <Link href="/contact" className="text-base text-stone-500 hover:text-stone-500">{t('CONTACT_US')}</Link> ,onClick:()=>setOpen(false)},
  ];

  
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
        <Link href="/home" className="text-2xl font-bold" >
          <span className="text-amber-500 p-2">RIFT</span>
          <span className="text-stone-950">VALLEY</span>
        </Link>
        <UnorderedListOutlined style={{color:"#000",fontSize:20}} onClick={()=>setOpen(!open)}/>
        <Drawer
          placement={'top'}
          closable={false}
          onClose={()=>setOpen(false)}
          open={open}
          key={'bottom'}
          height={630}
        >
          <Menu
            className="nav-menu"
            defaultOpenKeys={['sub2','sub3']}
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
            style={{border:0}}
            
          />
          <div onClick={toggleLang}
            className="w-20 mt-2 ml-7 hover:border-grey-500 text-stone-500 text-base cursor-pointer" >
              <GlobalOutlined style={{marginRight:10}}/>{lang === 'en' ? '中文' : 'English'}
          </div>
        </Drawer>

    </nav>
  );
};

export default Navbar;
