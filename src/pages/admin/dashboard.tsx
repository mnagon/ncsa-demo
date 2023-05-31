import React from "react";
import { requireAdmin } from "../../utils";

const AdminDashboard: React.FC = () => {
  return <>Admin Dashboard</>;
};

export default requireAdmin(AdminDashboard);
