import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/useAuth";

export const requireAuth = (Component: React.FC) => {
  return function AuthComponent() {
    const { user } = useAuth();

    if (!user) {
      return <Navigate to="/auth/login" />;
    }

    return <Component />;
  };
};
