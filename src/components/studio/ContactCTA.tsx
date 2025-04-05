"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-12 md:p-16 border border-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-5 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
              Let's Collaborate
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Shape the Future of Space
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Partner with us to transform your architectural vision into
              reality with precision and innovation.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
