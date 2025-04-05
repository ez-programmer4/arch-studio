"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../../lib/project";
import ProjectDetailsSidebar from "./ProjectDetailsSidebar"; // Import the sidebar component

export default function ProjectDetail({
  project,
}: {
  project: Project | null;
}) {
  const [currentProject] = useState<Project | null>(project);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Project not found.</p>
      </div>
    );
  }

  const handleImageClick = (index: number) => setActiveImageIndex(index);
  const closeModal = () => setActiveImageIndex(null);

  return (
    <article className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {currentProject.image ? (
          <Image
            src={currentProject.image}
            alt={currentProject.title}
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
            {currentProject.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl mx-auto">
            {currentProject.title}
          </h1>
          <p className="text-lg text-amber-100">
            {currentProject.location || "Unknown"} |{" "}
            {currentProject.year || "N/A"}
          </p>
        </motion.div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/projects"
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
          Back to Projects
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg text-gray-700 mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                Project Story
              </h2>
              <p>{currentProject.description || "No description available."}</p>
            </motion.div>

            {currentProject.features && currentProject.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-amber-500 pb-2">
                  Design Highlights
                </h3>
                <ul className="space-y-4">
                  {currentProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 mt-1 mr-3 text-amber-500">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {currentProject.gallery.map(
                (img, index) =>
                  img && (
                    <div
                      key={index}
                      className="relative h-64 rounded-lg overflow-hidden shadow-md"
                    >
                      <Image
                        src={img}
                        alt={`${currentProject.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => handleImageClick(index)}
                      />
                    </div>
                  )
              )}
            </motion.div>
          </div>

          {/* Integrated ProjectDetailsSidebar */}
          <ProjectDetailsSidebar project={currentProject} />
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {activeImageIndex !== null &&
          currentProject.gallery[activeImageIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-6xl h-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentProject.gallery[activeImageIndex]!}
                  alt={`${currentProject.title} gallery image ${activeImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-amber-600 hover:bg-amber-700 rounded-full p-3 transition-colors duration-300"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </article>
  );
}
