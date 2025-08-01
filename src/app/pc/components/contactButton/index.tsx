'use client'
import { FaTelegramPlane } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
export default function ContactButton() {
  return (
    <div className="fixed right-6 top-1/3 z-50 flex flex-col items-center space-y-10">
      <a
        href="https://t.me/yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        // className={style.moom}
        className="bg-[#28A4E5] hover:scale-105 transition-transform p-3 rounded-full shadow-lg"
      >
        <FaTelegramPlane className="text-white text-2xl " style={{color:"#fdebff"}}/>
      </a>

      <a
        href="https://line.me/ti/p/yourid"
        target="_blank"
        rel="noopener noreferrer"
        // className={style.moom}
        className="bg-[#00C300] hover:scale-105 transition-transform p-3 rounded-full shadow-lg"
      >
        <SiLine className="text-white text-2xl" style={{color:"#fdebff"}}/>
      </a>

      <a
        href="mailto:example@example.com"
        // className={style.moom}
        className="bg-[#E53935] hover:scale-105 transition-transform p-3 rounded-full shadow-lg"
      >
        <MdEmail className="text-white text-2xl" style={{color:"#fdebff"}}/>
      </a>
    </div>
  )
}
