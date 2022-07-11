import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomButton from "./index";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const button = Template.bind({});

button.args = {
  onClick: () => console.log("hi"),
  children: "hello",
};
