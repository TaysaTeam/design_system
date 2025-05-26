import { Icon } from "../Icon";
import styles from "./_button.module.scss";
import { ButtonProps } from "./types";

export const Button = ({
  children,
  variant = "primary",
  type = "contained",
  size = "medium",
  disabled = false,
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) => {
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
