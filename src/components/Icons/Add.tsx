import React from "react";

type AddProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const Add: React.FC<AddProps> = ({
  w = 14,
  h = 15,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 14 15"
      fill="none"
    >
      <path d="M14 8.5H8V14.5H6V8.5H0V6.5H6V0.5H8V6.5H14V8.5Z" fill={color} />
    </svg>
  );
};
