import React from "react";

type ShortCurvedLineProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const ShortCurvedLine: React.FC<ShortCurvedLineProps> = ({
  w = 14,
  h = 15,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="211px"
      height="119px"
      viewBox="0 0 183 106"
      fill={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1866 102.898C13.1866 102.898 9.61535 -53.628 182.447 -0.952711C-12.6306 -83.6008 -21.484 105.379 -21.484 105.379L13.1866 102.898Z"
        fill="url(#paint0_linear_258_10793)"
        fillOpacity="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_258_10793"
          x1="75.253"
          y1="-20.8482"
          x2="83.7469"
          y2="97.8483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFECFF" />
          <stop offset="1" stopColor="#E6F4FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
