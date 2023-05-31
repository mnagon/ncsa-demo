import React from "react";
import { Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Title } from "../../components/title";
import { requireAuth } from "../../utils";
import { NewsPreview } from "../../components/news-preview";
import { CustomPagination } from "../../components/custom-pagination";
import { Card } from "../../components/card";
import { newsList } from "../../mocks/news";

const UserNews: React.FC = () => {
  const [currentpage, setCurrentPage] = React.useState(1);

  return (
    <>
      <header className="mb-4 flex items-baseline justify-between">
        <Title>News</Title>
        <Space>
          <label>Search:</label>
          <Input
            size="large"
            className="min-w-[384px]"
            placeholder="Search by title and description"
            prefix={<SearchOutlined />}
          />
        </Space>
      </header>
      <Card className="px-10 pb-10 pt-5">
        <div className="mb-8">
          {newsList.map((news) => (
            <NewsPreview key={news.id} {...news} />
          ))}
        </div>
        <div className="flex justify-end">
          <CustomPagination
            total={50}
            pageSize={10}
            current={currentpage}
            onChange={setCurrentPage}
          />
        </div>
      </Card>
    </>
  );
};

export default requireAuth(UserNews);
