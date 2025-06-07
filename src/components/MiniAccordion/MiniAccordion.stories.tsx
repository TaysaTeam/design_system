import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { MiniAccordion } from "./MiniAccordion";

const meta: Meta<typeof MiniAccordion> = {
  title: "Components/MiniAccordion",
  component: MiniAccordion,
  argTypes: {
    isOpen: { control: "boolean" },
    onToggle: { action: "toggled" },
  },
};
export default meta;

export const Interactive: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MiniAccordion
      title="انتخاب دقیق زمان و سرویس دلخواه"
      desc="روز، ساعت و سرویسی که می‌خواهید را به سادگی انتخاب می‌کنید؛ همه‌چیز شفاف و جلوی چشم شماست."
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    />
  );
};
