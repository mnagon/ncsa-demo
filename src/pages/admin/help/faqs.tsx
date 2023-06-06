import React from "react";
import { Space, Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import { requireAdmin } from "../../../utils";
import { BackButton } from "../../../components/back-button";
import { FaqsEditor } from "../../../components/help";

const AdminHelpFaqs: React.FC = () => {
  const [faqs, setFaqs] = React.useState<
    { question: string; answer: string }[]
  >([]);

  const getFreshFaq = () => {
    return {
      question: "",
      answer: "",
    };
  };

  const addFaq = () => {
    setFaqs((prev) => {
      return [...prev, getFreshFaq()];
    });
  };

  const removeFaq = (index: number) => {
    setFaqs((prev) => {
      const updatedFaqs = [...prev];
      updatedFaqs.splice(index, 1);
      return updatedFaqs;
    });
  };

  const updateFaq = (
    index: number,
    form: { question: string; answer: string }
  ) => {
    setFaqs((prev) => {
      Object.assign(prev[index], form);
      return [...prev];
    });
  };

  return (
    <>
      <div>
        <BackButton to="/admin/help" />
      </div>
      <Breadcrumb
        className="mb-5"
        items={[
          {
            title: <Link to="/admin/help">Help and Support</Link>,
          },
          {
            title: <span className="font-semibold text-primary">FAQs</span>,
          },
        ]}
      />
      <Space direction="vertical" className="mb-5 w-full" size={20}>
        {faqs.map((faq, index) => (
          <FaqsEditor
            title={`Question ${index + 1}`}
            key={index}
            value={faq}
            onChange={(e) => updateFaq(index, e)}
            onDelete={() => removeFaq(index)}
          />
        ))}
      </Space>
      <div className="flex justify-end">
        <Button size="large" onClick={addFaq}>
          Add new Q&A
        </Button>
      </div>
    </>
  );
};

export default requireAdmin(AdminHelpFaqs);
