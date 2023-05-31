import React from "react";
import { Router as RouterType } from "../types";

const Dashboard = React.lazy(() => import("../pages/admin/dashboard"));
const APIKey = React.lazy(() => import("../pages/admin/api-key"));
const Users = React.lazy(() => import("../pages/admin/users"));
const UsersCreate = React.lazy(() => import("../pages/admin/users/create"));
const UsersUpdate = React.lazy(() => import("../pages/admin/users/update"));
const Incidents = React.lazy(() => import("../pages/admin/incidents"));
const IncidentsCreate = React.lazy(
  () => import("../pages/admin/incidents/create")
);
const IncidentsUpdate = React.lazy(
  () => import("../pages/admin/incidents/update")
);
const Help = React.lazy(() => import("../pages/admin/help"));
const HelpFaqs = React.lazy(() => import("../pages/admin/help/faqs"));
const HelpHowto = React.lazy(() => import("../pages/admin/help/how-to"));
const Alerts = React.lazy(() => import("../pages/admin/alerts"));
const AlertsUpdate = React.lazy(() => import("../pages/admin/alerts/update"));

const adminRouters: RouterType[] = [
  {
    path: "admin/dashboard",
    element: <Dashboard />,
    title: "Admin Dashboard",
  },
  {
    path: "admin/api-key",
    element: <APIKey />,
    title: "Admin API Key",
  },
  {
    path: "admin/users",
    element: <Users />,
    title: "Admin Users",
  },
  {
    path: "admin/users/create",
    element: <UsersCreate />,
    title: "Admin Users Create",
  },
  {
    path: "admin/users/update/:id",
    element: <UsersUpdate />,
    title: "Admin Users Update",
  },
  {
    path: "admin/incidents",
    element: <Incidents />,
    title: "Admin Incidents",
  },
  {
    path: "admin/incidents/create",
    element: <IncidentsCreate />,
    title: "Admin Incidents Create",
  },
  {
    path: "admin/incidents/update/:id",
    element: <IncidentsUpdate />,
    title: "Admin Incidents Update",
  },
  {
    path: "admin/help",
    element: <Help />,
    title: "Admin Help",
  },
  {
    path: "admin/help/faqs",
    element: <HelpFaqs />,
    title: "Admin Help Faqs",
  },
  {
    path: "admin/help/how-to",
    element: <HelpHowto />,
    title: "Admin Help How to",
  },
  {
    path: "admin/alerts",
    element: <Alerts />,
    title: "Admin Alerts",
  },
  {
    path: "admin/alerts",
    element: <AlertsUpdate />,
    title: "Admin Alerts Update",
  },
];

export default adminRouters;
