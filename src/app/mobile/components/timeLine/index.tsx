'use client';

import React from 'react';
import Image from "next/image";
import { useLanguage } from '@/context/languageContext';

export default function Timeline({ steps,icon }: any) {
  const { t } = useLanguage();

  return (
    <div className="py-10 px-5 bg-slate-100 flex flex-col items-center">
      <div className="w-full flex flex-col items-center mb-5">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800">{t('DEV_FLOW')}</h2>
      </div>
      <div className="relative py-6 flex">
        {/* Vertical line */}
        <div className='flex flex-col items-center flex-1'>
          <div className="w-1 bg-orange-400 h-full" />
          <Image src={icon} alt='' />
        </div>
        <div className='flex items-center flex-5'>
          <div className="flex flex-col">
            {steps.map((step: any, index: number) => (
              <div key={index} className="relative flex flex-col items-center mb-10">
                  <div className="bg-white rounded-xl p-5 text-sm shadow-md relative">
                    <div className="absolute bg-orange-400 h-1 w-7 left-[-29] top-[50%]"></div>
                    <div className="font-bold mb-1 text-base"><span className="text-amber-500 mr-2">{step.number}</span> <span className="text-black">{step.title}</span> </div>
                    <div className="text-gray-600 w-60">{step.description}</div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}
