import React from "react";

interface MandalaLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const MandalaLogo: React.FC<MandalaLogoProps> = ({
  size = 36,
  color = "#b38e5d",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 hover:rotate-45 ${className}`}
      {...props}
    >
      {/* Central Ring */}
      <circle
        cx="50"
        cy="50"
        r="8"
        stroke={color}
        strokeWidth="2.5"
      />
      <circle
        cx="50"
        cy="50"
        r="3"
        fill={color}
      />

      {/* Inner Petal Ring (8 points) */}
      <g stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Cardinal Petals */}
        <path d="M50 42 C44 32, 56 32, 50 22 C44 32, 56 32, 50 42 Z" />
        <path d="M50 58 C44 68, 56 68, 50 78 C44 68, 56 68, 50 58 Z" />
        <path d="M42 50 C32 44, 32 56, 22 50 C32 44, 32 56, 42 50 Z" />
        <path d="M58 50 C68 44, 68 56, 78 50 C68 44, 68 56, 58 50 Z" />

        {/* Diagonal Petals */}
        <path d="M44 44 C34 38, 40 32, 30 30 C32 40, 38 34, 44 44 Z" />
        <path d="M56 44 C66 38, 60 32, 70 30 C68 40, 62 34, 56 44 Z" />
        <path d="M44 56 C34 62, 40 68, 30 70 C32 60, 38 66, 44 56 Z" />
        <path d="M56 56 C66 62, 60 68, 70 70 C68 60, 62 66, 56 56 Z" />

        {/* Outer Geometric Framework / Sacred Star Polyline */}
        <polygon
          points="50,10 61,24 78,22 76,39 90,50 76,61 78,78 61,76 50,90 39,76 22,78 24,61 10,50 24,39 22,22 39,24"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          opacity="0.85"
        />
      </g>
    </svg>
  );
};
