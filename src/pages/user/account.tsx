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
          <Form form={profileForm} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={[20, 20]}>
              <Col xs={24} lg={12}>
                <label className="mb-1 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  First name
                </label>
                <Form.Item
                  name="first-name"
                  rules={[{ required: true, message: "กรุณาระบุชื่อ" }]}
                >
                  <Input
                    className="p-3 "
                    placeholder="First name"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <label className="mb-1 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  Last name
                </label>
                <Form.Item
                  name="last-name"
                  rules={[{ required: true, message: "กรุณาระบุนามสกุล" }]}
                >
                  <Input
                    className="p-3 "
                    placeholder="Last name"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <label className="mb-1 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  Email address
                </label>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "กรุณาระบุ Email address" },
                  ]}
                >
                  <Input
                    className="p-3 "
                    placeholder="Email address"
                    size="large"
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <label className="mb-1 block font-semibold">Phone number</label>
                <Form.Item name="phone">
                  <Input
                    className="p-3 "
                    placeholder="xxx-xxx-xxxx"
                    size="large"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </CardBody>
        <Divider className="m-0" />
        <CardBody className="flex justify-end">
          <Button
            className="block h-14 px-8 text-2xl"
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
          <Form form={passwordForm} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={[20, 20]}>
              <Col xs={24} lg={12}>
                <label className="mb-1 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
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
                    className="p-3 "
                    placeholder="Old Password"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12} />
              <Col xs={24} lg={12}>
                <label className="mb-1 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  New Password
                </label>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "กรุณาระบุ New Password" },
                  ]}
                >
                  <Input
                    type="password"
                    className="p-3 "
                    placeholder="New Password *"
                    size="large"
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12} />
              <Col xs={24} lg={12}>
                <label className="mb-1 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
                  Confirm New Password
                </label>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาระบุ Confirm New Password",
                    },
                  ]}
                >
                  <Input
                    className="p-3 "
                    placeholder="Confirm New Password"
                    size="large"
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12} />
            </Row>
          </Form>
        </CardBody>
        <Divider className="m-0" />
        <CardBody className="flex justify-end">
          <Button
            className="block h-14 px-8 text-2xl"
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
