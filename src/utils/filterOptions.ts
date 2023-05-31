import type { SelectProps } from "antd/es/select";

export const filterOption: SelectProps["filterOption"] = (input, option) =>
  String(option?.label ?? "")
    .toLowerCase()
    .includes(input.toLowerCase());
