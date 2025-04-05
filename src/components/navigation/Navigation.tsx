"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Navigation data
const navigation = [
  { name: "Home", href: "/" },
  { name: "Studio", href: "/studio" },
  {
    name: "Projects",
    href: "/projects",
    subMenu: [
      { name: "Featured", href: "/projects/featured" },
      { name: "Residential", href: "/projects/residential" },
      { name: "Commercial", href: "/projects/commercial" },
    ],
  },
  { name: "Approach", href: "/approach" },
  { name: "Blog", href: "/blog" },
];

// Social links
const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "M16 8a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm-4-6h8a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2V6a2 2 0 012-2zm4 0v2m0 12v2",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-2 16h-4v-4a2 2 0 00-4 0v4H6V10h4v1.5a4 4 0 018 0V18zM8 8a2 2 0 110-4 2 2 0 010 4z",
  },
];

export default function StylishNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setActiveSubMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Animation variants for nav items
  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.05, color: "#f59e0b" }, // amber-500
  };

  // Animation for Get Started button
  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.1,
      boxShadow: "0 4px 15px rgba(245, 158, 11, 0.3)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Link
            href="/"
            className="text-3xl font-serif font-bold text-amber-500 tracking-tight"
          >
            <span className="relative z-10">StudioVibe</span>
            <motion.span
              className="absolute -right-2 -top-2 w-2.5 h-2.5 bg-amber-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </Link>
        </motion.div>

        {/* Desktop/Tablet Navigation (hidden on mobile) */}
        <div className="hidden sm:flex items-center justify-center flex-1 gap-10">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <Link
                href={item.href}
                className={`text-base font-medium uppercase tracking-widest ${
                  pathname === item.href
                    ? "text-amber-500"
                    : "text-gray-800 hover:text-amber-500"
                }`}
                onMouseEnter={() => item.subMenu && setActiveSubMenu(item.name)}
                onMouseLeave={() => item.subMenu && setActiveSubMenu(null)}
              >
                {item.name}
              </Link>
              {item.subMenu && activeSubMenu === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-xl rounded-lg border border-gray-100 p-3 min-w-[160px]"
                >
                  {item.subMenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-500 rounded transition-colors duration-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-0.5 bg-amber-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: pathname === item.href ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Get Started Button (aligned right) */}
        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          className="hidden sm:block"
        >
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-amber-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-amber-600 transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Mobile Toggle (Fries Style) */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden w-12 h-12 flex items-center justify-center rounded-full hover:bg-amber-50 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.div className="w-6 h-6 relative">
            <motion.span
              className="absolute w-5 h-1 bg-amber-500 rounded-sm"
              style={{ top: "4px", left: "2px" }}
              animate={
                isOpen
                  ? { rotate: 45, y: 5, x: 2, width: 20 }
                  : { rotate: 0, y: 0, x: 0, width: 20 }
              }
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute w-4 h-1 bg-amber-500 rounded-sm"
              style={{ top: "10px", left: "4px" }}
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute w-5 h-1 bg-amber-500 rounded-sm"
              style={{ top: "16px", left: "2px" }}
              animate={
                isOpen
                  ? { rotate: -45, y: -5, x: 2, width: 20 }
                  : { rotate: 0, y: 0, x: 0, width: 20 }
              }
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="sm:hidden fixed inset-y-0 right-0 w-full max-w-[80vw] bg-white z-50 shadow-xl"
            >
              <div className="h-full flex flex-col">
                <div className="p-4 flex justify-between items-center border-b border-gray-100">
                  <Link href="/" className="text-xl font-bold text-amber-500">
                    StudioVibe
                  </Link>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-amber-50"
                  >
                    <svg
                      className="w-6 h-6 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex justify-between items-center p-4 rounded-lg text-lg font-medium ${
                          pathname === item.href
                            ? "bg-amber-50 text-amber-500"
                            : "text-gray-700 hover:bg-amber-50 hover:text-amber-500"
                        }`}
                        onClick={() => !item.subMenu && setIsOpen(false)}
                      >
                        {item.name}
                        {item.subMenu && (
                          <motion.svg
                            className="w-5 h-5 text-amber-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{
                              rotate: activeSubMenu === item.name ? 180 : 0,
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveSubMenu(
                                activeSubMenu === item.name ? null : item.name
                              );
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        )}
                      </Link>
                      {item.subMenu && activeSubMenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-6 mt-2 space-y-2"
                        >
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block p-3 rounded-lg text-sm ${
                                pathname === subItem.href
                                  ? "bg-amber-50 text-amber-500"
                                  : "text-gray-600 hover:bg-amber-50 hover:text-amber-500"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
                <div className="p-6 space-y-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="block p-4 bg-amber-500 text-white text-center rounded-full font-medium shadow-md hover:bg-amber-600 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                  <div className="flex justify-center gap-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="text-amber-500 hover:text-amber-600"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.icon} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
