import React from "react";

type Props = {
    width?: number;
    height?: number;
    fillColor?: string; 
    strokeColor?: string; 
};

export const AppleIcon: React.FC<Props> = ({
    width = 130,
    height = 40,
    fillColor = "black",
    strokeColor = "#A6A6A6",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 130 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="0.5"
                y="0.5"
                width="129"
                height="39"
                rx="5.5"
                fill={fillColor}
            />
            <rect
                x="0.5"
                y="0.5"
                width="129"
                height="39"
                rx="5.5"
                stroke={strokeColor}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.7689 20.5806C25.7907 18.8841 26.6801 17.3171 28.1254 16.4285C27.2095 15.1204 25.7304 14.3208 24.1343 14.2709C22.455 14.0946 20.8271 15.2757 19.9714 15.2757C19.0991 15.2757 17.7816 14.2884 16.3629 14.3176C14.4962 14.3779 12.7981 15.4134 11.89 17.0454C9.95595 20.3938 11.3985 25.3149 13.2512 28.0215C14.1781 29.3469 15.2613 30.8273 16.6788 30.7748C18.0658 30.7173 18.5839 29.8903 20.2582 29.8903C21.9169 29.8903 22.403 30.7748 23.8492 30.7414C25.3376 30.7173 26.2753 29.4102 27.1697 28.0723C27.8357 27.1279 28.3481 26.0842 28.6881 24.9798C26.9204 24.2321 25.7709 22.5 25.7689 20.5806Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.0372 12.4906C23.8487 11.5164 24.2485 10.2642 24.1517 9C22.9119 9.13022 21.7666 9.72278 20.9442 10.6596C20.132 11.5839 19.7205 12.7932 19.8004 14.021C21.0569 14.0339 22.2499 13.4699 23.0372 12.4906Z"
                fill="white"
            />
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
                App Store
            </text>
        </svg>
    );
};
