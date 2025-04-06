"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { useRef } from "react";

export default function ApproachHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <>
      <Head>
        <title>Our Approach | ArchStudio</title>
        <meta
          name="description"
          content="A systematic and collaborative process designed to deliver exceptional results for every project."
        />
      </Head>
      <section
        ref={ref}
        className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
            alt="Our Approach"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-slate-900/80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-100 mb-6 leading-tight">
              Our Approach
            </h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
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
                className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-slate-50 rounded-sm font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-slate-300 hover:border-amber-500 text-slate-100 hover:text-amber-100 rounded-sm font-medium tracking-wide transition-all duration-300"
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Refined Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          style={{ opacity: scrollOpacity }}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-slate-400 text-xs font-sans tracking-widest">
              EXPLORE
            </span>
            <motion.div
              animate={{
                y: [0, 12, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="h-6 w-6 text-amber-600"
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
          </div>
        </motion.div>
      </section>
    </>
  );
}
