import React from "react";

export type CodeProps = {
  block?: boolean;
};

export const Code: React.FC<React.PropsWithChildren<CodeProps>> = ({
  children,
  block,
}) => {
  return (
    <span
      className={`rounded border border-solid border-[#7E93FB] bg-[#C6D5FF] px-4 py-2 font-pt text-sm text-[#25286F] ${
        block ? "block" : "inline-block"
      }`}
    >
      {children}
    </span>
  );
};

Code.defaultProps = {
  block: false,
};
