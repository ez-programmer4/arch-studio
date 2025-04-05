// src/components/ui/LogoText.tsx
"use client";

interface LogoTextProps {
  text: string;
  className?: string;
}

export const LogoText = ({ text, className }: LogoTextProps) => {
  return (
    <svg viewBox="0 0 180 60" className={`w-full h-full ${className}`}>
      <text
        x="50%"
        y="50%"
        fill="#4b5563"
        fontSize="18"
        fontWeight="600"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="sans-serif"
      >
        {text}
      </text>
    </svg>
  );
};
