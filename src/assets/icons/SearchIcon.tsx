import React from "react";
import { COLORS } from "@/src/theme";
type Props = {
  width?: number; 
  height?: number; 
  color?: string; 
  opacity?: number; 
};

export const SearchIcon: React.FC<Props> = ({
  width = 18, 
  height = 18, 
  color = COLORS.ICON.BLACK, 
  opacity = 0.8, 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={opacity}
        d="M2 7C2 4.23858 4.23858 2 7 2C9.7614 2 12 4.23858 12 7C12 9.7614 9.7614 12 7 12C4.23858 12 2 9.7614 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.5723 14 10.0236 13.4816 11.1922 12.6064L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L12.6064 11.1922C13.4816 10.0236 14 8.5723 14 7C14 3.13401 10.866 0 7 0Z"
        fill={color}
      />
    </svg>
  );
};
