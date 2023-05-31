import React from "react";
import { requireAdmin } from "../../../utils";

const AdminHelp: React.FC = () => {
  return <>Admin Help</>;
};

export default requireAdmin(AdminHelp);
