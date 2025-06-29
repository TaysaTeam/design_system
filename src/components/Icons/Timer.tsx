import React from "react";

type TimerProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const Timer: React.FC<TimerProps> = ({
  w = 48,
  h = 48,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 49 48"
      fill="none"
    >
      <path
        opacity="0.4"
        d="M24.5002 44.0003C34.0768 44.0003 41.8402 36.2369 41.8402 26.6603C41.8402 17.0837 34.0768 9.32031 24.5002 9.32031C14.9235 9.32031 7.16016 17.0837 7.16016 26.6603C7.16016 36.2369 14.9235 44.0003 24.5002 44.0003Z"
        fill={color}
      />
      <path
        d="M24.5 27.5C23.68 27.5 23 26.82 23 26V16C23 15.18 23.68 14.5 24.5 14.5C25.32 14.5 26 15.18 26 16V26C26 26.82 25.32 27.5 24.5 27.5Z"
        fill={color}
      />
      <path
        d="M30.2803 6.9H18.7203C17.9203 6.9 17.2803 6.26 17.2803 5.46C17.2803 4.66 17.9203 4 18.7203 4H30.2803C31.0803 4 31.7203 4.64 31.7203 5.44C31.7203 6.24 31.0803 6.9 30.2803 6.9Z"
        fill={color}
      />
    </svg>
  );
};
