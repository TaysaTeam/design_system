import React from "react";

type Security_SafeProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const Security_Safe: React.FC<Security_SafeProps> = ({
  w = 48,
  h = 48,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        opacity="0.4"
        d="M41.8197 22.2406C41.8197 32.0206 34.7197 41.1806 25.0197 43.8606C24.3597 44.0406 23.6397 44.0406 22.9797 43.8606C13.2797 41.1806 6.17969 32.0206 6.17969 22.2406V13.4606C6.17969 11.8206 7.41972 9.96062 8.95972 9.34062L20.0997 4.78062C22.5997 3.76063 25.4197 3.76063 27.9197 4.78062L39.0597 9.34062C40.5797 9.96062 41.8397 11.8206 41.8397 13.4606L41.8197 22.2406Z"
        fill={color}
      />
      <path
        d="M29 21C29 18.24 26.76 16 24 16C21.24 16 19 18.24 19 21C19 23.24 20.48 25.1 22.5 25.74V31C22.5 31.82 23.18 32.5 24 32.5C24.82 32.5 25.5 31.82 25.5 31V25.74C27.52 25.1 29 23.24 29 21Z"
        fill={color}
      />
    </svg>
  );
};
