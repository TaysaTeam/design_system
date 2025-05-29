import React, {
  ComponentPropsWithRef,
  forwardRef,
  useState,
  useEffect,
  useRef,
} from "react";
import { clsx } from "clsx";
import styles from "./_input.module.scss";
import { Icon, IconName } from "../Icon";

type Size = "small" | "medium" | "large";

type InputProps = ComponentPropsWithRef<"input"> & {
  inputSize?: Size;
  leftIconName?: IconName;
  rightIconName?: IconName;
  className?: string;
  label?: string;
  error?: any;
  helperText?: string;
  disabled?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = "medium",
      leftIconName,
      rightIconName,
      className,
      label,
      error,
      helperText,
      disabled = false,
      value,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFloating, setIsFloating] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setIsFloating(
        !!(isFocused || value || (inputRef.current && inputRef.current.value))
      );
    }, [isFocused, value]);

    return (
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          {leftIconName && (
            <span
              className={clsx(styles.leftIcon, disabled && styles.disabled)}
            >
              <Icon name={leftIconName} color="currentColor" w={24} h={24} />
            </span>
          )}

          <input
            ref={(node) => {
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }}
            className={clsx(
              styles.input,
              styles[inputSize],
              error && styles.errorBorder,
              disabled && styles.disabled,
              leftIconName && styles.hasLeftIcon,
              (rightIconName || error) && styles.hasRightIcon,
              isFloating && styles.hasValue,
              className
            )}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true);
              rest.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              rest.onBlur?.(e);
            }}
            value={value}
            {...rest}
            placeholder={label ? " " : rest.placeholder}
          />

          {label && (
            <label
              className={clsx(
                styles.label,
                error && styles.errorLabel,
                isFloating && styles.floating,
                leftIconName && styles.hasLeftIconLabel,
                (rightIconName || error) && styles.hasRightIconLabel,
                disabled && styles.disabledLabel
              )}
              onClick={() => inputRef.current?.focus()}
            >
              {label}
            </label>
          )}

          {(error || rightIconName) && (
            <span
              className={clsx(styles.rightIcon, disabled && styles.disabled)}
            >
              <Icon
                name={error ? "removeRed" : rightIconName!}
                color={error ? "#D92D20" : "currentColor"}
                w={24}
                h={24}
              />
            </span>
          )}
        </div>
        {(error || helperText) && (
          <div
            className={clsx(
              styles.helperText,
              error && styles.error,
              isFocused && !error && styles.focused,
              disabled && styles.disabled
            )}
          >
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";