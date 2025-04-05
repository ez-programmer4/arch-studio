"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What design services do you offer?",
    answer:
      "We provide full-service architecture and interior design, including concept development, space planning, 3D visualization, material selection, and project execution for residential, commercial, and hospitality spaces.",
  },
  {
    question: "How do you blend architecture and interior design?",
    answer:
      "Our integrated approach ensures seamless harmony between structure and interiors. We design spaces where form, function, and aesthetics align, from exterior facades to custom furnishings.",
  },
  {
    question: "What’s your timeline for a typical project?",
    answer:
      "Timelines depend on scale, but a combined architecture and interior design project typically spans 12–16 weeks for design phases, with construction varying from 4–12 months based on complexity.",
  },
  {
    question: "How do you approach material and furniture selection?",
    answer:
      "We curate materials and furnishings based on durability, aesthetics, and sustainability. We collaborate with artisans and global suppliers to create bespoke, timeless interiors tailored to your vision.",
  },
  {
    question: "Can you manage both renovation and new builds?",
    answer:
      "Yes, we excel in both. For renovations, we preserve character while modernizing spaces. For new builds, we craft innovative designs from the ground up, tailored to your lifestyle or brand.",
  },
  {
    question: "How do you ensure a project stays on budget?",
    answer:
      "We prioritize transparency with detailed cost breakdowns and real-time updates. Our team leverages value engineering and strategic sourcing to deliver luxury within your financial framework.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-4 py-2 bg-amber-50 text-amber-500 rounded-full text-sm font-medium">
              FAQ
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our design process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full text-left focus:outline-none" // Removed focus:ring classes
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-amber-500 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-100 transition-colors duration-300">
                    {activeIndex === index ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>

              <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
