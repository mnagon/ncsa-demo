import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";

import "./custom-table.style.css";

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
