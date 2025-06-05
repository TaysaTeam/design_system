import React, { forwardRef, useState, useEffect, useRef } from "react";
import { clsx } from "clsx";
import styles from "./_input.module.scss";
import { Icon, type IconName } from "../Icon";
import { InputProps } from "./type";

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
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      const hasValue =
        !!value || !!(inputRef.current && inputRef.current.value);
      setIsFloating(hasValue || isFocused);
    }, [value, isFocused]);

    return (
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          {leftIconName && (
            <span
              className={clsx(styles.leftIcon, disabled && styles.disabled)}
            >
              <Icon
                name={leftIconName as IconName}
                color="currentColor"
                w={24}
                h={24}
              />
            </span>
          )}

          <input
            ref={(node) => {
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
              inputRef.current = node;
            }}
            className={clsx(
              styles.input,
              styles[inputSize],
              error && styles.errorBorder,
              disabled && styles.disabled,
              leftIconName && styles.hasLeftIcon,
              (rightIconName || error) && styles.hasRightIcon,
              isFocused && error && "errorFocused",
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
            onChange={(e) => {
              setIsFloating(!!e.target.value || isFocused);
              rest.onChange?.(e);
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
                inputSize && styles[inputSize],
                leftIconName && styles.hasLeftIconLabel,
                (rightIconName || error) && styles.hasRightIconLabel,
                disabled && styles.disabledLabel,
                isFocused && styles.focused
              )}
              onClick={() => inputRef.current?.focus()}
            >
              {label}
            </label>
          )}

          {(error || rightIconName) && (
            <span
              className={clsx(
                styles.rightIcon,
                disabled && styles.disabled,
                error && isFocused && styles.errorFocusedIcon
              )}
            >
              <Icon
                name={error ? "removeRed" : (rightIconName as IconName)}
                color={
                  error && isFocused
                    ? "var(--secondary-light-600)"
                    : error
                    ? "var(--error-border-01)"
                    : "currentColor"
                }
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
              error && isFocused && styles.errorFocusedHelper,
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
