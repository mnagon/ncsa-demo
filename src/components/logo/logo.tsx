import React from "react";
import { Link } from "react-router-dom";

import LOGO_IMAGE from "../../assets/images/logo.svg";

export type LogoProps = {
  width?: number;
  className?: string;
  disabled?: boolean;
};

export const Logo: React.FC<LogoProps> = (props) => {
  const { width, className, disabled } = props;

  return (
    <Link
      to="/"
      className={`relative block ${className} ${
        disabled ? "pointer-events-none" : ""
      }`}
      style={{ width: `${width}px` }}
    >
      <img
        src={LOGO_IMAGE}
        className="h-full w-full object-contain"
        alt="logo"
        title="NCSA CTI Logo"
      />
    </Link>
  );
};

Logo.defaultProps = {
  width: 153,
  className: "",
  disabled: false,
};
