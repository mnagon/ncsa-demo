import React from "react";

export const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="mb-3 mt-0 text-3xl font-semibold text-primary">
      {children}
    </h1>
  );
};
