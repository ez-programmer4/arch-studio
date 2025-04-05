"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function ApproachHero() {
  return (
    <>
      <Head>
        <title>Our Approach | ArchStudio</title>
        <meta
          name="description"
          content="A systematic and collaborative process designed to deliver exceptional results for every project."
        />
      </Head>
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
            alt="Our Approach"
            fill
            className="object-cover opacity-90"
            priority
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-amber-500/20 to-gray-900/60" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Our Approach
            </h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-amber-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            >
              A systematic and collaborative process designed to deliver
              exceptional results for every project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12"
            >
              <a
                href="#process"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-amber-400 text-amber-100 rounded-full font-semibold hover:bg-amber-400/20 transition-all duration-300"
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="h-8 w-8 text-amber-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>
    </>
  );
}
