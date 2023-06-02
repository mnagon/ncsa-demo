import React from "react";
import { Area } from "@ant-design/plots";
import { Card } from "../../card";
import type { AreaConfig } from "@ant-design/charts";

export const ThreatRelationshipArea: React.FC = () => {
  const config: AreaConfig = {
    data: [
      {
        name: "PDKM",
        day: 0,
        score: 10,
        color: "#1890ff",
      },
      {
        name: "DP",
        day: 0,
        score: 12,
        color: "#c00001",
      },
      {
        name: "PDKM",
        day: 1,
        score: 10,
        color: "#1890ff",
      },
      {
        name: "DP",
        day: 1,
        score: 12,
        color: "#c00001",
      },
      {
        name: "PDKM",
        day: 2,
        score: 7,
        color: "#1890ff",
      },
      {
        name: "DP",
        day: 2,
        score: 20,
        color: "#c00001",
      },
      {
        name: "PDKM",
        day: 3,
        score: 13,
        color: "#1890ff",
      },
      {
        name: "DP",
        day: 3,
        score: 12,
        color: "#c00001",
      },
      {
        name: "PDKM",
        color: "#1890ff",

        day: 4,
        score: 6,
      },
      {
        name: "DP",
        day: 4,
        score: 8,
        color: "#c00001",
      },
    ],
    xField: "day",
    yField: "score",
    seriesField: "name",
    isStack: false,
    color: ["#1890ff", "#c00001"],

    areaStyle: (event: any) => {
      console.log("event.corlor", event);
      return {
        fill: `l(270) 0:#ffffff  1:${event.color}`,
      };
    },
  };

  return (
    <>
      <Card className="h-full">
        <header className="border-b border-l-0 border-r-0 border-t-0 border-dashed border-[#BFBFC7] px-10">
          <h3 className="my-5 text-xl font-medium text-[#1A1B4C]">
            ความสัมพันธ์ภัยคุกคาม
          </h3>
        </header>
        <div className="p-10 pt-8">
          <Area {...config} />
        </div>
      </Card>
    </>
  );
};
