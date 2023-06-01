import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Input,
  Select,
  Button,
  Space,
  Typography,
  Tooltip,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import Icon, { SearchOutlined } from "@ant-design/icons";

import { Title } from "../../../components/title";
import { CustomTable } from "../../../components/custom-table";
import { CustomPagination } from "../../../components/custom-pagination";
import { PageSize } from "../../../components/page-size";
import { Edit, Trash } from "../../../components/icons";
import { ConfirmModal } from "../../../components/confirm-modal";
import { Alert } from "../../../components/icons";
import { alertList } from "../../../mocks/alert";
import { filterOption, requireAdmin } from "../../../utils";
import { IOCOptions } from "../../../constants/incident";

const AdminAlerts: React.FC = () => {
  const [currentpage, setCurrentPage] = React.useState(1);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const columns = React.useMemo<ColumnsType<any>>(() => {
    return [
      {
        title: "No.",
        dataIndex: "no",
        key: "no",
        render: (no) => <>{no}</>,
      },
      {
        title: "หน่วยงาน",
        dataIndex: "name",
        key: "name",
        render: (name) => <>{name}</>,
        sorter: true,
      },
      {
        title: "IOC type",
        dataIndex: "type",
        key: "type",
        render: (type) => <>{type}</>,
        sorter: true,
      },
      {
        title: "IOC ที่ต้องเฝ้าระวัง",
        dataIndex: "observer",
        key: "observer",
        render: (observer) => (
          <Tooltip title={observer} mouseEnterDelay={1}>
            <Typography.Paragraph
              className="max-w-[288px] cursor-pointer"
              ellipsis={{
                rows: 2,
                expandable: false,
              }}
            >
              {observer}
            </Typography.Paragraph>
          </Tooltip>
        ),
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
      <header className="mb-4">
        <Title>
          <Icon className="mr-3" component={Alert} />
          Alert Management
        </Title>
      </header>

      <Row gutter={[16, 16]} align="bottom" className="mb-5">
        <Col xs={24} lg={9}>
          <Input
            size="large"
            className="w-full"
            placeholder="Search by incident name"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col xs={24} lg={5}>
          <label className="mb-1 block font-semibold">IOC Type:</label>
          <Select
            size="large"
            className="w-full"
            showSearch
            allowClear
            placeholder="-Select-"
            optionFilterProp="children"
            filterOption={filterOption}
            options={IOCOptions}
          />
        </Col>
        <Col xs={24} lg={10} className="flex justify-end">
          <Link to="/incidents/create">
            <Button type="primary" size="large">
              + Submit Incident Case
            </Button>
          </Link>
        </Col>
      </Row>
      <CustomTable className="mb-6" dataSource={alertList} columns={columns} />
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
        headline="Delete this item"
        message="Are you sure you want to delete this item?"
        confirmText="Delete"
        onCancel={() => setShowDeleteModal(false)}
        onOk={() => setShowDeleteModal(false)}
      />
    </>
  );
};

export default requireAdmin(AdminAlerts);
