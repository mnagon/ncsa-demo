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
import { API } from "../../components/icons";
import { PageSize } from "../../components/page-size";
import { CustomPagination } from "../../components/custom-pagination";
import { ConfirmModal } from "../../components/confirm-modal";

const APIKey: React.FC = () => {
  const [currentpage, setCurrentPage] = React.useState(1);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

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
        title: "Created by",
        dataIndex: "createBy",
        key: "createBy",
        render: (createBy) => <>{createBy}</>,
        sorter: true,
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
              onClick={() => setShowDeleteModal(true)}
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
        <Title>
          <Icon className="mr-3" component={API} />
          API Key Management
        </Title>
      </header>
      <div className="mb-5 flex items-baseline justify-between">
        <Input
          className="max-w-[384px]"
          size="large"
          placeholder="Search by name"
          prefix={<SearchOutlined />}
        />
        <Button type="primary" size="large">
          + Add New Incident Case
        </Button>
      </div>
      <CustomTable
        className="mb-6"
        dataSource={userApiKeyList}
        columns={columns}
      />
      <div className="flex items-baseline justify-between">
        <PageSize total={30} current={currentpage} pageSize={10} />
        <CustomPagination
          total={30}
          current={currentpage}
          pageSize={10}
          onChange={setCurrentPage}
        />
      </div>

      <ConfirmModal
        open={showDeleteModal}
        headline="Delete API Key"
        message="Are you sure you want to delete this API Key?"
        content={
          <div className="flex justify-center">
            <div>
              <p className="font-normal">
                Name:{" "}
                <strong className="font-normal text-primary">Support</strong>
              </p>
              <p className="font-normal">
                API Key:{" "}
                <strong className="font-normal text-primary">
                  f2a04524-d641-4b00-91a3-11a61d82693e
                </strong>
              </p>
            </div>
          </div>
        }
        confirmText="Delete"
        onCancel={() => setShowDeleteModal(false)}
        onOk={() => setShowDeleteModal(false)}
      />
    </>
  );
};

export default requireAuth(APIKey);
