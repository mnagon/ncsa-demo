import React from "react";
import Icon from "@ant-design/icons";

import { Dashboard } from "../../components/icons";
import { Title } from "../../components/title";
import { requireAdmin } from "../../utils";

const AdminDashboard: React.FC = () => {
  return (
    <>
      <header>
        <Title>
          <Icon className="mr-3" component={Dashboard} />
          Admin Dashboard
        </Title>
      </header>
    </>
  );
};

export default requireAdmin(AdminDashboard);
