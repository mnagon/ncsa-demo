import React from "react";

export type APIKeyStatusProps = {
  status: string;
};

const APIKeyStatusClasses: Record<string, string> = {
  ACTIVE: "before:bg-[#00C82C]",
  DISABLED: "before:bg-[#A7A7A7]",
};

export const APIKeyStatus: React.FC<APIKeyStatusProps> = ({ status }) => {
  return (
    <span
      className={`relative flex items-center pl-5 font-normal ${APIKeyStatusClasses[status]} before:absolute before:left-0 before:block before:h-3 before:w-3 before:rounded-full before:content-['']`}
    >
      {status}
    </span>
  );
};
