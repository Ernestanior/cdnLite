'use client';

import React from 'react';
import Image from "next/image";
import img1 from './icon.png'

export default function Timeline({steps}:any) {
  return (
    <div className="relative py-16">
      {/* Horizontal line */}
    <div className="absolute left-0 right-12 top-1/2 h-1 bg-orange-400 z-0"/>
    <div className='flex items-center'>
        <div className="relative z-10 grid grid-cols-5 gap-x-4">
            {steps.map((step:any, index:number) => (
            <div key={index} className="relative flex flex-col items-center ">
                {step.position === 'top' && (
                <div className="mb-48 rounded-xl w-85 h-30 border p-6 text-sm shadow-md relative mr-[-50]">
                    <div className="absolute bg-orange-400 h-7 w-1 bottom-[-39] left-[50%]"></div>
                    <div className=" font-bold mb-1 text-lg"><span className="text-amber-500 mr-2">{step.number}</span> <span className="text-black">{step.title}</span> </div>
                    <div className="text-gray-600">{step.description}</div>
                </div>
                )}
                {step.position === 'bottom' && (
                <div className="mt-48 rounded-xl w-85 h-30 border p-6  text-sm shadow-md relative mr-[-50]">
                    <div className="absolute bg-orange-400 h-7 w-1 top-[-34] left-[50%]"></div>
                    <div className=" font-bold mb-1 text-lg"><span className="text-amber-500 mr-2">{step.number}</span> <span className="text-black">{step.title}</span> </div>
                    <div className="text-gray-600">{step.description}</div>
                </div>
                )}
            </div>
            ))}
        </div>
        <div className='w-18 h-18 mt-6 ml-30'>
            <Image src={img1} alt=''/>
        </div>
    </div>


    </div>
  );
}
