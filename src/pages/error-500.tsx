import React from "react";
import { requireAuth } from "../utils";

const Error500: React.FC = () => {
  return <>Error 500 Server Error</>;
};

export default requireAuth(Error500);
