'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLanguage } from "@/context/languageContext";
import { MailFilled, PhoneFilled } from "@ant-design/icons";
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
    <div className="bg-white">
      <Navbar />
      {contextHolder}
      <div className="flex flex-col items-center p-5">
        <h3 className="mt-16 mb-5 text-4xl font-bold text-black">{t("CONTACT_US")}</h3>
        <div className="mb-10 text-stone-500 text-center">{t("CONTACT_US_DESC")}</div>

        <div className="text-black">
          <div>{t("NAME")}</div>
          <Input style={{ width: 350, borderColor: "#ccc", marginTop: 5 }}></Input>
          <div className="pt-6">{t("EMAIL")}</div>
          <Input style={{ borderColor: "#ccc", marginTop: 5 }}></Input>
          <div className="pt-6">{t("PHONE")}</div>
          <Input style={{ borderColor: "#ccc", marginTop: 5 }}></Input>
          <div className="pt-6">{t("MESSAGE")}</div>
          <TextArea style={{ height: 100, borderColor: "#ccc", marginTop: 5 }}></TextArea>
            <div onClick={() => openNotification('top')} className="text-center mt-10 bg-amber-500 text-white py-2 rounded ">
              {t('SEND')}
            </div>
        </div>
        <div className="mt-10 mb-10 flex shadow-lg ">
          <div className="p-10 w-100 bg-sky-950">
            <div className="h-110 bg-amber-500 rounded-lg flex items-center flex-col p-5 py-15">
              <div className="text-white font-bold text-2xl mb-20 rounded-4xl bg-sky-950 px-10 py-2 shadow-xl">{t("CONTACT_DETAIL")}</div>
              <div>
                <div className="mb-5 flex text-white font-bold text-lg items-center"><PhoneFilled className="mr-3 text-lg bg-sky-950 p-2 rounded-2xl" /> +65 6284 6860</div>
                <div className="mb-5 flex text-white font-bold text-lg  items-center"><MailFilled className="mr-3 text-lg bg-sky-950 p-2 rounded-2xl" /> sales@riftvalley.ai</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Contact;
