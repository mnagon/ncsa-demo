import React from "react";
import { requireAdmin } from "../../../utils";
import { BackButton } from "../../../components/back-button";
import { Breadcrumb } from "antd";
import { UserView, UserForm } from "../../../components/user";
import { Link } from "react-router-dom";

type Mode = "view" | "edit";

const AdminUsersUpdate: React.FC = () => {
  const [mode, setMode] = React.useState<Mode>("view");

  const data = {
    fName: "Somsakorn",
    lName: "Srisa-ard",
    email: "somsakorn.s@mail.com",
    phone: "xxx-xxx-xxxx",
    role: "User",
    status: "INACTIVE",
  };

  return (
    <>
      <div>
        <BackButton to="/admin/users" />
      </div>
      <Breadcrumb
        className="mb-5"
        items={[
          {
            title: <Link to="/admin/users">User Management</Link>,
          },
          {
            title: (
              <span className="font-semibold text-primary">View user</span>
            ),
          },
        ]}
      />
      {mode === "view" ? (
        <UserView data={data} onEdit={() => setMode("edit")} />
      ) : (
        <UserForm />
      )}
    </>
  );
};

export default requireAdmin(AdminUsersUpdate);
