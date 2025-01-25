import React from "react";

type Props = {
  width?: number;
  height?: number;
  color?: string; 
};

export const FacebookIcon: React.FC<Props> = ({
  width = 32,
  height = 36,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.375 0.75C30.2031 0.75 31.75 2.29688 31.75 4.125V28.875C31.75 30.7734 30.2031 32.25 28.375 32.25H18.6719V21.5625H22.75L23.5234 16.5H18.6719V13.2656C18.6719 11.8594 19.375 10.5234 21.5547 10.5234H23.7344V6.23438C23.7344 6.23438 21.7656 5.88281 19.7969 5.88281C15.8594 5.88281 13.2578 8.34375 13.2578 12.7031V16.5H8.82812V21.5625H13.2578V32.25H3.625C1.72656 32.25 0.25 30.7734 0.25 28.875V4.125C0.25 2.29688 1.72656 0.75 3.625 0.75H28.375Z"
        fill={color}
      />
    </svg>
  );
};
