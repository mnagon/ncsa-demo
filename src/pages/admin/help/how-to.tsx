import React from "react";
import { requireAdmin } from "../../../utils";

const AdminHelpHowto: React.FC = () => {
  return <>Admin Help Howto</>;
};

export default requireAdmin(AdminHelpHowto);
