import { FacebookOutlined, InstagramOutlined, TwitterOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer>
      <div className="bg-white py-12 px-24 flex items-center">
      {/* 联系方式 */}
      <div className="flex-2 text-gray-900 w-60">
          <h2 className="text-lg font-semibold mb-5">联系我们</h2>
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
          <h3 className="font-semibold mb-5">首页</h3>
          <p className="mb-2 text-sm">公司简介</p>
          <p className="mb-2 text-sm">服务支持</p>
          <p className="mb-2 text-sm">公司动态</p>
          <p className="mb-2 text-sm">联系我们</p>
          </div>
          <div>
          <h3 className="font-semibold mb-5">产品</h3>
          <p className="mb-2 text-sm">新能源管理平台</p>
          <p className="mb-2 text-sm">餐娱运营云控平台</p>
          <p className="mb-2 text-sm">AI室内设计APP</p>
          </div>
          <div>
          <h3 className="font-semibold mb-5">解决方案</h3>
          <p className="mb-2 text-sm">定制开发解决方案</p>
          <p className="mb-2 text-sm">一站式IT解决方案</p>
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
