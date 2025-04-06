"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fetchProjects, Project } from "../../lib/project";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        console.log("Fetching featured projects...");
        const data = await fetchProjects();
        console.log("Featured projects fetched:", data);
        // Take only the first 3 projects for the featured section
        setProjects((data || []).slice(0, 3));
      } catch (err) {
        console.error("Fetch error in FeaturedProjects:", err);
        setError("Failed to load featured projects.");
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md h-96 animate-pulse overflow-hidden"
              >
                <div className="h-64 bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse into our standout works.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="block focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 rounded-xl"
              >
                <motion.div
                  variants={itemVariants}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="bg-white rounded-xl shadow-md overflow-hidden group relative hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">No Image</span>
                      </div>
                    )}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6"
                    >
                      <motion.span
                        className="inline-block px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full shadow-sm"
                        initial={{ y: 20 }}
                        animate={{
                          y: hoveredProject === project.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.category}
                      </motion.span>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description || "No description available."}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-all duration-300 shadow-md"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
