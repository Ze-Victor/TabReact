import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pane } from "./Pane";

export default {
  title: "Pane",
  component: Pane,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Pane>;

const Template: ComponentStory<typeof Pane> = (args) => <Pane {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Pane",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Pane",
};

export const Large = Template.bind({});
Large.args = {
  text: "Pane",
};

export const Small = Template.bind({});
Small.args = {
  text: "Pane",
};
