"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../../lib/project";

const POSTS_PER_PAGE = 6;

export default function ProjectGrid({
  initialProjects,
}: {
  initialProjects: Project[];
}) {
  const [projects] = useState(initialProjects || []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = useMemo(() => {
    const result = projects.filter(
      (project) =>
        selectedCategory === "All" || project.category === selectedCategory
    );
    return result;
  }, [projects, selectedCategory]);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    return filteredProjects.slice(start, end);
  }, [filteredProjects, currentPage]);

  const totalPages = Math.ceil(filteredProjects.length / POSTS_PER_PAGE);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm shadow-sm transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-amber-500 text-white shadow-amber-500/50"
                  : "bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {paginatedProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3 text-sm">
                      <span className="font-semibold text-amber-600">
                        {project.category}
                      </span>
                      <span className="text-gray-500">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="text-sm text-gray-500">
                      <span>{project.location}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-4 items-center">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-5 py-2 bg-amber-500 text-white rounded-full disabled:bg-gray-300 hover:bg-amber-600 transition-all duration-300 shadow-md"
            >
              Previous
            </button>
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-5 py-2 bg-amber-500 text-white rounded-full disabled:bg-gray-300 hover:bg-amber-600 transition-all duration-300 shadow-md"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
