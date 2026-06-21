"use client";

type FlowerProps = {
  size?: number;
  className?: string;
};

const Flower = ({ size = 24, className }: FlowerProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
    >
      <g fill="#F6B6C8">
        <circle cx="50" cy="15" r="14" />
        <circle cx="85" cy="50" r="14" />
        <circle cx="50" cy="85" r="14" />
        <circle cx="15" cy="50" r="14" />
      </g>
      <circle cx="50" cy="50" r="10" fill="#FFD966" />
    </svg>
  );
};

export default Flower;
