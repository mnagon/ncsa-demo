import React from "react";
import { Input, Button, Form, Typography } from "antd";
import Icon, { SearchOutlined } from "@ant-design/icons";
import { Search, Filter } from "../../components/icons";
import { requireAuth } from "../../utils";
import { Title } from "../../components/title";
import { Card } from "../../components/card";
import { SearchPreview } from "../../components/search-preview";
import { searchList } from "../../mocks/search";
import { CustomPagination } from "../../components/custom-pagination";
import { PageSize } from "../../components/page-size";

const UserSearch: React.FC = () => {
  const [currentpage, setCurrentPage] = React.useState(1);

  return (
    <>
      <header>
        <Title>Search</Title>
      </header>
      <Form className="mb-3 flex space-x-2">
        <Input
          size="large"
          placeholder="Search by name"
          prefix={<SearchOutlined />}
        />
        <Button className="w-[176px]" type="primary" size="large">
          <Icon component={Search} size={16} />
          Search
        </Button>
      </Form>
      <div className="mb-4 flex flex-col justify-between md:flex-row">
        <Typography.Paragraph>
          <Typography.Text strong>Note:</Typography.Text>{" "}
          สามารถค้นหาได้ทีละหลายรายการ (กด Spacebar เพื่อใส่รายการต่อไป)
        </Typography.Paragraph>
        <Button
          className="inline-flex items-center self-start md:self-baseline"
          type="text"
        >
          <Icon component={Filter} size={16} />
          <span className="font-medium text-primary">Advanced Search</span>
        </Button>
      </div>
      <Title>1,150 search results for “python”</Title>
      <Card className="mb-6 p-10 pb-6">
        {searchList.map((search) => (
          <SearchPreview key={search.id} {...search} />
        ))}
      </Card>
      <div className="flex items-baseline justify-between">
        <PageSize total={30} current={currentpage} pageSize={10} />
        <CustomPagination
          total={30}
          current={currentpage}
          pageSize={10}
          onChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default requireAuth(UserSearch);
