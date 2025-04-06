"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import Head from "next/head";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Professional color palette
  const colors = {
    primary: "rgb(30 41 59)", // slate-800 (deep navy-blue)
    secondary: "rgb(100 116 139)", // slate-500 (medium slate)
    accent: "rgb(180 83 9)", // amber-700 (warm bronze)
    light: "rgb(241 245 249)", // slate-100 (soft white)
    dark: "rgb(15 23 42)", // slate-900 (near black)
  };

  return (
    <>
      <Head>
        <title>Home | ArchStudio</title>
        <meta
          name="description"
          content="We craft exceptional environments that fuse innovation, functionality, and timeless elegance."
        />
      </Head>
      <section
        ref={sectionRef}
        className="relative h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden"
      >
        <motion.div className="absolute inset-0 z-0" style={{ y: yBackground }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source
              src="https://videos.pexels.com/video-files/2835998/2835998-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
            <Image
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
              alt="Architectural Masterpiece"
              fill
              className="object-cover opacity-80"
              priority
              sizes="100vw"
              quality={90}
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/90" />
        </motion.div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-100 mb-6 leading-tight"
            >
              Crafting <span className="text-amber-600">Timeless</span> Spaces
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We craft exceptional environments that fuse innovation,
              functionality, and timeless elegance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12"
            >
              <Link
                href="/studio"
                className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-slate-50 rounded-sm font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
              >
                See Our Studio
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-slate-300 hover:border-amber-500 text-slate-100 hover:text-amber-100 rounded-sm font-medium tracking-wide transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
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
            <div className="w-4 h-10 relative">
              <motion.div
                className="w-px h-8 bg-slate-400/80 absolute left-1/2 -translate-x-1/2"
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.8, 1, 0.8],
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.div
                className="w-1.5 h-1.5 bg-amber-600 rounded-sm absolute left-1/2 top-2 -translate-x-1/2"
                animate={{
                  y: [0, 8, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 2.2,
                    delay: 0.3,
                  },
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
