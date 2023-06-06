import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

export const requireAdmin = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const RequireAdmin: React.FC<P> = (props) => {
    const { user } = useAuth();

    if (!user) {
      return <Navigate to="/auth/login" />;
    }

    const isAdmin = user.role === "admin";

    if (!isAdmin) {
      return <Navigate to="/404" />;
    }

    return <Component {...props} />;
  };

  return RequireAdmin;
};
