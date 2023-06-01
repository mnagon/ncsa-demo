import React from "react";
import { Title } from "../../components/title";
import { Card } from "../../components/card";
import { requireAuth } from "../../utils";

const UserOpenAPI: React.FC = () => {
  return (
    <Card>
      <header className="border-b border-l-0 border-r-0 border-t-0 border-dashed border-[#BFBFC7] px-10 pb-3 pt-6">
        <Title>OpenAPI</Title>
      </header>
      <div className=" h-96" />
    </Card>
  );
};

export default requireAuth(UserOpenAPI);
