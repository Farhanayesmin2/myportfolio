import React from "react";
import { COLORS } from "@/src/theme";

type Props = {
  width?: number; 
  height?: number; 
  color?: string; 
  strokeWidth?: number; 
};

export const CaretDownIcon: React.FC<Props> = ({
  width = 12, 
  height = 12, 
  color = COLORS.BRAND.PRIMARY, 
  strokeWidth = 1.5, 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 4.5L6 8.25L2.25 4.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
