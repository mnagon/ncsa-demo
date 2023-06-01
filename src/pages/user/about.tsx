import React from "react";
import { requireAuth } from "../../utils";
import { Title } from "../../components/title";
import { Card } from "../../components/card";
import LOGO_IMAGE from "../../assets/images/logo.svg";
import IMAGE_PLACEHOLDER from "../../assets/images/image-placeholder.png";

const UserAbount: React.FC = () => {
  return (
    <Card>
      <header className="border-b border-l-0 border-r-0 border-t-0 border-dashed border-[#BFBFC7] px-10 pb-3 pt-6">
        <Title>About NCSA CTI</Title>
      </header>
      <Card className="border-0 p-10">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:gap-8">
          <div className="w-100 h-100 my-auto flex items-center justify-center border border-solid border-[#D8D8D8] bg-[#F5F5F5]">
            <img className="mx-20 my-16 w-36" src={LOGO_IMAGE} alt="logo" />
          </div>
          <p className="m-0 my-auto leading-7 text-[#111111]">
            พระราชบัญญัติการรักษาความมั่นคงปลอดภัยไซเบอร์ พ.ศ. 2562
            มีผลใช้บังคับเมื่อวันที่ 28 พฤษภาคม 2562 โดยมีวัตถุประสงค์เพื่อ
            กำหนดนโยบาย มาตรการ แนวทางการรักษาความมั่นคงปลอดภัยไซเบอร์ สำหรับ
            หน่วยงานภาครัฐและภาคเอกชนที่เป็นโครงสร้างพื้นฐาน สำคัญทางสารสนเทศ
            ในการป้องกัน รับมือ และลด ความเสี่ยงจากภัยคุกคามทางไซเบอร์
            มิให้เกิดผลกระทบต่อความมั่นคงของรัฐ และความสงบเรียบร้อย ภายในประเทศ
            รวมทั้งให้
            สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.)
            เป็นหน่วยงานรับผิดชอบงานตามพระราชบัญญัติ
            และประสานการปฏิบัติงานร่วมกันทั้งภาครัฐและเอกชน
            ไม่ว่าในสถานการณ์ทั่วไป
            หรือสถานการณ์ที่เป็นภัยต่อความมั่นคงอย่างร้ายแรง
            อันจะทำให้การป้องกันและ การรับมือกับภัยคุกคามทางไซเบอร์เป็นไปอย่าง
            มีประสิทธิภาพ
          </p>
        </div>
        <div className="mb-6">
          <h2 className="mb-2 font-semibold text-primary">
            Purpose and goals of the application
          </h2>
          <p className="m-0 my-auto text-[#111111]">
            Lorem ipsum dolor sit amet consectetur. Porta facilisis semper nam
            faucibus amet commodo. Aliquam nunc euismod et integer urna eu enim
            quis. Curabitur sed at lacus at quis lectus. Senectus sed lobortis
            egestas odio ac urna gravida aenean ut. Ut vel elementum dolor donec
            consectetur consequat vestibulum nisl egestas. Id dignissim
            fermentum enim ac aliquet in sem. Neque iaculis consequat viverra
            quam ac. Elementum maecenas pharetra sit duis nam mattis.
            Sollicitudin nisl mauris arcu diam velit at ornare lacus.
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-primary">
            Partnerships and collaborations
          </h2>
          <div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-6 lg:grid-cols-2">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <img
                  className="object-cover "
                  src={IMAGE_PLACEHOLDER}
                  alt="blank"
                />
                <p className="m-0 my-auto">
                  Lorem ipsum dolor sit amet consectetur. Porta facilisis semper
                  nam faucibus amet commodo. Aliquam nunc euismod et integer
                  urna eu enim quis.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <img
                  className="object-cover "
                  src={IMAGE_PLACEHOLDER}
                  alt="blank"
                />
                <p className="m-0 my-auto">
                  Lorem ipsum dolor sit amet consectetur. Porta facilisis semper
                  nam faucibus amet commodo. Aliquam nunc euismod et integer
                  urna eu enim quis.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <img
                  className="object-cover "
                  src={IMAGE_PLACEHOLDER}
                  alt="blank"
                />
                <p className="m-0 my-auto">
                  Lorem ipsum dolor sit amet consectetur. Porta facilisis semper
                  nam faucibus amet commodo. Aliquam nunc euismod et integer
                  urna eu enim quis.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <img
                  className="object-cover "
                  src={IMAGE_PLACEHOLDER}
                  alt="blank"
                />
                <p className="m-0 my-auto">
                  Lorem ipsum dolor sit amet consectetur. Porta facilisis semper
                  nam faucibus amet commodo. Aliquam nunc euismod et integer
                  urna eu enim quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Card>
  );
};

export default requireAuth(UserAbount);
