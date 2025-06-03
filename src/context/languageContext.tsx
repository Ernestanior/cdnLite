'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import en from '@/locale/en.json';
import zh from '@/locale/zh.json';

const translations:any = { en, zh };

type Lang = 'en' | 'zh';

const LanguageContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}>({
  lang: 'en',
  toggleLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('zh');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
