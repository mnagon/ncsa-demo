import React from "react";
import { Router as RouterType } from "../types";

const Dashboard = React.lazy(() => import("../pages/user/dashboard"));
const Search = React.lazy(() => import("../pages/user/search"));
const News = React.lazy(() => import("../pages/user/news"));
const Incidents = React.lazy(() => import("../pages/user/incidents"));
const IncidentsCreate = React.lazy(
  () => import("../pages/user/incidents/create")
);
const IncidentsUpdate = React.lazy(
  () => import("../pages/user/incidents/update")
);
const OpenAPI = React.lazy(() => import("../pages/user/open-api"));
const About = React.lazy(() => import("../pages/user/about"));
const HelpFaqs = React.lazy(() => import("../pages/user/help/faqs"));
const HelpContact = React.lazy(() => import("../pages/user/help/contact"));
const HelpHowto = React.lazy(() => import("../pages/user/help/how-to"));
const Account = React.lazy(() => import("../pages/user/account"));
const APIKey = React.lazy(() => import("../pages/user/api-key"));
const IOC = React.lazy(() => import("../pages/user/ioc"));

const userRouters: RouterType[] = [
  {
    path: "dashboard",
    element: <Dashboard />,
    title: "User Dashboard",
  },
  {
    path: "search",
    element: <Search />,
    title: "User Search",
  },
  {
    path: "news",
    element: <News />,
    title: "User News",
  },
  {
    path: "incidents",
    element: <Incidents />,
    title: "User Incidents",
  },
  {
    path: "incidents/create",
    element: <IncidentsCreate />,
    title: "User Incidents Create",
  },
  {
    path: "incidents/update/:id",
    element: <IncidentsUpdate />,
    title: "User Incidents Update",
  },
  {
    path: "open-api",
    element: <OpenAPI />,
    title: "User Open API",
  },
  {
    path: "about",
    element: <About />,
    title: "User About",
  },
  {
    path: "help/faqs",
    element: <HelpFaqs />,
    title: "User Help",
  },
  {
    path: "help/how-to",
    element: <HelpHowto />,
    title: "User Help",
  },
  {
    path: "help/contact",
    element: <HelpContact />,
    title: "User Help",
  },
  {
    path: "account",
    element: <Account />,
    title: "User Account",
  },
  {
    path: "api-key",
    element: <APIKey />,
    title: "User API Key",
  },
  {
    path: "ioc/:id",
    element: <IOC />,
    title: "User IOC",
  },
];

export default userRouters;
