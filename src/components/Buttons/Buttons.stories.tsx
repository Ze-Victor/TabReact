import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Buttons } from "./Buttons";

export default {
  title: "Buttons",
  component: Buttons,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => (
  <Buttons {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Buttons",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Buttons",
};

export const Large = Template.bind({});
Large.args = {
  text: "Buttons",
};

export const Small = Template.bind({});
Small.args = {
  text: "Buttons",
};
