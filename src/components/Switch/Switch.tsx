import React, { useState } from "react";
import styles from "./_switch.module.scss";
import clsx from "clsx";
import { SwitchProps } from "./types";

const Switch: React.FC<SwitchProps> = ({
  variant = "primary",
  size = "medium",
  checked = false,
  disabled = false,
  className = "",
  onChange,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newChecked = e.target.checked;
      setIsChecked(newChecked);
      onChange?.(e);
    }
  };

  const switchClasses = clsx(
    styles.switch,
    styles[`switch-${variant}`],
    styles[`switch-${size}`],
    {
      [styles["switch-checked"]]: isChecked,
      [styles["switch-disabled"]]: disabled,
      [styles["switch-hover"]]: isHovered && !disabled,
      [styles["switch-focus"]]: isFocused && !disabled,
    },
    className
  );

  return (
    <label
      className={switchClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles["switch-input"]}
      />
      <span className={styles["switch-slider"]} />
    </label>
  );
};

export default Switch;
