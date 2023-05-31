import React from "react";
import { Space, Typography } from "antd";
import Icon from "@ant-design/icons";

import { requireAuth } from "../../../utils";

const Envelope: React.FC = () => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.6094 4.96094C18.7109 5.66406 17.5781 6.52344 13.5938 9.41406C12.8125 10 11.3672 11.2891 10 11.2891C8.59375 11.2891 7.1875 10 6.36719 9.41406C2.38281 6.52344 1.25 5.66406 0.351562 4.96094C0.195312 4.84375 0 4.96094 0 5.15625V13.125C0 14.1797 0.820312 15 1.875 15H18.125C19.1406 15 20 14.1797 20 13.125V5.15625C20 4.96094 19.7656 4.84375 19.6094 4.96094ZM10 10C10.8984 10.0391 12.1875 8.86719 12.8516 8.39844C18.0469 4.64844 18.4375 4.29688 19.6094 3.35938C19.8438 3.20312 20 2.92969 20 2.61719V1.875C20 0.859375 19.1406 0 18.125 0H1.875C0.820312 0 0 0.859375 0 1.875V2.61719C0 2.92969 0.117188 3.20312 0.351562 3.35938C1.52344 4.29688 1.91406 4.64844 7.10938 8.39844C7.77344 8.86719 9.0625 10.0391 10 10Z"
      fill="#25286F"
    />
  </svg>
);

const Phone: React.FC = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.2747 0.967564L15.2122 0.0300637C14.7825 -0.0871238 14.3137 0.147251 14.1184 0.576939L12.2434 4.95194C12.0872 5.34256 12.2044 5.77225 12.5169 6.04569L14.8997 7.99881C13.4934 10.9676 11.0325 13.4676 7.98561 14.9129L6.03248 12.5301C5.75904 12.2176 5.32936 12.1004 4.93873 12.2566L0.563732 14.1316C0.134044 14.3269 -0.0612683 14.7957 0.0168567 15.2254L0.954357 19.2879C1.07154 19.7176 1.42311 19.991 1.89186 19.991C11.8919 19.991 20.0169 11.9051 20.0169 1.866C20.0169 1.43631 19.7044 1.08475 19.2747 0.967564Z"
      fill="#25286F"
    />
  </svg>
);

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
