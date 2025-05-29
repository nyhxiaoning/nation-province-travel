/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-08-08 19:19:52
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-09-02 10:40:51
 * @FilePath: /tailwind-landing-page-template/app/(default)/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const metadata = {
  title: 'Solaris',
  description: '下一代智能AI应用',
}



export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Solaris</h1>
        <p className="text-lg text-white mb-8">Your AI-powered companion</p>
        </div>
    </>
  )
}
