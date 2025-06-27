'use client'

import Navbar from "@/app/pc/components/navbar";
import Footer from "@/app/pc/components/footer";
import { useLanguage } from "@/context/languageContext";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-w-7xl">
      <Navbar />
      <div className="flex flex-col items-center text-stone-500 p-30">
        <div className="leading-10">
          <h3 className="mb-10 text-4xl font-bold text-black text-center">{t("SERVICE")}</h3>
          <div >We are committed to ensuring the privacy and security of your personal information. This Privacy Policy outlines how we collect, use and protect your data. By using our Services, you agree to be bound by the terms and practices described here</div>
          <div>1. Information we collect</div>
          <div>We may collect the following types of information:</div>
          <div>Personal information: name, email address, contact information.</div>
          <div>Design Preferences: Information you provide about your design needs and preferences.</div>
          <div>Usage Data: Interaction data, such as your interactions with our websites and design tools.</div>
          <div>We collect this information to provide you with personalized and efficient graphic design solutions.</div>
          <div>2. How we use your information</div>
          <div>We use your information to:</div>
          <div>Create and deliver graphic designs based on your preferences.</div>
          <div>Communicate with you about your design projects and updates.</div>
          <div>Usage Data: Interaction data, such as your interactions with our websites and design tools.</div>
          <div>3. Data security</div>
          <div>We take the security of your data seriously. We take technical and organizational measures to protect your information from unauthorized access, loss, misuse or alteration. However, please note that the transmission of data over the Internet is No method is completely safe.</div>
          <div>4. Information Sharing</div>
          <div>We do not share your personal information with third parties for marketing purposes. However, we may share your information with:</div>
          <div>Service providers who assist us in providing design services.</div>
          <div>Legal and regulatory authorities as required by law.</div>
          <div>5. Cookies and Tracking Technologies</div>
          <div>Our websites and services may use cookies and similar tracking technologies to enhance your browsing experience and collect usage information. You can adjust your browser settings to manage your cookie preferences.</div>
          <div>6. Your Choices</div>
          <div>You have the following rights:</div>
          <div>Access, correct, or delete your personal information.</div>
          <div>Opt out of receiving marketing communications.</div>
          <div>Raise an objection or restrict data processing.</div>
          <div>To exercise these rights, please contact us at enquiry@kainoai.com.</div>
          <div>7. Children's Privacy</div>
          <div>Our Services are not directed to individuals under [12] years of age. We do not knowingly collect personal information from children.</div>
          <div>8. Changes to Privacy Policy</div>
          <div>We may periodically update this Privacy Policy to reflect changes to our practices and services. Revisions will be posted on our website along with the effective date.</div>
          <div>For any inquiries about our privacy policy or data practices, please contact us at enquiry@kainoai.com. Your privacy is important to us and we are committed to addressing any concerns you may have.</div>
          <div>KainoAI Operation Team</div>
          <div>Contact email:enquiry@kainoai.com</div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Terms;
