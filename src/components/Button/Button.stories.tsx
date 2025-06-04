import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import "./_button.module.scss";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    type: {
      options: ["contained", "outlined", "text", "tonal"],
      control: { type: "radio" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    leftIcon: {
      options: ["add"],
      control: { type: "select" },
    },
    rightIcon: {
      options: ["add"],
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryContained: Story = {
  args: {
    children: "Primary Contained",
    variant: "primary",
    style: "contained",
  },
};

export const PrimaryOutlined: Story = {
  args: {
    children: "Primary Outlined",
    variant: "primary",
    style: "outlined",
  },
};

export const PrimaryText: Story = {
  args: {
    children: "Primary Text",
    variant: "primary",
    style: "text",
  },
};

export const PrimaryTonal: Story = {
  args: {
    children: "Primary Tonal",
    variant: "primary",
    style: "tonal",
  },
};

// Secondary Buttons
export const SecondaryContained: Story = {
  args: {
    children: "Secondary Contained",
    variant: "secondary",
    style: "contained",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    children: "Secondary Outlined",
    variant: "secondary",
    style: "outlined",
  },
};

export const SecondaryText: Story = {
  args: {
    children: "Secondary Text",
    variant: "secondary",
    style: "text",
  },
};

export const SecondaryTonal: Story = {
  args: {
    children: "Secondary Tonal",
    variant: "secondary",
    style: "tonal",
  },
};

// Disabled States
export const DisabledContained: Story = {
  args: {
    children: "Disabled Contained",
    variant: "primary",
    style: "contained",
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  args: {
    children: "Disabled Outlined",
    variant: "primary",
    style: "outlined",
    disabled: true,
  },
};

export const DisabledText: Story = {
  args: {
    children: "Disabled Text",
    variant: "primary",
    style: "text",
    disabled: true,
  },
};

export const DisabledTonal: Story = {
  args: {
    children: "Disabled Tonal",
    variant: "primary",
    style: "tonal",
    disabled: true,
  },
};

export const WithleftIcon: Story = {
  args: {
    children: "Start Icon",
    variant: "primary",
    style: "contained",
    leftIcon: "add",
  },
};

export const WithrightIcon: Story = {
  args: {
    children: "End Icon",
    variant: "primary",
    style: "contained",
    rightIcon: "add",
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Both Icons",
    variant: "primary",
    style: "contained",
    leftIcon: "add",
    rightIcon: "add",
  },
};
