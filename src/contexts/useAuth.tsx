import React from "react";
import useSWR, { mutate } from "swr";
import { storage } from "../utils";

export type LoginForm = {
  email: string;
  password: string;
};

type AuthContext = {
  user: any;
  login: (form: LoginForm) => void;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContext>({
  user: undefined,
  login: () => {
    return;
  },
  logout: () => {
    return;
  },
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { data: user } = useSWR("user", storage);

  const login = ({ email, password }: LoginForm) => {
    const userData = {
      id: "0001",
      name: "boy",
      email,
      role: password.trim().toLowerCase() === "admin" ? "admin" : "user",
    };
    window.localStorage.setItem("user", JSON.stringify(userData));
    mutate("user", userData);
    return;
  };

  const logout = () => {
    window.localStorage.removeItem("user");
    mutate("user", undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContext => React.useContext(AuthContext);
