import React from "react";
import { COLORS } from "@/src/theme";

type Props = {
  width?: number; 
  height?: number; 
  color?: string; 
  strokeWidth?: number; 
};

export const ArrowDownRight: React.FC<Props> = ({
  width = 25, 
  height = 24, 
  color = COLORS.BRAND.PRIMARY, 
  strokeWidth = 2, 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.81848 6L18.8185 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.06848 18H18.8185V8.25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
