"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";
import ClientLogos from "@/components/home/ClientLogos";
import FeaturedProjects from "@/components/home/FeaturedProjects";
const FEATURES = [
  {
    title: "Expert Team",
    description:
      "Our licensed architects and designers bring decades of collective expertise to every project.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Innovative Solutions",
    description:
      "We blend cutting-edge technology with timeless design to craft distinctive, functional spaces.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    gradient: "from-purple-600 to-indigo-500",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous quality checks ensure every project meets the highest standards of excellence.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    gradient: "from-amber-600 to-orange-500",
  },
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const handleScroll = () => {
      const footer =
        document.querySelector("footer") ||
        document.querySelector("#contact-cta");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setShowScrollTop(
          footerRect.top <= windowHeight && footerRect.bottom >= 0
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-white text-gray-900 relative">
      {/* Creative Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Enhanced Loader with Orbiting Particles */}
              <div
                className="loader"
                style={{
                  width: "60px",
                  height: "50px",
                  background: `
                    linear-gradient(#0000 calc(1*100%/6), #f59e0b 0 calc(3*100%/6), #0000 0),
                    linear-gradient(#0000 calc(2*100%/6), #f59e0b 0 calc(4*100%/6), #0000 0),
                    linear-gradient(#0000 calc(3*100%/6), #f59e0b 0 calc(5*100%/6), #0000 0)
                  `,
                  backgroundSize: "12px 400%",
                  backgroundRepeat: "no-repeat",
                  animation: "matrix 1s infinite linear",
                }}
              />
              {/* Orbiting Particles */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-amber-500 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: Math.cos((i * 2 * Math.PI) / 3) * 50,
                    y: Math.sin((i * 2 * Math.PI) / 3) * 50,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
              {/* Subtle Ripple Effect */}
              <motion.div
                className="absolute w-24 h-24 rounded-full border-2 border-amber-500/30"
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              {/* Styled Text Overlay */}
              <motion.span
                className="mt-6 text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 tracking-wider uppercase drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  letterSpacing: "0.15em",
                }}
              >
                Crafting Spaces
              </motion.span>
            </motion.div>
            <style jsx>{`
              @keyframes matrix {
                0% {
                  background-position:
                    0% 100%,
                    50% 100%,
                    100% 100%;
                }
                100% {
                  background-position:
                    0% 0%,
                    50% 0%,
                    100% 0%;
                }
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <>
          <Hero />
          {/* Why Choose Us Section - Staggered Horizontal Flow */}
          <section className="py-24 md:py-32 overflow-hidden bg-white">
            <div className="container mx-auto px-6 max-w-6xl relative">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-gray-900">
                  Why Choose Us
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  We unite expertise, innovation, and passion to deliver
                  exceptional, tailored spaces.
                </p>
              </motion.div>

              {/* Staggered Horizontal Flow */}
              <div className="relative flex flex-col items-center">
                {FEATURES.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3,
                      ease: "easeOut",
                    }}
                    className={`relative flex items-center w-full max-w-2xl ${index % 2 === 0 ? "self-start" : "self-end"} mb-16`}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient} text-white shadow-lg ${index % 2 === 0 ? "mr-8" : "ml-8 order-1"}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Connecting Wave */}
                    {index < FEATURES.length - 1 && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.2 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3 + 0.5 }}
                      >
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 100 20"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id="waveGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                style={{
                                  stopColor: feature.gradient
                                    .split(" ")[0]
                                    .replace("from-", ""),
                                }}
                              />
                              <stop
                                offset="100%"
                                style={{
                                  stopColor: FEATURES[index + 1].gradient
                                    .split(" ")[0]
                                    .replace("from-", ""),
                                }}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <FeaturedProjects />
          <Services />
          <Testimonials />
          <ClientLogos />
          <ContactCTA id="contact-cta" />
          {/* Sticky Phone Button with Subtle Motion */}
          <motion.a
            href="tel:+251991792427"
            className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              delay: 2,
              type: "spring",
              rotate: { duration: 1.5, repeat: Infinity, delay: 2.5 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </motion.a>
          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                onClick={scrollToTop}
                className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}
    </main>
  );
}
