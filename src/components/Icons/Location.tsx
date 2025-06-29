import React from "react";

type LocationProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const Location: React.FC<LocationProps> = ({
  w = 24,
  h = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        opacity="0.4"
        d="M20.6201 8.95C19.5701 4.33 15.5401 2.25 12.0001 2.25C12.0001 2.25 12.0001 2.25 11.9901 2.25C8.4601 2.25 4.4201 4.32 3.3701 8.94C2.2001 14.1 5.3601 18.47 8.2201 21.22C9.2801 22.24 10.6401 22.75 12.0001 22.75C13.3601 22.75 14.7201 22.24 15.7701 21.22C18.6301 18.47 21.7901 14.11 20.6201 8.95Z"
        fill={color}
      />
      <path
        d="M12.0001 13.9602C13.7398 13.9602 15.1501 12.5499 15.1501 10.8102C15.1501 9.07046 13.7398 7.66016 12.0001 7.66016C10.2604 7.66016 8.8501 9.07046 8.8501 10.8102C8.8501 12.5499 10.2604 13.9602 12.0001 13.9602Z"
        fill={color}
      />
    </svg>
  );
};
