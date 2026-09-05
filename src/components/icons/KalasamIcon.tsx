import React from "react";

interface KalasamIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  secondaryColor?: string;
}

export const KalasamIcon: React.FC<KalasamIconProps> = ({
  size = 32,
  color = "#d4af37",
  secondaryColor = "#f6d788",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="kalasamGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#9b6f38" />
        </linearGradient>
      </defs>

      {/* Top Coconut / Narikela */}
      <path
        d="M32 6C28 14 26 19 26 23C26 26.5 28.5 29 32 29C35.5 29 38 26.5 38 23C38 19 36 14 32 6Z"
        fill="url(#kalasamGold)"
        stroke={color}
        strokeWidth="1.5"
      />

      {/* Mango Leaves / Amrapallava (Left & Right) */}
      <path
        d="M26 23C20 17 12 18 10 24C16 26 22 26 26 23Z"
        fill="#2d6a4f"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M38 23C44 17 52 18 54 24C48 26 42 26 38 23Z"
        fill="#2d6a4f"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M28 25C22 22 17 25 15 31C20 30 25 29 28 25Z"
        fill="#1b4332"
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M36 25C42 22 47 25 49 31C44 30 39 29 36 25Z"
        fill="#1b4332"
        stroke={color}
        strokeWidth="1"
      />

      {/* Neck Rim of the Kalasam */}
      <ellipse
        cx="32"
        cy="28"
        rx="10"
        ry="3"
        fill="url(#kalasamGold)"
        stroke={color}
        strokeWidth="1.5"
      />

      {/* Main Sacred Pot Vessel / Kumbha */}
      <path
        d="M23 29C17 33 14 40 16 48C18 55 24 58 32 58C40 58 46 55 48 48C50 40 47 33 41 29"
        fill="url(#kalasamGold)"
        stroke={color}
        strokeWidth="1.8"
      />

      {/* Sacred Thread Bands / Kankana on Vessel */}
      <path
        d="M19 40C23 43 41 43 45 40"
        stroke="#4a0e17"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 45C24 48 40 48 44 45"
        stroke="#4a0e17"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Base Pedestal */}
      <path
        d="M25 58C25 60 26 61 32 61C38 61 39 60 39 58"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
