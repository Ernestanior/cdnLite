'use client'
import Navbar from "@/app/pc/components/navbar";
import Footer from "@/app/pc/components/footer";
import { useLanguage } from "@/context/languageContext";
import { MailFilled, PhoneFilled } from "@ant-design/icons";
import { Button, Input, notification, NotificationArgsProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import Image from "next/image";
import img1 from '@/app/assets/contact/img1.png'

type NotificationPlacement = NotificationArgsProps['placement'];
const Contact = () => {
  const { t } = useLanguage();
  const [api, contextHolder] = notification.useNotification();
  const [name,setName]=useState<string>('');
  const [email,setEmail]=useState<string>('');
  const [phone,setPhone]=useState<string>('');
  const [remark,setRemark]=useState<string>('');

  const openNotification = (placement: NotificationPlacement) => {
    setName('');setEmail('');setPhone('');setRemark('');
    api.info({
      message: t("FEED_BACK"),
      placement,
    });
  };
  return (
    <div className="bg-gradient-to-tr from-[#5880e8]/30 via-[#d058e8]/20 to-transparent">
      <Navbar />
      <div className="flex flex-col items-center">
        <h3 className="mt-26 mb-10 text-4xl font-bold text-white">{t("CONTACT_US")}</h3>
        <div className="mb-10 text-white">{t("CONTACT_US_DESC")}</div>
        <div className="mb-10 flex flex-col lg:flex-row items-center gap-10 shadow-lg ">
          {/* <Image src={img1} alt={""} className="w-100 h-auto" /> */}
          <div className="p-10 w-100 bg-gradient-to-bl via-[#e81223]/20 shadow-[0_0_15px_0_#fff] rounded-xl ">
            <div className="h-110 bg-white rounded-lg flex items-center flex-col py-8">
              <div className="bg-white mb-10 rounded-4xl bg-black shadow-[0_0_15px_0_#fff] shadow-xl">
                <div className="text-white font-bold text-2xl rounded-4xl bg-gradient-to-tl via-[#8f0143]/100 px-10 py-2 ">{t("CONTACT_DETAIL")}</div>
              </div>
              <div>
                <div className="mb-5 flex text-rose-950 font-bold text-lg items-center"><PhoneFilled className="mr-3 text-lg p-2  " /> +65 6284 6860</div>
                <div className="flex text-rose-950 font-bold text-lg  items-center"><MailFilled className="mr-3 text-lg p-2 " /> sales@gmail.com</div>
                {/* <div className="mb-5 flex"><EnvironmentFilled className="mr-3 text-lg"/><span className="w-65"> 152 Beach Road #21-05/06 Singapore 187721</span></div> */}
              </div>
            </div>
          </div>
          <div className="text-black p-10 bg-gradient-to-tl via-[#e81223]/20 rounded-xl text-white shadow-[0_0_15px_0_#fff]">
            <div>{t("NAME")}</div>
            <Input style={{ width: 400, borderColor: "#ccc", marginTop: 5 }} value={name} onChange={(e)=>setName(e.target.value)}></Input>
            <div className="pt-6 font-bold">{t("EMAIL")}</div>
            <Input style={{ width: 400, borderColor: "#ccc", marginTop: 5 }} value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
            <div className="pt-6 font-bold">{t("PHONE")}</div>
            <Input style={{ width: 400, borderColor: "#ccc", marginTop: 5 }} value={phone} onChange={(e)=>setPhone(e.target.value)}></Input>
            <div className="pt-6 font-bold">{t("MESSAGE")}</div>
            <TextArea style={{ width: 400, height: 100, borderColor: "#ccc", marginTop: 5 }} value={remark} onChange={(e)=>setRemark(e.target.value)}></TextArea>
            <div className="mt-6 text-end"><Button type="primary" onClick={() => openNotification('top')}  style={{ backgroundColor: "#fff",color:"#5f012d",fontWeight:600, width: 150 }}>{t("SEND")}</Button></div>
          </div>
        </div>
        {/* <Image src={map} alt={""} className="w-250 h-auto" /> */}

      </div>
      <Footer />
    </div>
  );
};

export default Contact;
