import React from "react";
import { Link } from "react-router-dom";
import Icon from "@ant-design/icons";
import { Title } from "../../../components/title";
import { Support } from "../../../components/icons";
import { requireAdmin } from "../../../utils";
import { Card } from "../../../components/card";

const AdminHelp: React.FC = () => {
  return (
    <>
      <header className="mb-4">
        <Title>
          <Icon className="mr-3" component={Support} />
          Help and Support
        </Title>
      </header>
      <div className="flex flex-wrap gap-6">
        <HelpCard to="/admin/help/faqs">FAQs</HelpCard>
        <HelpCard to="/admin/help/how-to">How-to guides</HelpCard>
      </div>
    </>
  );
};

export default requireAdmin(AdminHelp);

/**
 * Sub-components
 */

const HelpCard: React.FC<React.PropsWithChildren<{ to: string }>> = ({
  children,
  to,
}) => (
  <Link to={to} className="no-underline">
    <Card className="flex h-64 w-96 cursor-pointer items-center justify-center text-3xl font-medium text-primary hover:bg-slate-50 hover:shadow-lg">
      {children}
    </Card>
  </Link>
);
