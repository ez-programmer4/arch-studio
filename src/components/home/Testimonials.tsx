"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "David Thompson",
    role: "Property Developer, Thompson Estates",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content:
      "Their vision turned our project into a landmark with unmatched detail and innovation.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    name: "Sarah Chen",
    role: "Hotel Owner, The Grand Hotel",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content:
      "The lobby design redefined luxury, blending beauty and functionality seamlessly.",
    gradient: "from-amber-400 to-amber-600",
  },
  {
    name: "Michael Rodriguez",
    role: "Commercial Property Manager, Urban Spaces",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content:
      "Their space planning optimized our office with precision and elegance.",
    gradient: "from-orange-500 to-amber-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white text-gray-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-6 py-2 bg-amber-100/80 text-amber-700 rounded-full text-sm font-medium uppercase tracking-widest shadow-sm backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What They Say
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mt-6 tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Testimonials of Excellence
          </motion.h2>
          <motion.p
            className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real stories from clients who’ve experienced our transformative
            work.
          </motion.p>
        </motion.div>

        {/* Horizontal Scrollable Testimonials */}
        <div className="relative">
          <motion.div
            className="flex space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-amber-200 scrollbar-track-transparent pb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="flex-shrink-0 w-full sm:w-96 snap-start group"
              >
                {/* Testimonial Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Image */}
                  <motion.div
                    className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg border-2 border-amber-100/50 mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      quality={85}
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </motion.div>

                  {/* Text */}
                  <motion.p
                    className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6 max-w-sm mx-auto"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    "{testimonial.content}"
                  </motion.p>
                  <motion.div
                    className={`w-16 h-px bg-gradient-to-r ${testimonial.gradient} mb-6`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-amber-600 text-sm md:text-base font-medium mt-2">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-amber-400"
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-base font-medium rounded-full shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
          >
            Share Your Story
            <motion.span
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
