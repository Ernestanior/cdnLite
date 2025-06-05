'use client';

import React from 'react';
import Image from "next/image";
import { useLanguage } from '@/context/languageContext';

export default function Timeline({ steps,icon }: any) {
  const { t } = useLanguage();

  return (
    <div className="p-15 pl-50 pr-50 bg-slate-100 mt-15 flex flex-col items-center">
      <div className="w-full flex flex-col items-center mb-5">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800">{t('DEV_FLOW')}</h2>
      </div>
      <div className="relative py-6">
        {/* Horizontal line */}
        <div className="absolute left-0 right-20 top-1/2 h-1 bg-orange-400 z-0" />
        <div className='flex items-center'>
          <div className="relative z-10 grid grid-cols-5 gap-x-4">
            {steps.map((step: any, index: number) => (
              <div key={index} className="relative flex flex-col items-center ">
                {step.position === 'top' && (
                  <div className="bg-white mb-48 rounded-xl w-73 h-30 border p-5 text-sm shadow-md relative mr-[-80]">
                    <div className="absolute bg-orange-400 h-7 w-1 bottom-[-39] left-[50%]"></div>
                    <div className=" font-bold mb-1 text-base"><span className="text-amber-500 mr-2">{step.number}</span> <span className="text-black">{step.title}</span> </div>
                    <div className="text-gray-600">{step.description}</div>
                  </div>
                )}
                {step.position === 'bottom' && (
                  <div className="bg-white mt-48 rounded-xl w-70 h-30 border p-5  text-sm shadow-md relative mr-[-80]">
                    <div className="absolute bg-orange-400 h-7 w-1 top-[-34] left-[50%]"></div>
                    <div className=" font-bold mb-1 text-base"><span className="text-amber-500 mr-2">{step.number}</span> <span className="text-black">{step.title}</span> </div>
                    <div className="text-gray-600">{step.description}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='w-18 h-18 mt-6 ml-30'>
            <Image src={icon} alt='' />
          </div>
        </div>
      </div>


    </div>
  );
}
