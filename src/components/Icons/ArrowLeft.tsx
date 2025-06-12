import React from "react";

type ArrowLeftProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const ArrowLeft: React.FC<ArrowLeftProps> = ({
  w = 24,
  h = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M10.07 5.92969L4 11.9997L10.07 18.0697"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9999 12H4.16992"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
