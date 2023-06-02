import React from "react";
import { Button } from "antd";
import Icon from "@ant-design/icons";
import { Edit } from "../icons";
import { Card, CardBody } from "../card";
import { Title } from "../title";

export type UserViewPorps = {
  data: any;
  onEdit?: () => void;
};

export const UserView: React.FC<UserViewPorps> = ({ onEdit }) => {
  return (
    <Card>
      <CardBody>
        <header className="flex justify-between">
          <Title>User Profile</Title>
          <Button onClick={onEdit}>
            <Icon component={Edit} />
            Edit User Profile
          </Button>
        </header>
        <Headline>test</Headline>
      </CardBody>
    </Card>
  );
};

/**
 * Sub-components
 */

const Headline: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className="mb-2 mt-0 text-base font-medium">{children}</h3>
);
