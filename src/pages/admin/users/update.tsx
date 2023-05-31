import React from "react";
import { requireAdmin } from "../../../utils";

const AdminUsersUpdate: React.FC = () => {
  return <>Admin Users Update</>;
};

export default requireAdmin(AdminUsersUpdate);
