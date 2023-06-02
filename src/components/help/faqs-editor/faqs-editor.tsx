import React from "react";
import { Button, Collapse, Form, Input, Typography } from "antd";
import Icon from "@ant-design/icons";
import "./faqs-editor.style.css";
import { ChevronDown, Edit, Trash } from "../../icons";
import { Card } from "../../card";

type Mode = "edit" | "view";

export type FaqsEditorProps = {
  title: string;
  value: { question: string; answer: string };
  onChange?: (form: { question: string; answer: string }) => void;
  onDelete?: () => void;
};

export const FaqsEditor: React.FC<FaqsEditorProps> = (props) => {
  const {
    title,
    value: { question, answer },
    onChange,
    onDelete,
  } = props;

  const [mode, setMode] = React.useState<Mode>("view");
  const [form] = Form.useForm<{ question: string; answer: string }>();

  const handleSubmit = (form: { question: string; answer: string }) => {
    onChange?.(form);
    setMode("view");
  };

  return (
    <Card className="px-8 py-2">
      <Collapse ghost>
        <Collapse.Panel
          header={title}
          key="1"
          className="faqs-editor-panel"
          showArrow={false}
          extra={
            <Icon
              className="faqs-editor-panel__icon relative transition-all"
              component={ChevronDown}
            />
          }
        >
          {mode === "edit" ? (
            <Form
              form={form}
              onFinish={handleSubmit}
              initialValues={{
                question,
                answer,
              }}
            >
              <label className="mb-1.5 block font-semibold ">Question</label>
              <Form.Item
                name="question"
                rules={[{ required: true, message: "กรุณาระบุ Question" }]}
              >
                <Input placeholder="Question" />
              </Form.Item>
              <label className="mb-1.5 block font-semibold ">Answer</label>
              <Form.Item
                name="answer"
                rules={[{ required: true, message: "กรุณาระบุ Answer" }]}
              >
                <Input.TextArea autoSize placeholder="Answer" />
              </Form.Item>
              <div className="flex justify-end">
                <Button
                  className="block h-10 px-6 text-xl"
                  type="primary"
                  htmlType="submit"
                >
                  Save Changed
                </Button>
              </div>
            </Form>
          ) : (
            <>
              <label className="mb-1.5 block font-semibold ">Question</label>
              <Typography.Paragraph
                className={question ? "" : "text-slate-400"}
              >
                {question || "-- question --"}
              </Typography.Paragraph>
              <label className="mb-1.5 block font-semibold">Answer</label>
              <Typography.Paragraph
                className={`whitespace-pre-wrap ${
                  answer ? "" : "text-slate-400"
                }`}
              >
                {answer || "-- answer --"}
              </Typography.Paragraph>
              <div className="flex justify-end space-x-2">
                <Button
                  onClick={() => setMode("edit")}
                  icon={<Icon component={Edit} />}
                  shape="circle"
                  className="border-0 shadow-none"
                />
                <Button
                  onClick={onDelete}
                  icon={<Icon component={Trash} />}
                  shape="circle"
                  className="border-0 shadow-none"
                />
              </div>
            </>
          )}
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
};
