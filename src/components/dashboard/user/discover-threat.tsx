import React from "react";
import { Column } from "@ant-design/charts";
import { Card } from "../../card";
import { discoverThreat } from "../../../mocks/dashboard";

export const DiscoverThreat: React.FC = () => {
  const config: any = {
    data: discoverThreat,
    color: ["#C00001", "#F7BA1E", "#3A484B", "#165DFF"],
    isStack: true,
    xField: "text",
    yField: "value",
    seriesField: "type",
    appendPadding: [20, 0],
    legend: {
      position: "top",
    },
    connectedArea: {
      style: (oldStyle: any) => {
        return {
          fill: "rgba(0,0,0,0.25)",
          stroke: oldStyle.fill,
          lineWidth: 0.5,
        };
      },
    },
  };

  return (
    <>
      <Card className="h-full">
        <header className="border-b border-l-0 border-r-0 border-t-0 border-dashed border-[#BFBFC7] px-10">
          <h3 className="my-5 text-xl font-medium text-[#1A1B4C]">
            ภาพรวมสถิติข้อมูลภัยคุกคามที่ค้นพบ
          </h3>
        </header>
        <div className="p-10 pt-8">
          <Column {...config} />
        </div>
      </Card>
    </>
  );
};
