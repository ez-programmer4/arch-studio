"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,rgba(0,0,0,0.5)_100%)]" />
        <motion.div
          className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.span
            className="inline-block px-5 py-2 bg-amber-50/10 text-amber-400 rounded-full text-sm font-medium uppercase tracking-wide mb-6 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Build Together
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to Shape Your Vision?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Collaborate with us to turn your architectural dreams into reality
            with precision and creativity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-10 py-4 bg-amber-500 text-white rounded-full font-medium overflow-hidden group shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center font-semibold">
                  Get in Touch
                  <svg
                    className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7m0 0l-7 7m7-7H5"
                    />
                  </svg>
                </span>
                <motion.span
                  className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
