import React from "react";
import { Space } from "antd";
import { Logo } from "../../logo";
import { UserMenu } from "./user-menu";
import { Notificatoin } from "./notification";

export const AppBar: React.FC = () => {
  return (
    <header className="flex h-20 items-center bg-white shadow">
      <div className="container flex justify-between">
        <Logo width={76.5} />
        <Space size={36}>
          <Notificatoin />
          <UserMenu />
        </Space>
      </div>
    </header>
  );
};
