import React from "react";

export type TitleProps = {
  className?: string;
};

export const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({
  className,
  children,
}) => {
  return (
    <h1
      className={`mb-3 mt-0 text-3xl font-semibold text-primary ${className}`}
    >
      {children}
    </h1>
  );
};

Title.defaultProps = {
  className: "",
};
