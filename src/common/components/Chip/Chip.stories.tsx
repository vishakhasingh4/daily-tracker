import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "./index";

export default {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const smallChip = Template.bind({});
export const mediumChip = Template.bind({});
export const largeChip = Template.bind({});

smallChip.args = {
  text: "Project 1",
  size: "small",
  color: "primary",
};

mediumChip.args = {
  text: "Project 2",
  size: "medium",
  color: "default",
};

largeChip.args = {
  text: "Project 3",
  size: "large",
  color: "default",
};
