import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";

import "./custom-table.style.css";

export const CustomTHead: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className, children }) => {
  return <div className={`custom-thead ${className}`}>{children}</div>;
};

CustomTHead.defaultProps = {
  className: "",
};

export const CustomTable: React.FC<TableProps<any>> = (props) => {
  return (
    <Table
      rootClassName="custom-table"
      {...props}
      pagination={false}
      showSorterTooltip={false}
      scroll={{ x: 1024 }}
    />
  );
};
