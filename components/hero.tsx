/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-08-19 16:16:09
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-08-19 16:55:51
 * @FilePath: /tailwind-landing-page-template/components/hero.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ModalVideo from '@/components/modal-video'
import VideoThumb from '@/public/images/hero-image.png'

export default function Hero() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              中科物栖
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Solaris</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                超出你的想象
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://www.taobao.com/" target='_blank'>去淘宝购买</a>
                </div>

              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail-展示vie标签"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}