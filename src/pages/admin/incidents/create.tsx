import React from "react";
import { requireAdmin } from "../../../utils";

const AdminIncidentsCreate: React.FC = () => {
  return <>Admin Incidents Create</>;
};

export default requireAdmin(AdminIncidentsCreate);
