import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

export type SearchPreviewProps = {
  title: string;
  teaser: string;
  creationDate: { timeAgo: string; date: string };
  search: any[];
};

export const SearchPreview: React.FC<SearchPreviewProps> = ({
  title,
  teaser,
  creationDate,
  search,
}) => {
  return (
    <div className="border-b border-l-0 border-r-0 border-t-0 border-solid border-slate-200 pb-3 pt-8 first:pt-0 last:border-b-0 last:pb-0">
      <Link
        to="/ioc/ioc-items"
        className="text-[#111111] no-underline
      "
      >
        <h3 className="m-0 text-xl font-medium">{title}</h3>
      </Link>
      <p className="mt-2">{teaser}</p>
      <div className="mb-2 flex flex-wrap gap-2 sm:mb-0">
        {search.map((item) => (
          <Tag {...item} />
        ))}
      </div>
      <div className="flex justify-start sm:justify-end">
        <Tooltip
          placement="bottomRight"
          title={`Creation Date: ${creationDate.date}`}
          color="#585858"
          key="1"
        >
          <p className="m-0 text-right text-[#6C6D82]">
            {`Creation Date: ${creationDate.timeAgo}`}
          </p>
        </Tooltip>
      </div>
    </div>
  );
};

/**
 * Sub-components
 */

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="rounded-full border border-solid border-[#5F6EF5] bg-[#EEF3FF] px-3 py-1  text-[12px] text-sm text-[#5F6EF5]">
    {text}
  </span>
);
