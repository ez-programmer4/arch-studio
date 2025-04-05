"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Head from "next/head";

export default function StudioHero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      <Head>
        <title>Studio | ArchStudio</title>
        <meta
          name="description"
          content="Crafting spaces that redefine skylines with innovation and elegance."
        />
      </Head>
      <section
        ref={sectionRef}
        className="relative h-[85vh] min-h-[600px] bg-black overflow-hidden"
      >
        <motion.div className="absolute inset-0 z-0" style={{ y: yBackground }}>
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
            alt="Architectural Studio Background"
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </motion.div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight"
            >
              <span className="block text-amber-400">Architectural</span>
              <span className="block">Visionaries</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-amber-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Crafting spaces that redefine skylines with innovation and
              elegance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12"
            >
              <a
                href="/projects"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg"
              >
                Discover Our Projects
              </a>
              <a
                href="/contact"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-amber-400 text-amber-100 rounded-full font-semibold hover:bg-amber-400/20 transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
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
