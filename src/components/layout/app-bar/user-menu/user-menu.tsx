import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Space, Avatar, Dropdown, Tooltip } from "antd";
import type { MenuProps } from "antd";
import { Setting, API, Logout } from "./icons";
import Icon, { UserOutlined } from "@ant-design/icons";
import { useAuth } from "../../../../contexts/useAuth";

export const UserMenu: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { logout, user } = useAuth();

  const items = React.useMemo<MenuProps["items"]>(() => {
    return [
      {
        label: (
          <span className="block py-1.5 font-normal">Account management</span>
        ),
        key: "account",
        icon: <Icon component={Setting} />,
        onClick: () => {
          navigate("/account");
        },
        disabled: /^\/account/.test(pathname),
      },
      {
        label: (
          <span className="block py-1.5 font-normal">
            API Key creation and management
          </span>
        ),
        key: "api",
        icon: <Icon component={API} />,
        onClick: () => {
          navigate("/api-key");
        },
        disabled: /^\/api-key/.test(pathname),
      },
      {
        label: <span className="block py-1.5 font-normal">Log out</span>,
        key: "logout",
        icon: <Icon component={Logout} />,
        onClick: () => {
          logout();
        },
      },
    ];
  }, [logout, navigate, pathname]);

  if (!user) {
    return null;
  }

  return (
    <Space align="center" size={10}>
      <div className="relative -top-1.5  h-8  text-right">
        <span className="block max-w-[144px] truncate font-semibold">
          John Doe
        </span>
        <span className="block text-sm text-primary">
          {(user && user.role) || "unknow role"}
        </span>
      </div>
      <Tooltip title="Menu" placement="bottom" mouseEnterDelay={0.8}>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Avatar
            shape="square"
            className="cursor-pointer"
            size="large"
            icon={<UserOutlined />}
          />
        </Dropdown>
      </Tooltip>
    </Space>
  );
};
