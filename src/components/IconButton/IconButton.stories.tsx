import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import "./_iconbutton.module.scss";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "Components/IconButton",
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    type: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    icon: {
      options: ["iconButton"],
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const PrimaryContained: Story = {
  args: {
    icon: "iconButton",
    variant: "primary",
    type: "contained",
  },
};

export const PrimaryOutlined: Story = {
  args: {
    icon: "iconButton",
    variant: "primary",
    type: "outlined",
  },
};

export const PrimaryText: Story = {
  args: {
    icon: "iconButton",
    variant: "primary",
    type: "text",
  },
};

// Secondary Buttons
export const SecondaryContained: Story = {
  args: {
    icon: "iconButton",
    variant: "secondary",
    type: "contained",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    icon: "iconButton",
    variant: "secondary",
    type: "outlined",
  },
};

export const SecondaryText: Story = {
  args: {
    icon: "iconButton",
    variant: "secondary",
    type: "text",
  },
};

// Disabled States
export const DisabledContained: Story = {
  args: {
    icon: "iconButton",
    variant: "primary",
    type: "contained",
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  args: {
    icon: "iconButton",
    variant: "primary",
    type: "outlined",
    disabled: true,
  },
};

export const DisabledText: Story = {
  args: {
    icon: "iconButton",
    variant: "primary",
    type: "text",
    disabled: true,
  },
};
