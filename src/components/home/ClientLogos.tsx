// src/components/home/ClientLogos.tsx
"use client";

import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/data/clientLogos";
import { LogoText } from "@/components/ui/LogoText";

export const ClientLogos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-center text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Trusted Clients
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {CLIENT_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <LogoText text={logo.displayName} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
