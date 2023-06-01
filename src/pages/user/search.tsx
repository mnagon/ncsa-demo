import React from "react";
import { Input, Button, Form, Typography } from "antd";
import Icon, { SearchOutlined } from "@ant-design/icons";
import { Search, Filter } from "../../components/icons";
import { requireAuth } from "../../utils";
import { Title } from "../../components/title";

const UserSearch: React.FC = () => {
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
      <div className="flex flex-col justify-between md:flex-row">
        <Typography.Paragraph>
          <Typography.Text strong>Note:</Typography.Text>{" "}
          สามารถค้นหาได้ทีละหลายรายการ (กด Spacebar เพื่อใส่รายการต่อไป)
        </Typography.Paragraph>
        <Button
          className="inline-flex items-center self-end md:self-baseline"
          type="text"
        >
          <Icon component={Filter} size={16} />
          <span className="font-medium text-primary">Advanced Search</span>
        </Button>
      </div>
    </>
  );
};

export default requireAuth(UserSearch);
