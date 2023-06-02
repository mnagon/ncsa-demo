import React from "react";

export const Label: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className="rounded-full border border-solid border-[#5F6EF5] bg-[#EEF3FF] px-4 py-1.5 text-sm text-[#5F6EF5]">
      {children}
    </span>
  );
};
