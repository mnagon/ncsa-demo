import React from "react";
import { Dropdown, Tooltip } from "antd";
import type { MenuProps } from "antd";
import Icon from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Dashboard,
  UserGroup,
  API,
  Incident,
  Alert,
  Support,
} from "./icons";
import { useAuth } from "../../../contexts/useAuth";
import { NavigationType } from "../../../types";
import { getNavStyle } from "../../../utils";

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();

  const isAdminPath = React.useMemo(() => {
    return /^\/admin/.test(pathname);
  }, [pathname]);

  const userNavigations = React.useMemo<NavigationType[]>(() => {
    return [
      {
        title: "Home",
        path: "/dashboard",
        isActive: (path) => /^\/dashboard/.test(path) || path === "/",
      },
      {
        title: "Search",
        path: "/search",
        isActive: (path) => /^\/search/.test(path),
      },
      {
        title: "News",
        path: "/news",
        isActive: (path) => /^\/news/.test(path),
      },
      {
        title: "Submit Incident Case",
        path: "/incidents",
        isActive: (path) => /^\/incidents/.test(path),
      },
      {
        title: "OpenAPI",
        path: "/open-api",
        isActive: (path) => /^\/open-api/.test(path),
      },
      {
        title: "About",
        path: "/about",
        isActive: (path) => /^\/about/.test(path),
      },
      {
        title: "Help and Support",
        path: "/help/faqs",
        isActive: (path) => /^\/help/.test(path),
      },
    ];
  }, []);

  const adminNavigations = React.useMemo<MenuProps["items"]>(() => {
    return [
      {
        label: (
          <Link to="/admin/dashboard" className="block py-1 font-normal">
            Admin Dashboard
          </Link>
        ),
        key: "dashboard",
        icon: <Icon component={Dashboard} />,
        disabled: /^\/admin\/dashboard/.test(pathname),
      },
      {
        label: (
          <Link to="/admin/users" className="block py-1 font-normal">
            User Management
          </Link>
        ),
        key: "users",
        icon: <Icon component={UserGroup} />,
        disabled: /^\/admin\/users/.test(pathname),
      },
      {
        label: (
          <Link to="/admin/api-key" className="block py-1 font-normal">
            API Key Management
          </Link>
        ),
        key: "api-key",
        icon: <Icon component={API} />,
        disabled: /^\/admin\/api-key/.test(pathname),
      },
      {
        label: (
          <Link to="/admin/incidents" className="block py-1 font-normal">
            Incident Management
          </Link>
        ),
        key: "incidents",
        icon: <Icon component={Incident} />,
        disabled: /^\/admin\/incidents/.test(pathname),
      },
      {
        label: (
          <Link to="/admin/alerts" className="block py-1 font-normal">
            Alert Management
          </Link>
        ),
        key: "alerts",
        icon: <Icon component={Alert} />,
        disabled: /^\/admin\/alerts/.test(pathname),
      },
      {
        label: (
          <Link to="/admin/help" className="block py-1 font-normal">
            Help and Support
          </Link>
        ),
        key: "help",
        icon: <Icon component={Support} />,
        disabled: /^\/admin\/help/.test(pathname),
      },
    ];
  }, [pathname]);

  return (
    <nav className="pb-8 pt-6">
      <ul className="flex list-none flex-wrap items-baseline gap-2 p-0">
        {user && user.role === "admin" && (
          <li>
            <Dropdown menu={{ items: adminNavigations }} trigger={["click"]}>
              <Tooltip
                title="Admin Navigations"
                placement="top"
                mouseEnterDelay={0.8}
              >
                <div className={getNavStyle(isAdminPath)}>
                  Admin
                  <Icon
                    component={ChevronDown}
                    className="relative -top-1 ml-2"
                  />
                </div>
              </Tooltip>
            </Dropdown>
          </li>
        )}
        {userNavigations.map((nav) => (
          <li key={nav.title}>
            <Link to={nav.path} className={getNavStyle(nav.isActive(pathname))}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
