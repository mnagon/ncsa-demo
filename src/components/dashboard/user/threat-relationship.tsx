import React from "react";
import { Area } from "@ant-design/plots";
import { Card } from "../../card";
import { threatRelationship } from "../../../mocks/dashboard";
import type { AreaConfig } from "@ant-design/charts";

export const ThreatRelationship: React.FC = () => {
  const config: AreaConfig = {
    data: threatRelationship,
    xField: "day",
    yField: "score",
    seriesField: "name",
    isStack: false,
    color: ["#14C9C9", "#165DFF"],
    legend: false,
    areaStyle: (data: any) => {
      if (data.name === "PDKM") {
        return { fill: "l(270) 0.3:#FFFFFF 1:#14C9C9" };
      } else {
        return { fill: "l(270) 0.3:#FFFFFF 1:#165DFF" };
      }
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
