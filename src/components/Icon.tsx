import React from "react";
import { Add } from "./Icons/Add";
import { Search } from "./Icons/Search";
import { Remove } from "./Icons/Remove";
import { RemoveRed } from "./Icons/RemoveRed";
import { CornerLine } from "./Icons/CornerLine";
import { IconButton } from "./Icons/IconButton";
import { PenTool } from "./Icons/PenTool";
import { ArrowUp } from "./Icons/ArrowUp";
import { ArrowDown } from "./Icons/ArrowDown";

const icons = {
  add: Add,
  search: Search,
  remove: Remove,
  removeRed: RemoveRed,
  cornerline: CornerLine,
  iconButton: IconButton,
  penTool: PenTool,
  arrowUp: ArrowUp,
  arrowDown:ArrowDown
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
