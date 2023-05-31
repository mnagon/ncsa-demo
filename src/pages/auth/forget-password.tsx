import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";

type ForgetPasswordForm = {
  email: string;
};

const AuthForgetPassword: React.FC = () => {
  const [form] = Form.useForm<ForgetPasswordForm>();

  const handleSubmit = async (form: ForgetPasswordForm) => {
    console.log("submit", form);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/images/auth-background.svg')] bg-cover bg-center">
      <div className="w-full max-w-lg rounded-lg bg-white px-10 py-12 shadow-lg">
        <h2 className="mb-4 text-center text-4xl font-semibold text-primary">
          Forget password?
        </h2>
        <Typography.Paragraph className="text-center">
          Enter your email address and we’ll send you a link to reset your
          password.
        </Typography.Paragraph>
        <Form
          className="mt-8"
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <label className="mb-1 block font-semibold">Email address</label>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "กรุณาระบุ Email" }]}
          >
            <Input
              type="password"
              className="p-3 "
              placeholder="Enter your Email address"
              size="large"
            />
          </Form.Item>
          <Button
            className="mx-auto mb-8 mt-12 block h-14 px-10 text-2xl font-semibold"
            type="primary"
            htmlType="submit"
          >
            Send password reset email
          </Button>
          <div className="mb-5 text-center ">
            <Link
              className="font-normal text-primary underline"
              to="/auth/login"
            >
              Back to Log-in
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AuthForgetPassword;
