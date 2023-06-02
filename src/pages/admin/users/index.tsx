import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Select, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import Icon, { SearchOutlined } from "@ant-design/icons";

import { CustomTable, CustomTHead } from "../../../components/custom-table";
import { CustomPagination } from "../../../components/custom-pagination";
import { PageSize } from "../../../components/page-size";
import { ConfirmModal } from "../../../components/confirm-modal";
import { UserGroup } from "../../../components/icons";
import { filterOption, requireAdmin } from "../../../utils";
import { Title } from "../../../components/title";
import { roleOptions } from "../../../constants/user";
import { userList } from "../../../mocks/user";
import { Eye, Trash } from "../../../components/icons";
import { Role, UserStatus } from "../../../components/user";

const AdminUsers: React.FC = () => {
  const [currentpage, setCurrentPage] = React.useState(1);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const columns = React.useMemo<ColumnsType<any>>(() => {
    return [
      {
        title: "First name",
        dataIndex: "fName",
        key: "fName",
        render: (fName) => <>{fName}</>,
        sorter: true,
      },
      {
        title: "Last name",
        dataIndex: "lName",
        key: "lName",
        render: (lName) => <>{lName}</>,
        sorter: true,
      },
      {
        title: "E-mail",
        dataIndex: "email",
        key: "email",
        render: (email) => <>{email}</>,
        sorter: true,
      },
      {
        title: "Created date",
        dataIndex: "createDate",
        key: "createDate",
        render: (createDate) => <>{createDate}</>,
        sorter: true,
      },
      {
        title: <CustomTHead className="text-center">Role</CustomTHead>,
        dataIndex: "role",
        key: "role",
        render: (role) => (
          <div className="flex justify-center">
            <Role role={role} />
          </div>
        ),
        sorter: true,
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status) => <UserStatus status={status} />,
        sorter: true,
      },
      {
        title: "Actions",
        key: "actions",
        render: () => (
          <Space>
            <Link to="/admin/users/update/user-id">
              <Button
                icon={<Icon component={Eye} />}
                shape="circle"
                className="border-0 shadow-none"
              />
            </Link>
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
          <Icon className="mr-3" component={UserGroup} />
          User Management
        </Title>
      </header>

      <Row gutter={[16, 16]} align="bottom" className="mb-5">
        <Col xs={24} lg={7}>
          <Input
            size="large"
            className="w-full"
            placeholder="Search by first name, last name and email"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col xs={12} lg={5}>
          <label className="mb-1 block font-semibold">Role:</label>
          <Select
            size="large"
            className="w-full"
            showSearch
            allowClear
            placeholder="-Select-"
            optionFilterProp="children"
            filterOption={filterOption}
            options={roleOptions}
          />
        </Col>
        <Col xs={24} lg={12} className="flex justify-end">
          <Link to="/admin/users/create">
            <Button type="primary" size="large">
              + Add new user
            </Button>
          </Link>
        </Col>
      </Row>
      <CustomTable className="mb-6" dataSource={userList} columns={columns} />
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
        headline="Delete this user"
        message="Are you sure you want to delete this user?"
        confirmText="Delete"
        onCancel={() => setShowDeleteModal(false)}
        onOk={() => setShowDeleteModal(false)}
      />
    </>
  );
};

export default requireAdmin(AdminUsers);
