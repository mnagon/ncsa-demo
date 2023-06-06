import React from "react";
import { Divider, Button, Form, Input, Row, Col } from "antd";
import { Title } from "../../components/title";
import { Card, CardBody } from "../../components/card";
import { requireAuth } from "../../utils";

const UserResetPassword: React.FC = () => {
  const [passwordForm] = Form.useForm();

  const handleSubmit = () => {
    console.log("submit profile form");
  };

  return (
    <>
      <header>
        <Title>Password Management</Title>
      </header>
      <Card>
        <CardBody>
          <h2 className="mt-0 text-2xl font-semibold text-primary">
            Reset Password
          </h2>
          <Form form={passwordForm} onFinish={handleSubmit}>
            <Row gutter={[20, 20]}>
              <Col xs={24} lg={12}>
                <label className="mb-1.5 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  Old Password
                </label>
                <Form.Item
                  name="old-password"
                  rules={[
                    { required: true, message: "กรุณาระบุ Old Password" },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="Old Password"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12} />
              <Col xs={24} lg={12}>
                <label className="mb-1.5 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  New Password
                </label>
                <Form.Item
                  name="new-password"
                  rules={[
                    { required: true, message: "กรุณาระบุ New Password" },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="New Password *"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12} />
              <Col xs={24} lg={12}>
                <label className="mb-1.5 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  Confirm New Password
                </label>
                <Form.Item
                  name="confirm-password"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาระบุ Confirm New Password",
                    },
                  ]}
                >
                  <Input placeholder="Confirm New Password" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12} />
            </Row>
          </Form>
        </CardBody>
        <Divider className="m-0" />
        <CardBody className="flex justify-end">
          <Button
            className="block h-10 px-6 text-xl"
            type="primary"
            htmlType="submit"
          >
            Confirm Reset Password
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default requireAuth(UserResetPassword);
