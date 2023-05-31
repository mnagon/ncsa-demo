import React from "react";
import { requireAdmin } from "../../../utils";

const AdminAlertsUpdate: React.FC = () => {
  return <>Admin Alerts Update</>;
};

export default requireAdmin(AdminAlertsUpdate);
