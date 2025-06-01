import { HTMLAttributes } from "react";

type SwitchVariant = "primary" | "secondary";
type SwitchSize = "small" | "medium";

export type SwitchProps = {
  variant?: SwitchVariant;
  size?: SwitchSize;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLLabelElement>;
