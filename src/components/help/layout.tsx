import React from "react";
import { HelpNavigation } from "./navigation";
import { Title } from "../title";
import { Card, CardBody } from "../card";

export const HelpLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <Title>Help and Support</Title>
        <HelpNavigation />
      </header>
      <Card>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
};
