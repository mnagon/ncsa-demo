import React from "react";
import { requireAdmin } from "../../../utils";

const AdminIncidents: React.FC = () => {
  return <>Admin Incidents</>;
};

export default requireAdmin(AdminIncidents);
