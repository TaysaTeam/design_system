import React from "react";

type CornerLineProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const CornerLine: React.FC<CornerLineProps> = ({
  w = 14,
  h = 15,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M6.33789 16.9975L1.00543 11.665"
        stroke={color}
        stroke-linecap="round"
      />
      <path
        d="M11.6641 16.9973L0.999133 6.3324"
        stroke={color}
        stroke-linecap="round"
      />
      <path d="M17 16.9974L1.00261 1" stroke={color} stroke-linecap="round" />
    </svg>
  );
};
