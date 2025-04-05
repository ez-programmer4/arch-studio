"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  className?: string;
}

export default function Tooltip({
  content,
  children,
  position = "top",
  className = "",
}: TooltipProps) {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  const arrowClasses = {
    top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-gray-900",
    right:
      "left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-gray-900",
    bottom:
      "top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-gray-900",
    left: "right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-gray-900",
  };

  return (
    <div className="relative inline-block group">
      {children}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`
            absolute
            z-50
            px-2
            py-1
            text-sm
            text-white
            bg-gray-900
            rounded
            whitespace-nowrap
            ${positionClasses[position]}
            ${className}
            invisible
            group-hover:visible
          `}
        >
          {content}
          <div
            className={`
              absolute
              w-0
              h-0
              border-4
              border-transparent
              ${arrowClasses[position]}
            `}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
