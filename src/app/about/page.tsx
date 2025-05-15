
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import InfoSection from "./infoSection";
import aboutImg from '@/app/assets/about/about.png';
import brand1 from '@/app/assets/about/brand1.png';
import brand2 from '@/app/assets/about/brand2.png';
import brand3 from '@/app/assets/about/brand3.png';
import brand4 from '@/app/assets/about/brand4.png';
import brand5 from '@/app/assets/about/brand5.png';
import profile from '@/app/assets/about/profile.jpg';
import Image from "next/image";
import TeamMember from "./member";

const About = () => {
  return (
    <div className="bg-white min-w-7xl">
        <Navbar />
        <div >
            {/* 第一部分 */}
            <InfoSection
                image={aboutImg}
                title="About Riftvalley"
                content={[
                "Riftvalley是一家专注于智能化解决方案的创新企业。致力于通过先进的技术和深厚的行业经验为客户提供高效，智能的产品和解决方法，帮助客户实现数字化转型，提升业务效率，并推动可持续发展。我们的产品和解决方案涵盖人工智能应用，数字化运营优化，企业级软件定制开发等领域，为不同行业提供量身定制的技术解决方案。",
                ]}
            />

            {/* 第二部分 - 反向布局 */}
            <InfoSection
                image={aboutImg}
                title="企业理念"
                content={[
                    "我们致力于以技术创新推动变革，通过创新的数字化解决方案，帮助企业实现智能化、自动化运营，从而提高效率、降低成本，提升市场竞争力。",
                    "我们以客户为中心，深入了解客户的业务和挑战，提供量身定制的解决方案，确保帮助客户实现业务目标并快速应对市场变化。我们始终以真诚和创新的态度追求卓越，精益求精，注重每个项目的细节，确保每一项交付都能超越客户期望。"
                ]}
                reverse
            />

            {/* 第三部分 */}
            <InfoSection
                image={aboutImg}
                title="核心价值观"
                children={<div className="text-stone-900 pt-5">
                    <ol>
                        <li className="font-bold py-2">● 创新驱动</li>
                        <p className="text-stone-400 pl-2 pb-5 text-sm">持续探索和应用最新的技术，推动产品与服务升级，助力客户在数字化转型过程中赢得竞争优势。</p>
                        <li className="font-bold py-2">● 客户至上</li>
                        <p className="text-stone-400 pl-2 pb-5 text-sm"> 客户的需求是我们最优先的考虑。通过高质量的产品和专业的服务，帮助客户实现业务目标和可持续发展。</p>
                        <li className="font-bold py-2">● 协作共赢</li>
                        <p className="text-stone-400 pl-2 pb-5 text-sm"> 倡导开放包容的合作文化，携手客户与合作伙伴共同成长，共创价值</p>
                        <li className="font-bold py-2">● 诚信透明</li>
                        <p className="text-stone-400 pl-2 pb-5 text-sm"> 我们始终保持诚信，提供清晰、透明的沟通和服务，赢得客户、员工和合作伙伴的信任与满意。</p>
                    </ol>
                </div>}
            />
        </div>
        <div className="flex flex-col items-center p-10 bg-gray-50" >
            <div className="text-stone-900 text-3xl font-black pb-10">合作的企业</div>
            <div className="flex justify-around w-250 pb-3">
                <Image src={brand5} alt={""} className="h-10 object-contain" />
                <Image src={brand1} alt={""} className="h-15 object-contain" />
                <Image src={brand2} alt={""} className="h-15 object-contain" />
                <Image src={brand3} alt={""} className="h-10 object-contain" />
                <Image src={brand4} alt={""} className="h-15 object-contain" />
            </div>
        </div>
        {/* <div className=" p-10" >

        </div> */}
        <div className="flex flex-col items-center gap-8 px-26 py-12">
            <div className="text-stone-900 text-3xl font-black pb-10">技术团队</div>
            <div className="flex">
                <TeamMember
                    image={profile}
                    name="Michael Wong"
                    position="Software Development Manager"
                    experience="8+ years in software development and team leadership"
                    responsibility="Oversee development teams, ensure timely delivery of high-quality software solutions."
                    bgColor="bg-blue-400"
                />

                <TeamMember
                    image={profile}
                    name="Emily Lee"
                    position="Project Manager"
                    experience="6+ years in data analytics and project management"
                    responsibility="Design project roadmaps and lead a team of analysts to drive data-driven strategies."
                    bgColor="bg-blue-400"
                />

                <TeamMember
                    image={profile}
                    name="David Loh"
                    position="Backend Software Engineer"
                    bgColor="bg-blue-400"
                />

                <TeamMember
                    image={profile}
                    name="Jason Chong"
                    position="QA Automation Engineer"
                    bgColor="bg-blue-400"
                />
            </div>

        </div>
        <Footer/>
    </div>
  );
};

export default About;
