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

// Social links with updated SVG paths
const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "M12 2a10 10 0 00-10 10c0 4.42 3.58 8 8 8s8-3.58 8-8a10 10 0 00-10-10zm0 4a6 6 0 110 12 6 6 0 010-12zm4-4v2m-2 12v2",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-2 14h-3v-4a2 2 0 00-4 0v4H7V9h3v1.5a3 3 0 016 0V17zm-9-9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z",
  },
];

export default function StylishNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu and reset submenu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveSubMenu(null);
  }, [pathname]);

  // Handle body overflow for mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Animation variants
  const navItemVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.05, color: "#f59e0b", transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 }, // Fixed: Added colon here
    hover: {
      scale: 1.05,
      boxShadow: "0 6px 20px rgba(245, 158, 11, 0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-serif font-bold text-amber-500 tracking-tight relative"
          >
            StudioVibe
            <motion.span
              className="absolute -right-1 -top-1 w-2 h-2 bg-amber-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => item.subMenu && setActiveSubMenu(item.name)}
              onMouseLeave={() => item.subMenu && setActiveSubMenu(null)}
            >
              <Link
                href={item.href}
                className={`text-sm lg:text-base font-medium uppercase tracking-wide ${
                  pathname === item.href
                    ? "text-amber-500"
                    : "text-gray-700 hover:text-amber-500"
                }`}
              >
                {item.name}
              </Link>
              {item.subMenu && activeSubMenu === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md border border-gray-100 p-2 w-48"
                >
                  {item.subMenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-500 rounded transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: pathname === item.href ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Get Started Button */}
        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          className="hidden md:block"
        >
          <Link
            href="/contact"
            className="px-4 py-2 lg:px-6 lg:py-2.5 bg-amber-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-amber-600 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.div className="w-6 h-6 relative">
            <motion.span
              className="absolute w-5 h-0.5 bg-amber-500 rounded"
              style={{ top: "6px", left: "2px" }}
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute w-5 h-0.5 bg-amber-500 rounded"
              style={{ top: "12px", left: "2px" }}
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute w-5 h-0.5 bg-amber-500 rounded"
              style={{ top: "18px", left: "2px" }}
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
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
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white z-50 shadow-lg"
            >
              <div className="h-full flex flex-col">
                <div className="p-4 flex justify-between items-center border-b">
                  <Link href="/" className="text-xl font-bold text-amber-500">
                    StudioVibe
                  </Link>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    className="p-2"
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
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div
                        className={`flex justify-between items-center p-3 rounded-lg text-lg ${
                          pathname === item.href
                            ? "bg-amber-50 text-amber-500"
                            : "text-gray-700 hover:bg-amber-50"
                        }`}
                        onClick={() =>
                          item.subMenu &&
                          setActiveSubMenu(
                            activeSubMenu === item.name ? null : item.name
                          )
                        }
                      >
                        <Link
                          href={item.href}
                          className="w-full"
                          onClick={() => !item.subMenu && setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.subMenu && (
                          <motion.svg
                            className="w-5 h-5 text-amber-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{
                              rotate: activeSubMenu === item.name ? 180 : 0,
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
                      </div>
                      {item.subMenu && activeSubMenu === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block p-3 rounded-lg text-sm ${
                                pathname === subItem.href
                                  ? "bg-amber-50 text-amber-500"
                                  : "text-gray-600 hover:bg-amber-50"
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
                <div className="p-6 space-y-6 border-t">
                  <Link
                    href="/contact"
                    className="block px-4 py-3 bg-amber-500 text-white text-center rounded-full font-medium hover:bg-amber-600 transition-colors"
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
                        whileHover={{ scale: 1.2, y: -2 }}
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
