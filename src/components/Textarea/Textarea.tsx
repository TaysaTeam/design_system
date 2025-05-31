import React, { forwardRef, useState, useEffect, useRef } from "react";
import { clsx } from "clsx";
import styles from "./_textarea.module.scss";
import { Icon, IconName } from "../Icon";
import { CornerLine } from "../Icons/CornerLine";
import { TextareaProps } from "./type";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      leftIconName,
      rightIconName,
      className,
      label,
      error,
      helperText,
      disabled = false,
      value,
      rows = 4,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFloating, setIsFloating] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      setIsFloating(
        !!(
          isFocused ||
          value ||
          (textareaRef.current && textareaRef.current.value)
        )
      );
    }, [isFocused, value]);

    return (
      <div className={styles.textareaContainer}>
        <div className={styles.textareaWrapper}>
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

          <textarea
            ref={(node) => {
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }}
            className={clsx(
              styles.textarea,
              styles.longText,
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
            rows={rows}
            {...rest}
            placeholder={label ? " " : rest.placeholder}
          />

          {label && (
            <label
              className={clsx(
                styles.label,
                error && styles.errorLabel,
                error && isFocused && styles.errorFocusedLabel,
                isFloating && styles.floating,
                leftIconName && styles.hasLeftIconLabel,
                (rightIconName || error) && styles.hasRightIconLabel,
                disabled && styles.disabledLabel
              )}
              onClick={() => textareaRef.current?.focus()}
            >
              {label}
            </label>
          )}

          {(error || rightIconName) && (
            <span
              className={clsx(styles.rightIcon, disabled && styles.disabled)}
            >
              <Icon
                name={error ? "removeRed" : (rightIconName as IconName)}
                color={
                  error && isFocused
                    ? "currentColor"
                    : error
                    ? "var(--error-border-01)"
                    : "currentColor"
                }
                w={24}
                h={24}
              />
            </span>
          )}

          <div className={styles.cornerLine}>
            <CornerLine
              w={14}
              h={15}
              color={
                error && isFocused
                  ? "var(--secondary-light-600)"
                  : error
                  ? "var(--error-border-01)"
                  : disabled
                  ? "var(--neutral-foreground-02)"
                  : isFocused
                  ? "var(--secondary-foreground-02)"
                  : "var(--secondary-border-04)"
              }
            />
          </div>
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

Textarea.displayName = "Textarea";
