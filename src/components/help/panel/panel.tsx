import React from "react";
import { Collapse, Typography } from "antd";
import type { CollapsePanelProps } from "antd";
import Icon from "@ant-design/icons";
import { ChevronDown } from "../../icons";

import "./panel.style.css";

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
      <Typography.Paragraph className="whitespace-pre-wrap text-[#515151]">
        {props.content}
      </Typography.Paragraph>
    </Collapse.Panel>
  );
};
