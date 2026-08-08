"use client";

import Link from "next/link";
import { motion , AnimatePresence  } from "framer-motion";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const socialIcons = [
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
    { icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
    { icon: FaFacebookF, href: "#", color: "hover:text-blue-600" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-600" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "123 Coffee Street, Milan, Italy" },
    { icon: FaPhoneAlt, text: "+39 123 456 7890" },
    { icon: FaEnvelope, text: "hello@ultracafe.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black text-white/80 overflow-hidden">
      {/* Premium gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      
      {/* Decorative glow effect */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 20, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CiCoffeeCup className="text-3xl text-amber-400" />
              </motion.div>
              <span className="text-2xl font-light tracking-[0.3em] text-white">
                ULTRA
                <span className="text-amber-400 font-bold">.</span>
              </span>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Experience the finest coffee, handcrafted desserts, and delicious 
              sandwiches in an atmosphere of pure elegance.
            </p>

            {/* Social Icons with Glass Effect */}
            <div className="flex gap-3 mt-6">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/5 flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 hover:border-amber-400/30 hover:bg-white/10`}
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-medium text-sm tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-amber-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-amber-400/50 transition-all duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-white font-medium text-sm tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex items-start gap-3 text-white/40 text-sm group"
                >
                  <item.icon className="text-amber-400/60 mt-0.5 group-hover:text-amber-400 transition-colors" />
                  <span className="group-hover:text-white/70 transition-colors">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-white font-medium text-sm tracking-[0.2em] uppercase mb-6">
              Newsletter
            </h4>
            <p className="text-white/40 text-sm mb-4">
              Subscribe for exclusive offers and coffee stories.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 pr-12 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-amber-400/50 transition-all duration-300"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1 top-1 bg-gradient-to-r from-amber-500 to-orange-500 text-black w-9 h-9 rounded-full flex items-center justify-center"
              >
                <FaArrowRight className="text-xs" />
              </motion.button>
            </form>

            {/* Success message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-emerald-400 text-xs mt-2"
                >
                  ✓ Subscribed successfully!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Bar - Premium Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/20 text-xs tracking-[0.2em]">
            &copy; {new Date().getFullYear()} ULTRA. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-white/20 text-xs tracking-[0.15em]">
            <Link href="/privacy" className="hover:text-white/40 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/40 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white/40 transition-colors">
              Cookies
            </Link>
          </div>

          {/* Decorative dot */}
          <div className="hidden md:flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-amber-400/30" />
            <span className="w-1 h-1 rounded-full bg-amber-400/20" />
            <span className="w-1 h-1 rounded-full bg-amber-400/10" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}