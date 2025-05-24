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
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryContained: Story = {
  args: {
    label: "Primary Contained",
    variant: "primary",
    type: "contained",
  },
};

export const PrimaryOutlined: Story = {
  args: {
    label: "Primary Outlined",
    variant: "primary",
    type: "outlined",
  },
};

export const PrimaryText: Story = {
  args: {
    label: "Primary Text",
    variant: "primary",
    type: "text",
  },
};

// Secondary Buttons
export const SecondaryContained: Story = {
  args: {
    label: "Secondary Contained",
    variant: "secondary",
    type: "contained",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    label: "Secondary Outlined",
    variant: "secondary",
    type: "outlined",
  },
};

export const SecondaryText: Story = {
  args: {
    label: "Secondary Text",
    variant: "secondary",
    type: "text",
  },
};

// Disabled States
export const DisabledContained: Story = {
  args: {
    label: "Disabled Contained",
    variant: "primary",
    type: "contained",
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  args: {
    label: "Disabled Outlined",
    variant: "primary",
    type: "outlined",
    disabled: true,
  },
};

export const DisabledText: Story = {
  args: {
    label: "Disabled Text",
    variant: "primary",
    type: "text",
    disabled: true,
  },
};
