import React from "react";
import { useParams } from "react-router-dom";
import { requireAuth } from "../../../utils";

const UserIncidentsUpdate: React.FC = () => {
  const { id } = useParams();

  return <>User Incidents Update {id}</>;
};

export default requireAuth(UserIncidentsUpdate);
