import React from "react";
import { Button, Popover, List, Badge, Tooltip } from "antd";
import Icon from "@ant-design/icons";
import { Bell } from "./icons";
import "./notification.style.css";

export const Notificatoin: React.FC = () => {
  const count = 5;

  const data = [
    {
      title: "The incident you submitted has been approved",
    },
    {
      title: "The incident you submitted has been approved",
    },
    {
      title: "The incident you submitted has been approved",
    },
  ];

  const title = (
    <header className="flex items-center justify-between">
      <h3 className="m-0 font-medium text-primary">Notifications</h3>
      <span className="rounded-full bg-[#4246E9] px-2 text-sm  text-white">
        {count} new
      </span>
    </header>
  );

  const content = (
    <div className="custom-scrollbar h-64 overflow-y-auto">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<span className="font-normal">{item.title}</span>}
              description={<span className="text-sm"> 12 min ago</span>}
            />
          </List.Item>
        )}
      />
    </div>
  );
  return (
    <Popover
      placement="bottomRight"
      trigger="click"
      overlayStyle={{
        width: 288,
      }}
      title={title}
      content={content}
    >
      <Tooltip title="Notification" placement="bottom" mouseEnterDelay={0.8}>
        <Badge
          count={
            count && <span className="h-2.5 w-2.5 rounded-full bg-[#C00001]" />
          }
          offset={[-10, 10]}
        >
          <Button
            shape="circle"
            className="border-0 shadow-none"
            icon={<Icon component={Bell} />}
          />
        </Badge>
      </Tooltip>
    </Popover>
  );
};
