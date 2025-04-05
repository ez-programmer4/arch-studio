"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-amber-100 rounded-full opacity-20" />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-amber-200 rounded-full opacity-10" />

          <div className="bg-white rounded-3xl shadow-xl p-12 md:p-16 border border-gray-100">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="inline-block px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">
                  Our Process
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Let’s Begin Your Design Journey
              </h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Experience our unique approach to architectural and interior
                design. We’ll guide you through every step of the process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Journey
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/approach"
                  className="inline-flex items-center px-8 py-4 bg-white text-amber-500 rounded-lg font-medium hover:bg-amber-50 transition-all duration-300 border border-amber-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
