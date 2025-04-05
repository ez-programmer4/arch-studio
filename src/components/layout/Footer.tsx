"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  studio: [
    { name: "About Us", href: "/studio" },
    { name: "Our Team", href: "/studio#team" },
    { name: "Our Values", href: "/studio#values" },
  ],
  projects: [
    { name: "Featured Projects", href: "/projects" },
    { name: "All Projects", href: "/projects" },
  ],
  approach: [
    { name: "Our Process", href: "/approach#process" },
    { name: "Methodology", href: "/approach#methodology" },
    { name: "Values", href: "/approach#values" },
  ],

  blog: [
    { name: "Articles", href: "/blog" },
    { name: "Featured Posts", href: "/blog" },
    { name: "All Posts", href: "/blog" },
  ],
  contact: [
    { name: "Get in Touch", href: "/contact" },
    { name: "Locations", href: "/contact#locations" },
    { name: "Careers", href: "/contact#careers" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-1.013-1.018-1.013-1.018 0-1.174.792-1.174 1.98v4.637h-3v-11h3v1.765c.517-.8 1.179-1.017 1.924-1.017 1.412 0 2.515.895 2.515 2.818v6.434z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const linkVariants = {
    hover: { y: -2, transition: { duration: 0.3, ease: "easeOut" } },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="text-3xl font-serif font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              ArchStudio
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Crafting exceptional spaces that inspire, innovate, and elevate
              the human experience through timeless design.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-5 capitalize tracking-wide">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.div variants={linkVariants} whileHover="hover">
                      <Link
                        href={link.href}
                        className="text-gray-300 text-sm hover:text-amber-400 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ArchStudio. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  href="/"
                  className="text-gray-400 text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  href="/"
                  className="text-gray-400 text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Decorative Element */}
      <div className="h-1 bg-gradient-to-r from-amber-500/20 via-amber-500/40 to-amber-500/20" />
    </footer>
  );
}
