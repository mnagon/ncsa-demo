import React from "react";
import { Divider, Button, Form, Input, Row, Col } from "antd";
import { Title } from "../../components/title";
import { Card, CardBody } from "../../components/card";
import { requireAuth } from "../../utils";

const UserAccount: React.FC = () => {
  const [profileForm] = Form.useForm();
  const [passwordForm] = Form.useForm();

  const handleSubmit = () => {
    console.log("submit profile form");
  };

  return (
    <>
      <header>
        <Title>Account management</Title>
      </header>
      <Card className="mb-8">
        <CardBody>
          <h2 className="mt-0 text-2xl font-semibold text-primary">Profile</h2>
          <Form form={profileForm} onFinish={handleSubmit}>
            <Row gutter={[20, 20]}>
              <Col xs={24} lg={12}>
                <label className="mb-1.5 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  First name
                </label>
                <Form.Item
                  name="first-name"
                  rules={[{ required: true, message: "กรุณาระบุชื่อ" }]}
                >
                  <Input placeholder="First name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <label className="mb-1.5 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  Last name
                </label>
                <Form.Item
                  name="last-name"
                  rules={[{ required: true, message: "กรุณาระบุนามสกุล" }]}
                >
                  <Input placeholder="Last name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <label className="mb-1.5 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  Email address
                </label>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "กรุณาระบุ Email address" },
                  ]}
                >
                  <Input placeholder="Email address" size="large" disabled />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <label className="mb-1.5 block font-semibold">
                  Phone number
                </label>
                <Form.Item name="phone">
                  <Input placeholder="xxx-xxx-xxxx" size="large" />
                </Form.Item>
              </Col>
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
            Save Change
          </Button>
        </CardBody>
      </Card>
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

export default requireAuth(UserAccount);
