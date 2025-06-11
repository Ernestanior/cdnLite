import React from "react";
import Image from "next/image";

interface InfoSectionProps {
  image: any;
  title: string;
  content?: string[];
  children?:any;
  reverse?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({ image, title, content,children}) => {
  return (
    <div className={`flex flex-col px-6 items-center justify-around gap-8 py-12`}>
      {/* 图片 */}
      <div className="w-85">
        <Image src={image} alt={title} className="rounded-lg shadow-md w-full h-110 object-cover" />
      </div>
      {/* 文本 */}
      <div className="w-full ">
        <h2 className="text-3xl mb-5 font-bold text-gray-900">{title}</h2>
        {content?.map((paragraph, index) => (
          <p key={index} className="mt-4 text-gray-500 leading-relaxed">
            {paragraph}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
