import React from "react";

type SmsProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const Sms: React.FC<SmsProps> = ({
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
        d="M34.5 41H14.5C8.5 41 4.5 38 4.5 31V17C4.5 10 8.5 7 14.5 7H34.5C40.5 7 44.5 10 44.5 17V31C44.5 38 40.5 41 34.5 41Z"
        fill={color}
      />
      <path
        d="M24.5 25.7399C22.82 25.7399 21.1201 25.2199 19.8201 24.1599L13.56 19.1599C12.92 18.6399 12.8001 17.6999 13.3201 17.0599C13.8401 16.4199 14.7801 16.2999 15.4201 16.8199L21.68 21.8199C23.2 23.0399 25.78 23.0399 27.3 21.8199L33.56 16.8199C34.2 16.2999 35.16 16.3999 35.66 17.0599C36.18 17.6999 36.0801 18.6599 35.4201 19.1599L29.16 24.1599C27.88 25.2199 26.18 25.7399 24.5 25.7399Z"
        fill={color}
      />
    </svg>
  );
};
