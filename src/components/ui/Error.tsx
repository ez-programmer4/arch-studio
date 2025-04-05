"use client";

import { ReactNode } from "react";
import Button from "./Button";

interface ErrorProps {
  title?: string;
  message?: string;
  children?: ReactNode;
  onRetry?: () => void;
  className?: string;
}

export default function Error({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again later.",
  children,
  onRetry,
  className = "",
}: ErrorProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 ${className}`}
    >
      <div className="w-16 h-16 mb-6 text-red-500">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-serif mb-4">{title}</h3>
      <p className="text-secondary mb-8 max-w-md">{message}</p>
      {children}
      {onRetry && (
        <Button onClick={onRetry} variant="primary">
          Try Again
        </Button>
      )}
    </div>
  );
}
