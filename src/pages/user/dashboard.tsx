import React from "react";
import { requireAuth } from "../../utils";
import { Title } from "../../components/title";
import { Row, Col } from "antd";
import {
  DiscoverThreat,
  ThreatRelationship,
  ThreatType,
  ThreatInformation,
  LastestNews,
} from "../../components/dashboard/user";
const UserDashboard: React.FC = () => {
  return (
    <>
      <header>
        <Title>Dashboard</Title>
      </header>
      <Row>
        <Col></Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col md={24} xl={12}>
          <DiscoverThreat />
        </Col>
        <Col md={24} xl={12}>
          <ThreatRelationship />
        </Col>
        <Col md={24} xl={12} xxl={8}>
          <ThreatType />
        </Col>
        <Col md={24} xl={12} xxl={8}>
          <ThreatInformation />
        </Col>
        <Col md={24} xl={12} xxl={8}>
          <LastestNews />
        </Col>
      </Row>
    </>
  );
};

export default requireAuth(UserDashboard);
