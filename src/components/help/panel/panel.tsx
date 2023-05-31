import React from "react";
import { Collapse, Typography } from "antd";
import type { CollapsePanelProps } from "antd";
import Icon from "@ant-design/icons";
import "./panel.style.css";

const ChevronDown: React.FC = () => (
  <svg
    width="15"
    height="8"
    viewBox="0 0 15 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.0303 8C6.74878 8 6.49853 7.90616 6.31085 7.71847L0.304985 1.71261C-0.101662 1.33724 -0.101662 0.680352 0.304985 0.304985C0.680352 -0.101662 1.33724 -0.101662 1.71261 0.304985L7.0303 5.5914L12.3167 0.304985C12.6921 -0.101662 13.349 -0.101662 13.7243 0.304985C14.131 0.680352 14.131 1.33724 13.7243 1.71261L7.71847 7.71847C7.53079 7.90616 7.28055 8 7.0303 8Z"
      fill="currentColor"
    />
  </svg>
);

export type HelpPanelProps = { content: string } & CollapsePanelProps;

export const HelpPanel: React.FC<HelpPanelProps> = (props) => {
  return (
    <Collapse.Panel
      className="help-panel"
      {...props}
      showArrow={false}
      extra={
        <Icon
          className="help-panel__icon relative -top-1 transition-all"
          component={ChevronDown}
        />
      }
    >
      <Typography.Paragraph className="text-[#515151]">
        {props.content}
      </Typography.Paragraph>
    </Collapse.Panel>
  );
};
