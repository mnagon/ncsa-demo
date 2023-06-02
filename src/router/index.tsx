import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Skeleton } from "antd";

import { Router as RouterType } from "../types";
import authRouters from "./auth";
import userRouters from "./user";
import adminRouters from "./admin";

const Default = React.lazy(() => import("../pages/user/dashboard"));
const Error404 = React.lazy(() => import("../pages/error-404"));
const Error500 = React.lazy(() => import("../pages/error-500"));

const Router = () => {
  const location = useLocation();

  const routers: RouterType[] = [
    {
      path: "",
      element: <Default />,
      title: "User Dashboard",
    },
    ...authRouters,
    ...userRouters,
    ...adminRouters,
    {
      path: "error",
      element: <Error500 />,
      title: "Server Error 500",
    },
    {
      path: "*",
      element: <Error404 />,
      title: "404 Not Found",
    },
  ];

  const transitionProps = {
    initial: {
      opacity: 0,
    },
    animate: { opacity: 1 },
    transition: {
      duration: 0.3,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  const pageRoutes = routers.map(({ path, title, element }: RouterType) => {
    return (
      <Route
        key={title + path}
        path={`/${path}`}
        element={
          <motion.div {...transitionProps}>
            <React.Suspense fallback={<Skeleton active />}>
              {element}
            </React.Suspense>
          </motion.div>
        }
      />
    );
  });

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {pageRoutes}
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
