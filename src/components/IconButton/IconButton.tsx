import clsx from "clsx";
import { Icon, IconName } from "../Icon";
import styles from "./_iconbutton.module.scss";
import { IconButtonProps } from "./types";

export const IconButton = ({
  icon,
  variant = "primary",
  type = "contained",
  size = "medium",
  disabled = false,
  className,
  ...rest
}: IconButtonProps) => {
  const classes = clsx(
    styles.button,
    styles.iconButton,
    styles[variant],
    styles[type],
    styles[size],
    className
  );

  return (
    <button className={classes} disabled={disabled} {...rest}>
      <Icon name={icon as IconName} color="currentColor" w={24} h={24} />
    </button>
  );
};
