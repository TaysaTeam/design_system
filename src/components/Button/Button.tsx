import { Icon, IconName } from "../Icon";
import styles from "./_button.module.scss";

type Props = {
  label: string;
  variant?: "primary" | "secondary";
  type?: "contained" | "outlined" | "text";
  size?: "large" | "medium" | "small";
  disabled?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
};

export const Button = ({
  label,
  variant = "primary",
  type = "contained",
  size = "medium",
  disabled = false,
  leftIcon,
  rightIcon,
}: Props) => {
  const classes = `${styles.button} ${styles[variant]} ${styles[type]} ${styles[size]}`;

  return (
    <button className={classes} disabled={disabled}>
      {leftIcon && (
        <Icon
          name={leftIcon}
          color="currentColor"
          className={styles.leftIcon}
          w={24}
          h={24}
        />
      )}
      {label}
      {rightIcon && (
        <Icon
          name={rightIcon}
          color="currentColor"
          className={styles.rightIcon}
          w={24}
          h={24}
        />
      )}
    </button>
  );
};
