import React from "react";
import { requireAuth } from "../../utils";
import { Title } from "../../components/title";
import { Card } from "../../components/card";

const UserAbount: React.FC = () => {
  return (
    <Card>
      <header className="border-b border-l-0 border-r-0 border-t-0 border-dashed border-[#BFBFC7] px-10 py-5">
        <Title>About NCSA CTI</Title>
      </header>
      <div className=" h-96" />
    </Card>
  );
};

export default requireAuth(UserAbount);
