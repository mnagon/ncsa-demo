import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { Logo } from "../../components/logo";
import { useAuth } from "../../contexts/useAuth";

type LoginForm = {
  email: string;
  password: string;
};

const AuthLogin: React.FC = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [form] = Form.useForm<LoginForm>();

  if (user) {
    if (user.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    }
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = async (form: LoginForm) => {
    await login(form);
    if (form.password.trim().toLowerCase() === "admin") {
      navigate("/admin/dashboard");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/images/auth-background.svg')] bg-cover bg-center">
      <Logo className="mb-12" disabled />
      <div className="w-full max-w-lg rounded-lg bg-white px-10 py-12 shadow-lg">
        <h2 className="mb-8 text-center text-4xl font-semibold text-primary">
          User Login
        </h2>
        <Form form={form} onFinish={handleSubmit}>
          <label className="mb-1 block font-semibold">Email</label>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "กรุณาระบุ Email" },
              { type: "email", message: "รูปแบบของ Email ไม่ถูกต้อง" },
            ]}
          >
            <Input className="p-3 " placeholder="Email address" size="large" />
          </Form.Item>
          <label className="mb-1 block font-semibold">Password</label>
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
          <div className="mb-5 text-right ">
            <Link
              className="font-normal text-primary underline"
              to="/auth/forget-password"
            >
              Forget password?
            </Link>
          </div>
          <Button
            className="mx-auto block h-14 w-40 text-2xl"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AuthLogin;
