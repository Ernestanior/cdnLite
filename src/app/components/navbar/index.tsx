import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 pl-24 pr-24 bg-white shadow-md">
      <div className="text-2xl font-bold">
        <span className="text-amber-500 p-2">RIFT</span>
        <span className="text-stone-950">VALLEY</span>
        </div>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link href="/" className="text-sm text-gray-500 hover:text-orange-500">首页</Link>
        </li>
        <li>
          <Link href="/about" className="text-sm text-gray-500 hover:text-orange-500">公司简介</Link>
        </li>
        <li>
          <Link href="/about" className="text-sm text-gray-500 hover:text-orange-500">产品和解决方案</Link>
        </li>
        <li>
          <Link href="/about" className="text-sm text-gray-500 hover:text-orange-500">服务支持</Link>
        </li>
        <li>
          <Link href="/about" className="text-sm text-gray-500 hover:text-orange-500">公司动态</Link>
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
