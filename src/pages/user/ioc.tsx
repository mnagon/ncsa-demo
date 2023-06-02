import React from "react";
import { Col, Row, Space, Typography } from "antd";
import Icon from "@ant-design/icons";
import { Copy } from "../../components/icons";
import { requireAuth } from "../../utils";
import { BackButton } from "../../components/back-button";
import { Title } from "../../components/title";
import { Card } from "../../components/card";
import { Code, Score, Label } from "../../components/ioc";
import { Radar } from "@ant-design/plots";
import type { RadarConfig } from "@ant-design/plots";

const UserIOC: React.FC = () => {
  const scoreList = [
    "Government score: 8.0",
    "Telecom score: 3.0",
    "National security agency score: 9.0",
    "Healthcare: 3.0",
    "Financial score: 6.0",
    "Transportation score: 4.0",
    "Others enterprise score: 5.0",
  ];

  const labelList = [
    "dumplsass",
    "log4j",
    "mercury",
    "mimikatz",
    "powershell",
    "remoteexec",
  ];

  const distribution = [
    {
      name: "Government",
      score: 0,
    },
    {
      name: "Healthcare",
      score: 5,
    },
    {
      name: "Financial",
      score: 2,
    },
    {
      name: "Others",
      score: 3,
    },
    {
      name: "Transportation",
      score: 2,
    },
    {
      name: "National Security Agency",
      score: 1,
    },
    {
      name: "Telecom",
      score: 4,
    },
  ];

  const config: RadarConfig = {
    data: distribution,
    xField: "name",
    yField: "score",
    // seriesField: "user",
    meta: {
      score: {
        alias: "araiwa",
        min: 0,
        max: 5,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: "line",
          style: {
            lineDash: null,
          },
        },
      },
    },
    lineStyle: {
      stroke: "#DA0001",
      fill: "rgba(192, 0, 1, .2)",
    },
    point: {
      size: 4,
      style: {
        stroke: "#ffffff",
        fill: "#DA0001",
      },
    },
  };
  return (
    <>
      <div>
        <BackButton to="/search" />
      </div>
      <Title>45.56.162.111</Title>
      <Row gutter={[20, 20]}>
        <Col xs={24} lg={12} className="flex flex-col">
          <Subtitle>Details</Subtitle>
          <Card className="flex-1 px-7 py-8">
            <Space direction="vertical" className="w-full" size={32}>
              <div>
                <Headline>Indicator pattern</Headline>
                <Code block>[ipv4-addr:value = ‘45.56.162.111’]</Code>
              </div>
              <div>
                <Headline>Valid from</Headline>
                <Code>APRIL 10, 2023 AT 9:56:45 PM</Code>
              </div>
              <div>
                <Headline>Valid until</Headline>
                <Code>MAY 10, 2023 AT 9:56:45 PM</Code>
              </div>
              <div>
                <Headline>Score</Headline>
                <div className="flex flex-wrap gap-2.5">
                  {scoreList.map((score) => (
                    <Score key={score}>{score}</Score>
                  ))}
                </div>
              </div>
              <div>
                <Headline>Description</Headline>
                <Typography.Paragraph>
                  This indicator represents a malware sample with the SHA-256
                  hash value
                  f38e3d3e935c83b16e6638f02b3577f4efea68e4c3d5dc5c5f5b5f15b06ebe68
                </Typography.Paragraph>
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Subtitle>Basic information</Subtitle>
          <Card className="px-7 py-8">
            <Space direction="vertical" className="w-full" size={32}>
              <div>
                <Headline>Name</Headline>
                <span className="rounded bg-[#F0F0F0] px-4 py-2 font-pt text-sm">
                  Malware Sample Hash
                </span>
              </div>
              <div>
                <Headline>Distribution of scores</Headline>
                <div className="py-4">
                  <Radar {...config} />
                </div>
              </div>
              <Row gutter={[24, 24]}>
                <Col xs={12}>
                  <Headline>Creation date</Headline>
                  <Typography.Text>
                    April 10, 2023 at 10:12:45 PM
                  </Typography.Text>
                </Col>
                <Col xs={12}>
                  <Headline>Modification date</Headline>
                  <Typography.Text>
                    April 10, 2023 at 10:12:55 PM
                  </Typography.Text>
                </Col>
                <Col xs={12}>
                  <Headline>Pattern type</Headline>
                  <span className="inline-block w-[112px] rounded border border-solid border-[#4246E9] bg-[#EEF3FF] py-1.5 text-center font-pt text-sm text-[#4246E9]">
                    stix
                  </span>
                </Col>
                <Col xs={12}>
                  <Headline>Spec version</Headline>
                  <span className="inline-block w-[64px] rounded border border-solid border-[#C5C5C5] py-1 text-center font-pt text-sm">
                    2.1
                  </span>
                </Col>
              </Row>
              <div>
                <Headline>Standard STIX ID</Headline>
                <Typography.Text
                  className="bg-[#F0F0F0] px-4 py-1.5"
                  copyable={{
                    icon: [
                      <Icon
                        component={Copy}
                        className="ml-2"
                        key="copy-icon"
                      />,
                      <Icon
                        className="ml-2 opacity-30"
                        component={Copy}
                        key="copied-icon"
                      />,
                    ],
                    tooltips: ["copy", "copied!"],
                  }}
                >
                  indicator--78c4b133-54e2-8d84-9c5d71319bdc
                </Typography.Text>
              </div>
              <div>
                <Headline>Labels</Headline>
                <div className="flex flex-wrap gap-2.5">
                  {labelList.map((label) => (
                    <Label key={label}>{label}</Label>
                  ))}
                </div>
              </div>
              <div>
                <Headline>Confidence</Headline>
                <span className="inline-block w-[80px] bg-[#FFECA9] py-1.5 text-center font-pt text-[#836600]">
                  10
                </span>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default requireAuth(UserIOC);

/**
 * Sub-components
 */

const Subtitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h2 className="mb-2.5 mt-0 text-lg font-medium text-primary">{children}</h2>
);
const Headline: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className="mb-2 mt-0 text-base font-medium">{children}</h3>
);
