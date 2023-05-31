import React from "react";
import { Collapse } from "antd";
import { HelpPanel } from "../../../components/help";
import { requireAuth } from "../../../utils";

const UserHelpFaqs: React.FC = () => {
  return (
    <>
      <h2 className="mt-0 text-2xl font-semibold text-primary">FAQs</h2>
      <Collapse accordion ghost>
        <HelpPanel
          key="1"
          header="Q: Lorem ipsum dolor sit amet consectetur. Neque ac pulvinar sed etiam eget rhoncus ultricies suspendisse."
          content="
          Lorem ipsum dolor sit amet consectetur. Nulla elit nunc turpis nullam
          pulvinar. Habitant mi pharetra at aliquam. Sed gravida nulla egestas
          amet a. Ipsum commodo ullamcorper egestas enim faucibus mattis donec
          pretium suspendisse. Dui tellus enim turpis ac commodo hendrerit. Libero
          amet leo pulvinar amet enim. Ultricies vestibulum arcu cras nunc nisl
          velit. Est porttitor sed ut risus mattis rhoncus. Arcu platea amet
          adipiscing at nisi."
        />
        <HelpPanel
          key="2"
          header="Q: Lorem ipsum dolor sit amet consectetur. Neque ac pulvinar sed etiam eget rhoncus ultricies suspendisse."
          content="
          Lorem ipsum dolor sit amet consectetur. Nulla elit nunc turpis nullam
          pulvinar. Habitant mi pharetra at aliquam. Sed gravida nulla egestas
          amet a. Ipsum commodo ullamcorper egestas enim faucibus mattis donec
          pretium suspendisse. Dui tellus enim turpis ac commodo hendrerit. Libero
          amet leo pulvinar amet enim. Ultricies vestibulum arcu cras nunc nisl
          velit. Est porttitor sed ut risus mattis rhoncus. Arcu platea amet
          adipiscing at nisi."
        />
        <HelpPanel
          key="3"
          header="Q: Lorem ipsum dolor sit amet consectetur. Neque ac pulvinar sed etiam eget rhoncus ultricies suspendisse."
          content="
          Lorem ipsum dolor sit amet consectetur. Nulla elit nunc turpis nullam
          pulvinar. Habitant mi pharetra at aliquam. Sed gravida nulla egestas
          amet a. Ipsum commodo ullamcorper egestas enim faucibus mattis donec
          pretium suspendisse. Dui tellus enim turpis ac commodo hendrerit. Libero
          amet leo pulvinar amet enim. Ultricies vestibulum arcu cras nunc nisl
          velit. Est porttitor sed ut risus mattis rhoncus. Arcu platea amet
          adipiscing at nisi."
        />
      </Collapse>
    </>
  );
};

export default requireAuth(UserHelpFaqs);
