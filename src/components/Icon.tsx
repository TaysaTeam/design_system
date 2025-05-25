import React from "react";
import { Add } from "./Icons/Add";

const icons = {
  add:Add
};

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  w?: number;
  h?: number;
  color: string;
  onClick?: () => void;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  w,
  h,
  color,
  onClick,
  className,
}) => {
  const IconComponent = icons[name];
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ display: "grid", placeContent: "center" }}
    >
      <IconComponent w={w ?? 24} h={h ?? 24} color={color} />
    </div>
  );
};
