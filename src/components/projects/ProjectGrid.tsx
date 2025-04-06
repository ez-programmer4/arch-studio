"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fetchProjects, Project } from "../../lib/project";

export default function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        console.log("Fetching projects in ProjectGrid...");
        const data = await fetchProjects();
        console.log("Projects fetched in ProjectGrid:", data);
        setProjects(data || []);
      } catch (err) {
        console.error("Fetch error in ProjectGrid:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const categories =
    projects.length > 0
      ? ["All", ...new Set(projects.map((p) => p.category))]
      : ["All"];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
      <section id="all-projects" className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
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
      <section id="all-projects" className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block p-8 bg-white rounded-xl shadow-md border border-red-100">
            <p className="text-red-600 text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="all-projects" className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/30"
                  : "bg-white text-gray-600 hover:bg-amber-100 border border-gray-200 hover:border-amber-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {projects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-600 text-lg">
              No projects available at this time.
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
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
                          width={500}
                          height={400}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={85}
                          onError={(e) => {
                            console.error(
                              `Failed to load image for ${project.title}: ${project.image}`
                            );
                            // Optionally set a fallback image from /public
                            e.currentTarget.src = "/fallback-image.jpg"; // Ensure this exists
                          }}
                        />
                      ) : (
                        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">
                            No Image Available
                          </span>
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
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{project.location || "Unknown"}</span>
                        <span>{project.year || "N/A"}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
