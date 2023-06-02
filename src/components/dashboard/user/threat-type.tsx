import React from "react";
import { Card } from "../../card";
import { threatType } from "../../../mocks/dashboard";
import { Pie, G2 } from "@ant-design/plots";
const G = G2.getEngine("canvas");

export const ThreatType: React.FC = () => {
  const config: any = {
    appendPadding: 10,
    data: threatType,
    angleField: "value",
    colorField: "type",
    radius: 0.6,
    legend: false,
    innerRadius: 0.4,
    statistic: false,
    color: ["#165DFF", "#14C9C9", "#F7BA1E", "#C00001", "#3A484B", "#9FDB1D"],
    label: {
      type: "spider",
      labelHeight: 40,
      radius: 1,
      formatter: (data: any, mappingData: any) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: -10,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 8,
            text: `${data.type}`,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value}%`,
            fill: "rgba(0, 0, 0, 0.65)",
            fontWeight: 700,
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };

  return (
    <>
      <Card className="h-full">
        <header className="border-b border-l-0 border-r-0 border-t-0 border-dashed border-[#BFBFC7] px-10">
          <h3 className="my-5 text-xl font-medium text-[#1A1B4C]">
            ประเภทของภัยคุกคาม
          </h3>
        </header>
        <div className="p-4">
          <Pie {...config} />
        </div>
      </Card>
    </>
  );
};
