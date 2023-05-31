import React from "react";
import { requireAuth } from "../../utils";
import { Title } from "../../components/title";

const UserDashboard: React.FC = () => {
  return (
    <>
      <header>
        <Title>Dashboard</Title>
      </header>
    </>
  );
};

export default requireAuth(UserDashboard);
