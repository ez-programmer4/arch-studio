"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const pagesWithBackButton = ["/studio", "/insights", "/approach"];

export default function BackToHome() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!pagesWithBackButton.includes(pathname)) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block transition-all duration-300 ${
        scrolled ? "opacity-100" : "opacity-70 hover:opacity-100"
      }`}
    >
      <Link
        href="/"
        className="group flex items-center gap-4 text-white hover:text-white transition-colors duration-300"
      >
        <motion.div
          whileHover={{ x: -5 }}
          className="relative bg-black/20 backdrop-blur-md p-3 rounded-full border border-white/10 shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          <span className="text-sm font-medium bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
            Back to Home
          </span>
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
