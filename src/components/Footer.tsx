"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900/70 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">UltraCafe</h3>
          <p className="text-gray-200 leading-relaxed">
            Experience the finest coffee, handcrafted desserts, and delicious sandwiches. Cozy atmosphere with premium taste.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <motion.li whileHover={{ x: 5 }} className="transition">
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="transition">
              <Link href="/menu">Menu</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="transition">
              <Link href="/about">About</Link>
            </motion.li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <motion.a whileHover={{ scale: 1.3, rotate: 10 }} href="#" className="transition text-white">
              <FaTwitter size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3, rotate: 10 }} href="#" className="transition text-white">
              <FaFacebookF size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3, rotate: 10 }} href="#" className="transition text-white">
              <FaInstagram size={20} />
            </motion.a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-300 mt-12">
        &copy; {new Date().getFullYear()} UltraCafe. All rights reserved.
      </p>
    </footer>
  );
}
