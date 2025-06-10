"use client";

import * as echarts from "echarts";

import React, { useEffect, useState } from "react";

import ProvinceDetail from "./province-detail";
import ReactECharts from "echarts-for-react";

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

export default function ChinaMap() {
  const [mapName, setMapName] = useState("china");
  const [geoJson, setGeoJson] = useState(null);
  const [provinceName, setProvinceName] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    loadMap(mapName);
  }, [mapName]);

  const loadMap = async (name: string) => {
    try {
      const res = await fetch(`/maps/${name}.json`);
      const json = await res.json();
      if (json?.type === "FeatureCollection") {
        echarts.registerMap(name, json);
        setGeoJson(json);
        setMapName(name);
      } else {
        console.error("非法 GeoJSON 文件", json);
      }
    } catch (e) {
      console.error("加载地图失败", e);
    }
  };

  const handleClick = (params: any) => {
    loadMap(params.name);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setProvinceName("");
  };

  const getColorByProvince = (provinceName: string) => {
    // 创建一个稳定的哈希值
    const hash = Array.from(provinceName).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1"]; // 三种颜色
    return colors[hash % colors.length];
  };

  const option = {
    title: {
      text: mapName === "china" ? "中国地图" : `${provinceName}地图`,
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: (p: any) => `${p.name}`,
    },
    geo: {
      map: mapName,
      roam: true,
      label: {
        show: true,
        color: "#333",
      },
      //itemStyle 可以用来定义每个地区的填充色（areaColor）、描边颜色（borderColor）等。
      itemStyle: {
        areaColor: HIGHLIGHTED_PROVINCES.includes(mapName)
          ? "#ffcccc"
          : getColorByProvince(mapName),
        borderColor: "#666",
      },
      //emphasis 包含的内容结构与 itemStyle 类似，可以设置高亮状态下元素的各种样式。
      emphasis: {
        label: { color: "red" },
        itemStyle: {
          areaColor: HIGHLIGHTED_PROVINCES.includes(mapName)
            ? "#ffcccc"
            : getColorByProvince(mapName),
        },
      },
    },
    series: [
      {
        type: "scatter",
        coordinateSystem: "geo",
        data: [
          {
            name: "红旗",
            value: [113.2644, 23.1291], // 示例：广州市中心
            symbol: "pin",
            symbolSize: 50,
            label: {
              show: true,
              formatter: "红旗",
            },
          },
        ],
      },
    ],
  };

  return geoJson ? (
    <ReactECharts
      option={option}
      style={{ height: "600px", width: "100%" }}
      onEvents={{ click: handleClick }}
    />
  ) : (
    <div>正在加载地图数据...</div>
  );
}
