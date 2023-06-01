import React from "react";
import { Space, Typography } from "antd";
import Icon from "@ant-design/icons";
import { Envelope, Phone } from "../../../components/icons";
import { requireAuth } from "../../../utils";

const UserHelpContact: React.FC = () => {
  return (
    <>
      <h2 className="mt-0 text-2xl font-semibold text-primary">
        Contact information for support
      </h2>
      <Typography.Paragraph className="text-xl font-medium">
        สํานักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.)
      </Typography.Paragraph>
      <Typography.Paragraph className="max-w-md">
        120 หมู่ 3 อาคารรัฐประศาสนภักดี (อาคารบี) ชั้น 7
        ศูนย์ราชการเฉลิมพระเกียรติ 80 พรรษา 5 ธันวาคม 2550 ถนนแจ้งวัฒนะ
        แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพฯ 10210
      </Typography.Paragraph>
      <Space direction="vertical">
        <Space>
          <Icon component={Envelope} /> <span>ncert@ncsa.or.th</span>
        </Space>
        <Space>
          <Icon component={Phone} /> <span>02 142 6888</span>
        </Space>
      </Space>
    </>
  );
};

export default requireAuth(UserHelpContact);
