import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/useAuth";

export const requireAuth = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const RequireAuth: React.FC<P> = (props) => {
    const { user } = useAuth();

    if (!user) {
      return <Navigate to="/auth/login" />;
    }

    return <Component {...props} />;
  };

  return RequireAuth;
};
