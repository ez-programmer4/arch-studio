"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Head from "next/head";

export default function ContactHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <>
      <Head>
        <title>Contact | ArchStudio</title>
        <meta
          name="description"
          content="Get in touch to discuss your vision and discover how we can bring it to life."
        />
      </Head>
      <section
        ref={ref}
        className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900"
      >
        <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] bg-cover bg-center opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: textY }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-100 mb-6 leading-tight"
          >
            Let's Create <span className="text-amber-600">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Get in touch to discuss your vision and discover how we can bring it
            to life
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12"
          >
            <Link
              href="#contact-form"
              className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-slate-50 rounded-sm font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start a Project
            </Link>
            <Link
              href="#locations"
              className="px-8 py-3 border border-slate-300 hover:border-amber-500 text-slate-100 hover:text-amber-100 rounded-sm font-medium tracking-wide transition-all duration-300"
            >
              Visit Our Studio
            </Link>
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
