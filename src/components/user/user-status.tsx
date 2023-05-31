import React from "react";

export type UserStatusProps = {
  status: string;
};

const UserStatusClasses: Record<string, string> = {
  ACTIVE: "before:bg-[#00C82C]",
  INACTIVE: "before:bg-[#A7A7A7]",
};

export const UserStatus: React.FC<UserStatusProps> = ({ status }) => {
  return (
    <span
      className={`relative flex items-center pl-5 font-normal ${UserStatusClasses[status]} before:absolute before:left-0 before:block before:h-3 before:w-3 before:rounded-full before:content-['']`}
    >
      {status}
    </span>
  );
};
