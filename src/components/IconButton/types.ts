import { PropsWithChildren } from "react";
import { IconName } from "../Icon";

export type IconButtonVariant = "primary" | "secondary";
export type IconButtonType = "contained" | "outlined" | "text";
export type IconButtonSize = "large" | "medium" | "small";

export type IconButtonProps = PropsWithChildren & {
  variant?: IconButtonVariant;
  type?: IconButtonType;
  size?: IconButtonSize;
  icon?: IconName;
  disabled?: boolean;
  className?: string;
};
