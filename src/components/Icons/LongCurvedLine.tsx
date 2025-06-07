import React from "react";

type LongCurvedLineProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const LongCurvedLine: React.FC<LongCurvedLineProps> = ({
  w = 14,
  h = 15,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="590.349px"
      height="191.673px"
      viewBox="0 0 520 124"
      fill={color}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M519.517 135.191C-101.748 142.486 -49.7575 -83.8243 -49.7575 -83.8243C-49.7575 -83.8243 -89.0553 20.8277 78.5421 92.1062C162.523 127.823 298.454 155.16 517.309 156.751L519.517 135.191Z"
        fill="url(#paint0_linear_258_10792)"
        fill-opacity="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_258_10792"
          x1="242.165"
          y1="-53.9296"
          x2="222.639"
          y2="136.746"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EFECFF" />
          <stop offset="1" stop-color="#E6F4FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
