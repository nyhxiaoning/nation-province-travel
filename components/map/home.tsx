"use client";

import * as echarts from "echarts";

import React, { useEffect, useState } from "react";

import ProvinceDetail from "./province-detail";
import ReactECharts from "echarts-for-react";

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
        setGeoJson(json); // 只在注册成功后更新状态
        setMapName(name); // 确保 geo.map 用的是已注册的 name
      } else {
        console.error("非法 GeoJSON 文件", json);
      }
      console.log("json", json);
    } catch (e) {
      console.error("加载地图失败", e);
    }
  };

  const handleClick = (params: any) => {
    // 点击切换为详情视图
    loadMap(params.name);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setProvinceName("");
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
      itemStyle: {
        areaColor: "#f3f3f3",
        borderColor: "#666",
      },
      emphasis: {
        label: { color: "red" },
        itemStyle: { areaColor: "#ffcccc" },
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
    // 注意：width和高度，必须给，否则地图无法显示
    <ReactECharts
      option={option}
      style={{ height: "600px", width: "100%" }}
      onEvents={{ click: handleClick }}
    />
  ) : (
    <div>正在加载地图数据...</div>
  );
}
