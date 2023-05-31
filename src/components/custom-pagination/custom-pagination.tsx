import React from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./custom-pagination.style.css";

export const CustomPagination: React.FC<PaginationProps> = (props) => {
  const { current, pageSize, total } = props;

  const itemRender: PaginationProps["itemRender"] = (page, type, element) => {
    const isActive = page === current;
    const lastPage = Math.ceil((total ?? 1) / (pageSize ?? 1));
    switch (type) {
      case "page":
        return (
          <a
            rel="nofollow"
            className={`flex h-full w-full items-center rounded border border-solid
            border-[#EAEAEA] ${
              isActive ? "bg-primary text-white" : "bg-white"
            }`}
          >
            {page}
          </a>
        );
      case "prev":
        return current === 1 ? null : (
          <div
            className="flex h-full items-center rounded border border-solid
        border-[#EAEAEA] bg-white px-3"
          >
            <LeftOutlined /> Previous
          </div>
        );
      case "next":
        return current === lastPage ? null : (
          <div
            className="flex h-full items-center rounded border border-solid
          border-[#EAEAEA] bg-white px-3"
          >
            Next <RightOutlined />
          </div>
        );
      default:
        return element;
    }
  };

  return (
    <Pagination
      showSizeChanger={false}
      className="custom-pagination"
      {...props}
      itemRender={itemRender}
    />
  );
};
