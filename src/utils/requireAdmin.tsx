import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

export const requireAdmin = (Component: React.FC) => {
  return function AdminComponent() {
    const { user } = useAuth();

    if (!user) {
      return <Navigate to="/auth/login" />;
    }

    const isAdmin = user.role === "admin";

    if (!isAdmin) {
      return <Navigate to="/404" />;
    }

    return <Component />;
  };
};
