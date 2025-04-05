"use client";

import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "dark";
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  background = "white",
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-gray-900 text-white",
  };

  return (
    <section className={`py-24 ${backgroundClasses[background]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
