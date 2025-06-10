import React from "react";

type TelegramProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const Telegram: React.FC<TelegramProps> = ({
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
        d="M7.1099 6.19172L16.1299 3.18172C20.1799 1.83172 22.3799 4.04172 21.0399 8.09172L18.0299 17.1117C16.0099 23.1817 12.6899 23.1817 10.6699 17.1117L9.7799 14.4317L7.0999 13.5417C1.0399 11.5317 1.0399 8.22172 7.1099 6.19172Z"
        fill={color}
      />
      <path d="M12.1201 11.861L15.9301 8.04102L12.1201 11.861Z" fill={color} />
      <path
        d="M12.1201 12.6114C11.9301 12.6114 11.7401 12.5414 11.5901 12.3914C11.3001 12.1014 11.3001 11.6214 11.5901 11.3314L15.3901 7.51145C15.6801 7.22145 16.1601 7.22145 16.4501 7.51145C16.7401 7.80145 16.7401 8.28145 16.4501 8.57145L12.6501 12.3914C12.5001 12.5314 12.3101 12.6114 12.1201 12.6114Z"
        fill={color}
      />
    </svg>
  );
};
