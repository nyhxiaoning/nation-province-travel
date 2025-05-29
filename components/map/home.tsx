"use client";

import * as echarts from "echarts";

// ChinaMap.tsx
import React, { useEffect, useState } from "react";

import ReactECharts from "echarts-for-react";

// 全国 https://geo.datav.aliyun.com/areas/bound/100000_full.json        # 全国地图
// 广东 https://geo.datav.aliyun.com/areas/bound/440000_full.json        # 广东
// 北京 https://geo.datav.aliyun.com/areas/bound/110000_full.json        # 北京

export default function ChinaMap() {
  const [mapName, setMapName] = useState("china");
  const [geoJson, setGeoJson] = useState(null);
  const [provinceName, setProvinceName] = useState("");

  useEffect(() => {
    loadMap(mapName);
  }, [mapName]);

  const loadMap = async (name: string) => {
    const res = await fetch(`/maps/${name}.json`);
    const json = await res.json();
    console.log("[ json ] >", json);
    echarts.registerMap(name, json);
    setGeoJson(json);
  };

  const handleClick = (params: any) => {
    const name = params.name;
    setProvinceName(name);
    // 点击切换为省份地图
    setMapName(name);
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

  return (
    <ReactECharts
      option={option}
      style={{ height: "600px" }}
      onEvents={{
        click: handleClick,
      }}
    />
  );
}
