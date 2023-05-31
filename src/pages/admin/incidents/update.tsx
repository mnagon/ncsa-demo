import React from "react";
import { requireAdmin } from "../../../utils";

const AdminIncidentsUpdate: React.FC = () => {
  return <>Admin Incidents Update</>;
};

export default requireAdmin(AdminIncidentsUpdate);
