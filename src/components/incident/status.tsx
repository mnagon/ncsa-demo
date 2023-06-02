import React from "react";

export type IncidentStatusProps = {
  status: string;
};

const IncidentStatusClasses: Record<string, string> = {
  ACCEPTED: "text-[#1ABC5B] before:bg-[#1ABC5B]",
  REJECTED: "text-[#C00001] before:bg-[#C00001]",
  PENDING: "text-[#4D7EDC] before:bg-[#4D7EDC]",
};

export const IncidentStatus: React.FC<IncidentStatusProps> = ({ status }) => {
  return (
    <span
      className={`relative flex items-center pl-5 font-normal ${IncidentStatusClasses[status]} before:absolute before:left-0 before:block before:h-3 before:w-3 before:rounded-full before:content-['']`}
    >
      {status}
    </span>
  );
};
