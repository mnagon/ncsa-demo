import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Select, Button, Space, Form } from "antd";
import type { ColumnsType } from "antd/es/table";
import Icon, {
  SearchOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import { Title } from "../../../components/title";
import { SeverityLevel, IncidentStatus } from "../../../components/incident";
import { CustomTHead, CustomTable } from "../../../components/custom-table";
import { CustomPagination } from "../../../components/custom-pagination";
import { PageSize } from "../../../components/page-size";
import { Eye, Trash } from "../../../components/icons";
import { ConfirmModal } from "../../../components/confirm-modal";
import { Incident } from "../../../components/icons";
import {
  incidentTypeOptions,
  severityLevelOptions,
} from "../../../constants/incident";
import { incidentList } from "../../../mocks/incidents";
import { filterOption, requireAdmin } from "../../../utils";

const AdminIncidents: React.FC = () => {
  const [currentpage, setCurrentPage] = React.useState(1);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showAcceptModal, setShowAcceptModal] = React.useState(false);
  const [showRejectModal, setShowRejectModal] = React.useState(false);

  const columns = React.useMemo<ColumnsType<any>>(() => {
    return [
      {
        title: "Incident name",
        dataIndex: "name",
        key: "name",
        render: (name) => <a className="text-black">{name}</a>,
        sorter: true,
      },
      {
        title: "Incident type",
        dataIndex: "type",
        key: "type",
        render: (type) => <span className="text-primary">{type}</span>,
        sorter: true,
      },
      {
        title: "Severity level",
        dataIndex: "level",
        key: "level",
        render: (level) => (
          <>
            <SeverityLevel level={level} />
          </>
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
        dataIndex: "date",
        key: "date",
        render: (date) => <>{date}</>,
        sorter: true,
      },
      {
        title: <CustomTHead className="text-center">Status</CustomTHead>,
        dataIndex: "status",
        key: "status",
        render: (status) => (
          <div className="flex justify-center">
            {status === "PENDING" ? (
              <Space>
                <AcceptButton onClick={() => setShowAcceptModal(true)} />
                <RejectButton onClick={() => setShowRejectModal(true)} />
              </Space>
            ) : (
              <IncidentStatus status={status} />
            )}
          </div>
        ),
      },
      {
        title: "Actions",
        key: "actions",
        render: () => (
          <Space>
            <Button
              icon={<Icon component={Eye} />}
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
          <Icon className="mr-3" component={Incident} />
          Incident Management
        </Title>
      </header>

      <Row gutter={[16, 16]} align="bottom" className="mb-5">
        <Col xs={24} lg={7}>
          <Input
            size="large"
            className="w-full"
            placeholder="Search by incident name"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col xs={12} lg={5}>
          <label className="mb-1 block font-semibold">Incident type:</label>
          <Select
            size="large"
            className="w-full"
            showSearch
            allowClear
            placeholder="-Select-"
            optionFilterProp="children"
            filterOption={filterOption}
            options={incidentTypeOptions}
          />
        </Col>
        <Col xs={12} lg={5}>
          <label className="mb-1 block font-semibold">Severity level:</label>
          <Select
            size="large"
            className="w-full"
            showSearch
            allowClear
            placeholder="-Select-"
            optionFilterProp="children"
            filterOption={filterOption}
            options={severityLevelOptions}
          />
        </Col>
        <Col xs={24} lg={7} className="flex justify-end">
          <Link to="/admin/incidents/create">
            <Button type="primary" size="large">
              + Submit Incident Case
            </Button>
          </Link>
        </Col>
      </Row>
      <CustomTable
        className="mb-6"
        dataSource={incidentList}
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

      {/* Confirm Delete Modal */}
      <ConfirmModal
        open={showDeleteModal}
        headline="Delete this incident case"
        message="Are you sure you want to delete this incident case?"
        confirmText="Delete"
        onCancel={() => setShowDeleteModal(false)}
        onOk={() => setShowDeleteModal(false)}
      />

      {/* Confirm Accept Modal */}
      <ConfirmModal
        open={showAcceptModal}
        headline="Accept this incident"
        message="Are you sure you want to accept this incident?"
        confirmText="Confirm"
        onCancel={() => setShowAcceptModal(false)}
        onOk={() => setShowAcceptModal(false)}
      />

      {/* Confirm Reject Modal */}
      <ConfirmModal
        open={showRejectModal}
        headline="Reject incident"
        message="Are you sure you want to reject this incident?"
        content={
          <>
            <label className="mb-1.5 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
              Remark
            </label>
            <Form.Item
              name="remark"
              rules={[{ required: true, message: "กรุณาระบุ Remark" }]}
            >
              <Input placeholder="Add comment" size="large" />
            </Form.Item>
          </>
        }
        confirmText="Confirm"
        onCancel={() => setShowRejectModal(false)}
        onOk={() => setShowRejectModal(false)}
      />
    </>
  );
};

export default requireAdmin(AdminIncidents);

/**
 * Sub-components
 */

const AcceptButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <button
    className="cursor-pointer border-none bg-[#1ABC5B] font-normal text-white hover:shadow hover:brightness-110"
    {...props}
  >
    <CheckOutlined className="mr-1" />
    ACCEPT
  </button>
);

const RejectButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <button
    className="cursor-pointer border-none bg-[#C00001] font-normal text-white hover:shadow hover:brightness-110"
    {...props}
  >
    <CloseOutlined className="mr-1" />
    REJECT
  </button>
);
