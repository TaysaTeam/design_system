import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    variant: "primary",
    size: "medium",
    checked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
