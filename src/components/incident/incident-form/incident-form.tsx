import React from "react";
import {
  Divider,
  Button,
  Form,
  Row,
  Col,
  Input,
  DatePicker,
  Select,
} from "antd";

import {
  incidentTypeOptions,
  severityLevelOptions,
} from "../../../constants/incident";
import { CardBody } from "../../card";
import { filterOption } from "../../../utils";

export const IncidentForm: React.FC = () => {
  return (
    <Form>
      <CardBody>
        <Row gutter={[20, 20]}>
          <Col xs={24} lg={12}>
            <label className="mb-1.5 block font-semibold">
              ชื่อ Incident
              <strong className="mx-1 font-semibold text-red-500">*</strong> :
            </label>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "กรุณาระบุ  ชื่อ Incident" }]}
            >
              <Input
                type="password"
                className="p-2"
                placeholder="ชื่อ Incident"
                size="large"
              />
            </Form.Item>

            <label className="mb-1.5 block font-semibold">
              วัน/เวลาที่เกิด
              <strong className="mx-1 font-semibold text-red-500">*</strong> :
            </label>
            <Form.Item
              name="date"
              rules={[{ required: true, message: "กรุณาระบุ วัน/เวลาที่เกิด" }]}
            >
              <DatePicker
                className="w-full p-2.5"
                showTime
                placeholder="dd/mm/yyyy, hh:mm"
                format="DD/MM/YYYY, HH:mm"
              />
            </Form.Item>

            <label className="mb-1.5 block font-semibold">
              รายละเอียดหรือสรุปเหตุการณ์
              <strong className="mx-1 font-semibold text-red-500">*</strong> :
            </label>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุ รายละเอียดหรือสรุปเหตุการณ์",
                },
              ]}
            >
              <Input.TextArea
                autoSize
                className="p-2"
                placeholder="รายละเอียดหรือสรุปเหตุการณ์"
                size="large"
              />
            </Form.Item>

            <label className="mb-1.5 block font-semibold">
              Incident type
              <strong className="mx-1 font-semibold text-red-500">*</strong> :
            </label>
            <Form.Item
              name="type"
              rules={[
                {
                  required: true,
                  message: "กรุณาเลือก Incident type",
                },
              ]}
            >
              <Select
                size="large"
                showSearch
                allowClear
                placeholder="-Select-"
                optionFilterProp="children"
                filterOption={filterOption}
                options={incidentTypeOptions}
              />
            </Form.Item>

            <label className="mb-1.5 block font-semibold">
              Severity level
              <strong className="mx-1 font-semibold text-red-500">*</strong> :
            </label>
            <Form.Item
              name="type"
              rules={[
                {
                  required: true,
                  message: "กรุณาเลือก Severity level",
                },
              ]}
            >
              <Select
                size="large"
                showSearch
                allowClear
                placeholder="-Select-"
                optionFilterProp="children"
                filterOption={filterOption}
                options={severityLevelOptions}
              />
            </Form.Item>
          </Col>
        </Row>
      </CardBody>
      <Divider className="m-0" />
      <CardBody className="flex justify-end">
        <Button
          className="block h-12 px-8 text-2xl"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </CardBody>
    </Form>
  );
};
