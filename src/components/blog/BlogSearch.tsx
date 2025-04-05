"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BlogSearch({
  onSearch,
  onCategoryChange,
  categories,
  selectedCategory,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="mb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search articles by title, tags, or keywords..."
            className="w-full px-6 py-4 text-lg text-gray-900 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm transition-all duration-300"
          />
          <svg
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-400 text-gray-900 shadow-md"
                  : "bg-white text-gray-600 hover:bg-amber-50 border border-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
