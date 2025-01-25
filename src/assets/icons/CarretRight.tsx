import React from "react";
import { COLORS } from "@/src/theme";

type Props = {
  width?: number; 
  height?: number; 
  color?: string; 
  strokeWidth?: number; 
};

export const CaretRightIcon: React.FC<Props> = ({
  width = 16, 
  height = 16, 
  color = COLORS.BRAND.PRIMARY, 
  strokeWidth = 1.5, 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 3L11 8L6 13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
