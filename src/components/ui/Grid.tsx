"use client";

import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Grid({
  children,
  cols = 3,
  gap = "md",
  className = "",
}: GridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gridGap = {
    sm: "gap-4",
    md: "gap-8",
    lg: "gap-12",
    xl: "gap-16",
  };

  return (
    <div
      className={`
        grid
        ${gridCols[cols]}
        ${gridGap[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
