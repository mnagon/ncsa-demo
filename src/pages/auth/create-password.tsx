import React from "react";
import { Button, Form, Input } from "antd";

type CreatePasswordForm = {
  password: string;
  confirmPassword: string;
};

const AuthCreatePassword: React.FC = () => {
  const [form] = Form.useForm<CreatePasswordForm>();

  const handleSubmit = async (form: CreatePasswordForm) => {
    console.log("submit", form);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/images/auth-background.svg')] bg-cover bg-center">
      <div className="w-full max-w-lg rounded-lg bg-white px-10 py-12 shadow-lg">
        <h2 className="mb-8 text-center text-4xl font-semibold text-primary">
          Create password
        </h2>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <label className="mb-1 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
            Password
          </label>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "กรุณาระบุ Password" }]}
          >
            <Input
              type="password"
              className="p-3 "
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <label className="mb-1 block font-semibold after:ml-1 after:text-red-500 after:content-['*']">
            Confirm password
          </label>
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: "กรุณาระบุ Confirm password" }]}
          >
            <Input
              type="password"
              className="p-3 "
              placeholder="Confirm password"
              size="large"
            />
          </Form.Item>

          <Button
            className="mx-auto mt-12 block h-14 px-10 text-2xl font-semibold"
            type="primary"
            htmlType="submit"
          >
            Create password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AuthCreatePassword;
