import React from "react";
import { requireAdmin } from "../../../utils";

const AdminHelpFaqs: React.FC = () => {
  return <>Admin Help Faqs</>;
};

export default requireAdmin(AdminHelpFaqs);
