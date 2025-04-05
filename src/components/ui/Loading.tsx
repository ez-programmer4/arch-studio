"use client";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Loading({ size = "md", className = "" }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`
          ${sizeClasses[size]}
          border-4
          border-gray-200
          border-t-primary
          rounded-full
          animate-spin
        `}
      />
    </div>
  );
}
