import React from "react";
import { Modal, Space, Typography, Button } from "antd";
import type { ModalProps, ButtonProps } from "antd";

export type ConfirmModalProps = {
  headline?: string;
  message?: string;
  content?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
} & ModalProps;

export const ConfirmModal: React.FC<ConfirmModalProps> = (props) => {
  const {
    headline,
    message,
    content,
    cancelText,
    confirmText,
    onCancel,
    onOk,
  } = props;
  return (
    <Modal centered {...props} footer={null} closable={false}>
      <h3 className="mb-2 mt-8 text-center text-2xl font-semibold text-primary">
        {headline}
      </h3>
      <Typography.Paragraph className="mb-8 text-center">
        {message}
      </Typography.Paragraph>
      {content}
      <Space className="my-8 flex justify-center" size={16}>
        <Button
          className="block h-12 min-w-[176px] text-xl"
          onClick={onCancel as ButtonProps["onClick"]}
        >
          {cancelText}
        </Button>
        <Button
          className="block h-12 min-w-[176px] text-xl"
          type="primary"
          onClick={onOk as ButtonProps["onClick"]}
        >
          {confirmText}
        </Button>
      </Space>
    </Modal>
  );
};

ConfirmModal.defaultProps = {
  cancelText: "Cancel",
  confirmText: "Confirm",
  width: 500,
};
