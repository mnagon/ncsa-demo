import React from "react";
import { Link, LinkProps } from "react-router-dom";
import Icon from "@ant-design/icons";

import { ChevronLeft } from "./icons";

export type BackButtonProps = {
  to?: string;
};

export const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  return (
    <Link
      to={to || (-1 as LinkProps["to"])}
      className="mb-4 inline-block no-underline"
    >
      <Icon component={ChevronLeft} />
      <span className="ml-2 text-lg font-normal text-[#6C6D82]">Go back</span>
    </Link>
  );
};
