"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface ProjectCardProps {
  project: {
    title: string;
    slug: {
      current: string;
      _type: string;
    };
    category: string;
    images: SanityImage[];
    year?: string | null;
    tags?: string[] | null;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (!project) {
    return null;
  }

  const {
    title = "",
    slug = { current: "", _type: "slug" },
    category = "",
    images = [],
    year,
    tags = [],
  } = project;

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleVariants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.98 },
  };

  const imageUrl = images[0] ? urlFor(images[0]).url() : "/placeholder.jpg";

  return (
    <Link
      href={`/projects/${slug.current}`}
      className="block group"
      aria-label={`View project: ${title}`}
    >
      <motion.div
        className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
        whileHover="hover"
        whileTap="tap"
        variants={scaleVariants}
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={`Project: ${title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent flex flex-col justify-between p-6 text-white"
            initial="hidden"
            whileHover="visible"
            variants={overlayVariants}
          >
            {/* Top section for category/year */}
            <div className="flex justify-between items-start">
              <motion.span
                variants={textVariants}
                className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white bg-primary/90 rounded-full backdrop-blur-sm"
              >
                {category}
              </motion.span>
              {year && (
                <motion.span
                  variants={textVariants}
                  className="text-sm font-medium text-white/80"
                >
                  {year}
                </motion.span>
              )}
            </div>

            {/* Bottom section for title/tags */}
            <div>
              <motion.h3
                variants={textVariants}
                className="text-2xl font-medium mb-2 leading-tight"
              >
                {title}
              </motion.h3>

              {tags && tags.length > 0 && (
                <motion.div
                  variants={textVariants}
                  className="flex flex-wrap gap-2 mt-3"
                >
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
