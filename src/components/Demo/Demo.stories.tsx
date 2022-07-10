import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Demo from "./Demo";

export default {
  title: "Example/HeaderMy",
  component: Demo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Demo>;

const Template: ComponentStory<typeof Demo> = () => <Demo />;

export const LoggedIn = Template.bind({});
