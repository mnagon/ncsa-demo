import React from "react";
import { requireAdmin } from "../../../utils";

const AdminUsersCreate: React.FC = () => {
  return <>Admin Users Create</>;
};

export default requireAdmin(AdminUsersCreate);
