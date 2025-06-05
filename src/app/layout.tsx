'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { LanguageProvider } from '@/context/languageContext';
import { ConfigProvider } from "antd";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#ff6a00', // 改成你想要的主题色
            },
          }}
        >
          <AntdRegistry><LanguageProvider>{children}</LanguageProvider></AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
