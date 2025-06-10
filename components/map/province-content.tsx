import React, { useState } from "react";

import ProvinceDetailTsx from "./province-detail";

// 定义需要特殊标记的省份列表
const HIGHLIGHTED_PROVINCES = [
  "海南省",
  "四川省",
  "云南省",
  "上海市",
  "福建省",
  "新疆维吾尔自治区",
  "内蒙古自治区",
];

// 模拟的详情数据
interface ProvinceDetail {
  name: string;
  description: string;
  travelTips: string;
}

const provinceDetails: ProvinceDetail[] = [
  {
    name: "海南省",
    description: "美丽的海岛，拥有迷人的热带风光。",
    travelTips: "最佳旅游季节是冬季，适合潜水和海滩度假。",
  },
  {
    name: "四川省",
    description: "以其丰富的自然景观和美食闻名。",
    travelTips: "推荐去九寨沟、峨眉山、成都吃火锅。",
  },
  {
    name: "云南省",
    description: "多民族文化的聚集地，风景如画。",
    travelTips: "大理、丽江、香格里拉都是不可错过的景点。",
  },
  {
    name: "上海市",
    description: "现代化的大都市，经济中心。",
    travelTips: "外滩夜景、迪士尼乐园、城隍庙值得一游。",
  },
  {
    name: "福建省",
    description: "历史文化悠久，有众多名胜古迹。",
    travelTips: "鼓浪屿、武夷山、厦门小吃非常有特色。",
  },
  {
    name: "新疆维吾尔自治区",
    description: "地域辽阔，文化多样。",
    travelTips: "夏季可前往喀纳斯湖、吐鲁番葡萄沟。",
  },
  {
    name: "内蒙古自治区",
    description: "广袤的草原和独特的民族文化。",
    travelTips: "夏季草原最美，可以参加那达慕大会。",
  },
];

export default function PlacesToGo({ loadMap, province }) {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [expandedTips, setExpandedTips] = useState<string | null>(null);
  const [showMapModal, setShowMapModal] = useState<boolean>(false);
  const [modalProvince, setModalProvince] = useState<string>("");

  const handleProvinceClick = (provinceName: string) => {
    setSelectedProvince(provinceName);
  };

  const toggleTips = (provinceName: string) => {
    if (expandedTips === provinceName) {
      setExpandedTips(null);
    } else {
      setExpandedTips(provinceName);
    }
  };

  const openMapModal = (province: any) => {
    console.log("[ province ] >", province);
    setShowMapModal(true);
    setModalProvince(province);
  };

  const closeMapModal = () => {
    setShowMapModal(false);
    setModalProvince("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">我想去的地方</h1>

        <ul className="space-y-4">
          {HIGHLIGHTED_PROVINCES.map((province, index) => {
            const detail = ProvinceDetailTsx;
            return (
              <li
                key={index}
                className={`flex flex-col border ${
                  selectedProvince === province
                    ? "bg-blue-100 border-blue-300"
                    : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                } rounded-md p-4 transition-all duration-200`}
              >
                <div className="flex justify-between items-center">
                  <span
                    onClick={() => handleProvinceClick(province)}
                    className="cursor-pointer font-medium"
                  >
                    {province}
                  </span>
                  <div className="flex space-x-2">
                    {/* 查看按钮 */}
                    <button
                      onClick={() => openMapModal(province)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                    >
                      查看详情
                    </button>

                    {/* 旅行介绍按钮 */}
                    <button
                      onClick={() => loadMap(province)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded text-sm"
                    >
                      跳到该地区
                    </button>
                  </div>
                </div>

                {/* 旅行介绍内容（可选展开） */}
                {expandedTips === province && (
                  <div className="mt-3 pt-3 border-t border-gray-300 text-gray-700">
                    {detail}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* 当前选择的省份详情展示（可选） */}
        {selectedProvince && (
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded">
            <h2 className="text-xl font-semibold">{selectedProvince}</h2>
            <p className="mt-2">
              {
                provinceDetails.find(
                  (detail) => detail.name === selectedProvince
                )?.description
              }
            </p>
          </div>
        )}

        {/* 地图弹窗 */}
        {showMapModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
              <button
                onClick={closeMapModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
              <ProvinceDetailTsx
                provinceName={modalProvince || ""}
                visible={showMapModal}
                onClose={closeMapModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
