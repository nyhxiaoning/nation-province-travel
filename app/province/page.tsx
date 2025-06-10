import { FC } from "react";

/**
 * Types
 */
// type ProvinceDetailProps = {
//   provinceName: string;
//   visible: boolean;
//   onClose: () => void;
// };

/**
 * Constants
 */
const ProvinceDetail: FC<any> = ({
  provinceName = "xxx",
  visible = true,
  onClose,
}) => {
  if (!visible) return null;

  /**
   * State
   */

  /**
   * Functions
   */

  const handleClose = () => {
    visible.value = false;
  };

  /**
   * JSXComponents
   */
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 md:p-0">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        {/* 头部 */}
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">{provinceName}详情</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="关闭"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 内容区域 */}
        <div className="p-4 space-y-6">
          {/* 省份概况 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">省份概况</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                这里是{provinceName}的基本信息介绍...
              </p>
            </div>
          </section>

          {/* 旅游景点 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">热门景点</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">景点 {item}</h4>
                  <p className="text-gray-600 text-sm">景点简介描述...</p>
                </div>
              ))}
            </div>
          </section>

          {/* 特色美食 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">特色美食</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">美食 {item}</h4>
                  <p className="text-gray-600 text-sm">美食介绍...</p>
                </div>
              ))}
            </div>
          </section>

          {/* 交通信息 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">交通信息</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">飞机</h4>
                <p className="text-gray-600 text-sm">主要机场信息...</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">火车</h4>
                <p className="text-gray-600 text-sm">主要火车站信息...</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">公共交通</h4>
                <p className="text-gray-600 text-sm">市内公共交通信息...</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProvinceDetail;
