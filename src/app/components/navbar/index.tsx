import { SearchOutlined } from "@ant-design/icons";
import { Input, MenuProps } from "antd";
import Link from "next/link";
import { Button, Dropdown, Space } from 'antd';


const products: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href="/products/solar" className="text-sm text-gray-500 hover:text-orange-500">能源管理平台</Link>

    ),
  },
  {
    key: '2',
    label: (
      <Link href="/products/elysiumCore" className="text-sm text-gray-500 hover:text-orange-500">餐娱运营云控平台</Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href="/products/kainoAi" className="text-sm text-gray-500 hover:text-orange-500">AI室内设计app</Link>
      //  <Link href="https://www.kainoai.com/home" passHref legacyBehavior>
      //    <a target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-orange-500">
      //      AI室内设计app
      //    </a>
      //  </Link>

),
  },
  {
    key: '4',
    label: '定制开发解决方案',
    children: [
      {
        key: '4-1',
        label: <Link href="/services/web" className="text-sm text-gray-500 hover:text-orange-500">网站软件定制</Link>,
        
      },
      {
        key: '4-2',
        label: <Link href="/services/app" className="text-sm text-gray-500 hover:text-orange-500">移动端app定制</Link>,

      },
      {
        key: '4-3',
        label: <Link href="/services/enterprise" className="text-sm text-gray-500 hover:text-orange-500">企业数字化定制</Link>,
      },
    ],
  },
  {
    key: '5',
    label:<Link href="/services/oneStop" className="text-sm text-gray-500 hover:text-orange-500">一站式IT管理</Link>

  },
]

const services: MenuProps['items'] = [
  {
    key: '1',
    label: '文档',
  },
  {
    key: '2',
    label: 'Q&A',
  },
]

const news: MenuProps['items'] = [
  {
    key: '1',
    label: '最新发布',
  },
  {
    key: '2',
    label: '活动',
  },
  {
    key: '3',
    label: '资讯',
  },
]


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 pl-24 pr-24 bg-white shadow-md">
      <div className="text-2xl font-bold">
        <span className="text-amber-500 p-2">RIFT</span>
        <span className="text-stone-950">VALLEY</span>
        </div>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link href="/home" className="text-sm text-gray-500 hover:text-orange-500">首页</Link>
        </li>
        <li>
          <Link href="/about" className="text-sm text-gray-500 hover:text-orange-500">公司简介</Link>
        </li>
        <li>
          <Dropdown menu={{ items:products }}>
              <div className="text-gray-500 text-sm cursor-pointer">
                产品和解决方案
              </div>
          </Dropdown>
        </li>
        <li>
          <Dropdown menu={{ items:services }}>
              <div className="text-gray-500 text-sm cursor-pointer">
                服务支持
              </div>
          </Dropdown>
        </li>
        <li>
          <Dropdown menu={{ items:news }}>
            <div className="text-gray-500 text-sm cursor-pointer">
            公司动态
            </div>
          </Dropdown>
        </li>
        <li>
          <Link href="/about" className="text-sm text-gray-500 hover:text-orange-500">联系我们</Link>
        </li>
        <li>
            <Input suffix={<SearchOutlined />}></Input>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
