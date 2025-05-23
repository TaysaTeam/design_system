import styles from "./_button.module.scss";

type Props = {
  label: string;
  variant?: "primary" | "secondary";
  type?: "contained" | "outlined" | "text";
  size?: "large" | "medium" | "small";
  disabled?: boolean;
};

export const Button = ({
  label,
  variant = "primary",
  type = "contained",
  size = "medium",
  disabled = false,
}: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[type]} ${styles[size]}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
