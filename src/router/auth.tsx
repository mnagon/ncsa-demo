import React from "react";
import { Router as RouterType } from "../types";

const CreatePassword = React.lazy(
  () => import("../pages/auth/create-password")
);
const ForgetPassword = React.lazy(
  () => import("../pages/auth/forget-password")
);
const Login = React.lazy(() => import("../pages/auth/login"));
const ResetPassword = React.lazy(() => import("../pages/auth/reset-password"));

const authRouters: RouterType[] = [
  {
    path: "auth/create-password",
    element: <CreatePassword />,
    title: "Auth Create Password",
  },
  {
    path: "auth/forget-password",
    element: <ForgetPassword />,
    title: "Auth Forget Password",
  },
  {
    path: "auth/login",
    element: <Login />,
    title: "Auth Login",
  },
  {
    path: "auth/reset-password",
    element: <ResetPassword />,
    title: "Auth Reset Password",
  },
];

export default authRouters;
