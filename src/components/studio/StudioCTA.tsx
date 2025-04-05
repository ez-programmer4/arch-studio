"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            className="absolute -top-12 -left-12 w-24 h-24 bg-amber-100 rounded-full opacity-20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div
            className="absolute -bottom-12 -right-12 w-32 h-32 bg-gray-200 rounded-full opacity-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-12 md:p-16 border border-gray-100">
            <div className="text-center max-w-3xl mx-auto">
              <motion.span
                className="inline-block px-5 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium uppercase tracking-wide mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Let’s Collaborate
              </motion.span>
              <motion.h2
                className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Shape the Future of Space
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Partner with us to transform your architectural vision into reality with precision and innovation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}