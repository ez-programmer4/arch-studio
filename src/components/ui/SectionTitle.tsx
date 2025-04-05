"use client";

import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  children,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-secondary max-w-2xl">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
