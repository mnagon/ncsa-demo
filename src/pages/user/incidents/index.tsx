import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Select, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import Icon, { SearchOutlined } from "@ant-design/icons";

import { Title } from "../../../components/title";
import { SeverityLevel, IncidentStatus } from "../../../components/incident";
import { CustomTable } from "../../../components/custom-table";
import { CustomPagination } from "../../../components/custom-pagination";
import { PageSize } from "../../../components/page-size";
import { Eye, Trash } from "../../../components/icons";
import { ConfirmModal } from "../../../components/confirm-modal";

import {
  incidentTypeOptions,
  severityLevelOptions,
} from "../../../constants/incident";
import { incidentList } from "../../../mocks/incidents";
import { filterOption, requireAuth } from "../../../utils";

const UserIncidents: React.FC = () => {
  const [currentpage, setCurrentPage] = React.useState(1);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

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
        title: "Created date",
        dataIndex: "date",
        key: "date",
        render: (date) => <>{date}</>,
        sorter: true,
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status) => (
          <>
            <IncidentStatus status={status} />
          </>
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
        <Title>Incident Case</Title>
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
          <Link to="/incidents/create">
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

      <ConfirmModal
        open={showDeleteModal}
        headline="Delete this incident case"
        message="Are you sure you want to delete this incident case?"
        confirmText="Delete"
        onCancel={() => setShowDeleteModal(false)}
        onOk={() => setShowDeleteModal(false)}
      />
    </>
  );
};

export default requireAuth(UserIncidents);
