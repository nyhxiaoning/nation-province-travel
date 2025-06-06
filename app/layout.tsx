/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-08-08 19:19:52
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-08-22 10:01:23
 * @FilePath: /tailwind-landing-page-template/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './css/style.css'

import Banner from '@/components/banner'
import Header from '@/components/ui/header'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight scroll-smooth focus:scroll-auto`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {/* <Header /> */}
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
