import { PropsWithChildren } from "react";
import { IconName } from "../Icon";

type Variant = "primary" | "secondary";
type type = "contained" | "outlined" | "text";
type size = "large" | "medium" | "small";

export type ButtonProps = PropsWithChildren & {
  label: string;
  variant: Variant;
  type?: type;
  size?: size;
  disabled?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  className?: string;
};
