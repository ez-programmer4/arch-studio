"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "../../lib/blog";

export default function BlogPost({ post }: { post: BlogPost | null }) {
  const [currentPost] = useState<BlogPost | null>(post);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Post not found.</p>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {currentPost.image ? (
          <Image
            src={currentPost.image}
            alt={currentPost.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-lg">No Image Available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <span className="inline-block px-4 py-1 bg-amber-500 text-white rounded-full text-sm font-semibold mb-4 shadow-sm">
            {currentPost.category || "Uncategorized"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl mx-auto">
            {currentPost.title || "Untitled"}
          </h1>
          <p className="text-lg text-amber-100">
            By {currentPost.author || "Unknown"} |{" "}
            {currentPost.date
              ? new Date(currentPost.date).toLocaleDateString()
              : "Date Unknown"}
          </p>
        </motion.div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg text-gray-700 mb-12"
          >
            <p>
              {currentPost.content.introduction || "No introduction provided."}
            </p>
          </motion.div>

          {currentPost.content.sections &&
          currentPost.content.sections.length > 0 ? (
            currentPost.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="mb-16"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  {section.title || "Untitled Section"}
                </h2>
                {section.image ? (
                  <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-md mb-6">
                    <Image
                      src={section.image}
                      alt={section.title || "Section Image"}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-80 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-6 shadow-md">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <p className="text-gray-700 leading-relaxed">
                  {section.content || "No content provided."}
                </p>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600">No sections available.</p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-amber-50 p-6 rounded-lg shadow-sm border border-amber-100"
          >
            <p className="text-gray-700 italic">
              {currentPost.content.conclusion || "No conclusion provided."}
            </p>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
