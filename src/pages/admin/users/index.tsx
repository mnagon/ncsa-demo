import React from "react";
import { requireAdmin } from "../../../utils";

const AdminUsers: React.FC = () => {
  return <>Admin Users</>;
};

export default requireAdmin(AdminUsers);
