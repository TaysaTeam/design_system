import { ComponentPropsWithRef } from "react";

export type Size = "small" | "medium" | "large";
export type IconName = string;

export type InputProps = ComponentPropsWithRef<"input"> & {
  inputSize?: Size;
  leftIconName?: IconName;
  rightIconName?: IconName;
  className?: string;
  label?: string;
  error?: any;
  helperText?: string;
  disabled?: boolean;
};