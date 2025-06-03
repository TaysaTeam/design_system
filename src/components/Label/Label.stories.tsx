import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    color: {
      control: "select",
      options: [
        "brand",
        "green",
        "teal",
        "blue-dark",
        "violet",
        "fuchsia",
        "pink",
        "rose",
        "orange",
        "yellow",
      ],
      table: {
        defaultValue: { summary: "brand" },
      },
    },
    variant: {
      control: "radio",
      options: ["fill", "outline"],
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      table: {
        defaultValue: { summary: "medium" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "متن لیبل",
    size: "medium",
  },
};
