import FeaturesBg from '@/public/images/features-bg.png'
/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-08-08 19:19:52
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-08-21 18:13:32
 * @FilePath: /tailwind-landing-page-template/components/testimonials.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'
import TestimonialImage1 from '@/public/images/mainkey/1.png'
import TestimonialImage2 from '@/public/images/mainkey/2.png'
import TestimonialImage3 from '@/public/images/mainkey/3.png'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">主按键介绍</h2>
 
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {/* <div className="relative inline-flex flex-col">
              <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />

              <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
            </div> */}
            {/* 1st item */}
            <div className="relative flex flex-col items-center  p-6 bg-white rounded shadow-xl">
              <Image className="md:max-w-none mx-auto rounded  scale-90 hover:scale-110" src={TestimonialImage1} width={200} height="462" alt="Features bg" />
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center col-span-2 p-6 bg-white rounded shadow-xl">
              <Image className="md:max-w-none mx-auto rounded  scale-90 hover:scale-125" src={TestimonialImage2} width={300} height="462" alt="Features bg" />

            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="md:max-w-none mx-auto rounded  scale-90 hover:scale-110" src={TestimonialImage3} width={200} height="462" alt="Features bg" />

            </div>

   

          </div>


        </div>
      </div>
    </section>
  )
}