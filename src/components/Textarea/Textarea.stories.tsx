import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const containerStyle = {
  width: "322px",
  margin: "0 auto",
};

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    disabled: { control: "boolean" },
    leftIconName: {
      control: { type: "select" },
      options: ["search", "remove"],
    },
    rightIconName: {
      control: { type: "select" },
      options: ["search", "remove"],
    },
    helperText: { control: "text" },
    rows: { control: "number" },
  },
  decorators: [
    (Story) => (
      <div style={containerStyle}>
        <Story />
      </div>
    ),
  ],
  args: {
    leftIconName: "search",
    rightIconName: "remove",
    helperText: "متن کمکی",
    rows: 4,
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Enable: Story = {
  args: {
    label: "تایتل",
    placeholder: "متن طولانی...",
    helperText: "متن کمکی",
  },
};

export const ErrorState: Story = {
  args: {
    label: "تایتل",
    error: "متن کمکی",
    placeholder: "متن طولانی...",
  },
};

export const Disabled: Story = {
  args: {
    label: "تایتل",
    disabled: true,
    placeholder: "متن طولانی...",
    helperText: "متن کمکی",
  },
};