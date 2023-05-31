import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import { Card } from "../../../components/card";
import { BackButton } from "../../../components/back-button";
import { requireAuth } from "../../../utils";
import { Title } from "../../../components/title";
import { IncidentForm } from "../../../components/incident";

const UserIncidentsCreate: React.FC = () => {
  return (
    <>
      <div>
        <BackButton to="/incidents" />
      </div>
      <Breadcrumb
        className="mb-5"
        items={[
          {
            title: <Link to="/incidents">Incident Management</Link>,
          },
          {
            title: (
              <span className="font-semibold text-primary">
                Submit Incident Case
              </span>
            ),
          },
        ]}
      />
      <Card>
        <header className="border-b border-l-0 border-r-0 border-t-0 border-dashed border-[#BFBFC7] px-10 py-5">
          <Title>Submit Incident Case</Title>
        </header>
        <IncidentForm />
      </Card>
    </>
  );
};

export default requireAuth(UserIncidentsCreate);
