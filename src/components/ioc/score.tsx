import React from "react";

export const Score: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className="rounded border border-solid bg-[#25286F] px-4 py-2 font-pt text-white">
      {children}
    </span>
  );
};
