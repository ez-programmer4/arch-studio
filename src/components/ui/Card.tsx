"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "./Image";
import Link from "next/link";

interface CardProps {
  title: string;
  image: string;
  description?: string;
  category?: string;
  date?: string;
  href?: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  image,
  description,
  category,
  date,
  href,
  children,
  className = "",
}: CardProps) {
  const CardWrapper = ({ children }: { children: ReactNode }) => {
    if (href) {
      return (
        <Link href={href} className="block">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <motion.div whileHover={{ y: -5 }} className={`group ${className}`}>
      <CardWrapper>
        <div className="relative overflow-hidden rounded-lg mb-6">
          <Image
            src={image}
            alt={title}
            aspectRatio="4:3"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="space-y-4">
          {(category || date) && (
            <div className="flex items-center gap-4 text-sm">
              {category && <span className="text-primary">{category}</span>}
              {date && <span className="text-secondary">{date}</span>}
            </div>
          )}
          <h3 className="text-2xl font-serif group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          {description && <p className="text-secondary">{description}</p>}
          {children}
        </div>
      </CardWrapper>
    </motion.div>
  );
}
