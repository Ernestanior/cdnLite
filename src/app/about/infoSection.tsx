import React from "react";
import Image from "next/image";

interface InfoSectionProps {
  image: any;
  title: string;
  content?: string[];
  children?:any;
  reverse?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({ image, title, content,children, reverse = false }) => {
  return (
    <div className={`flex flex-col pl-24 pr-24 md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center justify-around gap-8 px-6 py-12`}>
      {/* 图片 */}
      <div className="w-140">
        <Image src={image} alt={title} className="rounded-lg shadow-md w-full h-100 object-cover" />
      </div>
      {/* 文本 */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-mono font-bold text-gray-900">{title}</h2>
        {content?.map((paragraph, index) => (
          <p key={index} className="mt-4 text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
