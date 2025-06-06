'use client'
import Image from "next/image";
import img1 from './bg1.png'
import map from './map.png'
import icon1 from '@/app/assets/icon/x.png'
import icon2 from '@/app/assets/icon/ins.png'
import icon3 from '@/app/assets/icon/whatsapp.png'
import Navbar from "@/app/pc/components/navbar";
import Footer from "@/app/pc/components/footer";
import { useLanguage } from "@/context/languageContext";
import { EnvironmentFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import { Button, Input, notification, NotificationArgsProps } from "antd";
import TextArea from "antd/es/input/TextArea";

type NotificationPlacement = NotificationArgsProps['placement'];
const Contact = () => {
  const { t } = useLanguage();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: t("FEED_BACK"),
      placement,
    });
  };
  return (
    <div className="bg-white min-w-7xl ">
      <Navbar />
      {contextHolder}
      <div className="flex flex-col items-center">
        <h3 className="mt-26 mb-10 text-4xl font-bold text-black">{t("CONTACT_US")}</h3>
        <div className="mb-10 text-stone-500">{t("CONTACT_US_DESC")}</div>
        <div className="mb-10 flex shadow-lg ">
          {/* <Image src={img1} alt={""} className="w-100 h-auto" /> */}
          <div className="p-10 w-100 bg-sky-950 rounded-tl-xl rounded-bl-xl ">
            <div className="h-110 bg-amber-500 rounded-lg flex items-center flex-col p-5 py-15">
              <div className="text-white font-bold text-2xl mb-20 rounded-4xl bg-sky-950 px-10 py-2 shadow-xl">{t("CONTACT_DETAIL")}</div>
              <div>
                <div className="mb-5 flex text-white font-bold text-lg items-center"><PhoneFilled className="mr-3 text-lg bg-sky-950 p-2 rounded-2xl" /> +65 6284 6860</div>
                <div className="mb-5 flex text-white font-bold text-lg  items-center"><MailFilled className="mr-3 text-lg bg-sky-950 p-2 rounded-2xl" /> sales@riftvalley.ai</div>
                {/* <div className="mb-5 flex"><EnvironmentFilled className="mr-3 text-lg"/><span className="w-65"> 152 Beach Road #21-05/06 Singapore 187721</span></div> */}
              </div>
            </div>

            {/* <div className="flex mt-40">
              <div className="p-2 mr-5 rounded-3xl bg-orange-400" >
                <Image src={icon1} alt={""} className="w-5 h-auto" />
              </div>
              <div className="p-2 mr-5 rounded-3xl bg-white" >
                <Image src={icon2} alt={""} className="w-5 h-auto" />
              </div>
              <div className="p-2 mr-5 rounded-3xl bg-orange-400" >
                <Image src={icon3} alt={""} className="w-5 h-auto" />
              </div>
            </div> */}
          </div>
          <div className="pt-10 pl-15 text-black p-10">
            <div>{t("NAME")}</div>
            <Input style={{ width: 400, borderColor: "#ccc", marginTop: 5 }}></Input>
            <div className="pt-6">{t("EMAIL")}</div>
            <Input style={{ width: 400, borderColor: "#ccc", marginTop: 5 }}></Input>
            <div className="pt-6">{t("PHONE")}</div>
            <Input style={{ width: 400, borderColor: "#ccc", marginTop: 5 }}></Input>
            <div className="pt-6">{t("MESSAGE")}</div>
            <TextArea style={{ width: 400, height: 100, borderColor: "#ccc", marginTop: 5 }}></TextArea>
            <div className="mt-6 text-end"><Button type="primary" onClick={() => openNotification('top')} style={{ backgroundColor: "#f1a240", width: 150 }}>{t("SEND")}</Button></div>
          </div>
        </div>
        {/* <Image src={map} alt={""} className="w-250 h-auto" /> */}

      </div>
      <Footer />
    </div>
  );
};

export default Contact;
