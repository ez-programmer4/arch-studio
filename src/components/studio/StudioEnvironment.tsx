"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const environments = [
  {
    title: "Design Studio",
    description:
      "An open, light-filled space inspiring creativity and collaboration.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526003497b?w=1600&auto=format&fit=crop&q=80",
    alt: "Modern architectural design studio",
  },
  {
    title: "Model Lab",
    description:
      "Precision craftsmanship meets digital design in our model-making hub.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&auto=format&fit=crop&q=80",
    alt: "Architectural model making workspace",
  },
  {
    title: "Client Suite",
    description: "Elegant spaces for presenting designs and refining visions.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526003497b?w=1600&auto=format&fit=crop&q=80",
    alt: "Modern architectural meeting room",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function StudioEnvironment() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.span
            className="inline-block px-5 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium uppercase tracking-wide mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Spaces
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Where Innovation Thrives
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Environments designed to foster architectural brilliance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {environments.map((env) => (
            <motion.div
              key={env.title}
              variants={itemVariants}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="relative h-72">
                <Image
                  src={env.image}
                  alt={env.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3 text-gray-900">
                  {env.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {env.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
