import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import Router from "./router";
import { AuthProvider } from "./contexts/useAuth";
import { theme } from "./constants/antd-config";
import { Layout } from "./components/layout";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;
