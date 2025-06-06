'use client'
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { useLanguage } from "@/context/languageContext";

interface TeamMemberProps {
  image: any;
  name: string;
  position: string;
  experience?: string;
  responsibility?: string;
  bgColor: string; // 头像背景颜色
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, experience, responsibility, bgColor }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center text-center w-full md:w-1/4 px-4">
      {/* 头像 */}
      <div className={`w-24 h-24 rounded-full overflow-hidden flex items-center justify-center ${bgColor}`}>
        <UserOutlined style={{fontSize:50}}/>
      </div>
      
      {/* 姓名 */}
      <span className="text-orange-500 font-semibold mt-4 text-sm">{name}</span>

      {/* 职位 */}
      <h4 className="text-gray-900 font-bold">{position}</h4>

      {/* 经验 */}
      {experience && <p className="text-gray-500 font-semibold mt-2 text-sm">{t('EXPERIENCE')}: <span className="font-normal">{experience}</span></p>}

      {/* 责任描述 */}
      {responsibility && (
        <p className="text-gray-500 font-semibold mt-1 text-sm">
          {t('RESPONSIBILITY')}: <span className="font-normal">{responsibility}</span>
        </p>
      )}
    </div>
  );
};

export default TeamMember;
