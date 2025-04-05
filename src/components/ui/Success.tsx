"use client";

import { ReactNode } from "react";
import Button from "./Button";

interface SuccessProps {
  title?: string;
  message?: string;
  children?: ReactNode;
  onAction?: () => void;
  actionText?: string;
  className?: string;
}

export default function Success({
  title = "Success!",
  message = "Your action was completed successfully.",
  children,
  onAction,
  actionText = "Continue",
  className = "",
}: SuccessProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 ${className}`}
    >
      <div className="w-16 h-16 mb-6 text-green-500">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-serif mb-4">{title}</h3>
      <p className="text-secondary mb-8 max-w-md">{message}</p>
      {children}
      {onAction && (
        <Button onClick={onAction} variant="primary">
          {actionText}
        </Button>
      )}
    </div>
  );
}
