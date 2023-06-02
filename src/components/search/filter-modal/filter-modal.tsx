import React from "react";
import { Modal, Space, Form, DatePicker, Button } from "antd";
import type { ButtonProps, ModalProps } from "antd";
import { CustomSliderRage } from "../../custom-slider-range";

import "./filter-modal.style.css";

export type SearchFilterModalProps = {
  msg?: string;
} & ModalProps;

export const SearchFilterModal: React.FC<SearchFilterModalProps> = (props) => {
  const { onOk, onCancel } = props;
  return (
    <Modal
      className="search-filter-modal"
      centered
      {...props}
      footer={null}
      closable={false}
    >
      <header className="border-b border-l-0 border-r-0 border-t-0 border-solid border-[#B9B9B9] px-6 py-5">
        <h3 className="m-0 text-2xl font-semibold text-primary">
          Advanced search
        </h3>
      </header>
      <div className="px-6 py-5">
        <Form>
          <Space direction="vertical">
            <label className="block font-semibold">
              Creation date:
              <DatePicker.RangePicker
                className="mt-1 w-full"
                format="DD/MM/YYYY"
                size="large"
              />
            </label>
            <label className="block font-semibold">
              Last update date:
              <DatePicker.RangePicker
                className="mt-1 w-full"
                format="DD/MM/YYYY"
                size="large"
              />
            </label>
            <label className="block font-semibold">
              Government score:
              <CustomSliderRage range />
            </label>
            <label className="block font-semibold">
              Telecom score:
              <CustomSliderRage range />
            </label>
            <label className="block font-semibold">
              National security agency score:
              <CustomSliderRage range />
            </label>
            <label className="block font-semibold">
              Healthcare score:
              <CustomSliderRage range />
            </label>
            <label className="block font-semibold">
              Financial score:
              <CustomSliderRage range />
            </label>
            <label className="block font-semibold">
              Transportation score:
              <CustomSliderRage range />
            </label>
            <label className="block font-semibold">
              Others enterprise score:
              <CustomSliderRage range />
            </label>
          </Space>

          <footer className="mt-8 flex justify-between">
            <Button type="text" className="relative -left-3 text-[#4246E9]">
              Clear filters
            </Button>
            <Space>
              <Button size="large" onClick={onCancel as ButtonProps["onClick"]}>
                Cancel
              </Button>
              <Button
                size="large"
                onClick={onOk as ButtonProps["onClick"]}
                type="primary"
              >
                Apply
              </Button>
            </Space>
          </footer>
        </Form>
      </div>
    </Modal>
  );
};
