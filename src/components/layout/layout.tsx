import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { AppBar } from "./app-bar/app-bar";
import { Navigation } from "./navigation";
import { HelpLayout } from "../help";

type LayoutType = "auth" | "main" | "help";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();

  const layoutType = useMemo<LayoutType>(() => {
    switch (true) {
      case /^\/auth/.test(pathname):
        return "auth";
      case /^\/help/.test(pathname):
        return "help";
      default:
        return "main";
    }
  }, [pathname]);

  if (layoutType === "auth") {
    return <>{children}</>;
  }

  let content = children;

  if (layoutType === "help") {
    content = <HelpLayout>{children}</HelpLayout>;
  }

  return (
    <>
      <AppBar />
      <main className="container pb-32">
        <Navigation />
        {content}
      </main>
    </>
  );
};
