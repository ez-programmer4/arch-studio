"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost } from "../../lib/blog";

const categories = ["All", "Architecture", "Design", "Interior", "Landscape"];
const POSTS_PER_PAGE = 6;

export default function BlogGrid({
  initialBlogs,
}: {
  initialBlogs: BlogPost[];
}) {
  const [blogs] = useState<BlogPost[]>(initialBlogs || []);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  console.log("Initial blogs:", initialBlogs);

  const filteredBlogs = useMemo(() => {
    const result = blogs.filter(
      (blog) => selectedCategory === "All" || blog.category === selectedCategory
    );
    console.log("Filtered blogs:", result);
    return result;
  }, [blogs, selectedCategory]);

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    return filteredBlogs.slice(start, end);
  }, [filteredBlogs, currentPage]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-medium text-sm shadow-sm transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-amber-500 text-white shadow-amber-500/30"
                  : "bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-700 border border-gray-200"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Blog Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {paginatedBlogs.map((blog) => (
              <Link
                href={`/blog/${blog.id}`}
                key={blog.id}
                className="block focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 rounded-xl"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    {blog.image ? (
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">No Image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3 text-sm">
                      <span className="font-semibold text-amber-600">
                        {blog.category}
                      </span>
                      <span className="text-gray-500">
                        {new Date(blog.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.excerpt || "No excerpt available."}
                    </p>
                    <div className="text-sm text-gray-500">
                      By{" "}
                      <span className="font-medium text-gray-700">
                        {blog.author || "Unknown"}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Posts Message */}
        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No Posts Found
            </h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-4 items-center">
            <motion.button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
              className="px-5 py-2 bg-amber-500 text-white rounded-full disabled:bg-gray-300 hover:bg-amber-600 transition-all duration-300 shadow-md disabled:shadow-none"
            >
              Previous
            </motion.button>
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <motion.button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
              className="px-5 py-2 bg-amber-500 text-white rounded-full disabled:bg-gray-300 hover:bg-amber-600 transition-all duration-300 shadow-md disabled:shadow-none"
            >
              Next
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
