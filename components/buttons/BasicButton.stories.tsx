import React from "react";
import { BasicButton, ButtonSize } from "./BasicButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Basic Button",
  component: BasicButton,
} as ComponentMeta<typeof BasicButton>;

const Template: ComponentStory<typeof BasicButton> = (args) => (
  <BasicButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const OutlinedButton = Template.bind({});
Default.args = {
  isOutlined: true,
  children: "Outlined Button",
};

export const SmallButton = Template.bind({});
Default.args = {
  size: ButtonSize.SMALL,
  children: "Small Button",
};

export const OutlinedSmallButton = Template.bind({});
Default.args = {
  isOutlined: true,
  size: ButtonSize.SMALL,
  children: "Outlined Small Button",
};
