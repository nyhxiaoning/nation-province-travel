/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-08-08 19:19:52
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-08-28 17:32:24
 * @FilePath: /tailwind-landing-page-template/components/features-blocks.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesBg1 from '@/public/images/service/1.png'
import FeaturesBg2 from '@/public/images/service/1.png'
import FeaturesElement from '@/public/images/features-element.png'
import Image from 'next/image'
export default function FeaturesSeven() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">服务内容</h2>
            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
         
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="md:max-w-none mx-auto rounded  scale-90 hover:scale-110" src={FeaturesBg1} width={500} height="350" alt="Features bg" />

            </div>
            {/* 1st item */}


            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="md:max-w-none mx-auto rounded  scale-90 hover:scale-110" src={FeaturesBg1} width={500} height="350" alt="Features bg" />
            </div>

            {/* 3rd item */}
  



          </div>

        </div>
      </div>
    </section>
  )
}