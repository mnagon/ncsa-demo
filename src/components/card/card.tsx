import React from "react";

export type CardProps = {
  className?: string;
};

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`rounded-lg border border-solid border-[#E7E7EF] bg-white shadow ${className}`}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  className: "",
};
