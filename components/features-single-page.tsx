/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-08-08 19:19:52
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-09-02 10:44:01
 * @FilePath: /tailwind-landing-page-template/components/features-blocks.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesBg1 from '@/public/images/appearance/1.jpg'
import FeaturesBg2 from '@/public/images/appearance/2.jpg'
import FeaturesBg3 from '@/public/images/appearance/3.jpg'
import FeaturesBg4 from '@/public/images/appearance/4.jpg'
import FeaturesElement from '@/public/images/features-element.png'
import Image from 'next/image'

export default function FeatureSinglePage() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative">
        {/* <div className="py-12 md:py-20"> */}

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">上下布局的横跨页面</h2>
            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Items */}
          <div className="w-full flex flex-col items-center">

            {/* 1st item */}
            <div className="relative w-full flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-full h-auto mx-auto rounded scale-110" src={FeaturesBg4} alt="Features bg" />
            </div>
        </div>
        <div className="w-full flex flex-auto items-center">

          {/* 1st item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="md:max-w-none mx-auto rounded scale-90" src={FeaturesBg4} width={300} height="462" alt="Features bg" />
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="md:max-w-none mx-auto rounded scale-90" src={FeaturesBg2} width={300} height="462" alt="Features bg" />
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="md:max-w-none mx-auto rounded scale-90" src={FeaturesBg3} width={300} height="462" alt="Features bg" />
          </div>

          {/* 4th item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="md:max-w-none mx-auto rounded scale-90 " src={FeaturesBg4} width={300} height="462" alt="Features bg" />
          </div>

          {/* 5th item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="md:max-w-none mx-auto rounded scale-90" src={FeaturesBg4} width={300} height="462" alt="Features bg" />
          </div>

          {/* 6th item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="md:max-w-none mx-auto rounded scale-90" src={FeaturesBg4} width={300} height="462" alt="Features bg" />
          </div>

        </div>

      </div>
    </section>
  )
}