"use client";

import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your goals, target audience, and unique requirements through in-depth consultation and research.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our team develops a comprehensive strategy that aligns with your objectives and sets the foundation for success.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create innovative designs that combine aesthetics with functionality, ensuring an exceptional user experience.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Using cutting-edge technologies, we build robust solutions that perform flawlessly across all platforms.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "After thorough testing and refinement, we launch your project with precision and provide ongoing support.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 tracking-tight">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A systematic approach that ensures quality and innovation at every
            step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-amber-500 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
