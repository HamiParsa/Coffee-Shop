"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHome, FaUtensils, FaInfoCircle, FaShoppingBag } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Get current path

  // Track scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Menu", href: "/menu", icon: <FaUtensils /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
  ];

  // Check if link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
            : "bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-5 md:py-7">
          {/* Premium Logo */}
          <Link href="/" className="relative group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 25, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <CiCoffeeCup className="text-4xl md:text-5xl text-amber-400 drop-shadow-glow" />
              <motion.div
                className="absolute -inset-2 bg-amber-400/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            <div className="flex items-baseline">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-thin tracking-[0.4em] text-white"
              >
                ULTRA
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-amber-400 font-bold text-3xl md:text-4xl ml-1"
              >
                .
              </motion.span>
            </div>

            {/* Underline glow */}
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </Link>

          {/* Desktop Menu - Minimal & Luxurious */}
          <div className="hidden md:flex items-center gap-12">
            {menuLinks.map((link, index) => {
              const active = isActive(link.href);
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="relative group"
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 transition-all duration-300 text-sm tracking-[0.15em] uppercase font-light ${
                      active
                        ? "text-amber-400"
                        : "text-white/60 hover:text-amber-400"
                    }`}
                  >
                    <span className={`group-hover:scale-110 transition-transform duration-300 ${
                      active ? "scale-110" : ""
                    }`}>
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                  
                  {/* Active indicator - full width underline */}
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-amber-400 transition-all duration-500 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    layoutId="activeIndicator"
                  />
                </motion.div>
              );
            })}

            {/* Order CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium text-sm tracking-wider rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
            >
              <FaShoppingBag className="text-sm" />
              Order Now
            </motion.button>
          </div>

          {/* Mobile Menu Toggle - Sleek */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-amber-400 transition-colors p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu - Cinematic */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 border-l border-white/5 shadow-2xl p-8 pt-24"
            >
              <div className="flex flex-col h-full">
                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mb-8"
                />

                {/* Navigation Links */}
                <ul className="space-y-6 flex-1">
                  {menuLinks.map((link, index) => {
                    const active = isActive(link.href);
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-4 transition-all duration-300 text-2xl font-light tracking-wider group ${
                            active
                              ? "text-amber-400"
                              : "text-white/70 hover:text-amber-400"
                          }`}
                        >
                          <span className={`transition-colors ${
                            active
                              ? "text-amber-400"
                              : "text-amber-400/50 group-hover:text-amber-400"
                          }`}>
                            {link.icon}
                          </span>
                          {link.name}
                          <motion.span
                            className={`ml-auto h-[2px] bg-amber-400/50 transition-all duration-300 ${
                              active ? "w-8" : "w-0 group-hover:w-8"
                            }`}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Mobile Order Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium text-lg tracking-wider rounded-2xl shadow-2xl shadow-amber-500/30 flex items-center justify-center gap-3"
                >
                  <FaShoppingBag />
                  Order Now
                </motion.button>

                {/* Footer decorative */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-white/20 text-xs tracking-[0.3em] text-center mt-8 font-light"
                >
                  PREMIUM COFFEE EXPERIENCE
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom glow styles (add to globals.css) */}
      <style jsx>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.3));
        }
      `}</style>
    </>
  );
}