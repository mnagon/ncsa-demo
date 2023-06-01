import React from "react";
import { Select, Space } from "antd";

export type PageSizeProps = {
  total: number;
  pageSize?: number;
  current?: number;
  onChange?: (pageSize: number) => void;
};

export const PageSize: React.FC<PageSizeProps> = (props) => {
  const { pageSize } = props;

  const sizeOptions = React.useMemo(() => {
    return [
      { value: 10, label: 10 },
      { value: 25, label: 25 },
      { value: 50, label: 50 },
      { value: 100, label: 100 },
    ];
  }, []);

  return (
    <Space>
      <Select defaultValue={pageSize} options={sizeOptions} />{" "}
      <span>Show 1-10 of 100 items</span>
    </Space>
  );
};

PageSize.defaultProps = {
  pageSize: 10,
  current: 1,
};
