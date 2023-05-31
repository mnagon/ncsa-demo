import React from "react";

export type NewsPreviewProps = {
  source: string;
  title: string;
  teaser: string;
  date: string;
};

export const NewsPreview: React.FC<NewsPreviewProps> = ({
  source,
  title,
  teaser,
  date,
}) => {
  return (
    <div className="border-b border-l-0 border-r-0 border-t-0 border-solid border-[#DFDFDF] py-4">
      <span className="rounded-full border-0 bg-[#1A1B4C] px-3 py-1 text-[12px] text-white">
        {source}
      </span>
      <a
        href="https://www.ncsa.or.th/"
        target="_blank"
        className="my-2 block text-xl font-semibold text-black no-underline"
      >
        {title}
      </a>
      <p className="mb-2 mt-0  text-slate-600">{teaser}</p>
      <span className="text-sm ">{date}</span>
    </div>
  );
};
