import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { IconName } from "../Icon";

type Variant = "primary" | "secondary";
type Style = "contained" | "outlined" | "text";
type Size = "large" | "medium" | "small";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  style?: Style;
  size?: Size;
  disabled?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  className?: string;
};
