import React from "react";
import { requireAdmin } from "../../utils";

const AdminAPIKey: React.FC = () => {
  return <>Admin API Key</>;
};

export default requireAdmin(AdminAPIKey);
