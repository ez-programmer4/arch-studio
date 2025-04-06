"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Architectural Design",
      description:
        "Delivering innovative architectural solutions that seamlessly integrate form, function, and sustainability.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      link: "/approach",
      gradient: "from-amber-600 to-amber-700",
    },
    {
      title: "Interior Design",
      description:
        "Crafting refined interiors that elevate aesthetics while prioritizing comfort and practicality.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      link: "/approach",
      gradient: "from-amber-600 to-amber-700",
    },
    {
      title: "Space Planning",
      description:
        "Optimizing spatial layouts with strategic precision to enhance functionality and flow.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      link: "/approach",
      gradient: "from-amber-600 to-amber-700",
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 overflow-hidden relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.02)_0,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tailored solutions designed to transform visions into exceptional
            spaces
          </p>
        </motion.div>

        {/* Services List */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${service.gradient} text-white mb-6`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors duration-300 inline-flex items-center group"
              >
                Learn more
                <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
