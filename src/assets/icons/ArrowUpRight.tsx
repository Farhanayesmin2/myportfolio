import React from "react";
import { COLORS } from "@/src/theme";

type Props = {
  width?: number; 
  height?: number; 
  color?: string; 
  strokeWidth?: number; 
};

export const ArrowUpRight: React.FC<Props> = ({
  width = 24, 
  height = 24, 
  color = COLORS.BRAND.PRIMARY, 
  strokeWidth = 2, 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.99988 18L17.9999 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.24988 6H17.9999V15.75"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
