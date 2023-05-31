import React from "react";
import { requireAdmin } from "../../../utils";

const AdminAlerts: React.FC = () => {
  return <>Admin Alerts</>;
};

export default requireAdmin(AdminAlerts);
