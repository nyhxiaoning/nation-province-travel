/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-08-26 16:06:05
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-08-28 17:30:27
 * @FilePath: /tailwind-landing-page-template/components/ui/footer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import Logo from './logo'
import footLogo from '@/public/images/foot_logo.png'
import icpImg from '@/public/images/icp.png'
// import icpImg from '@/public/images/icp.png'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <Image className="md:max-w-none mx-auto rounded" src={footLogo} width={200} height="462" alt="Features bg" />
              </a>
            </li>
          </ul>
          <div className="text-sm text-gray-600 mr-4 ">
            <div className="container">
              <div className="foot-nav">
                <p>
                  Copyright ©2018-2024 中科物栖（南京）科技有限公司 - Jeejio.com 版权所有
                </p>
              </div>
              <div className="foot-nav">
                <div className="grid grid-cols-3 gap-4">
                  <div className="">
                    <a className='beian-link' href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011502011926" target="_blank" >
                    苏公网安备 32011502011926号</a>
                    </div>
                  <div className="...">
                    <a href="https://beian.miit.gov.cn" target="_blank" >苏公网安备 32011502011926号</a>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
