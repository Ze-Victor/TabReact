import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tab } from "./Tab";

export default {
  title: "Tab",
  component: Tab,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Tab",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Tab",
};

export const Large = Template.bind({});
Large.args = {
  text: "Tab",
};

export const Small = Template.bind({});
Small.args = {
  text: "Tab",
};
