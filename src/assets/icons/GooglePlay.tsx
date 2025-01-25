import React from "react";

type Props = {
  width?: number;
  height?: number;
};

export const GoogleIcon: React.FC<Props> = ({
  width = 130,
  height = 40,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 130 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
   
      <rect x="0.5" y="0.5" width="129" height="39" rx="5.5" fill="black" />
      <rect x="0.5" y="0.5" width="129" height="39" rx="5.5" stroke="#A6A6A6" />

   
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.43502 7.5471C9.14402 7.8551 8.97302 8.3321 8.97302 8.9511V31.0491C8.97302 31.6681 9.14402 32.1451 9.43502 32.4531L9.50902 32.5251L21.888 20.1461V19.8541L9.50902 7.4751L9.43502 7.5471Z"
        fill="#00D7FE"
      />

      {/* Mask 1 */}
      <mask id="mask0" maskUnits="userSpaceOnUse" x="21" y="15" width="12" height="10">
        <path
          d="M26.013 24.2741L21.888 20.1461V19.8541L26.015 15.7271L30.997 18.5571C32.393 19.3511 32.393 20.6491 30.997 21.4421L26.108 24.2201L26.013 24.2741Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.013 24.2741L21.888 20.1461V19.8541L26.015 15.7271L30.997 18.5571C32.393 19.3511 32.393 20.6491 30.997 21.4421L26.108 24.2201L26.013 24.2741Z"
          fill="url(#paint0_linear)"
        />
      </g>

      {/* Mask 2 */}
      <mask id="mask1" maskUnits="userSpaceOnUse" x="9" y="20" width="18" height="13">
        <path
          d="M26.108 24.22L21.888 20L9.435 32.453C9.896 32.94 10.656 33 11.512 32.514L26.108 24.22Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.108 24.22L21.888 20L9.435 32.453C9.896 32.94 10.656 33 11.512 32.514L26.108 24.22Z"
          fill="url(#paint1_linear)"
        />
      </g>

      {/* Mask 3 */}
      <mask id="mask2" maskUnits="userSpaceOnUse" x="9" y="7" width="18" height="13">
        <path
          d="M26.108 15.7802L11.512 7.48617C10.656 7.00017 9.896 7.06017 9.435 7.54717L21.888 20.0002L26.108 15.7802Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.108 15.7802L11.512 7.48617C10.656 7.00017 9.896 7.06017 9.435 7.54717L21.888 20.0002L26.108 15.7802Z"
          fill="url(#paint2_linear)"
        />
      </g>

      {/* Text Content */}
      <text
        x="40"
        y="15"
        fill="white"
        fontSize="9"
        fontFamily="Arial, sans-serif"
      >
        Download on the
      </text>
      <text
        x="40"
        y="30"
        fill="white"
        fontSize="12"
        fontWeight={600}
        fontFamily="Arial, sans-serif"
      >
        Google Play
      </text>

      {/* Gradients */}
      <defs>
        <linearGradient id="paint0_linear" x1="30.0888" y1="20.0004" x2="21.888" y2="20.0004" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFBC00" />
          <stop offset="1" stopColor="#FFDA03" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="23.8146" y1="23.9708" x2="13.1111" y2="32.7933" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E22652" />
          <stop offset="1" stopColor="#FF3A44" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="11.3207" y1="9.04634" x2="18.4569" y2="15.3213" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ED574" />
          <stop offset="1" stopColor="#07F076" />
        </linearGradient>
      </defs>
    </svg>
  );
};
