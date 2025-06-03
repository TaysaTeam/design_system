import React from "react";
import styles from "./_label.module.scss";
import clsx from "clsx";
import { Icon, IconName } from "../Icon";
import { LabelProps } from "./types";

const Label: React.FC<LabelProps> = ({
  children,
  color = "brand",
  variant = "fill",
  size = "medium",
  className = "",
  icon,
  ...rest
}) => {
  const labelClasses = clsx(
    styles.label,
    styles[`${variant}`],
    styles[`${color}-${variant}`],
    styles[`${size}`],
    className
  );
  return (
    <span className={labelClasses} {...rest}>
      {children}
      {icon && <Icon name={icon} color="currentColor" w={24} h={24} />}
    </span>
  );
};

export default Label;
