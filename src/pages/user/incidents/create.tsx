import React from "react";
import { requireAuth } from "../../../utils";

const UserIncidentsCreate: React.FC = () => {
  return <>User Incidents Create</>;
};

export default requireAuth(UserIncidentsCreate);
