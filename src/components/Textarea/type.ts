import { ComponentPropsWithRef } from "react";

export type IconName = string;

export type TextareaProps = ComponentPropsWithRef<"textarea"> & {
  leftIconName?: IconName;
  rightIconName?: IconName;
  className?: string;
  label?: string;
  error?: any;
  helperText?: string;
  disabled?: boolean;
  rows?: number;
};
