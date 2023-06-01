import React from "react";
import { Input, Button, Space, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import Icon, { SearchOutlined } from "@ant-design/icons";

import { Title } from "../../components/title";
import { CustomTable } from "../../components/custom-table";
import { Edit, Trash, Copy } from "../../components/icons";
import { requireAuth } from "../../utils";
import { userApiKeyList } from "../../mocks/api-key";
import { APIKeyStatus } from "../../components/api-key";

const APIKey: React.FC = () => {
  const columns = React.useMemo<ColumnsType<any>>(() => {
    return [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (name) => <>{name}</>,
        sorter: true,
      },
      {
        title: "API Key",
        dataIndex: "key",
        key: "key",
        render: (key) => (
          <Typography.Paragraph
            copyable={{
              icon: [
                <Icon component={Copy} key="copy-icon" />,
                <Icon
                  className="opacity-30"
                  component={Copy}
                  key="copied-icon"
                />,
              ],
              tooltips: ["copy", "copied!"],
            }}
          >
            {key}
          </Typography.Paragraph>
        ),
      },
      {
        title: "Created date",
        dataIndex: "createDate",
        key: "create-date",
        render: (date) => <>{date}</>,
        sorter: true,
      },
      {
        title: "Expire date",
        dataIndex: "expireDate",
        key: "expire-date",
        render: (date) => <>{date}</>,
        sorter: true,
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status) => <APIKeyStatus status={status} />,
      },
      {
        title: "Actions",
        key: "actions",
        render: () => (
          <Space>
            <Button
              icon={<Icon component={Edit} />}
              shape="circle"
              className="border-0 shadow-none"
            />
            <Button
              icon={<Icon component={Trash} />}
              shape="circle"
              className="border-0 shadow-none"
            />
          </Space>
        ),
      },
    ];
  }, []);

  return (
    <>
      <header>
        <Title>API Key creation and management</Title>
      </header>
      <div className="mb-5 flex items-baseline justify-between">
        <Input
          className="max-w-[384px]"
          size="large"
          placeholder="Search by name"
          prefix={<SearchOutlined />}
        />
        <Button type="primary" size="large">
          + Generate API Key
        </Button>
      </div>
      <CustomTable dataSource={userApiKeyList} columns={columns} />
    </>
  );
};

export default requireAuth(APIKey);
