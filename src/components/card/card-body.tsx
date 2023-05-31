import React from "react";

export type CardBodyProps = {
  className?: string;
};

export const CardBody: React.FC<React.PropsWithChildren<CardBodyProps>> = ({
  children,
  className,
}) => {
  return <div className={`px-10 py-8 ${className}`}>{children}</div>;
};

CardBody.defaultProps = {
  className: "",
};
