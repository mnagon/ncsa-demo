import React from "react";

export type SeverityLevelProps = {
  level: string;
};

const SeverityClasses: Record<string, string> = {
  Critical: "bg-[#FFD7D7] text-[#DB2F31]",
  High: "bg-[#FFEADE] text-[#EE7200]",
  Medium: "bg-[#FFF4D9] text-[#FFB800]",
  Low: "bg-[#DCFADC] text-[#00A700]",
};

export const SeverityLevel: React.FC<SeverityLevelProps> = ({ level }) => {
  return (
    <span className={`rounded-full px-3 font-normal ${SeverityClasses[level]}`}>
      {level}
    </span>
  );
};
