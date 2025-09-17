"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHome, FaUtensils, FaInfoCircle } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: "Home", href: "/", icon: <FaHome className="text-xl" /> },
    { name: "Menu", href: "/menu", icon: <FaUtensils className="text-xl" /> },
    { name: "About", href: "/about", icon: <FaInfoCircle className="text-xl" /> },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md transition-colors duration-500 shadow-lg bg-gray-900/80">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-white flex items-center gap-2">
          <CiCoffeeCup className="text-3xl " />
          UltraCafe
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-amber-400 transition-colors hover:scale-105 flex items-center gap-1"
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-900/95 w-full absolute top-full left-0 shadow-lg"
          >
            <ul className="flex flex-col gap-4 p-6 text-white">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-lg hover:text-amber-400 transition-colors"
                  >
                    {link.icon} {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
