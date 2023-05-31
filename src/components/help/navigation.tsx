import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationType } from "../../types";
import { getNavStyle } from "../../utils";

export const HelpNavigation: React.FC = () => {
  const { pathname } = useLocation();

  const helpNavigations = React.useMemo<NavigationType[]>(() => {
    return [
      {
        title: "FAQs",
        path: "/help/faqs",
        isActive: (path) => /^\/help\/faqs/.test(path) || path === "/",
      },
      {
        title: "How-to guides",
        path: "/help/how-to",
        isActive: (path) => /^\/help\/how-to/.test(path),
      },
      {
        title: "Contact Support",
        path: "/help/contact",
        isActive: (path) => /^\/help\/contact/.test(path),
      },
    ];
  }, []);

  return (
    <nav className="pb-5">
      <ul className="flex list-none flex-wrap items-baseline gap-2 p-0">
        {helpNavigations.map((nav) => (
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
