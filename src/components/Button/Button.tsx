import { PropsWithChildren } from "react";
import { Icon, IconName } from "../Icon";
import styles from "./_button.module.scss";

type Props = PropsWithChildren & {
  label: string;
  variant?: "primary" | "secondary";
  type?: "contained" | "outlined" | "text";
  size?: "large" | "medium" | "small";
  disabled?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
};

export const Button = ({
  children,
  variant = "primary",
  type = "contained",
  size = "medium",
  disabled = false,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  const classes = `${styles.button} ${styles[variant]} ${styles[type]} ${styles[size]}`;

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {leftIcon && (
        <Icon
          name={leftIcon}
          color="currentColor"
          className={styles.leftIcon}
        />
      )}
      {children}
      {rightIcon && (
        <Icon
          name={rightIcon}
          color="currentColor"
          className={styles.rightIcon}
        />
      )}
    </button>
  );
};
