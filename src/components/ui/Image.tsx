"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";

interface ImageProps extends Omit<NextImageProps, "onLoadingComplete"> {
  aspectRatio?: "1:1" | "4:3" | "16:9" | "3:4";
  className?: string;
}

export default function Image({
  src,
  alt,
  aspectRatio = "16:9",
  className = "",
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const aspectRatioClasses = {
    "1:1": "aspect-square",
    "4:3": "aspect-[4/3]",
    "16:9": "aspect-video",
    "3:4": "aspect-[3/4]",
  };

  return (
    <div
      className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]} ${className}`}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        className={`
          object-cover
          transition-opacity duration-300
          ${isLoading ? "opacity-0" : "opacity-100"}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}
