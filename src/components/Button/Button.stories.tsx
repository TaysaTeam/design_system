import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import './_button.module.scss';

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Test Button",
  },
};
