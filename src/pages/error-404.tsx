import React from "react";
import { requireAuth } from "../utils";

const Error404: React.FC = () => {
  return <>Error 404 Not found</>;
};

export default requireAuth(Error404);
