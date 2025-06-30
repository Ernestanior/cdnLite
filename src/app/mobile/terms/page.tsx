'use client'

import Navbar from "@/app/mobile/components/navbar";
import Footer from "@/app/mobile/components/footer";
import { useLanguage } from "@/context/languageContext";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col items-center text-stone-500 p-5">
        <div className="leading-10">
          <h3 className="text-lg font-bold text-black text-center">{t("TERMS_TITLE")}</h3>
          <div className="mb-10 text-center text-xs">{t('TERMS_LAST_UPDATED')}</div>
          <div className="text-sm">{t('TERMS_INTRO')}</div>

          <div className="text-sm text-black mt-10" >{t('TERMS_SECTION1_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION1_BODY')}</div>

          <div className="text-sm text-black mt-10" >{t('TERMS_SECTION2_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION2_BODY')}</div>
          <ul>
            <li className="text-sm">{t('TERMS_SECTION2_RULE1')}</li>
            <li className="text-sm">{t('TERMS_SECTION2_RULE2')}</li>
            <li className="text-sm">{t('TERMS_SECTION2_RULE3')}</li>
            <li className="text-sm">{t('TERMS_SECTION2_RULE4')}</li>
          </ul>

          <div className="text-sm text-black mt-10" >{t('TERMS_SECTION3_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION3_BODY')}</div>

          <div className="text-sm text-black mt-10" >{t('TERMS_SECTION4_TITLE')}</div>

          <div className="text-sm text-black mt-4" >{t('TERMS_SECTION4_1_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_1_BODY')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_1_RULE_1')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_1_RULE_2')}</div>

          <div className="text-sm text-black mt-4" >{t('TERMS_SECTION4_2_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_2_BODY')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_2_RULE_1')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_2_RULE_2')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_2_RULE_3')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_2_RULE_4')}</div>

          <div className="text-sm text-black mt-4" >{t('TERMS_SECTION4_3_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_3_BODY')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_3_RULE_1')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_3_RULE_2')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_3_RULE_3')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_3_RULE_4')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_3_RULE_5')}</div>

          <div className="text-sm text-black mt-4" >{t('TERMS_SECTION4_4_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_4_BODY')}</div>


          <div className="text-sm text-black mt-4" >{t('TERMS_SECTION4_5_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_5_BODY')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_5_RULE_1')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_5_RULE_2')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_5_RULE_3')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_5_RULE_4')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_5_RULE_5')}</div>

          <div className="text-sm text-black mt-4" >{t('TERMS_SECTION4_6_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION4_6_BODY')}</div>

          <div className="text-sm text-black mt-10" >{t('TERMS_SECTION5_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION5_BODY')}</div>

          <div className="text-sm text-black mt-10" >{t('TERMS_SECTION6_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION6_BODY')}</div>
          <div className="text-sm">{t('TERMS_SECTION6_RULE_1')}</div>
          <div className="text-sm">{t('TERMS_SECTION6_RULE_2')}</div>
          <div className="text-sm">{t('TERMS_SECTION6_RULE_3')}</div>

          <div className="text-sm text-black mt-10" >{t('TERMS_SECTION7_TITLE')}</div>
          <div className="text-sm">{t('TERMS_SECTION7_BODY')}</div>

        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Terms;
