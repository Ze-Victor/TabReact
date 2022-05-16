import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tab } from "./Tab";

export default {
  title: "Tab",
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabProp: [
    {
      textButton: "Button 1",
      textPane: "Description 1",
    },
    {
      textButton: "Button 2",
      textPane: "Description 2",
    },
    {
      textButton: "Button 3",
      textPane: "Description 3",
    },
  ],
};
