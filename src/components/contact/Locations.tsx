"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const locations = [
  {
    city: "New York",
    address: "123 Design Street, Manhattan, NY 10001",
    phone: "+1 (212) 555-0123",
    email: "ny@ArchStudio.com",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s",
  },
  {
    city: "London",
    address: "456 Creative Lane, Shoreditch, London EC2A 4PB",
    phone: "+44 20 7123 4567",
    email: "london@ArchStudio.com",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.838682547808!2d-0.08178968405305367!3d51.52877197955345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034d2d8b9fcd%3A0x2d0d3baf2b6c3b6c!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s",
  },
  {
    city: "Tokyo",
    address: "789 Design District, Shibuya-ku, Tokyo 150-0002",
    phone: "+81 3-1234-5678",
    email: "tokyo@ArchStudio.com",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da93?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030555028!2d139.69814977600002!3d35.68948737699999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd0d6b1ba1f%3A0x1c0d7592f541141!2sTokyo%2C%20Japan!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s",
  },
];

export default function Locations() {
  const cardVariants = {
    hover: { y: -10, transition: { duration: 0.3 } },
    initial: { y: 0 },
  };

  return (
    <section
      id="locations"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Our Global Studios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our world-class design studios, strategically located to
            serve you better. Each office embodies our commitment to innovation
            and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform-gpu transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={location.image}
                  alt={`${location.city} studio exterior`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">
                  {location.city}
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-sm leading-relaxed">{location.address}</p>
                  <p>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-sm hover:text-amber-600 transition-colors duration-300"
                      aria-label={`Call our ${location.city} office`}
                    >
                      {location.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${location.email}`}
                      className="text-sm hover:text-amber-600 transition-colors duration-300"
                      aria-label={`Email our ${location.city} office`}
                    >
                      {location.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="h-64 bg-gray-100">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${location.city} studio location`}
                  className="grayscale-[0.3] contrast-125"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
