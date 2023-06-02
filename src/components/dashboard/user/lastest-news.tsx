import React from "react";
import { Card } from "../../card";
import { lastestNews } from "../../../mocks/dashboard";

export const LastestNews: React.FC = () => {
  return (
    <>
      <Card className="h-full">
        <header className="flex items-center justify-between border-b border-l-0 border-r-0 border-t-0 border-dashed border-[#BFBFC7] px-10">
          <h3 className="my-5 text-xl font-medium text-[#1A1B4C]">
            Lastest News
          </h3>
          <a href="" className="font-medium text-[#25286F]">
            More news
          </a>
        </header>
        <div className="px-10 py-6">
          {lastestNews.map((item: any) => (
            <NewsPreview {...item} />
          ))}
        </div>
      </Card>
    </>
  );
};

/**
 * Sub-components
 */

const NewsPreview: React.FC<{ title: string; date: string }> = ({
  title,
  date,
}) => (
  <div className="mt-3 border-b border-l-0 border-r-0 border-t-0 border-solid border-[#BFBFC7] first:mt-0 last:mb-0 last:border-0">
    <h4 className="m-0 text-lg font-medium first:mt-0">{title}</h4>
    <p className="text-[#6C6D82} mt-2 text-sm font-light">{date}</p>
  </div>
);
