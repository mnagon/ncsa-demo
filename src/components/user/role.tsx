import React from "react";

export type RoleProps = {
  role: string;
};

const RoleClasses: Record<string, string> = {
  User: "bg-[#E7E7EF] text-[#6C6D82]",
  Admin: "bg-[#C6D5FF] text-[#25286F]",
  "Super Admin": "bg-[#25286F] text-white",
};

export const Role: React.FC<RoleProps> = ({ role }) => {
  return (
    <span className={`rounded-full px-3 font-normal ${RoleClasses[role]}`}>
      {role}
    </span>
  );
};
